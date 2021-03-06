#!/usr/bin/env python
# Name:
# Student number:
'''
This script scrapes IMDB and outputs a CSV file with highest ranking tv series.
'''
# IF YOU WANT TO TEST YOUR ATTEMPT, RUN THE test-tvscraper.py SCRIPT.
import csv
import re

from pattern.web import URL, DOM

TARGET_URL = "http://www.imdb.com/search/title?num_votes=5000,&sort=user_rating,desc&start=1&title_type=tv_series"
BACKUP_HTML = 'tvseries.html'
OUTPUT_CSV = 'tvseries.csv'

def extract_rating(root):
    movrating = root.by_tag("div.user_rating")[0]
    divrating = movrating.by_tag("div.rating")[0]
    spanvalue = divrating.by_tag("span.value")[0]
    return str(spanvalue[0])

def extract_genre(root):
    genres = str("")
    for spangenre in root.by_tag("span.genre"):
        for genre in spangenre.by_tag("a"):
            genres += str(genre[0])
            genres += ", "
        genres = genres[:-2]
    return genres

def extract_actors(root):
    actors = str("")
    for spancredit in root.by_tag("span.credit"):
        for actor in spancredit.by_tag("a"):
            actors += str(actor[0])
            actors += ", "
        actors = actors[:-2]
    return actors

def extract_runtime(root):

    spanrun = root.by_tag("span.runtime")[-1]
    time = str(spanrun[0])
    numbers = time.split(" ")
    return numbers[0]

def extract_tvseries(dom):
    '''
    Extract a list of highest ranking TV series from DOM (of IMDB page).

    Each TV series entry should contain the following fields:
    - TV Title
    - Ranking
    - Genres (comma separated if more than one)
    - Actors/actresses (comma separated if more than one)
    - Runtime (only a number!)
    '''
    result = []
    for root in dom.by_tag("tr.detailed")[:50]:
        counter = 0
        row = []
        for tdtitle in root.by_tag("td.title")[:1]:
            #extract title
            movtitle = tdtitle.by_tag("a")[0]
            row.append(str(movtitle[0]))
            #extract rating
            row.append(extract_rating(tdtitle))
            #extract genre
            row.append(extract_genre(tdtitle))
            #extract actors
            row.append(extract_actors(tdtitle))
            #extract runtime
            row.append(extract_runtime(tdtitle))
        result.append(row)
        row = []
    return result
        
        #print genres
        #print actors


            
        
    # ADD YOUR CODE HERE TO EXTRACT THE ABOVE INFORMATION ABOUT THE
    # HIGHEST RANKING TV-SERIES
    # NOTE: FOR THIS EXERCISE YOU ARE ALLOWED (BUT NOT REQUIRED) TO IGNORE
    # UNICODE CHARACTERS AND SIMPLY LEAVE THEM OUT OF THE OUTPUT.


def save_csv(f, tvseries):
    '''
    Output a CSV file containing highest ranking TV-series.
    '''
    writer = csv.writer(f)
    writer.writerow(['Title', 'Ranking', 'Genre', 'Actors', 'Runtime'])
    for row in tvseries:
        writer.writerow(row)

    # ADD SOME CODE OF YOURSELF HERE TO WRITE THE TV-SERIES TO DISK

if __name__ == '__main__':
    # Download the HTML file
    url = URL(TARGET_URL)
    html = url.download()

    # Save a copy to disk in the current directory, this serves as an backup
    # of the original HTML, will be used in testing / grading.
    with open(BACKUP_HTML, 'wb') as f:
        f.write(html)

    # Parse the HTML file into a DOM representation
    dom = DOM(html)

    # Extract the tv series (using the function you implemented)
    tvseries = extract_tvseries(dom)

    # Write the CSV file to disk (including a header)
    with open(OUTPUT_CSV, 'wb') as output_file:
        save_csv(output_file, tvseries)
