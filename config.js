module.exports = {
    users: [
        {
            name: "Kartikey",
            comments: "",
            id: "U05F4B48GBF",
            roles: [{
                id: "swat"
            }]
        },
        {
            name: "David",
            comments: "",
            id: "U04CBLNSVH6",
            roles: [{
                id: "swat"
            }]
        },
        {
            name: "Haroon",
            comments: "",
            id: "U06TBP41C3E",
            roles: [{
                id: "swat"
            }]
        },
        {
            name: "Samuel",
            comments: "",
            id: "U04G40QKAAD",
            roles: [{
                id: "swat"
            }]
        }
    ],
    roles: [
        { name: "SWAT", id: "swat", members: ["U05F4B48GBF", "U04CBLNSVH6", "U06TBP41C3E", "U04G40QKAAD"], permissions: ["librarian:*"], managers: [] }
    ],
    services: [{
        name: "Librarian",
        id: "librarian",
        permissions: ["feature", "unlock"]
    }]
}
