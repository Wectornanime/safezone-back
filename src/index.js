const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserRoutes = require('./routes/userRouter');
const ReportRoutes = require('./routes/reportRoutes');
const fs = require('fs');
const path = require('path');

const uploadDir = path.join(__dirname, '..', 'uploads');
// Verificar se o diretório existe, senão criar
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

// Conectar ao banco de dados MongoDB
mongoose.connect('mongodb://root:root@localhost:27017/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware para parsear o corpo da requisição
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/users', UserRoutes);
app.use('/reports', ReportRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});