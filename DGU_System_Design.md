# DGU Website System Design

## 1. System Overview

`dgu.ac` is not just a brochure site. Based on the public website structure, it functions as a university discovery, admissions, and student-services platform with three distinct surfaces:

- Public university website at `www.dgu.ac`
- Admissions application flow at `admissions.dgu.ac`
- Student operations handed off to `student.camu.in`

From the public site, DGU currently exposes:

- Schools and a large program catalog
- Admission process pages, fee structures, scholarships, hostel and transport information, and refund policy
- News Center with categories such as Campus News, Admission News, Placement News, and Events News
- Faculty directory and leadership pages
- Downloads and brochures
- External integrations such as a virtual tour hosted on object storage and a separate student portal

Architectural conclusion:

- DGU already behaves like a split-domain platform: `www` for discovery, `admissions` for applicant conversion, and an external student portal for post-admission operations.
- The right backend target is a modular platform with clear bounded contexts: Public CMS, Admissions, Identity, Media, Notifications, and Student-system Integration.

## 2. Modules and Features

### 2.1 Academic Module

Features:

- Schools management
- Programs and courses catalog
- Program variants and specializations
- Degree type support for UG, PG, Integrated, Diploma, PhD, and Certifications
- Faculty directory
- Research pages
- Academic calendar
- School-specific landing pages

### 2.2 Admissions Module

Features:

- Admission process
- Program fee structures
- Scholarships
- Hostel and mess fees
- Transportation fee
- Refund policy
- Program commencement dates
- International student admission
- PhD admission
- Apply Now workflow
- Online interview and entrance-test handling
- Status tracking
- Application fee payment

### 2.3 Content and CMS Module

Features:

- News categories:
  - Campus News
  - Admission News
  - Placement News
  - Events News
- Blogs and editorial pages
- Leadership and about pages
- Rankings and accreditation pages
- Office of International Affairs
- Campus life content
- Downloads and brochures

### 2.4 User Systems Module

Features:

- Visitor browsing
- Applicant registration and login
- Admin CMS access
- Faculty profile management
- Admissions counselor dashboard
- Student portal handoff and SIS integration
- Finance and fee payment integration
- Role-based access control

### 2.5 Media Module

Features:

- Image assets
- Brochure PDFs
- Video gallery
- Document downloads
- Virtual tour assets
- Program banners
- News thumbnails

### 2.6 Enquiry and Lead Management Module

Features:

- Lead capture form
- Callback requests
- Counsellor assignment
- Source attribution
- Lead status
- Follow-up notes

### 2.7 Static vs Dynamic Areas

Mostly static with CMS backing:

- About
- Rankings
- Accreditation
- Leadership
- Campus life
- Research overview
- Hostel information
- Refund policy

Dynamic:

- Programs catalog
- Faculty directory
- News and events
- Downloads
- Admissions criteria by intake and year
- Application status
- Fee and payment status
- Counsellor forms
- Admin dashboard metrics

## 3. User Roles and Use Cases

### 3.1 Visitor

Actions:

- Browse schools and programs
- Read admission requirements
- Download brochures
- Read news and events
- Submit enquiry forms
- Start application

Backend operations:

- Anonymous catalog reads
- SEO page rendering
- CDN asset delivery
- Lead capture and attribution
- Program filtering and search

### 3.2 Student or Applicant

Actions:

- Register and verify account
- Fill application
- Upload documents
- Pay application fee
- Track application status
- Book interview or test slot

Backend operations:

- Identity creation
- Draft autosave
- Eligibility validation
- Document storage
- Payment order and webhook handling
- Status history tracking
- Notification dispatch

### 3.3 Admin

Actions:

- Manage content
- Publish news and announcements
- Review applications
- Update admission statuses
- Assign counsellors
- Manage program and intake data
- View dashboard analytics

Backend operations:

- RBAC authorization
- CMS publishing workflow
- Audit logs
- Cached dashboard aggregates
- Status transitions with validation rules

### 3.4 Faculty

Actions:

- Update profile
- View assigned content or academic information
- Participate in interview workflows if required

Backend operations:

- Restricted profile edits
- Faculty directory publishing
- Review and decision workflow support

## 4. Frontend to Backend Interaction

### 4.1 API Style

Recommendation: REST-first architecture with optional GraphQL later for internal dashboard aggregation.

Why:

- Public content and program pages are highly cacheable and map well to REST
- Admissions workflows are stateful and easier to govern via REST resources
- GraphQL is not necessary at initial scale and adds operational complexity

### 4.2 Data Flow

Client -> CDN -> Next.js frontend -> API Gateway or BFF -> NestJS backend -> Redis cache -> PostgreSQL

For async operations:

Backend -> Queue -> Notification workers / ERP sync / media processing

### 4.3 Example Endpoints

Public:

- `GET /api/v1/courses`
- `GET /api/v1/courses/:slug`
- `GET /api/v1/news`
- `GET /api/v1/events`
- `POST /api/v1/enquiries`

Auth:

- `POST /api/v1/auth/register`
- `POST /api/v1/auth/login`
- `POST /api/v1/auth/refresh`
- `POST /api/v1/auth/forgot-password`

Admissions:

- `POST /api/v1/admissions/applications`
- `GET /api/v1/admissions/applications/:id`
- `PATCH /api/v1/admissions/applications/:id`
- `POST /api/v1/admissions/applications/:id/documents`
- `POST /api/v1/admissions/applications/:id/submit`
- `GET /api/v1/admissions/applications/:id/status`

Admin:

- `GET /api/v1/admin/dashboard`
- `GET /api/v1/admin/applications`
- `PATCH /api/v1/admin/applications/:id/status`
- `POST /api/v1/admin/posts`
- `PATCH /api/v1/admin/posts/:id`

## 5. Backend Architecture

### 5.1 Recommended Stack

- Backend framework: NestJS with TypeScript
- Frontend: Next.js
- Primary database: PostgreSQL
- Cache and queue backing: Redis
- Storage: S3-compatible object storage

### 5.2 Architecture Pattern

Recommendation: Modular Monolith

Why this fits DGU:

- DGU has medium complexity with shared domain data across admissions, content, and programs
- University teams usually need lower operational overhead than microservices
- Admissions traffic is seasonal rather than continuously extreme
- Shared reporting and admin workflows are simpler in a modular monolith

### 5.3 Service Modules

- Auth Module
- Users and Roles Module
- Academic Module
- Programs Module
- Admissions Module
- CMS Module
- Media Module
- Enquiries Module
- Notifications Module
- Payments Module
- Integrations Module
- Audit Module

### 5.4 File Storage Strategy

- Public bucket for brochures, public images, and thumbnails
- Private bucket for applicant documents
- Signed URLs for private asset access
- CDN for public assets

### 5.5 Background Jobs

Use queue workers for:

- Email and SMS notifications
- Brochure download follow-ups
- Application submitted notifications
- Interview reminders
- Image optimization
- Malware scanning
- Cache invalidation
- ERP sync retries
- Daily reporting jobs

## 6. Database Design

### 6.1 Database Choice

Recommendation: SQL-first architecture with PostgreSQL as the primary database.

Why:

- Strong relational integrity for admissions workflows
- Clear support for users, roles, applications, programs, and payments
- JSONB can still support flexible metadata when needed
- Reliable indexing and partitioning for seasonal workloads

Supporting systems:

- Redis for cache, sessions, and rate limiting
- S3 for file storage
- Optional OpenSearch later for full-text search

### 6.2 Core Tables

- `users`
- `roles`
- `user_roles`
- `schools`
- `departments`
- `programs`
- `program_specializations`
- `intakes`
- `applications`
- `application_profiles`
- `application_academics`
- `application_documents`
- `application_status_history`
- `payments`
- `faculty_profiles`
- `posts`
- `categories`
- `events`
- `media`
- `downloads`
- `enquiries`
- `audit_logs`

### 6.3 Relationships

- One user can have many applications
- Users and roles are many-to-many
- One school can have many departments and programs
- One program can have many intakes and specializations
- One application can have many academic records, documents, status history records, and payments
- Media can be referenced by posts, faculty profiles, downloads, and application documents

### 6.4 Indexing Strategy

Use indexes on:

- `users(email)` unique
- `users(phone)` unique where not null
- `schools(slug)` unique
- `programs(slug)` unique
- `programs(school_id, level, status)`
- `intakes(program_id, status, application_open_at, application_close_at)`
- `applications(application_no)` unique
- `applications(user_id, created_at desc)`
- `applications(program_id, current_status)`
- `posts(slug)` unique
- `posts(type, status, published_at desc)`
- `enquiries(status, created_at desc)`
- `payments(provider_order_id)` unique

### 6.5 Normalization

- Use 3NF for transactional data
- Use controlled denormalization or materialized views for homepage cards, dashboards, and read-heavy reporting

### 6.6 Sample Schema

```sql
CREATE TABLE schools (
  id BIGSERIAL PRIMARY KEY,
  slug VARCHAR(120) NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  sort_order INT NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE programs (
  id BIGSERIAL PRIMARY KEY,
  school_id BIGINT NOT NULL REFERENCES schools(id),
  department_id BIGINT NULL,
  slug VARCHAR(160) NOT NULL UNIQUE,
  title VARCHAR(255) NOT NULL,
  level VARCHAR(32) NOT NULL,
  degree_type VARCHAR(64) NOT NULL,
  duration_months INT NOT NULL,
  mode VARCHAR(32) NOT NULL DEFAULT 'full_time',
  overview TEXT,
  eligibility_text TEXT,
  intake_year INT NOT NULL,
  status VARCHAR(32) NOT NULL DEFAULT 'active'
);

CREATE TABLE applications (
  id BIGSERIAL PRIMARY KEY,
  application_no VARCHAR(32) NOT NULL UNIQUE,
  user_id BIGINT NOT NULL REFERENCES users(id),
  intake_id BIGINT NOT NULL REFERENCES intakes(id),
  program_id BIGINT NOT NULL REFERENCES programs(id),
  current_status VARCHAR(32) NOT NULL DEFAULT 'draft',
  payment_status VARCHAR(32) NOT NULL DEFAULT 'pending',
  interview_status VARCHAR(32) NOT NULL DEFAULT 'not_required',
  entrance_test_status VARCHAR(32) NOT NULL DEFAULT 'not_required',
  final_decision VARCHAR(32),
  submitted_at TIMESTAMP NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
```

### 6.7 Text ER Diagram

```text
User --< Application >-- Program --< Intake
  |                          |
  |                          +-- School
  |
  +--< UserRole >-- Role

Application --< ApplicationAcademic
Application --< ApplicationDocument >-- Media
Application --< ApplicationStatusHistory
Application --< Payment

Post -- Category
Post -- Media

FacultyProfile -- School
Download -- Media
Enquiry -- Program
```

### 6.8 Scaling Strategy

- Use read replicas for public reads and analytics
- Partition `applications` and `application_status_history` by intake year
- Do not shard initially

## 7. Backend Logic Flows

### 7.1 Admission Flow

Flow:

1. Applicant registers
2. System creates user and applicant role
3. Verification email or SMS is sent
4. Applicant starts draft application
5. Program and intake are selected
6. Dynamic eligibility rules are loaded
7. Applicant fills profile and academics and uploads documents
8. Server validates required fields and checklist
9. Payment order is created
10. Payment webhook confirms success
11. Application moves from draft to submitted
12. Counsellor or admissions queue assignment happens
13. Eligibility engine determines interview, test, or direct shortlist
14. Status history is recorded
15. Notification is sent
16. Admin updates final decision
17. Accepted applicant is synced to SIS or ERP

### 7.2 Course Browsing Flow

Flow:

1. User filters by school, level, or specialization
2. API checks Redis cache for the filter signature
3. On miss, PostgreSQL query runs using indexed columns
4. API returns summary fields only
5. Program detail page is cached separately

### 7.3 CMS Update Flow

Flow:

1. Editor creates draft content
2. Optional review happens
3. Content is published or scheduled
4. Publish triggers cache invalidation and search refresh
5. Homepage and listing pages update

### 7.4 Authentication

- JWT access tokens
- Refresh tokens in secure HTTP-only cookies
- MFA mandatory for admins
- RBAC for authorization
- Audit logs for protected actions

## 8. Performance and Scalability

### 8.1 Caching

Use Redis for:

- Program listing cache
- News feeds
- Faculty pages
- Admission rules cache
- Dashboard aggregate cache
- Rate limiting counters

### 8.2 CDN

Use CDN for:

- Images
- PDFs and brochures
- JavaScript and CSS
- Cached server-rendered pages

### 8.3 Load Balancing

- Application Load Balancer
- Horizontal autoscaling for app instances
- Separate scaling for workers

### 8.4 Peak Traffic Handling

Admissions season strategies:

- Pre-warm cache for top pages
- Queue all non-critical jobs
- Separate payment webhook processing
- Use DB connection pooling
- Add rate limiting to abusive endpoints
- Degrade gracefully if ERP sync is unavailable

## 9. Security Plan

### 9.1 Auth and Authorization

- RBAC for all protected APIs
- MFA for admin and faculty back office
- Short-lived access tokens
- Rotating refresh tokens

### 9.2 Input Validation

- DTO validation at API boundary
- Whitelisting of fields
- Server-side validation of academic and payment inputs
- Rich text sanitization for CMS

### 9.3 Protection Controls

- SQL injection protection through parameterized queries
- XSS protection via sanitization and CSP headers
- CSRF protection for cookie-authenticated admin flows
- Rate limiting for login, OTP, enquiry, and application endpoints

### 9.4 Secure File Uploads

- Presigned upload URLs
- MIME type validation
- Extension validation
- Size limits
- Antivirus scan
- Signed URLs for private retrieval

### 9.5 Audit and Compliance

- Audit admin status changes
- Audit content publication
- Keep immutable application history
- Encrypt sensitive data where required
- Mask PII in logs

## 10. Final Tech Stack

- Backend: NestJS with TypeScript
- Frontend: Next.js
- Database: PostgreSQL
- Cache: Redis
- Queue: BullMQ
- Object storage: Amazon S3 or S3-compatible service
- CDN: CloudFront or Cloudflare
- Search: PostgreSQL full-text initially, OpenSearch later
- Infra: AWS ECS or EKS, RDS, ElastiCache, S3, ALB, WAF
- DevOps: Docker, GitHub Actions, Terraform, Sentry, Prometheus, Grafana

## 11. Bonus Implementation Details

### 11.1 Suggested Backend Folder Structure

```text
src/
  main.ts
  app.module.ts
  common/
    config/
    decorators/
    dto/
    exceptions/
    guards/
    interceptors/
    utils/
  modules/
    auth/
    users/
    roles/
    academics/
      schools/
      departments/
      programs/
      faculties/
    admissions/
      applications/
      eligibility/
      interviews/
      documents/
      payments/
    cms/
      posts/
      categories/
      pages/
      homepage/
    media/
    enquiries/
    notifications/
    integrations/
    audit/
  database/
    migrations/
    seeds/
```

### 11.2 Sample API Response

```json
{
  "data": [
    {
      "id": 101,
      "slug": "b-tech-cse-ai-ml-hcltech",
      "title": "B.Tech in Computer Science and Engineering with Specialization in AI and ML - HCLTech",
      "school": {
        "slug": "doon-school-of-advanced-computing",
        "name": "Doon School of Advanced Computing"
      },
      "level": "UG",
      "durationMonths": 48
    }
  ],
  "meta": {
    "page": 1,
    "pageSize": 20,
    "total": 1
  }
}
```

### 11.3 Sample Query

```sql
SELECT
  p.id,
  p.slug,
  p.title,
  p.excerpt,
  p.published_at
FROM posts p
WHERE p.type = 'campus_news'
  AND p.status = 'published'
ORDER BY p.published_at DESC
LIMIT 12 OFFSET 0;
```

### 11.4 Future Scaling Path

Extract services later only if needed. Best first candidates:

1. Notifications
2. Media
3. Search
4. Admissions workflow

Current recommendation remains:

Next.js frontend plus a NestJS modular monolith with PostgreSQL, Redis, S3, queue workers, and SIS and payment integrations.
