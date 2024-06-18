const config = require("./config")
module.exports = {
    isAllowed: function ({ user, service, permission }) {
        const user = config.users.find(user => user.id == user)
        if (!user) return {
            isAllowed: false,
            comments: `NOTOK: USER ${user} FAILED ACL CHECK - USER DOES NOT EXIST`
        }

    
        const filteredService = config.services.find(service => service.id == service)
        if (!filteredService) return {
            isAllowed: false,
            comments: `NOTOK: USER ${user} FAILED ACL CHECK - SERVICE DOES NOT EXIST`
        }


    }
}