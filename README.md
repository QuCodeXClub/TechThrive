# TechThrive 2026

Official website for **TechThrive 2026**, an internal hackathon initiative by **CodeX Club, Quantum University**, under the Department of CSE & Computer Applications.

🌐 **Live Website:** [techthrive.qucodex.com](https://techthrive.qucodex.com)

---

## Overview

TechThrive 2026 is a modern, responsive web platform for Quantum University's internal SIH qualification hackathon.

The website provides participants with event information, rules, evaluation criteria, problem statements, timelines, FAQs, previous editions, and registration access.

---

## Tech Stack

### Frontend

* React 19
* Vite
* React Router 7
* Tailwind CSS 4
* Framer Motion
* Lucide React

### Deployment

* AWS Amplify

---

## Features

* Responsive event landing page
* Animated UI and page transitions
* Event timeline and important dates
* Rules and eligibility information
* SIH problem themes showcase
* Previous winners section
* Prizes & recognition section
* FAQ section
* Responsive navigation
* Mobile-friendly design

---

## Repository Structure

This repository follows a monorepo structure.

```text
.
├── frontend/
│   ├── public/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   └── vite.config.*
│
├── .gitignore
├── README.md
└── LICENSE
```

The frontend application is contained inside the `frontend/` directory.

---

## Getting Started

### Prerequisites

* Node.js 18+
* npm

### Clone the Repository

```bash
git clone https://github.com/QuCodeXClub/TechThrive.git
cd TechThrive
```

### Install Frontend Dependencies

```bash
cd frontend
npm install
```

### Start Development Server

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:5173
```

---

## Production Build

From the `frontend/` directory:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

### Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite development server    |
| `npm run build`   | Create a production build            |
| `npm run preview` | Preview the production build locally |

---

## Deployment

The frontend is deployed using **AWS Amplify**.

The production application is available at:

**https://techthrive.qucodex.com**

The frontend build is generated with:

```bash
npm run build
```

---

## Organization

**CodeX Club**
Department of CSE & Computer Applications
Quantum University

* [LinkedIn](https://in.linkedin.com/company/qucodex)
* [Instagram](https://www.instagram.com/qucodex/)
* [GitHub](https://github.com/QuCodeXClub)

---

## License

This project is licensed under the **GNU General Public License v3.0 (GPL-3.0)**.

See the [LICENSE](./LICENSE) file for the full license text.

---

© 2026 CodeX Club · Quantum University
