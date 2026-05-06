package ac.dgu.admissions.exception;

import ac.dgu.admissions.dto.ApiResponse;
import com.mongodb.MongoException;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;

@RestControllerAdvice
public class GlobalExceptionHandler {

    private static final Logger log = Logger.getLogger(GlobalExceptionHandler.class.getName());

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponse<Void>> handleValidationErrors(
            MethodArgumentNotValidException ex) {

        Map<String, List<String>> fieldErrors = new HashMap<>();
        for (FieldError fe : ex.getBindingResult().getFieldErrors()) {
            fieldErrors.computeIfAbsent(fe.getField(), k -> new ArrayList<>())
                       .add(fe.getDefaultMessage());
        }
        log.warning("Validation failed: " + fieldErrors);
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(ApiResponse.validationError(
                    "Validation failed. Please check the highlighted fields.", fieldErrors));
    }

    @ExceptionHandler(DuplicateApplicationException.class)
    public ResponseEntity<ApiResponse<Void>> handleDuplicate(DuplicateApplicationException ex) {
        log.warning("Duplicate application: " + ex.getMessage());
        return ResponseEntity
                .status(HttpStatus.CONFLICT)
                .body(ApiResponse.error(ex.getMessage()));
    }

    @ExceptionHandler(ApplicationNotFoundException.class)
    public ResponseEntity<ApiResponse<Void>> handleNotFound(ApplicationNotFoundException ex) {
        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(ApiResponse.error(ex.getMessage()));
    }

    /** MongoDB connection / query errors */
    @ExceptionHandler({MongoException.class, DataAccessException.class})
    public ResponseEntity<ApiResponse<Void>> handleMongoError(Exception ex) {
        log.severe("MongoDB error: " + ex.getMessage());
        return ResponseEntity
                .status(HttpStatus.SERVICE_UNAVAILABLE)
                .body(ApiResponse.error(
                    "Database connection error. Please check MONGODB_URI environment variable."));
    }

    /** Catch-all */
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiResponse<Void>> handleGeneric(Exception ex) {
        log.severe("Unexpected error [" + ex.getClass().getSimpleName() + "]: " + ex.getMessage());
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(ApiResponse.error("An unexpected error occurred. Please try again later."));
    }
}
