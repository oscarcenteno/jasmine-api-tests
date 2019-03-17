# Observing risks

Andrew is in charge of observing a risk for "market price" rag value monthly (input observation), for a key risk report (krr) that the "Compliance" division produces weekly (key risk report). The report is expected to be completed on certain dates (cob dates).


<div concordion:example="basic">

### Examples

* <span class='success'>creating krrs, completing their information (save, submit, decommission)</span>

* <span class='failure'>adding krms</span>

</div>
Analysing risk reports
Iza reviews the dashboard that aggregates the points (mps) they are measuring periodically (cob dates), and offer comments for their performance.

Debra is in charge of updating the conditions for risk reports (krr), including:
- creating krrs, completing their information (save, submit, decommission)
- adding mps
- configuring cob dates and their statuses.

John certifies conditions for the krms periodically.

| Feature        | Pass           | Failed  | Ignored  |
| ------------- |:-------------:| -----:|-----:|
| DA::Input Observation  | 2 | 0 |0 |
| DA::MP Configuration | 0 | 2 |0 |
| Portal::Login | 2 | 1 |0 |
| Portal::Navigation | 5 | 0 |0 |

