// ENV Initialization
import { config } from "dotenv";
config();

// Application Initialization
import express from "express";
import { engine as handlebarsEngine } from "express-handlebars";
import indexRouter from "./routes/router";
import path from "path";

const app = express();
const PORT = process.env.PORT || 8080;

if (process.env.NODE_ENV != "production") {
    app.use((req, res, next) => {
        console.log(`${new Date().toISOString()} - ${req.protocol}://${req.hostname}${req.url}`);
        next();
    });
}

app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));
app.engine(
    "handlebars",
    handlebarsEngine({
        layoutsDir: path.resolve(__dirname, "views", "layouts"),
        defaultLayout: false,
    })
);

// Initializing All Routes
app.use(indexRouter);

app.listen(PORT, () => {
    console.log(`⚡ Server is listning to PORT:${PORT}`);
});
