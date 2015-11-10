import csv
import re
INITCSV = 'KNMI.txt'

def save_csv(f, tvseries):
    '''
    Output a CSV file containing highest ranking TV-series.
    '''
    writer = csv.writer(f)
    writer.writerow(['Title', 'Ranking', 'Genre', 'Actors', 'Runtime'])
    for row in tvseries:
        writer.writerow(row)


if __name__ == '__main__':

	data = []
	with open(INITCSV, 'r') as K:
		reader = csv.reader(K)
		for row in reader:
			data.append(row)

	data_clean = data[12:]
	with open("item.csv", 'wb') as new_file:
		for row in data_clean:
			data_list = []
			date = row[1]
			temp = row[2]
			final_date = date[:4] + '/' + date[4:6] + '/' + date[6:]
			temp = temp.replace(" ", "")
			data_list.append(final_date)
			data_list.append(temp)
			writer = csv.writer(new_file)
			writer.writerow(data_list)


