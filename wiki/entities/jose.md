---
title: jose
kind: entity
summary: JavaScript library for JSON Web Tokens (JWT) and related standards; used in BlueAlly Microsites for Edge middleware session authentication.
tags: [auth, jwt, security, library]
sources: 1
updated: 2026-05-21
---

---
title: jose
kind: entity
summary: JavaScript library for JSON Web Tokens (JWT) and related standards; used in BlueAlly Microsites for Edge middleware session authentication.
tags: [auth, jwt, security, library]
sources: 1
updated: 2026-05-21
needsReview: surfaced in blueally-microsites-source
---

`jose` is a JavaScript library implementing JSON Web Tokens (JWT) and related JOSE (JSON Object Signing and Encryption) standards. In the BlueAlly ecosystem it is used in [[blueally-microsites]] as the authentication layer within Next.js Edge middleware, issuing and verifying 7-day session tokens for per-client password-protected landing pages.

## Related

- [[blueally-microsites]] — primary BlueAlly app using jose for Edge auth
