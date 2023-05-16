require('dotenv').config()
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import { connectDB } from './src/config/db.ts'

const PORT: number = parseInt(process.env.PORT as string, 10)

const app = express()

// ConnectDB
connectDB()
// Use Helmet!
app.use(helmet()) //  giúp bảo mật các ứng dụng Express bằng cách đặt tiêu đề phản hồi HTTP
app.use(cors()) // cho goi khac cổng
app.use(morgan('combined')) // ghi log dưới màn hình console

app.use('/views', express.static(path.join(__dirname, './src/api/v1/views')))

//middleware
app.use(express.urlencoded({ extended: false })) // dùng nhận data từ request body
app.use(express.json()) // dùng nhận data từ request body
app.use(cookieParser()) // dùng nhận cookie

app.get('/', function (req, res) {
    res.send('Hello World')
})

if (!PORT) {
    process.exit(1)
}

const server = app.listen(PORT || '4000', () => {
    console.log(`Server is running on http://localhost:${PORT}/`)
})

type ModuleId = string | number

interface WebpackHotModule {
    hot?: {
        data: any
        accept(
            dependencies: string[],
            callback?: (updatedDependencies: ModuleId[]) => void
        ): void
        accept(dependency: string, callback?: () => void): void
        accept(errHandler?: (err: Error) => void): void
        dispose(callback: (data: any) => void): void
    }
}

declare const module: WebpackHotModule

if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => server.close())
}
