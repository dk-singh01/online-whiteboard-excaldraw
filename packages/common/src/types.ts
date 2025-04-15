
import {z} from "zod";

export const CreateUserSchaema = z.object({
    username: z.string().min(3).max(20),
    email: z.string().email({message: "Invalid email address"}),
    name: z.string().min(2).max(12)
})

export const SignInSchema = z.object({
    username: z.string().min(3).max(20),
    email: z.string().email({message: "Invalid email address"}),
});

export const CreateRoomSchema = z.object({
    username: z.string().min(3).max(20),
})