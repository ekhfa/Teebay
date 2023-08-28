# Technical Documentation

## Part 1

### Backend

- Created backend with node, express, cors, prisma, postgres
- Created a User Model to save registration information
- Created two routes:
  - registration: Saving registration data with password in a string
  - login: matching provided email, checking provided password with stored password

### Frontend

- Created frontend with react, axios, reactquery, mantineUI
- Created Sign-up page, calling backend route with request body
- Created log-in page, calling backend route with request body. Saving user info from response in local storage to access logged in user information from any other pages

## Part 2

### Backend

- Created a Product Model with all the required fields. Making a one-to-many relation between User and Product model, as one user can create multiple products
- Created required CRUD functions (create, read, update, delete) for a product

### Frontend

- Created multi-page adding product form with caching
- Created pages to show products
  - All product page
  - My product page
  - Single product page
  - Edit Product Page

## Part 3

### Backend

- Created a Rentals Model with required fields.
  - Making a one-to-many relation with Product and Rentals model as a product can be rented multiple times.
  - Making a one-to-many relation with User and Rentals model as a user can have multiple rental records
- Created relevant `GET` routes for getting products of a User.
- `GET` routes for getting products of a User with `status` available/sold/on-rent
- Created routes for Buy/Rent functionalities
- For solving rental period conflict, solution approach is:
  - Get all the rentals for a product
  - Created a boolean function to check if the current rental period times (incoming request) have any conflicts with the existing rentals time periods. If theres a conflict, sending a 403 forbidden status in the response, otherwise creating the rental records
  - Same solution approch was applied for the case of buying a rented product

### Frontend

- Created pages to show user product history
  - Bought product page
  - Borrowed product page
  - Sold Product page
  - Lent Product Page
- Implemented Date picker for choosing dates of rental periods
- Implemented logic where a user can't buy or rent their own products
- Handle error cases where a user tries to rent or buy a product which is already been rented for that same time period
- Showed relevant alert messages for better user experience
