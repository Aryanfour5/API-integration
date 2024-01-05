import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res,next) => {
  try {
    const result = await axios.get("https://v2.jokeapi.dev/joke/Any?type=single");
    console.log(result.data.joke)
    res.render("index.ejs", {
      secret: result.data.joke,
      id: result.data.category,
    });
}catch (error) {
    console.log(error.response.data);
    res.status(500);
  }
}
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
