MARGELO 2024 ARCHIVE — RECOVERED IMAGES
=======================================

This package was prepared from the Margelo_files.zip you supplied.

CONTENTS
- 19 original image files, organized under public/assets/.
- tools/download-missing-margelo-images.ps1 (optional Internet Archive recovery helper).
- tools/missing-original-images.txt (not included in your Chrome archive).
- tools/original-video-paths.txt (video files must be obtained separately).

FASTEST IMPORT INTO YOUR EXISTING NEXT.JS PROJECT (Windows PowerShell)
1. Put margelo-images-ready-to-import.zip into your Downloads folder.
2. Open your margelo-recreation project in VS Code.
3. Run this in the VS Code terminal, FROM THE PROJECT ROOT:

   Expand-Archive -Path "$HOME\Downloads\margelo-images-ready-to-import.zip" -DestinationPath . -Force

4. The files will now be at public/assets/ with their original folder structure.
   You DO NOT need to import them from JavaScript/TypeScript: reference src="/assets/...".
5. Your previously downloaded masthead-bg.webm should remain at public/assets/masthead-bg.webm.
6. OPTIONAL: To try fetching the 29 missing PNG images from Wayback:

   powershell -ExecutionPolicy Bypass -File .\tools\download-missing-margelo-images.ps1

If Wayback hasn't archived an image, the helper will report it as missing; it cannot guarantee complete recovery.
The script only downloads missing PNGs; it does not delete or overwrite your existing images.

These assets originate from Margelo's archived website. Keep this learning recreation private
unless you have permission to redistribute their media.
