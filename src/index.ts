require('dotenv').config();
import fetchApiData from "./api/users";
import { User } from "./types/users";

const main = async () => {
    const jsonData: Array<User> | Error = await fetchApiData();
    if (jsonData instanceof Error) {
        console.error(jsonData.message);
    } else {
        console.log('Fetched JSON data: \n', jsonData);
    }
}
main();

