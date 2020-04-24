#!/bin/sh

pwd

if [ -d "tp" ]; then
  echo "Pulling data..."
  cd tp
  git pull
  cd ..
else
  echo "Clonning repo..."
  git clone https://github.com/dsusco/tp.net-armageddon.org.git tp
fi

rm -rf data

for folder in forces units weapons special_rules
do
  echo "Copying $folder..."
  
  mkdir -p data/$folder
  cp tp/_site/_$folder/* data/$folder
done

echo "Done!"
