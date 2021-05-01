const express = require('express');
const request = require('request');
const path = require('path');
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/ivivdata', (req, res) => {
    const {max, last} = req.query; 
    request(
      { url: `http://ivivaanywhere.ivivacloud.com/api/Asset/Asset/All?apikey=SC:demo:64a9aa122143a5db&max=${max}&last=${last}` },
      (error, response, body) => {
        if (error || response.statusCode !== 200) {
          return res.status(500).json({ type: 'error', message: error.message });
        }
  
        res.json(JSON.parse(body));
      }
    )
  });

  if( process.env.NODE_ENV === 'production') {
    app.use(express.static('build'))

    app.get('*', (req, res)=>{
    res.sendFile(path.join('build', 'index.html'))
    })
  }

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));