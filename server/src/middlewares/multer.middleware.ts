import multer from 'multer';
import path from 'path';
import fs from 'fs';


const uploadsDir = path.join(__dirname, '../../uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, uploadsDir);
  },
  filename(req, file, callback) {
    callback(null, file.originalname);
  },
});

export const singleUpload = multer({ storage }).single('photo');
