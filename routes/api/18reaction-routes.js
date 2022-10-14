const router = require("express").Router();
const {
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
//   .get(getSingleThought)
//   .put(updateThought)
//   .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
