package ac.dgu.admissions.dto;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.time.Instant;
import java.util.List;
import java.util.Map;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class ApiResponse<T> {

    private boolean success;
    private String message;
    private T data;
    private Map<String, List<String>> errors;
    private Instant timestamp = Instant.now();

    public ApiResponse() {}

    private ApiResponse(boolean success, String message, T data, Map<String, List<String>> errors) {
        this.success   = success;
        this.message   = message;
        this.data      = data;
        this.errors    = errors;
        this.timestamp = Instant.now();
    }

    public static <T> ApiResponse<T> ok(String message, T data) {
        return new ApiResponse<>(true, message, data, null);
    }

    public static <T> ApiResponse<T> ok(String message) {
        return new ApiResponse<>(true, message, null, null);
    }

    public static <T> ApiResponse<T> error(String message) {
        return new ApiResponse<>(false, message, null, null);
    }

    public static <T> ApiResponse<T> validationError(String message, Map<String, List<String>> errors) {
        return new ApiResponse<>(false, message, null, errors);
    }

    public boolean isSuccess()                      { return success; }
    public String getMessage()                      { return message; }
    public T getData()                              { return data; }
    public Map<String, List<String>> getErrors()    { return errors; }
    public Instant getTimestamp()                   { return timestamp; }
}
