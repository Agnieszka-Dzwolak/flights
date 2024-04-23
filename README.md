# Flights

> A simple project displaying flights information.

## Table of contents

- [Flights](#flights)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Screenshots](#screenshots)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Code Examples](#code-examples)
  - [Features](#features)
  - [Status](#status)

## General info

> Flight schedule. The objective of the project is to practice separation of
> concern in JavaScript.

## Screenshots

![Example screenshot]()

## Technologies

- JavaScript
- HTML5
- CSS3
- VSC code
- Jest testing

## Setup

clone the repo and run npm install.

## Code Examples

```js
const loadHandler = () => {
	const organizedFlights = data.flights.sort((a, b) => {
		return (
			new Date(a.departureDate).getTime() - new Date(b.departureDate).getTime()
		);
	});
};
```

## Features

List of features ready and Todos for future development

-
-
-

To-do list:

-
-

## Status

Project is: _in progress_
