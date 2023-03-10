// ENV Initialization
import { config } from "dotenv";
config();

// Application Initialization
import express from "express";
import indexRouter from "./routes/router";

const app = express();
const PORT = process.env.PORT || 8080;

if (process.env.NODE_ENV != "production") {
  app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.protocol}://${req.hostname}${req.url}`);
    next();
  });
}

// Initializing All Routes
app.use(indexRouter);

app.listen(PORT, () => {
  console.log(`⚡ Server is listning to PORT:${PORT}`);
});
