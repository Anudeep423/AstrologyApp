const BlogSchema = require("../model/blog")
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

exports.getBlogById = (req,res,next,id) => {

  BlogSchema.findOne({_id : id  })
  .exec( (err,blog) => {
    if(err){
      res.json(err).status(404)
    }
    req.blog = blog
     next();
  }  )
  

}

exports.photo = (req, res) => {
  console.log(req.blog)
  if (req.blog.Img.data) {
    res.set("Content-Type", req.blog.Img.contentType);
    return res.send(req.blog.Img.data);
  }
};


exports.createBlog = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
  
    form.parse(req, (err, fields, file) => {
      if (err) {
        return res.status(400).json({
          error: "problem with image"
        });
      }
      //destructure the fields
      const { Title, Content } = fields;
  
      if (!Title || !Content ) {
        return res.status(400).json({
          error: "Please include all fields"
        });
      }
  
      let blog = new BlogSchema(fields);
  
      //handle file here
      if (file.Img) {
        if (file.Img.size > 3000000) {
          return res.status(400).json({
            error: "File size too big!"
          });
        }
        blog.Img.data = fs.readFileSync(file.Img.path);
        blog.Img.contentType = file.Img.type;
      }
      // console.log(blog);
  
      //save to the DB
      blog.save((err, blog) => {
        if (err) {
          res.status(400).json({
            error: "Saving Blog in DB failed"
          });
        }
        res.json({Success : "Blog Successfully stored in DB",blog}).status(200);
      });
    });
  };


  exports.getAllBlogs = (req, res) => {
    BlogSchema.find()
      .select("-Img ")
      .exec((err, products) => {
        if (err) {
          return res.status(400).json({
            error: "NO product FOUND"
          });
        }
        res.json(products).status(200);
      });
  };

  exports.deleteBlog = (req, res) => {
    let blog = req.blog;
    blog.remove((err, deletedblog) => {
      if (err) {
        return res.status(400).json({
          error: "Failed to delete the blog"
        });
      }
      res.json({
        message: "Deletion was a success",
        deletedblog
      });
    });
  };

  exports.getBlog = (req,res) => {

    return res.json(req.blog)
  }