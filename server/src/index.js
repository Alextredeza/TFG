const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/cdn', express.static(path.join(__dirname, "./public")));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server" });
});

app.use("/api", require("./routes/api"));

if(process.env.NODE_ENV === 'production') {
  express.static(path.join(__dirname, '../../client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
  });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
