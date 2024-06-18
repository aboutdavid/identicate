module.exports = {
    users: [
        {
            name: "David",
            comments: "",
            id: "U04CBLNSVH6",

        },
        {
            name: "Aarya",
            comments: "CT manager",
            id: "U01MPHKFZ7S",
        }
    ],
    roles: [
        { name: "Community Toolkit Team", members: ["U04CBLNSVH6", "U01MPHKFZ7S"], permissions: ["threadlocker:lock", "threadlocker:unlock"] }
    ],
    services: [{
        name: "Threadlocker",
        id: "threadlocker",
        permissions: ["lock", "unlock"]
    }]
}