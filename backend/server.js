const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const db = require("./src/models");

const testConnection = async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Connected to database successfully!");
  } catch (error) {
    console.log("Failed to connect to database:", error);
  }
};

testConnection();

const UserRoute = require("./src/routes/User.route")
const CategoryRoute = require("./src/routes/Category.route")
const joblistingRoute = require("./src/routes/Joblisting.route")
const PaymentRoute = require("./src/routes/Payment.route")
const Thumnailcards = require("./src/routes/Thumnail.route")


app.use("/api" , UserRoute)
app.use("/api",CategoryRoute)
app.use("/api",joblistingRoute)
app.use("/api",PaymentRoute)
app.use("/api",Thumnailcards)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
