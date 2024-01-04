const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const { city } = event.queryStringParameters;
  const apiKey = process.env.RAPIDAPI_KEY;
  const url = `https://open-weather13.p.rapidapi.com/city/${city}`;
  
  const options = {
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' })
    };
  }
};
