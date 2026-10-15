# loibui.tech — Personal Portfolio & Career Path

A personal web application showcasing **Loi Bui**'s career path as a **Tech Lead & Senior Systems Architect**. Built with **TypeScript**, **Vite**, and **Vanilla CSS**.

---

## ✨ Features

- **🎯 Career Path Showcase**:
  - **Career Evolution Arc**: Visual trajectory overview across 4 distinct growth phases (Foundations → Full-Stack Velocity → Distributed Systems & Cloud → Tech Leadership & AI Workflows).
  - **Interactive Career Timeline**: Filter milestones by category (*Leadership*, *Architecture*, *Engineering*, *Key Milestones*).
  - **Expandable Achievement Breakdowns**: Deep dive into impact metrics, key achievements, and technologies used for each role.
  - **Milestone Metrics**: High-impact quantified metrics (e.g. `99.99% Uptime SLA`, `25M+ Daily Transactions`, `<40ms P99 Latency`).

- **💻 Flagship Systems & Projects**:
  - **NovaFlow Observability Mesh**: Distributed microservices telemetry and topology router.
  - **Catalyst-X Agentic Studio**: Multi-agent developer automation workbench.
  - **QuantumTrade Analytics Desk**: Ultra-low latency institutional trading analytics desk.

- **⚡ Technical Arsenal**:
  - Categorized proficiency bars across *Distributed Systems & Architecture*, *Core Languages & Runtimes*, *Cloud & DevOps*, and *Modern Frontend*.

- **💡 Engineering Principles**:
  - Core philosophy on simplicity, strict type safety, developer velocity, and pragmatic innovation.

- **📄 Interactive CV / Resume Modal**:
  - One-click browser resume viewer with a dedicated print/PDF stylesheet (`@media print`).

- **🎨 Premium Visual Craft & Design**:
  - Deep obsidian dark mode default with glowing sapphire/cyan ambient lighting.
  - Light mode support with high-contrast slate aesthetics.
  - Mouse-tracking spotlight aura and micro-interactions.
  - One-click email copy with celebratory toast alerts.

---

## 🛠️ Tech Stack

- **Core Logic**: TypeScript (Strict mode enabled)
- **Bundler & Dev Server**: [Vite](https://vite.dev/)
- **Styling**: Vanilla CSS (CSS Custom Properties, Glassmorphism, Responsive Grid/Flexbox)
- **Icons**: [Lucide Icons](https://lucide.dev/)

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```
Generates optimized static assets in the `dist/` directory ready to be deployed to Cloudflare Pages, Vercel, Netlify, or any static host.

---

## 📝 Customizing Your Information

All personal details, career milestones, stats, projects, and skills are organized in a single strongly typed data file:

👉 [`src/data/profile.ts`](src/data/profile.ts)

You can update:
- Your bio, contact email, social links
- Career milestone dates, roles, bullet points, and metrics
- Project screenshots (place images in `public/projects/`)
- Skills and proficiency ratings
