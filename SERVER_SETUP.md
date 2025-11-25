# Server Setup Instructions

## Prerequisites
Make sure you have Node.js installed.

## Installation

1. Install dependencies:
```bash
npm install
```

This will install:
- Next.js
- React
- TypeScript
- Tailwind CSS
- Other dependencies

## Running the Application

### Start Next.js (Includes Backend API Routes)
```bash
npm run dev
```

You should see:
```
- ready started server on 0.0.0.0:3000
- API routes available at http://localhost:3000/api/*
```

**Note**: The backend API routes run on the same port (3000) as Next.js. No separate Express server is needed!

## Testing the Lead Form

1. Open your browser to `http://localhost:3000`
2. Scroll to the Lead Form section
3. Fill out the form:
   - Name (required, min 2 characters)
   - Email (required, valid email format)
   - Phone (required, min 10 digits)
   - Message (optional)
4. Click Submit

## Troubleshooting

### Form Not Submitting

1. **Check if server is running:**
   - Open `http://localhost:3000/api/health` in your browser
   - You should see: `{"success":true,"status":"OK","message":"Server is running"}`

2. **Check browser console:**
   - Open Developer Tools (F12)
   - Look for error messages in the Console tab
   - Check Network tab to see if the request is being sent to `/api/lead`

3. **Check Next.js console:**
   - Look at the terminal where you ran `npm run dev`
   - You should see logs for API requests

4. **Common Errors:**
   - "Connection error" - Next.js server is not running
   - "Failed to fetch" - Check if API route exists at `/api/lead`
   - "Missing required fields" - Form validation failed

## API Endpoints

All endpoints run on the same port as Next.js (3000):

- `POST /api/lead` - Submit lead form
- `GET /api/health` - Health check

## Form Validation

- **Name**: Required, 2-50 characters
- **Email**: Required, valid email format
- **Phone**: Required, minimum 10 digits
- **Message**: Optional, max 500 characters

