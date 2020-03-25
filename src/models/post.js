const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
    phrase: {type: String, required: true},
    likes: [{type: Schema.ObjectId, ref: "User"}],
    user: {type: Schema.ObjectId, ref: "User", required: true }
});

module.exports = mongoose.model('Post', PostSchema);

 