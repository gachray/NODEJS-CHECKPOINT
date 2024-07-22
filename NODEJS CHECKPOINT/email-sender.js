//TASK 05 - NODE.JS CHECKPOINT


// Import the nodemailer package
const nodemailer = require('nodemailer');

// Create a transporter object using your email credentials
let transporter = nodemailer.createTransport({
  // Host of your email provider (e.g. Gmail, Outlook, etc.)
  host: 'your-email-host',
  // Port number for the email provider (usually 587 or 465)
  port: 587,
  // Security option (false for non-SSL, 'STARTTLS' for TLS)
  secure: false, // or 'STARTTLS'
  // Authentication credentials for your email account
  auth: {
    // Your email address
    user: 'your-email-address',
    // Your email password
    pass: 'your-email-password'
  }
});

// Define the email options
let mailOptions = {
  // From address (your email address)
  from: 'your-email-address',
  // To address (your email address, in this case)
  to: 'your-email-address',
  // Subject of the email
  subject: 'Test Email from Node.js',
  // Text content of the email
  text: 'Hello from Node.js! Today is Monday, July 22, 2024.'
};

// Send the email using the transporter
transporter.sendMail(mailOptions, (error, info) => {
  // If there's an error, log it to the console
  if (error) {
    return console.log(error);
  }
  // If the email is sent successfully, log a success message
  console.log('Email sent: ' + info.response);
});