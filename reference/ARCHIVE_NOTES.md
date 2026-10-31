# What we actually recovered

Reference: Margelo.html and Margelo_files.zip supplied by the student. The
Wayback snapshot was taken on **2024-01-10 11:28:30**. The original site launched
in 2022; the preserved snapshot represents a later state of that site.

## Evidence

- `__NEXT_DATA__` contains `"page":"/"`, and scripts under `/_next/static/`,
  consistent with the **Next.js Pages Router**.
- The stylesheet starts `tailwindcss v3.1.8`.
- The saved hero HTML has `min-h-screen flex flex-col items-center justify-center
  bg-[a2a2a4] sticky top-0 -z-10`.
- The original hero has a `<video>` with sources in `.m4v`, `.webm`, `.mp4` formats,
  and `loop muted playsinline`; its DOM had no `autoplay` attribute at capture time.
- The text is “Margelo” and “App Development, done right.”
- It uses `/assets/logo.svg` and `/assets/arrow-down.png`.

## Intentional differences in our study

- Tailwind 3.4.x remains on the same major version but is not bit-for-bit 3.1.8.
- Modern maintained Next.js, React and TypeScript replace the old dependency versions.
- The video autoplays when permitted so you can immediately see the hero.
- Sticky stacking has been simplified (`z-0` with the next section `z-10`).
- Responsive min-height uses `100svh`, which works better with mobile browser UI.
- The actual scroll transformations, reveal animations, and later page sections
  are deliberately not built yet. We'll study and add them in later lessons.

## Archival limitations

- An HTML/CSS/JS save does NOT restore the original `.tsx` component source.
- Most JS is minified/compiled; we can examine behaviour and recover structural
  hints, not prove every original line from its build artifacts.
- The hero video isn't included here: download it from Wayback and save
  as `public/assets/masthead-bg.mp4`.
- We do not claim this is the original source repository or an authorized
  redistribution of the full website.
