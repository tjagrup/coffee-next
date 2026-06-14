"""
Downloads all Pexels images used in the coffee-next app, converts to WebP,
and stores them in public/images/ with filenames based on the Pexels photo ID.
"""

import subprocess
import sys
from pathlib import Path

SCRIPT = r"C:\Users\TJag2\.claude\skills-dev\image-optimizer\scripts\process_images.py"

# All unique Pexels photo IDs used across the app
IMAGE_IDS = sorted(set([
    # Static / hero images
    1235706,   # HeroSection background
    2775827,   # About page hero
    2159156,   # About origin story section
    10375824,  # Founder: Maya Chen
    18799034,  # Founder: Oliver Webb
    # Category thumbnail (categoryImages in menu.ts)
    7364044,   # Loose Leaf Tea category image
    # Espresso Drinks
    1233528, 186860, 9249368, 312418, 2396220, 3401403,
    12703064, 3762969, 2074127, 6205779, 32053480, 373639,
    324028, 6802983,
    # Cold Drinks
    10738363, 2775860, 2531183, 2396219, 8605616, 34170574,
    5946967, 5946969, 1028637, 1005638, 4553031, 6707943,
    # Loose Leaf Tea
    1793034, 1291712, 6660468, 34178500, 5946965, 1187317,
    1417945, 5946971, 6157049, 2074130,
    # Pastries
    1131379, 19296861, 1775032, 3892469, 29156078, 20179572,
    8174342, 5964505, 1775034, 1775035, 4397292, 13119734,
    # Sandwiches
    3957501, 31126255, 17498978, 1279330, 4109507, 699953,
    1640777, 4397295, 3616956, 3184183,
]))

OUTPUT_DIR = Path(__file__).parent.parent / "public" / "images"


def pexels_url(photo_id: int) -> str:
    return f"https://images.pexels.com/photos/{photo_id}/pexels-photo-{photo_id}.jpeg"


def already_done(photo_id: int) -> bool:
    return (OUTPUT_DIR / f"{photo_id}-card.webp").exists()


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    urls = [pexels_url(i) for i in IMAGE_IDS]

    # Skip IDs already downloaded
    pending = [u for u, i in zip(urls, IMAGE_IDS) if not already_done(i)]
    skipped = len(urls) - len(pending)
    if skipped:
        print(f"Skipping {skipped} already-downloaded images.")
    if not pending:
        print("All images already downloaded.")
        return

    print(f"Downloading {len(pending)} images into {OUTPUT_DIR} ...")
    result = subprocess.run(
        [sys.executable, SCRIPT,
         "--urls", *pending,
         "--output-dir", str(OUTPUT_DIR)],
        check=False,
    )
    sys.exit(result.returncode)


if __name__ == "__main__":
    main()
