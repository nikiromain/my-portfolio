# Video Hosting Setup

## Issue
Vercel doesn't support Git LFS during builds, so large video files stored in Git LFS won't be available on the deployed site.

## Current Status
- ✅ `creativity_unlocked.mp4` (19.44 MB) - Added to Git directly (under 100MB limit)
- ❌ `hero_video.mp4` (133.68 MB) - Too large for Git, needs external hosting

## Solution: Use Cloudinary (Recommended)

### Step 1: Create a Cloudinary Account
1. Go to [cloudinary.com](https://cloudinary.com) and sign up (free tier available)
2. Get your Cloud Name from the dashboard

### Step 2: Upload Hero Video to Cloudinary
1. Upload `hero_video.mp4` to Cloudinary
2. Get the public URL for the video (it will look like: `https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/v1234567890/hero_video.mp4`)

### Step 3: Set Environment Variable in Vercel
1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add a new variable:
   - **Name:** `NEXT_PUBLIC_HERO_VIDEO_URL`
   - **Value:** Your Cloudinary video URL
   - **Environment:** Production, Preview, Development (select all)
4. Redeploy your site

### Step 4: Verify
The hero video will now use the Cloudinary URL instead of the local file.

## Alternative: Compress Video
If you prefer to keep the video in the repository:
1. Compress `hero_video.mp4` to under 100MB using a tool like HandBrake or FFmpeg
2. Add the compressed video to Git: `git add public/hero_video.mp4`
3. Commit and push

## Local Development
For local development, the video will fall back to `/hero_video.mp4` if the environment variable is not set. Make sure the file exists in the `public/` folder locally.

