package ac.dgu.admissions.exception;

/**
 * Thrown when a submission is attempted with an email or phone
 * that already exists in the database.
 */
public class DuplicateApplicationException extends RuntimeException {

    public DuplicateApplicationException(String message) {
        super(message);
    }
}
