# Jason Melton | The Steel Town Scholar

A personal archive and portfolio serving as a central hub for writing, comedy, music, and visuals

## 🏗️ Architecture

- **Framework**: Astro v4 (static site generation, zero-JS by default).
- **Content Management**: Git-based Markdown (`.md`/`.mdx`) Collections.
  - `src/content/music/`: Embeds and liner notes for audio (Bandcamp/SoundCloud).
  - `src/content/video/`: Video embeds (YouTube/Vimeo) for comedy and sketches.
  - `src/content/writing/`: Long-form essays, stories, and philosophy.
  - `src/content/visuals/`: Images, photography, and art.
- **Theming**: Centralized CSS custom properties in `src/styles/theme.css`. Features a custom dark/light mode with a subtle, slow-fading cinematic background image for each main page.

## 🎨 Theme Concept

**"The Steel Town Scholar"**
- **Light Mode**: Off-white/newsprint background (`#fbfaf8`) with a deep electric violet accent (`#5500cc`).
- **Dark Mode**: Deep charcoal (`#111111`) with a glowing ultraviolet accent (`#9a3dff`).
- **Typography**: 
  - *Headings*: Clean, wide, utilitarian sans-serif.
  - *Body/Reading*: Highly legible, relatable serif (`Palatino`/`Georgia`).
  - *Metadata/Tags*: Monospace for a structured, analytical feel.
- **UI Details**: Stark brutalist cards with no border-radius. On hover, elements slightly offset and cast harsh neon shadows to simulate misprinted punk flyers or zines. Links feature an always-on underline that turns wavy on hover.

## 🚀 Setup & Commands

Run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server                          |
| `npm run build`           | Builds the production site to `./dist/`          |

## 📝 Roadmap & Next Steps
Check the `FEATURES.md` file for a running list of what has been implemented and what we are planning for the post-MVP phase.

**Upcoming (Post-MVP):**
1. **Local CMS**: Integrate Keystatic for a clean UI to write and manage markdown files.
2. **Persistent Audio Player**: Keep music playing across page loads.
3. **Community & Monetization**: Guestbook, Newsletter signup, Merch linking, and potential paywalls.

## 🛑 Current State (Last Session Context)
- The MVP is complete and building successfully.
- Pages implemented: Timeline (`/`), Explore (`/explore` with tri-state filtering and shuffle), Live (`/live` placeholder), About (`/about`), and dynamic Detail pages.
- Cinematic, 3-second fading background images are installed on the main layout pages.
- **Where to resume**: The user needs to gather actual content (photos, writing, video links) to start replacing the dummy data in `src/content/`. Once the real content starts flowing in, we can begin work on the Keystatic CMS integration to make managing it easier.
