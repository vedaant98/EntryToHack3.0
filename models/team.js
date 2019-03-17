const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");

var teamSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        // default: "team1"
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        default: "team"
    },
    showTeam: {
        type: Boolean,
    },
    members: [
        {
            name: {
                type: String,
                required: true
            },
            isLeader: {
                type: Boolean,
                default: false
            },
            email: {
                type: String,
                required: true
            },
            area: {
                type: String
            },
            rollNumber: {
                type: String,
                required: true
            },
            phone: {
                type: String,
                required: true
            },
            year: {
                type: String,
                required: true
            },
            skills: {
                type: [],
                required: true
            }
        }
    ],
    challenge: {
        title: {
            type: String
        },
        category: {
            type: String
        },
        description: {
            type: String
        }
    },
    mentorchallenge: {
        mentorname: {
            type: String
        },
        title: {
            type:String,
            default: ""
        },
        category: {
            type: String
        },
        description: {
            type: String
        }
    }
});

// PASSWORD HASHING ADDED

teamSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model("Team", teamSchema);
