const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const express=require("express");
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL ="mongodb://localhost:27017/myDb"
const DATABASE_NAME = "myDb";
const router = express.Router();

var app =express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var database, collection;
var cors = require('cors');
app.use(cors());


app.listen(5000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection=database.collection("App");
        collection1=database.collection("AppSummary");
        collection2=database.collection("AppUserstories");
 	    collection3=database.collection("AppCount");
		collection4= database.collection("AppHighlights");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});

app.post("/createHighlights", (request, response) => {
    collection4.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
//response.header("Access-Control-Expose-Headers", "Access-Control-*") ;
response.header("Access-Control-Allow-Origin", "*");
response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
response.header("Access-Control-Allow-Headers", "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept");
response.header('Access-Control-Allow-Credentials', true);
//response.header('Allow', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
            response.status(200);
		
    });
});

app.post("/createDeliverystatus", (request, response) => {
	console.log(request.query._id);
    collection1.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
//response.header("Access-Control-Expose-Headers", "Access-Control-*") ;
response.header("Access-Control-Allow-Origin", "*");
response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
response.header("Access-Control-Allow-Headers", "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept");
response.header('Access-Control-Allow-Credentials', true);
//response.header('Allow', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
            response.status(200);
		
    });
});


app.get("/api/getAppName", (request, response) => {
 collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }

response.header("Access-Control-Allow-Origin", "*");
response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
response.header('Access-Control-Allow-Credentials', true);

response.send(result);

   });
});

    
app.get("/api/getAppSummary", (request, response) => {
//console.log(request.query.app);
 collection1.find({"App":request.query.app}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
//console.log(request.query.appname);
response.header("Access-Control-Allow-Origin", "*");
response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
response.header('Access-Control-Allow-Credentials', true);


response.send(result);


   });
});


app.get("/api/getCount", (request, response) => {
collection3.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }

response.header("Access-Control-Allow-Origin", "*");
response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
response.header('Access-Control-Allow-Credentials', true);
response.send(result);
    });
});
    
app.get("/api/getUserStoriesCount", (request, response) => {

collection1.find({"App":"Digitization"}).count((error, result) => {
collection2.update({ App:"Digitization"}, {App:"Digitization",UserStory:result},{upsert:true})
 });


collection1.find({"App":"Fresh2PI"}).count((error, result) => {
    collection2.update({ App:"Fresh2PI"}, {App:"Fresh2PI",UserStory:result},{upsert:true})
 });


collection1.find({"App":"GWFM"}).count((error, result) => {
    collection2.update({ App:"GWFM"}, {App:"GWFM",UserStory:result},{upsert:true})
 });


collection1.find({"App":"GSS"}).count((error, result) => {
    collection2.update({ App:"GSS"}, {App:"GSS",UserStory:result},{upsert:true})
 });


collection1.find({"App":"SIT"}).count((error, result) => {
    collection2.update({ App:"SIT"}, {App:"SIT",UserStory:result},{upsert:true})
 });


collection1.find({"App":"Donation Tracking"}).count((error, result) => {
    collection2.update({ App:"Donation Tracking"}, {App:"Donation Tracking",UserStory:result},{upsert:true})
 });


collection1.find({"App":"BSA"}).count((error, result) => {
    collection2.update({ App:"BSA"}, {App:"BSA",UserStory:result},{upsert:true})
 });



        collection2.find({}).toArray((error, result2) => {
        if(error) {
            return response.status(500).send(error);
        }

response.header("Access-Control-Allow-Origin", "*");
response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
response.header('Access-Control-Allow-Credentials', true);

response.send(result2);
});
});













