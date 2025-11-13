# Deploying to Vercel

## Method 1: Using Vercel CLI (Quickest)

### Step 1: Install Vercel CLI (Already Done ✅)
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```
This will open your browser to authenticate.

### Step 3: Deploy
From your project directory, run:
```bash
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No (for first deployment)
- **Project name?** → Press Enter to use default or enter a custom name
- **Directory?** → Press Enter (uses current directory)
- **Override settings?** → No

### Step 4: Deploy to Production
After the preview deployment, deploy to production:
```bash
vercel --prod
```

---

## Method 2: Using GitHub Integration (Recommended for Continuous Deployment)

### Step 1: Push to GitHub
1. Create a new repository on GitHub
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Import to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Configure:
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)
   - **Install Command:** `npm install` (default)

### Step 3: Deploy
Click **"Deploy"** - Vercel will automatically:
- Install dependencies
- Build your project
- Deploy to production

---

## Important Notes

### Environment Variables
If you have any environment variables, add them in:
- Vercel Dashboard → Your Project → Settings → Environment Variables

### Custom Domain
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### Automatic Deployments
With GitHub integration:
- **Production:** Deploys on push to `main` branch
- **Preview:** Deploys on pull requests

### Build Settings
Your `package.json` already has the correct scripts:
- `build`: `next build`
- `start`: `next start`

Vercel will automatically detect Next.js and use these.

---

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure `next.config.js` is properly configured
- Check build logs in Vercel dashboard

### Assets Not Loading
- Ensure files in `public/` folder are committed to git
- Check file paths (should start with `/` not `./`)

### Environment Variables
- Add any required env vars in Vercel dashboard
- Restart deployment after adding variables

---

## Quick Deploy Command
For future deployments, simply run:
```bash
vercel --prod
```

Or push to your main branch if using GitHub integration.

