let handler = async (m, { conn }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/horny', {
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
}), 'hornycard.png', '🔥 𝙀𝙎𝙏𝘼 𝙇𝙄𝙎𝙏𝙊!!\n𝘼𝙙𝙧𝙞𝙖𝙣𝙤 𝙎𝙖𝙣𝙘𝙝𝙚𝙯', m)
}
handler.help = ['hornycard', 'hornylicense']
handler.tags = ['maker'] 
handler.command = /^(horny(card|license))$/i 
export default handler
