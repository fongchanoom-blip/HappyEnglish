with open('data/vocabulary_full.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Find word_0105 area
idx = text.find('word_0105')
with open('result.txt', 'w', encoding='utf-8') as out:
    # Get the line containing word_0105
    # Find the start of this line (go back to find {)
    line_start = text.rfind('\n', 0, idx) + 1
    line_end = text.find('\n', idx)

    line = text[line_start:line_end]
    out.write('Line containing word_0105:\n')
    out.write('Length: ' + str(len(line)) + '\n')

    # Check for \r characters
    out.write('Contains CR: ' + str('\r' in line) + '\n')
    out.write('Contains LF: ' + str('\n' in line) + '\n')

    # Show hex of the line around backgroun
    backgroun_idx = line.find('backgroun')
    out.write('backgroun at: ' + str(backgroun_idx) + '\n')

    # Show chars from backgroun to end of word field
    # word: 'backgroun\nd', phonetic
    # backgroun is at position, then \n, then d', then ,
    # Let's find the pattern

    # Find the pattern word: 'backgroun
    pattern_start = line.find("word: 'backgroun")
    if pattern_start >= 0:
        # Extract from here to the next ',
        segment = line[pattern_start:pattern_start+40]
        out.write('Segment: ' + repr(segment) + '\n')

        # Check for \r\n
        if '\r\n' in segment:
            out.write('Contains CRLF!\n')
        if '\n' in segment:
            out.write('Contains LF\n')
        if '\r' in segment:
            out.write('Contains CR\n')

print('Done')