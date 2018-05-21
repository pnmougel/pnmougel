#! /bin/sh

for dir in "arpejeh" "guilmault" "pilotpartner" "vitrinevo" "votcast" "nuata" "scolor"
do
    convert -gravity Center -resize '640x300' -background transparent $dir/logo.bck.png $dir/tmp.png
    convert -gravity Center -extent 800x800 -background transparent $dir/tmp.png $dir/logo.png
    convert -gravity Center -extent 800x800 -background transparent $dir/tmp.png $dir/tmp.png
    convert -threshold 75% $dir/tmp.png $dir/tmp.png
    convert  -fuzz 50% -fill "#227078" -opaque "#000000" $dir/tmp.png $dir/logo_dark.png
done
