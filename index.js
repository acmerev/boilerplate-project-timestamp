// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));

// Serve static files
app.use(express.static('public'));

// Root route
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// API endpoint for /api/hello (existing)
app.get("/api/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});

// New route for date API
app.get("/api/:date?", (req, res) => {
  const dateString = req.params.date;

  let date;

  if (!dateString) {
    date = new Date();
  } else {
    if (!isNaN(dateString)) {
      date = new Date(parseInt(dateString));
    } else {
      date = new Date(dateString);
    }
  }

  // Check for invalid date
  if (date.toString() === "Invalid Date") {
    return res.json({ error: "Invalid Date" });
  }

  // Respond with unix and utc format
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

// Listen on specified port
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
