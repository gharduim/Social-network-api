const router = require('express').Router();
const { getAllThoughts, getThoughtById, addThought, changeThoughtById, addReaction, deleteThought, deleteReaction, } = require('../../controller/thoughtsController');

router.route('/').get(getAllThoughts).post(addThought);

router.route('/:thoughtsId').get(getThoughtById).put(changeThoughtById).delete(deleteThought);

router.route('/:thoughtsId/reactions').post(addReaction)

router.route('/:thoughtsId/:reactionId').delete(deleteReaction)

module.exports = router;