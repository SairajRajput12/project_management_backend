import mysql.connector

# Database connection details
db_host = "sql105.infinityfree.com"
db_user = "if0_38000026"
db_password = "4vZEnVUWACJUuZI "
db_name = "if0_38000026_project_management"

try:
    # Connect to the database
    connection = mysql.connector.connect(
        host=db_host,
        user=db_user,
        password=db_password,
        database=db_name
    )

    if connection.is_connected():
        print("Connected to the database")

    # Example query
    cursor = connection.cursor()
    cursor.execute("SHOW TABLES")
    for table in cursor.fetchall():
        print(table)

except mysql.connector.Error as e:
    print("Error connecting to MySQL:", e)
finally:
    if 'connection' in locals() and connection.is_connected():
        cursor.close()
        connection.close()
        print("MySQL connection closed.")

import mysql.connector as mysql

# enter your server IP address/domain name
HOST = "x.x.x.x" # or "domain.com"
# database name, if you want just to connect to MySQL server, leave it empty
DATABASE = "database"
# this is the user you create
USER = "python-user"
# user password
PASSWORD = "Password1$"
# connect to MySQL server
db_connection = mysql.connect(host=HOST, database=DATABASE, user=USER, password=PASSWORD)
print("Connected to:", db_connection.get_server_info())
# enter your code here!