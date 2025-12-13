import Fastify from 'fastify';

const fastify = Fastify() ;

fastify.get('/', async (request, reply) => {
  return reply.send('Hello from Order Service') ;
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