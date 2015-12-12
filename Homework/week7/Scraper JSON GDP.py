import csv
import re
import json
INITCSV = 'Fertility Rate.csv'

if __name__ == '__main__':

	data = []
	with open(INITCSV, 'r') as K:
		reader = csv.reader(K)
		for row in reader:
			data.append(row)
	#print data
	data = data[1:215]
	data_dict = {}
	for entry in data:
		pointlist = []
		country = entry[2]
		countrycode = entry[3]
		rate1990 = entry[4]
		rate2000 = entry[5]
		rate2010 = entry[10]
		pointlist.append(country)
		pointlist.append(rate1990)
		pointlist.append(rate2000)
		pointlist.append(rate2010)
		data_dict[countrycode] = pointlist
		print pointlist
	#print data_dict
	json_list = json.dumps(data_dict)
	jsontext = open('Fertility_json.json', 'w')
	jsontext.write(json_list)
	jsontext.close()


