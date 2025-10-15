# Autograder Lab

> **Who**: Everyone
>
> **Deadline**: Tuesday, Oct 14, 6:50PM

The goal of this lab is to teach you how to create and use simple autograders for your assignments. By the end of this lab, you will be able to:
- Understand how autograders work under the hood, including how they are set up, executed, and how they report results.
- Create autograders that provide meaningful feedback to students while ensuring the integrity of the grading process.
- Diagnose, debug, and fix common issues that arise in autograder implementations.

## Setup

1. You should be automatically added to the [Gradescope course for CS 501](https://www.gradescope.com/courses/1163414). If you are not, please use the entry code GV4X2B.

2. In this lab, you'll play the role of both a TA who writes autograders, and a student who submits assignments to be graded. 
   - Whenever you're asked to play the role of a student, you will submit to the CS 501 Gradescope course (that you just joined in step 1). 
   - Whenever you're asked to play the role of a TA, you will need to upload your autograder to a "dummy" Gradescope course that you create for yourself. We will provide instructions on how to do this later in the lab.

3. Make sure you have [Python 3 installed on your machine](https://xkcd.com/1987/).

## What You Need to Do

### Task 1

The autograder that Junrui just demo'ed in class is available [here](). 

Imagine that you're using this autograder for a homework assignment in a CS class for which you're a TA. One day before the assignment is due, you receive the following email complaint from a student:

> Hi <beloved TA>,
> 
> I have been spending the whole weekend trying to debug my code, but I keep getting 0 points on Gradescope. Gradescope just tells me which test cases I failed, but it doesn't tell me what the expected output was, or what my code actually produced. Without that information, I can't figure out what went wrong. I think learning is all about getting feedback, and without feedback, I can't learn anything. Please fix this issue as soon as possible, because the assignment is due tomorrow and I really want to get some points on it. This assignment is creating a lot of stress for me, and I would really appreciate your help.
>
> Thanks a lot,
> <troubled student>

Knowing that being a TA is all about helping students learn, you decide to modify the autograder to provide more feedback to students. Specifically, you want to modify the autograder so that for each test case, it shows:
- The input that was provided to the student's code
- The expected output for that input
- The actual output produced by the student's code

Update the demo autograder to provide the above feedback to students. You can do so by augmenting the JSON file that the autograder produces with an `output` field for each failed test case.

To test your updated autograder, you will need to create a dummy Gradescope course for yourself, and upload your autograder to that course. Here are the steps to do so:
1. Navigate to [Gradescope](https://www.gradescope.com/).
2. Click "+ Create Course", pick any course number and name you like, and click "Create Course".
3. Click on the course that you just created, and then click "Create Assignment".
4. In the sidebar, select "Programming Assignment" as the assignment type, name the assignment "Test" (or any name you like), use 100 for autograder points, and pick any release & due dates. Then click "Create Assignment".
5. Once the assignment is created, navigate to "Configure Autograder" and click "Select Autograder (.zip)". This will open a file picker dialog. You need to select the `zip` file that contains your updated autograder. To create this `zip` file, Junrui wrote a simple `Makefile` that you can use (simply run `make` which will create a file called `autograder.zip` that you can upload to Gradescope). After selecting the `zip` file, click "Update Autograder".

This sets up the autograder for all future submissions. To test it, you will now pretend you're a student and submit some code to be graded. You can do so by clicking "Test Autograder" button which is right next to "Update Autograder", and uploads the dummy `fib.py` file in the same directory as the autograder.


### Task 2

After updating the autograder, the student thanked you for your help. However, a few hours before the deadline, you noticed that some students are abusing the autograder as a debugging tool by repeatedly submitting their code to the autograder, checking the feedback, and using that feedback to fix their code. You turned a blind eye to this behavior until you discovered that one student simply hardcoded the test cases in their submission and got a perfect score without actually solving the problem.

As a TA, do you think this is cheating? What would you do in this situation? Write down your thoughts.


### Task 3

After this incident, you come to appreciate the fine balance between providing meaningful feedback to students and ensuring the integrity and fairness of the grading process.

To prevent further abuse, you decide to update the autograder again to provide just enough feedback so that students aren't completely stuck, but not too much feedback that they can easily game the system. To do so, update the autograder in the following way. Instead of displaying detailed information for each failed test case, the autograder now display the following summary information:
```
Passed: test_name_1, test_name_2, ...
Failed: test_name_3, test_name_4, ...
First failed test case:
Expected: <expected output>
Actual: <actual output>
```
Update the dummy assignment with your new autograder, and test it by submitting the same dummy `fib.py` file as before.



### Task 4

Since the autograder doesn't show the input for each test case anymore, it's impossible for students to hardcode the test cases in their submission anymore... [or is it?](https://www.youtube.com/watch?v=KF8wlNegMas)

In this task, you will try to hack a similar autograder, and show that you can still hardcode the test cases in your submission and get a perfect score without actually solving the problem.

Specifically, in the CS 501 Gradescope course, Junrui has created a dummy assignment called "Autograder Hacking (Task 4)". The autograder for this assignment accepts a `solution.py` file that must implement the following function:
```python
def foo(x: string) -> int:
    # Your code here
```
However, Junrui is not gonna tell you what `foo` is supposed to do. Your task is to achieve perfect score on this assignment without knowing what the autograder checks.

<details>
<summary>Hint</summary>
Submit a dummy file and observe the output of the autograder. 
</details>

Once you complete this task, think about how you would prevent similar exploits in your own autograders.


---


### Task 6

After completing Tasks 4, you become disillusioned with autograders. You sense that no matter how hard you try to design a good autograder, a motivated student can always find a way to game the system. You decide to give up, become the bad guy, and provide no feedback in the autograder beyond printing out names of passed and failed test cases. After doing so, the Piazza forum is flooded with questions like this:
> Hi <beloved TA>,
> 
> I can't pass `test_1`, `test_8`, and `test_10`. Can you please tell me what those tests are supposed to check? I really need to graduate this quarter and this is the last course I need to take.
> 
> --Anonymous Poet

Then, you spend tens of hours each week trying to distill the essence of each test case into a cryptic poem, hoping that the students will be able to decipher the poems and fix their code.

The quarter passes, and you feel exhausted. You reflect on your experience, and wonder:

> Is this really what teaching is all about?
>
> Is this really what learning is all about?
>
> Why is testing so hard?

Think about these questions, and write down your thoughts. Concretely, how would you design autograders that strike the right balance between providing meaningful feedback to students and ensuring the integrity of the grading process?

## How to Submit Your Work

Submit a zip file containing what you did for each task to the "Autograder Lab" assignment on Canvas. Your zip file should contain the following files:
- `task1/`: A directory containing your updated autograder for Task 1.
- `task2.txt`: A text file containing your thoughts for Task 2.
- `task3/`: A directory containing your updated autograder for Task 3.
- `solution_task4.py`: A Python file containing your solution for Task 4.
- `task5.txt`: A text file containing your thoughts for Task 5.