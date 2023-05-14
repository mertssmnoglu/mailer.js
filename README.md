# Mailer.js

Nodemailer Gmail implementations for your applications.

! Suitable for personal use

## Features

- Send Basic Text Mail
- Send Static Html Mail
- Send Dynamic Mail Template(.js)

## Setup

### Environment Variables

```shell
cp .env.example .env
```

Fill these variables with your datas

```js
EMAIL=your_email_address@gmail.com
PASSWORD=your_secret_password_or_gmail_token
RECEIVER_EMAIL=receiver_email_adress@domain.com
```

### Install

```shell
npm install
```

### Sending Mails

#### 1. Static Text

Go to `examples/sendTextMail.js` Rename subject and mail content

```shell
node examples/sendTextMail.js 
```

#### 2. Static Html

Go `examples/sendStaticHtmlMail.js` rename subject and html path

```shell
node examples/sendStaticHtmlMail.js 
```

#### 3. Dynamic Template

Go `examples/sendDynamicMail.js` rename John doe and johndoe parameters from Welcome template

```shell
node examples/sendDynamicMail.js 
```

## Contribution

You can fork this repository and add new templates to open source community.

## License

This repository licensed under [MIT](https://opensource.org/license/mit/) license. Please read before use it.
