const owner = (prefix, botName, ownerName) => {
        return `
「 *${ LOSER BOT }* 」

[ ! ] *INFO*
  ❏ Prefil: 「  ${prefix}  」
  ❏ Criador: ${CarlosX}
  ❏ Versao: 0.0.3
[ ! ] *SOBRE❗*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *DONO*
  │
  ├─ ❏ ${prefix}setprefix
  ├─ ❏ ${prefix}block
  ├─ ❏ ${prefix}bc
  ├─ ❏ ${prefix}bcgc
  ├─ ❏ ${prefix}clone
  └─ ❏ ${prefix}clearall`
}
exports.owner = owner
