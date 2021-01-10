# Tensorflow Toxicity API
REST API server built using Node/Express.js

**Server Link(Host)**: `Not Hosted`

**Response Time**: `12sec or more. :-(`

## Classify API Endpoint
Make a POST request to the endpoint with the sentence whose toxicity is to be detected.

**API Address**: `<host>/classify`

**Request Format**: `JSON`

**Request Method**: `POST`

```
{
    "text": A `string` parameter (Sentence whose toxicity is to be detected),
}
```
**Validations -ExpressValidator**:
- `text` required field


**Response Format**: `JSON`
```
{
    "result": [
        {
            "label": "identity_attack",
            "results": [
                {
                    "probabilities": {
                        "0": 0.9659663438796997,
                        "1": 0.034033700823783875
                    },
                    "match": false
                }
            ]
        },
        {
            "label": "insult",
            "results": [
                {
                    "probabilities": {
                        "0": 0.08124702423810959,
                        "1": 0.9187529683113098
                    },
                    "match": true
                }
            ]
        },
        {
            "label": "obscene",
            "results": [
                {
                    "probabilities": {
                        "0": 0.3993152379989624,
                        "1": 0.6006847620010376
                    },
                    "match": null
                }
            ]
        },
        {
            "label": "severe_toxicity",
            "results": [
                {
                    "probabilities": {
                        "0": 0.9970394968986511,
                        "1": 0.002960436511784792
                    },
                    "match": false
                }
            ]
        },
        {
            "label": "sexual_explicit",
            "results": [
                {
                    "probabilities": {
                        "0": 0.7053251266479492,
                        "1": 0.2946748435497284
                    },
                    "match": null
                }
            ]
        },
        {
            "label": "threat",
            "results": [
                {
                    "probabilities": {
                        "0": 0.9106737971305847,
                        "1": 0.08932614326477051
                    },
                    "match": false
                }
            ]
        },
        {
            "label": "toxicity",
            "results": [
                {
                    "probabilities": {
                        "0": 0.031176716089248657,
                        "1": 0.9688233137130737
                    },
                    "match": true
                }
            ]
        }
    ]
}
```

**Sample POST Requests**
```
{
    "localhost:3000/classify"
    {
        "text": "you are a bad boy"
    }
}

```
