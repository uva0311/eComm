Simple E-Commerce website built with JavaScript, with shopping cart and admin panel

**this project is meant to practice node.js backend routing and user(admin) authentication, therefore the data are not stored on a formal database, instead the node server will generate a json file for each different kind of data being written**

## Screenshots

!["Screenshot of homepage"](https://github.com/uva0311/eComm/blob/master/public/images/homepage.png)
!["Screenshot of shopping cart"](https://github.com/uva0311/eComm/blob/master/public/images/cart.png)
!["Screenshot of admin panel"](https://github.com/uva0311/eComm/blob/master/public/images/admin.png)

## Get Started

Clone this repo and create your own git repo.

```
git clone git@github.com:uva0311/eComm.git
cd eComm
git remote rm origin
git remote add origin [YOUR NEW REPOSITORY]
# Manually update your package.json file
```

Install the dependencies and start the server.

```
npm install
npm run dev
open http://localhost:3000
```

## Dependencies

- cookie session
- express
- express validator
- multer
- nodemon
