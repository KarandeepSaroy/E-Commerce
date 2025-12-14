// import express from 'express';
// import cors from 'cors';
// import 'dotenv/config';
// import connectDB from './config/mongodb.js';
// import connectCloudinary from './config/cloudinary.js';
// import userRouter from './routes/userRoute.js'
// import productRouter from './routes/productRoute.js';
// import cartRouter from './routes/cartRoute.js';
// import orderRouter from './routes/orderRoute.js';

// // App Config
// const app = express()
// const port = process.env.PORT || 4000
// connectDB()
// connectCloudinary()

// // import cors from "cors";

// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173", // for one local React dev server
//       "http://localhost:5174", // for another local React dev server
//       "https://e-commerce-front-end-delta-six.vercel.app", // your deployed frontend
//     ],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );


// // Middlewares
// app.use(express.json())
// // app.use(cors())
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

// // Api endpoints
// app.use('/api/user', userRouter)
// app.use('/api/product', productRouter)
// app.use('/api/cart', cartRouter)
// app.use('/api/order', orderRouter)

// app.get('/', (req, res) => {
//     res.send("API Working")
// })

// app.listen(port, ()=> console.log("Server started on PORT: " + port))

import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// =========================
// App Configuration
// =========================
const app = express();
const port = process.env.PORT || 4000;

// Connect to Database and Cloudinary
connectDB();
connectCloudinary();

// =========================
// Middlewares
// =========================
app.use(express.json());

// Unified & Correct CORS Setup
app.use(
  cors({
    origin: [
      "http://localhost:5173", // Local React frontend
      "http://localhost:5174", // (Optional) another local port
      "https://e-commerce-front-end-delta-six.vercel.app", // Deployed frontend (Vercel)
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Allow cookies / tokens
  })
);

// =========================
// API Endpoints
// =========================
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Test Endpoint
app.get("/", (req, res) => {
  res.send("API Working Successfully");
});

// =========================
// Server Start
// =========================
app.listen(port, () => console.log(`Server started on PORT: ${port}`));
