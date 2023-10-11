const { MongoClient } = require("mongodb");

// Connection URI
const uri ="mongodb://localhost:27017";

const client = new MongoClient(uri); 

async function run() {
  try {
    await client.connect();
    const database = client.db('NODE');
    const movies = database.collection('movies');
    
    const result = await movies.insertOne({title: "Jurassic Park"});

    const movie = await movies.find({title: "Jurassic Park"});
    console.log(await movie.toArray())
  }
  catch( e) {
    console.log(e)
  }

}


run();




