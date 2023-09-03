import { Console } from 'console'
import mongoose from 'mongoose'

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection=mongoose.connection


        connection.on('connected',()=>{
            console.log("successfully")
        });
    } catch (error) {
        console.log("something wrong")
        console.log(error)
    }
}