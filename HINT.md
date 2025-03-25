# MO Note

All Notes.


## Contents

- [Setup Tools](#setup-tools)
- [Setup Project](#setup-project)
    - [Client](#client)
    - [Server](#server)
    - [MongoDB](#mongodb)
- [Bypass Server](#bypass-server)
- [Mount NAS](#mount-nas)
- [Connect MongoDB](#connect-mongodb)
- [Linux Scripts](#linux-scripts)
- [MongoDB Scripts](#mongodb-scripts)
    - [1. นำเข้าข้อมูลจากไฟล์ CSV ไปยัง MongoDB](#1-นำเข้าข้อมูลจากไฟล์-csv-ไปยัง-mongodb)
    - [2. แปลงข้อมูลที่กำหนดเป็นชนิด string](#2-แปลงข้อมูลที่กำหนดเป็นชนิด-string)
    - [3. ค้นหา และลบข้อมูลที่ซ้ำ](#3-ค้นหา-และลบข้อมูลที่ซ้ำ)
    - [4. อัพเดทข้อมูลทั้งหมด](#4-อัพเดทข้อมูลทั้งหมด)
    - [5. อัพเดทข้อมูลใน array ทั้งหมด](#5-อัพเดทข้อมูลใน-array-ทั้งหมด)
    - [6. อัพเดทข้อมูลที่เป็น array](#6-อัพเดทข้อมูลที่เป็น-array)


## Setup Tools

- [VPN](https://www.shrew.net/download/vpn)
- [MSTeam](https://www.microsoft.com/en-us/microsoft-teams/download-app)
- [Discord](https://discord.com/download)
- [WinSCP](https://winscp.net/eng/downloads.php)
- [VSCode](https://code.visualstudio.com/download)
- [Git](https://git-scm.com/downloads)
- [NVM & Angular](https://github.com/coreybutler/nvm-windows/releases)		
    * nvm install 14.18.3
    * npm install -g @angular/cli@13
    * nvm install 16.15.0
    * npm install -g @angular/cli@15
- [7zip](https://www.7-zip.org/download.html)		
- [Python](https://www.python.org/downloads)
- [Insomnia](https://insomnia.rest/download) / [Postman](https://www.postman.com/downloads)
- [OracleDB v19](https://www.oracle.com/database/technologies/instant-client/winx64-64-downloads.html) *(Set Environment Variables Path)*
- [DBeaver](https://dbeaver.io/download/)
- [mongoDB v4.2](https://www.mongodb.com/try/download/community) *(Set Environment Variables Path)*
- [Studio3T](https://studio3t.com/download/) / [Robo3T](https://github.com/Studio3T/robomongo/releases)
    * username: phxinvStream
	* password: phxinv2019
	* db: phx-inv-sit
	* server: 10.138.34.240
	* port: 27017
- [Citrix Reciever](https://www.citrix.com/downloads/citrix-receiver/windows/)


## Setup Project

### Client

1. `mkdir $FOLDER && cd $FOLDER`
2. `npm install -g @angular/cli`
3. `ng new $PROJECT --routing`
4. `cd $PROJECT`
5. `ng add @angular/material`
6. `npm i bootstrap --save`
7. In **angular.json** at **styles:[]** add : `"node_modules/bootstrap/dist/css/bootstrap.min.css",`
8. In **package.json** at **scripts:{}** add : `"start": "ng serve --open",`
9. `ng g m $COMPONENT --route $COMPONENT --module app.module`

### Server

1. `mkdir $FOLDER && cd $FOLDER`
2. `npm init`
3. `npm i express cors body-parser mongoose --save`
4. `npm i nodemon --save-dev`
5. **package.json** at **scripts:{}** add : `"start": "nodemon index.js",`

### MongoDB

1. Set path environment: `"$PATH\MongoDB\Server\$VERSION\bin\mongod.exe"`
2. `mongod`
3. `mongo`
4. `npm i mongoose`

## Bypass Server

1. Run `ssh-keygen -b 4096`
2. Run `ssh-copy-id serveradm@10.138.34.239`
3. Run `ssh-copy-id serveradm@10.137.19.135`

## Mount NAS

1. `ssh serveradm@10.138.34.239` *(pass: yGIBu_3EHbG$)*
2. `su root` *(pass: R3dh@t!@#)*
3. `mkdir $MO_PATH`
4. `mount -o vers=3 $NAS_IP:$NAS_PATH $MO_PATH`

| Command           | Detail           |
| ----------------- | ---------------- |
| `mount -l -t nfs` | Show all mount   |
| `df -hT -t nfs`   | Show mount space |


## Connect MongoDB

1. `mongo --host 10.138.21.224 --port 27037 --authenticationDatabase phx-inv-sit --username phxinvStream --password phxinv2019`
2. `su - /usr/bin/mongod -f /opt/mongodb/mongod.conf`
3. `mongo --host 10.138.21.224 --port 27037 --authenticationDatabase admin --username phxinvStream --password phxinv2019`

| Detail        | Command                                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Export        | mongodump --uri="mongodb://[mongo-connection-string]" --collection=[collection-name] --db=[database-name] --out=/path/to/backup      |
| Import        | mongorestore --uri="mongodb://[mongo-connection-string]" --db=[database-name] /path/to/backup/[database-name]/phxLocationMstSFF.bson |


## Linux Scripts

| Command                      | Detail                    |
| ---------------------------- | ------------------------- |
| du -shc $DIR                 | Show size                 |
| sort -h                      | Sort                      |
| netstat -tuln                | Show all port             |
| find $DIR -mtime +30 -print  | Find file old < 1 Month   |
| find $DIR -mtime +30 -delete | Delete file old < 1 Month |


## MongoDB Scripts

### 1. นำเข้าข้อมูลจากไฟล์ CSV ไปยัง MongoDB

```javascript
mongoimport 
--host 10.138.34.240 --port 27017 -u phxinvStream -p phxinv2019 
--db phx-inv-sit --collection phxLocationMstSFF 
--type csv --file data.csv 
--columnsHaveTypes --headerline --drop
```

### 2. แปลงข้อมูลที่กำหนดเป็นชนิด string

```javascript
db.phxLocationMstSFF.find({locationId: {$exists: true}}).forEach(function(obj) {
    obj.locationId= "" + obj.locationId;
    db.phxLocationMstSFF.save(obj);
});
```

### 3. ค้นหา และลบข้อมูลที่ซ้ำ

```javascript
db.getCollection('phxLocationMstSFF').aggregate([
    {
        $group: {
            _id: "$rowId",
            count: { $sum: 1 },
            document: { $push: "$$ROOT" },
        },
    },
    {
        $match: {
            count: { $gt: 1 },
        },
    },
]).forEach(function (doc) {
    doc.document.pop();
    doc.document.forEach(function (duplicatedDoc) {
        db.getCollection('phxLocationMstSFF').deleteOne({ _id: duplicatedDoc._id });
    });
});
```

### 4. อัพเดทข้อมูลทั้งหมด

```javascript
var cursor = db.getCollection('phxLovMst').find({
    "lovType": "REGION_CODE",
    "lovVal4": "93",
    "displayVal": /E1/
})
while (cursor.hasNext()) {
  const res = db.getCollection("phxLovMst").update(
      { lovName: cursor.next().lovName },
      { $set :{lovVal5 :'E1'} }
    );
}
```

### 5. อัพเดทข้อมูลใน array ทั้งหมด

```javascript
db.getCollection('xxxxx').updateOne( 
    {username:'NATTK443'},
    {$set : {"NasTopic.$[i].subpath.$[j].auth.upload" : 'X'} },
    {arrayFilters: [
        { "i.topic":'CCSM' },
        { "j.namepath":'/subPath1CCSM' }
    ]}
)
```

### 6. อัพเดทข้อมูลที่เป็น array

```javascript
{
  "_id": ObjectId("..."),
  "name": "Smartphone",
  "variants": [
    { "color": "Black", "price": 599 },
    { "color": "White", "price": 629 }
  ]
}

db.products.updateOne(
  { name: "Smartphone", "variants.color": "Black" },
  { $set: { "variants.$.price": 549 } }
);

db.products.updateOne(
  { name: "Smartphone" },
  { $set: { "variants.1.price": 649 } }
);
```

