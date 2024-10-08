import Blog from '../models/blog.js';

export const createBlog = async (req, res) => {
    try{
        const blog = await Blog.create(req.body);

        if(blog){
            return res.status(200).json({success: true, message: "Blog added successfully", data: blog})
        }
        return res.status(400).json({success: false, message: "Unable to add blog"});
    }catch(error){
        return res.status(500).json({ success: false, message: "Internal server error", error: error})
    }
}

export const getAllBlogs = async (req, res) =>{
    try {
        const blogs= await Blog.findAll();

        if(blogs){
            return res.status(200).json({ success: true, message: "Blogs fetched successfully", data: blogs })
        }else{
            return res.status(400).json({ success: false, message: "No Blogs found", data: blogs })
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: error })
    }
}
