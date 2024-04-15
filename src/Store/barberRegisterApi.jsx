// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 7022;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Barber verileri için basit bir veritabanı
let barbers = [];

// Yeni bir berber oluşturma
app.post("/api/Barber/create-barber", (req, res) => {
  const newBarber = req.body;
  barbers.push(newBarber);
  res.json(newBarber);
});

// Tüm berberleri getirme
app.get("/api/Barber/get-barbers", (req, res) => {
  res.json(barbers);
});

// Berberi güncelleme
app.put("/api/Barber/update-barber/:id", (req, res) => {
  const id = req.params.id;
  const updatedBarber = req.body;

  barbers = barbers.map(barber => {
    if (barber.id === id) {
      return { ...barber, ...updatedBarber };
    }
    return barber;
  });

  res.json({ message: "Berber güncellendi." });
});

// Berberi silme
app.delete("/api/Barber/delete-barber/:id", (req, res) => {
  const id = req.params.id;

  barbers = barbers.filter(barber => barber.id !== id);

  res.json({ message: "Berber silindi." });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
