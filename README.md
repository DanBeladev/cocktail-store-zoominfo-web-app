# Cocktails Store - Backend

Dan Beladev - danbeladev@gmail.com - *Home Assignment - ZoomInfo*

This app is written in Angular 9 & NodeJS and it simulates a liquor store which you can purchase liquor through your PayPal account using the PayPal sandbox API.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Run the backend from the `cocktail-store-zoominfo-backend` repository:

```
npm install
npm start
```

The server should now run locally on port 3000.



Now, go to the web-app repository  `cocktail-store-zoominfo-web-app`:

```
npm install
npm start
```

The web application should now run locally on port 4200.

You can access it from the browser via: `http://localhost:4200`



### API Endpoints

I created some endpoints some are used for the web-app usage and some for better debugging



GET - getting purchases object list.

POST - create a new purchase, the purchase object is sent into the request body.

Delete - delete purchases object list. (only for debbuging)

```
/purchases
```

GET - getting products object list.

```
/products
```

### PayPal Credentials

To use a dummy user to experience using PayPal sandbox API I created a dummy account and its details are:

Email: sb-m47i0431250429@personal.example.com

Password: ] F-P1M / b

Each product has a purchase button that takes you to the Paypal Transaction screen and gives you details about the order placed.
This information after purchase is transferred to the server and stored there in memory.
After successfully purchasing a cocktail, you can go to the orders screen and view the purchased order and the other orders purchased so far.
If the purchase is successful, a snackbar will show and notify about it and the purchase dialog window will close.
The same behave for the purchase failed.



## Extras

- I wanted to fetch the products list from 3rd party API and I found this free one:
Free Cocktails API - 'https://www.thecocktaildb.com' and I made a wrapper call that fetch it X time and aggregates the results. The server saves the data once on its uploading phase and since then every request for data will be answered by it without contacting a 3rd party API.
- I uploaded the backend to heroku in order to publish it and access globally:
heroku-coctail-store-backend - 'https://cocktail-store-backend.herokuapp.com'.
- I also tried to upload the client-side code and build it on heroku but faced some problems (thought about uploading the build artifacts to AWS S3 but could not get to this)
- I added another feature - *My Orders* page showing all orders placed on the cocktails store website.
You can reach this screen by clicking on the *"My Orders"* button on the navigation bar

