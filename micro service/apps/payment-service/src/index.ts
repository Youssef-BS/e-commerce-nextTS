import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { clerkMiddleware , getAuth } from '@hono/clerk-auth'

const app = new Hono()

app.get("*" , clerkMiddleware())

app.get('/health', (c) => {
  return c.json({
    status : "ok" , 
    uptime : process.uptime() , 
    timestamp : Date.now()
  })
})


const start = async () => {
  try {
serve({
  fetch: app.fetch,
  port: 8002
}, (info) => {
  console.log(`Payment service is running in port 8002`)
})
  }catch(error) {
    console.log(error)
    process.exit(1)
  }
}

app.get('/test' , async(c)=> {
  
  try {
    const auth = getAuth(c) ;
    const userId = auth?.userId ;
    
    if(!userId) {
      return c.json({
        message : "You are not logged in !"
      } , 401)
    }
        


  }catch(error) {
    return c.json({error : "Internal Server Error"} , 500)
  }
  return c.json({
    message : "Payment service Authenticated"
  })
})

start() ;


