import Fastify from 'fastify';

import { clerkPlugin , getAuth  } from '@clerk/fastify';

const fastify = Fastify() ;
fastify.register(clerkPlugin);




fastify.get('/health', async (request, reply) => {
    return reply.status(200).send({
    status : "ok" , 
    uptime : process.uptime() , 
    timestamp : Date.now()
  })
})

fastify.get('/test' , async(request , reply)=> {
try {

  const {isAuthenticated , userId} = getAuth(request) ;

  if(!isAuthenticated || !userId) { 
    return reply.status(401).send({
      message : "You are not logged in !"
    })
  }

}catch(error)  {
  return reply.status(500).send({error : "Internal Server Error"})
}

return reply.send({
    message : "Order service Authenticated"
})
})

const start = async () => {
  try {
    await fastify.listen({ port: 8001 })
    console.log('Order service is running on port 8001')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()