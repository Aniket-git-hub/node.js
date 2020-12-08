const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 5050;


const staticpath = path.join(__dirname, 'public');
const partilsPath = path.join(__dirname, 'template/partials');
const viewsPath = path.join(__dirname, 'template/views');



//setting up the view engine to hbs
app.set("view engine","hbs")
//Register hbs partials
hbs.registerPartials(partilsPath)
//path to our views files
app.set("views", viewsPath);
//Static pages
app.use(express.static(staticpath));


// Render Home page
app.get("/", (req, res)=>{
	res.render("index" , {
		user:"Aniket Singh",
		page:"Home",
		redirect:"about"
	})
})
// Render About page
app.get("/about", (req, res)=>{
	res.render("about", {
		user:"Aniket Singh",
		page:"About",
		redirect:" "
	})
})


//Render 404 Error page
app.get("*", (req, res)=>{
	res.render("404", {
		user:"Aniket Singh"
	})
})


//listening to the port number;
app.listen(port, ()=>console.log(`Listning to the port ${port}`));

