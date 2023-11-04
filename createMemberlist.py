import json

names_list = []

infile = 'src/assets/names.txt'
outfile = 'src/assets/members.json'

with open(infile, 'r') as file:
    for line in file:
        # Remove leading and trailing whitespaces, and add the name to the list
        name = line.strip()
        names_list.append(name)

data = {"azubis": [{"name": item} for item in names_list]}

json_object = json.dumps(data)

with open(outfile, 'w') as outfile:
    outfile.write(json_object)