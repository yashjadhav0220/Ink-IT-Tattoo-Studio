# 🖋️ Ink IT Tattoo Studio — Official Web Application

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg)](https://tailwindcss.com/)
[![Location](https://img.shields.io/badge/Location-Kasba_Peth%2C_Pune-rose.svg)](https://maps.google.com/?q=Ink+It+Tattoo+Studio+Pune)

A high-performance, dark-aesthetic Single Page Application (SPA) designed and engineered for **Ink IT Tattoo Studio**, located near Shaniwar Wada in Kasba Peth, Pune.

---

## 📸 Key Features

### 1. ⚡ Studio Identity & Hero Section
* **Official Branding**: Integrated studio logo, location indicators, and verified credibility badges.
* **Trust Metrics**: Displays 10+ years of artistry, 5,000+ custom tattoos completed, and 100% sterile safety pledge.
* **Direct Google Reviews**: Verified link with direct modal integration to official Google Reviews (4.9 ★).

### 2. 🎨 Curated Client Portfolio & Lightbox
* **Real Studio Work**: Showcases original custom pieces:
  * *Sacred Dharmachakra Mandala (Forearm)*
  * *Graceful Rising Phoenix (Forearm)*
  * *Minimalist Botanical Phoenix (Wrist)*
* **Interactive Lightbox**: Full-screen inspection modal displaying technique notes (*Single-Needle 3RL, soft grey-wash shading*).
* **Instagram Discovery**: One-tap link to the official [`@inkit_tattoostudio`](https://www.instagram.com/inkit_tattoostudio/) profile.

### 3. 🧮 Tattoo Price Calculator & Pain Guide
* **Transparent Pricing Formula**: Real-time calculation based on the standard studio rate of **₹750 per square inch** (`Area = Width × Height × ₹750`).
* **Live Size Scale Preview**: An interactive visual container that physically scales on screen as dimensions change.
* **1-Click Presets**: Fast presets for Minimalist (2"×2"), Wrist (3"×2"), Palm (4"×4"), and Half-Arm (4"×7").
* **First-Timer Pain Scale**: Color-coded anatomical guide highlighting Mild, Moderate, and Spicy sensitivity zones.

### 4. 🛡️ Official Studio Aftercare Roadmap
* Digitized directly from Ink IT Tattoo Studio's official wall protocol:
  * **Phase 1 (First Day)**: 1-hour cling wrap removal, Dove soap foam wash, 20-minute air dry rule. *Zero re-wrapping.*
  * **Phase 2 (Week 1)**: Water protection, loose clothing guidelines, normalization of mild itching/soreness.
  * **Phase 3 (Weeks 2–3+)**: Thin-layer cream application schedule and transition to gentle moisturizer.
  * **Strict "Do Not" Rules**: Explicit warnings against Vaseline/oils, scratching/peeling, and swimming pools.
  * **Health & Safety Notice**: Infection signs and studio touch-up policy.

### 5. 📍 Studio Location & Interactive Pune Map
* **Exact Studio Address**: 1413, Kasba Peth, Shivaji Maharaj Road, Near Shaniwar Wada, Pune – 411011.
* **Live Google Map**: Embedded map view with a 1-click **"Get Directions in Google Maps"** navigation button.
* **Direct Call Lines**: One-tap phone links to `+91 90212 09377` and `+91 86682 63522`.
* **Timings & Landmark**: Open daily from 11:00 AM – 9:00 PM, opposite historical Shaniwar Wada Delhi Gate.

### 6. 🧭 Dynamic Scrollspy Navigation
* Top navigation bar tracks the user's scroll position live and highlights the active section with a custom rounded border box.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | Component architecture & client-side UI rendering |
| **Vite 5** | Lightning-fast build tool & local development environment |
| **Tailwind CSS 3** | Responsive utility styling, custom gradients, and dark theme |
| **Lucide React** | Clean SVG iconography |
| **React Router DOM** | Client-side routing foundation |

---

## 🚀 Getting Started (Local Development)

### Prerequisites
* **Node.js** (`v18.0.0` or higher)
* **npm** (`v8.0.0` or higher)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yashjadhav0220/Ink-IT-Tattoo-Studio.git
   cd Ink-IT-Tattoo-Studio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The compiled static files will be generated in the `dist/` directory, ready for 1-click deployment to Vercel, Netlify, or GitHub Pages.

---

## 📁 Project Structure

```text
Tattoo_Web_App/
├── public/
│   ├── logo.png               # Official Ink IT Tattoo Studio logo
│   └── portfolio/             # High-res client tattoo photography
│       ├── Tattoo_1.png       # Dharmachakra Mandala
│       ├── Tattoo_2.png       # Rising Phoenix
│       └── Tattoo_3.png       # Minimalist Botanical Phoenix
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Sticky header with live Scrollspy highlight
│   │   ├── Hero.jsx           # Studio showcase, stats, and Google Reviews
│   │   ├── Gallery.jsx        # Artwork grid with full-screen Lightbox
│   │   ├── Estimator.jsx      # ₹750/sq.in calculator & pain guide
│   │   ├── Aftercare.jsx      # Official 3-phase studio aftercare guide
│   │   └── StudioLocation.jsx # Pune address, direct calls & Google Maps
│   ├── App.jsx                # Application root & smooth scroll handlers
│   ├── index.css              # Tailwind base & custom directives
│   └── main.jsx               # React DOM entry point
├── index.html                 # HTML shell with favicon & SEO meta tags
├── package.json               # Dependencies & scripts
├── tailwind.config.js         # Tailwind configuration
└── vite.config.js             # Vite configuration
```

---

## 📍 Studio Information
* **Studio Name**: Ink IT Tattoo Studio
* **Address**: 1413, Kasba Peth, Shivaji Maharaj Road, Near Shaniwar Wada, Pune, Maharashtra – 411011
* **Contact Numbers**: +91 90212 09377 / +91 86682 63522
* **Instagram**: [@inkit_tattoostudio](https://www.instagram.com/inkit_tattoostudio/)

---

## 📄 License
This project is proprietary and maintained for **Ink IT Tattoo Studio**. All tattoo artwork, photography, and branding rights belong to the studio.
