# Bloc-App# Bloc Mobile

A distributed system for tracking bouldering sessions. Mobile app connects to a REST API, sharing data with the Bloc website.

> **Note:** This project builds upon the Bloc concept from COMP202 Web Technologies. The mobile app and REST API are new implementations for COMP204 Distributed Systems.

## Architecture
```
┌─────────────────┐         ┌─────────────────┐         ┌─────────────────┐
│  React Native   │  HTTP   │   REST API      │         │                 │
│  Mobile App     │ ◄─────► │   (Express)     │ ◄─────► │   SQLite DB     │
│  (Client)       │  JSON   │   (Server)      │         │                 │
└─────────────────┘         └─────────────────┘         └─────────────────┘
```

## Tech Stack

### Mobile App (Client)
- **React Native** - Cross-platform mobile framework
- **Expo** - Development and testing toolkit
- **React Navigation** - Screen navigation

### REST API (Server)
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **JWT** - Token-based authentication
- **SQLite3** - Database

### Why These Technologies?

**React Native** - Industry-standard framework used by Facebook, Instagram, and Discord. Allows building iOS and Android apps from a single JavaScript codebase. Chosen to diversify skills beyond server-rendered templates (Handlebars in COMP202).

**Expo** - Simplifies React Native development with easy testing on physical devices via the Expo Go app. No Mac or Xcode required for iOS testing.

**Express** - Lightweight Node.js framework. Familiar from previous work, allows focus on API design and distributed systems concepts.

**JWT (JSON Web Tokens)** - Stateless authentication suitable for mobile apps. Unlike session cookies, tokens can be stored on the device and sent with each request.

**SQLite** - File-based database shared with the existing Bloc website, demonstrating the distributed nature of the system where multiple clients access the same data.

## Project Structure
```
bloc-mobile/
├── app/                    # React Native mobile app
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── screens/        # App screens
│   │   ├── services/       # API calls
│   │   └── navigation/     # Navigation config
│   ├── App.js
│   └── package.json
│
├── api/                    # Express REST API
│   ├── routes/             # API endpoints
│   ├── middleware/         # Auth, validation
│   ├── server.js
│   └── package.json
│
├── docs/                   # Documentation
│   ├── uml/                # UML diagrams
│   └── business-plan/      # Business plan documents
│
└── README.md
```

## Features

- User registration and login
- Start/end climbing sessions
- Log climbs with grade, attempts, topped status, zones, and photos
- View public session feed
- Data syncs between mobile app and website

## Installation

### API Server
```bash
cd api
npm install
cp .env.example .env      # Configure environment variables
node server.js
```

### Mobile App
```bash
cd app
npm install
npx expo start
```

Scan the QR code with the Expo Go app on your phone to run.

## Environment Variables

### API (.env)
```
PORT=3000
DATABASE_PATH=./database.db
JWT_SECRET=your-secret-key-here
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | Login, returns JWT |
| GET | /api/sessions | Get all public sessions |
| POST | /api/sessions | Create new session |
| GET | /api/sessions/:id | Get session details |
| PUT | /api/sessions/:id/end | End a session |
| POST | /api/sessions/:id/climbs | Add climb to session |

## Author

AJ313798 - Falmouth University

## License

COMP204 Distributed Systems Assignment
