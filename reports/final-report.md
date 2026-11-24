# Smart Campus Room Availability Checker

Practice #12 · Submission #13  
Tursynmamet Ayan · 24B032074 · Tuesday, 13:00–16:00

## Baseline and contract

The starting repository revision was `e1930bc015289aa10281c9a2a08ea2d6d6b9a5db`. Study Room A is fictional. The shared clock is fixed at 09:00, and the only booking is 10:00–11:00. See [shared requirements](requirements.md) for the user story, inputs, outputs and AC1–AC6.

The code-based form now delegates validation to its existing check function so durations 0 and 121 produce feedback in the result panel. The booking rules and fixture are unchanged.

## Acceptance checks

The code-based submission handler was exercised in Node.js with a minimal DOM stub. The Appsmith JS object's `check` method was evaluated independently in Node.js. Appsmith sign-in did not complete, so the Appsmith editor and deployed UI remain unverified.

| Test | Expected | Observed in HTML handler | Observed in isolated RoomChecker.js | Appsmith UI |
|---|---|---|---|---|
| T1 · 11:30, 30 min | Available | Available | Available | Pending |
| T2 · 10:30, 60 min | Unavailable, overlap | Unavailable, overlap | Unavailable, overlap | Pending |
| T3 · 11:30, 30 min, blocked | Unavailable, blocked | Unavailable, blocked | Unavailable, blocked | Pending |
| T4 · 0 min | Validation error | Whole number between 1 and 120 | Whole number between 1 and 120 | Pending |
| T5 · 121 min | Validation error | Maximum 120 minutes | Maximum 120 minutes | Pending |
| T6 · 08:30 | Validation error | Start must be later than 09:00 | Start must be after 09:00 | Pending |
| T7 · 11:00, 60 min | Available | Available | Available | Pending |
| T8 · Run all checks | Booking unchanged | Fixture remained 10:00–11:00 | Fixture remained 10:00–11:00 | Pending |

## Comparison

| Criterion | Code-based HTML | Appsmith |
|---|---|---|
| Functional evidence | 8/8 local handler checks | 8/8 isolated JS checks. Appsmith UI pending. |
| Setup, implementation, debugging and testing time | Historical phase durations unavailable | Platform work pending. Phase durations unavailable. |
| Unresolved work | Browser screenshots and published URL to verify | Widgets, bindings, runtime tests, screenshots, deployment and native export pending |
| Customization | Direct control of HTML, CSS and validation | Visual widgets and JS Object bindings planned in [setup](../low-code/SETUP.md) |
| Security | Fixed fixture, text-only output and no connectors | Script checks inputs. Roles, sharing and connectors remain to verify in Appsmith. |
| Versioning and portability | Git diffs and portable static HTML | JS source tracked in Git. Appsmith export pending. |
| Ongoing cost | Static prototype has no service dependencies | No subscription purchased. Current workspace plan capabilities remain to verify. |

For this exercise I recommend the HTML version based on the available evidence. Its full implementation is already reviewable in Git, and it needs no application platform to run. A comparison of actual Appsmith setup and maintenance effort requires completing the Appsmith integration first.

## Security and AI use

The HTML handler writes the result via textContent. Both scripts use a fixed fictional fixture and do not construct SQL or send booking data to a connector. No third-party scanning was performed. The HTML has no external runtime libraries. Appsmith platform updates remain the provider's responsibility, while workspace owners are responsible for access review and checking any added connectors or libraries. Runtime checks on deployed UIs and an Appsmith permissions review are pending. See the [security checklist](security-checklist.md).

ChatGPT Codex was used to inspect the assignment, diagnose native form validation and rerun shared scenarios in Node.js. Exact model version is unavailable. The Appsmith sign-in attempt ended at Google authentication. No Appsmith publication, export, or screenshots were obtained.
