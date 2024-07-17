import {z} from 'zod'


export const userSchema = z.object({
 name : z.string().min(1),
 email:z.string(),
 password:z.string().min(4)
})