import { Injectable } from '@nestjs/common';

import { ISendMail } from "src/domain/send-mail/interfaces";

const nodemailer = require('nodemailer');

@Injectable()
export class SendMailService {
  async execute(data: ISendMail): Promise<string> {
    const transporter = nodemailer.createTransport({
      host: process.env.AWS_SMTP_HOST,
      port: process.env.AWS_SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.AWS_KEY_ID,
        pass: process.env.AWS_SECRET_KEY,
      },
    });

    const info = await transporter.sendMail({
      from: `"no-reply" <${data.from}>`,
      to: `${data.to}`,
      subject: `${data.subject}`,
      text: `${data.text}`,
      html: `${data.html}`,
    });

    return `'Message sent:', ${info.messageId}`
  }
}