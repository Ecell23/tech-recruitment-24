import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import TechApply  from "./src/routes/TechApply";
import Apply  from "./src/routes/Apply";
import { verifyOtp } from "src/utils/Otp";
import morgan from "morgan";

const app = express();
const port = process.env.PORT || 3000;

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

app.get("/",(_req,res)=>{
  res.send({message:"This is the recruitment api for the tech team of ecell nits. Please use the /tech route to access the endpoints.",status:200})
})

app.use("/tech",TechApply)
app.use("/",Apply)
app.post("/verifyotp",verifyOtp);
