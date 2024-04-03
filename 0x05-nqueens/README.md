# N Queens Puzzle Solver
Introduction

The N queens puzzle is a classic challenge in chess. It involves placing N non-attacking queens on an N×N chessboard. A queen can attack in any direction horizontally, vertically, or diagonally. The goal is to find a placement of queens on the board such that no two queens can attack each other.
Task

Write a program in Python that solves the N queens problem. The program should take an integer N as a command-line argument and print every possible solution to the problem. Each solution should be represented as a list of coordinates, where each element of the list represents the row and column of a queen on the board.
Requirements

    The program should be executed as follows: nqueens N
    If the user provides the wrong number of arguments, print "Usage: nqueens N" and exit with status 1.
    N must be an integer greater or equal to 4. If N is not an integer, print "N must be a number" and exit with status 1. If N is smaller than 4, print "N must be at least 4" and exit with status 1.
    The program should use backtracking to find all possible solutions.
    The solutions should be printed to the console, with each solution represented as a list of coordinates.
    The first line of all files should be exactly #!/usr/bin/python3.
    The code should follow the PEP 8 style guidelines.

Example

css

$ ./nqueens.py 4
[[0, 1], [1, 3], [2, 0], [3, 2]]
[[0, 2], [1, 0], [2, 3], [3, 1]]

$ ./nqueens.py 6
[[0, 1], [1, 3], [2, 5], [3, 0], [4, 2], [5, 4]]
[[0, 2], [1, 5], [2, 1], [3, 4], [4, 0], [5, 3]]
[[0, 3], [1, 0], [2, 4], [3, 1], [4, 5], [5, 2]]
[[0, 4], [1, 2], [2, 0], [3, 5], [4, 3], [5, 1]]

How to Use

Clone the repository and navigate to the 0x05-nqueens directory. Run the nqueens.py script with the desired value of N as a command-line argument.

shell

$ git clone https://github.com/username/alx-interview.git
$ cd alx-interview/0x05-nqueens
$ ./nqueens.py 8

Note

You are only allowed to import the sys module for this project.
Author

This program was written by Alexa Orrico, a Software Engineer at Holberton School.

This repository is part of the ALX curriculum and is for educational purposes only. All rights reserved.
