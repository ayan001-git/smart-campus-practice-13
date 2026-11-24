# Appsmith visual implementation (required; not yet deployed)

This folder provides a JS Object draft, **not** a real Appsmith export.

1. Create an app named `Smart Campus - Practice 12` at https://www.appsmith.com (free tier).
2. Add Input widget `StartInput` default `11:30`, Input `DurationInput` default `30`, Switch `BlockedSwitch` (off), and Button `CheckButton`.
3. Create JS Object `RoomChecker` and paste `RoomChecker.js`; save.
4. Set the button onClick to `{{RoomChecker.run()}}`.
5. Add Text widget `DecisionText` bound to `{{appsmith.store.lastVerdict ? (appsmith.store.lastVerdict.available ? "Available — " : "Unavailable — ") + appsmith.store.lastVerdict.message : "Enter a time and duration, then check."}}`.
6. Add read-only text: `Study Room A | Fixed demo now: 09:00 | Existing booking: 10:00–11:00`.
7. Test T1–T8 from `reports/shared-tests.csv`, capture real screenshots, and measure time spent in setup, coding, debugging and testing.
8. Use Appsmith Share/Deploy for a live link, and export actual project JSON from Appsmith; record URL and include original export in submission.

No real personal data, login, secret or production database is required. Script-only tests do not establish that the visual low-code application works.