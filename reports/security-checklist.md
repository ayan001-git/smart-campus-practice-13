# Security review

- Both deployed forms rejected zero, 121 minutes and past starts. The scripts validate time format and whole minutes.
- The HTML result uses textContent. Appsmith displays messages from the JS object through a Text widget. The messages do not echo arbitrary user input.
- The dataset contains a fictional room and a fixed booking. The export lists zero datasources. No SQL or external booking API is involved.
- Appsmith public viewing was enabled for submission. The editor was accessed through the signed-in workspace. No collaborators were invited.
- The standalone HTML has no external runtime dependencies. Appsmith manages its hosted platform updates. The application owner reviews widget and JS changes and any future connectors.
- Runtime review comprised ordinary functional and validation checks against the two deployed apps. No vulnerability scanning or dependency audit was conducted.
