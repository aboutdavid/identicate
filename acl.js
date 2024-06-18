const config = require("./config")
module.exports = {
    isAllowed: function ({ user, permission }) {
        const user = config.users.find(user => user.id == user)
        if (!user) return false
    }
}