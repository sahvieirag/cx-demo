# LuminaCX 🚀 — Omnichannel Customer Experience (CX) Hub

LuminaCX is a high-performance, enterprise-grade B2B SaaS/CPaaS platform designed to unify digital customer experience (CX) and omnichannel communications (WhatsApp, Instagram, Webchat). 

This repository serves as an advanced, production-ready portfolio showcase demonstrating modern frontend architecture, secure backend services, LGPD privacy-by-design compliance, AI integration, and robust end-to-end automated testing.

Developed by **Sabrina Guerra** ([@sahvieirag](https://github.com/sahvieirag)).

---

## 🛠️ Tech Stack & Monorepo Architecture

LuminaCX is structured as a scalable monorepo comprising:

- **Frontend**: **Angular 17+** (Standalone Components architecture, Vanilla CSS with custom RadiantUI design tokens, Glassmorphism aesthetics).
- **Backend (Core)**: **NestJS 10+** (TypeScript, dependency injection, global reactive interceptors, modular architecture).
- **Secure Microservice**: **Python 3.10+ / Flask** (Demonstrating multi-runtime microservice capabilities, secure JWT authorization decorators).
- **E2E Testing**: **Cypress 13+** (Headless end-to-end simulation of Critical User Journeys).

---

## 🌟 Core Showcase Features

### 1. Privacy by Design: Deep LGPD/GDPR Compliance Interceptor (`NestJS`)
LuminaCX implements standard-setting data protection practices. To prevent accidental leakage of PII (Personally Identifiable Information), a global NestJS Interceptor, `PiiMaskingInterceptor` (found in `apps/backend/src/pii-masking.interceptor.ts`), intercepts outgoing HTTP payloads and dynamically filters them.
- **Automated Deep Scan**: Recursively traverses nested arrays and JSON objects.
- **Sensitive Attribute Masking**: Target attributes (`customerName`, `email`, `phone`, `cpf`, `password`) are dynamically masked to a safe format (e.g., `Sa***ia` or `****` for short attributes).
- **Secure-by-Default Logging**: All debugging outputs are sanitised beforehand.

### 2. Omnisense AI Engine (`NestJS`)
An intelligent AI companion service (`apps/backend/src/omnisense.service.ts`) designed to assist customer agents:
- **Intelligent Ticket Summaries**: Instantly synthesizes complex customer messaging flows to output concise, actionable summaries.
- **Smart Suggested Replies**: Generates context-aware, empathetic auto-responses based on chat history to reduce Average Handling Time (AHT) by up to 40%.

### 3. State-of-the-Art Glassmorphic Unified Inbox (`Angular 17`)
The client inbox (`apps/frontend/src/app`) features a breathtaking digital workspace:
- **Deep Dark Indigo Aesthetics**: A sleek, high-tech workspace designed for prolonged agent use.
- **Glassmorphism**: High-fidelity frosted-glass containers (`backdrop-filter`) with thin glowing border-lights.
- **Live AI pulsing Status**: A custom pulsing neon green indicator showing real-time AI status.
- **Channel Branding**: Colored visual borders and glowing custom badges for WhatsApp, Instagram, and Webchat to enable instant agent scanning.
- **Responsive Fluid Layouts**: Fully built from scratch using clean vanilla CSS without rigid heavy frameworks.

### 4. Secure Flask Microservice (`Python`)
Exposes secure document endpoints protected by a custom `@require_auth` JSON Web Token validation decorator (`apps/backend-py/docs-api.py`), mimicking Secret Manager integrations.

### 5. Automated Quality Assurance (`Cypress E2E`)
A zero-regression automated E2E suite (`cypress/e2e/inbox.cy.ts`) testing all Critical User Journeys (CUJs):
- Validates the dynamic render of the Unified Inbox.
- Checks live AI-summary injection.
- Simulates real user interaction (clicking "Responder" and logging tracking references to Jira systems).

---

## 📂 Project Structure

```bash
cx-demo/
├── apps/
│   ├── frontend/             # Angular 17+ Standalone application
│   │   ├── src/
│   │   │   ├── app/          # Inbox view (Component, CSS with glassmorphism, HTML)
│   │   │   └── tsconfig.app.json
│   ├── backend/              # NestJS core API
│   │   └── src/
│   │       ├── pii-masking.interceptor.ts  # LGPD response masking interceptor
│   │       ├── omnisense.service.ts         # AI Summarization & replies service
│   │       ├── ticket.controller.ts         # HTTP controller exposing APIs
│   │       └── main.ts
│   └── backend-py/           # Python Flask secure microservice (Auth Decorator)
├── libs/
│   └── shared/               # Shared type definitions and TS interfaces
├── cypress/
│   └── e2e/                  # End-to-End Cypress test suites
├── package.json              # Monorepo scripts and dependencies
├── cypress.config.ts         # Cypress runner configuration
└── tsconfig.json             # Root TypeScript compilation options
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended) and NPM.

### Installation
Clone the repository and install dependencies in the root:
```bash
npm run install:all
```

### Running the Services

1. **Start the Frontend Angular Server**:
   ```bash
   npm run start:frontend
   ```
   *The client workspace will be available at `http://localhost:4200`.*

2. **Start the NestJS Core Backend**:
   ```bash
   npm run start:backend
   ```
   *Exposes the core API at `http://localhost:3000`.*

3. **Start the Python Flask Microservice**:
   ```bash
   cd apps/backend-py
   python docs-api.py
   ```

---

## 🧪 Running Automated Tests

To execute the headless Cypress E2E test suite (verify that the frontend, logs, and layout work in sync):
```bash
# Make sure the frontend is running on http://localhost:4200
npx cypress run --spec "cypress/e2e/inbox.cy.ts"
```

---

## 📜 Architectural Compliance & License
Developed strictly adhering to **LGPD Compliance**, **Zero-Trust Auth principles**, and **Enterprise Angular architecture standards**.

Created with ❤️ by **Sabrina Guerra** – Feel free to connect on [GitHub](https://github.com/sahvieirag)!
