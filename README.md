#Codecamp

Codecamp is a web application inspired by Glassdoor built using Ruby on Rails
and React.js. Allows users to:

- [x] Create an account
- [x] Log in / Log out
- [x] Search for web development bootcamps by Company, Language, or Program
- [x] Create, edit, and delete reviews once logged in
- [x] Favorite bootcamp programs

View it live at [codecamp.ninja][codecamp].

[codecamp]: https://www.codecamp.ninja/


## Overall Structure

###Back end

Code Camp is built on the web framework, Ruby on Rails, and uses a postgreSQL database. All data requests are completed using AJAX and are fulfilled through a JSON API. Associations are in place to prefetch data in order to minimize SQL queries to the database.

###Front end

The front end is built in React.js and JavaScript, utilizing React's Flux architecture. React's virtual DOM allows for quick re-rendering of individual elements without requiring new pages to be sent from the server.

###Libraries

* [React.js][react]
* [Flux][flux]
* [BCrypt][bcrypt]
* [Faker][faker]

[react]: https://facebook.github.io/react/index.html
[flux]: https://facebook.github.io/react/docs/flux-overview.html
[bcrypt]: https://github.com/codahale/bcrypt-ruby
[faker]: https://github.com/stympy/faker

## Primary Components

###User Authorization

User authentication is handled in Rails using BCrypt's password hashing. User passwords are not saved to the database, only password hashes. When users log in, their password is rehashed and checked against the original encrypted password hash to verify credentials.

###Search

Codecamp utilizes keyword search to find programs and companies based on like matching. Using the autofill function, users may select locations to narrow their search quickly and easily.

![alt tag](/app/assets/images/cc_search.png)
