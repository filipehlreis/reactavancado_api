"use strict";
// path: ./config/plugins.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
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
