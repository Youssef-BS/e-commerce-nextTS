import { Request , Response } from "express";
import { Prisma , prisma } from '@repo/product-db' ;

export const createCategory = async (req : Request , res : Response) => {
    try {

        const data : Prisma.CategoryCreateInput = req.body ;
        const category = await prisma.category.create({data}) ;
        res.status(201).json(category) ;

    }catch(error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}