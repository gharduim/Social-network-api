# Social Network Api

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

## Description

A social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Demo](#demo)
* [Questions](#questions)

## Installation

To install dependencies, run the following:

```
npm install
```

## Usage

After installing the dependencies, run the application with

```
npm run seed
```

```
npm run dev
```

## Demo
The following animations show examples of the application's API routes being tested in Insomnia. [View Demo](https://drive.google.com/file/d/1yh7yuMzL1Rr6hbOTqTFKjiA5UqnQs3XY/view?usp=sharing/ "Video Demo")

![Mini video.](./demo/Social-network-api.gif)




## Questions

Questions about this repository? Please contact me at [gharduim@gmail.com](mailto:gharduim@gmail.com). View more of my work in GitHub at [Gustavo Harduim](https://github.com/gharduim) 