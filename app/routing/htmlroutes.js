require("express");

app.get("/survey", function(res, err){
    res.render(survey.html);
});

app.get("/", function(res, err){
    res.render(index.html);
});

