module.exports = {
    users: [
        {
            name: "David",
            comments: "",
            id: "U04CBLNSVH6",
            roles: [{
                id: "ctt"
            }]

        },
        {
            name: "Aarya",
            comments: "CT manager",
            id: "U01MPHKFZ7S",
            roles: [{
                id: "ctt"
            }]
        }
    ],
    roles: [
        { name: "Community Toolkit Team", id: "ctt", members: ["U04CBLNSVH6", "U01MPHKFZ7S"], permissions: ["threadlocker:*"], managers: ["U04CBLNSVH6", "U01MPHKFZ7S"] }
    ],
    services: [{
        name: "Threadlocker",
        id: "threadlocker",
        permissions: ["lock", "unlock"]
    }]
}