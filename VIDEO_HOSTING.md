# Video Hosting Setup

## Issue
Vercel doesn't support Git LFS during builds, so large video files stored in Git LFS won't be available on the deployed site.

## Solution: Use Cloudinary (Recommended)

### Step 1: Create a Cloudinary Account
1. Go to [cloudinary.com](https://cloudinary.com) and sign up (free tier available)
2. Get your Cloud Name, API Key, and API Secret from the dashboard

### Step 2: Upload Videos to Cloudinary
1. Upload `hero_video.mp4` and `creativity_unlocked.mp4` to Cloudinary
2. Get the public URLs for each video

### Step 3: Update Components
Replace the video sources in:
- `components/Hero.tsx` - Update `/hero_video.mp4` to Cloudinary URL
- `components/VideoExpand.tsx` - Update `/creativity_unlocked.mp4` to Cloudinary URL

### Example:
```tsx
<source src="https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/v1234567890/hero_video.mp4" type="video/mp4" />
```

## Alternative: Compress Videos
If you prefer to keep videos in the repository:
1. Compress `hero_video.mp4` to under 100MB
2. Remove Git LFS tracking
3. Commit videos directly to Git

## Current Status
- Videos are currently tracked in Git LFS
- They need to be hosted externally or compressed to work on Vercel

