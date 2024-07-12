
# Books App

## Table of Contents
- Introduction
- Features
- Instalation
- Usage


## Introduction
Welcome to the Books App repository! This project is a web application that allows users to search, browse, and manage their book collections. It's built with modern web technologies to provide a seamless and interactive user experience.
## Build with

- React
## Features

1. Search Functionality:
- The search bar allows the user to enter a search query and click a 'search' button to submit the query.
2. Responsiveness:
- Responsive webpage that displays properly on both desktop and mobile devices.
3. Styling:
- Styled using CSS that follows the BEM methodology.
4. Sorting Options:
- Dropdown menu to control how the books are sorted:
    - Alphabetically by Title
    - Alphabetically by Author Name (default)
    - Alphabetically by Genre
- Updates the sorting dynamically based on the selected option.
5. Handling No Results:
- Displays a "There are no books loaded" message if there is no books data in the files.
- Displays a "There is no result for your search" message if the search query does not match any books.
6. Highlighting Matches:
- Highlights the search query matching parts of the Author Name, Title, or Genre by displaying the matching text in bold and red.


7. Merging Data from JSON and CSV:
- Loads the list of books from both books.json and books.csv files.
- Merges the data based on a unique id field present in both files.

## Getting Started

To get started with the Books App, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/vasilevbojan/books-app.git
```
2.Navigate to the project directory:
```bash
cd books-app
```
3. Install the dependencies:
```bash
npm install
```
4. Run the application:
```bash
npm start
```
5. Open your browser and visit:
```bash
http://localhost:3000
```

    
## Authors

- [@Bojan_Vasilev](https://github.com/vasilevbojan/)


## Contact

Bojan Vasilev - vasilevbojan@gmail.com

Project link: https://books-app-xi.vercel.app/
