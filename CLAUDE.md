# TODO App - React Router v7 + SQLite + Cloudflare Workers

## Project Architecture
- Use React Router v7 for client-side routing and full-stack capabilities
- SQLite database for data persistence
- Cloudflare Workers for serverless backend
- Feature-based folder structure for components and pages

## Technology Stack
- **Frontend**: React 18, React Router v7, TypeScript
- **Backend**: Cloudflare Workers, Hono framework for API routes
- **Database**: SQLite with D1 (Cloudflare's SQLite)
- **Testing**: Vitest for unit tests, Playwright for E2E tests
- **Deployment**: Cloudflare Pages + Workers

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run Vitest unit tests
- `npm run test:e2e` - Run Playwright E2E tests
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run deploy` - Deploy to Cloudflare

## Code Style and Conventions
- Use TypeScript for all files
- Use 2-space indentation
- Prefer functional components with hooks
- Use PascalCase for component names
- Use camelCase for variables and functions
- Use kebab-case for file names (except components)
- RUN typecheck and lint after completing tasks and be sure they ALWAYS pass

## Project Structure
```
src/
├── components/          # Reusable UI components
├── pages/              # Route components
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── styles/             # CSS/Tailwind styles
└── tests/              # Test files
```

## Database Schema
- Use SQLite with migrations
- Keep schema simple: todos table with id, title, completed, createdAt
- Use Cloudflare D1 for production database

## API Design
- RESTful API endpoints under `/api/`
- Use proper HTTP methods (GET, POST, PUT, DELETE)
- Return consistent JSON responses
- Handle errors gracefully with proper status codes

## Testing Strategy
- Unit tests for components and utilities with Vitest
- E2E tests for user workflows with Playwright
- Test database operations with in-memory SQLite
- Mock external dependencies in tests

## Deployment Configuration
- Use `wrangler.toml` for Cloudflare Workers configuration
- Environment variables for database connections
- Set up staging and production environments
- Use GitHub Actions for CI/CD pipeline

## Performance Considerations
- Implement code splitting with React Router v7
- Use React.memo for expensive components
- Optimize database queries
- Enable Cloudflare caching for static assets

## Security Best Practices
- Validate all inputs on both client and server
- Use CSRF protection for forms
- Sanitize user data before database operations
- Implement rate limiting on API endpoints