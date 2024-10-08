import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Category = sequelize.define("Category", {
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
    category_id: {
        type: DataTypes.BIGINT
    }
}, {
    tableName: "blogs",
    timestamps: false
});

export default Category;