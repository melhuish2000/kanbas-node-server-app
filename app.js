import express from "express";
import Lab5 from "./lab5.js";
import CourseRoutes from "./Courses/routes.js";
import ModuleRoutes from "./Modules/routes.js";
import cors from "cors";
import Hello from "./hello.js";
const app = express();

app.use(cors());
app.use(express.json());
ModuleRoutes(app);
Hello(app);
CourseRoutes(app);
Lab5(app);
app.listen(process.env.PORT || 4000);