import sys
import json
import solution  # student file


def test1():
    exp = 69
    try:
        res = solution.foo("cs501")
        return res == exp, f"Expecting output to be {exp}\nError: None"
    except Exception as e:
        return False, f"Expecting output to be {exp}\nError: {e}"


def test2():
    exp = 420
    try:
        res = solution.foo("2025fall")
        return res == exp, f"Expecting output to be {exp}\nError: None"
    except Exception as e:
        return False, f"Expecting output to be {exp}\nError: {e}"


SCORE_PER_TEST = 1
results = dict()
tests = {
    "test1": test1,
    "test2": test2,
}


results = {name: test_fn() for name, test_fn in tests.items()}
passed = [name for name, (passed, _) in results.items() if passed]
failed = [name for name, (passed, _) in results.items() if not passed]

js = dict()
js["score"] = len(passed) * SCORE_PER_TEST
js["max_score"] = len(tests) * SCORE_PER_TEST
js["status"] = "passed" if len(failed) == 0 else "failed"
output = f"Passed: {', '.join(passed)}\n"
output += f"Failed: {', '.join(failed)}\n"
if len(failed) > 0:
    output += f"First failed test case: {failed[0]}\n{results[failed[0]][1]}"
    js["output"] = output
else:
    js["output"] = "All tests passed!"
js["visibility"] = "visible"

json.dump(js, sys.stdout, indent=2)
