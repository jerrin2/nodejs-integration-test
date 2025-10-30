const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

// GET /api/forecast-news?q=&location=
// location: either "lat,lon" or a place name (geocoded via Open-Meteo geocoding)
app.get('/api/forecast-news', async (req, res) => {
  const q = req.query.q || '';
  const location = (req.query.location || '').trim();
  if (!location) return res.status(400).json({ error: 'query param `location` is required (lat,lon or place name)' });

  try {
    let latitude, longitude, resolved_name = null;

    if (location.includes(',')) {
      const parts = location.split(',').map(s => s.trim());
      latitude = parseFloat(parts[0]);
      longitude = parseFloat(parts[1]);
      if (Number.isNaN(latitude) || Number.isNaN(longitude)) {
        return res.status(400).json({ error: 'invalid lat,lon format for `location`' });
      }
    } else {

    res.json(combined);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/', (req, res) => res.send('Weather + News API. Use /api/forecast-news?location=London&q=climate'));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
