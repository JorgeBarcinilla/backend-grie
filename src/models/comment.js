const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema({
    user: {type: Schema.ObjectId, ref: "User", required: true },
    post: {type: Schema.ObjectId, ref: "Post", required: true },
    text: {type: String, required: true}
});

module.exports = mongoose.model('Comment', CommentSchema);