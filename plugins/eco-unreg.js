let handler = async (m, { conn, text }) => {

let user = global.db.data.users[m.sender]

user.registered = false
return conn.reply(m.chat, `> ⭐ Tu registro fue borrado de mi base de datos.`, m)

}
handler.help = ['unreg']
handler.tags = ['eco']
handler.command = ['unreg']
handler.register = true
export default handler