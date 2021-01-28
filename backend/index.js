const express = require('express'),
	app = express(),
	server = require('http').Server(app),
	path = require("path"),
	blogs = require('./Routes/blogsRoutes');
	bodyParser = require('body-parser'),
	cors = require('cors'),
	swaggerJSDoc = require('swagger-jsdoc'),
	swaggerUi = require('swagger-ui-express');

app.use(cors());
app.disable("X-Powered-By")
app.use(bodyParser.json({ limit: '10mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));


const swaggerDefinition = {
	info: {
		title: 'API Docs',
		version: '1.0.0',
		description: 'End points to test constious routes'
	},
	host: process.env.STAGING_SWAGGER_URL,
	basePath: '/',
	"securityDefinitions": {
		"api_key": {
			"type": "apiKey",
			"name": "authorization",
			"in": "headers"
		}
	},
	"security": [
		{
			"api_key": []
		}
	]
}

const options = {
	swaggerDefinition,
	apis: ['./Routes/*.js']
}

app.get('/swagger.json', function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(swaggerSpec)
})

const swaggerSpec = swaggerJSDoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, noauth, Authorization, authorization");
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next()
});

app.use(express.static(path.join(__dirname, '/public/')));

app.use('/api', blogs);

const PORT = 5656
server.listen(PORT, function (err) {
	console.log('Server running on port ', PORT);
})
