# Addis Eats Next.js Core Portal

This repository consolidates the full Next.js framework migration.

## 🏁 Production Build Manifest Verification
* / (Static) -> Prerendered static landing layout asset
* /menu (ISR 1h) -> Automated time-based interval revalidation loop
* /menu/[id] (SSG) -> Hardcoded dish parameters generated via generateStaticParams
* /checkout (Dynamic) -> Evaluates request cookies on demand per interaction loop

## 🧪 Terminal Verification Scripts
Prove server-side error validation parameters match expectations cleanly:
curl -i -X POST http://localhost:3000/api/orders -H "Content-Type: application/json" -d '{"name":"", "phone":"123"}'
