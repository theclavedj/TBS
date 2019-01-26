# MyReads Project

As part of the Front End Web Developer scholarship granted by Google and Udacity, I've been provided with a static CSS and HTML markup, but without any of the React code that is needed to make the app work.

The goal of the project is to recreate an app which looks like a Bookshelf, which can categorize books in three different shelves, Reading now, already read this and will like to read. Also, the project requirement was to implement an API request to a backend server, so each time you try to add a new book to a shelf, you will have the option to add it to any of the available shelves.

The app is divided in three components, app, main page (MyReads) and Search, each one of them work together to make the app works.

All the React code that was implemented was learned through the classes provided by Udacity, in which we learned about it, how it works, how to manage state, routing, components and most of the important information about React.

To run my app right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. For details, check out [CONTRIBUTING.md](CONTRIBUTING.md), or check https://github.com/udacity/reactnd-project-myreads-starter
