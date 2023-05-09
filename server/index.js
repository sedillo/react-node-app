const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const port = process.env.PORT || 3001;

const db = mysql.createPool({
  host: 'db.local', // the host name MYSQL_DATABASE: node_mysql
  user: 'root', // database user MYSQL_USER: MYSQL_USER
  password: 'root', // database user password MYSQL_PASSWORD: MYSQL_PASSWORD
  database: 'healthcare' // database name MYSQL_HOST_IP: mysql_db
})


const app = express();

app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('It works!')
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'up',
    timestamp: new Date().toISOString(),
  });
});

//get all of the books in the database
app.get('/doctors', (req, res) => {
  const SelectQuery = " SELECT * FROM doctors";
  db.query(SelectQuery, (err, result) => {
    res.send(result)
  })
});

// Get doctor by ID
app.get('/doctors/:doctor_id', (req, res) => {
  const doctorId = req.params.doctor_id;
  const selectQuery = 'SELECT * FROM doctors WHERE id = ?';
  
  db.query(selectQuery, [doctorId], (err, result) => {
    if (err) {
      res.status(500).send('Error in database operation');
    } else if (result.length > 0) {
      res.send(result[0]);
    } else {
      res.status(404).send('Doctor not found');
    }
  });
});

// List appointments for a doctor
app.get('/doctors/:doctor_id/appointments', (req, res) => {
  const doctorId = req.params.doctor_id;
  const selectQuery = 'SELECT * FROM appointments WHERE doctor_id = ?';
  
  db.query(selectQuery, [doctorId], (err, result) => {
    if (err) {
      res.status(500).send('Error in database operation');
    } else {
      res.send(result);
    }
  });
});

// Get appointment by ID
app.get('/appointments/:appointment_id', (req, res) => {
  const appointmentId =  req.params.appointment_id;
  const selectQuery = 'SELECT * FROM appointments WHERE id = ?';
  
  db.query(selectQuery, [appointmentId], (err, result) => {
    if (err) {
      res.status(500).send('Error in database operation');
    } else if (result.length > 0) {
      res.send(result[0]);
    } else {
      res.status(404).send('Appointment not found');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

