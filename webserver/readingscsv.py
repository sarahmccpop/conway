import csv

#https://www.analyticsvidhya.com/blog/2021/08/python-tutorial-working-with-csv-file-for-data-science/
file = open('employeedata.csv')
type(file)
csvreader = csv.reader(file)
header = []
header = next(csvreader) #gets the column titles so these aren't included 
rows = []
for row in csvreader:
    rows.append(row)

print(rows) 
file.close()   


