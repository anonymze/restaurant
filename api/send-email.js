

export const GET = async (request) => {
	console.log(request);
	console.log(request.method);
	try {
		// Log for debugging
		console.log('Request received');
		
		// Return proper JSON response
		return new Response(JSON.stringify({ message: 'Success' }), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (error) {
		// Log error for debugging
		console.error('Error in GET request:', error);
		
		// Return proper error response
		return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
			status: 500,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
}

export const POST = async (request) => {
	console.log(request);
	console.log(request.method);
	try {
		// Log for debugging
		console.log('Request received');
		
		// Return proper JSON response
		return new Response(JSON.stringify({ message: 'Success' }), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (error) {
		// Log error for debugging
		console.error('Error in GET request:', error);
		
		// Return proper error response
		return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
			status: 500,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
}
