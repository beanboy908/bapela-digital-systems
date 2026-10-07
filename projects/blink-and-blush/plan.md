# Blink & Blush by Theo — Implementation Plan

## Product scope
A mobile-first, static booking website for Blink & Blush by Theo in Solomon Mahlangu Annex. The site’s primary conversion is a pre-filled WhatsApp handoff to Theo at +27 76 620 2796. The supplied flyer is the authoritative source for the business name, owner name, prices, location, promise and contact number.

## Implementation approach
- Build a dependency-free static site with `index.html`, `styles.css`, `script.js`, and a route manifest.
- Reuse the uploaded flyer as the hero visual from `/manus-storage/...` after project upload.
- Use native HTML form controls and a small JavaScript formatter to build a URL-encoded WhatsApp message containing service, lash option, name, date and time.
- Keep the experience client-side only: no accounts, payments, database or private data storage.
- Include SEO/meta tags, Open Graph metadata, JSON-LD LocalBusiness structured data, favicon support, and a subtle Bapela Digital Systems footer link.
- Serve via the configured port 3000 with a simple Python static server for Preview.

## Design direction
- **Design movement:** dreamy Y2K beauty editorial with soft scrapbook gloss.
- **Core principles:** flyer-led recognition; instant booking clarity; playful premium detail; readable accessibility.
- **Color philosophy:** blush pink and lavender create warmth and femininity, baby blue adds airy freshness, deep plum anchors contrast, and pearl-white surfaces make the content feel polished rather than sugary.
- **Layout paradigm:** an asymmetric editorial landing page with a tall flyer rail beside a stacked booking panel on desktop, collapsing into a thumb-friendly single-column flow on mobile.
- **Signature elements:** pearl borders, sparkle motifs, gradient glass cards, and a floating WhatsApp booking orb.
- **Interaction philosophy:** every interaction should reduce hesitation; service cards select the booking form, the form preview updates the CTA, and the WhatsApp action always explains what will happen.
- **Animation:** gentle float and shimmer only; respect `prefers-reduced-motion`; no motion on form inputs that could distract.
- **Typography:** Fraunces for expressive headlines, DM Sans for interface copy, with strong contrast and generous line-height.
- **Brand essence:** easy, feel-good lash appointments for clients who want a little extra sparkle without the admin. Personality: warm, glossy, reassuring.
- **Brand voice:** friendly and direct — “Your lashes, your little moment.” / “Tell Theo what you’re after and she’ll take it from there.”
- **Wordmark/mark:** a pearl-framed eye icon paired with a script-like ampersand treatment, implemented as text + CSS rather than a generic logo image.
- **Signature brand color:** blush orchid `#d96b9b`.

## Project structure
- `index.html`: semantic page structure, metadata, JSON-LD, booking form and content sections.
- `styles.css`: responsive visual system, decorative motifs, focus states, motion preferences.
- `script.js`: service selection, form validation, WhatsApp message generation and sticky CTA behavior.
- `manus-routes.json`: declared top-level route set.
- `public/`: static route-manifest location if needed by the server.
- `plan.md`, `TODO.md`: project decisions and acceptance outcomes.
