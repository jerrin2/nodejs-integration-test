# Weather + News combined API

This small Node.js app exposes a single endpoint:

- `GET /api/forecast-news?q=&location=`

Parameters:
- `location` (required): either `lat,lon` or a place name (e.g. `London`).
- `q` (optional): news query (e.g. `climate`). If omitted, the `location` value is used as a news query.

What it does:
- Fetches weather for the requested location from Open-Meteo (no API key required).
- Fetches news from NewsData.io if you set the `NEWSDATA_API_KEY` environment variable. If no key is set, the `news` array will be empty and `sources.news` will indicate the key is missing.

Quick start (Windows PowerShell):

```powershell
cd <project-folder>
npm install
# (optional) set your news API key
$env:NEWSDATA_API_KEY = 'your_key_here'
npm start
```

In another shell you can run the included test script (it expects the server on port 3000):

```powershell
node test_request.js
```

Notes:
- News integration uses NewsData.io (free tier requires API key). You can swap in another news provider by editing `index.js`.
