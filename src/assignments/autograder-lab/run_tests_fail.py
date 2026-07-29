import sys
import json

import solution


def test1():
    solution.foo(0)
    return False, "Impossible to pass"


def test2():
    solution.foo(1)
    return False, "Also impossible to pass"


SCORE_PER_TEST = 1
results = dict()
tests = {
    "test1": test1,
    "test2": test2,
}

results = {name: test_fn() for name, test_fn in tests.items()}


js = dict()
js["tests"] = []
for name, (passed, output) in results.items():
    if passed:
        js["tests"].append(
            {
                "name": name,
                "score": SCORE_PER_TEST,
                "max_score": SCORE_PER_TEST,
                "status": "passed"
            })
    else:
        js["tests"].append(
            {
                "name": name,
                "score": 0,
                "max_score": SCORE_PER_TEST,
                "status": "failed",
                "output": output
            })

json.dump(js, sys.stdout, indent=2)
