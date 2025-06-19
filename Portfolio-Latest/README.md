# Portfolio Website - Apple Developer Academy Indonesia

Website portofolio profesional yang dibangun dengan Next.js 14, Tailwind CSS, dan Framer Motion untuk aplikasi Apple Developer Academy Indonesia.

## ✨ Fitur Utama

- **Modern Design**: UI/UX yang clean dan profesional
- **Responsive**: Optimal di semua perangkat (mobile-first approach)
- **Smooth Animations**: Menggunakan Framer Motion untuk transisi yang halus
- **SEO Optimized**: Meta tags dan struktur yang SEO-friendly
- **Fast Loading**: Optimasi performa dan loading speed
- **Interactive Contact Form**: Form kontak yang functional
- **TypeScript**: Type safety untuk development yang lebih robust

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel

## 📁 Struktur Project

```
portfolio-website/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Achievements.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   ├── Projects.tsx
│   └── Resume.tsx
├── public/
│   └── (assets seperti images, favicon, dll)
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🚀 Quick Start

### 1. Clone Repository

```bash
git clone <repository-url>
cd portfolio-website
```

### 2. Install Dependencies

```bash
npm install
# atau
yarn install
# atau
pnpm install
```

### 3. Kustomisasi Konten

Ganti placeholder content dengan informasi pribadi Anda:

#### a. Update Informasi Pribadi
- Ganti "Your Name" dengan nama lengkap Anda
- Update email, phone, dan social media links
- Ganti placeholder projects dengan proyek nyata Anda

#### b. File yang Perlu Diupdate:
- `app/layout.tsx` - Meta tags dan SEO information
- `components/Hero.tsx` - Nama, tagline, dan social links
- `components/About.tsx` - Deskripsi pribadi dan skills
- `components/Projects.tsx` - Data proyek-proyek Anda
- `components/Achievements.tsx` - Pencapaian dan awards
- `components/Resume.tsx` - Timeline pendidikan dan pengalaman
- `components/Contact.tsx` - Informasi kontak
- `components/Footer.tsx` - Footer information

### 4. Jalankan Development Server

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat website.

## 🎨 Kustomisasi Design

### Warna
Edit `tailwind.config.js` untuk mengubah color palette:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Ubah warna primary sesuai keinginan
        500: '#3b82f6',
        600: '#2563eb',
        // ...
      }
    }
  }
}
```

### Font
Ganti font di `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
```

## 📱 Sections Website

1. **Hero/Landing** - Nama, tagline, CTA buttons
2. **About Me** - Profil singkat dan skills
3. **Projects** - Portfolio proyek dengan ProjectCard reusable
4. **Achievements** - Prestasi, beasiswa, dan awards
5. **Resume/Timeline** - Pendidikan, experience, organisasi
6. **Contact** - Form kontak dan informasi kontak
7. **Footer** - Social links dan copyright

## 🚀 Deployment ke Vercel

### Method 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login ke Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel --prod
```

### Method 2: GitHub Integration

1. Push code ke GitHub repository
2. Buka [vercel.com](https://vercel.com)
3. Import repository Anda
4. Configure build settings (otomatis terdeteksi untuk Next.js)
5. Deploy!

### Environment Variables (Opsional)

Jika menggunakan form backend atau analytics:

```bash
# .env.local
NEXT_PUBLIC_FORM_ENDPOINT=your-form-endpoint
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 🌐 Custom Domain

### Setup Custom Domain di Vercel:

1. Beli domain dari registrar (Namecheap, GoDaddy, dll)
2. Di Vercel Dashboard → Project → Settings → Domains
3. Add domain Anda
4. Configure DNS records:
   - Type: A, Name: @, Value: 76.76.19.61
   - Type: CNAME, Name: www, Value: cname.vercel-dns.com

## 📊 Performance & SEO

Website ini sudah dioptimasi untuk:

- ✅ **Core Web Vitals** - Loading speed optimal
- ✅ **SEO** - Meta tags, Open Graph, structured data
- ✅ **Accessibility** - ARIA labels, semantic HTML
- ✅ **Mobile-First** - Responsive design
- ✅ **Image Optimization** - Next.js Image component

## 🔧 Troubleshooting

### Common Issues:

1. **Framer Motion animations tidak bekerja**
   - Pastikan component menggunakan `'use client'` directive

2. **Tailwind classes tidak apply**
   - Check `tailwind.config.js` content paths
   - Restart development server

3. **Build errors**
   - Check TypeScript errors: `npm run lint`
   - Fix import paths dengan @/ alias

### Build untuk Production:

```bash
npm run build
npm run start
```

## 📞 Support

Jika ada pertanyaan atau butuh bantuan:

1. Check documentation di atas
2. Lihat [Next.js Documentation](https://nextjs.org/docs)
3. Baca [Tailwind CSS Documentation](https://tailwindcss.com/docs)
4. Check [Framer Motion Documentation](https://www.framer.com/motion/)

## 📝 Checklist Sebelum Deploy

- [ ] Update semua informasi pribadi
- [ ] Test responsive design di berbagai device
- [ ] Check semua links (social media, email, etc.)
- [ ] Test form kontak
- [ ] Verify SEO meta tags
- [ ] Add real project images
- [ ] Update CV/resume link
- [ ] Test performance dengan Lighthouse
- [ ] Setup custom domain (optional)

## 🎉 Good Luck!

Semoga portfolio website ini membantu Anda diterima di Apple Developer Academy Indonesia! 🍎

---

**Made with ❤️ using Next.js & Tailwind CSS** 