import exp from "constants";
// import functions from mongoose libraries
import { connect, disconnect } from "mongoose";
// def function "connecttodabase", if there is an error, give the error message.
async function connectToDatabase(){
    try {
        await connect(process.env.MONGODB_URL);
    } catch (error){
        console.log(error);
        throw new Error("Cannot connect to Mongodb");
    }
}

// def function "disconnectfromdatabase", if there is an error, give the error message. Be more secure.
async function disconnectFromDatabase() {
    try {
        await disconnect();
    } catch (error) {
        console.log(error);
        throw new Error("Cannot disconnect from Mongodb");
    }
    
}

// export the functions
export { connectToDatabase, disconnectFromDatabase};