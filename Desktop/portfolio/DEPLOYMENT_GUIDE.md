# 🚀 Deploy Portfolio to Vercel & GitHub

## Step 1: Create GitHub Repository

### Option A: Using GitHub Website (Recommended)
1. Go to https://github.com/new
2. Repository name: `portfolio` (or your preferred name)
3. Choose **Public** or **Private** visibility
4. **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **Create repository**

### Option B: Using GitHub CLI
```bash
gh repo create portfolio --public --source=. --remote=origin
```

## Step 2: Connect Local Repository to GitHub

After creating the repository on GitHub, run these commands:

```bash
# Replace YOUR_USERNAME with your GitHub username
# Replace REPO_NAME with your repository name (e.g., portfolio)

git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/RamaSaiJahnavi/portfolio.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel

### Method 1: Using Vercel Dashboard (Easiest)

1. **Go to Vercel**: https://vercel.com/dashboard
2. **Sign in/Login** with GitHub account
3. **Click "Add New Project"**
4. **Import Git Repository**:
   - Select your portfolio repository from the list
   - Click **Import**
5. **Configure Project**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. **Click "Deploy"**
7. **Wait for deployment** (usually takes 1-2 minutes)
8. **Get your live URL**: Something like `https://portfolio-yourname.vercel.app`

### Method 2: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## Step 4: Update Project Links (Optional)

Once deployed, update your portfolio project cards with the new Vercel URL:

1. Open `src/components/Projects.jsx`
2. Find your portfolio project in the `projects` array
3. Update the `link` property with your Vercel URL

**Example:**
```javascript
{
  id: 1,
  title: 'Your Portfolio',
  link: 'https://portfolio-yourname.vercel.app'
}
```

## Step 5: Custom Domain (Optional)

If you want a custom domain:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Domains**
3. Add your custom domain
4. Follow DNS configuration instructions

## 🔧 Useful Commands

### Check Git Status
```bash
git status
```

### View Git Log
```bash
git log --oneline
```

### Make Changes and Push
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

### Re-deploy to Vercel
Vercel automatically redeploys when you push to GitHub!

## 📱 Testing Your Deployment

1. Open your Vercel URL in a browser
2. Test all sections: Hero, Skills, Projects, Education, etc.
3. Click on project links to verify they work
4. Check responsive design on mobile devices
5. Test chatbot functionality

## 🎨 Post-Deployment Checklist

- ✅ All sections load correctly
- ✅ Images display properly
- ✅ Animations work smoothly
- ✅ Project links open correct URLs
- ✅ Contact information is accurate
- ✅ Responsive on mobile/tablet/desktop
- ✅ Chatbot functions properly
- ✅ Smooth scrolling navigation works

## 🐛 Troubleshooting

### Build Fails on Vercel
1. Check Vercel deployment logs for errors
2. Ensure all dependencies are in `package.json`
3. Run `npm run build` locally to test
4. Check for TypeScript/type errors if applicable

### Images Not Loading
1. Verify images are in the `public` folder or imported correctly
2. Check image paths are relative
3. Ensure images are committed to Git

### CSS Not Applying
1. Verify CSS files are imported in components
2. Check for path issues in import statements
3. Clear browser cache and redeploy

## 📊 Environment Variables (if needed)

If your project needs API keys or environment variables:

1. Go to Vercel project → **Settings** → **Environment Variables**
2. Add variables (e.g., `VITE_API_KEY`, `VITE_BACKEND_URL`)
3. Redeploy the project

## 🎉 Success!

Your portfolio is now live on Vercel and connected to GitHub!

Every time you push changes to GitHub, Vercel will automatically redeploy your site.

---

**Quick Links:**
- Vercel Dashboard: https://vercel.com/dashboard
- GitHub Repositories: https://github.com/my-repositories
- Vercel Docs: https://vercel.com/docs
- Vite Deployment Guide: https://vitejs.dev/guide/static-deploy.html
