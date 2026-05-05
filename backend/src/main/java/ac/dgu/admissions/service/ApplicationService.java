package ac.dgu.admissions.service;

import ac.dgu.admissions.dto.ApplicationRequest;
import ac.dgu.admissions.dto.ApplicationResponse;
import ac.dgu.admissions.exception.ApplicationNotFoundException;
import ac.dgu.admissions.exception.DuplicateApplicationException;
import ac.dgu.admissions.model.Application;
import ac.dgu.admissions.repository.ApplicationRepository;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.logging.Logger;

@Service
public class ApplicationService {

    private static final Logger log = Logger.getLogger(ApplicationService.class.getName());

    private final ApplicationRepository repository;

    public ApplicationService(ApplicationRepository repository) {
        this.repository = repository;
    }

    public ApplicationResponse submit(ApplicationRequest request) {
        String email = request.getEmail().trim().toLowerCase();
        String phone = request.getPhone().trim();

        if (repository.existsByEmail(email)) {
            throw new DuplicateApplicationException(
                "An application with this email address already exists.");
        }
        if (repository.existsByPhone(phone)) {
            throw new DuplicateApplicationException(
                "An application with this phone number already exists.");
        }

        Application application = new Application();
        application.setFullName(request.getFullName().trim());
        application.setEmail(email);
        application.setPhone(phone);
        application.setCourse(request.getCourse().trim());
        application.setQualification(request.getQualification().trim());
        application.setCity(request.getCity().trim());
        application.setMessage(request.getMessage() != null ? request.getMessage().trim() : null);

        Application saved = repository.save(application);
        log.info("New application saved — id=" + saved.getId() + ", email=" + saved.getEmail());

        return ApplicationResponse.from(saved);
    }

    public List<ApplicationResponse> findAll() {
        return repository.findAll()
                .stream()
                .sorted(Comparator.comparing(
                    Application::getSubmittedAt,
                    Comparator.nullsLast(Comparator.reverseOrder())
                ))
                .map(ApplicationResponse::from)
                .toList();
    }

    public ApplicationResponse findById(String id) {
        Application app = repository.findById(id)
                .orElseThrow(() -> new ApplicationNotFoundException(id));
        return ApplicationResponse.from(app);
    }

    public void delete(String id) {
        if (!repository.existsById(id)) {
            throw new ApplicationNotFoundException(id);
        }
        repository.deleteById(id);
        log.info("Application deleted — id=" + id);
    }
}
