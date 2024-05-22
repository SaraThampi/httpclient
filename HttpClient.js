const axios = require('axios')

/*
|--------------------------------------------------------------------
| Create an abstraction on the Axios HTTP Package to expose a
| consistent API for the GET method which returns the requested
| payload and the response status code.
|
| Correct any errors in the code below and complete the implementation
|---------------------------------------------------------------------
|
*/

class HttpClient {

  static async get(requestOptions) {
    const { endpointUrl, headerOptions } = requestOptions;

    const response = await axios.get(endpointUrl, headerOptions)

    return {
      status: response.status,
      apiResponse: response.data
    }
  }
  
  static async post(requestOptions) {
    const { endpointUrl, requestBody, headerOptions } = requestOptions;
    const response = await axios.post(endpointUrl, requestBody, headerOptions)
    return {
      status: response.status,
      apiResponse: response.data
    }
  }
  
  static async put(requestOptions) {
    const { endpointUrl, requestBody, headerOptions } = requestOptions;
    const response = await axios.put(endpointUrl, requestBody, headerOptions)
    return {
      status: response.status,
      apiResponse: response.data
    }
  }

  static async patch(requestOptions) {
    const { endpointUrl, requestBody, headerOptions } = requestOptions;
    const response = await axios.patch(endpointUrl, requestBody, headerOptions)
    return {
      status: response.status,
      apiResponse: response.data
    }
  }

  static async delete(requestOptions) {
    const { endpointUrl, headerOptions } = requestOptions;
    const response = await axios.delete(endpointUrl, headerOptions)
    return {
      status: response.status,
      apiResponse: response.data
    }
  }
}

module.exports = HttpClient;

