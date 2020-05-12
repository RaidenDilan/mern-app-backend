const port = process.env.PORT || 5000;
const dbURI = process.env.MONGODB_URI || `mongodb+srv://${ process.env.DB_USER }:${ process.env.DB_PASSWORD }@cluster0-mhonq.mongodb.net/${ process.env.DB_NAME }?retryWrites=true&w=majority`;
const secret = process.env.SECRET || 'I bet you never even look at this!';

module.exports = { port, dbURI, secret,  };
