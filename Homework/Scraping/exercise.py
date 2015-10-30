# Name : Sjoerd Herlaar
# Student number : 10281843
'''
This module contains an implementation of split_string.
'''

# You are not allowed to use the standard string.split() function, use of the
# regular expression module, however, is allowed.
# To test your implementation use the test-exercise.py script.

# A note about the proper programming style in Python:
#
# Python uses indentation to define blocks and thus is sensitive to the
# whitespace you use. It is convention to use 4 spaces to indent your
# code. Never, ever mix tabs and spaces - that is a source of bugs and
# failures in Python programs.


def split_string(source, separators):
    '''
    Split a string <source> on any of the characters in <separators>.

    The ouput of this function should be a list of strings split at the
    positions of each of the separator characters.
    '''
    result = []
    begin = 0
    end = 0
    control = 0
    length = len(separators)
    strlen = len(source)
    for char in source:
        
        for separator in separators:
            if char != separator:
                control += 1
        if control == length:
            end += 1
        if control != length and begin == end:
            begin = end
            begin += 1
            end += 1          
        if control != length and begin < end:
            result.append(source[begin:end])
            print begin
            print end
            begin = end
            begin += 1
            end += 1
        control = 0
    if end != begin:
        result.append(source[begin:])
        #print char


    return result
    #for source.find(char) != -1:	
	    	



if __name__ == '__main__':
    # You can try to run your implementation here, that will not affect the
    # automated tests.
    #print split_string('abacadabra', 'ba')  # should print: ['c', 'd', 'r']
    print split_string('abacadabra', 'b')