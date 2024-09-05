# Frontend

## Project Overview

- **Project Name:** Fuel Duel Tracker
- **Description:** FIFA Duel tracker is the simple website made to enable rivals, liam and Njox to record their progress about FIFA online and offline.
- **Technologies Used:**: Technologies used into the project, for frontend I have used `react.js` for building user interface, and on backend I have used `node.js` for building the backend of the website although there is an alternative option which is golang for building APIs.
- **Version:** The current version for the project is `1.0.0`, there are only major updates no minor updates and no patches at all.

### **2. Getting Started**

- **Prerequisites:** If you need to get started with this project you need to have node installed into your machine,visit [node.js website to install](https://nodejs.org/en).
- **Installation:**

  - **Clone the Repository:**

    ```sh
    # clone repo locally into your machine
    git clone https://github.com/Njoxpy/FIFA-Duel-Tracker
    ```

  - **Install Dependencies:** To install dependencies for your project, navigate into the folder which you want to installl dependencies, for frontend use the following command.

    ```sh
    # nvaigate into frontend folder
    cd frontend

    # install dependencies
    npm install
    ```

    - installing backend packages for the project is the same.

    ```sh
    # nvaigate into frontend folder
    cd backend

    # install dependencies
    npm install
    ```

- **Running the Project:**

  - **Development Server:** To start development server for the frontend part of the website make sure you are into the frontend folder, start the server using the following command.

    ```sh
    # navigate into frontend folder
    cd frontend

    #start server, project will open at port http://localhost:3000/
    npm start
    ```

  - To start backend server is the same but there are slighly difference you have to navigate into the backend folder then run the command.

    ```sh
    cd backend

    # starts server
    npm run server
    ```

  - **Production Build:** To build the project for production mode use the following command.

    ```sh
    # build project
    npm run build
    ```

- **Configuration:** Environment variables used into the project is on backend of the project which is the port and database connection url.

### **3. Project Structure**

- **Folder Structure:** The project structure contains the following folders, `backend`,`frontend`, `data`, `doc`.

  | folder   | explanation                                                                                                                                                         |
  | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | backend  | Contains the list of all files for setting the backend folder for the project such as `controllers`, `middleware`, `node_modules`, `package.json`                   |
  | frontend | contains the list of all files for working with the frontend part of the website for setting the user interface.                                                    |
  | doc      | The doc folder is the folder which contains trhe documentation about the project on frontend part and the backend part of the website                               |
  | data     | contains sample `json` files which will be used for testing the website contains json files for testing APIs for integrating into the frontend part of the website. |
  |          |                                                                                                                                                                     |

- **Frontend Structure:**

  - **Pages:** Pages which are available into the pages folder are [AddResultsPage.jsx](../frontend/src/pages/AddResultsPage.jsx), the add results page contains code for users rivals to fill their match results such as score, winner, and user can submit the results of their match, validation has been added as well but note another thing we have into the project is when user submit their results data are sent into the databse for the specific user.
  - The [hello file](../frontend/src/pages/Hello.jsx) contains code for setting the hello section of the website.

  - **Components:** Component used into the page is the footer.
  - **Styles:** Describe the styling approach (e.g., CSS, SASS) and where styles are located.

## Data Flow

```md
[Browser (React App)] <-- API Call (Fetch) --> [Backend (API)] <---> [Database]
↓ ↓ ↓
Render Data Serve JSON Data Fetch Data from
(from API) Database
```
