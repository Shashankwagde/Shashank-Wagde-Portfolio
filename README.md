# 🦇 Shashank Wagde — 3D Portfolio

An interactive, animated developer portfolio built with **React**, **Three.js**, and **Tailwind CSS**. Features a 3D Batman model on the hero section, an interactive globe, orbiting tech-stack icons, particle effects, and smooth Framer Motion animations — all wrapped in a sleek dark theme.

---

## ✨ Features

- **3D Hero Scene** — An animated Batman model rendered with React Three Fiber & Drei, complete with entry and idle loop animations.
- **Interactive Globe** — A COBE-powered globe in the About section highlighting timezone & remote availability.
- **Orbiting Frameworks** — Tech-stack icons that orbit in concentric rings using custom CSS animations.
- **Draggable Skill Cards** — Physics-inspired draggable cards showcasing core competencies (RAG, QLoRA, Agentic AI, etc.).
- **Project Showcase** — Detailed project cards with live GitHub links, tech tags, and descriptive breakdowns.
- **Experience Timeline** — A vertical timeline section for work experience.
- **Contact Form** — EmailJS-powered contact form with real-time success/error alerts.
- **Particle Background** — Canvas-based particle animation behind the contact section.
- **Parallax Background** — Layered parallax star-field effect on the hero.
- **Responsive Design** — Fully responsive across mobile, tablet, and desktop breakpoints.
- **Smooth Animations** — Page transitions and micro-interactions powered by Framer Motion.

---

## 🛠 Tech Stack

| Category        | Technologies                                                  |
| --------------- | ------------------------------------------------------------- |
| **Framework**   | React 19, Vite 8                                              |
| **3D Graphics** | Three.js, React Three Fiber, Drei                             |
| **Styling**     | Tailwind CSS 4, clsx, tailwind-merge                          |
| **Animation**   | Framer Motion (`motion`), maath                               |
| **Globe**       | COBE                                                          |
| **Email**       | EmailJS                                                       |
| **Utilities**   | react-responsive, react-intersection-observer                 |
| **Linting**     | ESLint 10 with React Hooks & React Refresh plugins            |

---

## 📁 Project Structure

```
3d-portfolio/
├── public/
│   ├── assets/
│   │   ├── logos/          # Tech stack & framework SVG icons
│   │   ├── projects/       # Project screenshot images
│   │   └── socials/        # Social media icons
│   └── models/             # 3D model files (GLTF/GLB)
├── src/
│   ├── animations/         # 3D model animation configs
│   │   └── BatmanAnimations.js
│   ├── components/         # Reusable UI components
│   │   ├── Batman.jsx          # 3D Batman model component
│   │   ├── Globe.jsx           # Interactive COBE globe
│   │   ├── Particles.jsx       # Canvas particle system
│   │   ├── ParallaxBackground.jsx
│   │   ├── HeroText.jsx        # Animated hero text with FlipWords
│   │   ├── FlipWords.jsx       # Word-cycling animation
│   │   ├── OrbitingCircles.jsx  # Orbiting tech icons
│   │   ├── Frameworks.jsx      # Tech stack display
│   │   ├── Card.jsx            # Draggable skill card
│   │   ├── Project.jsx         # Project card
│   │   ├── ProjectDetails.jsx  # Expanded project details
│   │   ├── Timeline.jsx        # Experience timeline
│   │   ├── CopyEmailButton.jsx # Copy-to-clipboard email button
│   │   ├── Alert.jsx           # Toast notification
│   │   └── Loader.jsx          # 3D scene loading indicator
│   ├── constants/
│   │   └── index.js        # Projects, socials, and experience data
│   ├── sections/           # Page-level layout sections
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx             # Root application component
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles & Tailwind directives
├── index.html              # HTML entry point
├── vite.config.js
├── tailwind.config.js
├── eslint.config.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/Shashankwagde/3d-portfolio.git
cd 3d-portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview    # Preview the production build locally
```

### Lint

```bash
npm run lint
```

---

## 📬 Contact

- **Email** — shashank.wagde.work@gmail.com
- **LinkedIn** — [Shashank Wagde](https://www.linkedin.com/in/shashank-wagde-975685274/)
- **Instagram** — [@shashank_wagde](https://www.instagram.com/shashank_wagde/)
- **GitHub** — [Shashankwagde](https://github.com/Shashankwagde)
