const express = require("express");
const userRouter = require("./routes/user");
const bookRouter = require("./routes/book");

const app = express();
const port = process.env.PORT ;

app.use(express.json());
app.use(userRouter);
app.use(bookRouter);


app.listen(port,()=>{
    console.log(`[+] Server running on port: ${port}`);
});