# 🌟 Trinh Trung Tai — Interactive 3D Developer Portfolio

Welcome to my personal developer portfolio! This is a premium, interactive 3D website designed to showcase my projects, professional experiences, and technical skills as a Full-Stack Backend & Embedded Systems Engineer.

Built using **React, Vite, Three.js (React Three Fiber/Drei), Tailwind CSS, and GSAP**, the site delivers a high-performance, immersive 3D experience designed to wow recruiters and clients.

---

## 🚀 Key Features

*   **Immersive 3D Visuals**: Features interactive, optimized 3D models rendered in real-time using Three.js, `@react-three/fiber`, and `@react-three/drei`.
*   **High-Performance Scrolling & Animations**: Uses **GSAP (GreenSock)** for physics-based fluid scroll interactions, micro-animations, text-stagger effects, and component entrances.
*   **Professional Timeline**: Interactive glowing experience cards highlighting my engineering roles at ATOM Solution, Pidu Digital, and Tami Technology.
*   **Work Showcase**: Carousel and gallery highlighting key production and personal projects (Studio OS, ShoesStore E-Commerce, and Stock Market Tracker).
*   **Real-time Contact Portal**: Fully functional message delivery integrated with **EmailJS**.
*   **Modern Responsive Layout**: Sleek, glassmorphic design that scales beautifully across mobile, tablet, and ultra-wide monitor screens.

---

## 🛠️ Tech Stack

*   **Core**: React 19, Vite, JavaScript (ES6+), TypeScript
*   **Styling**: Tailwind CSS
*   **3D Graphics**: Three.js, `@react-three/fiber`, `@react-three/drei`
*   **Animations**: GSAP, `@gsap/react`
*   **Form Infrastructure**: EmailJS
*   **Linting & Quality**: ESLint

---

## 💻 Getting Started & Local Setup

To run this project locally, follow these instructions:

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
*   [npm](https://www.npmjs.com/) (installed with Node)

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Trung-Tai/my-portfolio.git
    cd my-portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**:
    Create a `.env` file in the root directory and add your EmailJS configuration parameters:
    ```env
    VITE_APP_EMAILJS_SERVICE_ID=your_service_id
    VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
    ```

4.  **Start the development server**:
    ```bash
    npm run dev
    ```

5.  **Build for production**:
    ```bash
    npm run build
    ```
    The build output will be compiled inside the `dist/` directory, ready to be deployed to platforms like Vercel, Netlify, or VPS.

---

## 📁 Directory Structure

```
├── public/                # 3D GLB/GLTF models, static assets, and images
├── src/
│   ├── components/        # Reusable UI elements (Buttons, GlowCards, Counter)
│   │   └── models/        # 3D Canvas wrapper components
│   ├── constants/         # Static configuration arrays (experiences, testimonials, links)
│   ├── sections/          # Main sections of the landing page (Hero, Experience, Showcase, TechStack, Contact)
│   ├── index.css          # Styling tokens, variables, and layouts
│   ├── App.jsx            # Entry page routing and layout
│   └── main.jsx           # App bootstrapping
├── index.html             # HTML root document
├── package.json           # Project manifests and scripts
└── vite.config.js         # Vite compilation configuration
```

---

## 📄 License & Credits

Designed and developed by **Trinh Trung Tai** © {new Date().getFullYear()}. All rights reserved.
Developed with templates and guidance for custom 3D web experiences. Open source contributions are welcome!
