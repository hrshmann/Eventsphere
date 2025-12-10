# Deployment Guide: Event Manager to Vercel via GitHub

This guide will help you deploy your Event Manager application to Vercel using GitHub.

## Prerequisites

1. **GitHub Account** - Sign up at [github.com](https://github.com)
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com) (you can use GitHub to sign in)
3. **MongoDB Atlas Account** - Sign up at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas) (free tier available)

## Step 1: Set Up MongoDB Atlas (Cloud Database)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a free account
2. Create a new cluster (choose the free M0 tier)
3. Create a database user:
   - Go to "Database Access" → "Add New Database User"
   - Choose "Password" authentication
   - Save the username and password securely
4. Whitelist IP addresses:
   - Go to "Network Access" → "Add IP Address"
   - Click "Allow Access from Anywhere" (0.0.0.0/0) for Vercel deployment
5. Get your connection string:
   - Go to "Database" → "Connect" → "Connect your application"
   - Copy the connection string (it looks like: `mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority`)
   - Replace `<password>` with your database user password
   - Replace `<database>` with your database name (e.g., `Project_Back`)

## Step 2: Prepare Your Code for GitHub

1. **Initialize Git** (if not already done):
   ```bash
   git init
   ```

2. **Create a `.gitignore` file** (already exists, but verify it includes):
   - `node_modules/`
   - `.env`
   - `build/`
   - `frontend/build/`
   - `backend/build/`

3. **Build the frontend** (so it's ready for deployment):
   ```bash
   cd frontend
   npm install
   npm run build
   cd ..
   ```

4. **Copy frontend build to backend** (Windows):
   ```bash
   xcopy /E /I /Y frontend\build backend\build
   ```
   
   Or on Mac/Linux:
   ```bash
   cp -r frontend/build backend/build
   ```

## Step 3: Push to GitHub

1. **Create a new repository on GitHub**:
   - Go to GitHub → "New Repository"
   - Name it (e.g., `event-manager`)
   - Don't initialize with README (since you already have files)

2. **Add files and push**:
   ```bash
   git add .
   git commit -m "Initial commit - ready for Vercel deployment"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

## Step 4: Deploy to Vercel

1. **Go to Vercel Dashboard**:
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Your Project**:
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Select the repository you just created

3. **Configure Project Settings**:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (root)
   - **Build Command**: `npm run build` (this will build frontend and copy to backend)
   - **Output Directory**: Leave empty (Vercel will handle this)
   - **Install Command**: `npm install` (this will install both backend and frontend dependencies)

4. **Add Environment Variables**:
   Click "Environment Variables" and add:
   
   - `MONGODB_URI`: Your MongoDB Atlas connection string
     ```
     mongodb+srv://username:password@cluster.mongodb.net/Project_Back?retryWrites=true&w=majority
     ```
   
   - `JWT_SECRET`: A random secret string (generate one or use a password generator)
     ```
     your_super_secret_jwt_key_here_make_it_long_and_random
     ```
   
   - `NODE_ENV`: `production`
   
   - `REACT_APP_API_URL`: Leave this EMPTY (the frontend will use the same domain)

5. **Deploy**:
   - Click "Deploy"
   - Wait for the build to complete (this may take a few minutes)

## Step 5: Update Frontend API Configuration

After deployment, Vercel will give you a URL (e.g., `https://your-app.vercel.app`).

The frontend is already configured to use environment variables. Since `REACT_APP_API_URL` is empty, it will automatically use the same domain as the frontend, which is correct for Vercel deployment.

## Step 6: Verify Deployment

1. Visit your Vercel deployment URL
2. Test the application:
   - Try signing up a new user
   - Try logging in
   - Test the admin features

## Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify the build command is correct for your OS

### Database Connection Issues
- Verify your MongoDB Atlas connection string is correct
- Check that your IP is whitelisted in MongoDB Atlas
- Ensure the database user has proper permissions

### API Calls Fail
- Check browser console for errors
- Verify environment variables are set correctly in Vercel
- Ensure `REACT_APP_API_URL` is empty (not set) so it uses the same domain

### Frontend Not Loading
- Verify the build was successful
- Check that `backend/build` directory exists with frontend files
- Review Vercel build logs

## Additional Notes

- **Automatic Deployments**: Vercel will automatically redeploy when you push to GitHub
- **Preview Deployments**: Every pull request gets a preview URL
- **Environment Variables**: Keep them secure and never commit `.env` files
- **MongoDB Atlas**: Free tier includes 512MB storage, perfect for development

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Check MongoDB Atlas connection status
3. Verify all environment variables are set correctly
4. Review the browser console for frontend errors

---

**Congratulations!** Your Event Manager app should now be live on Vercel! 🎉

