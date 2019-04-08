import sys
import re

doc = open(sys.argv[1], "r")
doc2 = open(sys.argv[1], "r")
output = open("highlights.txt", "w")
text = doc2.read();
doc2out = re.findall(r', (.*)', text)

author = doc2out[0].split()[0]

doc2.close()

print(author)

out = ""

searchRe1 = '(^' + author + '.*$)'
searchRe2 = '(^[^' + author[0] + '^<hr>].*$)'
searchRe3 = '(^' + author[0] + '[^' + author[1] + '].*$)'

print(searchRe2)

for line in doc:
    lineOut = re.sub(searchRe1, r'\r\1\r<hr>', line)
    out = out + lineOut

out = re.sub(searchRe2, r'> \1', out)
output.write(out)

doc.close()
output.close()
