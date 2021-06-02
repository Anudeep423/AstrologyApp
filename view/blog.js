const express = require("express");

const router = express.Router();

const {createBlog,getAllBlogs} = require("../controller/blog");

router.post("/create/blog" ,  createBlog);

router.get("/getAllBlogs" ,  getAllBlogs);


module.exports = router;
