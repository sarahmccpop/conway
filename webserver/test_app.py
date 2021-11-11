import pytest
#from pytest.mark import parametrize

# import pytest ... ptyest.raises
# from pytest import raises ... raises

import webserver.app


def test_foo():

    result = webserver.app.foo()

    assert result == "<h1>Baz!</h1>"

def test_get_userdetails():

    with pytest.raises(KeyError):

        webserver.app.get_userjob(10)

@pytest.mark.parametrize(
    "number, expected",
    [
        (3, "Your number is 3"),
        ("10", "Your number is 10"),
        (100, "Your number is 100"),
        (-100, "Your number is -100"),
        (1.5, "Your number is 1.5"),
        ("horse", "Your number is horse"),
    ]
)
def test_double(number, expected):

    result = webserver.app.double(my_number=number)

    assert result == expected