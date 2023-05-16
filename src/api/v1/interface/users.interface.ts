import { ObjectId, Document } from 'mongoose'

export interface IUser extends Document {
    id: ObjectId
    username: string
    email: string
    password: string
    userRole?: string | number
    phone: string
    userImage: string
    verified: boolean
    secretKey: string
    history: Array<String>
}
