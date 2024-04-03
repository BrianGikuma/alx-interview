# 0x09. Island Perimeter

This repository contains my solution for the "0x09. Island Perimeter" project as part of my learning journey in algorithmic problem-solving.

## About

- **By:** Alexa Orrico, Software Engineer at Holberton School
- **Weight:** 1
- **Project Started:** Aug 28, 2023 6:00 AM
- **Project Deadline:** Sep 1, 2023 6:00 AM
- **Auto Review:** An auto review will be launched at the deadline
- **Checker Release:** Aug 29, 2023 6:00 AM

## Overview

In this project, I will be implementing a Python function to calculate the perimeter of an island described in a given grid. The grid represents water and land cells, and I need to calculate the perimeter of the island based on the specified conditions.

## Learning Objectives

By the completion of this project, I aim to achieve the following goals:

- Implement a Python function to calculate the perimeter of an island in a grid.
- Understand and apply the given conditions to calculate the perimeter.

## Requirements

- Allowed editors: vi, vim, emacs
- All files are interpreted/compiled on Ubuntu 14.04 LTS using python3 (version 3.4.3)
- All files end with a new line
- The first line of all files is `#!/usr/bin/python3`
- A `README.md` file is mandatory at the root of the project folder
- Code should follow the PEP 8 style (version 1.7)
- Prohibited to import any module
- All modules and functions must be documented
- All files must be executable

## Task

### Island Perimeter

Create a function `def island_perimeter(grid):` that returns the perimeter of the island described in the given grid:

- `grid` is a list of list of integers:
    - 0 represents water
    - 1 represents land
    - Each cell is square, with a side length of 1
    - Cells are connected horizontally/vertically (not diagonally).
    - `grid` is rectangular, with its width and height not exceeding 100
- The grid is completely surrounded by water
- There is only one island (or nothing).
- The island doesn’t have “lakes” (water inside that isn’t connected to the water surrounding the island).

Sample usage:
```python
grid = [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0]
]
print(island_perimeter(grid))  # Output: 12

