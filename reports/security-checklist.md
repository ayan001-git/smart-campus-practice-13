# Security review — Practice #12

| Check | Code-based | Appsmith |
|---|---|---|
| Input validation | Strict HH:MM, integer duration, range and overlap rules | Script implemented; actual UI verification pending |
| SQL injection | No SQL/database surface | No database connector required |
| XSS | Result written as textContent, not innerHTML | Text widget planned; runtime not verified |
| Sensitive data | No accounts, personal data or credentials | No secrets or connector required |
| Least privilege | Static public demonstration | Review app share/edit permissions before publishing |
| Dependency/SCA | React project has npm lockfile; audit pending | Platform update responsibilities require review |
| DAST | No unauthorized scanning performed | Not performed |
| Release status | Functional logic tested; full browser release verification pending | Unpublished; not tested in Appsmith |

No external scans or production security claims are made.