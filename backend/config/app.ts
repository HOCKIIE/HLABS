import dotenv from 'dotenv';
dotenv.config();

export default {
    port: process.env.PORT || 3000,
    isProduction: process.env.NODE_ENV === "production",
    mongoDBUri: process.env.MONGO_URI || "",
    pageLimit: process.env.PAGE_LIMIT || 20,
}