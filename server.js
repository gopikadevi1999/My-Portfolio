import express from 'express';
import path from 'path';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8000

app.use(express.static('DevFolio'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './DevFolio/index.html'));
})

app.post('/', (req, res) => {
    console.log(req.body);

    const sendername = req.body.sendername;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'deviradhakrishnan6363@gmail.com',
            pass: 'lrwz ullu khbo apaz'
        },
        tls : {
            rejectUnauthorized: false
        }

    })
   

    const mailOptions = {
        from: email,
        to: 'deviradhakrishnan6363@gmail.com',
        subject: `Message from ${email}: ${subject}` ,
        html:`
        <h3>Sender Details</h3>
        <ul>
          <li>Name: ${sendername}</li>
          <li>Email: ${email}</li>
          <li>Subject: ${subject}</li>
          <li>Message: ${message}</li>
        </ul>
        `
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('Error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Success');
        }
    })

    res.send('Message sent successfully!');
})



app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
