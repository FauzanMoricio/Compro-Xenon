# Priventry.ai - Quick Developer Guide

Panduan singkat dan langsung pada intinya agar developer baru bisa memahami dan menjalankan proyek ini dalam waktu kurang dari 5 menit.

---

## 🛠️ Tech Stack & Prasyarat
* **Framework**: Astro v5 (Static Site Generation - SSG)
* **Script & Style**: TypeScript & Vanilla CSS (CSS Variables)
* **Animasi**: GSAP + ScrollTrigger (Interaksi premium) & SplitType (Animasi teks)
* **Scroll**: Lenis Scroll (Buttery-smooth scroll)
* **3D/Shader**: Three.js (WebGL interactive background pada halaman services)
* **Prasyarat**: Node.js versi `>= 18.17.1`

---

## 🚀 Setup & Perintah Cepat
1. **Instalasi Dependensi**:
   ```bash
   npm install
   ```
2. **Server Lokal (Development)**:
   ```bash
   npm run dev
   ```
   *Buka `http://localhost:4321/`*
3. **Build Produksi (Kompilasi Statis)**:
   ```bash
   npm run build
   ```
   *Output berupa file HTML/CSS/JS statis di folder `/dist`*
4. **Preview Hasil Build**:
   ```bash
   npm run preview
   ```

---

## 📁 Struktur Folder & File Utama

* **/public/**: Aset statis yang langsung bisa diakses lewat URL
  * `images/logo.png`: Logo horizontal putih-transparan (Navbar/Footer)
  * `images/logo2.png`: Logo persegi ikon "P" (Favicon browser)
* **/src/**: Kode sumber utama
  * **components/**: Komponen modular (.astro)
    * `common/`: Komponen global (Navbar, Footer, Preloader, Breadcrumbs)
    * `home/`: Bagian/section Landing Page utama (Hero, About, Services, Work, Contact)
  * **layouts/**: Template induk halaman
    * `Layout.astro`: Template HTML utama (Inisialisasi Lenis & Google Fonts)
  * **pages/**: Routing berbasis file (Setiap file `.astro` di sini otomatis jadi halaman URL)
    * `index.astro`: Halaman Utama (Landing Page)
    * `about.astro`, `projects.astro`, `services.astro`: Halaman Statis Detail
    * `news/[slug].astro`, `work/[slug].astro`, `services/[slug].astro`: Rute halaman dinamis
  * **styles/**: CSS global
    * `global.css`: CSS utama (Variabel warna, font, reset, tombol)
  * **data/**: File database statis TypeScript untuk mempermudah edit konten
    * `news.ts`: Daftar artikel & wawasan
    * `projects.ts`: Portfolio/studi kasus proyek
    * `services.ts`: Detail daftar layanan

---

## ✍️ Cara Mengubah Konten & Tampilan

### 1. Mengubah Teks/Konten Website (Tanpa Edit HTML)
Cukup buka file di dalam `/src/data/` dan perbarui objek datanya:
* Edit artikel/berita: `src/data/news.ts`
* Edit proyek/portofolio: `src/data/projects.ts`
* Edit layanan: `src/data/services.ts`

### 2. Mengubah Warna & Font Global
Edit variabel CSS di `:root` pada file `src/styles/global.css`:
```css
:root {
  --primary: #FC9F21;            /* Warna aksen Amber */
  --bg: #0B080C;                 /* Latar belakang gelap */
  --text: #F5F5F5;               /* Warna teks utama */
  --font-primary: 'Manrope', sans-serif;
}
```

### 3. Menambah Halaman Baru
Tambahkan file `.astro` baru di `/src/pages/`. Rute URL akan terbentuk secara otomatis sesuai nama file.
