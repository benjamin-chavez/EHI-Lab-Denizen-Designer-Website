# Denizen Designer React App

This is a standalone React application extracted from the Ruby on Rails Denizen Designer application. All API calls have been replaced with hardcoded data from the original seed files.

## Features

- React 16.8 with Redux for state management
- React Router v3 for client-side routing
- Bootstrap 4 for styling
- All participant and quote data hardcoded (no backend required)
- Three main sections:
  - Denizen Designer - Designer profiles, interviews, reports, and quotes
  - History of Participatory Design - Timeline and resources
  - Dashboard - Admin interface for managing participants

## Installation

1. Install dependencies:
```bash
npm install --legacy-peer-deps
```

2. Start the development server:
```bash
npm start
```
The app will open automatically at http://localhost:3000

3. Build for production:
```bash
npm build
```

## Structure

```
src/
├── actions/          # Redux action creators
├── containers/       # React components organized by feature
│   ├── app_denizen/  # Denizen Designer app sections
│   ├── app_hopd/     # History of Participatory Design sections
│   ├── dashboard/    # Admin dashboard
│   └── shared/       # Shared components
├── data/             # Hardcoded participant and quote data
│   ├── participants.js
│   └── quotes.js
├── reducers/         # Redux reducers
├── assets/           # Images and stylesheets
├── index.jsx         # App entry point
└── store.js          # Redux store configuration
```

## Routes

- `/` - Landing page
- `/denizendesigner` - Denizen Designer main section
- `/historyofparticipatorydesign` - History of Participatory Design section
- `/dashboard` - Admin dashboard
- `/dashboard/newparticipant` - Add new participant
- `/dashboard/editparticipant/:id` - Edit existing participant

## Data

All data is hardcoded in the `src/data` directory:
- `participants.js` - 31 designer profiles with bios, locations, and social media
- `quotes.js` - 134 categorized quotes from the designers

The data is loaded synchronously with a small delay to simulate API behavior.

## Notes

- This is a static version of the app with no backend
- Dashboard functionality (create/edit/delete) will not persist changes
- All images are hosted on Cloudinary and loaded from their CDN
- Uses hash-based routing (`#/route`) for compatibility