import csv
import re
import json
INITCSV = 'KNMI.txt'

if __name__ == '__main__':

	data = []
	with open(INITCSV, 'r') as K:
		reader = csv.reader(K)
		for row in reader:
			data.append(row)
	data_clean = data[12:]
	data_list = []
	for entry in data_clean :
		pointlist = []
		date = entry[1]
		final_date = date[:4] + '/' + date[4:6] + '/' + date[6:]
		temp = entry[2]
		temp = temp.replace(" ", "")
		pointlist.append(final_date)
		pointlist.append(temp)
		data_list.append(pointlist)
	json_list = json.dumps(data_list)
	jsontext = open('json.txt', 'w')
	jsontext.write(json_list)
	jsontext.close()



	#data_list.append(final_date)
	#data_list.append(temp)


