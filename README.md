# Margelo — mobile-first recreation (learning project)

This is a **new reconstruction**, not Takuya Matsuyama's original source code.
It uses Next.js (Pages Router), React, TypeScript and Tailwind CSS 3 to match
his original development approach. We've started with a faithful, mobile-first
hero and a short About Us section so the sticky layout can be studied.

## Requirements

- Node.js **20.9+** (LTS recommended)
- Git (the ZIP already includes an initialized Git repository)
- VS Code or another editor

## Start on Windows (PowerShell / VS Code terminal)

1. Extract the ZIP to a normal folder, e.g. `E:\Projects\margelo-recreation`.
2. Save the recovered original video as **`public/assets/masthead-bg.mp4`**.
3. Open the folder in VS Code and run:

```powershell
npm install
npm run dev
```

Open <http://localhost:3000>. If the video is still missing, you'll see the gray
fallback behind the original logo and text. No placeholder video is provided.

## Publish this local Git repository to GitHub

The ZIP already includes `.git/` and an initial commit. First install GitHub CLI:

```powershell
winget install --id GitHub.cli --source winget
```

**Close and reopen the terminal** after installing; then:

```powershell
gh auth login
gh repo create margelo-recreation --private --source=. --remote=origin --push
```

The commands ask you to authenticate, then create a private GitHub repository
and push the initial commit. An authenticated GitHub account is required.

The recovered `masthead-bg.mp4` is **ignored by Git by default** to avoid
accidentally uploading the original media. Keep it locally for the recreation.
Only change this if you have permission to redistribute the video.

## Normal Git rhythm

```powershell
git status
git add .
git commit -m "Build responsive hero"
git push
```

For your own commits, configure Git identity if it isn't already set:

```powershell
git config --global user.name "YOUR NAME"
git config --global user.email "YOUR_GITHUB_EMAIL"
```

## Files to read first

- `pages/index.tsx` — homepage assembly
- `components/Masthead.tsx` — hero structure and source-based explanations
- `components/AboutUs.tsx` — next section
- `styles/globals.css` — Tailwind entry point
- `reference/ARCHIVE_NOTES.md` — sourced facts vs reconstruction choices

## Credits

Educational study of the original Margelo website implemented by Takuya
Matsuyama (devaslife), based on the company's design. Original design and media
remain with their respective owners. Archive reference:
<https://web.archive.org/web/20240110112830/https://margelo.io/>.
Development video: <https://www.youtube.com/watch?v=GznmPACXBlY>.
