import string
import collections
from collections import namedtuple

Person = namedtuple("Person", ["age", "gender", "location"])
andy = Person(37, "M", "London")


def remove_letters(main_list):

    for element in main_list:

        if str(element).isdigit():

            yield element


def test_remove_letters():

    # print(list(remove_letters(["a", 7, "7", "8", "x", "y", "z"])))

    main_list = ["a", 7, "7", "8", "x", "y", "z"]

    def element_is_digit(element):

        return str(element).isdigit()

    return [int(element) for element in main_list if element_is_digit(element)]


def main():

    print(test_remove_letters())


def old_main():
    print(type(string.ascii_letters))
    print("asctii letters:", string.ascii_letters)

    letter_list = list(string.ascii_letters)

    person_1 = (45, "F", "London")
    person_2 = (40, "F", "London")

    age, gender, location = person_1

    print("person_1", person_1)
    print("andy", andy)

    people = [
        person_1,
        person_2,
    ]

    print("They are from", person_1[2])
    print("Andy is from", andy.location)

    {"foo": 7}

    {"foo"}

    # a set of f and o
    set(["f", "o", "o"])

    # a set of 'foo'
    set(["foo"])

    # a set of f and o
    print(set("foo"))

    for letter in "dflkjewckljeklc":
        print(letter)


if __name__ == "__main__":
    main()
