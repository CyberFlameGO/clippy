module.exports = (client) => {
  client.on('message', async (message) => {
    if (!message.member) return;
    const role = process.env.DISCORD_MEMBER_ROLE;

    if (!message.member.roles.cache.has(role)) {
      await message.member.roles.add(process.env.DISCORD_MEMBER_ROLE, 'Autorole');
    }
  });
};
