# Calling Routes

## Base URL
```
https://plant-app-dval.herokuapp.com/
```
This is the current live url for the database.

---

## Plants
This route is primarily static. Specific info in here is used to support the user entered data for myPlants.

### SEED
```
/plants/seed
```
Resets the database. This may break some of the entries in MyPlants, so do not use this route unless absolutely necessary.

Behind the scenes, this calls another API and reformats the data to work with our specific app.

### INDEX
```
/plants/
```
Returns JSON with all plants in database.

### SHOW
```
/plants/<:id>
```
Replace <:id> with an _id value from the database to select an individual plant and return its details. Call the index route to see the available ids.

### CREATE
```
/plants/
```
Create a new plant for use in the database. This will never be used by the user(refer to MyPlant), but can be done by developers if needed.

### UPDATE
```
/plants/<:id>
```
Replace <:id> with an _id value from the database to select an individual plant and update it. Call the index route to see the available ids.

### DESTROY
```
/plants/<:id>
```
Replace <:id> with an _id value from the database to delete an individual plant from the database. Call the index route to see the available ids. This should never need to be done, but can be done if necessary. 

---

## MyPlants
note: using these routes requires user authentication. Test these routes via insomnia or postman with the proper headers. 

### INDEX
```
/myplants/
```
Returns JSON with all of the user's plants in the database.

### WATERING DUE
```
/myplants/wateringdue/:date
```
Returns an array with all plants that are due to be water on the date passed as a param. The date format must follow `aug-23-2021` style formatting.

Behind the scenes this works by adding the `waterFrequency` number in each myplant object to the date passed as a param.

### SHOW
```
/myplants/<:id>
```
Replace <:id> with an _id value from the database to select an individual plant and return its details. Call the index route to see the available ids.

### CREATE
```
/myplants/
```
Allows the user to create a new plant. The body of this request should include all of the user details for the new plant as well as the _id of a plant from `/plants/` that matches the type of plant being added. 

*this will be streamlined down the road to allow the user to search by name instead of by direct _id*

### UPDATE
```
/myplants/<:id>
```
Replace <:id> with an _id value from the database to select an individual plant and update it. Call the index route to see the available ids.

### DESTROY
```
/myplants/<:id>
```
Replace <:id> with an _id value from the database to delete an individual plant from the database. Call the index route to see the available ids.

---

## User
For now, these routes are used simply for the signup and login process.

### SIGNUP
```
/user/signup/
```
Creates a new user in the database. The body should contain `username` and `password` key values. Passwords are always encrypted and hashed.

### LOGIN
```
/user/login/
```
Once a user has signed up, they should be able to login through this route with their credentials. The body should contain `username` and `password` key values. Passwords are always encrypted and hashed.