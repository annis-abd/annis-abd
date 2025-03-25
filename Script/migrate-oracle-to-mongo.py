import cx_Oracle
from pymongo import MongoClient
from pymongo.errors import ConnectionFailure, PyMongoError
from cx_Oracle import DatabaseError

# Oracle connection parameters
oracle_config = {
    "username": "unnchanc",
    "password": "unnchanc",
    "dsn": "172.16.249.77:1536/sffsitdb"
}

# MongoDB connection parameters
mongodb_config = {
    "uri": "mongodb://phxinvStream:phxinv2019@10.138.21.224:27037/phx-inv-sit",
    "database": "phx-inv-sit",
    "collection": "phxLocationMstSFF"
}

# SQL query
oracle_query = """
SELECT
    pd.row_id,
    pd.location_cd,
    pd.name AS location_name,
    pd.partner_status,
    pd.dpc_status,
    pd.division_type,
    pd.partner_flg,
    pd.partner_type,
    pd.partner_sub_type,
    pd.chn_sales_code,
    pd.chn_sales_name,
    pd.created,
    pd.created_by,
    pd.last_upd,
    pd.last_upd_by
FROM
    sff_partner_division pd
WHERE
    pd.partner_status = 'Active Partner'
"""

def fetch_from_oracle():
    # Connect to Oracle DB
    try:
        with cx_Oracle.connect(
            oracle_config['username'],
            oracle_config['password'],
            oracle_config['dsn'],
            encoding="UTF-8") as oracle_conn:

            # Create a cursor object
            with oracle_conn.cursor() as cursor:
                cursor.execute(oracle_query)
                return cursor.fetchall()

    except DatabaseError as e:
        print(f"Error fetching data from Oracle DB: {e}")
        raise

def insert_to_mongodb(data):
    try:
        # Connect to MongoDB
        client = MongoClient(mongodb_config['uri'])
        db = client[mongodb_config['database']]
        collection = db[mongodb_config['collection']]

        # Inserting the documents
        collection.insert_many(data)
        print("Data inserted successfully into MongoDB")

    except ConnectionFailure as e:
        print(f"MongoDB connection failed: {e}")
        raise
    except PyMongoError as e:
        print(f"Failed to insert data into MongoDB: {e}")
        raise

def transform_data(oracle_data):
    # Transform data into the MongoDB format
    return [
        {
            "rowId": record[0],
            "locationId": record[1],
            "locationName": record[2],
            "partnerStatus": record[3],
            "dpcStatus": record[4],
            "divisionType": record[5],
            "partnerFlg": record[6],
            "partnerType": record[7],
            "partnerSubType": record[8],
            "chnSalesCode": record[9],
            "chnSalesName": record[10],
            "created": record[11],
            "createdBy": record[12],
            "lastModified": record[13],
            "lastModifiedBy": record[14],
        }
        for record in oracle_data
    ]

def main():
    try:
        # Fetch data from Oracle
        oracle_data = fetch_from_oracle()

        # Transform data for MongoDB insertion
        mongodb_data = transform_data(oracle_data)

        # Insert data into MongoDB
        insert_to_mongodb(mongodb_data)

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()
