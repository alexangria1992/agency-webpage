# Margelo archive image recovery helper
# This script only downloads image paths listed in the archived 2024 page.
# Run inside PowerShell from the project root:
# powershell -ExecutionPolicy Bypass -File .\tools\download-missing-margelo-images.ps1

$ErrorActionPreference = 'Continue'
$project = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$images = @(
  'assets/masthead-bg-fallback.png'
  'assets/trustedby/audubon.png'
  'assets/trustedby/candid.png'
  'assets/trustedby/coinbase.png'
  'assets/trustedby/exodus.png'
  'assets/trustedby/expensify.png'
  'assets/trustedby/extra.png'
  'assets/trustedby/litentry.png'
  'assets/trustedby/nativescript.png'
  'assets/trustedby/picnic.png'
  'assets/trustedby/pinkpanda.png'
  'assets/trustedby/push.png'
  'assets/trustedby/rainbow.png'
  'assets/trustedby/raive.png'
  'assets/trustedby/redbull.png'
  'assets/trustedby/scribeware.png'
  'assets/trustedby/shopify.png'
  'assets/trustedby/showtime.png'
  'assets/trustedby/slingshot.png'
  'assets/trustedby/snapcalorie.png'
  'assets/trustedby/status.png'
  'assets/trustedby/steakwallet.png'
  'assets/trustedby/steddy.png'
  'assets/trustedby/stori.png'
  'assets/trustedby/thisapp.png'
  'assets/trustedby/tocsen.png'
  'assets/trustedby/walletconnect.png'
  'assets/works/coinbase-wallet-fallback.png'
  'assets/works/stori-fallback.png'
)

# Start with the exact January 2024 capture and fall back to nearby snapshots.
$timestamps = @('20240110112830', '20231202055208', '20221221190611')
$downloaded = 0
$skipped = 0
$failed = @()

foreach ($relative in $images) {
  $target = Join-Path $project ('public/' + $relative)
  if (Test-Path $target) {
    Write-Host "Already exists: $relative"
    $skipped++
    continue
  }
  $parentDir = Split-Path $target -Parent
  if (!(Test-Path $parentDir)) { New-Item -ItemType Directory -Force -Path $parentDir | Out-Null }
  $success = $false
  foreach ($timestamp in $timestamps) {
    $url = "https://web.archive.org/web/${timestamp}im_/https://margelo.io/$relative"
    $temp = "$target.download"
    try {
      Invoke-WebRequest -Uri $url -OutFile $temp -TimeoutSec 15 -MaximumRedirection 8 -UseBasicParsing -ErrorAction Stop
      $bytes = [System.IO.File]::ReadAllBytes($temp)
      # Avoid saving Wayback error pages as .png: require actual PNG signature.
      if ($bytes.Length -gt 8 -and $bytes[0] -eq 137 -and $bytes[1] -eq 80 -and $bytes[2] -eq 78 -and $bytes[3] -eq 71 -and $bytes[4] -eq 13 -and $bytes[5] -eq 10 -and $bytes[6] -eq 26 -and $bytes[7] -eq 10) {
        Move-Item $temp $target -Force
        Write-Host "Recovered: $relative" -ForegroundColor Green
        $downloaded++
        $success = $true
        break
      }
    }
    catch {
      # Try another archive date if this capture is missing or blocked.
    }
    finally {
      if (Test-Path $temp) { Remove-Item $temp -Force }
    }
  }
  if (-not $success) {
    Write-Warning "Not archived or inaccessible: $relative"
    $failed += $relative
  }
}

Write-Host "\nRecovered $downloaded; already present $skipped; unavailable $($failed.Count)."
if ($failed.Count -gt 0) {
  $report = Join-Path $project 'margelo-still-missing-images.txt'
  $failed | Set-Content -Path $report -Encoding UTF8
  Write-Host "Remaining missing list saved in: $report"
}
