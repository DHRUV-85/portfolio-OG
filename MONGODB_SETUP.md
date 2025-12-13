# MongoDB Atlas Setup Guide - Step by Step

## Step 1: Create MongoDB Atlas Account

1. Go to https://www.mongodb.com/cloud/atlas
2. Click **"Try Free"** or **"Sign Up"**
3. Sign up using:
   - Google account (recommended - fastest)
   - OR Email and password
4. Complete the registration

## Step 2: Create Your First Cluster

1. After login, you'll see **"Welcome to Atlas"** page
2. Click **"Build a Database"** or **"Create"** button
3. Choose deployment option:
   - Select **"M0 FREE"** (Shared cluster)
   - This gives you 512MB storage for free

## Step 3: Configure Cluster Settings

1. **Cloud Provider & Region:**
   - Provider: Choose **AWS** (recommended)
   - Region: Choose closest to you or **Oregon (us-west-2)** (same as Render)
   - Click **"Create Cluster"**

2. **Cluster Name:**
   - Default name is fine (e.g., Cluster0)
   - Or rename it to "portfolio-cluster"

3. Click **"Create"** button
4. Wait 3-5 minutes for cluster creation

## Step 4: Create Database User

1. You'll see **"Security Quickstart"** screen
2. Under **"How would you like to authenticate your connection?"**
   - Choose **"Username and Password"**
3. Create credentials:
   - **Username**: `portfolioAdmin` (or any name you prefer)
   - **Password**: Click **"Autogenerate Secure Password"** 
   - **IMPORTANT**: Copy and save this password somewhere safe!
   - Or create your own strong password
4. Click **"Create User"**

## Step 5: Setup Network Access (Whitelist IP)

1. Still on Security Quickstart, scroll to **"Where would you like to connect from?"**
2. Choose **"My Local Environment"**
3. Click **"Add My Current IP Address"**
4. **IMPORTANT for Render deployment:**
   - Click **"Add IP Address"** button
   - In the popup:
     - IP Address: `0.0.0.0/0`
     - Description: `Allow all IPs (for Render)`
   - Click **"Add Entry"**
   
   ⚠️ This allows connections from anywhere (needed for Render)

5. Click **"Finish and Close"**

## Step 6: Get Connection String

1. Click **"Go to Databases"** or navigate to **"Database"** in left sidebar
2. You'll see your cluster (Cluster0)
3. Click **"Connect"** button on your cluster
4. Choose **"Connect your application"**
5. Select:
   - **Driver**: Node.js
   - **Version**: 5.5 or later
6. Copy the connection string:
   ```
   mongodb+srv://portfolioAdmin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

## Step 7: Format Your Connection String

1. Take the copied connection string
2. Replace `<password>` with your actual password
3. Add database name before the `?`:
   ```
   mongodb+srv://portfolioAdmin:YourPassword123@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
   ```
   
   **Example:**
   ```
   mongodb+srv://portfolioAdmin:MySecurePass123@cluster0.abc123.mongodb.net/portfolio?retryWrites=true&w=majority
   ```

## Step 8: Test Connection (Optional)

1. Go to **"Database"** in left sidebar
2. Click **"Browse Collections"**
3. Click **"Add My Own Data"**
4. Create database:
   - Database name: `portfolio`
   - Collection name: `users`
5. Click **"Create"**

## Step 9: Use in Your Application

Add to your `.env` file in backend folder:
```env
MONGODB_URI=mongodb+srv://portfolioAdmin:YourPassword123@cluster0.abc123.mongodb.net/portfolio?retryWrites=true&w=majority
```

## Quick Reference

### Your MongoDB Details:
- **Cluster Name**: Cluster0 (or your custom name)
- **Username**: portfolioAdmin (or your chosen username)
- **Password**: [Your saved password]
- **Database Name**: portfolio
- **Connection String**: [Your formatted connection string]

### Important URLs:
- **Atlas Dashboard**: https://cloud.mongodb.com
- **Database Access**: https://cloud.mongodb.com/v2#/security/database/users
- **Network Access**: https://cloud.mongodb.com/v2#/security/network/accessList

## Common Issues & Solutions

### Issue 1: "Authentication failed"
- **Solution**: Check username and password in connection string
- Verify user exists in Database Access section

### Issue 2: "Connection timeout"
- **Solution**: Add 0.0.0.0/0 to Network Access whitelist
- Check if cluster is active (not paused)

### Issue 3: "Database not found"
- **Solution**: MongoDB creates database automatically on first write
- Make sure database name is in connection string

### Issue 4: "IP not whitelisted"
- **Solution**: Go to Network Access → Add IP Address → 0.0.0.0/0

## Security Best Practices

✅ **DO:**
- Use strong passwords
- Keep credentials in .env file (never commit to Git)
- Use 0.0.0.0/0 only for development/deployment platforms
- Regularly rotate passwords

❌ **DON'T:**
- Share your connection string publicly
- Commit .env file to GitHub
- Use simple passwords
- Share database credentials

## Next Steps

After MongoDB setup:
1. ✅ Copy your connection string
2. ✅ Add to backend/.env file
3. ✅ Test locally: `cd backend && npm start`
4. ✅ Add to Render environment variables
5. ✅ Deploy your application

## Need Help?

- MongoDB Atlas Docs: https://docs.atlas.mongodb.com
- MongoDB University (Free): https://university.mongodb.com
- Support: https://support.mongodb.com

Your MongoDB cluster is now ready! 🎉
