import express from "express";
import DB from './Data/DB.json' assert { type: 'json' };

const app = express();

app.get(['/',"/data" ], (req, res) => {
    res.send(DB);
});

app.get("/data/:id", (req, res) => {
    const { id } = req.params;  
    const item = DB[id];  

    if (item ) {
        res.send(item); 
    }
    else {
        res.status(404).send({ error: "Item not founded" });
    }
});
app.get("/data/:id/:name", (req, res) => {
    const { id, name } = req.params;  
    const item = DB[id];  

    if (item && item[name] !==undefined) {
        res.send(item.name); 
    } else {
        res.status(404).send({ error: "Item not founded" });
    }
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
