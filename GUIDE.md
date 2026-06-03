# Priventry Company Profile - Developer Guide

Dokumen ini berisi panduan lengkap mengenai arsitektur, teknologi, struktur folder, cara instalasi, dan cara menjalankan proyek Company Profile **Priventry.ai**. Dokumen ini dibuat agar siapa saja yang menggunakan atau melanjutkan pengembangan kode ini dapat langsung mengerti seluruh struktur proyek dengan mudah.

---

## 🚀 Teknologi Utama (Tech Stack)

Proyek ini dibangun menggunakan teknologi web modern berkinerja tinggi untuk menghadirkan pengalaman profil perusahaan yang interaktif, mewah, dan dinamis.

1. **Astro Framework (v5.0.0)**: Framework web modern yang berorientasi pada kecepatan (zero-JS by default) dan mendukung perutean berbasis file (*file-based routing*) serta pembuatan situs statis (Static Site Generation / SSG).
2. **TypeScript**: Menyediakan dukungan pengetikan statis (*static typing*) untuk menjaga keandalan kode.
3. **Vanilla CSS (CSS Variables)**: Desain kustom menggunakan CSS murni yang fleksibel dengan pengaturan variabel global (CSS Variables) untuk menjaga konsistensi desain sistem tanpa dependensi utility class yang berat.
4. **GSAP (GreenSock Animation Platform) & ScrollTrigger**: Digunakan untuk animasi premium berskala tinggi, efek transisi, parallax, efek bouncy, serta interaksi scroll-driven yang halus.
5. **Lenis Scroll**: Pustaka scroll halus (*smooth scrolling*) modern untuk memberikan pengalaman navigasi halaman yang sangat premium dan konsisten di seluruh peramban.
6. **SplitType**: Pustaka utilitas untuk memotong teks menjadi baris (*lines*), kata (*words*), atau karakter (*chars*) untuk dianimasikan dengan GSAP (misalnya efek pengetikan otomatis pada judul Hero).
7. **Three.js**: Digunakan untuk me-render shader WebGL interaktif (seperti pada kanvas di halaman layanan) untuk menciptakan efek visual latar belakang yang dinamis.
8. **Lucide Astro**: Kumpulan ikon SVG modern berbasis komponen Astro yang ringan dan tajam.

---

## 🛠️ Persyaratan Sistem & Instalasi

### Persyaratan
* **Node.js**: Versi `>= 18.17.1` (Direkomendasikan menggunakan versi LTS terbaru).
* **NPM**: Pengelola paket bawaan Node.js.

### Langkah Instalasi
1. Pastikan Anda berada di direktori proyek:
   ```bash
   cd Compro-Xenon
   ```
2. Instal semua dependensi proyek menggunakan npm:
   ```bash
   npm install
   ```

---

## 🖥️ Cara Menjalankan Proyek

Berikut adalah perintah-perintah NPM yang tersedia di `package.json`:

* **Menjalankan Server Pengembangan (Lokal)**:
  ```bash
  npm run dev
  ```
  Aplikasi akan berjalan di `http://localhost:4321/`. Server lokal ini mendukung *Hot Module Replacement* (HMR) sehingga setiap perubahan kode langsung terlihat tanpa memuat ulang halaman secara manual.

* **Membuat Build Produksi (Kompilasi Statis)**:
  ```bash
  npm run build
  ```
  Astro akan mengompilasi seluruh halaman menjadi file HTML, CSS, dan JavaScript statis di dalam folder `/dist/`. Hasil build ini siap di-deploy ke layanan hosting statis (Vercel, Netlify, Cloudflare Pages, GitHub Pages, dll).

* **Melihat Preview Hasil Build Produksi**:
  ```bash
  npm run preview
  ```
  Menjalankan server lokal untuk melihat preview hasil kompilasi statis dari folder `/dist/`.

---

## 📁 Struktur Direktori & Penjelasan Kode

Berikut adalah pohon direktori proyek **Priventry**:

```text
Compro-Xenon/
├── .astro/                 # Cache internal yang digunakan oleh Astro (dihasilkan otomatis)
├── .vscode/                # Konfigurasi workspace editor Visual Studio Code
├── dist/                   # Output dari hasil build produksi statis (dihasilkan otomatis)
├── node_modules/           # Paket/dependensi Node.js yang terinstal (dihasilkan otomatis)
├── public/                 # File aset statis publik (dapat diakses langsung melalui URL "/")
│   ├── favicon.ico         # Ikon browser tradisional
│   ├── favicon.svg         # Ikon browser modern berbentuk SVG
│   └── images/             # Folder penyimpan gambar & ilustrasi
│       ├── logo.png        # Logo utama horizontal (Ikon P + Teks "Priventry") - Transparan Putih
│       ├── logo2.png       # Logo favicon/tab browser persegi (Ikon "P" saja) - Transparan Putih
│       └── [gambar_lain]   # Gambar portofolio, latar belakang hero, dan visual lainnya
├── src/                    # Source code utama aplikasi
│   ├── components/         # Komponen-komponen UI modular (.astro)
│   │   ├── common/         # Komponen global yang digunakan di seluruh halaman
│   │   │   ├── Breadcrumbs.astro    # Navigasi halaman detail
│   │   │   ├── Footer.astro         # Bagian kaki halaman dengan gelombang bounce dinamis
│   │   │   ├── Navbar.astro         # Menu navigasi atas (responsif mobile)
│   │   │   ├── Preloader.astro      # Animasi loading layar penuh saat pertama kali masuk
│   │   │   ├── ScrollToTop.astro    # Tombol kembali ke atas dengan indikator progress
│   │   │   └── SubNavbar.astro      # Menu navigasi untuk sub-halaman (detail)
│   │   └── home/           # Komponen section khusus untuk halaman utama (Landing Page)
│   │       ├── About.astro          # Section tentang profil Priventry
│   │       ├── Contact.astro        # Formulir kontak minimalis & info kontak dengan link sosmed
│   │       ├── Hero.astro           # Banner utama dengan animasi ketik & interaksi slider sebelum-sesudah
│   │       ├── News.astro           # Section artikel wawasan/insights terbaru
│   │       ├── Services.astro       # Section daftar layanan unggulan perusahaan
│   │       └── Work.astro           # Section galeri studi kasus / portfolio proyek
│   ├── data/               # File data TypeScript statis (penampung konten website)
│   │   ├── news.ts         # Dataset artikel wawasan (judul, deskripsi, gambar, konten detail)
│   │   ├── projects.ts     # Dataset studi kasus / portfolio (proyek, klien, teknologi)
│   │   └── services.ts     # Dataset detail layanan (fitur, manfaat, metodologi)
│   ├── layouts/            # Template tata letak halaman (.astro)
│   │   └── Layout.astro    # Layout induk utama (mengatur meta tag, font Google, inisialisasi Lenis scroll)
│   ├── pages/              # Routing berbasis file (setiap file .astro di sini menjadi halaman web)
│   │   ├── index.astro     # Halaman utama (menggabungkan seluruh section Landing Page)
│   │   ├── about.astro     # Halaman khusus "About Us" yang lebih mendalam
│   │   ├── projects.astro  # Halaman portofolio lengkap / galeri studi kasus
│   │   ├── services.astro  # Halaman katalog layanan lengkap dengan background WebGL Shader
│   │   ├── news/
│   │   │   └── [slug].astro # Halaman dinamis artikel berita/insight berdasarkan slug data
│   │   ├── services/
│   │   │   └── [slug].astro # Halaman dinamis untuk detail layanan spesifik berdasarkan slug
│   │   └── work/
│   │       └── [slug].astro # Halaman dinamis untuk detail studi kasus portfolio berdasarkan slug
│   └── styles/             # Stylesheet CSS global
│       └── global.css      # CSS utama proyek (mengatur warna primer, font, reset, tombol, & transisi)
├── astro.config.mjs        # Konfigurasi utama framework Astro
├── package.json            # Berisi daftar dependensi NPM, versi Node.js, dan script perintah run
├── tsconfig.json           # Konfigurasi TypeScript untuk Astro
├── README.md               # File dokumentasi markdown bawaan proyek
└── GUIDE.md                # File panduan developer ini (Dokumentasi Arsitektur & Teknologi)
```

---

## 💡 Panduan Pengembangan Bagi Developer baru

### 1. Cara Mengubah Konten Website
Konten teks pada proyek ini telah dipisahkan ke dalam folder `src/data/` agar mudah diperbarui tanpa perlu mengedit file HTML/Astro secara langsung. 
* Untuk memperbarui daftar artikel: Edit file `src/data/news.ts`.
* Untuk memperbarui portofolio/klien: Edit file `src/data/projects.ts`.
* Untuk memperbarui informasi layanan: Edit file `src/data/services.ts`.

### 2. Cara Mengubah Sistem Desain (Warna & Font)
Warna utama dan tipografi didefinisikan secara global menggunakan **CSS Variables** di bagian `:root` pada file `src/styles/global.css`:
```css
:root {
  --primary: #FC9F21;            /* Warna Amber sebagai warna aksen utama */
  --bg: #0B080C;                 /* Warna latar belakang gelap utama */
  --text: #F5F5F5;               /* Warna teks utama terang */
  --text-muted: #A09BA0;         /* Warna teks sekunder (muted) */
  --font-primary: 'Manrope', sans-serif; /* Font utama */
  --font-display: 'Playfair Display', serif; /* Font judul display */
}
```
Ubah nilai variabel di atas untuk mengubah tema warna atau font di seluruh website secara instan.

### 3. Cara Menambahkan Halaman Baru
Gunakan perutean berbasis file Astro. Cukup buat file `.astro` baru di dalam folder `src/pages/`. Contoh:
* Membuat file `src/pages/contact.astro` otomatis membuat rute halaman baru diakses pada `localhost:4321/contact`.

---

## 🔒 Konfigurasi Git & GitHub
Proyek ini dikelola menggunakan Git. Folder build (`dist/`), cache internal (`.astro/`), serta dependensi (`node_modules/`) telah diabaikan melalui `.gitignore` untuk menjaga ukuran repositori tetap ringan.
