const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const express=require("express");
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL ="mongodb://localhost:27017/myDb"
const DATABASE_NAME = "myDb";

var app =express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var database, collection;

app.listen(5000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection=database.collection("AppName");
        collection1=database.collection("AppSummary");
        console.log("Connected to `" + DATABASE_NAME + "`!");
const fs = require("fs");
const fastcsv = require("fast-csv");

let stream = fs.createReadStream("_1AppDetails.csv");
let csvData = [];
let csvStream = fastcsv
  .parse()
  .on("data", function(data) {
    csvData.push({
      App:data[0],
      UserStory: data[1],
      Description: data[2],
      Technology: data[3],
      Storypoints: data[4],
      Status:data[5],
QADefects:data[6],
ProdDefectsCount:data[7],
Workedby:data[8],
PeerReviewDone:data[9],
PeerReviewDoneby:data[10]
    });
  })
  .on("end", function() {
    // remove the first line: header
    csvData.shift();

    // save to the MongoDB database collection
    client
      .db("myDb")
      .collection("AppSummary")
      .insertMany(csvData, (err, res) => {
        if (err) throw err;
        console.log(`Inserted: ${res.insertedCount} rows`);
        client.close();
      });
  }
);
stream.pipe(csvStream);
  });

});

app.get("/api/getExcelData", (request, response) => {
 collection1.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});



