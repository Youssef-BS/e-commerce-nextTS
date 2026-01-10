import express , {NextFunction, Request , Response} from 'express' ;
import cors from 'cors' ;
import { clerkMiddleware } from '@clerk/express'
import { shouldBeUser } from './middleware/authMiddleware.js';
import productRoute from './routes/product.route.js'
import categoryRoute from './routes/category.route.js'

const app = express() ;

app.use(cors({
    origin: ["http://localhost:3002", "http://localhost:3003"],
    credentials: true
}))

app.use(clerkMiddleware()) ;
app.use(express.json()) ;

app.get('/health', (req : Request, res : Response) => {
    return res.status(200).json({
    status : "ok" , 
    uptime : process.uptime() , 
    timestamp : Date.now()
  })
})
                                                                        
app.get('/test' , shouldBeUser ,(req : Request , res : Response) => {
res.json({
    message : "Product service Authenticated" ,
    userId : req.userId
})
})

app.use('/products' , productRoute) ; 
app.use('/categories' , categoryRoute) ;


app.use((err : any , req : Request , res : Response , next:NextFunction) => {
    console.log(err) ; 
    res.status(err.status || 500).json({message : err.message || "Internal Server Error"}) ;
}) ;


app.listen(8000 , ()=> {
    console.log('Product service is running on port 8000') ;
})