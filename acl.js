const config = require("./config")
module.exports = {
    isAllowed: function ({ user, service, permission }) {

        const filteredService = config.services.find(srv => srv.id == service)
        if (!filteredService) return {
            isAllowed: false,
            comments: `NOTOK: The service does not exist`
        }

        const filteredUser = config.users.find(usr => usr.id == user)
        if (!filteredUser) return {
            isAllowed: false,
            comments: `NOTOK: The user does not exist`
        }

        var permissions = []
        filteredUser.roles.forEach(role => {
            if (role.expires && new Date(role.expires) < new Date()) return // Role access expired.
            const filteredRole = config.roles.find(r => r.id == role.id)
            if (!filteredRole) throw new Error("Role not found")

            permissions.push(...filteredRole.permissions)
        })
        const p = permissions.includes(`${filteredService.id}:${permission}`) || permissions.includes(`${filteredService.id}:*`)

        return { isAllowed: p }
    },
    getUser: function ({ user }) {
        const filteredUser = config.users.find(usr => usr.id == user)
        if (!filteredUser) return {
            error: true,
            comments: `NOTOK: User ${user} does not exist.`
        }

        return filteredUser;
    },

    getRole: function ({ role }) {
        const filteredRole = config.roles.find(r => r.id == role)
        if (!filteredRole) return {
            error: true,
            comments: `NOTOK: Role ${role} does not exist.`
        }
        return filteredRole
    },

    getService: function ({ service }) {
        const filteredService = config.services.find(s => s.id == service)
        if (!filteredService) return {
            error: true,
            comments: `NOTOK: Service ${service} does not exist.`
        }
        return filteredService
    }
}
