# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Setup and Dependencies
```bash
# Install dependencies
bundle                    # Ruby dependencies
yarn                      # JavaScript dependencies

# Database setup
rails db:create          # Create database
rails db:migrate         # Run migrations
rails db:seed:all        # Seed with sample data
```

### Development Server
```bash
# Start development servers (run in separate terminals)
./bin/webpack-dev-server  # Webpack dev server (port 3035)
rails s                   # Rails server (port 3000)
```

### Database Management
```bash
rails db:drop            # Drop database
rails db:create          # Create database
rails db:migrate         # Run migrations
rails db:seed:all        # Seed with all data
```

### Testing
```bash
rails test               # Run all tests
rails test test/models/  # Run model tests
rails test test/system/  # Run system tests
```

### Deployment
```bash
bin/render-build.sh      # Render.com build script
```

## Architecture Overview

This is a **Rails API + React SPA** application with Redux state management.

### Tech Stack
- **Backend**: Ruby on Rails 7.0.8 (API mode)
- **Frontend**: React 16.8 with Redux 4.0
- **Database**: PostgreSQL
- **Build Tool**: Webpacker 5.4
- **CSS**: Bootstrap + SCSS

### Application Structure

The app has three main sections:

1. **Denizen Designer** (`/denizendesigner/*`) - Active application
   - Designer profiles and interviews
   - Multi-section report
   - Designer database by city
   - Quotes categorized by theme
   
2. **History of Participatory Design** (`/historyofparticipatorydesign/*`) - Partially implemented
   - Timeline view
   - Data visualization
   - Repository of papers

3. **Dashboard** (`/dashboard/*`) - Admin interface
   - CRUD operations for participants
   - Requires authentication

### Frontend Architecture

**Entry Point**: `app/javascript/denizenDesigner/index.jsx`

**Component Organization**:
```
app/javascript/denizenDesigner/
├── actions/          # Redux actions with async API calls
├── containers/       # Smart components by feature
│   ├── app_denizen/  # Denizen Designer sections
│   ├── app_hopd/     # History of PD sections
│   ├── dashboard/    # Admin dashboard
│   └── shared/       # Reusable components
├── reducers/         # Redux reducers
└── store.js          # Redux store configuration
```

**State Management**:
- Redux with Thunk middleware for async actions
- Centralized store manages participants, quotes, navigation, and form state
- Redux DevTools enabled in development

### Backend Architecture

**API Structure**:
- Base path: `/api/v1/`
- RESTful endpoints for participants, quotes, sessions
- Controllers in `app/controllers/api/v1/`

**Routing**:
- Rails catches all routes and delegates to React Router
- API routes defined separately
- Single page app served from `pages#home`

**Models**:
- `Participant`: Designer profiles with location/social data
- `Quote`: Categorized quotes linked to participants
- `User`: Authentication via Devise

### Key Development Patterns

1. **API Communication**: React components → Redux actions → Rails API → Redux reducers → React re-render
2. **Authentication**: Devise for backend, API controllers skip auth for public endpoints
3. **Image Storage**: Local images in `app/assets/images/`, external via Cloudinary
4. **Hot Reload**: Webpack dev server provides HMR for React development

### Important Files

- `config/routes.rb` - API and catch-all routing
- `app/javascript/denizenDesigner/App.jsx` - Main React app component
- `app/javascript/denizenDesigner/store.js` - Redux store setup
- `app/controllers/api/v1/` - API controllers
- `app/views/layouts/application.html.erb` - SPA mount point