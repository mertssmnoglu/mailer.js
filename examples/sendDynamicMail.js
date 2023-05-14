import transporter from '../index.js'
import Welcome from '../templates/Welcome.js'

async function sendDynamicMail(mailFrom, mailTo, subject, content) {
    const mailOptions = {
        from: mailFrom,
        to: mailTo,
        subject: subject,
        html: Welcome('John Doe', 'johndoe')
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent successfully')
        }
    })
}

sendDynamicMail(process.env.EMAIL, process.env.RECEIVER_EMAIL, 'Static Text Mail', 'This is a static text mail')
