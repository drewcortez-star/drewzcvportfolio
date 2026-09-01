# The Napoleon Library — Museum-Grade Upgrade

Keep the current identity (imperial gold/parchment palette, Cormorant Garamond + Karla, existing sections and content). Everything below is added or refined in place — no rebuild.

## 1. Sources & References
- New `/sources` page: a proper bibliography grouped by topic (biography, campaigns, reforms, exile, quotes), each entry with author, work, year, and publisher/link.
- Quotes get a clear label: **Verified** (documented in correspondence/memoirs) vs **Attributed** (popularly assigned, uncertain origin).
- Inline citation markers on major claims across the library link to the matching entry on the sources page.

## 2. Interactive Timeline
- The existing "A life in dates" list becomes clickable. Selecting an event expands a panel with: date, what happened, why it mattered, and its source reference.
- Only one event open at a time, keyboard-accessible, full-width comfortable tap targets on mobile.

## 3. Campaign Map
- New interactive campaigns section: a stylized period-styled map of Europe with markers for the Italian Campaign, Egyptian Campaign, Austerlitz, Jena–Auerstedt, the Russian Campaign, Leipzig, and Waterloo.
- Clicking a marker opens a detail card: dates, location, opponents, result, and historical significance.
- On phones the map collapses to a scrollable list of the same campaign cards, so nothing is lost on small screens.

## 4. Napoleon: Hero or Tyrant?
- New balanced analysis section with two columns: achievements (Civil Code, lycées and education, meritocratic administration, financial and infrastructure reform, military innovation) and criticisms (censorship and secret police, permanent warfare and casualty counts, the 1802 reinstatement of slavery in the French colonies, dynastic expansionism).
- Closes with a measured historiographical assessment rather than a verdict.

## 5. Marshals Database
- The Marshals section becomes a browsable database with consistent cards for Ney, Lannes, Murat, Davout, Masséna, Soult, and Berthier.
- Each card expands to show role, major battles, relationship with Napoleon, achievements, and fate. Simple filter/sort by name or era.

## 6. Library Search
- A search field in the header opens an overlay that searches a single index built from all library content: people, battles, events, timeline entries, sections, and the Greatest Wars page.
- Results are grouped by type and jump directly to the relevant section or page. Keyboard navigable.

## 7. Museum-Quality Images
- The portrait and any hero imagery get formal museum captions: title, date, artist where known, medium, and a line of historical context.
- Fixed aspect ratios and explicit dimensions so nothing shifts while loading.

## 8. Mobile & Performance
- Audit every section at phone, tablet, and desktop widths; fix spacing, overflow, and tap-target sizes.
- Mobile nav becomes a proper menu instead of a cramped row.
- Images lazy-load with set dimensions; animations reduced to subtle, non-janky transitions that respect reduced-motion preferences.

## Final quality pass
Check all links and buttons, grammar and spelling, spacing and typography consistency, historical accuracy of dates and figures, missing citations, and accessibility (headings order, focus states, alt text, contrast).

## Technical notes
- New routes: `src/routes/sources.tsx`, plus a campaigns section on the index (or its own route if the index gets long).
- New components under `src/components/library/`: `InteractiveTimeline`, `CampaignMap`, `MarshalsDatabase`, `LibrarySearch`, `SourceLink`, `FigureCaption`.
- A shared content module (`src/lib/library-content.ts`) holds timeline events, campaigns, marshals, quotes, and sources as typed data — this powers the timeline, map, marshals DB, and search index from one place, avoiding duplicated text.
- Map is a hand-built SVG of Europe with positioned markers (no map library, no external tiles) so it stays fast and matches the parchment aesthetic.
- Existing design tokens and heading utilities in `src/styles.css` are reused; only a few tokens added if needed.
- No backend changes; auth and the Greatest Wars gate stay as they are.
