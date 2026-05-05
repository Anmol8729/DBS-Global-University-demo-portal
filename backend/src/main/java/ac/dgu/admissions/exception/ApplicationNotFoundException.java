package ac.dgu.admissions.exception;

/**
 * Thrown when a requested application ID does not exist in the database.
 */
public class ApplicationNotFoundException extends RuntimeException {

    public ApplicationNotFoundException(String id) {
        super("Application not found with id: " + id);
    }
}
