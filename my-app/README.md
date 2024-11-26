# Getting Started with Create React App

# Role-Based Access Control (RBAC) Management System

This project is a web-based application for managing **users**, **roles**, and **permissions** using a Role-Based Access Control (RBAC) model. The app provides an intuitive and responsive interface for administrators to handle user roles and permissions efficiently.

---

## **Features**

### **User Management**
- View a list of all users.
- Add, edit, and delete users.
- Assign roles to users.
- Manage user statuses (e.g., Active/Inactive).

### **Role Management**
- View a list of all roles.
- Create, edit, and delete roles.
- Assign and manage permissions for roles.

### **Dynamic Permissions**
- Toggle specific permissions for each role.
- Permissions include common actions like Read, Write, and Delete.

### **Additional Features**
- Intuitive UI with responsive design.
- Mock API calls to simulate backend CRUD operations.
- Data persistence across pages without reloading.

---

## **Technologies Used**

- **Frontend**: React.js (with React Router)
- **State Management**: React Context API
- **CSS**: Custom styles for responsive design
- **Tooling**: Vite.js for fast development builds
- **Optional**: LocalStorage for persisting data across sessions

---

## **Setup Instructions**

### **Prerequisites**
Make sure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn package manager

### **Steps**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/rbac-management-system.git
   ```
   
2. Navigate to the project directory:

   ```bash
   cd myy-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```
   
4. Install mock service worker (MSW) dependencies:

   ```bash
   npm install msw --save-dev
   ```

5. Start the development server:

   ```bash
   npm start
   ```

6. Open your browser and navigate to  [http://localhost:3000](http://localhost:3000).

The page will reload when you make changes.\
You may also see any lint errors in the console.
