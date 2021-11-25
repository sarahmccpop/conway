from lists_and_tuples import Person, andy
from collections import Counter


def main():
    print(Person(1, 2, 3))

    people = {
        "andy": andy,
        "bob": Person(age=101, gender="?", location="behind you"),
        "cat": 7,
    }

    overrides = {
        "bob": "hello bob",
        "jeff": None,
        "cat": 0,
    }

    print(people["andy"])

    def get_person(name):
        person = overrides.get(name)

        if person:
            return person
        else:
            return people[name]

    print(get_person("cat"))

    spam = "lkfsjfosidfklnjrfgnrtlhk9perlvkmo9vupgiklvkdjvoi4uoisudf"

    spam_list = spam.split("k")

    spam_with_commas = ", ".join(spam_list)

    print("spams", spam, spam_list, spam_with_commas)

    spam_counter = Counter(spam)

    print(spam_counter)
    print("there were this many 'r's", spam_counter["r"])
    print("there were this many 'x's", spam_counter["x"])


if __name__ == "__main__":
    main()
