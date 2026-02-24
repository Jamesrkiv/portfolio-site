# Portfolio Site

A custom-built portfolio application designed to showcase personal and
professional projects in a scalable, data-driven way. Rather than using
a prebuilt template or static site generator, this portfolio was
implemented as a full Next.js application to demonstrate practical
experience with modern React architecture, routing, and API handling.

The site is intentionally structured to scale as new projects are added,
with dynamic page generation and a tag-based filtering system that
adapts automatically to project metadata.

> [jamesrkiv.vercel.app](https://jamesrkiv.vercel.app)

### Table of Contents
- [Tech Stack](#-tech-stack)
- [Key Features](#-key-features)
- [Architectural Decisions](#%EF%B8%8F-architectural-decisions)
- [Project Structure (High-Level)](#%EF%B8%8F-project-structure-high-level)
- [Running Locally](#-running-locally)
- [Summary](#-summary)

------------------------------------------------------------------------

## 🔧 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Frontend**: React 19 + Tailwind CSS
- **Language**: TypeScript
- **UI Components**: Embla Carousel
- **Search / Filtering**: Fuse.js
- **Email Handling**: Resend + React Email
- **Deployment**: Vercel (automatic build & deployment via GitHub integration)

------------------------------------------------------------------------

## 💡 Key Features

- #### 🔨 Dynamic Project Generation

  Projects are defined as structured data rather than hardcoded
  components. Individual project pages are dynamically generated using
  Next.js routing based on project metadata.

  This allows:
  - Easy addition of new projects
  - Consistent layout across entries
  - Centralized configuration
  - Reduced duplication

- #### 🏷️ Tag-Based Filtering System

  Each project defines its own tags. The portfolio page dynamically:
  - Aggregates all unique tags
  - Generates filter options automatically
  - Filters projects in real time
  This ensures the filtering UI always reflects the underlying data without manual maintenance.

- #### 🔎 Searchable Tag Interface

  Fuse.js is used to provide fuzzy searching over available tags, keeping
  the interface scalable as the number of technologies grows.

- #### 🖼️ Image Carousel Per Project

  Each project page supports a responsive image carousel powered by Embla.
  - Dynamic slide rendering
  - Navigation controls
  - Responsive behavior

- #### ✉️ Contact Form (API Route)

  The site includes a contact form backed by a custom Next.js API route.
  - Frontend validation
  - Backend validation
  - Email rendering via React Email
  - Delivery via Resend
  - Environment variable configuration

------------------------------------------------------------------------

## 🏗️ Architectural Decisions

### Why Next.js?

This project was intentionally built with Next.js to gain hands-on
experience with:

- App Router structure
- Server vs Client components
- File-based routing
- API routes
- Production deployment on Vercel

### Why Tailwind CSS?

Tailwind was selected over traditional CSS frameworks due to:

- Reduced need for separate stylesheets
- Consistent responsive design
- Faster iteration during UI development

------------------------------------------------------------------------

## 🗃️ Project Structure (High-Level)

- `src/app/`: Routing and layout (App Router)
- `src/app/api/contact/`: Email handling endpoint
- `src/components/`: Reusable UI components
- `src/css/`: CSS stylesheets
- `public/`: Static/reusable assets

------------------------------------------------------------------------

## 🧪 Running Locally

Development build:
```ps1
npm install
npm run dev
```
Production build:
```ps1
npm install
npm run build
npm run start
```

> Be sure to create a `.env.local` file within `portfolio-site/my-portfolio/`:
```env
RESEND_API_KEY=XX
FROM_EMAIL=XX
TO_EMAIL=XX
```

------------------------------------------------------------------------

## 📝 Summary

This project demonstrates the ability to design and implement a
scalable, data-driven React application using modern Next.js
architecture, with both frontend and backend concerns handled within a
single cohesive system.
