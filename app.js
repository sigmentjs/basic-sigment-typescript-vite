import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';
dotenv.config();

console.log("Environment is :", process.env.NODE_ENV);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Determine the environment
const Env = process.env.NODE_ENV;

// Serve static files based on the environment
if (Env==="prod" || Env==="production") {
  // Production: Serve files from the 'dist' folder
  app.use(express.static(join(__dirname, 'dist')));
  console.log('Running in production mode. Serving files from /dist');
}
else if (Env==="dev" || Env==="development") {
  // Dev: Serve files from the 'distdev' folder
  app.use(express.static(join(__dirname, 'distdev')));
  console.log('Running in production mode. Serving files from /distdev');
}
else {
  // Development: Serve files from the root and 'src' folder
  app.use('/modules', express.static(join(__dirname, 'node_modules')));
  app.use(express.static(__dirname)); // Serve index.html from the root
  app.use('/src', express.static(join(__dirname, 'src'))); // Serve files from src/
  console.log('Running in development mode. Serving files from / and /src');
}

// Dynamic route handler for all routes (SPAs)
app.get('*', (req, res) => {
  if (Env==="prod" || Env==="production") {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
  }
  else if (Env==="dev" || Env==="development") {
    res.sendFile(join(__dirname, 'distdev', 'index.html'));
  }
  else {
    res.sendFile(join(__dirname, 'index.html')); // Serve index.html from the root
  }
});

let port=3003;
if (Env==="prod" || Env==="production") {
   port = 3001;
}
else if (Env==="dev" || Env==="development") {
   port = 3000;
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});