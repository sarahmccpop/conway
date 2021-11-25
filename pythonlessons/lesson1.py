import pathlib

pwd = pathlib.Path(".")

# way to declare a variable with a path to a file
text_file_path = pathlib.Path(".") / "pythonlessons" / "text.txt"

print("Hello world")
print(pwd.resolve())  # prints working directory not just . by using resolve
# f = open("pythonlessons/text.txt")
f = text_file_path.open()
for line in f:
    print(line)

print(f)
print(f.read())
print(f.read())

# technically called a "context manager" but it basically means if you see
# 'with' then it's a class that's got some hoursekeeping 'setup' and 'takedown'
# methods (like openingf and closing a file), they're called __enter__
# and __exit__ on the class.
with text_file_path.open() as f:
    print(f.read())


class Foo:
    def __enter__(self):
        print("you're starting to use a foo")

    def __exit__(self, *args, **kwargs):
        print("You've finished with me")


with Foo() as x:
    a = 1
    b = 2
    print(a + b)

# declaring a class
class DayOfWeek:
    def __init__(self, num):
        self.num = num

    # this method returns an item at a specified index
    def __getitem__(self, number):

        day_names = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
        if number > 6:
            return "too big"
        else:
            return day_names[number]

    # built in adding function
    def __add__(self, other):
        return self.num + other.num

    def __mult__(self, other):
        return self.num * other.num


# If you're trying to create a class that can do "+"
# you make a dunder function for that symbol (for "+" it's __add__)
# and expect to see that symbol in the function

day_of_week = DayOfWeek(num=5)

print(day_of_week[0])
print(day_of_week + day_of_week)
