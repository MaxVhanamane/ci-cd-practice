import express from "express";
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000;

app.use(express.static("dist"));

app.get("/health", (req, res) => {
  res.status(200).send("Ok")
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
