const multer = require('multer');
const { v1: uuid } = require('uuid');

const MIMI_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpg'
};

const fileUpload = multer({
  limits: 500000,
  storage: multer.diskStorage({
    destination: (req, file, next) => {
      next(null, 'uploads/images'); // null => no error
    },
    filename: (req, file, next) => {
      const ext = MIMI_TYPE_MAP[file.mimetype];
      next(null, uuid() + '.' + ext);
    },
  }),
  fileFilter: (req, file, next) => {
    const isValid = !!MIMI_TYPE_MAP[file.mimetype]; // !! =< convert undefined/null to true/false/
    let err = isValid ? null : new Error('Invalid mime type');
    next(err, isValid);
  }
});

module.exports = fileUpload;
