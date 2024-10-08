import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Blog = sequelize.define("Blog", {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    content: {
        type: DataTypes.TEXT
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    slug: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    }
},{
    tableName: "blogs",
    timestamps: false
});

export default Blog;