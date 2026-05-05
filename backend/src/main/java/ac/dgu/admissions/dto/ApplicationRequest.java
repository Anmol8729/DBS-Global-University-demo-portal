package ac.dgu.admissions.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public class ApplicationRequest {

    @NotBlank(message = "Full name is required")
    @Size(min = 2, max = 100, message = "Full name must be between 2 and 100 characters")
    private String fullName;

    @NotBlank(message = "Email address is required")
    @Email(message = "Please provide a valid email address")
    private String email;

    @NotBlank(message = "Phone number is required")
    @Pattern(
        regexp = "^[+]?[0-9]{10,15}$",
        message = "Phone number must be 10–15 digits (optionally starting with +)"
    )
    private String phone;

    @NotBlank(message = "Course selection is required")
    private String course;

    @NotBlank(message = "Qualification is required")
    private String qualification;

    @NotBlank(message = "City is required")
    @Size(max = 100, message = "City name must not exceed 100 characters")
    private String city;

    @Size(max = 1000, message = "Message must not exceed 1000 characters")
    private String message;

    public ApplicationRequest() {}

    public String getFullName()      { return fullName; }
    public String getEmail()         { return email; }
    public String getPhone()         { return phone; }
    public String getCourse()        { return course; }
    public String getQualification() { return qualification; }
    public String getCity()          { return city; }
    public String getMessage()       { return message; }

    public void setFullName(String fullName)           { this.fullName = fullName; }
    public void setEmail(String email)                 { this.email = email; }
    public void setPhone(String phone)                 { this.phone = phone; }
    public void setCourse(String course)               { this.course = course; }
    public void setQualification(String qualification) { this.qualification = qualification; }
    public void setCity(String city)                   { this.city = city; }
    public void setMessage(String message)             { this.message = message; }
}
