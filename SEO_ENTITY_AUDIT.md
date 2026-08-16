# Bapela Digital Systems: entity and logo audit

**Audit date:** 16 August 2026

## Current verified signals

| Signal | Current state | Assessment |
|---|---|---|
| Homepage title and description | Explicitly name **Lucky Malaka** as Bapela’s owner and operator | Good, visible and truthful |
| Homepage organization schema | `Organization` has an `@id`, organization name, logo, URL, founder, GitHub profile, and real work examples | Good foundation; can be strengthened with an explicit graph and image dimensions |
| About page person schema | `Person` has the full name, canonical profile URL, portrait, job title, and organisation relationship | Good, but should be joined to the organisation in one consistent entity graph |
| Favicon and logo assets | Stable square 48×48, 192×192, 512×512 PNGs plus root `favicon.ico` | Meets Google’s square-icon and minimum-size guidance |
| Public crawl controls | `robots.txt` allows crawling and links to the sitemap; sitemap lists the homepage and About Lucky page | Correct |
| Live homepage | Current public title, founder references, and footer ownership statement are visible on `bapeladigital.co.za` | Correct; Google must still reprocess the updated information |

## Planned accurate improvements

The update will not claim a registered company status, corporate registry entry, office address, social profile, or other information that is not public and verified. It will instead make the already visible relationship between Lucky Malaka and Bapela Digital Systems easier for crawlers to connect.

The homepage will use a compact `@graph` containing an `Organization`, a logo `ImageObject`, and a linked `Person`. The organization will list only true, visible public contact methods, its official site, and controlled GitHub profiles. The About Lucky page will reference the same organization and logo IDs.

## Google requirements considered

Google recommends putting organisation information on a home or About page, adding relevant recommended properties, validating the markup, then using URL Inspection to request a recrawl. It also states that structured data helps it understand a page but does **not** guarantee a particular result format. [1] [2]

For a logo, Google asks for a crawlable, indexable image of at least 112 × 112 pixels and says the logo property can help it understand which logo to show. The existing 512 × 512 Bapela logo satisfies the size requirement. [1]

For favicons, Google requires a stable, crawlable, square icon and recommends an icon larger than 48 × 48 pixels. The existing root favicon and square PNG variants satisfy this technical requirement, but Google controls whether and when it displays them. [3]

## References

[1] [Google Search Central — Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization)

[2] [Google Search Central — Introduction to structured data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)

[3] [Google Search Central — Define a favicon to show in search results](https://developers.google.com/search/docs/appearance/favicon-in-search)
