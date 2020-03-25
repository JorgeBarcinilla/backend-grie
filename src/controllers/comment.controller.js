const Comment = require('../models/comment');
const commentCtrl = {};

commentCtrl.getComments = async (req, res) => {
    const comments = await Comment.find();
    res.json(comments);
}

commentCtrl.getComment = async (req, res) => {
    const comment = await Comment.findById(req.params.id);
    res.json(comment);
}

commentCtrl.createComment = async (req, res) => {

}

commentCtrl.editComment =  async (req, res) => {
    
}

commentCtrl.deleteComment =  async (req, res) => {
    await Comment.findByIdAndRemove(req.params.id);
    res.json({status: 'Comment eliminado'});
}

module.exports = commentCtrl;