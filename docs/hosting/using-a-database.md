# Using databases in Replit
You can use databases in repls to make programs that can both manage and store data. This guide will walk you through the basic operations for interacting with data in databases on Replit. These are CRUD operations, which involve creating, reading, updating, and deleting data. We'll also show you how to access databases and handy methods for managing your data.
## Table of contents
1. [How file persistence works](#a)
2. [Choices: Replit Database vs SQLite](#b)
3. [Replit Database](#c)
    1. [Importing the database](#e)
    2. [Creating data](#f)
    3. [Reading data](#g)
    4. [Updating data](#h)
    5. [Deleting data](#i)
    6. [Summary](#j)
4. [SQLite database](#k)
    1. [Importing the database](#m)
    2. [Creating and connecting to a database](#n)
    3. [Creating tables](#o)
    4. [Inserting data](#p)
    5. [Reading data](#q)
    6. [Updating data](#r)
    7. [Deleting data](#s)
    8. [Committing changes](#t)
    9. [Closing the connection](#u)
    10. [Summary](#v)
    
## How file persistence works <a name = "a"></a>
File persistence lets us create programs that store our files and data between runs, so our data isn't lost whenever the program ends. This kind of program can update, read, and delete data that has not been created from code within the program. Data updated from within our program is still accessible after the program ends.

Let's take a look at how file persistence works with the Replit Database.

First we run our application, import the database, add data to our database, and declare some variables. 

### First run:

```python
# Import the Replit database
from replit import db

# Add a key-value pairing to the database
db[“key1”] = “value1”

# Access and print the value associated with the key just created
print(db[“key1”])

# Declare a variable that stores an integer outside of the database
my_variable = 100

# Print the variable
print(my_variable)
```

### Output:
```
value1
100
```

We can print both the data from our database and our variables, because both were created within the program.

However, if we were to run the program again without the code that adds data to our database and without the declaration of our variable, only the data from the database will print. The attempt to print the undefined variable results in an error.

### Second run:

```python
from replit import db

# Print the value from the key-value pairing created on the previous run
print(db[“key1”])

# Attempt to print from the variable which was defined in the previous run
print(my_variable)
```

### Output:

```python
value1
Traceback (most recent call last):
  File "main.py", line 3, in <module>
    print(my_variable)
NameError: name 'my_variable' is not defined
```

The data stored in the database persists between runs and doesn't need to be created again to be accessed. However, the variable's data did not persist, leading to the variable name being undefined, and we're given an error.

## Choices: Replit Database vs SQLite <a name = "b"></a>
You can use the Replit Database or SQLite in your repls. The Replit database is a user-friendly database that acts – and is structured – much like a Python dictionary, so doesn't have a steep learning curve. The SQLite database allows for the creation of multiple databases and stores data in a table format. 

## Replit Database <a name = "c"></a>
Every repl can access and interact with its own unique Replit Database. This database can be accessed from the library, and requires no configuration beyond import. Interacting with the Replit Database follows much of the same syntax and logic as creating and interacting with the key-value pairs of a Python dictionary.

### Importing the database <a name = "e"></a>
To access the Replit database we use `import db`:
```python
from replit import db
```

### Creating data <a name = "f"></a>
The Replit Database works a lot like a Python dictionary, so we can add data to our database by assigning values to keys using square bracket indexing:
```python
from replit import db

# Add a key and associated value to the database
db["key1"] = "value1"
```

Replit Database is able to handle different types of values like lists, dictionaries, integers, floats, NoneType, and strings:

```python
from replit import db

db["key1"] = "value1"
db["integer_1"] = 100
db["float_1"] = 9.99
db["my_list"] = [1,2,3]
db["my_dictionary"] = {"key_a": "value_a", "key_b": "value_b"}
db["none_key"] = None
```

Make use of 2D lists as a value to create table-like structures within your database:
```python
from replit import db

db["2D_key"] = [["id","name"],[1,"James"],[2,"Angel"]]

for column in db["2D_key"]:
    print(column)
```
#### Output:
```
ObservedList(value=["id","name"])
ObservedList(value=[1,"James"])
ObservedList(value=[2,"Angel"])
```
The `ObservedList` object you see in the output is a Replit Database object that acts like a Python list and can be indexed as such.

### Reading data <a name = "g"></a>
Read from your database by referencing the key of the value:

```python
from replit import db

# Create data in the database
db["key1"] = "value1"
db["my_list"] = [1,2,3]
db["my_dictionary"] = {"key_a": "value_a", "key_b": "value_b"}

# Access and print data from the database
print(db["key1"])
print(db["my_list"][0])
print(db["my_dictionary"]["key_a"])
```

#### Output:
```
value1
1
value_a	
```

We can use the built-in Python dictionary method `.get()` to retrieve the value at the key passed in as an argument:

```python
from replit import db

# Create data for the database
db["float_1"] = 9.99

# Access the value of the data created by its key
print(db.get("float_1"))
```

We can loop through the keys stored in the database to get access to the values of those keys:

```python
from replit import db

# Create data for the database
db["key1"] = "value1"
db["my_list"] = [1,2,3]
db["my_dictionary"] = {"key_a": "value_a", "key_b": "value_b"}

# Access the keys from the database and print the values associated for key in db
  print(db.get(key))
```

The `.keys()` method returns a list of the keys in our database:

```python
from replit import db

# Create data for the database
db["key1"] = "value1"
db["my_list"] = [1,2,3]
db["my_dictionary"] = {"key_a": "value_a", "key_b": "value_b"}

# Print all the keys from the database
print(db.keys())
```
#### Output:
```
{'key1', 'my_list', 'my_dictionary', '2D_keys'}
```

The `.prefix()` method allows us to get the values of keys with only part of that key. This allows us to return multiple values for keys that share the same prefix:

```python
from replit import db

# Create data for the database
db["key1"] = "value1"
db["my_list"] = [1,2,3]
db["my_dictionary"] = {"key_a": "value_a", "key_b": "value_b"}

# Print all the keys from the database that have a prefix of "my"
print(db.prefix("my"))
```
#### Output:
```
('my_dictionary', 'my_list')
```
### Updating data <a name = "h"></a>
We can update values that are stored in our database by assigning new values to their associated key:

```python
from replit import db

# Create data with "float_1" as key and print
db["float_1"] = 9.99
print(db[“float_1”])

# Update data at "float_1" key and print
db[“float_1”] = 3.33
print(db[“float_1”)
```
#### Output:
```
9.99
3.33
```

We can also mutate numbers that are stored in our database:

```python
from replit import db

# Create data with "float_1" as key and print
db["float_1"] = 9.99

# Perform an operation on the data
db["float_1"] += 0.01

# Print result of operation
print(db["float_1"])
```
#### Output:
```
10.0
```

### Deleting data <a name = "i"></a>
We make use of the `del` keyword and square bracket indexing to delete key-value pairings from our database:

```python
from replit import db

# Create data for the database
db["float_1"] = 9.99

# Delete the data we added at the key "float_1"
del db["float_1"]
if "float_1" not in db:
	print("Value deleted successfully.")
```

#### Output:
```
Value deleted successfully.
```

### Summary <a name = "j"></a>
Overall, the Replit Database is a simple and useful database that allows us to easily and dynamically update our data. The features resembling the Python dictionary mean we can use the built-in Python dictionary functions to interact with our database. 


## SQLite database <a name = "k"></a>
To create more than one database and allow for the merging of data stored in a table format, we can look to the SQLite database to store, structure and manage data in a relational database. 

SQLite structures data in a table format. We can set the number of columns in our table, the names of the columns, and data types we expect to store in them. However, SQLite allows for dynamic types within each column, meaning we can insert data of a different type than we had set for a particular column. We can create multiple databases and multiple tables within each database. SQLite requires no configuration, install, or login. 

A SQLite database allows for complex operations, like joining tables from different databases, all while maintaining a connection to a single database.

The basic structure of our code when using SQLite is: 
1.	Import SQLite3.
2.	Create and connect to a database.
3.	Perform CRUD operations.
4.	Commit the changes made to the database. 
5.	Close the connection to the database.

Here is a look at what a basic structure of your code should be when using the SQLite database:
```python
# Import 
import sqlite3

# Create the database and connection
connection = sqlite3.connect("my_database")

# Create a table for storing data
connection.execute("CREATE TABLE IF NOT EXISTS My_library (id INTEGER PRIMARY KEY, author STRING, book STRING);")

# Perform CRUD operations

# Create
connection.execute("INSERT INTO My_library (id,author,book) "
             "VALUES (1, 'Steve Biko','I write what I like.')")

# Read
cursor_object = connection.execute("SELECT * FROM My_library")
print(cursor_object.fetchall())

# Update
connection.execute("UPDATE My_library SET book = 'I WRITE WHAT I LIKE' WHERE id = 1")

# Delete
connection.execute("DELETE from My_library WHERE id = 1;")

# Commit changes
connection.commit()

# Close the connection
connection.close()
```


### Importing the database <a name = "m"></a>
We import SQLite to our program using this line of code:

```python
import sqlite3
```


### Creating and connecting to a database <a name = "n"></a>
We can create, name, and connect to our database using the sqlite3 module and `.connect()` method:

```python
connection = sqlite3.connect("my_database")
```


### Creating tables <a name = "o"></a>
SQLite uses tables to structure our data. To create a table, we use the `CREATE TABLE` query. To ensure we do not create a table that already exists, we can use the `CREATE TABLE IF NOT EXISTS` query. In this `CREATE TABLE` query, we assign names for our table columns along with what type of data will be stored in that column and whether the data is a primary key:

```python
connection.execute("CREATE TABLE IF NOT EXISTS My_library (id INTEGER PRIMARY KEY, author STRING, book STRING);")
```

### Inserting data <a name = "p"></a>
To insert data into our table, we use the `INSERT` query. This query requires the column names we are inserting into along with the values that we will insert into each of those columns:

```python
connection.execute("INSERT INTO My_library (id,author,book) "
             "VALUES (1, 'Steve Biko','I write what I like.')")
```

Alternatively, we may want to insert data into our tables using an input from an external source. To do this, we can format our query information as a string, and our column names and the data we wish to insert as key-value pairings in a dictionary:

```python
insert_query = ("INSERT INTO My_library (id,author,book)" 
                "VALUES (:id, :author, :book);")

author_parameters = {
        'id': 2,
        'author': 'Lewis Carrol',
        'book': "Alice's Trip in Wonderland"
    }

connection.execute(insert_query, author_parameters)
```


### Reading data <a name = "q"></a>
To read from the database, we can use a cursor variable that holds the data we pull from our database connection. We get data from our database using the `SELECT` query. We then read that data from our cursor variable.

The `SELECT *` query returns all the data from our database and the `.fetchall()` method allows us to retrieve that data from our cursor variable:

```python
cursor_object = connection.execute("SELECT * FROM My_library")

print(cursor_object.fetchall())
```

#### Output:
```
[(1, 'Steve Biko', 'I write what I like.'), (2, 'Lewis Carrol', 'Alice's Adventures in Wonderland')
```

The `WHERE` query returns all the data from our database that corresponds with our requirements:

```python
cursor_object = connection.execute("SELECT * FROM My_library WHERE id = 1")

print(cursor_object.fetchall())
```

```python
[(1, 'Steve Biko', 'I write what I like.')]
```


### Updating data <a name = "r"></a>
To update the data in our table, we execute an `UPDATE` query:

```python
connection.execute("UPDATE My_library SET book = 'Alice's Adventures in Wonderland' WHERE id = 2")
```

### Deleting data <a name = "s"></a>
To delete data from our table, we execute a `DELETE` query:

```python
connection.execute("DELETE from My_library WHERE id = 1;")
```

### Committing changes <a name = "t"></a>
When we have made changes to our database, we commit the changes through a connection:

```python
connection.commit()
```

### Closing the connection <a name = "u"></a>
Finally, we close the connection to the database:

```python
connection.close()
```

### Summary <a name = "v"></a>

The SQLite database provides an intuitive table format for our data that we can use queries to interact with. The fact we do not need to install or configure our database makes for an easy setup, and the ability to create multiple tables and databases means we can store our data separately while being able to merge files if needed.
 
