/**
 * Identicate class for performing authentication and authorization checks.
 * @class
 */
class Identicate {
    /**
     * Creates an instance of the Identicate class.
     * @constructor
     * @param {Object} options - The options for configuring the Identicate instance.
     * @param {string} options.host - The URL of the host server.
     * @throws {Error} Throws an error if no fetch API or fetch implementation is provided.
     * @throws {Error} Throws an error if the provided host URL is invalid.
     */
    constructor({ host }) {
        if (typeof fetch == "undefined") {
            try {
                require("node-fetch")
                this.fetch = require("node-fetch")
            }
            catch (e) {
                throw new Error("Please upgrade your Node.js version to v18+ or install node-fetch.")
            }
        } else {
            this.fetch = fetch
        }
        try {
            new URL(host)
        } catch (e) {
            throw new Error("Invalid URL for host")
        }

        this.baseURL = new URL(host).origin
    }

    /**
     * Checks if a user is allowed to perform a specific permission.
     * @async
     * @param {Object} options - The options for the isAllowed method.
     * @param {string} options.user - The user's Slack ID to check.
     * @param {string} options.permission - The permission to check.
     * @returns {Promise<boolean>} A promise that resolves to a boolean indicating if the user is allowed.
     */
    async isAllowed({ user, permission }) {
        return await (await this.fetch(`${this.baseURL}/acl/user/allowed?` + new URLSearchParams({
            user, permission
        }))).json()
    }

    /**
     * Looks up information about a user.
     * @async
     * @param {Object} options - The options for the userLookup method.
     * @param {string} options.user - The user's Slack ID to lookup.
     * @returns {Promise<Object>} A promise that resolves to an object containing user information.
     */
    async userLookup({ user }) {
        return await (await this.fetch(`${this.baseURL}/acl/user/lookup?` + new URLSearchParams({
            user
        }))).json()
    }

    /**
     * Looks up information about a role.
     * @async
     * @param {Object} options - The options for the roleLookup method.
     * @param {string} options.role - The role ID to lookup.
     * @returns {Promise<Object>} A promise that resolves to an object containing role information.
     */
    async roleLookup({ role }) {
        return await (await this.fetch(`${this.baseURL}/acl/role/lookup?` + new URLSearchParams({
            role
        }))).json()
    }

    /**
     * Looks up information about a service.
     * @async
     * @param {Object} options - The options for the serviceLookup method.
     * @param {string} options.service - The service ID to lookup.
     * @returns {Promise<Object>} A promise that resolves to an object containing service information.
     */
    async serviceLookup({ service }) {
        return await (await this.fetch(`${this.baseURL}/acl/service/lookup?` + new URLSearchParams({
            service
        }))).json()
    }
}

module.exports = Identicate