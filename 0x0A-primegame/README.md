# ALX Interview - Prime Game

## Table of Contents
- [Description](#description)
- [Project Details](#project-details)
- [Requirements](#requirements)
- [Tasks](#tasks)
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)

## Description

This repository is part of the ALX Interview Curriculum and contains the implementation of the Prime Game algorithm. In this game, players choose prime numbers and remove their multiples from a set of consecutive integers. The player who cannot make a move loses the game. This README provides an overview of the project and its requirements.

## Project Details

- **Curriculum**: Short Specializations
- **Average Completion**: 44.63%
- **Captain's Log Due Date**: 2023-09-10 (in 2 days)
- **Platform Transition**: We are moving to Discord. [Click here for more information](#)

### Project Timeline

- Project Start: Sep 4, 2023 6:00 AM
- Project Deadline: Sep 8, 2023 6:00 AM
- Checker Release: Sep 5, 2023 6:00 AM
- Auto Review: An auto review will be launched at the deadline

## Requirements

### General

- **Allowed Editors**: vi, vim, emacs
- **Interpreter/Compiler**: Ubuntu 14.04 LTS using Python 3.4.3
- **File Endings**: All your files should end with a new line
- **Shebang Line**: The first line of all your files should be exactly `#!/usr/bin/python3`
- **README.md**: A README.md file at the root of the project folder is mandatory
- **Coding Style**: Your code should use the PEP 8 style (version 1.7.x)
- **Executable Files**: All your files must be executable

## Tasks

### Task 0: Prime Game

- **Task Description**: Maria and Ben are playing a game where they remove prime numbers and their multiples from a set of consecutive integers. Determine the winner of each game.
- **Prototype**: `def isWinner(x, nums)`
- **Return**: Name of the player that won the most rounds. If the winner cannot be determined, return `None`.
- **Constraints**: `n` and `x` will not be larger than 10000. You cannot import any packages in this task.
- **Example**:

    ```python
    x = 3
    nums = [4, 5, 1]

    First round: 4
    Maria picks 2 and removes 2, 4, leaving 1, 3
    Ben picks 3 and removes 3, leaving 1
    Ben wins because there are no prime numbers left for Maria to choose

    Second round: 5
    Maria picks 2 and removes 2, 4, leaving 1, 3, 5
    Ben picks 3 and removes 3, leaving 1, 5
    Maria picks 5 and removes 5, leaving 1
    Maria wins because there are no prime numbers left for Ben to choose

    Third round: 1
    Ben wins because there are no prime numbers for Maria to choose

    Result: Ben has the most wins
    ```

### Usage

You can use the provided script to test the `isWinner` function:

```python
./main_0.py
