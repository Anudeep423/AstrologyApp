const express = require("express");

const router = express.Router();

const {createBlog,getAllBlogs,getBlogById,photo,deleteBlog,getBlog,updateBlog} = require("../controller/blog");

router.param("blogid" , getBlogById )


router.post("/create/blog" ,  createBlog);

router.get("/getAllBlogs" ,  getAllBlogs);

router.get("/getablog/:blogid", getBlog  )

router.get("/getphoto/:blogid" , photo );

router.delete("/deleteblog/:blogid" , deleteBlog  )

router.put("/updateblog/:blogid" , updateBlog )


module.exports = router;
