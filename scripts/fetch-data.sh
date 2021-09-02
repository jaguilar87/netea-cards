#!/bin/sh

# set buildtime
mkdir content
node -e "console.log(JSON.stringify({now: Date.now()}, null, 2))" > content/now.json

# fetch origins
mkdir data
cd data

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
cd ../content
rm -rf netea40k

# copy data
for folder in army_lists forces units weapons special_rules
do
  echo "Copying $folder..."
  
  mkdir -p netea40k/$folder
  cp ../data/tp/_site/_$folder/* netea40k/$folder
done

# rename html to md
for folder in army_lists
do
  for file in netea40k/$folder/*.html; do
    mv -- "$file" "${file%.html}.md"
  done
done

echo "Done!"
