const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb+srv://koushik:koushik@cluster0.5m6av4p.mongodb.net/AMS?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const valueSchema = new mongoose.Schema({
  value: String,
});

const Value = mongoose.model('Value', valueSchema);

app.use(bodyParser.json());

app.post('/api/values', async (req, res) => {
  const { value } = req.body;

  const newValue = new Value({ value });

  try {
    await newValue.save();
    res.json({ success: true });
  } catch (error) {
    console.error('There was an error saving the value:', error);
    res.json({ success: false });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
