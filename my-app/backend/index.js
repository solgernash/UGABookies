// Code for mongoose config in backend
// Filename - backend/index.js

// To connect with your mongoDB database
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const conn_str = 'mongodb://localhost:27017/';
mongoose.set('strictQuery', false);
mongoose.connect(conn_str)
.then(() => {
    app.listen(port);
    console.log('MongoDB Connection Suceeded...');
})
.catch(err => {
    console.log('err');
});

// Schema for users of app
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
		trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
		trim: true,
    },
    password: {
        required: true,
        type: String,
		minLength: 6,
    },
});
const User = mongoose.model('users', UserSchema);
User.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {

	resp.send("App is Working");
	// You can check backend is working or not by 
	// entering http://loacalhost:5000
	
	// If you see App is working means
	// backend working properly
});

app.post("/register", async (req, resp) => {
	try {
		const user = new User(req.body);
		let result = await user.save();
		result = result.toObject();
		if (result) {
			delete result.password;
			resp.send(req.body);
			console.log(result);
		} else {
			console.log("User already exists");
		}

	} catch (e) {
		resp.send("Something Went Wrong");
	}
});
