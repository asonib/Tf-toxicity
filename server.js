require('@tensorflow/tfjs');
const toxicity = require('@tensorflow-models/toxicity');
const bodyParser = require('body-parser')
const express = require('express');
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/classify', async (req, res) => {
    try {
        const threshold = 0.9;

        await toxicity.load(threshold).then(model => {
            const sentences = [`${req.body.text}`];

            model.classify(sentences).then(predictions => {

                return res.json({ result: predictions })

            });
        });
        

    } catch (err) {
        return res.json({ "result": "Error Classifying" })
    }
});

app.listen(3000)