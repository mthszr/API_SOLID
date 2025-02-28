# Functional Requirements (FR)
- (✅) **User Registration:** The system must allow users to register.

- (✅) **Authentication:** The system must enable user authentication.

- (❌) **Profile Retrieval:** The system must allow logged-in users to retrieve their profiles.

- (❌) **Check-in Count:** The system must display the total number of check-ins performed by the authenticated user.

- (❌) **Check-in History:** Users must be able to access their check-in history.

- (❌) **Search for Nearby Gyms:** The system must allow users to locate gyms near their location.

- (❌) **Search for Gyms by Name:** The system must enable users to search for gyms using their name as a criterion.

- (✅) **Perform Check-in:** The system must allow users to check in at a gym.

- (❌) **Check-in Validation:** The system must enable validation of a user's check-in.

- (❌) **Gym Registration:** The system must allow the registration of new gyms.


# Business Rules (BR)
- (✅) **Unique Email:** The system must not allow the registration of users with duplicate emails.

- (✅) **Daily Check-in Limit:** Users cannot perform more than one check-in per day.

- (✅) **Check-in Proximity:** Users can only check in if they are within a maximum distance of 100 meters from the gym.

- (❌) **Check-in Time Validation:** Check-in validation must occur within 20 minutes of its creation.

- (❌) **Admin Validation:** Only administrators can validate check-ins.

- (❌) **Restricted Gym Registration:** Gym registration must be performed exclusively by administrators.


# Non-Functional Requirements (NFR)
- (✅) **Password Encryption:** User passwords must be stored in an encrypted format.

- (✅) **Data Persistence:** Application data must be stored in a PostgreSQL database.

- (❌) **Data Pagination:** All data lists must be paginated, displaying 20 items per page.

- (❌) **Authentication with JWT:** User identification and authentication must be performed using JSON Web Tokens (JWT).