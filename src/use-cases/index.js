const makeAddComment = require('./add-comment');
const makeEditComment = require('./edit-comment');
const makeRemoveComment = require('./remove-comment');
const makeListComments = require('./list-comments');
const makeHandleModeration = require('./handle-moderation');
const { commentsDb } = require('../data-access');
const isQuestionable = require('../is-questionable');

const handleModeration = makeHandleModeration({
  isQuestionable,
  initiateReview: async function(){ console.log(arguments[0]); } // TODO: Make real initiate review function.
});
const addComment = makeAddComment({ commentsDb, handleModeration });
const editComment = makeEditComment({ commentsDb, handleModeration });
const listComments = makeListComments({ commentsDb });
const removeComment = makeRemoveComment({ commentsDb });

const commentService = Object.freeze({
  addComment,
  editComment,
  // handleModeration,
  listComments,
  removeComment
});

module.exports = commentService;