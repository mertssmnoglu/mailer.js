import { readFile } from 'fs'
import transporter from '../index.js'

async function sendStaticHtmlMail(mailFrom, mailTo, subject, htmlPath) {
    readFile(htmlPath, { encoding: 'utf-8' }, function (err, html) {
        if (err) {
            console.log(err)
        } else {
            const mailOptions = {
                from: mailFrom,
                to: mailTo,
                subject: subject,
                html: html
            }

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error)
                } else {
                    console.log('Email sent successfully')
                }
            })
        }
    })
}

sendStaticHtmlMail(process.env.EMAIL, process.env.RECEIVER_EMAIL, 'Static HTML', './templates/Newsletter.html')
