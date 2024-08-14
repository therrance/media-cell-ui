# Media Cell API Client (React UI)

This is a React-based web UI client for interacting with the Media Cell API. The UI allows users to look up actions based on codewords and find codewords associated with a specific action ID.

## Features

- **Lookup Action by Codeword**: Input a codeword to retrieve the associated action ID.
- **Lookup Codewords by Action ID**: Input an action ID to retrieve the associated codewords.
- **Responsive Design**: The UI is built with Tailwind CSS for a modern and responsive design.

## Requirements

- **Node.js**: Ensure you have Node.js and npm installed on your system.

## Local Development

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/media-cell-ui.git
   cd media-cell-ui
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

To start the application in development mode:

```bash
npm start
```

This will start the development server and open the application in your default web browser at `http://localhost:3000`.

### Running Tests

To run the tests for the React components:

```bash
npm test
```

This will execute the tests in watch mode, allowing you to see real-time results as you make changes.

### Building for Production

To create a production build of the application:

```bash
npm run build
```

This will create an optimized build of your application in the `build` directory, ready for deployment.

### Deployment

You can deploy the contents of the `build` directory to any static site hosting service, such as:

- **Netlify**
- **Vercel**
- **GitHub Pages**
- **Firebase Hosting**

Simply follow the hosting provider's instructions for deploying a static site.

## Built With

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Axios**: A promise-based HTTP client for making API requests.
- **Jest & React Testing Library**: For testing React components.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.
