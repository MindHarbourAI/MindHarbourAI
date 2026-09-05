# MindHarborAI Cloud Deployment & Product URL Configuration Guide

This guide explains how to configure and modify the destination links for **SailAnchor** and **SailTask** from the main **MindHarborAI** landing page when deploying your applications to cloud hosting platforms (e.g. AWS, Vercel, Netlify, Docker, or Kubernetes).

---

## 1. How Product Redirection Works

When visitors click **"Explore SailAnchor"** or **"Explore SailTask"** on the MindHarborAI landing page cards or footer links, the application dynamically resolves the destination URL from the central configuration file at:

📁 **[`src/config/urls.ts`](file:///D:/MindHarborAi/Mindharbourai/src/config/urls.ts)**

---

## 2. Option A: Configure via Environment Variables (Recommended for Cloud)

When deploying to cloud providers, set environment variables in your deployment dashboard or `.env` file **before building the production bundle**. Vite automatically bakes `VITE_` prefixed variables into the static bundle during build time.

### Required Environment Variables

```env
# SailAnchor Landing Page / Web App URL
VITE_SAILANCHOR_URL=https://sailanchor.your-domain.com

# SailTask Landing Page / Web App URL
VITE_SAILTASK_URL=https://sailtask.your-domain.com
```

### Cloud Provider Setup Instructions

#### A. Vercel / Netlify / Render
1. Go to your Project Settings -> **Environment Variables**.
2. Add key: `VITE_SAILANCHOR_URL` with value: `https://sailanchor.yourdomain.com`
3. Add key: `VITE_SAILTASK_URL` with value: `https://sailtask.yourdomain.com`
4. Trigger a **Redeploy** so Vite embeds the environment variables.

#### B. Docker / Docker Compose
Add environment variables under build args or container env in your `docker-compose.yml`:
```yaml
services:
  mindharbor-landing:
    build:
      context: ./Mindharbourai
      args:
        VITE_SAILANCHOR_URL: "https://sailanchor.yourdomain.com"
        VITE_SAILTASK_URL: "https://sailtask.yourdomain.com"
```

---

## 3. Option B: Modify Directly in Source Code

If you prefer to hardcode the URLs directly in the codebase:

1. Open the file **`src/config/urls.ts`**:
   ```typescript
   export const PRODUCT_URLS = {
     sailanchor: import.meta.env.VITE_SAILANCHOR_URL || 'https://sailanchor.yourdomain.com',
     sailtask: import.meta.env.VITE_SAILTASK_URL || 'https://sailtask.yourdomain.com',
   }
   ```
2. Replace `'https://sailanchor.yourdomain.com'` and `'https://sailtask.yourdomain.com'` with your actual deployed domains.
3. Rebuild the application:
   ```bash
   npm run build
   ```

---

## 4. Key Files & Components Summary

| Purpose | File Path | Description |
|---|---|---|
| **Central URL Config** | [`src/config/urls.ts`](file:///D:/MindHarborAi/Mindharbourai/src/config/urls.ts) | Defines `PRODUCT_URLS.sailanchor` and `PRODUCT_URLS.sailtask` |
| **Product Showcase Cards** | [`src/components/Products.tsx`](file:///D:/MindHarborAi/Mindharbourai/src/components/Products.tsx) | Renders "Explore SailAnchor" & "Explore SailTask" buttons |
| **Footer Links** | [`src/components/Footer.tsx`](file:///D:/MindHarborAi/Mindharbourai/src/components/Footer.tsx) | Renders footer links under the "Products" column |
| **Environment Template** | [`.env.example`](file:///D:/MindHarborAi/Mindharbourai/.env.example) | Example environment configuration file |

---

## 5. Testing Local & Production Redirection

* **Local Development:** Run `npm run dev`. Clicking "Explore SailAnchor" will open `http://localhost:3000` (or your local port), and "Explore SailTask" will open `http://localhost:3001`.
* **Production Deployment:** Verify that clicking either button opens your live cloud URL in a new tab.
