import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Use /schedule to see the demo');
});
app.get('/test', (req, res) => {
    res.sendFile('/Users/lynn.cohen/poc/lightningoutdemo/public/test.html');
});
app.get('/schedule', (req, res) => {
    res.sendFile('/Users/lynn.cohen/poc/lightningoutdemo/public/schedule.html');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');

})