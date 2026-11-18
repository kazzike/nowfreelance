# Sensitive Data Replacer architecture

## Current state
The browser tool in `static/replacer/index.html` supports manually configured text mappings, optional email replacement, and restoration. It does not provide general-purpose automatic PII detection.

The mapping dictionary is persisted in browser `localStorage` as plaintext. This prototype is not suitable for confidential or regulated data. Do not market it as secure anonymization until storage, key management, and threat-model work is complete.

## First extraction
- `static/replacer/replacer-core.js` contains processing logic without DOM access.
- The HTML page remains the UI and delegates processing to `window.ReplacerCore`.
- User-provided mapping values must be rendered through DOM text APIs, never interpolated into `innerHTML`.
- The existing localStorage key and data shape are retained for compatibility; plaintext storage remains a known limitation.

## Next steps
1. Add versioned storage adapters and an encrypted vault with explicit key lifecycle.
2. Add tested detectors for specific data types, with configurable confidence and user review.
3. Define a stable SDK interface and package metadata.
4. Build a BlyntLabs adapter that invokes the same core locally where possible.
5. Add a local service/API only when a non-browser integration requires it.

## Security boundaries
- Never send original values or mapping dictionaries to an AI provider.
- Isolate vault scope by user, workspace, and session.
- Require explicit authorization before restoration.
- Fail closed if protection is enabled but unavailable.
- Do not log source text, replacements, or vault contents.
- Treat pseudonymized content as potentially personal data; token replacement alone does not establish anonymization.
