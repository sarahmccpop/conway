import csv
import pathlib


def print_csv(path):

    with path.open() as f:
        reader = csv.DictReader(f)
        for row in reader:
            print(row["location"], int(row["age"]) + 10)


def main():

    path_to_csv = pathlib.Path("pythonlessons") / "names.csv"

    print_csv(path_to_csv)


if __name__ == "__main__":
    main()
