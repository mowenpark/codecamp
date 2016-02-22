# Campdoor

[Heroku link][heroku]

[heroku]: https://quiet-inlet-69267.herokuapp.com/

## Minimum Viable Product

Campdoor is a web application inspired by Glassdoor built using Ruby on Rails
and React.js. Bootcamp allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, read, edit, and delete reviews
- [ ] Search for web dev Bootcamps
- [ ] Tag reviews with multiple tags
- [ ] Like / Favorite reviews and Bootcamps

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/Wireframes.pdf
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend (0.5 days)

**Objective:** Functioning rails project with Authentication

- [ ] create rails app
- [ ] create `User` model
- [ ] auth
- [ ] user signup/signin pages
- [ ] blank landing page

### Phase 2: Backend cont'd. (0.5 days)

**Objective:** reviews can be created and accessed through a Bootcamp.

- [ ] create Bootcamp model
- [ ] create reviews model
- [ ] seed database
- [ ] add CRUD functionality for the reviews

### Phase 3: Routers and Flux cycle (1.5 days)

**Objective:** Integrate database with the flux cycle.

- [ ] setup the flux loop
- [ ] jbuilder api views
- [ ] build api util
- [ ] test util functions

### Phase 4: React (0.5 days)

**Objective:** Make a functioning frontend.

- [ ] build out components
- [ ] create react Router

### Phase 5: Styling (1 day)

**Objective:** Site should look good.

- [ ] position elements on page
- [ ] review bootcamp docs
- [ ] develop basic styling guide

Phase 3 adds organization to the Notes. Notes belong to a Notebook,
which has its own `Index` view.

### Phase 6: Expand app functionality (1.5 days)

**Objective:** Integrate admin rights.

- [ ] allow admins to change bootcamp details
- [ ] add rating system

### Phase 7: Tags (0.5 days)

**objective:** Add tagging and search.

- [ ] create Tag model
- [ ] searching based on tags

### Phase 8: Refactoring (1 day)

**objective:**

- [ ] Get feedback on my app
- [ ] Refactor necessary changes

### Bonus Features (TBD)
- [ ] Search through notes for blocks of text
- [ ] Pagination
- [ ] Webscraping for data?

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
