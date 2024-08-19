import mongoose from "mongoose";


const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI as string, {});
        console.log('MongoDB Connected!');
    } catch(err: unknown) {
       if (err instanceof Error) {
            console.error('MongoDB Connection Error:', err.message);
        } else {
            console.error('An unknown error occurred while connecting to MongoDB:', err);
        }
        process.exit(1);
    }
}

export default connectDB;