import { welcome } from './datas.js'

const Welcome = (nameAndSurname, username) => `${welcome.header(username)}
${welcome.description(nameAndSurname, username)}
`

export default Welcome
