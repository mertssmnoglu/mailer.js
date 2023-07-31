const app = {
    name: 'LogoSoftTech',
    description: 'LogoSoftTech is a simple software development company.'
}

const welcome = {
    header: (username) => `<h1>Welcome ${username}</h1>`,
    description: (nameSurname, username) =>
        `<p>Dear ${nameSurname}, welcome to ${app.name}.
        ${app.description}</p>
        <p>Your username is <b>@${username}</b></p>`
}

const newsletter = {
    header: (username) => `<h1>Newsletter for ${username}</h1>`,
    description: (nameSurname, username) => `<p>Hi ${nameSurname},</p>
    <p>Here you have today news.</p>`
}

export { welcome, newsletter }
