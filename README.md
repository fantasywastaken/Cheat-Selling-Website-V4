# Cheat Selling Website V3 (Frontend)

<img src="https://i.imgur.com/e77yMQa.png" width="500">

A premium, fully responsive frontend for a Valorant internal cheat sales platform. Built with pure HTML, CSS and JavaScript — no frameworks, no dependencies. Dark-themed, animated, and optimized for both desktop and mobile.

---

### ✅ Features

- Fully responsive dark UI with smooth animations and transitions
- Hero section with particle effects and live stat counters
- Product pricing cards with weekly, monthly and lifetime plans
- Customer review showcase
- Live purchase notification toasts (simulated)
- Dedicated subpages: Who We Are, Security, Refund Policy
- Custom animated 404 error page
- Mobile-first navigation with hamburger menu
- SEO-optimized meta tags and Open Graph support
- Clean URL routing via `.htaccess`

---

### 🧱 Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, Grid, Flexbox, keyframe animations
- **Vanilla JS** — Scroll spy, intersection observer, toast notifications
- **Fonts** — Orbitron, Outfit, Inter (Google Fonts)
- **No frameworks or build tools required**

---

### 📁 Project Structure

```
├── index.html              # Homepage
├── about.html              # Who We Are page
├── security.html           # Security details page
├── refund.html             # Refund Policy page
├── 404.html                # Custom 404 page
├── .htaccess               # URL rewriting & security headers
├── app/
│   ├── css/
│   │   ├── style.css       # Main stylesheet
│   │   └── animations.css  # Keyframe animations
│   ├── js/
│   │   ├── main.js         # Core JS (nav, scroll spy, toasts)
│   │   ├── animations.js   # Scroll-triggered animations
│   │   └── subpage.js      # Shared subpage logic
│   └── img/
│       └── logo.svg        # Site logo
└── README.md
```

---

### 🔧 Setup

To run the project locally:

```bash
git clone https://github.com/fantasywastaken/Cheat-Selling-Website-V3.git
cd Cheat-Selling-Website-V3
```

Then open `index.html` in your browser.

> **Note:** This is a static frontend project. For clean URLs and proper routing, deploy on an Apache server or use a local server like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

---

### 📜 Roadmap

- ✔️ Base layout, styling and animations
- ✔️ Responsive design (mobile + desktop)
- ✔️ Separate subpages (About, Security, Refund)
- ✔️ Custom 404 page
- ✔️ SEO and Open Graph meta tags
- ✖️ Admin panel
- ✖️ Backend integration
- ✖️ Payment system implementation
- ✖️ User authentication and license management

---

### ⚠️ Disclaimer

This project is for **educational purposes only**. Use responsibly and at your own risk. The developer is not responsible for any consequences resulting from the use of this project. All game names, logos and brands referenced are property of their respective owners.
