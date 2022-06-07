import express from "express";

const app =express()

const mehsul=[
    {
        "name":"alma",
        "value":"1m",
        "amount":"100",
        "id":"1"
    },
    {
        "name":"armud",
        "value":"2m",
        "amount":"123",
        "id":"2"
    },
    {
        "name":"gilas",
        "value":"3m",
        "amount":"88",
        "id":"3"
    },
    {
        "name":"alca",
        "value":"8m",
        "amount":"21",
        "id":"4"
    },
    {
        "name":"uzum",
        "value":"1m",
        "amount":"122",
        "id":"5"
    },
    {
        "name":"seker",
        "value":"1.2m",
        "amount":"1231",
        "id":"6"
    },
    {
        "name":"qend",
        "value":"1.8m",
        "amount":"56",
        "id":"7"
    },
    {
        "name":"cips",
        "value":"1.2m",
        "amount":"7676",
        "id":"8"
    },
    {
        "name":"suxarik",
        "value":"0,8m",
        "amount":"42",
        "id":"9"
    },
    {
        "name":"cola",
        "value":"1.20m",
        "amount":"14",
        "id":"10"
    },
]
app.get('/mehsul/:id', function(req, res){ 
    res.json((mehsul.find((mehsul)=>
    mehsul.id == req.params.id)))

})

app.listen(5050, function(){
    console.log("mehsul deyeri")
})