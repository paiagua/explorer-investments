import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// No App Router, exportamos funções com o nome do método HTTP (POST)
export async function POST(request) {
  try {
    // 1. Ler os dados (diferente do pages router)
    const body = await request.json();
    const { to, subject, html, cc, bcc } = body;

    // 2. Validação
    if (!to || !subject || !html) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    // 3. Configurar Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: true, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: { rejectUnauthorized: false }
    });

    // 4. Enviar email
    const info = await transporter.sendMail({
      from: `"Golden Visa Explorer" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
      cc,
      bcc
    });

    console.log("Email enviado:", info.messageId);
    
    // 5. Resposta de sucesso
    return NextResponse.json({ success: true, messageId: info.messageId });

  } catch (err) {
    console.error("Erro no envio:", err);
    return NextResponse.json(
      { success: false, error: 'Erro ao enviar email', details: err.message },
      { status: 500 }
    );
  }
}
export async function GET(request) {
  return NextResponse.json({ 
    status: 'Online', 
    mensagem: 'A API de emails existe! Mas para enviar email tens de fazer um pedido POST.' 
  });
}
