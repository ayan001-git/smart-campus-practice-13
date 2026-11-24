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

## Results and limitations

The previously exported React/TypeScript baseline passed **63/63** headless checks. The updated start/duration code adapter passed **8/8** shared logic checks locally. The Appsmith JavaScript object passed **8/8** isolated script checks, **not in the Appsmith platform**. Platform app creation, actual test screenshots, public Appsmith URL and platform export are **pending**. Code-based screenshot and report available separately in the chat artifact. Unmeasured work time is not invented.

To use a real Appsmith low-code builder, follow [low-code/SETUP.md](low-code/SETUP.md) and paste [low-code/RoomChecker.js](low-code/RoomChecker.js) into an Appsmith JS Object. This is not yet a published low-code app.

The standalone HTML demo requires no installation. To publish, select **Settings → Pages → Deploy from a branch → main / root**. Then open https://ayan001-git.github.io/smart-campus-practice-13/ after Pages deployment succeeds.

The original updated React/TypeScript project (including scripts, npm configuration and tests) is provided as a separate source archive, not yet wholly mirrored in this repository.

The slide deck is named **Practice #12**, but its submission slide requests email subject **AI-Driven Software Engineering Practice #13**.
