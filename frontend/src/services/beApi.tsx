"use client";

import axios from "axios";

const API_URL = process.env.NODE_ENV === "development" 
    ? process.env.NEXT_PUBLIC_API_URL_DEV 
    : process.env.NEXT_PUBLIC_API_URL_PROD;
    
const beApi = axios.create({baseURL:`${API_URL}/api`});

export default beApi;