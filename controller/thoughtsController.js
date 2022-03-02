const { Thoughts, User, Reaction } = require("../models");

module.exports = {
  getAllThoughts(req, res) {
    Thoughts.find()
      .then(async (thoughts) =>
        !thoughts
          ? res.status(404).json({ message: "No thoughts!" })
          : res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  getThoughtById(req, res) {
    Thoughts.findById(req.params.thoughtsId)
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thoughts!" })
          : res.json(thought))
      .catch((err) => res.status(500).json(err));
  },

  addThought(req, res) {
    Thoughts.create(req.body)
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thoughts!" })
          : User.findByIdAndUpdate(
            req.body.userId,
            { $addToSet: { thoughts: thought._id } },
            { runValidators: true, new: true }
          ).then((thought) =>
            !thought
              ? res.status(404).json({ message: "No thoughts!" })
              : res.json(thought)
          )
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  changeThoughtById(req, res) {
    Thoughts.findByIdAndUpdate(
      req.params.thoughtsId,
      { $set: { thoughtText: req.body.thoughtText } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought exists" })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  deleteThought({ params }, res) {
    Thoughts.findOneAndDelete({ _id: params.thoughtsId })
      .then(deletedThought => {
        if (!deletedThought) {
          return res.status(404).json({ message: 'No thought with this ID!' })
        }
        res.json({ message: "Thought has been deleted!" });
      })
      .catch(err => res.json(err));
  },

  updateThoughts({ params, body }, res) {
    Thoughts.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
      .populate({ path: 'reactions', select: '-__v' })
      .select('-___v')
      .then(dbThoughtsData => {
        if (!dbThoughtsData) {
          res.status(404).json({ message: 'No thoughts with this particular ID!' });
          return;
        }
        res.json(dbThoughtsData);
      })
      .catch(err => res.json(err));
  },

  deleteThoughts({ params }, res) {
    Thoughts.findOneAndDelete({ _id: params.id })
      .then(dbThoughtsData => {
        if (!dbThoughtsData) {
          res.status(404).json({ message: 'No thoughts with this particular ID!' });
          return;
        }
        res.json(dbThoughtsData);
      })
      .catch(err => res.status(400).json(err));
  },

  addReaction({ params, body }, res) {
    Thoughts.findOneAndUpdate({ _id: params.thoughtsId }, { $push: { reactions: body } }, { new: true, runValidators: true })
      .populate({ path: 'reactions', select: '-__v' })
      .select('-__v')
      .then(dbThoughtsData => {
        if (!dbThoughtsData) {
          res.status(404).json({ message: 'No thoughts with this particular ID!' });
          return;
        }
        res.json(dbThoughtsData);
      })
      .catch(err => res.status(400).json(err))

  },

  deleteReaction({ params }, res) {
    Thoughts.findOneAndUpdate(
      { _id: params.thoughtsId },
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true }
    )
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => res.json(err));
  },
};
