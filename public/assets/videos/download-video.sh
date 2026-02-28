#!/bin/bash
# Script to download a sample gym video
# Replace with your actual video URL

echo "To add your hero background video:"
echo "1. Download a gym workout video (8-12 seconds)"
echo "2. Compress it to under 3MB using ffmpeg:"
echo "   ffmpeg -i input.mp4 -vcodec h264 -crf 28 -vf scale=1920:1080 -t 12 hero-background.mp4"
echo "3. Place it in this directory as hero-background.mp4"
echo ""
echo "Free video sources:"
echo "- Pexels: https://www.pexels.com/search/gym/"
echo "- Pixabay: https://pixabay.com/videos/search/gym/"
