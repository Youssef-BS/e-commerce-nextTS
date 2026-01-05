import express , {Request , Response} from 'express' ;
import cors from 'cors' ;

const app = express() ;
app.use(cors({
    origin: ["http://localhost:3002", "http://localhost:3003"],
    credentials: true
}))

app.get('/health', (req : Request, res : Response) => {
    return res.status(200).json({
    status : "ok" , 
    uptime : process.uptime() , 
    timestamp : Date.now()
  })
})

app.post('/api/products' , (req : Request , res : Response) => {
    try{

        const {name , price} = req.body ;
        const productName = name ? name : "test" ; 
        const productPrice = price ? price : 0 ;

        return res.status(201).json({
            id : Math.floor(Math.random() * 1000) , 
            name : productName , 
            price : productPrice
        })

    }catch(error){
        return res.status(500).json({message : 'Internal serer error'})
    } finally {
        return res.status(201).json({message : 'Product created successfully'})
    }

})

app.listen(8000 , ()=> {
    console.log('Product service is running on port 8000') ;
})