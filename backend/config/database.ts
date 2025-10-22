import mongoose from "mongoose";
import config from "../config/app";

type cliOptType = {
    serverApi: {
        version: string;
        strict: boolean;
        deprecationErrors: boolean
    }
}

const connectToMongo = async () => {
    try {
        // console.log(config.mongoDBUri)
        // mongoose.connect(config.mongoDBUri as string);
        // console.log("MongoDB connected");

        await mongoose.connect(config.mongoDBUri as string)
        .then(() => {
            console.log('✅ MongoDB connected successfully');
            // app.listen(config.PORT, () => console.log(`🚀 Server running on port ${config.PORT}`));
        })
        .catch((err) => {
            console.error('❌ Connection failed:', err);
            process.exit(1);
        });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

    } catch (error) {
        console.log("MongoDB error: ", error);
    } finally {
        // Ensures that the client will close when you finish/error
        await mongoose.disconnect();
      }
};
  
export default connectToMongo;