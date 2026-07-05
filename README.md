# Someswararao Tarra - Developer Portfolio Website

A premium, modern, and fully responsive developer portfolio website designed for recruiters and hiring managers. This portfolio showcases hands-on engineering capabilities in AWS Cloud Architecture, Linux Administration, DevOps Automation, and Data Science.

Built using **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**.

---

## 🚀 Key Features

- **recruiter-Optimized Design**: Clean, distraction-free aesthetic utilizing a dark navy color scheme with subtle gradient glow accents. No childish graphics or false metrics.
- **Interactive Terminal Dashboard**: A responsive terminal animation simulating diagnostic commands (`whoami`, `focus`, `status`).
- **Hands-On Cloud & DevOps Labs**: Detailed case studies covering VPC Architecture, Private connectivity (SSM/Bastions), VPC Peering, Load Balancers, Linux Outage troubleshooting, and Bash automation.
- **Dynamic Projects Showcase**: Filterable portfolio card grid supporting tag filtering (AWS/DevOps, Data Science, Machine Learning, Deep Learning).
- **GitHub API Integration**: Real-time retrieval of active repositories with stars and language indicators, featuring a clean offline state fallback.
- **Interactive Contact Form**: A client-validated contact form with simulated network transport state handling.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16+ (App Router)
- **Programming Language**: TypeScript
- **Styling & Theme**: Tailwind CSS v4 (incorporating glassmorphism cards and custom backdrop blurs)
- **Animations**: Framer Motion
- **Icons**: Lucide React & inline custom SVGs for brand logos

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── globals.css      # Core styles, animations, grid background, scrollbar
│   ├── layout.tsx       # Root document layout and SEO Metadata (keywords, OG tags)
│   └── page.tsx         # Layout page stitching all sections together
├── components/
│   ├── Navbar.tsx       # Sticky shrinking header with mobile navigation menu
│   ├── Hero.tsx         # Availability badge, social links, and typable Terminal
│   ├── About.tsx        # M.Sc. Data Science and professional focus summary
│   ├── Skills.tsx       # Tech arsenal badge cards (Cloud, DevOps, Linux, Data ML)
│   ├── HandsOnLabs.tsx  # Cloud & DevOps Labs (Problem, Architecture, Learning)
│   ├── Projects.tsx     # Filterable featured portfolio cards
│   ├── Certifications.tsx # Oracle Cloud Certified AI Associate and AWS target path
│   ├── Education.tsx    # Academic timeline card for M.Sc. Data Science
│   ├── GitHubSection.tsx# Github repos list using client-side API
│   ├── ContactSection.tsx# Email / Message form with state simulations
│   ├── Icons.tsx        # Custom SVG components for brand vector icons
│   └── Footer.tsx       # Dynamic copyright footer and social links
```

---

## 📦 Getting Started & Local Development

### 1. Install Dependencies

In the root directory, install all required packages:

```bash
npm install
```

### 2. Run the Development Server

Start the local server to preview the site:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser.

### 3. Production Build

Verify code compilation and execute the production compilation:

```bash
npm run build
```

This commands compiles and type-checks the project using the Next.js compiler, saving optimized static files to the `.next` directory.

### 4. Run Linter

Validate coding standards and format compliance:

```bash
npm run lint
```

---

## ☁️ Deployment Instructions

The repository is pre-configured for static exports and serverless rendering platforms.

### Vercel (Recommended)
1. Push this project code to your GitHub repository.
2. Sign in to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import the repository and select **Next.js** as the framework preset.
4. Click **Deploy**. Vercel will automatically trigger builds on every git push.

### Netlify
1. Connect your repository to Netlify.
2. Configure build commands:
   - Build command: `npm run build`
   - Publish directory: `.next` (or set up static exports using `output: 'export'` in `next.config.ts` if deploying static HTML to the `out` directory).

---

## 🔒 Recruiter Safety & Verifiability Guidelines

To customize the placeholders to match your official resume and verify credentials:
- **Resume Link**: Place your PDF resume in the `public/` directory and rename it to `resume.pdf` to activate the download buttons.
- **OCI Certification**: Replace `[Oracle Credential ID]` inside `src/components/Certifications.tsx` with your official credential ID code, and link the verification button to your Oracle Certifications portal.
- **Education Details**: Modify `[University Name]` and `[Location, India]` inside `src/components/Education.tsx` to match your graduating university.
- **LinkedIn / GitHub / Email**: Verify all links inside `src/components/Hero.tsx`, `src/components/ContactSection.tsx`, and `src/components/Footer.tsx` match your personal profiles.
