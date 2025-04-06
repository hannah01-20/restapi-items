// VALIDATION FOR USER INPUTS IN FORMS
// REGISTER, LOGIN, ITEM
import * as z from "zod";

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Invalid email address",
    }),
    username: z.string().min(4, { message: "Username must be at least 4 characters long" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    re_password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
})

export const LoginSchema = z.object({
    username: z.string().min(4, { message: "Username must be at least 4 characters long" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
})

export const ItemSchema = z.object({
    name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
    price: z.number().min(0, { message: "Price must be at least a positive number" }),
})