import mongoose, { ConnectOptions } from 'mongoose'

interface Options extends ConnectOptions {
    useNewUrlParser: boolean
    useUnifiedTopology: boolean
}

export const connectDB = async () => {
    try {
        const options: Options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
        await mongoose.connect(
            'mongodb://127.0.0.1:27017/DB_Shoplify_App',
            options
        )
        console.log('Database Connected Successfully')
    } catch (err) {
        console.log('Database Not Connected',err)
    }
}
