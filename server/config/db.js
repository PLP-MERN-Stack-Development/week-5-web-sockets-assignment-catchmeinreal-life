
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = 'mongodb+srv://ericmatutu125%401gmail.com:7jq6qM%40125@nodetutorial.9cc3x.mongodb.net/blogDB?retryWrites=true&w=majority&appName=nodetutorial'

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const connectDB = async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process with failure
  }
}

module.exports = connectDB;