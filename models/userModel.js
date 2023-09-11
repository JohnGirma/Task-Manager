import mongoose from "mongoose";

const ticketSchema=new mongoose.Schema(
    {
        title: {
            type: String,
           default: "default tittle"
            
        },
        body: {
            type: String,
           default:"default body"
            
        },
        priority: {
            type: String,
           default:"default priority"
                    
        },

    })

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        
    },
    isVerfied: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isMain: {
        type: Boolean,
        default: false,
    },

    tickets:ticketSchema,

    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;