# LuminaCX Project Context

## Business Overview
LuminaCX is a B2B SaaS/CPaaS platform focusing on Digital CX (Customer Experience) and Omnichannel communication (WhatsApp, Instagram, Webchat). 
- **Core Product:** Hybrid Support (AI + Human), Real-time Analytics, Marketing Campaigns.
- **Key Vertical:** Healthcare (HealthPulse partnership).
- **Core AI:** "Omnisense" (Evolution from rule-based to LLM-driven agents).

## Tech Stack
- **Frontend:** Angular (v17+) with Vanilla CSS.
- **Backend:** Node.js (NestJS framework preferred).
- **QA:** Cypress for E2E testing.

## Architectural Guidelines
1. **Security (Security by Default):**
   - LGPD Compliance: Mask PII (Email, Phone, CPF) in logs.
   - Secrets: Always use Google Secret Manager for API keys (Meta/WhatsApp API).
   - Auth: JWT with HttpOnly cookies.
2. **AI Integration (Omnisense):**
   - Service-oriented architecture for LLM providers.
   - Human-in-the-loop: The handoff from bot to human must be seamless and audited.
3. **Frontend Patterns:**
   - Follow Angular Standalone Components.
   - Use `RadiantUI` components as defined in Figma.

## Testing Strategy
- **Cypress:** All CUJs (Critical User Journeys) must have a corresponding E2E test in `cypress/e2e`.
- **Unit:** 80% coverage on Backend services.
