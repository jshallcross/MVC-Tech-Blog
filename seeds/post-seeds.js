const { Post } = require('../models');

const postData = [
    {
        title: "Tesla",
        post_data: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        user_id: 2
    },
    {
        title: "Facebook",
        post_data: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        user_id: 1
    },
    {
        title: "Microsoft",
        post_data: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        user_id: 1
    },

]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;