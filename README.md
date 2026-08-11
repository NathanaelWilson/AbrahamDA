# Abraham Da — Portfolio Website

Website portfolio pribadi (Next.js + Tailwind CSS v4). Style minimalis, dominan putih, aksen Deep Forest Green, font Fraunces (display, italic) + Inter (body).

## Struktur

- `app/page.tsx` — single page: Hero, About, Portfolio preview (2 karya + tombol View More), Contact.
- `app/portfolio/page.tsx` — halaman khusus portfolio: tab filter kategori + grid asimetris + modal video YouTube.
- `lib/data.ts` — **semua konten placeholder ada di sini**: nama karya, klien, kategori, deskripsi, dan `youtubeId`. Ganti dengan data project asli.
- `components/` — Nav, Hero, About, PortfolioPreview, Contact, Footer, PortfolioGrid, VideoModal, Waveform (elemen dekoratif).

## Yang masih perlu diganti (placeholder)

- `lib/data.ts` — ganti 7 project contoh dengan project asli + `youtubeId` video YouTube masing-masing.
- `components/Contact.tsx` — nomor WhatsApp, link Instagram/YouTube/LinkedIn.
- `components/About.tsx` — domisili & email jika belum sesuai.
- `app/layout.tsx` — metadata title/description.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Build production

```bash
npm run build
npm run start
```

## Deploy

Paling gampang lewat [Vercel](https://vercel.com/new) — connect repo, deploy otomatis. Next.js 16, App Router, Tailwind v4, tidak butuh konfigurasi tambahan.
