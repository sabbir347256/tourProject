import { Types } from "mongoose"

export enum Role {
    SUPERADMIN = "SUPER_ADMIN",
    ADMIN = "ADMIN",
    USER = "USER",
    GUIDE = "GUIDE"
}

export type IAuthProvider = {
    provider : string,
    providerID : string
}


export enum isActive {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    BLOCKED = "BLOCKED"
}

export type IUser = {
    name : string,
    email : string,
    password ?: string,
    phone ?: string,
    picture ?: string,
    address ?: string,
    isDeleted ?: string,
    isActive ?: string,
    isVerified ?: string,

    auths :IAuthProvider[],
    role : Role, 
    bookings ?: Types.ObjectId[], 
    guides ?: Types.ObjectId[]
}