import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db"

export const checkUser = async () => {
    const user = await currentUser();
}