# 0x08. Making Change Algorithm

Welcome to the **0x08. Making Change** project! This project is part of the ALX Software Engineering curriculum and focuses on solving the problem of making change using a given pile of coins with different values. The goal is to determine the fewest number of coins needed to meet a given total amount.

## Project Details

- **Author:** Carrie Ybay
- **Position:** Software Engineer at Holberton School
- **Weight:** 1
- **Start Date:** August 21, 2023 6:00 AM
- **End Date:** August 25, 2023 6:00 AM
- **Checker Release Date:** August 22, 2023 6:00 AM
- **Auto Review:** An auto review will be launched at the deadline

## Requirements

## Task

### 0. Change comes from within

Given a pile of coins of different values, you need to implement a function `makeChange(coins, total)` that determines the fewest number of coins needed to meet a given amount total.

- **Prototype:** `def makeChange(coins, total)`
- **Return:** Fewest number of coins needed to meet `total`
  - If `total` is 0 or less, return 0
  - If `total` cannot be met by any number of coins you have, return -1
- `coins` is a list of the values of the coins in your possession
- The value of a coin will always be an integer greater than 0
- You can assume you have an infinite number of each denomination of coin in the list
- Your solution’s runtime will be evaluated in this task

## Usage

1. Clone the repository: `git clone https://github.com/ALX/alx-interview.git`
2. Navigate to the project directory: `cd alx-interview/0x08-making_change`
3. Run the provided main file: `./0-main.py`

## Example

```python
makeChange = __import__('0-making_change').makeChange

print(makeChange([1, 2, 25], 37))  # Output: 7
print(makeChange([1256, 54, 48, 16, 102], 1453))  # Output: -1
