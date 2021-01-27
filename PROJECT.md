Implementation Details.

Tech Stack uses.
1. React - React is widely used and application can be scaled very easily. UI components can be modularised and isolated and reused.
2. Redux Tools - State management. It's a wrapper around existing redux and I used it because it takes away additional work like creating a reducer and reducing type constant files. It is easier to maintain.
3. React Router - page routing
4. Express - serves as server and to provide endpoints to front end
5. Jest - testing framework.
6. ES6 

TypeScript could have been used, but because of lack of time (adding type and architecturing the app would take time).

Features available in the app:
1. (/) Product list page - displays all the  products received from api
2. (/product/:id) Product details page - on clicking the product in the product list page, you will end up landing on the product details page where it displays the product details.
3. Add to cart - a product can be add to the cart by clicking the add to cart button and when added to cart, it updates the count in the cart icon
4. (/cart) Cart page - on clicking the cart icon, it displays all the cart items in the cart page. You need to click the payment button to proceed to the checkout page.
5. (/checkout) Checkout page - displays items in the cart and a pay now button. 
6. (/thankyou) Thank you page - on clicking the pay now button, you will land on the thank you page.

API
1. GET /api/config - returns the config for app
2. GET /api/products - returns products list

Unit Tests
Few areas/components not covered in unit testing. It's because of time constraints.

Running the project
You need to run the server and the client.
yarn server # to run server  - http://localhost:8080
yarn start # to run client - http://localhost:3000 
yarn test # to  run tests

What can be improved?
1. Add typescript support
2. More test coverage
3. Separate client and server
4. Secure APIs via JWT tokens
5. Payment integration
6. out of stock notification via webhooks
7. Build server and client for production
8. Proper error handling for APIs and JS errors
9. Cross browser app (App is not Tested on IE browser). 
