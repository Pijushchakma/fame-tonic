# Next.js with Material-UI Project

This is a [Next.js](https://nextjs.org/) project integrated with [Material-UI (MUI)](https://mui.com/), structured according to best practices and conventions for modern web applications.

## Project Structure

The project follows a standard directory structure for Next.js applications:

```
.
├── public/             # Static assets
├── src/
│   ├── app/            # App Router pages and layouts
│   │   ├── api/        # API routes
│   │   └── ...         # Page routes
│   ├── components/     # Reusable UI components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Library code, third-party service implementations
│   ├── theme/          # MUI theme configuration
│   ├── styles/         # Global styles and design tokens
│   ├── types/          # TypeScript type definitions
│   └── utils/          # Utility functions
├── .gitignore
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
```

## Key Features

- **App Router**: Utilizes Next.js App Router for page routing
- **TypeScript**: Full TypeScript support for improved developer experience
- **Component Library**: Reusable UI components
- **API Services**: Centralized API handling
- **Custom Hooks**: Shared stateful logic
- **Theme System**: Consistent theming using MUI's ThemeProvider

## Pages

- **Home**: Dashboard with statistics and project overview

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
