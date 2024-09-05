const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/dentistClinic', { useNewUrlParser: true, useUnifiedTopology: true });

const appointmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: String,
  time: String,
  reason: String
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

app.post('/book', async (req, res) => {
  const appointment = new Appointment(req.body);
  try {
    await appointment.save();
    res.status(200).send({ message: 'Appointment booked successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Failed to book appointment', error });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
