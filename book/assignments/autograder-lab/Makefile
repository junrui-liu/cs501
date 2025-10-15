# Makefile for creating Gradescope autograder.zip for versions demo, visible, first

FILES = run_autograder setup.sh requirements.txt run_tests.py

# Default target: build all versions
all: demo visible first fail

	

# Build for version demo
demo: run_tests_demo.py
	@echo "Building autograder_demo.zip..."
	@cp run_tests_demo.py run_tests.py
	@zip -r autograder_demo.zip $(FILES) $(DIRS)
	@rm run_tests.py

# Build for version visible
visible: run_tests_visible.py
	@echo "Building autograder_visible.zip..."
	@cp run_tests_visible.py run_tests.py
	@zip -r autograder_visible.zip $(FILES) $(DIRS)
	@rm run_tests.py

# Build for version first
first: run_tests_first.py
	@echo "Building autograder_first.zip..."
	@cp run_tests_first.py run_tests.py
	@zip -r autograder_first.zip $(FILES) $(DIRS)
	@rm run_tests.py


# Build for version fail
fail: run_tests_fail.py
	@echo "Building autograder_fail.zip..."
	@cp run_tests_fail.py run_tests.py
	@zip -r autograder_fail.zip $(FILES) $(DIRS)
	@rm run_tests.py

# Clean up
clean:
	@echo "Cleaning up..."
	@rm -f autograder_*.zip run_tests.py

.PHONY: all demo visible first clean fail
