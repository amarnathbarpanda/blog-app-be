import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const BlogCategories = sequelize.define("BlogCategories", {
    blog_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true
    }, category_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true
    }
}, { tableName: "blog_categories", timestamps: false });
export default BlogCategories;