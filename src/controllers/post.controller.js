const Post = require('../models/post');
const postCtrl = {};

postCtrl.getPosts = async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
}

postCtrl.getMyPosts = async (req, res) => {
    const posts = await Post.find({user: req.user.id});
    console.log(posts);
    res.json(posts);
}

postCtrl.createPost = async (req, res) => {
    console.log(req.body);
    console.log(req.user);
    const {phrase} = req.body;
    const post = new Post({phrase, 'user' : req.user.id});
    await post.save();
    res.json({message: 'Think publicada'});
}

postCtrl.updatePost =  async (req, res) => {
    const {phrase, backgroundColor } = req.body;
    const newPost = {phrase, backgroundColor};
    await Post.findByIdAndUpdate(req.params.idPost, newPost);
    res.json({status: 'Tarea actualizada'});
}

postCtrl.deletePost = async (req, res) => {
    await Post.findByIdAndRemove(req.params.idPost);
    res.json({status: 'Tarea eliminada'});
}

postCtrl.likePost = async (req, res) => {
    const post = await Post.findById(req.params.idPost);
    console.log(post.likes);
    var index = post.likes.indexOf(req.params.idUser);
    if (index != -1) {
        post.likes.splice(index,1);
    }else{
        post.likes.push(req.params.idUser);
    }
    await post.save();
    res.json({status: 'Like guardado'});
} 

postCtrl.commentPost = async (req, res) => {
    const post = await Post.findById(req.params.idPost);
    console.log(post.comments);
    var flag = true;
    for (let index = 0; index < post.comments.length; index++) {
        const comment = post.comments[index];
        if (comment.userId == req.params.idUser) {
            comment.texts.push(req.body.comment);
            flag = false;
            break;
        }
    }
    if (flag){
        var comment = { userId : req.params.idUser, texts: [req.body.comment]}
        post.comments.push(comment);
    }
    await post.save();
    res.json({status: 'Comentario guardado'});
}

module.exports = postCtrl;

