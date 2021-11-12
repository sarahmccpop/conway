import csv

a_csv_file = open("employeedata.csv", "r")
dict_reader = csv.DictReader(a_csv_file)

for x in dict_reader:
    ordered_dict_from_csv = list(dict_reader)[0]
    dict_from_csv = dict(ordered_dict_from_csv)
    print(dict_from_csv)


input_file = csv.DictReader(open("employeedata.csv"))

myList = list(input_file)
for x in myList:
    print(x)



#with open('employeedata.csv', newline='') as csvfile:
#    reader = csv.DictReader(csvfile)
#    for row in reader:
#        print(row['name'], row['job'], row['hours'])

    

# https://overlaid.net/2016/02/04/convert-a-csv-to-a-dictionary-in-python/
# https://stackoverflow.com/questions/6740918/creating-a-dictionary-from-a-csv-file
#with open('employeedata.csv', mode='r') as infile:
#    reader = csv.reader(infile)
#    with open('coors_new.csv', mode='w') as outfile:
#        mydict = {rows[0]:rows[1] for rows in reader}
#        writer = csv.writer(outfile)

#print(mydict)


#https://www.analyticsvidhya.com/blog/2021/08/python-tutorial-working-with-csv-file-for-data-science/
#file = open('employeedata.csv')
#type(file)
#csvreader = csv.reader(file)
#header = []
#header = next(csvreader) #gets the column titles so these aren't included 
#rows = []
#for row in csvreader:
 #   rows.append(row)

#print(rows) 
#file.close()   

