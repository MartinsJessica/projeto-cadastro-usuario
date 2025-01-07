# User Registration Project

This project is a user registration application consisting of a front-end and a back-end.

## Technologies Used

- **Front-end**: React, Vite, Axios, CSS
- **Back-end**: Express, Prisma, MongoDB
- **Development Tools**: ESLint, EditorConfig, Jest

## Project Structure

- **Front-end**: React application configured with Vite.
- **Back-end**: REST API built with Express and Prisma.
- **Database**: MongoDB hosted on MongoDB Atlas.

## Steps to Replicate the Project

### Step 1: Clone the Repository

First, clone the project repository to your local machine:
```bash
git clone <REPOSITORY_URL>
cd <REPOSITORY_NAME>
```

### Step 2: Create an Account on MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create an account.
2. Create a new cluster.
3. In the cluster, create a database named `Users`.
4. Create a user with a username and password of your choice.
5. Copy the connection URL provided by MongoDB Atlas and replace `<username>` and `<password>` with the user credentials you created.

### Step 3: Configure Environment Variables

In the 

back-end

 directory, create a `.env` file and add the database connection URL:
```properties
DATABASE_URL="mongodb+srv://<username>:<password>@<cluster-url>/Users?retryWrites=true&w=majority&appName=Users"
```

### Step 4: Install Dependencies

Install the dependencies for both the `front-end` and `back-end`:
```bash
# In the front-end directory
cd front-end
npm install

# In the back-end directory
cd ../back-end
npm install
```

### Step 5: Configure Prisma

In the `back-end` directory, configure Prisma to connect to the MongoDB database:
```bash
npx prisma generate
```

### Step 6: Run the Project

Start the development server for both the `front-end` and `back-end`:
```bash
# In the front-end directory
cd front-end
npm run dev

# In the back-end directory
cd ../back-end
npm run dev
```

### Database Communication

The back-end uses Prisma to communicate with the MongoDB database. The connection URL is specified in the `.env` file. Prisma manages the CRUD (Create, Read, Update, Delete) operations in the database.

### Workflow

1. The user accesses the front-end application and fills out the registration form.
2. Upon submitting the form, a POST request is made to the back-end to create a new user.
3. The back-end saves the user in the MongoDB database and returns the updated list of users.
4. The list of users is displayed on the front-end.

## License

This project is licensed under the MIT License.
```
Save this content in a file named `README.md` in the root directory of your project.