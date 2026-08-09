# Harbor Health EHR prototype

A responsive, patient-facing EHR web application prototype. It demonstrates a unified record dashboard, provider-connection flow, patient-controlled data access, and an AI insights interface.

## Run it

Open `index.html` in a browser, or serve the folder with any static HTTP server.

## Production implementation notes

This prototype intentionally contains mock data only. A real deployment should include:

- A HIPAA-eligible backend and signed Business Associate Agreements for every vendor handling PHI.
- OAuth 2.0 / OpenID Connect with SMART on FHIR authorization; tokens stored server-side and encrypted at rest.
- A FHIR normalization pipeline (R4/R5 as appropriate), tenant isolation, audit logs, consent management, and data-retention controls.
- Server-side authorization checks for every record and model request; never place provider credentials or access tokens in client code.
- An AI service limited to the minimum authorized data, with provenance, clear uncertainty, safety controls, human-review workflows, and no diagnostic or treatment claims.
- Security validation including threat modeling, penetration testing, monitoring, backups, incident response, and accessibility review before handling real health data.
