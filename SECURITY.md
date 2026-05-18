# Security Policy

## Scope

Krepa is a **fully static front-end project** — no backend, no database, no user authentication, and no data collection. The attack surface is limited to:

- Third-party npm dependencies (build-time only)
- Static file hosting configuration (out of scope for this repo)

## Supported versions

Only the latest commit on `main` is maintained.

## Reporting a vulnerability

If you find a dependency with a known CVE or a client-side issue (e.g. XSS via injected content, unsafe `dangerouslySetInnerHTML` usage), please open a **private security advisory** on GitHub rather than a public issue.

Include:
- A description of the issue
- Steps to reproduce or a proof-of-concept
- The affected file(s) and line numbers if known

Expect a response within 5 business days.

## Dependency audits

Run `npm audit` to check for known vulnerabilities in dependencies. The project intentionally keeps its dependency footprint small.
