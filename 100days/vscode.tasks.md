
# Lint as a default task
Control Shift B

* Terminal Menu
* Configure default task
* tasks.json
* Problem Matcher

```json
{
        "type": "npm",
        "script": "lint",
        "group": {
          "kind": "build",
          "isDefault": true
        },
        "problemMatcher": ["$eslint-stylish"]
      }
```