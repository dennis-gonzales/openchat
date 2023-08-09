import { Request, Response, NextFunction } from 'express';

function errorHandler(
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Log the error details (optionally log to a file or external service)
  console.error(error);

  // Respond with a generic error message
  response
    .status(500)
    .json({ error: 'An error occurred while processing your request.' });
}

export default errorHandler;
