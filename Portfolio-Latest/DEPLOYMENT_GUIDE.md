# 🚀 Panduan Deployment Portfolio ke Vercel

Panduan lengkap untuk men-deploy website portfolio Anda ke Vercel dengan domain custom dan optimasi performa.

## 📋 Persiapan Sebelum Deploy

### 1. Checklist Konten
- [ ] Ganti semua "Your Name" dengan nama lengkap Anda
- [ ] Update email dan informasi kontak di semua komponen
- [ ] Ganti link social media (GitHub, LinkedIn)
- [ ] Update data proyek di `components/Projects.tsx`
- [ ] Sesuaikan achievement di `components/Achievements.tsx`
- [ ] Update timeline di `components/Resume.tsx`
- [ ] Ganti tagline dan deskripsi di `components/Hero.tsx`

### 2. SEO dan Meta Tags
Update file `app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: 'Nama Anda - Teaching Assistant & Education-AI Enthusiast',
  description: 'Portfolio profesional untuk Apple Developer Academy Indonesia',
  openGraph: {
    url: 'https://nama-anda.vercel.app', // Ganti dengan domain Anda
    title: 'Nama Anda - Portfolio',
    // ... update semua metadata
  },
}
```

## 🌐 Method 1: Deploy via GitHub (Recommended)

### Step 1: Setup GitHub Repository
1. Buat repository baru di GitHub
2. Initialize git dan push kode:
```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
git remote add origin https://github.com/username/portfolio.git
git push -u origin main
```

### Step 2: Connect ke Vercel
1. Buka [vercel.com](https://vercel.com) dan login
2. Klik "New Project"
3. Import repository GitHub Anda
4. Vercel akan otomatis detect Next.js dan configure build settings
5. Klik "Deploy"

### Step 3: Domain Custom (Opsional)
1. Beli domain dari registrar (Namecheap, GoDaddy, dll)
2. Di Vercel Dashboard → Project → Settings → Domains
3. Add domain Anda
4. Configure DNS records di registrar:
   - Type: A, Name: @, Value: 76.76.19.61
   - Type: CNAME, Name: www, Value: cname.vercel-dns.com

## ⚡ Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

### Step 2: Login dan Deploy
```bash
vercel login
vercel --prod
```

## 🔧 Environment Variables (Jika Diperlukan)

Jika menggunakan external services:

1. Di Vercel Dashboard → Project → Settings → Environment Variables
2. Add variables seperti:
   - `NEXT_PUBLIC_FORM_ENDPOINT` (untuk contact form)
   - `NEXT_PUBLIC_GA_ID` (untuk Google Analytics)

## 📊 Optimasi Performa

### 1. Images Optimization
Gunakan Next.js Image component untuk gambar:
```tsx
import Image from 'next/image'

<Image
  src="/profile.jpg"
  alt="Profile"
  width={500}
  height={500}
  priority
/>
```

### 2. Lighthouse Score
Test performa di [PageSpeed Insights](https://pagespeed.web.dev/):
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

### 3. Core Web Vitals
Pastikan metrics bagus:
- LCP (Largest Contentful Paint) < 2.5s
- FID (First Input Delay) < 100ms
- CLS (Cumulative Layout Shift) < 0.1

## 🔄 Auto Deployment

Setiap kali Anda push ke GitHub main branch, Vercel akan otomatis:
1. Build project
2. Run tests (jika ada)
3. Deploy ke production
4. Update domain

## 🐛 Troubleshooting Deployment

### Build Errors
```bash
# Local test build
npm run build

# Check untuk TypeScript errors
npm run lint
```

### Vercel Build Issues
1. Check build logs di Vercel Dashboard
2. Pastikan semua dependencies ada di `package.json`
3. Verify Node.js version compatibility

### Domain Issues
1. DNS propagation bisa butuh 24-48 jam
2. Check DNS records dengan tools seperti [whatsmydns.net](https://www.whatsmydns.net/)
3. Pastikan SSL certificate ter-generate otomatis

## 📈 Analytics & Monitoring

### Google Analytics (Opsional)
1. Buat GA4 property
2. Add tracking code ke `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Vercel Analytics
Enable di Vercel Dashboard → Project → Analytics untuk mendapat insights tentang:
- Page views
- Performance metrics
- User demographics

## 🚀 Post-Deployment Checklist

- [ ] Test website di berbagai device dan browser
- [ ] Verify semua links berfungsi
- [ ] Test contact form
- [ ] Check loading speed
- [ ] Verify SEO meta tags dengan tools seperti [metatags.io](https://metatags.io/)
- [ ] Submit sitemap ke Google Search Console
- [ ] Share link portfolio di social media

## 📞 Support & Resources

### Vercel Documentation
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Domains](https://vercel.com/docs/concepts/projects/domains)
- [Custom Domain Setup](https://vercel.com/docs/concepts/projects/domains/add-a-domain)

### Performance Tools
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [Web.dev Measure](https://web.dev/measure/)

---

✨ **Selamat! Portfolio Anda sekarang sudah live dan siap untuk aplikasi Apple Developer Academy Indonesia!** 