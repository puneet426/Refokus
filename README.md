# 🌀 Refokus

Refokus is a smooth scrolling, animated React project built with **Vite**. It features modern UI components such as a custom Navbar, Marquee, Product blocks, and Work section animations using `framer-motion`. Locomotive Scroll powers the fluid scrolling experience.

## 🚀 Features

- ✅ Smooth scrolling with **Locomotive Scroll (Beta)**
- 🎞️ Scroll-based animations with **Framer Motion**
- 🧩 Modular Components: Navbar, Products, Marquee, Work, Footer, etc.
- 📱 Fully responsive
- ⚡ Built using **Vite** for fast development

---

## 🧱 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Button.jsx
│   ├── Work.jsx
│   ├── Products.jsx
│   ├── Marquee.jsx
│   ├── Blocks.jsx
│   └── Footer.jsx
├── App.jsx
└── main.jsx
```

---

## 🛠️ Setup & Installation

### Prerequisites

- Node.js (v16 or higher)
- npm

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/refokus.git
cd refokus
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Locomotive Scroll (Beta)

```bash
npm install locomotive-scroll@beta
```

### 4. Install Framer Motion

```bash
npm install framer-motion
```

---

## ⚙️ How to Use Locomotive Scroll

In `App.jsx`:

```js
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();
```

You can get scroll position like this:

```js
const scrollY = window.scrollY;
// When scrollY reaches 25, trigger an animation or reveal a component
```

---

## 📽️ Animation Using Framer Motion

We use Framer Motion for component-based animations. Official Docs: [https://motion.dev/docs](https://motion.dev/docs)

Example usage:

```jsx
import { motion } from 'framer-motion';

<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
  {/* Animated content */}
</motion.div>
```

---

## 🧪 Run the Project

```bash
npm run dev
```

Vite will start your project at `http://localhost:5173`

---
