**My E-Commerce Backend**



<img width="714" alt="Ekran Resmi 2024-08-19 12 54 15" src="https://github.com/user-attachments/assets/78481ebb-515c-49ec-b038-bbc30e25e370">

**Description**



This project is the backend for the My E-Commerce web application. It is written in TypeScript and runs on Node.js, providing RESTful APIs and utilizing MongoDB for data storage.

Getting Started



**Prerequisites**
Node.js (version 14.x or newer)



MongoDB (for the database server)



**Installation**
Navigate to the Project Directory


cd my-ecommerce-backend


**Install Dependencies**



npm install



**Compile TypeScript Code**



npx tsc



**Start the Server**



npx ts-node src/app.ts




**Project Structure**



app.ts: The main entry point for the application.



routes/: Contains route handlers.



controllers/: Contains business logic for handling requests.



models/: Defines the MongoDB schemas and models.




<img width="714" alt="Ekran Resmi 2024-08-19 12 54 51" src="https://github.com/user-attachments/assets/8207164b-c97e-41be-aa9e-e90d61342287">




**API Endpoints**
GET /api/products: Retrieve all products.


GET /api/products/:id: Retrieve a specific product by ID.



POST /api/cart: Add an item to the cart.



GET /api/cart: Retrieve all items in the cart.



**Configuration**



Environment variables are used for configuration.



Create a .env file in the root directory and include the necessary variables:


MONGO_URI=your_mongodb_uri


PORT=your_preferred_port



**Testing**



Add tests in the tests/ directory.



Use tools like Jest or Mocha for running tests.



**Contributing**



Fork the repository.



Create a feature branch.



Commit your changes.




Push to the branch.



Create a Pull Request.



License



This project is licensed under the MIT License. See the LICENSE file for details.

