const swaggerUi = require('swagger-ui-express');
const swaggereJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        info: {
            title: '테스트 API',
            version: '1.0.1',
            description: '테스트 API with express',
        },
        host: 'smilemax.iptime.org:3200',
        basePath: '/'
    },
    apis: ['./test/*.js','./rt_json/*.js']
};

const specs = swaggereJsdoc(options);

module.exports = {
    swaggerUi,
    specs
};