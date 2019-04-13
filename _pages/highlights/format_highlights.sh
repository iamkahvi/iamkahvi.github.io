inputFile=$1
author=$2
authorFirst=${2:0:1}

sed -E "s/(^$author.*$)/\\1\<hr>/g" $inputFile > highlights.md
sed -E -i '' "s/(^[^$authorFirst^<hr>].*$)/> \1/g" highlights.md
sed -E -i '' "s/(^$authorFirst[^h].*$)/> \1/g" highlights.md
