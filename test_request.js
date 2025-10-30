const fetch = require('node-fetch');

async function runTest() {
  const url = 'http://localhost:3000/api/forecast-news?location=London&q=climate';
  console.log('Requesting', url);
  try {
    const res = await fetch(url);
    const json = await res.json();
    console.log('Status:', res.status);
    console.log('Response preview:');
    // print compact preview
    console.log({
      location: json.location,
      sources: json.sources,
      weather_keys: Object.keys(json.weather || {}),
      news_count: Array.isArray(json.news) ? json.news.length : (json.news && json.news.error ? 'error' : 0)
    });
  } catch (err) {
    console.error('Test failed:', err.message);
    process.exit(1);
  }
}

runTest();
