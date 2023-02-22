const { Schema, model } = require('mongoose');

// Schema to setup the User model
const UserSchema = new Schema({

    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/.+@.+\..+/],
    },

    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Thought",
        },
    ],

    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    ],
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
}
);

UserSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});

const User = model("User", UserSchema)

module.exports = User; 

