// path: ./config/plugins.ts

export default {
  //
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 10,
      amountLimit: 200,
      apolloServer: {
        tracing: false,
      },
    },
  },
};
