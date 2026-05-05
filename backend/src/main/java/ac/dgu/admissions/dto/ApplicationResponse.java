package ac.dgu.admissions.dto;

import ac.dgu.admissions.model.Application;

import java.time.Instant;

public class ApplicationResponse {

    private String id;
    private String fullName;
    private String email;
    private String phone;
    private String course;
    private String qualification;
    private String city;
    private String message;
    private Instant submittedAt;
    private String status;

    public ApplicationResponse() {}

    public static ApplicationResponse from(Application app) {
        ApplicationResponse r = new ApplicationResponse();
        r.id            = app.getId();
        r.fullName      = app.getFullName();
        r.email         = app.getEmail();
        r.phone         = app.getPhone();
        r.course        = app.getCourse();
        r.qualification = app.getQualification();
        r.city          = app.getCity();
        r.message       = app.getMessage();
        r.submittedAt   = app.getSubmittedAt();
        r.status        = app.getStatus() != null ? app.getStatus().name() : null;
        return r;
    }

    public String getId()            { return id; }
    public String getFullName()      { return fullName; }
    public String getEmail()         { return email; }
    public String getPhone()         { return phone; }
    public String getCourse()        { return course; }
    public String getQualification() { return qualification; }
    public String getCity()          { return city; }
    public String getMessage()       { return message; }
    public Instant getSubmittedAt()  { return submittedAt; }
    public String getStatus()        { return status; }
}
