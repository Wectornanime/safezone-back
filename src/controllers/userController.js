const User = require('../models/User');
const validator = require('validator');

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, cpf } = req.body;

    // validãção dos dados do cadastro
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Preencha todos os campos' });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: 'Formato invalido' });
    }

    if (!validator.isStrongPassword(password)) {
      return res.status(400).json({ error: 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number' });
    }

    // Verificar se o usuário já existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Já existe um usuário com este email' });
    }

    // criar novo usuário
    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the user' });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificação se já exist um usuário
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Email ou senha invalido' });
    }

    // verificara a senha
    if (user.password !== password) {
      return res.status(401).json({ error: 'Email ou senha invalido' });
    }

    res.status(200).json({ message: 'Logado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Um erro foi encontrado na hora de fazer login' });
  }
};

