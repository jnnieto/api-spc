export const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "SPC API",
            version: '1.0.0',
            description: "API para el proyecto SPC"
        },
        servers: [
            {
                url: "htttp://localhost:8080/api",
                description: 'Entorno de desarrollo de la API'
            },
            {
                url: 'https://api-proyecto-spc.herokuapp.com/api/',
                description: 'Entorno de producción de la API'
            }
        ]
    },
    apis: [ "./src/routes/*.ts" ]
}
