import express from "express";
import FileUpload from  "express-fileupload";
import cors from "cors";
import ProductRoutes from "./routes/ProductRoutes.js";

const app = express()

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(ProductRoutes);

app.listen(5000, ()=> console.log('server up and running..'));
