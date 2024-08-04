export default (req, res) => {
  // Determine the request method
  const { method } = req;

  switch (method) {
    case 'GET':
      // Handle GET request
      res.status(200).json({ message: 'This is a GET request' });
      break;
    case 'POST':
      // Handle POST request
      const { body } = req;
      res.status(201).json({ message: 'This is a POST request', data: body });
      break;
    case 'PUT':
      // Handle PUT request
      res.status(200).json({ message: 'This is a PUT request' });
      break;
    case 'DELETE':
      // Handle DELETE request
      res.status(200).json({ message: 'This is a DELETE request' });
      break;
    default:
      // Handle other methods or send a 405 Method Not Allowed
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
