package ac.dgu.admissions.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.EnableMongoAuditing;

/**
 * Enables Spring Data MongoDB auditing so that @CreatedDate
 * on Application.submittedAt is automatically populated on save.
 */
@Configuration
@EnableMongoAuditing
public class MongoConfig {
    // Spring Boot auto-configures the MongoClient from application.yml.
    // This class only needs to enable auditing.
}
