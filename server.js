const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const morgan = require('morgan');
const rfs = require('rotating-file-stream');
const next = require('next');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
// A sua lógica para determinar o ambiente dev/prod está boa.
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev, dir: './Client' }); // Apontar para a pasta 'Client' está correto.
const handle = nextApp.getRequestHandler();

// Configuração de logs (está correta)
const logDirectory = path.join(__dirname, 'logs');
if (!fs.existsSync(logDirectory)) fs.mkdirSync(logDirectory);
const accessLogStream = rfs.createStream('access.log', {
  interval: '1d',
  path: logDirectory
});

nextApp.prepare().then(() => {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(morgan('combined', { stream: accessLogStream }));

  // --- Rotas da sua API Customizada ---
  // (Estas vêm PRIMEIRO)
  app.get('/status', (req, res) => {
    res.send('🟢 Backend está rodando com sucesso.');
  });

  app.get('/env-check', (req, res) => {
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
    res.json({
      SMTP_HOST: SMTP_HOST || '❌ not set',
      SMTP_PORT: SMTP_PORT || '❌ not set',
      SMTP_USER: SMTP_USER || '❌ not set',
      SMTP_PASS: SMTP_PASS ? '✅ set' : '❌ not set'
    });
  });

  app.post('/send-email', async (req, res) => {
    // A sua lógica de envio de e-mail continua aqui...
    const { to, subject, html, cc, bcc } = req.body;
    if (!to || !subject || !html) {
      return res.status(400).json({ success: false, error: 'Missing required fields.' });
    }
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT),
        secure: true,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        tls: { rejectUnauthorized: false }
      });
      const info = await transporter.sendMail({
        from: `"Golden Visa Explorer" <${process.env.SMTP_USER}>`,
        to, subject, html, cc, bcc
      });
      res.json({ success: true, messageId: info.messageId });
    } catch (err) {
      // A sua lógica de log de erro continua aqui...
      const timestamp = new Date().toISOString();
      const errorMsg = `${timestamp} - ${err.stack}\n`;
      fs.appendFileSync(path.join(logDirectory, 'error.log'), errorMsg);
      res.status(500).json({ success: false, error: 'Erro ao enviar email', details: err.message });
    }
  });

  // --- Gestor do Next.js ---
  // (Isto vem DEPOIS das suas rotas de API, para apanhar tudo o resto)
  app.all('*', (req, res) => {
    return handle(req, res); // Deixe o Next.js tratar de tudo: páginas, /_next, /public, 404, etc.
  });

  // Inicia o servidor
  app.listen(PORT, () => {
    console.log(`🚀 Server running with Next.js on http://localhost:${PORT}`);
  });
});