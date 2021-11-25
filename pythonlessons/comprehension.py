import string
from itertools import count

letters = string.ascii_letters


def even_numbers():

    num = 0

    # for(int i = 0; True; i++){

    # for num in count:
    while True:

        if num % 2 == 0:

            yield num

        num = num + 1


def main():

    even_number_generator = even_numbers()

    print(next(even_number_generator))
    print(next(even_number_generator))
    print(next(even_number_generator))
    print(next(even_number_generator))

    # here's an example of using enumerate
    day_of_week = "mon tue wed thu fri sat sun".split()

    type_of_day = "week week week week week weekend weekend".split()

    for day in day_of_week:
        print(day)

    for e in enumerate(day_of_week):
        print(e)

    for num, day in enumerate(day_of_week, start=1):
        print("day", num, "is a", day)

    days_and_their_types = zip(day_of_week, type_of_day)

    print(list(days_and_their_types))


def old_main():
    ## Square brackets becomes a list

    uppercase = [letter.upper() for letter in letters]

    print(uppercase)

    ## Round brackets (parenthesis) becomes a generator, and is lazily evaluated

    lowercase = (letter.lower() for letter in letters)

    print(lowercase)

    print("the first lowercase character is", next(lowercase))
    print("the second lowercase character is", next(lowercase))

    print("here are all the rest of the lowercase letters")
    for letter in lowercase:
        print(letter)

    vowels = set(["a", "e", "i", "o", "u"])

    for letter in string.ascii_letters:
        if letter.islower():
            if letter in vowels:
                print("lowercase vowel", letter)

    letter_generator = (letter for letter in string.ascii_letters)
    lowercase_letter_generator = (
        letter for letter in letter_generator if letter.islower()
    )
    vowel_generator = (
        letter for letter in lowercase_letter_generator if letter in vowels
    )

    print(list(vowel_generator))

    {"a": "b"}

    uppercaser_dict = {letter: letter.upper() for letter in letters}

    print(uppercaser_dict)


if __name__ == "__main__":

    main()

    run_old_main = False
    if run_old_main:
        old_main()
