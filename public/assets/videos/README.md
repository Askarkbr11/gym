# Hero Background Video

## Required Video
- **File**: `hero-background.mp4`
- **Duration**: 8-12 seconds
- **Size**: Under 3MB (compressed)
- **Format**: MP4 (H.264 codec)
- **Content**: Cinematic gym workout loop, slow motion weightlifting, dark lighting

## How to Add Your Video

1. **Record or Source Video**
   - Use a professional gym workout video
   - Ensure it's 8-12 seconds long
   - Film in slow motion for dramatic effect
   - Use dark, moody lighting

2. **Compress the Video**
   ```bash
   # Using ffmpeg (recommended)
   ffmpeg -i input.mp4 -vcodec h264 -acodec aac -crf 28 -preset slow -vf "scale=1920:1080" -r 30 -t 12 hero-background.mp4
   ```

3. **Place the File**
   - Save as `hero-background.mp4` in this directory
   - Ensure file size is under 3MB

## Free Video Sources
- Pexels: https://www.pexels.com/search/gym/
- Pixabay: https://pixabay.com/videos/search/gym/
- Coverr: https://coverr.co/search/gym

## Note
The video will autoplay, loop, and be muted for better user experience and performance.
