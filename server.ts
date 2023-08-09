import express, { json } from 'express';

import routes from './src/routes';
import errorHandler from './src/middleware/error-handler';

const app = express();
const port = process.env.PORT || 3000;

// Enable JSON parsing for incoming requests
app.use(json());

// Register routes
app.use('/api', routes);

// Error handling middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
