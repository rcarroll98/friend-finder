// Used to display a JSON of all possible friends
app.get("/api/friends", function(data){
    for (var i = 0; i < data.length; i++) {
        var formGroupItem = $("<form class='formGroupItem'>");
        formGroupItem.append($("<h2>").text("Name" + data[i].name));
        formGroupItem.append($("<img>").innerhtml("src=" + data[i].photo));
        }
    ("$friend-section").append(formGroupItem);
});

// Used to handle incoming survey results and compatibility logic. 
app.post("/api/friends", function(req, res){
    var newfriend = req.body;

  // Using a RegEx Pattern to remove spaces from newfriend
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newfriend);

  friends.push(newfriend);

  res.json(newfriend);
});

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
