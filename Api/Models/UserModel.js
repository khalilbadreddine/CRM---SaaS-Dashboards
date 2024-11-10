// Importing necessary modules with ES module syntax
import mongoose from 'mongoose';
import crypto from 'crypto';
import {v4 as uuidv4} from 'uuid';


// Defining the User Schema
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxLength: 30,
            minLength: 2,
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        encrypted_password: {
            type: String,
            required: true
        },
        salt: String,
    },
    { timestamps: true }
);

// Creating a "virtual" field that will take in password and encrypt it
userSchema.virtual("password")
    .set(function(password) {
        this._password = password;
        this.salt = uuidv4();
        this.encrypted_password = this.securedPassword(password);
    })
    .get(function() {
        return this._password;
    });

// Defining some methods associated with user schema
userSchema.method({

    // To check if the password is correct
    authenticate: function(plainpassword) {
        return this.securedPassword(plainpassword) === this.encrypted_password;
    },

    // To encrypt the password
    securedPassword: function(plainpassword) {
        if (!plainpassword) return "";
        try {
            return crypto.createHmac('sha256', this.salt)
                    .update(plainpassword)
                    .digest('hex');
        }
        catch (err) {   
            return `Error in hashing the password + ${err}`;
        }
    },
});

// Export the userSchema as User
export default mongoose.model("User", userSchema);
