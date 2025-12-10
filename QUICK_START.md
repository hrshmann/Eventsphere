# Quick Start: Deploy to Vercel

## Quick Steps

1. **Set up MongoDB Atlas** (if not done):
   - Create account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Create cluster → Database user → Whitelist IP (0.0.0.0/0)
   - Get connection string

2. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Ready for Vercel"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import GitHub repo
   - Add Environment Variables:
     - `MONGODB_URI`: Your MongoDB Atlas connection string
     - `JWT_SECRET`: Random secret string
     - `NODE_ENV`: `production`
   - Build Command: `npm run build`
   - Install Command: `npm install`
   - Deploy!

4. **Done!** Your app will be live at `https://your-app.vercel.app`

See `DEPLOYMENT.md` for detailed instructions.

