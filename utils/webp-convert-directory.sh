#!/bin/bash

PARAMS=('-q 90 -resize 1000 0 -metadata exif -mt -m 6 -progress')

if [ $# -ne 0 ]; then
	PARAMS=$@;
fi

cd $(pwd)

shopt -s nullglob nocaseglob extglob

for FILE in *.@(jpg|jpeg|tif|tiff|png); do 
    cwebp $PARAMS "$FILE" -o "${FILE%.*}".webp;
done
