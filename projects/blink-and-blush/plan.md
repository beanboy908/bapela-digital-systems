# Blink & Blush by Theo — Implementation Plan

## Product scope
A mobile-first, static booking website for Blink & Blush by Theo in Solomon Mahlangu Annex. The site’s primary conversion is a pre-filled WhatsApp handoff to Theo at +27 76 620 2796. The supplied flyer is the authoritative source for the business name, owner name, prices, location, promise and contact number.

## Implementation approach
- Build a dependency-free static site with `index.html`, `styles.css`, `script.js`, and a route manifest.
- Reuse the uploaded flyer as the main visual from `/manus-storage/...` after project upload, with a local copy included in the source tree for portability.
- Use native HTML form controls and a small JavaScript formatter to build a URL-encoded WhatsApp message containing service, lash option, name, date and time.
- Keep the experience client-side only: no accounts, payments, database or private data storage.
- Include SEO/meta tags, Open Graph metadata, JSON-LD LocalBusiness structured data, favicon support, and a subtle Bapela Digital Systems footer link.
- Serve via the configured port 3000 with a simple Python static server for Preview.

## Design direction
The first visual pass was deliberately simplified after review because it felt too polished and generic. The approved direction is now a calm, authentic local-business beauty page: the real flyer does the visual branding, while the surrounding interface stays clear and practical.

Use a soft blush-and-cream palette with restrained lilac accents, plain language, visible prices, and familiar form controls. Keep only a light amount of warmth in the rounded cards and pink WhatsApp/booking actions. Avoid floating sparkles, oversized marketing slogans, decorative stickers, vague “moment” language, and excessive gradients. The main headline should identify the service and owner directly: “Cluster lashes by Theo.”

The layout remains asymmetric on desktop and single-column on mobile, but the hierarchy is informational: service and location first, prices second, booking form third, FAQs last. The flyer should be shown plainly in a framed image without rotation or ornament so customers recognize the original business immediately.

## Project structure
- `index.html`: semantic page structure, metadata, JSON-LD, booking form and content sections.
- `styles.css`: responsive visual system, plain local-business styling, focus states, reduced-motion support.
- `script.js`: service selection, form validation, WhatsApp message generation and sticky CTA behavior.
- `manus-routes.json`: declared top-level route set.
- `assets/`: favicon assets and a portable copy of the supplied flyer.
- `plan.md`, `TODO.md`: project decisions and acceptance outcomes.
