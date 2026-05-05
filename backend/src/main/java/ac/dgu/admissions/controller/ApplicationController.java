package ac.dgu.admissions.controller;

import ac.dgu.admissions.dto.ApiResponse;
import ac.dgu.admissions.dto.ApplicationRequest;
import ac.dgu.admissions.dto.ApplicationResponse;
import ac.dgu.admissions.service.ApplicationService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/applications")
public class ApplicationController {

    private final ApplicationService service;

    public ApplicationController(ApplicationService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<ApplicationResponse>> submit(
            @Valid @RequestBody ApplicationRequest request) {

        ApplicationResponse response = service.submit(request);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(ApiResponse.ok(
                    "Your application has been submitted successfully! Our admissions team will contact you shortly.",
                    response));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<ApplicationResponse>>> getAll() {
        return ResponseEntity.ok(
            ApiResponse.ok("Applications retrieved successfully.", service.findAll()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<ApplicationResponse>> getById(@PathVariable String id) {
        return ResponseEntity.ok(
            ApiResponse.ok("Application retrieved successfully.", service.findById(id)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> delete(@PathVariable String id) {
        service.delete(id);
        return ResponseEntity.ok(ApiResponse.ok("Application deleted successfully."));
    }
}
