# eat-da-burger

This application is a very simple create and eat a burger application. The user can enter a buger name which will add it to the list of available burgers which they can devour by clicking the "Devour it!" button on the list.

# User Interaction

1. User enters a burger name into the input in the application.
2. Application validates the burger name and adds it to the database and page if valid.
3. User can click on the "Devour it!" button on the list below to devour the new created burger.
4. Application will update the burger to be devoured and display as such on the page.

# Running Locally

To run this application locally you need a .env file like this in your config folder:
```
    DBHOST=<hostname>
    DBPORT=<port>
    DBUSER=<username>
    DBPASS=<password>
    DBDATABASE=<databasename>
```

Set your NODE_ENV to 'development' so it will load the file.
