import os
from PIL import Image
import rembg

session = rembg.new_session('u2net_human_seg')

persona_files = [
    "hero_suit.png",
    "about_pointing.png",
    "skills_coding.png",
    "projects_builder.png",
    "contact_connect.png"
]

input_dir = "public/persona"

for filename in persona_files:
    input_path = os.path.join(input_dir, filename)
    if not os.path.exists(input_path):
        print(f"File not found: {input_path}")
        continue
    
    print(f"Processing {filename}...")
    img = Image.open(input_path).convert("RGBA")
    
    # Process with rembg
    result = rembg.remove(img, session=session)
    
    # Save back to output path as transparent PNG
    result.save(input_path, "PNG")
    print(f"Successfully saved transparent 2D cutout: {input_path} (Size: {result.size})")

print("All persona images processed successfully!")
