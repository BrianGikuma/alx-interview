#Star Wars API - Movie Characters Script

This repository contains a script developed by Alexa Orrico, a Software Engineer at Holberton School, as part of the curriculum. The script retrieves and displays characters from a specified Star Wars movie using the Star Wars API.
# # Table of Contents

    Project Details
    Requirements
    Getting Started
    Usage
    Directory Structure
    License

# # Project Details

    Specialization: Algorithm
    Weight: 1
    Start Date: August 7, 2023, 6:00 AM
    End Date: August 11, 2023, 6:00 AM
    Checker Release Date: August 8, 2023, 6:00 AM
    Auto Review: An auto review will be launched at the deadline

# # Requirements
# # General

    Allowed editors: vi, vim, emacs
    Files are interpreted on Ubuntu 20.04 LTS using node (version 10.14.x)
    All files should end with a new line
    The first line of all files should be #!/usr/bin/node
    A README.md file at the root of the project folder is mandatory
    Code should be semistandard compliant (Rules of Standard + semicolons)
    All files must be executable
    File length will be tested using wc
    Use let and const, avoid using var

# # Setup

    Install Node 10:

    sh

$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
$ sudo apt-get install -y nodejs

# # Install semistandard:

sh

$ sudo npm install semistandard --global

Install request module and set NODE_PATH:

sh

    $ sudo npm install request --global
    $ export NODE_PATH=/usr/lib/node_modules

# # Getting Started

    Clone this repository:

    sh

$ git clone https://github.com/username/alx-interview.git

Navigate to the project directory:

sh

    $ cd alx-interview/0x06-starwars_api

# # Usage

Run the script with the Movie ID as an argument to retrieve and display characters from the specified Star Wars movie:

sh

$ ./0-starwars_characters.js <Movie_ID>

For example, to retrieve characters from "Return of the Jedi" (Movie ID: 3):

sh

$ ./0-starwars_characters.js 3

# # Directory Structure

plaintext

alx-interview/
└── 0x06-starwars_api/
    ├── 0-starwars_characters.js
    └── README.md
