const HttpClient = require("./HttpClient");

/*
|--------------------------------------------------------------------
| Utilization:
| Fetch a list of users using the abstracted GET method
| API Endpoint - https://jsonplaceholder.typicode.com/users
|---------------------------------------------------------------------
|
*/

//GET

const allUsers = async () => {
  try {
    const requestOptions = {
      endpointUrl: "https://jsonplaceholder.typicode.com/users",
      headerOptions: {
        headers: {
          "Content-Type": "application/json",
        },
      },
    };

    const { status, apiResponse } = await HttpClient.get(requestOptions);
    // return apiResponse

    if (status !== 200) {
      return {
        status,
        message: "Something went wrong",
      };
    }

    return {
      status,
      message: "Users listed successfully",
      results: apiResponse,
    };
  } catch (error) {
    console.log(error);
  }
};

allUsers().then((response) => {
  console.log(response);
});

//Promises

// POST

const user1 = {
  id: 11, // in this case the id is automatically generated as 11, but will send this to keep the structure of the response the same
  name: "Alice Franks",
  username: "alicefranks",
  email: "alice@mail.com",
  address: {
    street: "123 Main St",
    suite: "suite 67",
    city: "London",
    zipcode: "12345",
    geo: { lat: "12.34", lng: "56.78" },
  },
  phone: "123-456-7890",
  website: "alicefranks.com",
  company: {
    name: "Alice Inc.",
    catchPhrase: "Alice-powered solutions",
    bs: "delivering solutions",
  },
};

const addUser = async (user) => {
  try {
    const requestOptions = {
      endpointUrl: "https://jsonplaceholder.typicode.com/users",
      requestBody: user,
      headerOptions: {
        headers: {
          "Content-Type": "application/json",
        },
      },
    };
    const { status, apiResponse } = await HttpClient.post(requestOptions);

    if (status != 201) {
      return {
        status,
        message: "Something went wrong",
      };
    }
    return {
      status,
      message: "User added successfully",
      result: apiResponse,
    };
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};

addUser(user1).then((response) => {
  console.log(response);
  console.log(JSON.stringify(response, null, 2));
});

//PUT
const userId = 10;
const user2 = {
  id: 10,
  name: "Alice Franks",
  username: "alicefranks",
  email: "alice@mail.com",
  address: {
    street: "123 Main St",
    suite: "Suite 67",
    city: "Paris",
    zipcode: "12345",
    geo: { lat: "12.34", lng: "56.78" },
  },
  phone: "123-456-7890",
  website: "alicefranks.com",
  company: {
    name: "Alice Inc.",
    catchPhrase: "Alice-powered solutions",
    bs: "delivering solutions",
  },
};

const updateUser = async (user, id) => {
  try {
    const requestOptions = {
      endpointUrl: `https://jsonplaceholder.typicode.com/users/${id}`,
      requestBody: user,
      headerOptions: {
        headers: {
          "Content-Type": "application/json",
        },
      },
    };
    const { status, apiResponse } = await HttpClient.put(requestOptions);

    if (status !== 200) {
      return {
        status,
        message: "Something went wrong",
      };
    }
    return {
      status,
      message: "User updated successfully",
      result: apiResponse,
    };
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};

updateUser(user2, userId).then((response) => {
  console.log(response);
  console.log(JSON.stringify(response, null, 2));
});

//PATCH

const user3 = {
  name: "Tim Gates",
};

const patchUser = async (user, id) => {
  try {
    const requestOptions = {
      endpointUrl: `https://jsonplaceholder.typicode.com/users/${id}`,
      requestBody: user,
      headerOptions: {
        headers: {
          "Content-Type": "application/json",
        },
      },
    };
    const { status, apiResponse } = await HttpClient.patch(requestOptions);

    if (status !== 200) {
      return {
        status,
        message: "Something went wrong",
      };
    }
    return {
      status,
      message: "User patched successfully",
      result: apiResponse,
    };
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

patchUser(user3, userId).then((response) => {
  console.log(response);
  console.log(JSON.stringify(response, null, 2));
});

// DELETE

const deleteUser = async (id) => {
  try {
    const requestOptions = {
      endpointUrl: `https://jsonplaceholder.typicode.com/users/${id}`,
      headerOptions: {
        headers: {
          "Content-Type": "application/json",
        },
      },
    };
    const { status, apiResponse } = await HttpClient.delete(requestOptions);

    if (status !== 200) {
      return {
        status,
        message: "Something went wrong",
      };
    }
    return {
      status,
      message: "User deleted successfully",
      result: apiResponse, // this is an empty object as response.data / apiResponse is undefined.
    };
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

deleteUser(userId).then((response) => {
  console.log(response);
});

// curious why the order of execution varies each time for delete - are all functions executed simultaneously and only returned when the promise is resolved??
