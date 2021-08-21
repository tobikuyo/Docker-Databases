const db = connect('mongodb://localhost:27017/social');

db.users.drop();
