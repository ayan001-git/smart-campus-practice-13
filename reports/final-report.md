# Smart Campus Room Availability Checker

Practice 12 · Submission 13 · Tursynmamet Ayan · 24B032074 · Tuesday 13:00–16:00

## Implementations

[HTML demo](https://ayan001-git.github.io/smart-campus-practice-13/) · [Appsmith demo](https://smart-campus-practice13.appsmith.com/app/smart-campus-practice-12/page1-6b0582ccb9542a02bf24e57e?environment=production) · [Native Appsmith export](../low-code/Smart-Campus-Appsmith.json)

The starting repository revision was e1930bc015289aa10281c9a2a08ea2d6d6b9a5db. Both checkers use the same fictional day, demo clock of 09:00 and booking of 10:00–11:00. [Contract and acceptance criteria](requirements.md). The HTML form delegates validation to its submission handler so invalid durations produce visible feedback. In Appsmith, StartInput, DurationInput and BlockedSwitch feed JSObject1, adapted from RoomChecker.js. The text widget updates the decision and booking directly when an input changes. The deployed object source is [JSObject1.js](../low-code/JSObject1.js).

## Observed results

Each form was exercised in Cloud Browser on its published URL. The booking displayed at the start and after each of T1–T7 was 10:00–11:00. Both implementations passed all eight checks. [Inputs and observed results](shared-tests.csv) · [screenshots of both interfaces and every input case](../evidence/) · [local test output](local-test-results.txt). The HTML baseline screenshot shows the deployed form before entering the test cases. An image of the earlier repository revision was not recorded.

| Criterion | HTML | Appsmith |
|---|---|---|
| Functional coverage | 8/8, submitted through the form | 8/8, reactive widget bindings |
| Build and repair time | Phase timings unavailable | Phase timings unavailable |
| Customization | Direct control of form, responsive CSS and validation messages | Drag-and-drop widgets plus JS for interval logic |
| Review and portability | Single HTML file, readable Git diff, runs offline | Native JSON and extracted JS versioned in Git. Editor and runtime depend on Appsmith |
| Security | Text-only result rendering, no external connector | Public viewing enabled, fixed fictional schedule, no datasource in export |
| Cost observed | No purchase for the demo | Workspace showed an active trial. No subscription purchased. Long-term plan limits unverified |

No functional failures remained in the eight defined tests. Unmeasured setup, implementation, debugging and test durations prevent a speed comparison. For this classroom checker I recommend HTML because the complete runnable implementation is a single portable file. Appsmith is useful when collaborators want to change controls visually.

## Security and AI use

[Security review](security-checklist.md). ChatGPT Codex helped adapt the rule engine, configure Appsmith widgets, exercise both deployed forms and compare results against the fixed acceptance cases. Local tests initially covered the logic only. Browser tests subsequently verified the user-visible decisions and preserved schedule. Exact historical model and platform version identifiers for all work sessions are unavailable.
