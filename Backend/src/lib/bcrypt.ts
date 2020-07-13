import bcrypt from 'bcryptjs';

export async function encryptPassword(password: string): Promise<string>{
    const  salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

export async function matchPassword(password: string, savePassword: string): Promise<boolean>{
    return await bcrypt.compare(password, savePassword);
}