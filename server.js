const express = require("express");
const bodyparser = require("body-parser");


const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');


// app.get("/", (req, res) => {
//     res.sendFile("C:/Users/Hp/Desktop/web assignment 4/main.html");

// });

// app.get( '/', (req, res) => {
//     res.render('main');
//   });
  app.post('/login', (req, res) => {
    var username= String(req.body.username);
    var password= String(req.body.password);
    if(username==="anusha" && password==="zubair"){
        res.render('main', { bmi: null });
    }
    else{
        res.send("invalid username or password");
    }
    });
  
  app.get('/', (req, res) => {
    res.render('cover');
  });
  
app.post('/continue', (req, res) => {
    res.render('login');
  });

app.post("/bmicalculator", function (req, res) {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var weightUnit = req.body.weightUnit;
    var heightUnit = req.body.heightUnit;

    if (weightUnit === "lbs") {
        weight = weight * 0.453592;
    }
    if (heightUnit === "in") {
        height = height * 0.0254;
    }
    var bmi = weight / Math.pow(height, 2);

    if (bmi < 18.5) {
        var x="your bmi is around "+  bmi + " you are underweight";
        res.render('main',{bmi: x} );
    } else if (bmi >= 18.5 && bmi < 25) {
        var x= "your bmi is around "+  bmi + " you are normal weight";
        res.render('main',{bmi: x} );
        
    } else if (bmi >= 25 && bmi < 30) {
        var x= "your bmi is around "+  bmi + " you are overweight";
        res.render('main',{bmi: x} );
        
    } else {
        var x= "your bmi is around "+  bmi + " you are obese";
    
        res.render('main',{bmi: x} );
    
    }




});

app.listen(7777, function () {
    console.log("Server is running on port 7777");
})
