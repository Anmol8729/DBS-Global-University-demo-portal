package ac.dgu.admissions.repository;

import ac.dgu.admissions.model.Application;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * Spring Data MongoDB repository for Application documents.
 * All CRUD operations are auto-generated; custom finders are declared below.
 */
@Repository
public interface ApplicationRepository extends MongoRepository<Application, String> {

    /** Used to detect duplicate email submissions. */
    boolean existsByEmail(String email);

    /** Used to detect duplicate phone submissions. */
    boolean existsByPhone(String phone);

    /** Fetch a single application by email (e.g. for admin lookup). */
    Optional<Application> findByEmail(String email);
}
