import express from "express";
import cors from "cors";
import itemRoutes from "./routes/item.router.js";

const PORT = 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", itemRoutes);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});