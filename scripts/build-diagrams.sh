#!/bin/bash

mkdir -p assets/diagrams/igvc2023

for file in assets/diagrams/igvc2023/*.d2
do
    d2 "$file" "${file%.d2}.svg"
done

echo "✓ All diagrams built"