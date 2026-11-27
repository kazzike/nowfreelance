# Privacy Engine architecture and prototype

## Prototype v0.1
An isolated browser demo is available at `/privacy-engine/demo/` after deployment. It supports text input and plain-text upload (1 MB max), rule-based detection of email, phone-like numbers, Spanish DNI/NIE and IBAN, human review, per-finding selection, consistent session-scoped pseudonyms, copy/download and restoration.

All processing runs in the browser. No backend or AI provider is called. Mapping data exists only in JavaScript memory and is lost on refresh/close. This is a demonstration, not a secure vault or production service.

## Detection limitations
Pattern-based detection is not general PII recognition. Names, addresses, free-form health details, contextual identifiers and many other sensitive values are not automatically detected. Phone patterns can produce false positives. Users must review every result.

## Production security principles
- Define a threat model before persistence.
- Separate detection, policy, transformation, vault, restoration and audit.
- Use versioned mapping records and stable identifiers scoped to tenant/workspace/session.
- Encrypt vault data with explicit key lifecycle and tenant isolation.
- Require identity, permission and purpose checks before restoration.
- Never send originals or mapping dictionaries to an AI provider.
- Never log source text, replacements or vault contents.
- Fail closed if protection is enabled but unavailable.
- Pseudonymised data may remain personal data; token replacement is not anonymisation.

## Roadmap
1. [Prototype] Demonstrate local detection, review, protection and restoration.
2. [Next] Harden a standalone transformation core, versioned records and comprehensive tests.
3. [Next] Define threat model, encrypted vault interface, key lifecycle and tenant boundaries.
4. Add configurable detectors, confidence levels and human review.
5. Add policy profiles and permission-controlled restoration.
6. Define SDK/API contracts and integrations.
7. Add privacy-preserving audit events and enterprise administration.

## Legacy Replacer
The older `static/replacer/index.html` persists mappings in plaintext localStorage. It is not suitable for confidential or regulated data.