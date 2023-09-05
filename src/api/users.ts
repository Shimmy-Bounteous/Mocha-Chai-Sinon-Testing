require('dotenv').config();
import axios from "axios";
import { User } from "../types/users";
import { UserRuntype, UsersArrayRuntype } from "../types/runtypes";

const fetchApiData = async (): Promise<User[] | Error> => {
    try {
        if (!process.env.API_ENDPOINT) {
            throw new Error('API Endpoint not available')
        }
        const response = await axios.get(process.env.API_ENDPOINT);
        const data: Array<User> = response.data;
        // if (!UserRuntype.guard(data[0])) {
        //     throw new Error('Data with different object structure received. Please check URL or backend data config for the given url')
        // }
        console.log(data);
        return data;
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error fetching data', error);
            return new Error(error.message);
        }
        return new Error('An unexpected error occured');
    }
}

export default fetchApiData;