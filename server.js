import Fastify from "fastify";

const fastify = Fastify({ logger: true });
fastify.register(import('fastify-swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: { title: 'fastify-api' },
    },
});
fastify.register(import('./routes/items'));

const PORT = 5000;

const start = async () => {
    try {
        await fastify.listen(PORT);
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
}

start();
