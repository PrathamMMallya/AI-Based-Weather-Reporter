import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export async function sendWeatherEmail({ to, name, city, temperature, condition, aqi, commentary }) {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: `"Weather Reporter" <${process.env.SMTP_USER}>`,
      to,
      subject: `Weather Report for ${city}`,
      text: `Hello ${name},\n\nHere is the weather report for ${city}:\n- Temperature: ${temperature}°C\n- Condition: ${condition}\n- AQI: ${aqi}\n\n${commentary}\n\nRegards,\nWeather Reporter`,
    });

    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error; // propagate error to server.js if needed
  }
}
