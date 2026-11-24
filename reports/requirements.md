# Shared contract and acceptance criteria

**Story:** As a student, I want to choose a future start time and a duration, and receive an understandable availability decision without creating or modifying bookings.

**Frozen baseline:** One fictional Study Room A, fixed demo now at 09:00, existing booking 10:00–11:00. No login, payment, production database or personal information.

**Inputs:** HH:MM start; whole-number duration in minutes; blocked flag; fictional booking list.

**Outputs:** availability boolean, reason code, visible user message.

**AC1:** Start must be in the future relative to fixed demo time.
**AC2:** Duration > 0 and at most 120 minutes.
**AC3:** Overlapping bookings unavailable; touching endpoints acceptable.
**AC4:** Blocked room unavailable.
**AC5:** Decision is visible and bookings do not change.
**AC6:** Invalid inputs receive understandable feedback.

Both approaches use the same eight test cases in shared-tests.csv.