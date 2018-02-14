# Burger-Boi
This is a very simple featured full-stack application demonstrating CRUD functions using an ORM. You may enter or create an order, read submited orders, update an order to have an "eaten" status, and then delete those orders that have had their status changed.

## Getting Started
1. When cloning the repo be sure to do an npm install to get all the depencies.
2. Start the server by running node server.js or nodemon server.js if you have the package.

## How it Works
### Create
1. Type in an order or some text into the field at the bottom of the page and press submit.
![enter order](https://i.gyazo.com/9d911d6a162b6d70256f5436cc0321b0.png)
2. The database will then be updated with your submission.
![entered database](https://i.gyazo.com/c228d1c1c17be1e720693dffe2b27e2b.png)
### Read
1. Any user will then be able to see all submissions under the "Burgers Ready to Eat" portion of the page
![updated on page](https://i.gyazo.com/dcb47caf79a8eddedbf0a8460f39927c.png)
### Update
1. Any user will then be able to click on the "Eat This" button which will update the devoured field on the table from `false` to `true`.

![devoured on database](https://i.gyazo.com/0106cb702d354da2a7f88d8b1f653ae6.png)

2. Then that order will appear on the opposite side of the page where the other `devoured === true` orders are.
![already eaten on page](https://i.gyazo.com/c394fcabee985eeccc1ee5a2ca9898b7.png)
### Delete
1. After being updated, any user is free to remove the order from the database by clicking the "Remove Scraps" button

## Tech Used
* Node.js
* Express
* jQuery
* Handlebars.js
* Sequelize ORM
* MySQL

## Todo and bugs


