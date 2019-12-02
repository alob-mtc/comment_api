const {
  addComment,
  editComment,
  listComments,
  removeComment
} = require('../use-cases');
const makeDeleteComment = require('./delete-comment');
const makeGetComments = require('./get-comments');
const makePostComment = require('./post-comment');
const makePatchComment = require('./patch-comment');
const notFound = require('./not-found');

const deleteComment = makeDeleteComment({ removeComment });
const getComments = makeGetComments({
  listComments
});
const postComment = makePostComment({ addComment });
const patchComment = makePatchComment({ editComment });

const commentController = Object.freeze({
  deleteComment,
  getComments,
  notFound,
  postComment,
  patchComment
});

module.exports = commentController;
