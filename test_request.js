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
    
  } catch (err) {
    console.error('Test failed:', err.message);
    process.exit(1);
  }
}

runTest();

