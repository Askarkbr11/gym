# 3D Model Assets

## Required 3D Model
- **File**: `dumbbell.gltf` (or `barbell.gltf`)
- **Format**: GLTF with Draco compression
- **Optimization**: Low polygon count for web performance
- **Size**: Keep under 2MB

## How to Add Your 3D Model

1. **Create or Source Model**
   - Use Blender, Maya, or other 3D software
   - Model a simple dumbbell or barbell
   - Keep polygon count low (under 5000 triangles)

2. **Export as GLTF**
   - Export from your 3D software as GLTF 2.0
   - Enable Draco compression for smaller file size

3. **Optimize**
   - Use glTF-Pipeline or similar tools
   - Compress textures
   - Reduce polygon count if needed

4. **Place the File**
   - Save as `dumbbell.gltf` in this directory
   - Include any associated `.bin` files if needed

## Free 3D Model Sources
- Sketchfab: https://sketchfab.com/3d-models?features=downloadable&q=dumbbell
- Poly Haven: https://polyhaven.com/models
- TurboSquid: https://www.turbosquid.com/Search/3D-Models/free/dumbbell

## Note
The component includes a fallback geometry if the model fails to load, so the site will work even without a 3D model file.
