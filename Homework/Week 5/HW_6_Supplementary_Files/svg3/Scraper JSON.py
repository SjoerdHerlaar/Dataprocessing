import csv
import re
import json
INITCSV = 'Data_Used.csv'

if __name__ == '__main__':

	data = []
	with open(INITCSV, 'r') as K:
		reader = csv.reader(K)
		for row in reader:
			data.append(row)
	data_list = []
	for entry in data[1:215]:
		pointlist = []
		country = entry[2]
		countrycode = entry[3]
		rate2000 = entry[5]
		rate2010 = entry[10]
		pointlist.append(country)
		pointlist.append(countrycode)
		pointlist.append(rate2000)
		pointlist.append(rate2010)
		data_list.append(pointlist)
	json_list = json.dumps(data_list)
	jsontext = open('json.txt', 'w')
	jsontext.write(json_list)
	jsontext.close()



	#data_list.append(final_date)
	#data_list.append(temp)


