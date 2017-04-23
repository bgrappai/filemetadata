import express from 'express';
import multer from 'multer';

export const app = express();
 
var storage = multer.memoryStorage(); // Create memory storage
var upload = multer({ storage: storage }); // Create middleware with the storage above

app.use('/', express.static('client'));
 
app.post('/upload', upload.single('data'), (req, res) => {
  // Endpoint logic will go here
  if (req.file) {
    res.status(200).json({
      filename: req.file.originalname,
      size: req.file.size,
      type: req.file.mimetype
    });
  } else {
    res.status(500).json({ error: `No file was provided in the 'data' field` });
  }
});