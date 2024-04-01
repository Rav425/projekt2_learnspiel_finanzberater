import { Response } from 'express';
import jwt from 'jsonwebtoken';

export const generateToken = (res:Response, userId: number)  => {
    const token  = jwt.sign({userId}, process.env.JWT_SECRET || 'default_secret',{
        expiresIn: '1h',
    });

    res.cookie('access_token', token, {
        httpOnly: true,
        maxAge: 86400000, // 24 hours
    })
}