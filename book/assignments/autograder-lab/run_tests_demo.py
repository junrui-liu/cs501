import sys
import json
import solution  # student file


def test_fib1():
    res = solution.fib(1)
    return res == 1


def test_fib2():
    res = solution.fib(2)
    return res == 1


def test_fib10():
    res = solution.fib(10)
    return res == 55


SCORE_PER_TEST = 1
results = dict()
results["tests"] = []
tests = {
    "test_fib1": test_fib1,
    "test_fib2": test_fib2,
    "test_fib3": test_fib10,
}

for name, test_fn in tests.items():
    passed = test_fn()
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
                "max_score": SCORE_PER_TEST,
                "status": "failed",
            })

json.dump(results, sys.stdout, indent=2)
