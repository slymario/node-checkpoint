const nodemailer = require('nodemailer');


// Creating a transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nwobodoobinna2018@gmail.com',
        pass: 'yeyeyetetereref',
    },
});

// Defining email options
const mailOptions = {
    from: 'nwobodoobinna2018@gmail.com ',
    to: 'nwobodoobinna1187@gmail.com', // Your own email address for testing
    subject: 'Test Email',
    text: 'This is a test email sent from Node.js using Nodemailer.',
};

// Sending the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('There was an Error:', error);
    } else {
        console.log('Email sent successfully:', info.response);
    }
});