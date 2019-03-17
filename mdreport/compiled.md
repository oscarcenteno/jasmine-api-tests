# Your results!

## Features

| Feature        | Pass           | Failed  | Ignored  |
| ------------- |:-------------:| -----:|-----:|
| DA::Input Observation  | 2 | 0 |0 |
| DA::MP Configuration | 0 | 2 |0 |
| Portal::Login | 2 | 1 |0 |
| Portal::Navigation | 5 | 0 |0 |

## Summary

```chart
{
  "type": "doughnut",
  "data": {
    "labels": [
      "Failed",
      "Passed",
      "Ignored"
    ],
    "datasets": [
      {
        "label": "Summary",
        "data": [
          3,
          9,
          0
        ],

        "backgroundColor": [
          "#FF6384",
          "#90EE90",
          "#FFCE56"
        ]
      }
    ]
  },
  "options": {
      "title": {
            "display": "true",
            "text": "Aggregated results"
        },
        
                "scales":{
                    "xAxes":[
                        {"ticks":{
                            "beginAtZero":true}
                            }
                            ]}
  }
}
```