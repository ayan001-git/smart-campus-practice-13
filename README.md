# Smart Campus — Practice #12 / Submission #13

**Student:** Tursynmamet Ayan · **ID:** 24B032074 · **Class:** Tuesday, 13:00–16:00.

## What is implemented

The standalone code-based demonstration is in [index.html](index.html). It is an educational availability checker for fictional Study Room A. Fixed demo clock: **09:00**; fixed booking: **10:00–11:00**. No actual reservations, credentials, real personal data, API connectors or production database.

### Common requirements (AC1–AC6)
- Start strictly after 09:00 (fixed *demo* time).
- Duration is an integer from 1 to 120 minutes.
- Reject overlaps with 10:00–11:00; endpoint touching is allowed.
- Reject blocked rooms.
- Display clear results and do not modify bookings.
- Give understandable errors for invalid values.

## Published results

Both published implementations passed T1–T8. See the [submission report](reports/final-report.md) for both live links, the native Appsmith export, screenshots, security review and comparison. Run local checks with `node tests/shared-checks.cjs`.
