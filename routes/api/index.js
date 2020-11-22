const path = require("path");
const router = require("express").Router();
const commentRoutes = require("./comment");
const postRoutes = require("./post");
const userRoutes = require("./user");

// router.use("/books", bookRoutes);


router.use("/comments", commentRoutes);
module.exports = router;