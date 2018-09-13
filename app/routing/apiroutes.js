

app.get("/api/friends", function(req, res){
    res.json();
});

app.post("/api/friends", function(req, res){
    res.json();
});

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
