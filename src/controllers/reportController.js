const Report = require('../models/Report');
const validator = require('Validator');
const multer = require('multer');
const nodemailer = require('nodemailer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage }).single('image');

exports.createReport = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: 'Error uploading image' });
    }

    try {
      const { name, email } = req.body;

      // validação dos dados
      if (!name || !email || !req.file) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      if (!validator.isEmail(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
      }

      // criar um report novo
      const report = new Report({
        name,
        email,
        image: req.file.path,
      });
      await report.save();

      // enviar email
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'your-email@gmail.com',
          pass: 'your-password',
        },
      });

      const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'New Risk Report',
        text: `Um novo reporte foi realizado por ${name}.`,
      };

      await transporter.sendMail(mailOptions);

      res.status(201).json({ message: 'Ocorrencia registrada com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Um erro foi encontrado ao registrar a ocorrencia' });
    }
  });
};