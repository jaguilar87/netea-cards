#!/bin/sh

# fetch
if [ -d "tp" ]; then
  echo "Pulling data..."
  cd tp
  git pull
  cd ..
else
  echo "Clonning repo..."
  git clone https://github.com/dsusco/tp.net-armageddon.org.git tp
fi

# clean old files
rm -rf data

# copy data
for folder in army_lists forces units weapons special_rules
do
  echo "Copying $folder..."
  
  mkdir -p data/$folder
  cp tp/_site/_$folder/* data/$folder
done

# rename html to md
for folder in army_lists
do
  for file in data/$folder/*.html; do
    mv -- "$file" "${file%.html}.md"
  done
done

echo "Done!"
