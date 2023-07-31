import transporter from '../../index.js'

async function sendTextMail(mailFrom, mailTo, subject, content) {
    const mailOptions = {
        from: mailFrom,
        to: mailTo,
        subject: subject,
        text: content
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent successfully')
        }
    })
}

sendTextMail(process.env.EMAIL, process.env.RECEIVER_EMAIL, 'Static Text Mail', 'This is a static text mail')
