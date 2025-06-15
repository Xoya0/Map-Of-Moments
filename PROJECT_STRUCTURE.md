# Map Of Moments - Project Structure Documentation

## Overview
Map Of Moments is a web application that allows users to explore and share locations on an interactive 3D globe. The project is built using React for the frontend and Spring Boot for the backend, following a modern microservices architecture.

## Project Structure
```
Map Of Moments/
├── frontend/           # React frontend application
├── backend/           # Spring Boot backend application
├── .vscode/          # VS Code configuration
└── node_modules/     # Frontend dependencies
```

## Frontend Architecture

### Core Components

1. **App Structure**
   - `App.jsx`: The root component that sets up the application's providers and routing
   - Uses React Router for navigation
   - Implements context providers for authentication and navigation state

2. **Context Management**
   - `AuthContext.jsx`: Manages user authentication state
     - Handles login, signup, and logout functionality
     - Maintains user session state
     - Provides authentication status to components
   
   - `NavigationContext.jsx`: Manages page transition states
     - Controls loading indicators during navigation
     - Ensures smooth transitions between pages
     - Implements minimum loading time for better UX

3. **Key Components**
   - `EarthScene.jsx`: 3D globe visualization
     - Uses Three.js (via @react-three/fiber)
     - Implements interactive 3D earth model
     - Handles camera controls and lighting
   
   - `PageLoader.jsx`: Loading indicator
     - Shows during page transitions
     - Implements smooth animations
     - Uses backdrop blur for modern UI

4. **Routing**
   - `routes.jsx`: Defines application routes
     - Implements protected routes
     - Handles authentication redirects
     - Manages page navigation

### API Integration

1. **API Configuration**
   - Multiple axios instances for different purposes:
     - `api/axiosConfig.js`: Main API configuration
     - `api/axios.js`: API instance with credentials
     - `utils/axios.js`: Utility axios instance

2. **Authentication Flow**
   - JWT-based authentication
   - Credential management
   - Protected route handling
   - Automatic token refresh

### Styling

1. **CSS Architecture**
   - Tailwind CSS for utility-first styling
   - Custom CSS modules for specific components
   - Responsive design implementation
   - Modern UI with blur effects and animations

2. **Theme**
   - Space-themed background
   - Modern glassmorphism effects
   - Consistent color scheme
   - Responsive layouts

## Backend Architecture

### Technology Stack
- Spring Boot Framework
- Maven for dependency management
- Java-based implementation
- RESTful API architecture

### Project Structure
```
backend/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── mapofmoments/
│   │   │           ├── controllers/
│   │   │           ├── services/
│   │   │           ├── repositories/
│   │   │           ├── models/
│   │   │           └── config/
│   │   └── resources/
│   │       ├── application.properties
│   │       └── static/
│   └── test/
├── pom.xml
└── mvnw
```

### Core Components

1. **Controllers**
   - REST API endpoints
   - Request/Response handling
   - Input validation
   - Error handling

2. **Services**
   - Business logic implementation
   - Data processing
   - External service integration
   - Transaction management

3. **Repositories**
   - Data access layer
   - Database operations
   - Query optimization
   - Data persistence

4. **Models**
   - Entity definitions
   - Data transfer objects (DTOs)
   - Validation annotations
   - Relationship mappings

5. **Configuration**
   - Security settings
   - Database configuration
   - CORS policies
   - Environment properties

### Security Implementation

1. **Authentication**
   - JWT token generation and validation
   - Password encryption
   - Session management
   - Role-based access control

2. **API Security**
   - CORS configuration
   - Request validation
   - Rate limiting
   - Input sanitization

## Component Connections

1. **Authentication Flow**
   ```
   Frontend (React)                    Backend (Spring Boot)
   ├── Login/Signup Forms  ────────>  ├── Auth Controller
   ├── Protected Routes    <────────  ├── JWT Validation
   └── API Calls           <────────> └── Security Config
   ```

2. **Navigation Flow**
   ```
   NavigationContext
   ├── Page Transitions
   ├── Loading States
   └── Route Changes
   ```

3. **3D Globe Integration**
   ```
   EarthScene
   ├── Three.js Setup
   ├── Camera Controls
   └── Texture Loading
   ```

## Data Flow

1. **User Authentication**
   - Frontend → Backend API → Database
   - Token Management → Local Storage → API Headers

2. **Page Navigation**
   - Route Change → NavigationContext → PageLoader → New Route

3. **3D Globe Interaction**
   - User Input → OrbitControls → Earth Model → Visual Update

## Development Setup

1. **Frontend**
   - React with Vite
   - Tailwind CSS
   - Three.js for 3D
   - React Router for navigation

2. **Backend**
   - Spring Boot
   - Maven
   - Java Development Kit (JDK)
   - IDE (VS Code/IntelliJ IDEA)

## Best Practices Implemented

1. **Code Organization**
   - Context-based state management (Frontend)
   - MVC architecture (Backend)
   - Clean routing structure
   - Separation of concerns

2. **Performance**
   - Lazy loading
   - Optimized 3D rendering
   - Efficient state management
   - Database query optimization

3. **User Experience**
   - Loading indicators
   - Smooth animations
   - Responsive design
   - Intuitive navigation

## Future Considerations

1. **Potential Improvements**
   - State management optimization
   - Performance monitoring
   - Enhanced error handling
   - Additional features

2. **Scalability**
   - Component reusability
   - API optimization
   - State management scaling
   - Performance optimization

This documentation provides a high-level overview of the project's architecture and connections. For specific implementation details, refer to the individual component files and their associated documentation. 