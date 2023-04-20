import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝙈𝙖𝙠𝙖𝙣𝙖𝙠𝙮𝘽𝙤𝙩-𝙈𝘿', body: '𝘼𝙙𝙧𝙞𝙖𝙣𝙤 𝙎𝙖́𝙣𝙘𝙝𝙚𝙯', sourceUrl: `https://github.com/ADRIANOSANCHEZ24/MakanakyBot-MD`, thumbnail: imagen2}}})}
    
return !0 }
export default handler
