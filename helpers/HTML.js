import { writeFile } from 'fs'
import transporter from '../index.js'

class HTML {
    constructor(htmlLang = 'en', head, body) {
        this.htmlLang = htmlLang
        this.head = head
        this.body = body
    }

    toString() {
        return `<html lang="${this.htmlLang}">
<head>
<!--  HEAD START -->
${this.head}
<!--  HEAD END -->
</head>

<body>
<!--  BODY START -->
${this.body}
<!--  BODY END -->
</body>
</html>`
    }

    exportAsHTML(filename) {
        return new Promise((resolve, reject) => {
            writeFile(`./${filename}.html`, this.toString(), (err) => {
                if (err) {
                    return reject(new Error(err))
                }
                resolve('Success')
            })
        })
    }

    sendMail(receivers, subject) {
        if (receivers.length == 0) return console.log(new Error('Receiver list is empty!'))

        for (const receiver of receivers) {
            const mailOptions = {
                from: process.env.EMAIL,
                to: receiver,
                subject: subject,
                html: this.toString()
            }

            transporter.sendMail(mailOptions, (error) => {
                if (error) {
                    console.log(error)
                } else {
                    console.log('Email sent successfully to:', receiver)
                }
            })
        }
    }
}

export default HTML
