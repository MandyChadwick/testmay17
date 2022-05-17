const express = require('express');
const documentsController = require('../controllers/documents');
const router = express.Router();

router.get('/', documentsController.getAll);
router.get('/:id', documentsController.getSingle);
router.post('/', documentsController.create_event);
router.put('/:id', documentsController.update_event);
router.delete('/:id', documentsController.delete_event);

module.exports = router;
