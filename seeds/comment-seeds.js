const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 2,
        comment_text: "Test Comment 1"
    },
    {
        user_id: 2,
        post_id: 3,
        comment_text: "Test Comment 2"
    },
    {
        user_id: 1,
        post_id: 3,
        comment_text: "Test Comment 3"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Test Comment 4"
    },
    {
        user_id: 1,
        post_id: 2,
        comment_text: "Test Comment 5"
    },
    {
        user_id: 3,
        post_id: 3,
        comment_text: "Test Comment 6"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Test Comment 7!"
    },
    {
        user_id: 3,
        post_id: 1,
        comment_text: "Test Comment 8"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;