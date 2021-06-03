const express = require("express");

const router = express.Router();

const {createBlog,getAllBlogs,getBlogById,photo,deleteBlog} = require("../controller/blog");

router.param("blogid" , getBlogById )


router.post("/create/blog" ,  createBlog);

router.get("/getAllBlogs" ,  getAllBlogs);

router.get("/getphoto/:blogid" , photo );

router.delete("/deleteblog/:blogid" , deleteBlog  )


module.exports = router;
