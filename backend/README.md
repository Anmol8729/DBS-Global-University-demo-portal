# DBS Global University — Admissions Backend

A clean, production-ready **Spring Boot 3** REST API for managing student admission applications. Built with **MongoDB** for data persistence, **Bean Validation** for input validation, and **CORS** support for frontend integration.

---

## 📁 Project Structure

```
backend/
├── src/main/java/ac/dgu/admissions/
│   ├── AdmissionsApplication.java          # Main Spring Boot entry point
│   ├── config/
│   │   ├── CorsConfig.java                 # CORS configuration
│   │   └── MongoConfig.java                # MongoDB auditing config
│   ├── controller/
│   │   └── ApplicationController.java      # REST endpoints
│   ├── dto/
│   │   ├── ApiResponse.java                # Generic API envelope
│   │   ├── ApplicationRequest.java         # Inbound DTO with validation
│   │   └── ApplicationResponse.java        # Outbound DTO
│   ├── exception/
│   │   ├── ApplicationNotFoundException.java
│   │   ├── DuplicateApplicationException.java
│   │   └── GlobalExceptionHandler.java     # Centralized error handling
│   ├── model/
│   │   └── Application.java                # MongoDB document entity
│   ├── repository/
│   │   └── ApplicationRepository.java      # Spring Data MongoDB repo
│   └── service/
│       └── ApplicationService.java         # Business logic layer
├── src/main/resources/
│   └── application.yml                     # Spring Boot configuration
├── pom.xml                                 # Maven dependencies
├── .env.example                            # Environment variable template
└── README.md                               # This file
```

---

## 🚀 Features

✅ **RESTful API** — Clean JSON endpoints for CRUD operations  
✅ **MongoDB Integration** — NoSQL database with Spring Data MongoDB  
✅ **Bean Validation** — Server-side validation with Jakarta Validation  
✅ **Duplicate Prevention** — Unique constraints on email and phone  
✅ **Auto-Timestamps** — `submittedAt` field auto-populated via `@CreatedDate`  
✅ **CORS Support** — Configurable allowed origins for frontend integration  
✅ **Error Handling** — Consistent JSON error responses with field-level validation  
✅ **Clean Architecture** — Separation of concerns (Controller → Service → Repository)  

---

## 📋 Prerequisites

- **Java 17+** (JDK 17 or higher)
- **Maven 3.8+** (or use the included Maven wrapper `./mvnw`)
- **MongoDB 4.4+** (local or cloud instance like MongoDB Atlas)

---

## ⚙️ Setup & Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd backend
```

### 2. Configure MongoDB

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` and set your MongoDB connection string:

```env
MONGODB_URI=mongodb://localhost:27017/dgu_admissions
FRONTEND_URL=http://localhost:5173
```

**For MongoDB Atlas (cloud):**

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/dgu_admissions
```

### 3. Install dependencies

```bash
mvn clean install
```

### 4. Run the application

```bash
mvn spring-boot:run
```

The backend will start on **http://localhost:8080**.

---

## 🔌 API Endpoints

### Base URL: `http://localhost:8080/api/applications`

| Method | Endpoint                  | Description                     |
|--------|---------------------------|---------------------------------|
| POST   | `/api/applications`       | Submit a new application        |
| GET    | `/api/applications`       | Get all applications            |
| GET    | `/api/applications/{id}`  | Get a single application by ID  |
| DELETE | `/api/applications/{id}`  | Delete an application by ID     |

---

### 📤 POST `/api/applications` — Submit Application

**Request Body:**

```json
{
  "fullName": "Priya Sharma",
  "email": "priya.sharma@example.com",
  "phone": "+919876543210",
  "course": "BBA",
  "qualification": "12th (Higher Secondary)",
  "city": "Dehradun",
  "message": "I am interested in the BBA program."
}
```

**Success Response (201 Created):**

```json
{
  "success": true,
  "message": "Your application has been submitted successfully! Our admissions team will contact you shortly.",
  "data": {
    "id": "6789abcd1234567890abcdef",
    "fullName": "Priya Sharma",
    "email": "priya.sharma@example.com",
    "phone": "+919876543210",
    "course": "BBA",
    "qualification": "12th (Higher Secondary)",
    "city": "Dehradun",
    "message": "I am interested in the BBA program.",
    "submittedAt": "2026-05-04T10:30:00Z",
    "status": "PENDING"
  },
  "timestamp": "2026-05-04T10:30:00Z"
}
```

**Validation Error (400 Bad Request):**

```json
{
  "success": false,
  "message": "Validation failed. Please check the highlighted fields.",
  "errors": {
    "email": ["Please provide a valid email address"],
    "phone": ["Phone number must be 10–15 digits (optionally starting with +)"]
  },
  "timestamp": "2026-05-04T10:30:00Z"
}
```

**Duplicate Error (409 Conflict):**

```json
{
  "success": false,
  "message": "An application with this email address already exists.",
  "timestamp": "2026-05-04T10:30:00Z"
}
```

---

### 📥 GET `/api/applications` — List All Applications

**Success Response (200 OK):**

```json
{
  "success": true,
  "message": "Applications retrieved successfully.",
  "data": [
    {
      "id": "6789abcd1234567890abcdef",
      "fullName": "Priya Sharma",
      "email": "priya.sharma@example.com",
      "phone": "+919876543210",
      "course": "BBA",
      "qualification": "12th (Higher Secondary)",
      "city": "Dehradun",
      "message": "I am interested in the BBA program.",
      "submittedAt": "2026-05-04T10:30:00Z",
      "status": "PENDING"
    }
  ],
  "timestamp": "2026-05-04T10:35:00Z"
}
```

---

### 📥 GET `/api/applications/{id}` — Get Single Application

**Success Response (200 OK):**

```json
{
  "success": true,
  "message": "Application retrieved successfully.",
  "data": {
    "id": "6789abcd1234567890abcdef",
    "fullName": "Priya Sharma",
    "email": "priya.sharma@example.com",
    "phone": "+919876543210",
    "course": "BBA",
    "qualification": "12th (Higher Secondary)",
    "city": "Dehradun",
    "message": "I am interested in the BBA program.",
    "submittedAt": "2026-05-04T10:30:00Z",
    "status": "PENDING"
  },
  "timestamp": "2026-05-04T10:40:00Z"
}
```

**Not Found (404):**

```json
{
  "success": false,
  "message": "Application not found with id: 6789abcd1234567890abcdef",
  "timestamp": "2026-05-04T10:40:00Z"
}
```

---

### 🗑️ DELETE `/api/applications/{id}` — Delete Application

**Success Response (200 OK):**

```json
{
  "success": true,
  "message": "Application deleted successfully.",
  "timestamp": "2026-05-04T10:45:00Z"
}
```

---

## 🧪 Testing the API

### Using cURL

```bash
# Submit a new application
curl -X POST http://localhost:8080/api/applications \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Priya Sharma",
    "email": "priya@example.com",
    "phone": "+919876543210",
    "course": "BBA",
    "qualification": "12th (Higher Secondary)",
    "city": "Dehradun",
    "message": "Interested in BBA program"
  }'

# Get all applications
curl http://localhost:8080/api/applications

# Get single application
curl http://localhost:8080/api/applications/{id}

# Delete application
curl -X DELETE http://localhost:8080/api/applications/{id}
```

### Using Postman

1. Import the collection from `postman_collection.json` (if provided)
2. Set the base URL to `http://localhost:8080`
3. Test each endpoint with sample data

---

## 🔒 Security & Production Considerations

### Environment Variables

Never commit `.env` files to version control. Use environment variables in production:

```bash
export MONGODB_URI="mongodb+srv://..."
export FRONTEND_URL="https://www.dgu.ac"
```

### CORS Configuration

Update `application.yml` or set the `FRONTEND_URL` environment variable to your production domain:

```yaml
app:
  cors:
    allowed-origins: https://www.dgu.ac,https://admissions.dgu.ac
```

### MongoDB Security

- Use strong passwords for MongoDB users
- Enable authentication on MongoDB
- Use MongoDB Atlas for managed cloud hosting
- Restrict network access with IP whitelisting

---

## 📦 Deployment

### Docker (Optional)

Create a `Dockerfile`:

```dockerfile
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app
COPY target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

Build and run:

```bash
mvn clean package
docker build -t dgu-admissions-backend .
docker run -p 8080:8080 \
  -e MONGODB_URI="mongodb://..." \
  -e FRONTEND_URL="http://localhost:5173" \
  dgu-admissions-backend
```

### Cloud Deployment

- **AWS Elastic Beanstalk** — Upload the JAR file
- **Heroku** — Use the Heroku Maven plugin
- **Google Cloud Run** — Deploy as a container
- **Azure App Service** — Deploy Spring Boot apps directly

---

## 🛠️ Tech Stack

- **Java 17** — Modern Java LTS version
- **Spring Boot 3.2.5** — Latest Spring Boot framework
- **Spring Web** — RESTful API support
- **Spring Data MongoDB** — MongoDB integration
- **Jakarta Validation** — Bean validation (JSR 380)
- **Lombok** — Reduces boilerplate code
- **Maven** — Dependency management

---

## 📝 License

This project is licensed under the MIT License.

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

## 📧 Support

For questions or issues, contact the development team at **dev@dgu.ac**.
