import sys
import json
import solution  # student file


def test_fib1():
    res = solution.fib(1)
    return res == 1, f"Expecting fib(1) to be 1, got: {res}"


def test_fib2():
    res = solution.fib(2)
    return res == 1, f"Expecting fib(2) to be 1, got: {res}"


def test_fib10():
    res = solution.fib(10)
    return res == 55, f"Expecting fib(10) to be 55, got: {res}"


SCORE_PER_TEST = 1
results = dict()
results["tests"] = []
tests = {
    "test_fib1": test_fib1,
    "test_fib2": test_fib2,
    "test_fib3": test_fib10,
}

for name, test_fn in tests.items():
    passed, output = test_fn()
    if passed:
        results["tests"].append(
            {
                "name": name,
                "score": SCORE_PER_TEST,
                "max_score": SCORE_PER_TEST,
                "status": "passed"
            })
    else:
        results["tests"].append(
            {
                "name": name,
                "score": 0,
                "visibility": "visible",
                "max_score": SCORE_PER_TEST,
                "status": "failed",
                "output": output
            })

json.dump(results, sys.stdout, indent=2)
