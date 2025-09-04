# Z-Prefix-CRUD-APP

Installation Instructions:
  After Git fork/cloning;
  cd into the api directory and run $npm install in the terminal
  cd separately into the ui directory and run $npm install in the terminal
  cd into the Z-Prefix-CRUD-APP project directory and run $docker compose build
    make sure docker is running in the desktop before the above step
  run $docker compose up
  now both localhost:8080 and localhost:3000 are available
  using the Google Chrome Browser navigate to http://localhost:3000/ and use the site from there

How to use the site:
  First going through each of the user stories:
  Story 1: As an inventory manager I want to be able to create an account so that I can track my inventory.
    from the home page click the button labeled 'Create Account'
    then input your desired username password first name and last name then hit the submit button
      if not every field is entered you wil get an alert
    you will then be redirected to the login page
  Story 2: As an inventory manager I want to be able to log into my account so that I can see my inventory of items. After logging in, the inventory manager should be redirected to their inventory of items.
    from the login page
    input your username and password and hit submit
    you will be redirected to your inventory page
      if not a valid username an alert will pop up
      if not a valid password match a message at the bottom of the screen will appear
  Story 3: As an inventory manager I want to be able to create a new item so that I can share my item details with the world.After the item is created, the inventory manager should be redirected to their inventory of items. An item displays name, description, and quantity.
    from the inventory page you will see your inventory is empty
    click on the 'Add Item' button to navigate to the add item page
    input the item name, description, and quantity
      if any are invalid the submit button will produce an alert. note quantity should be a number as quantities usually are
    you are redirected to your account inventory listing the item name description (limited to 100 chars) and quantity
    navigate back to 'Add item' to add more
  Story 4:As an inventory manager I want to be able to see a my entire inventory of items.The inventory of items should display the first 100 characters of each item description, with “...” at the end if the description is longer than 100 characters.
    Navigate to the account inventory page via the buttons and as long as the account has items in its inventory they will appear there with all details and the description limited to 100 chars
  Story 5: As an inventory manager I want to be able to see any individual item I have added. The full item information should be displayed.
    to find an individual item and its details navigate to the 'Search Account Inventory' page via the button
    then input the item name in the search bar and all items with that name in your account inventory will appear
  Story 6:As an inventory manager I want to be able to edit an item so that I can fix any mistakes I made creating it.When the user toggles edit mode, the page remains the same and the fields become editable.
    in the 'Search Account Inventory' page search for a valid item from your account inventory
    then select the button labeled 'Edit Toggle:' and when it is true then all of the items listed from the search will have their fields be text editable
    when edits are made make sure to hit the 'Submit edits' button associated in that item's list of fields
    An alert saying if the edit was successful will appear
      if not then it is most likely since one of the fields was not populated correctly, like quantity not having a number
  Story 7: As an inventory manager I want to be able to delete an item so that I can remove any unwanted content.When the user deletes the item they should be redirected to their inventory of items.
    still in the 'Search Account Inventory' page search for a valid item in your account inventory
    select the delete item button of the item you wish to delete.
    you will be redirected to the 'Account Inventory' page automatically
  Story 8-10:As a visitor, who is not logged in, I want to be able to view all items created by every inventory manager so that I can browse every item.Unauthenticated users should be able to view all items, and any single item.The items should only display the first 100 characters of its description with “...” at the end if it is longer than 100 characters.
    hit the 'logout' button next to the user name at the top of any page, you are now viewing the page as a visitor
    any pages as a visitor are also accessible as a user so feel free to try it as both
    use the 'All Items' button to view a list of all items in the database from any user
    use the 'Search All Inventories' button to go to the page to search the full list of items for an item by name
    As a visitor try accessing any account required page (update account, search account inventory, account inventory, account) and you will be presented with a reminder to login before using those pages as no information will render
  Non Story notes:
    Home page is where these notes will also be kept
    Update account page will display fields to update your account if logged in.
      if invalid ones an alert will pop up
      if successful you will be logged out since the username may have changed
    Account page will show account details and a button to delete your account (delete account will also log you out and give an alert )

Notes about the API server:
  routes for get patch post and delete are made for each of the two tables. See index.js for a full list of each route syntax



