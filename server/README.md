# Backpacking Server (Express + Prisma)

This folder contains a minimal Express server with authentication endpoints backed by PostgreSQL via Prisma.

## Quick start

1. Copy `.env.example` to `.env` and set `DATABASE_URL` and `JWT_SECRET`.

2. Install dependencies:

```bash
cd server
npm install
```

3. Generate Prisma client & run migrations (local/dev):

```bash
npx prisma generate
# set DATABASE_URL in .env, then:
npx prisma migrate dev --name init
```

4. Start the server in dev mode:

```bash
npm run dev
```

## API endpoints

- POST /api/auth/signup { email, password } -> { token, user }
- POST /api/auth/signin { email, password } -> { token, user }
- GET /api/auth/profile (Authorization: Bearer <token>) -> { user }
- PUT /api/auth/profile (Authorization: Bearer <token>) -> { user }

## Notes & next steps

- This is a minimal scaffold intended for development and testing. For production, ensure strong `JWT_SECRET`, proper DB credentials, HTTPS, logging, rate limiting, and other hardening.
- You can deploy this app on Render by connecting your repo, setting environment variables, and running `npm start`.
