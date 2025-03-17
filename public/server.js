const express = require('express');
const path = require('path'); // ✅ Use Node.js built-in path module

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => { // ✅ Fixed missing comma
  console.log(`Server running on port ${PORT}`);
});
