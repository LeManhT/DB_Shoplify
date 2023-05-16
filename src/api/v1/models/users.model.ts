import mongoose, { Model, Schema } from 'mongoose'
import { IUser } from '../interface/users.interface'

const UsersSchema: Schema = new mongoose.Schema<IUser>(
    {
        username: {
            type: String,
            required: true,
            maxlength: 32,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            index: { unique: true },
            match: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
        },
        password: {
            type: String,
            required: true,
        },
        userRole: {
            type: Number,
            required: false,
        },
        phone: {
            type: String,
        },
        userImage: {
            type: String,
            default: 'user.png',
        },
        verified: {
            type: Boolean,
            default: false,
        },
        secretKey: {
            type: String,
            default: null,
        },
        history: {
            type: [String],
            default: [],
        },
    },
    { collection: 'users' }
)

const UserModel: Model<IUser> = mongoose.model('users', UsersSchema)
