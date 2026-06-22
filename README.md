# BotLeague — India's Ultimate Robotics Arena 🤖

> **Assignment Submission** — Full Stack Developer Intern · BotMakers Pvt Ltd  
> Submitted by: **Sarthak Saraf**

---

## 🔗 Links

| | |
|---|---|
| **Live Deployment** |https://botmaker-stech-assigment.vercel.app/|
| **GitHub Repository** | [github.com/Sarthak-saraf10x/botmakerStechAssigment](https://github.com/Sarthak-saraf10x/botmakerStechAssigment) |

---

## 📌 Project Overview

**BotLeague** is a fully responsive, multi-section landing page for India's standardized national robotics competition platform. The project was built as a front-end assignment to demonstrate UI/UX design implementation, component architecture, interactivity, and attention to detail.

The design faithfully implements the provided Figma reference — including typography, color palette, spacing, layout grids, and interactive states — while adding polished micro-animations and modal interactions beyond the static spec.

---

## ✨ Features Implemented

### 🏠 Sections
| Section | Description |
|---|---|
| **Hero** | Full-screen hero with animated robot asset, CTA buttons, and a live stream modal trigger |
| **Competitions & Events** | Event cards with registration toggle, status badges (Ongoing / Upcoming / Past), and registered state |
| **User Journey** | Step-by-step onboarding flow with numbered path visualization |
| **About BotLeague** | What-is section with feature highlights |
| **Categories** | 4 eligibility groups (Mini Makers, Junior Innovators, Young Engineers, Robo Minds) with interactive modals |
| **Disciplines** | 6 competition sports (Robo Race, Line Follower, RC Racing, FPV Drone, Robo Hockey, Robo War) with clickable cards |
| **Advantage** | Why-register section with benefit cards |
| **Arena Map** | Visual arena structure with zone callouts |
| **Ecosystem / Registration** | Two-column form section for Participant and Organiser signups |
| **Sponsors** | Partner logo grid |
| **Footer** | Full footer with nav links and social icons |

### 🪟 Interactive Modals
- **Live Stream Modal** — triggered from "Watch Live" hero button; simulates an arena broadcast with FPS/bitrate stats and audio toggle
- **Category Modal** — triggered by "Learn More" on each category card; shows age group, team size, tech level, highlights, rules, and prize pool
- **Discipline Modal** — triggered by clicking any discipline card; shows hero image, match format, duration, difficulty, allowed tech tags, rules, and prizes

### 🎨 Design Highlights
- Dark theme with `#100f0f` / `#1a1919` background palette
- Accent colors: `#ff4c4c` (red) and `#ffc702` (gold)
- **Outfit** + **Space Grotesk** Google Fonts
- Ambient glow blobs (absolute-positioned radial gradients) for depth
- Hover scale, border color transitions, and translate animations on interactive elements
- Single-scroll architecture (no double scrollbar) — `h-screen overflow-y-auto` wrapper pattern

---

## 🛠️ Tech Stack

| Technology | Version | Role |
|---|---|---|
| **React** | 19.x | UI framework |
| **TypeScript** | 6.x | Type safety |
| **Vite** | 8.x | Build tool & dev server |
| **Tailwind CSS** | 4.x | Utility-first styling |
| **Lucide React** | 1.x | Icon library |

---

## 📁 Project Structure

```
src/
├── App.tsx                          # Root component, layout & modal state
├── main.tsx                         # React DOM entry point
│
├── components/
│   ├── common/
│   │   ├── Header/Header.tsx        # Sticky navigation header
│   │   ├── Footer/Footer.tsx        # Site footer
│   │   └── Modal/
│   │       ├── LiveStreamModal.tsx  # Live stream viewer modal
│   │       ├── CategoryModal.tsx    # Category detail modal
│   │       └── DisciplineModal.tsx  # Discipline detail modal
│   │
│   └── sections/
│       ├── HeroSection.tsx
│       ├── EventsSection.tsx
│       ├── JourneySection.tsx
│       ├── AboutSection.tsx
│       ├── CategoriesSection.tsx
│       ├── DisciplinesSection.tsx
│       ├── AdvantageSection.tsx
│       ├── ArenaMapSection.tsx
│       ├── EcosystemSection.tsx
│       ├── SponsorsSection.tsx
│       └── (more...)
│
├── constants/
│   └── events.ts                    # Static events data
│
├── types/
│   ├── index.ts                     # Shared app types (EventItem, etc.)
│   └── modals.ts                    # Modal data interfaces
│
└── styles/
    ├── index.css                    # Tailwind imports + base layer resets
    ├── global.css                   # Global overrides
    ├── variables.css                # CSS custom properties
    └── animations.css               # Keyframe animations
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `>=18.x`
- npm `>=9.x`

### Installation & Development

```bash
# 1. Clone the repository
git clone https://github.com/Sarthak-saraf10x/botmakerStechAssigment.git
cd botmakerStechAssigment

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📐 Key Design Decisions

1. **Single scroll container** — `html`, `body`, and `#root` are locked to `height: 100%; overflow: hidden`. Only the App wrapper (`h-screen overflow-y-auto`) scrolls, ensuring a single, clean scrollbar.

2. **Modal-first interactivity** — rather than routing to new pages, category and discipline details open as full-screen modals (click backdrop to dismiss), consistent with the live stream modal pattern already in the Figma spec.

3. **Type-safe data layer** — all modal content (categories, disciplines, events) is stored as typed constant arrays (`CategoryData[]`, `DisciplineData[]`), making it trivial to swap in a real API response.

4. **Component isolation** — each section is a fully self-contained component with its own state. The parent `App.tsx` only manages global modal visibility.

---

