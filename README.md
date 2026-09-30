# Hà Hoàng Vỹ — Personal Portfolio Website

Production-ready personal digital home and fullstack developer portfolio built for **Hà Hoàng Vỹ (Ha Hoang Vy)**, Fullstack Developer based in Ho Chi Minh City, Vietnam.

![Portfolio Preview](/public/images/projects/ai-adaptive-testing.jpg)

## 🚀 Key Features & Highlights

- **Modern Tech Stack**: Built with Next.js 15 App Router, TypeScript, React 19, Tailwind CSS, and Framer Motion.
- **Data-Driven Architecture**: All projects, journey timeline items, skills, and engineering workflows are strictly typed and stored in decoupled data modules (`src/data/`).
- **Dynamic Case Studies**: Dedicated project detail pages (`/projects/[slug]`) for fullstack case studies with architecture visualizations.
- **Interactive Terminal Visual**: Custom hero terminal displaying live status, tech stack, and location.
- **AI Engineering Section**: Visually distinct section detailing responsible AI workflows (RAG, LangGraph, Ollama, ChromaDB) and human code validation principles.
- **Theme Support**: Dark mode by default with clean light mode toggle via `next-themes`.
- **Accessibility & Motion**: Respects `prefers-reduced-motion` and implements semantic HTML5 elements.
- **SEO & Vercel Ready**: Open Graph tags, Twitter cards, dynamic `sitemap.xml`, and `robots.txt` configuration.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Theme Engine**: [Next Themes](https://github.com/pacocoursey/next-themes)

---

## 💻 Local Development Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/HAVY24/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   Fill in your personal links:
   ```env
   NEXT_PUBLIC_SITE_URL=https://ha-hoang-vy.vercel.app
   NEXT_PUBLIC_GITHUB_URL=https://github.com/HAVY24
   NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/your-profile
   NEXT_PUBLIC_EMAIL=mailto:your-email@example.com
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Lint & Build check**:
   ```bash
   npm run lint
   npm run build
   ```

---

## 📂 Customizing Content

### 1. Adding or Editing Projects
Edit `src/data/projects.ts`. Each project supports:
- `slug`: Unique route slug (e.g. `thap-thap-pagoda`)
- `title` & `subtitle`: Name and short tagline
- `description`: Summary for home page grid card
- `technologies`: Array of tech tags
- `features`: Array of key bullet points
- `image`: Relative path to project screenshot
- `github` / `liveDemo`: Repository & demo links
- `isPrivate`: Set to `true` for confidential enterprise projects (hides repo links and displays private badge)

### 2. Replacing Images & CV
Place your high-resolution assets in the `public/` directory:
- **Profile Avatar**: Replace `/public/images/profile/profile.jpg`
- **Project Screenshots**:
  - `/public/images/projects/thap-thap.jpg`
  - `/public/images/projects/ai-adaptive-testing.jpg`
  - `/public/images/projects/erp.jpg`
- **Curriculum Vitae**: Replace `/public/cv/Ha-Hoang-Vy-CV.pdf`

---

## 🌐 Deploying to Vercel

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit for portfolio"
   git push origin main
   ```

2. **Deploy via Vercel Dashboard**:
   - Log in to [Vercel](https://vercel.com).
   - Click **Add New** → **Project**.
   - Select your GitHub repository (`portfolio`).
   - Framework Preset: **Next.js** (auto-detected).
   - Add Environment Variables (`NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GITHUB_URL`, etc.).
   - Click **Deploy**.

Vercel will build and deploy your portfolio automatically on every `git push`.

---

## 📜 License

Created & maintained by **Hà Hoàng Vỹ** © 2026.
