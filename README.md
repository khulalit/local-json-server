# local-json-server
This project is an example of a fake JSON server built in Node.js, designed for testing front-end applications. It allows developers to define mock API endpoints and their responses using a simple JSON configuration file.

# Usage: 
1.Install Dependencies:Before running the application, make sure you have Node.js installed. Then, install the required dependencies by running:
```npm install```


2. Define Mock API Configuration: Define your mock API endpoints and their responses in the `mock-api.json` file. Each endpoint configuration should include the HTTP method (`GET`, `POST`, etc.), the route path, and the mock response data.

Example `mock-api.json`:
```
[
  {
    "method": "GET",
    "path": "/api/users",
    "response": [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com"
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane@example.com"
      }
    ]
  },
  {
    "method": "POST",
    "path": "/api/users",
    "response": {
      "message": "User created successfully"
    }
  }
] ```

3. Start the server :
```npm run start ```

# File Structure
- index.js: Entry point of the application, responsible for loading mock API configurations and starting the server.
- fileHandler.js: Module to handle file operations, such as reading JSON data from a file.
- routeGenerator.js: Module to dynamically generate mock API routes based on the configuration.
- mock-api.json: JSON file containing the mock API configurations.
# Dependencies
- express: Fast, unopinionated, minimalist web framework for Node.js.
- body-parser: Middleware to parse incoming request bodies in a middleware before your handlers.

#License
This project is licensed under the MIT License - see the LICENSE file for details.

Author
Lalit
