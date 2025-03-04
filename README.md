## 🚀 Project Overview

A gym API for a comprehensive fitness facility check-in management system built with modern backend technologies. This application demonstrates implementation of SOLID principles and Clean Architecture in a real-world TypeScript application.

Key Features
- User Management: Complete authentication flow with JWT and refresh tokens
- Gym Discovery: Find gyms by location or search by name
- Check-in System: Track gym attendance with location validation (within 100m)
- Admin Portal: Special permissions for gym registration and check-in validation
- Metrics Dashboard: View historical check-ins and user statistics

The system enforces business rules like daily check-in limits, proximity validation, and time-limited check-in verification, all while maintaining high security standards with password hashing and role-based access control.

Built with scalability in mind, the application uses PostgreSQL for data persistence and follows a strict repository pattern to ensure clean separation between business logic and data access. All API endpoints are fully tested with comprehensive unit, and E2E tests.

## 🔧 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL

### Installation
```bash
# Clone the repository
git clone https://github.com/mthszr/gym-api.git

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your database credentials

# Run migrations
npx prisma migrate dev

# Start development server
npm run start:dev
```

### Testing

```bash
# Run unit tests
npm test

# Run e2e tests
npm run test:e2e

# Run test coverage
npm run test:coverage
```

## 🚦 API Routes

### Authentication
- `POST /sessions` - User login
- `PATCH /token/refresh` - Refresh access token

### Users
- `POST /users` - Register new user
- `GET /me` - Get authenticated user profile

### Gyms
- `POST /gyms` - Register new gym (admin only)
- `GET /gyms/search` - Search gyms by name
- `GET /gyms/nearby` - Find nearby gyms

### Check-ins
- `POST /gyms/:gymId/check-ins` - Create check-in
- `PATCH /check-ins/:checkInId/validate` - Validate check-in (admin only)
- `GET /check-ins/history` - Get user check-in history
- `GET /check-ins/metrics` - Get user check-in count

## 🛠 Technologies
- Node.js
- TypeScript
- Fastify
- Prisma ORM
- PostgreSQL
- Vitest
- Supertest
- Docker
- JWT Authentication
- Zod
- Biome

## 🏛️ Architecture
This project implements:

- SOLID Principles
  - Single Responsibility
  - Open/Closed
  - Liskov Substitution
  - Interface Segregation
  - Dependency Inversion

- Clean Architecture
  - Use Cases
  - Controllers
  - Repositories
  - Entities

- Design Patterns
  - Repository Pattern
  - Factory Pattern
  - Dependency Injection

## 🔐 Security Features
- Password Hashing
- JWT Authentication
- Role-Based Access Control
- Input Validation
- Cookie Security

## 📊 Test Coverage
- Unit Tests
- End-to-End Tests
- In-Memory Test Database
- Custom Test Environment

## ✅ Functional Requirements (FR)
- (✓) **User Registration:** The system must allow users to register.

- (✓) **Authentication:** The system must enable user authentication.

- (✓) **Profile Retrieval:** The system must allow logged-in users to retrieve their profiles.

- (✓) **Check-in Count:** The system must display the total number of check-ins performed by the authenticated user.

- (✓) **Check-in History:** Users must be able to access their check-in history.

- (✓) **Search for Nearby Gyms:** The system must allow users to locate gyms near their location within 100 kilometers.

- (✓) **Search for Gyms by Name:** The system must enable users to search for gyms using their name as a criterion.

- (✓) **Perform Check-in:** The system must allow users to check in at a gym.

- (✓) **Check-in Validation:** The system must enable validation of a user's check-in.

- (✓) **Gym Registration:** The system must allow the registration of new gyms.


## 📋 Business Rules (BR)
- (✓) **Unique Email:** The system must not allow the registration of users with duplicate emails.

- (✓) **Daily Check-in Limit:** Users cannot perform more than one check-in per day.

- (✓) **Check-in Proximity:** Users can only check in if they are within a maximum distance of 100 meters from the gym.

- (✓) **Check-in Time Validation:** Check-in validation must occur within 20 minutes of its creation.

- (✓) **Admin Validation:** Only administrators can validate check-ins.

- (✓) **Restricted Gym Registration:** Gym registration must be performed exclusively by administrators.


## ⚙️ Non-Functional Requirements (NFR)
- (✓) **Password Encryption:** User passwords must be stored in an encrypted format.

- (✓) **Data Persistence:** Application data must be stored in a PostgreSQL database.

- (✓) **Data Pagination:** All data lists must be paginated, displaying 20 items per page.

- (✓) **Authentication with JWT:** User identification and authentication must be performed using JSON Web Tokens (JWT).

## 📝 What I Learned

### 1. Architecture & Design
- Implementing SOLID principles in a real-world TypeScript application
- Structuring a clean architecture with clear separation of concerns
- Using the repository pattern to abstract data access
- Implementing factory patterns for dependency injection
- Building a scalable folder structure for enterprise applications

### 2. Technical Skills
- Creating a RESTful API with Fastify
- Database modeling and querying with Prisma ORM
- Working with PostgreSQL for production data
- JWT authentication and refresh token flows
- Role-based access control implementation
- Geographic distance calculations for nearby gym features

### 3. Testing Strategies
- Test-Driven Development (TDD) approach
- Creating in-memory repositories for unit testing
- Building a custom Prisma test environment
- E2E testing with Supertest
- Integration testing for complex use cases
- Setting up proper test isolation and database seeding

### 4. Development Tools
- Code quality enforcement with Biome
- Docker containerization for development consistency
- Environment configuration and security practices
- Input validation with Zod
- TypeScript configuration for strict type safety
- Git workflow and project organization

### 5. Performance & Security
- Database query optimization strategies
- Password hashing and secure authentication
- Cookie-based security for refresh tokens
- Rate limiting and input sanitization
- Efficient pagination implementation