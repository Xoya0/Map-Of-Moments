# Map Of Moments

An interactive web application that allows users to explore and share locations on a 3D globe. Built with React and Spring Boot.

## Features

- Interactive 3D globe visualization
- User authentication and authorization
- Location sharing and exploration
- Modern UI with smooth transitions
- Responsive design

## Tech Stack

### Frontend
- React
- Three.js (3D visualization)
- Tailwind CSS
- React Router
- Axios

### Backend
- Spring Boot
- Java
- Maven
- JWT Authentication

## Prerequisites

- Node.js (v14 or higher)
- Java JDK (v11 or higher)
- Maven
- Git

## Getting Started

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Build the project:
   ```bash
   mvn clean install
   ```

3. Run the application:
   ```bash
   mvn spring-boot:run
   ```

## Environment Variables

### Frontend
Create a `.env` file in the frontend directory:
```
VITE_API_URL=http://localhost:8080
```

### Backend
Create `application.properties` in `backend/src/main/resources`:
```properties
server.port=8080
spring.datasource.url=jdbc:postgresql://localhost:5432/mapofmoments
spring.datasource.username=your_username
spring.datasource.password=your_password
```

## Project Structure

See [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) for detailed information about the project architecture.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Three.js for 3D visualization
- Spring Boot team for the amazing framework
- React team for the frontend library 