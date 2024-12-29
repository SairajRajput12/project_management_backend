import mysql.connector

# Establish a connection
try:
    # Connect to MySQL server
    connection = mysql.connector.connect(
        host="localhost",        # Hostname or IP address of the MySQL server
        user="root",             # Your MySQL username
        password="1215293",      # Your MySQL password
        database="project_management"  # Database to connect to
    )

    if connection.is_connected():
        print("Connected to MySQL Database")

        # Create a cursor object
        cursor = connection.cursor()

        # Fetch the current database name
        cursor.execute("SELECT DATABASE();")
        db_name = cursor.fetchone()
        print(f"Connected to database: {db_name[0]}")

        # Fetch data from the 'admin' table
        cursor.execute("SELECT * FROM projects;")
        ans = cursor.fetchall()
        print(f"Admin data: {ans}")

except mysql.connector.Error as err:
    print(f"Error: {err}")

finally:
    # Close the connection properly
    if 'connection' in locals() and connection.is_connected():
        cursor.close()
        connection.close()
        print("MySQL connection closed.")
