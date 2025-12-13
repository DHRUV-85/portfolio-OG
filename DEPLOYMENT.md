# Deployment Guide - Render

## Prerequisites
1. GitHub account with your code pushed
2. Render account (sign up at https://render.com)
3. MongoDB Atlas account for database (https://www.mongodb.com/cloud/atlas)
4. Cloudinary account for image uploads (https://cloudinary.com)

## Step 1: Setup MongoDB Atlas

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Create a database user
4. Whitelist all IPs (0.0.0.0/0) for Render access
5. Get your connection string (replace <password> with your actual password)

## Step 2: Deploy Backend on Render

1. Go to https://dashboard.render.com
2. Click "New +" → "Web Service"
3. Connect your GitHub repository: `DHRUV-85/portfolio-OG`
4. Configure:
   - **Name**: portfolio-backend
   - **Region**: Oregon (US West)
   - **Branch**: main
   - **Root Directory**: backend
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

5. Add Environment Variables:
   ```
   NODE_ENV=production
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_random_secret_key
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   ```

6. Click "Create Web Service"
7. Wait for deployment (5-10 minutes)
8. Copy your backend URL (e.g., https://portfolio-backend-xxxx.onrender.com)

## Step 3: Update Frontend API Configuration

Before deploying frontend, update the API base URL:

1. Open `client/src/services/api.js`
2. Update the baseURL to your Render backend URL:
   ```javascript
   const api = axios.create({
     baseURL: 'https://your-backend-url.onrender.com/api',
   });
   ```

## Step 4: Deploy Frontend on Render

1. Go to Render Dashboard
2. Click "New +" → "Static Site"
3. Connect your GitHub repository: `DHRUV-85/portfolio-OG`
4. Configure:
   - **Name**: portfolio-frontend
   - **Branch**: main
   - **Root Directory**: client
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: dist

5. Click "Create Static Site"
6. Wait for deployment (5-10 minutes)
7. Your site will be live at: https://portfolio-frontend-xxxx.onrender.com

## Step 5: Custom Domain (Optional)

1. Go to your frontend service settings
2. Click "Custom Domain"
3. Add your domain (e.g., dhruvs oni.com)
4. Update DNS records as instructed

## Important Notes

- **Free Tier**: Render free tier spins down after 15 minutes of inactivity
- **Cold Starts**: First request after inactivity may take 30-60 seconds
- **Database**: Use MongoDB Atlas free tier (512MB storage)
- **Images**: Store in Cloudinary (free tier: 25GB storage)

## Troubleshooting

### Backend Issues:
- Check logs in Render dashboard
- Verify all environment variables are set
- Ensure MongoDB connection string is correct

### Frontend Issues:
- Verify API baseURL is correct
- Check browser console for errors
- Ensure CORS is enabled in backend

### Database Connection:
- Whitelist 0.0.0.0/0 in MongoDB Atlas
- Check connection string format
- Verify database user credentials

## Environment Variables Reference

### Backend (.env):
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
JWT_SECRET=your_super_secret_jwt_key_here
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Post-Deployment Checklist

- [ ] Backend is running and accessible
- [ ] Frontend is deployed and loads correctly
- [ ] Database connection is working
- [ ] Contact form sends emails
- [ ] Image uploads work (Cloudinary)
- [ ] Admin login works
- [ ] All pages load without errors
- [ ] Dark mode toggle works
- [ ] Mobile responsive design works

## Support

If you encounter issues:
1. Check Render logs
2. Verify environment variables
3. Test API endpoints directly
4. Check MongoDB Atlas connection

Your portfolio should now be live! 🚀
