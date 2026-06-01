# Auth Upgrade Plan

## Completed in this update
- Use `bcrypt` on the Node backend when creating users.
- Use `bcrypt.compare` during login instead of checking raw passwords.
- Add JWT login responses with a `token` returned to the frontend.
- Store the JWT in `localStorage` under `token`.
- Use `jwt-decode` on the frontend to restore the logged-in user from the token and keep the session active until the token expires.
- Add global auth state with `AuthProvider` and `useAuth`.
- Add protected frontend routes for `/admin`, `/instructor`, and `/mylearning`.
- Add backend auth middleware and `/api/me` for token-protected user lookup.
- Show clear login errors:
  - `Wrong password`
  - `Email not found`
  - `Server error.`
- Add a 4 digit OTP form at `/otp`.
- Add `OtpCodes` database migration and model.
- Add `POST /api/otp/send` and `POST /api/otp/verify`.
- Hash OTP codes before saving them.
- Add SMTP-ready OTP email sending with a development fallback.
- Add `JWT_SECRET` and `JWT_EXPIRES_IN` to `backend/.env`.
- Add role support with `Users.role`, role data in JWT, and role-aware protected frontend routes.
- Add a migration to hash existing plain-text user passwords.
- Ran backend migrations against the local development database.

## Database status
- Existing table found: `Users`
- Existing password column found: `Users.password`
- Added migration for table: `OtpCodes`
- Added migration for column: `Users.role`

## What to do next
- Replace the development `JWT_SECRET` value before production.
- Configure SMTP values in `backend/.env` before production OTP email delivery.
- Create or update an admin user by setting `Users.role = 'admin'`.
- Create or update instructor users by setting `Users.role = 'instructor'`.
- Decide whether OTP verification should happen after registration, before login, or for password reset, then connect the frontend flow to that product decision.
