# Backend Deployment Guide for Vercel

## Overview
Your Event Manager app uses a **monolithic architecture** where the backend serves both:
- API endpoints (`/api/*`)
- Frontend React app (all other routes)

## Current Setup
- ✅ `vercel.json` is configured to route everything through `backend/index.js`
- ✅ Backend serves frontend from `backend/build` or `backend/public` folder
- ✅ Frontend automatically uses relative URLs in production (same domain)

## Steps to Deploy Backend on Vercel

### 1. Ensure Frontend is Built
The backend needs the frontend build files. Make sure you have:
- `backend/build/` folder (created during build)
- OR `backend/public/` folder (existing build)

### 2. Push Latest Changes to GitHub
```bash
git add .
git commit -m "Update backend and frontend config for Vercel"
git push origin main
```

### 3. Deploy on Vercel

#### Option A: If you already have a Vercel project
1. Go to your Vercel dashboard
2. Your project should auto-deploy from GitHub
3. Check the deployment logs

#### Option B: Create new Vercel project
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your `Eventsphere` repository
4. Configure:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (root)
   - **Build Command**: `npm run build`
   - **Install Command**: `npm install`
   - **Output Directory**: Leave empty

### 4. Set Environment Variables in Vercel
Go to Project Settings → Environment Variables and add:

1. **MONGODB_URI**
   ```
   mongodb+srv://username:password@cluster.mongodb.net/Project_Back?retryWrites=true&w=majority
   ```

2. **JWT_SECRET**
   ```
   your_random_secret_string_here
   ```

3. **NODE_ENV**
   ```
   production
   ```

4. **REACT_APP_API_URL**
   ```
   (Leave EMPTY - frontend will use same domain automatically)
   ```

### 5. Deploy
Click "Deploy" and wait for the build to complete.

## How It Works

1. **API Routes** (`/api/*`):
   - Handled by `backend/index.js`
   - Routes to `backend/routes/auth.js` and `backend/routes/notes.js`

2. **Frontend Routes** (all other routes):
   - Served by `backend/index.js`
   - Serves static files from `backend/build/` or `backend/public/`
   - All routes return `index.html` for React Router

3. **Build Process**:
   - `npm run build` builds the frontend
   - Copies `frontend/build/` to `backend/build/`
   - Vercel deploys the entire project

## Troubleshooting

### Backend API not working
- Check Vercel function logs
- Verify MongoDB connection string
- Ensure environment variables are set

### Frontend not loading
- Check if `backend/build/` or `backend/public/` exists
- Verify build completed successfully
- Check Vercel deployment logs

### API calls failing
- Frontend should use relative URLs (empty `REACT_APP_API_URL`)
- Check browser console for CORS errors
- Verify API routes are accessible

## Testing After Deployment

1. Visit your Vercel URL: `https://your-app.vercel.app`
2. Test frontend: Should load the React app
3. Test API: Try logging in or signing up
4. Check browser console for errors

## Notes

- ✅ Single deployment (backend + frontend together)
- ✅ No CORS issues (same domain)
- ✅ Automatic deployments on git push
- ✅ Serverless functions for API routes

