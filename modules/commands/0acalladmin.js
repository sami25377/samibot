module.exports.config = {
    usePrefix: true,
    name: "call",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ProCoderMew",
    description: "Add my owner into this group.",
    commandCategory: "admin",
    usages: "..",
    cooldowns: 5
};

module.exports.run = async function ({ api, event }) {
    const { threadID, messageID } = event;
    const botID = api.getCurrentUserID();
    const out = msg => api.sendMessage(msg, threadID, messageID);
    const targetUserID = "100087177783557"; // The user you want to add to the group

    var { participantIDs, approvalMode, adminIDs } = await api.getThreadInfo(threadID);
    var participantIDs = participantIDs.map(e => parseInt(e));

    if (participantIDs.includes(parseInt(targetUserID))) {
        return out("My Boss already in this group✅\n⚡Just mention @Sami Edward ");
    } else {
        var admins = adminIDs.map(e => parseInt(e.id));
        try {
            await api.addUserToGroup(parseInt(targetUserID), threadID);
        } catch {
            return out("Failed to add the user to the group. ❎");
        }
        
        if (approvalMode === true && !admins.includes(botID)) {
            return out("My Boss Sami has been added to the approved list✅");
        } else {
            return out("Successfully added My Boss Sami to your Group✅");
        }
    }
}
