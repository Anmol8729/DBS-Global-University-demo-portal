package ac.dgu.admissions.model;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;

@Document(collection = "applications")
public class Application {

    @Id
    private String id;

    private String fullName;

    @Indexed(unique = true)
    private String email;

    @Indexed(unique = true)
    private String phone;

    private String course;
    private String qualification;
    private String city;
    private String message;

    @CreatedDate
    private Instant submittedAt;

    private ApplicationStatus status = ApplicationStatus.PENDING;

    public enum ApplicationStatus {
        PENDING, REVIEWED, ACCEPTED, REJECTED
    }

    public Application() {}

    // Getters
    public String getId()            { return id; }
    public String getFullName()      { return fullName; }
    public String getEmail()         { return email; }
    public String getPhone()         { return phone; }
    public String getCourse()        { return course; }
    public String getQualification() { return qualification; }
    public String getCity()          { return city; }
    public String getMessage()       { return message; }
    public Instant getSubmittedAt()  { return submittedAt; }
    public ApplicationStatus getStatus() { return status; }

    // Setters
    public void setId(String id)                       { this.id = id; }
    public void setFullName(String fullName)           { this.fullName = fullName; }
    public void setEmail(String email)                 { this.email = email; }
    public void setPhone(String phone)                 { this.phone = phone; }
    public void setCourse(String course)               { this.course = course; }
    public void setQualification(String qualification) { this.qualification = qualification; }
    public void setCity(String city)                   { this.city = city; }
    public void setMessage(String message)             { this.message = message; }
    public void setSubmittedAt(Instant submittedAt)    { this.submittedAt = submittedAt; }
    public void setStatus(ApplicationStatus status)    { this.status = status; }
}
