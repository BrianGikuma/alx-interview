#!/usr/bin/node

// Star Wars API Implementation

const request = require('request');

const movieId = process.argv[2];

const url = `https://swapi.dev/api/films/${movieId}/`;

request(url, async (err, response, body) => {
  if (err) {
    console.error(err);
    return;
  }

  const movie = JSON.parse(body);

  const characters = movie.characters;

  for (const character of characters) {
    console.log(character.name);
  }
});

