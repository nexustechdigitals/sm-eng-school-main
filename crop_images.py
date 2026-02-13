from PIL import Image
import os

# Define paths
base_path = r"c:\Users\dipes\OneDrive\Desktop\Nexus-Projects\sm-eng-school-main\src\assets\img"

# 1. Crop teacher images - show only frame above waist
teachers_path = os.path.join(base_path, "Teachers")
teacher_files = ["teacher1.webp", "teacher2.webp"]

for teacher_file in teacher_files:
    file_path = os.path.join(teachers_path, teacher_file)
    if os.path.exists(file_path):
        img = Image.open(file_path)
        width, height = img.size
        
        # Crop top 60% of image (above waist)
        crop_height = int(height * 0.6)
        cropped = img.crop((0, 0, width, crop_height))
        
        # Resize to standard square
        size = 400
        cropped_resized = cropped.resize((size, size), Image.Resampling.LANCZOS)
        cropped_resized.save(file_path)
        print(f"✓ Cropped {teacher_file}: {img.size} → {(size, size)}")

# 2. Crop principle image from above
principle_path = os.path.join(teachers_path, "principle1.webp")
if os.path.exists(principle_path):
    img = Image.open(principle_path)
    width, height = img.size
    
    # Crop top 65% of image
    crop_height = int(height * 0.65)
    cropped = img.crop((0, 0, width, crop_height))
    
    # Resize to standard square
    size = 400
    cropped_resized = cropped.resize((size, size), Image.Resampling.LANCZOS)
    cropped_resized.save(principle_path)
    print(f"✓ Cropped principle1.webp: {img.size} → {(size, size)}")

# 3. Crop slider image b from above to show children
slider_path = os.path.join(base_path, "Slider")
slider_b = os.path.join(slider_path, "b.webp")

if os.path.exists(slider_b):
    img = Image.open(slider_b)
    width, height = img.size
    
    # Crop from top - remove bottom, keep top 70% to show children properly
    crop_height = int(height * 0.7)
    cropped = img.crop((0, 0, width, crop_height))
    
    # Resize to standard slider size (wide format)
    resized = cropped.resize((1200, 600), Image.Resampling.LANCZOS)
    resized.save(slider_b)
    print(f"✓ Cropped b.webp (slider): {img.size} → (1200, 600)")

# 4. Standardize logo sizes
logo_path = os.path.join(base_path, "logo.png")
logo1_path = os.path.join(base_path, "logo1.png")

logos = [logo_path, logo1_path]
standard_logo_size = (200, 200)

for logo_file in logos:
    if os.path.exists(logo_file):
        img = Image.open(logo_file)
        original_size = img.size
        
        # Resize to standard size maintaining aspect ratio
        img.thumbnail(standard_logo_size, Image.Resampling.LANCZOS)
        
        # Create new image with standard size and place logo in center
        new_img = Image.new('RGBA', standard_logo_size, (0, 0, 0, 0))
        offset = ((standard_logo_size[0] - img.size[0]) // 2, 
                  (standard_logo_size[1] - img.size[1]) // 2)
        new_img.paste(img, offset, img if img.mode == 'RGBA' else None)
        
        new_img.save(logo_file)
        print(f"✓ Standardized {os.path.basename(logo_file)}: {original_size} → {standard_logo_size}")

print("\n✓ All images cropped and resized successfully!")
