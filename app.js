import http from "http"
import express from "express"
import cors from "cors"

const app = express();
app.server = http.createServer(app);
app.use(cors())

const shoppingList = ["fork", "milk", "cereals", "spoon", "bowl"]

app.get("/shopping_list", (req, res) => {
    res.send(shoppingList);
})

app.server.listen(3000, () => {
    console.log(`Start on port ${app.server.address().port}`);
})