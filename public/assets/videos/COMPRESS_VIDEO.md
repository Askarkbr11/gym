# Video Compression Guide

## Current Status
The hero-background.mp4 file is **14MB** and needs to be compressed to **under 3MB** for optimal web performance.

## Quick Compression (if ffmpeg is installed)

```bash
cd public/assets/videos
ffmpeg -i hero-background.mp4 -vcodec h264 -acodec aac -crf 28 -preset slow -vf "scale=1920:1080" -r 30 -t 12 -movflags +faststart hero-background-compressed.mp4
mv hero-background-compressed.mp4 hero-background.mp4
```

## Compression Parameters Explained
- `-crf 28`: Quality setting (18-28 is good, higher = smaller file)
- `-preset slow`: Better compression (slower but smaller)
- `-vf "scale=1920:1080"`: Resize to 1080p
- `-r 30`: Frame rate (30fps)
- `-t 12`: Duration (12 seconds max)
- `-movflags +faststart`: Optimize for web streaming

## Alternative: Online Compression
1. Use [CloudConvert](https://cloudconvert.com/mp4-compressor)
2. Upload the video
3. Set target size to 3MB
4. Download and replace hero-background.mp4

## Target Specifications
- **Size**: Under 3MB
- **Duration**: 8-12 seconds
- **Resolution**: 1920x1080 (or lower)
- **Format**: MP4 (H.264)
- **Frame Rate**: 24-30fps

## Verify After Compression
```bash
ls -lh public/assets/videos/hero-background.mp4
# Should show file size under 3MB
```
