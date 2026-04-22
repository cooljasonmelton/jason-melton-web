# Feature Tracker

## MVP Requirements
- [x] Determine architecture (Astro static site)
- [x] Initialize Astro project
- [x] Setup Content Collections (`music`, `video`, `writing`, `visuals`)
- [x] Base layout with navigation header (filtering)
- [x] Home Page (unified reverse-chronological feed)
- [x] Detail Pages (`[slug].astro` for each collection)
- [x] About Page (bio and social links)
- [x] Dark Mode support with toggle
- [x] Netflix-Style Explore Page (grid layout with filtering and shuffle functionality)

## Post-MVP / Future Ideas
- **Local CMS Integration**: Add Keystatic for a local, UI-based CMS so you don't have to edit Markdown files directly.
- **Audio/Video Playback**: Persistent audio player that continues playing as you navigate between pages.
- **Community Guestbook**: A simple database (e.g., Supabase/Firebase) to let visitors leave a note.
- **Newsletter Signup**: Integration with a service for email collection. Options include:
  - **Substack:** Easiest, free for unlimited subs. (Takes 10% cut if you ever charge for it).
  - **Kit (ConvertKit):** Up to 10,000 subscribers for free with unlimited sends. Great for scaling.
  - **beehiiv:** Up to 2,500 subscribers free, focused on growth tools.
  - **MailerLite:** Free for up to 1,000 subscribers, simple drag-and-drop editor.
- **Website Analytics**: Add privacy-friendly tracking to see user clicks and behavior. Options include:
  - **PostHog:** Generous free tier (1M events/month), includes heatmaps and session replays. Best for detailed click tracking.
  - **Umami Cloud:** Lightweight, clean UI, cookieless alternative to Google Analytics.
  - **Cloudflare Web Analytics:** Completely free and privacy-first (if using Cloudflare for DNS).
- **Store / Merch Link**: Add a top-level nav item that links out to a dedicated print-on-demand or merch storefront (like BigCartel or Printful).
- **Paywalled Content / Memberships**: Explore locking certain Markdown files or video embeds behind a login (e.g., using Outseta, Memberstack, or a custom integration).
