# Book Search Engine

[![Badge](https://img.shields.io/badge/GitHub-twashke-blueviolet?style=flat-square&logo=appveyor)](https://github.com/twashke) [![Badge](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)

## Description

## Table of Contents

- [About the Project](#about-the-project)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## About the Project

- This project used code from a working RESTful API and converted it to [graphql]() using an [Apollo Server]().
- By reconfigering the server folder, the Apollo server was added and the **routes** and **controllers** provided were removed (since they are handled through **graphql** and **Apollo**).
- In the **server** folder, a [schemas]() folder was added to handle [graphql]() queries and mutations.
- The **server** and **package.json** files were also updated to add the [Apollo Server]() and dependicies.
- In the **client** folder, [quieries.js]() and [mutations.js]() files were added to the [utils]() folder to handle all [graphql] requests.
- The **App.js** file was updated to include the **Apollo Provider** to all authorized routes.
- **Components** and **pages** were updated to include **Apollo** dependicies and query requests.
- Users can **Sign Up** or **Login** to save books to their profile.
- The user can also delete any previously saved book.
- Once logged out, the user will have to log back in to save additional books, have access to books saved, or delete saved books.
- Built with the following technologies:
  - [create-react-app](https://www.npmjs.com/package/create-react-app)
  - [bootstrap](https://www.npmjs.com/package/bootstrap)
  - [apollo-express-server]()
  - [graphql-tag]()
  - [@apollo/client]()
  - [jwt]()
  - [mongoose]()
  - [express]()
  - [if-env]()
  - [HTML](https://www.w3schools.com/html/), [CSS](https://www.w3.org/Style/CSS/Overview.en.html), and [Javascript](https://www.javascript.com/)

## Installation

- G
  npm install

## Usage

- Go to [Deployed Book Search Engine Website](https://booksearchengine0821.herokuapp.com/)
- **Search for Books** using the input field.
- **Sign Up** to **Save Books** to your profile.
- **Login** to add, view or delete books from your profile.

![Book Search Engine]()

## Contributing

- Start code provided, linked to an API.
- Code was converted to utilize [graphql]() and [Apollo]() rather than the RESTful API code provided.

## Tests

- Testing done throughtout production on local host.
- Once deployed, tested and fixed any issues.

## License

This application is covered by the [MIT License](https://opensource.org/licenses/MIT).

      Copyright 2021 Tiffany Washke

      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Questions

**Contact Tiffany Washke**

- **Email directly at** twashke@gmail.com
- **GitHub User Name:** [twashke](https://github.com/twashke)

![Developer Profile Picture](https://avatars.githubusercontent.com/u/79234530?v=4)
