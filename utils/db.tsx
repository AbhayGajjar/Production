import { User } from "@/models/user";
import mongoose from "mongoose";

export const connectdb = async () => {

    try {
        const { connection } = await mongoose.connect(process.env.MONGO as string, {
            dbName: "Day3"
        })

        console.log("db is conneted...");
        console.log(connection);
        //User create in database 

        const usersss = new User({
            username: "Manoj",
            email: "manoj@gmail.com",
            password: "manoj@123"
        })

        await usersss.save();
        console.log("Users is Created......")

    } catch (error) {
        console.log("db is not conneted...")
        console.log(error);

    }


}