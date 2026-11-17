#!/usr/bin/env bash
# Regenerates the optimized avatar variants and the Open Graph images from
# public/img/avatar.png. Run manually when the source photo changes; outputs
# are committed. Requires macOS (sips), cwebp and Google Chrome.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
IMG="$ROOT/public/img"
SRC="$IMG/avatar.png"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# Avatar shown on the card (128px CSS, up to 2.5x density).
sips -z 320 320 "$SRC" --out "$TMP/avatar-320.png" >/dev/null
cwebp -quiet -q 80 "$TMP/avatar-320.png" -o "$IMG/avatar-320.webp"

# Icons: apple-touch-icon, manifest and structured data.
for size in 180 192; do
  sips -z "$size" "$size" "$SRC" --out "$IMG/avatar-$size.png" >/dev/null
done
sips -z 512 512 -s format jpeg -s formatOptions 82 "$SRC" --out "$IMG/avatar-512.jpg" >/dev/null

# Open Graph images, 1200x630, one per language.
make_og() {
  local lang="$1" role="$2" services="$3" url="$4"
  sed -e "s|__AVATAR__|file://$TMP/avatar-320.png|" \
      -e "s|__ROLE__|$role|" \
      -e "s|__SERVICES__|$services|" \
      -e "s|__URL__|$url|" \
      "$ROOT/scripts/og/template.html" > "$TMP/og-$lang.html"
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars \
    --force-device-scale-factor=1 --window-size=1200,630 \
    --allow-file-access-from-files \
    --screenshot="$TMP/og-$lang.png" "file://$TMP/og-$lang.html" >/dev/null 2>&1
  sips -s format jpeg -s formatOptions 82 "$TMP/og-$lang.png" --out "$IMG/og-$lang.jpg" >/dev/null
}

make_og fr "Développeur web à Granby, Québec" "Sites web · Boutiques en ligne · Automatisation" "business.jlgouaho.com"
make_og en "Web developer in Granby, Quebec" "Websites · Online stores · Automation" "business.jlgouaho.com/en"

ls -l "$IMG"/avatar-*.* "$IMG"/og-*.jpg
