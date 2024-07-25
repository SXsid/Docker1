# Basic Dockerized Application

This repository contains a basic Dockerized application that can be used for testing purposes. Follow the instructions below to set up and test the application.

## To Test

### Prerequisites
- Docker installed on your machine
- A PostgreSQL database URL

### Steps

1. **Pull the Docker image:**

    ```sh
    docker pull shekharx/basic:latest
    ```

2. **Run the Docker container:**

    ```sh
    docker run -d -e DATABASE_URL="put your postgres URL here" -p 3000:3000 shekharx/basic
    ```

### Testing the Application

1. **GET Route:**

    Open your web browser or use a tool like `curl` to test the GET route:

    ```sh
    curl http://localhost:3000
    ```

2. **POST Route:**

    Use Postman or a similar tool to send a POST request with a unique email and name:

    - **URL:** `http://localhost:3000`
    - **Method:** `POST`

    - **Body:**

    ```json
    {
        "email": "unique-email@example.com",
        "name": "Your Name"
    }
    ```

---


