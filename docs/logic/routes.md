
### **Route Structure Guide**

#### **1. Match Management Routes**  
Manage match records and related data.  

- **GET /matches**  
  Retrieve all matches or filter by specific criteria (e.g., date range, player).  

- **POST /matches**  
  Add a new match result, including players, scores, and date.  

- **PUT /matches/:id**  
  Update a specific match record.  

- **DELETE /matches/:id**  
  Delete a specific match record.  

---

#### **2. Player Management Routes**  
Handle player profiles and statistics.  

- **GET /players**  
  Fetch a list of players with their statistics (e.g., matches played, goals scored).  

- **GET /players/:id**  
  Fetch detailed statistics for a specific player.  

- **POST /players**  
  Add a new player to the system.  

- **PUT /players/:id**  
  Update a player's profile or details.  

---

#### **3. League Table Routes**  
Access the league standings based on match results.  

- **GET /league**  
  Retrieve the league table with rankings, points, and goal difference.  

---

#### **4. Authentication and Profiles Routes**  
Allow users to manage accounts and log in.  

- **POST /auth/signup**  
  Create a new user account with username, email, and password.  

- **POST /auth/login**  
  Log in a user and return an authentication token.  

- **GET /auth/profile**  
  Retrieve the current user's profile using their authentication token.  

- **PUT /auth/profile**  
  Allow the user to update their profile details (e.g., username, email).  

---

### **Organizing Routes**

1. **Modular Approach**:  
   - Group routes by feature in separate files (e.g., `matches.js`, `players.js`, `auth.js`).  
   - Use a router instance for each module and combine them in a main `routes` directory.

2. **Base URL Structure**:  
   - Use a base URL like `/api/v1` for versioning (e.g., `/api/v1/matches`, `/api/v1/players`).

3. **Middleware**:  
   - Protect sensitive routes (e.g., `/matches`, `/players`) using authentication middleware.  

---
