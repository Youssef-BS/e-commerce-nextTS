import {Request , Response} from 'express';
import { prisma, Prisma } from '@repo/product-db';

// export const getProducts = async (req : Request , res : Response) => {
//     try {

        

//     }catch (error) {
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// }
export const createProduct = async (req : Request , res : Response) => { 
    try {
        const data : Prisma.ProductCreateInput = req.body  ;
        const product = await prisma.product.create({data})
        res.status(201).json(product) ;

    }catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
// export const deleteProduct = async (req : Request , res : Response) => {
 
//     try {

//     }catch (error) {
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// }
// export const getProduct = async (req : Request , res : Response) => {
 
//     try {

//     }catch (error) {
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// }