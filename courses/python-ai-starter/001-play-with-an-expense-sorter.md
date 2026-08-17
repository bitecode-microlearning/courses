---
sourceid: python-ai-starter-play-with-an-expense-sorter
lessonname: Play with an Expense Sorter
position: 1
level: beginner
goal: Run an interactive mini AI expense classifier where the learner types expenses, checks the AI prediction, and corrects the AI when it is wrong.
contentdescription: |
  This lesson must produce an interactive AI tool, not a static explanation of variables.
  Start with a working AI tool, not theory.
  
  In this lesson, the learner interacts directly with a tiny AI expense classifier. They type an expense description, the AI predicts a category, and the learner can tell the AI whether the prediction was correct.
  
  If the prediction is wrong, the learner provides the correct category and the AI immediately learns from the new example. This creates a simple feedback loop where the learner becomes the teacher.
  
  Focus on the big picture:
  
  - Computers can learn from examples.
  - AI can make predictions about things it has not seen before.
  - Feedback helps the AI improve.
  - Python programs can interact with users through simple questions and answers.
  
  Treat the machine learning implementation as a black box in this lesson. The learner does not need to understand how the model works internally yet.
  
  The goal is to create an immediate "wow" moment:
  
  "I typed something."
  "The AI made a prediction."
  "I corrected it."
  "The AI learned from me."
  
  Only introduce the minimum Python concepts needed to understand what is happening:
  
  - a Python program is a list of instructions executed from top to bottom
  - input() allows the user to type information
  - print() displays information
  - variables temporarily store values
  
  Do not explain CountVectorizer, MultinomialNB, model training details, mathematical concepts, feature extraction, or machine learning theory in this lesson.
codedescription: |
  Create a working multi-file OneCompiler Python project where the learner can teach a small expense-category AI through real console interaction.
  
  Return exactly these files as separate code blocks:
  
  * `main.py`
  * `challenge.py`
  * `expense_ai.py`
  * `training_expenses.csv`
  
  Do not include fake transcripts, example output, or explanation outside the files.
  
  ## Project goal
  
  The learner should experience this loop:
  
  1. They type an expense description.
  2. The AI predicts a category.
  3. The learner confirms or corrects the prediction.
  4. If corrected, the AI learns from the new example.
  5. A tiny beginner challenge file can later show a simple “AI boost from corrections” percentage.
  
  Do not teach machine learning theory. Focus on the “wow” moment of personally teaching an AI.
  
  Important: The “AI boost” percentage is not real model accuracy. It only shows what percentage of the learner’s answers were corrections that helped train the AI during the current session.
  
  ---
  
  ## Critical interaction rules
  
  `main.py` must be a real interactive console app.
  
  Use real `input()` calls.
  
  Do not simulate user input.
  Do not hardcode processed expense examples.
  Do not print fake interactions.
  Do not generate a scripted demo.
  
  Forbidden examples:
  
  ```python
  expense_text = "coffee"
  print("Correct? (Y/N) > N")
  ```
  
  The learner must type everything themselves.
  
  ---
  
  ## File responsibilities
  
  ### `expense_ai.py`
  
  This file contains all machine learning setup, training logic, and feedback/correction input logic.
  
  It must:
  
  * import `csv`
  * import `CountVectorizer` and `MultinomialNB`
  * load examples from `training_expenses.csv`
  * store loaded expense texts and categories in memory
  * train the model when the application starts
  * retrain the model after every new correction
  * never write back to `training_expenses.csv`
  * handle all Y/N feedback input
  * handle all category correction input
  
  Expose these functions:
  
  ```python
  predict_category(expense_text)
  add_training_example(expense_text, correct_category)
  get_known_categories()
  get_training_example_count()
  is_valid_category(category)
  get_correct_category(expense_text, predicted_category)
  ```
  
  Function behavior:
  
  `predict_category(expense_text)`:
  
  * receives one expense description
  * returns the predicted category
  
  `add_training_example(expense_text, correct_category)`:
  
  * appends the new example only to the in-memory lists
  * does not update the CSV file
  * retrains the model immediately
  
  `get_known_categories()`:
  
  * returns the currently known unique categories
  * includes categories learned during the current session
  * keeps the order simple and beginner-friendly
  
  `get_training_example_count()`:
  
  * returns the current number of in-memory training examples
  * keeps it simple enough for a beginner to understand
  * this function is available for extension, but `main.py` does not need to use it for the challenge
  
  `is_valid_category(category)` should:
  
  * receive one category text
  * return `True` if the category already exists in `get_known_categories()`
  * return `False` if the category is empty or new
  
  Important:
  
  * `is_valid_category()` is only a helper for checking whether a category is already known.
  * Do not use it to reject new non-empty categories.
  * New categories must be allowed because the learner may teach the AI a new category.
  
  `get_correct_category(expense_text, predicted_category)` should:
  
  * ask the learner:
  
  ```text
  Correct? (Y/N) >
  ```
  
  * if the learner types `Y`, return `predicted_category`
  * if the learner types `N`:
  
    * display known categories on one compact line, for example:
  
  ```text
  Known categories > Meals, Travel, Office Supplies, Software
  ```
  
  * ask:
  
  ```text
  Category >
  ```
  
  * accept any non-empty category
  * return the learner's category
  * keep asking until the learner gives a valid `Y` or `N`
  * if the learner enters an empty category after `N`, ask for the category again
  * keep the interaction compact
  
  Use a beginner-readable implementation. Avoid classes unless absolutely necessary.
  
  ---
  
  ### `challenge.py`
  
  This file contains a tiny beginner challenge function.
  
  Expose this function:
  
  ```python
  calculate_stats(corrected_answers)
  ```
  
  `calculate_stats(corrected_answers)` must:
  
  * be called from `main.py` after each learner feedback
  * receive `corrected_answers` from `main.py`
  * be valid Python code
  * not break the application
  * not require changes before the project can run
  * contain one clearly marked beginner challenge
  * use English comments only
  
  The function should calculate a simple percentage variable:
  
  ```python
  total_items = get_training_example_count() + corrected_answers
  ai_boost_percent = (corrected_answers / total_items) * 100
  ```
  
  It must safely handle division by zero, even though normally the function is called only after at least one answer.
  
  Meaning of `ai_boost_percent`:
  
  * it shows the percentage of learner interactions where the learner corrected the AI
  * it is a simple “AI boost from your corrections” number
  * it must not be described as real model accuracy
  * it must not claim that the model became X% more accurate
  
  Then include one commented-out learner challenge line.
  
  The challenge should ask the learner to uncomment and fix a line like this:
  
  ```python
  # print(f"AI boost from your corrections > {#enter variable here#:.0f}%")
  ```
  
  Rules for `challenge.py`:
  
  * The project must run immediately even if the learner does not touch this file.
  * The unfinished line must be commented out.
  * Only commented-out lines may contain placeholders like `#enter variable here#`.
  * Do not put broken TODO code in active code.
  * Keep the challenge very simple.
  * The learner should only need to fix one beginner-level line.
  * Do not calculate real model accuracy.
  * Do not claim that accuracy improved.
  * If you mention improvement, call it only a simple correction-based training boost.
  
  Good challenge style:
  
  ```python
  # Calculates a simple correction-based boost percentage.
  def calculate_stats(good_answers, corrected_answers):
      total_items = get_training_example_count() + corrected_answers
  
      if total_expense_items == 0:
          ai_boost_percent = 0
      else:
          ai_boost_percent = (corrected_answers / total_items) * 100
  
      # Mini challenge:
      # Uncomment the next line.
      # Replace #enter variable here# with the variable that stores the boost percent.
      # print(f"AI boost from your corrections > {#enter variable here#:.0f}%")
  ```
  
  Do not make `challenge.py` complex.
  
  Do not add charts, files, advanced math, or machine learning theory.
  
  ---
  
  ### `main.py`
  
  `main.py` must stay short and easy for a complete beginner to read in under one minute.
  
  It should only contain:
  
  * imports
  * welcome text
  * one simple counters:
    * `corrected_answers`
  * expense input collection
  * prediction display
  * `expense_ai.get_correct_category()` call
  * `expense_ai.add_training_example()` call
  * `calculate_stats()` call
  * short success messages
  
  `main.py` must import:
  
  ```python
  import expense_ai
  from challenge import calculate_stats
  ```
  
  Do not import individual functions from `expense_ai`.
  
  `main.py` must call the `expense_ai` functions like this:
  
  ```python
  predicted_category = expense_ai.predict_category(expense_text)
  
  correct_category = expense_ai.get_correct_category(
      expense_text,
      predicted_category
  )
  
  expense_ai.add_training_example(expense_text, correct_category)
  ```
  
  `main.py` must create this variable before the loop:
  
  ```python
  corrected_answers = 0
  ```
  
  Counter behavior:
  
  * If the learner corrected the AI, increase `corrected_answers` by 1.
  * Keep the counters in `main.py`, not in `challenge.py`.
  * Keep the counters simple beginner variables, not a dictionary and not a class.
  
  `main.py` must closely follow this structure:
  
  ```python
  print welcome message
  
  corrected_answers = 0
  
  while True:
      ask learner for expense using:
      Expense >
  
      if learner typed "exit":
          print Goodbye!
          stop program
  
      predicted_category = expense_ai.predict_category(expense_text)
  
      print:
      AI category > predicted_category
  
      correct_category = expense_ai.get_correct_category(
          expense_text,
          predicted_category
      )
  
      if correct_category is the same as predicted_category:
  
          print:
          Great! The AI was correct.
  
      otherwise:
          call expense_ai.add_training_example(expense_text, correct_category)
  
          increase corrected_answers by 1
  
          call calculate_stats(good_answers, corrected_answers)
  
          print:
          Thanks! The AI learned a new example.
  
      return to Expense >
  ```
  
  When the program starts, print exactly this compact welcome message:
  
  ```text
  Mini Expense AI
  Try: coffee, taxi, office paper
  Type 'exit' to quit.
  ```
  
  The examples above are hardcoded hints only.
  
  Do not:
  
  * process those hints automatically
  * read them from a file
  * print training data
  * print stored examples
  * print the contents of `training_expenses.csv`
  
  ---
  
  ## `training_expenses.csv`
  
  Create a small starter dataset.
  
  It must include a header row and examples for these categories:
  
  * Meals
  * Travel
  * Office Supplies
  * Software
  
  Use simple beginner-friendly expense descriptions.
  
  Example categories should be varied enough for the model to make useful predictions for inputs like:
  
  * coffee
  * taxi
  * office paper
  * software license
  
  ---
  
  ## Console style rules
  
  Keep the console compact.
  
  Good style:
  
  ```text
  Expense > coffee
  AI category > Meals
  Correct? (Y/N) > Y
  Great! The AI was correct.
  ```
  
  ```text
  Expense > office chair
  AI category > Office Supplies
  Correct? (Y/N) > N
  Known categories > Meals, Travel, Office Supplies, Software
  Category > Furniture
  Thanks! The AI learned a new example.
  ```
  
  Avoid:
  
  * excessive blank lines
  * decorative formatting
  * fake transcripts
  * demo-only scripts
  * automatically processed examples
  * long explanations in the console
  
  The challenge print line is commented out by default, so the project should remain compact until the learner completes the challenge.
  
  ---
  
  ## Code style rules
  
  Use English comments only.
  
  Keep the code beginner-friendly.
  
  Do not use advanced patterns unless necessary.
  
  Every function must have a short English comment directly above it explaining what the function does.
  
  Good style:
  
  ```python
  # Predicts the category for one expense description.
  def predict_category(expense_text):
      ...
  ```
  
  ```python
  # Adds one corrected example to memory and retrains the model.
  def add_training_example(expense_text, correct_category):
      ...
  ```
  
  Avoid long comments.
  
  Comments should explain the purpose of the function, not every single line.
  
  All CSV loading, model setup, retraining, scikit-learn code, Y/N feedback, and correction logic must stay inside `expense_ai.py`.
  
  All beginner challenge code must stay inside `challenge.py`.
  
  The final project must run immediately in OneCompiler, assuming `scikit-learn` is available.
concepts:
  - AI learns from examples
  - training examples
  - labels
  - prediction
  - text file input
  - CSV training data
  - editable input file
  - import
  - function call
  - input data
  - output data
  - Python instructions
  - rerun-based feedback loop
avoid: |
  Do not create static demonstration code that assigns values to variables and prints them. Avoid Pipeline, pandas, matplotlib, classes, dictionaries, train/test split, model evaluation, accuracy metrics, mathematical explanations, machine learning theory, advanced Python syntax, list comprehensions, error handling, and long code examples.
  
  Do not explain CountVectorizer or MultinomialNB internals.
---

# Play with an Expense Sorter

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Run an interactive mini AI expense classifier where the learner types expenses, checks the AI prediction, and corrects the AI when it is wrong.

## Content direction

This lesson must produce an interactive AI tool, not a static explanation of variables.
Start with a working AI tool, not theory.

In this lesson, the learner interacts directly with a tiny AI expense classifier. They type an expense description, the AI predicts a category, and the learner can tell the AI whether the prediction was correct.

If the prediction is wrong, the learner provides the correct category and the AI immediately learns from the new example. This creates a simple feedback loop where the learner becomes the teacher.

Focus on the big picture:

- Computers can learn from examples.
- AI can make predictions about things it has not seen before.
- Feedback helps the AI improve.
- Python programs can interact with users through simple questions and answers.

Treat the machine learning implementation as a black box in this lesson. The learner does not need to understand how the model works internally yet.

The goal is to create an immediate "wow" moment:

"I typed something."
"The AI made a prediction."
"I corrected it."
"The AI learned from me."

Only introduce the minimum Python concepts needed to understand what is happening:

- a Python program is a list of instructions executed from top to bottom
- input() allows the user to type information
- print() displays information
- variables temporarily store values

Do not explain CountVectorizer, MultinomialNB, model training details, mathematical concepts, feature extraction, or machine learning theory in this lesson.

## Code direction

Create a working multi-file OneCompiler Python project where the learner can teach a small expense-category AI through real console interaction.

Return exactly these files as separate code blocks:

* `main.py`
* `challenge.py`
* `expense_ai.py`
* `training_expenses.csv`

Do not include fake transcripts, example output, or explanation outside the files.

## Project goal

The learner should experience this loop:

1. They type an expense description.
2. The AI predicts a category.
3. The learner confirms or corrects the prediction.
4. If corrected, the AI learns from the new example.
5. A tiny beginner challenge file can later show a simple “AI boost from corrections” percentage.

Do not teach machine learning theory. Focus on the “wow” moment of personally teaching an AI.

Important: The “AI boost” percentage is not real model accuracy. It only shows what percentage of the learner’s answers were corrections that helped train the AI during the current session.

---

## Critical interaction rules

`main.py` must be a real interactive console app.

Use real `input()` calls.

Do not simulate user input.
Do not hardcode processed expense examples.
Do not print fake interactions.
Do not generate a scripted demo.

Forbidden examples:

```python
expense_text = "coffee"
print("Correct? (Y/N) > N")
```

The learner must type everything themselves.

---

## File responsibilities

### `expense_ai.py`

This file contains all machine learning setup, training logic, and feedback/correction input logic.

It must:

* import `csv`
* import `CountVectorizer` and `MultinomialNB`
* load examples from `training_expenses.csv`
* store loaded expense texts and categories in memory
* train the model when the application starts
* retrain the model after every new correction
* never write back to `training_expenses.csv`
* handle all Y/N feedback input
* handle all category correction input

Expose these functions:

```python
predict_category(expense_text)
add_training_example(expense_text, correct_category)
get_known_categories()
get_training_example_count()
is_valid_category(category)
get_correct_category(expense_text, predicted_category)
```

Function behavior:

`predict_category(expense_text)`:

* receives one expense description
* returns the predicted category

`add_training_example(expense_text, correct_category)`:

* appends the new example only to the in-memory lists
* does not update the CSV file
* retrains the model immediately

`get_known_categories()`:

* returns the currently known unique categories
* includes categories learned during the current session
* keeps the order simple and beginner-friendly

`get_training_example_count()`:

* returns the current number of in-memory training examples
* keeps it simple enough for a beginner to understand
* this function is available for extension, but `main.py` does not need to use it for the challenge

`is_valid_category(category)` should:

* receive one category text
* return `True` if the category already exists in `get_known_categories()`
* return `False` if the category is empty or new

Important:

* `is_valid_category()` is only a helper for checking whether a category is already known.
* Do not use it to reject new non-empty categories.
* New categories must be allowed because the learner may teach the AI a new category.

`get_correct_category(expense_text, predicted_category)` should:

* ask the learner:

```text
Correct? (Y/N) >
```

* if the learner types `Y`, return `predicted_category`
* if the learner types `N`:

  * display known categories on one compact line, for example:

```text
Known categories > Meals, Travel, Office Supplies, Software
```

* ask:

```text
Category >
```

* accept any non-empty category
* return the learner's category
* keep asking until the learner gives a valid `Y` or `N`
* if the learner enters an empty category after `N`, ask for the category again
* keep the interaction compact

Use a beginner-readable implementation. Avoid classes unless absolutely necessary.

---

### `challenge.py`

This file contains a tiny beginner challenge function.

Expose this function:

```python
calculate_stats(corrected_answers)
```

`calculate_stats(corrected_answers)` must:

* be called from `main.py` after each learner feedback
* receive `corrected_answers` from `main.py`
* be valid Python code
* not break the application
* not require changes before the project can run
* contain one clearly marked beginner challenge
* use English comments only

The function should calculate a simple percentage variable:

```python
total_items = get_training_example_count() + corrected_answers
ai_boost_percent = (corrected_answers / total_items) * 100
```

It must safely handle division by zero, even though normally the function is called only after at least one answer.

Meaning of `ai_boost_percent`:

* it shows the percentage of learner interactions where the learner corrected the AI
* it is a simple “AI boost from your corrections” number
* it must not be described as real model accuracy
* it must not claim that the model became X% more accurate

Then include one commented-out learner challenge line.

The challenge should ask the learner to uncomment and fix a line like this:

```python
# print(f"AI boost from your corrections > {#enter variable here#:.0f}%")
```

Rules for `challenge.py`:

* The project must run immediately even if the learner does not touch this file.
* The unfinished line must be commented out.
* Only commented-out lines may contain placeholders like `#enter variable here#`.
* Do not put broken TODO code in active code.
* Keep the challenge very simple.
* The learner should only need to fix one beginner-level line.
* Do not calculate real model accuracy.
* Do not claim that accuracy improved.
* If you mention improvement, call it only a simple correction-based training boost.

Good challenge style:

```python
# Calculates a simple correction-based boost percentage.
def calculate_stats(good_answers, corrected_answers):
    total_items = get_training_example_count() + corrected_answers

    if total_expense_items == 0:
        ai_boost_percent = 0
    else:
        ai_boost_percent = (corrected_answers / total_items) * 100

    # Mini challenge:
    # Uncomment the next line.
    # Replace #enter variable here# with the variable that stores the boost percent.
    # print(f"AI boost from your corrections > {#enter variable here#:.0f}%")
```

Do not make `challenge.py` complex.

Do not add charts, files, advanced math, or machine learning theory.

---

### `main.py`

`main.py` must stay short and easy for a complete beginner to read in under one minute.

It should only contain:

* imports
* welcome text
* one simple counters:
  * `corrected_answers`
* expense input collection
* prediction display
* `expense_ai.get_correct_category()` call
* `expense_ai.add_training_example()` call
* `calculate_stats()` call
* short success messages

`main.py` must import:

```python
import expense_ai
from challenge import calculate_stats
```

Do not import individual functions from `expense_ai`.

`main.py` must call the `expense_ai` functions like this:

```python
predicted_category = expense_ai.predict_category(expense_text)

correct_category = expense_ai.get_correct_category(
    expense_text,
    predicted_category
)

expense_ai.add_training_example(expense_text, correct_category)
```

`main.py` must create this variable before the loop:

```python
corrected_answers = 0
```

Counter behavior:

* If the learner corrected the AI, increase `corrected_answers` by 1.
* Keep the counters in `main.py`, not in `challenge.py`.
* Keep the counters simple beginner variables, not a dictionary and not a class.

`main.py` must closely follow this structure:

```python
print welcome message

corrected_answers = 0

while True:
    ask learner for expense using:
    Expense >

    if learner typed "exit":
        print Goodbye!
        stop program

    predicted_category = expense_ai.predict_category(expense_text)

    print:
    AI category > predicted_category

    correct_category = expense_ai.get_correct_category(
        expense_text,
        predicted_category
    )

    if correct_category is the same as predicted_category:

        print:
        Great! The AI was correct.

    otherwise:
        call expense_ai.add_training_example(expense_text, correct_category)

        increase corrected_answers by 1

        call calculate_stats(good_answers, corrected_answers)

        print:
        Thanks! The AI learned a new example.

    return to Expense >
```

When the program starts, print exactly this compact welcome message:

```text
Mini Expense AI
Try: coffee, taxi, office paper
Type 'exit' to quit.
```

The examples above are hardcoded hints only.

Do not:

* process those hints automatically
* read them from a file
* print training data
* print stored examples
* print the contents of `training_expenses.csv`

---

## `training_expenses.csv`

Create a small starter dataset.

It must include a header row and examples for these categories:

* Meals
* Travel
* Office Supplies
* Software

Use simple beginner-friendly expense descriptions.

Example categories should be varied enough for the model to make useful predictions for inputs like:

* coffee
* taxi
* office paper
* software license

---

## Console style rules

Keep the console compact.

Good style:

```text
Expense > coffee
AI category > Meals
Correct? (Y/N) > Y
Great! The AI was correct.
```

```text
Expense > office chair
AI category > Office Supplies
Correct? (Y/N) > N
Known categories > Meals, Travel, Office Supplies, Software
Category > Furniture
Thanks! The AI learned a new example.
```

Avoid:

* excessive blank lines
* decorative formatting
* fake transcripts
* demo-only scripts
* automatically processed examples
* long explanations in the console

The challenge print line is commented out by default, so the project should remain compact until the learner completes the challenge.

---

## Code style rules

Use English comments only.

Keep the code beginner-friendly.

Do not use advanced patterns unless necessary.

Every function must have a short English comment directly above it explaining what the function does.

Good style:

```python
# Predicts the category for one expense description.
def predict_category(expense_text):
    ...
```

```python
# Adds one corrected example to memory and retrains the model.
def add_training_example(expense_text, correct_category):
    ...
```

Avoid long comments.

Comments should explain the purpose of the function, not every single line.

All CSV loading, model setup, retraining, scikit-learn code, Y/N feedback, and correction logic must stay inside `expense_ai.py`.

All beginner challenge code must stay inside `challenge.py`.

The final project must run immediately in OneCompiler, assuming `scikit-learn` is available.

