// Include libraries
const express = require( 'express' )
const app = express(  )

// Load static files
app.use( '/resources', express.static( __dirname + '/static' ) )


// Set the engine to pug and the view folder to the one in this location
app.set( 'view engine', 'pug' )
app.set( 'views', __dirname + '/views' )

// Debug route pingpong
app.get( '/ping', ( req, res ) => {
	res.send( 'pong' )
})

// Create a main page
app.get( '/', ( req, res ) => {
	res.render( 'home' )
} )


// Start the webserver on port 8000
app.listen( 8000, (  ) => {
	console.log( 'We are up and running' )
} )