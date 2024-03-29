const express = require('express');
const userRouter = require('./routes/users');
const app = express();
const cors = require('cors');

app.use(express.urlencoded({ extended: true })); //Parse URL-
app.use(cors());
app.use(express.json());
app.use("/api/v1/users", userRouter);

app.get('/', (req, res)=>{
    res.send("Hello Royalroy Ansari")
});
app.listen(3000);