#!/bin/bash
for i in {1..9}
do
  cd ./"Exercise$i"
  git add .
  git commit -m "week 2 day 4 xp exercise $i"
  git push -u origin main
  cd ../
done