# Syntesa Web

This is documentation for the Syntesa Web application, which is built using Vite and React Router.

## File Structure

The project has the following file structure:

```
├── app
│   ├── assets
│   │   ├── intern-company
│   │   └── logo
│   ├── components
│   │   ├── home
│   │   └── ui
│   ├── constants
│   ├── contexts
│   ├── hooks
│   ├── imagetools.d.ts
│   ├── routes
│   ├── routes.ts
│   ├── tailwind.css
│   ├── types
│   └── utils
├── biome.json
├── commitlint.config.js
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── public
├── react-router.config.ts
├── README.md
├── tsconfig.json
└── vite.config.ts
```

## Route

To add a new route, follow these steps:

1. Create a new file in the `app/routes/` directory, for example `newroute.tsx`.
2. Define your route component in the new file.
3. Add the new route to the `route.ts` file example: `route("newroute", "routes/newroute.tsx")`.

## Components

Components are located in the `app/components/` directory. You can create new components or modify existing ones to change the UI of the application.

1. To create a new component, create a new file in the `app/components/` directory, for example `NewComponent.tsx`.
2. Define your component in the new file.
3. Import and use the new component in the appropriate route or layout file.

## Assets

Assets such as images and logos are located in the `app/assets/` directory. You can add new assets or modify existing ones as needed.

1. To add a new asset, place the file in the appropriate subdirectory within `app/assets/`, for example `app/assets/logo/newlogo.png`.
2. Import and use the new asset in your components as needed.

## Content Configuration

Content for pages is configured in `app/constants/index_contents.ts`. You can modify the content there to update the text, images, and other data displayed on the pages.

1. Open `app/constants/index_contents.ts`.
2. Update the content as needed. The file contains structured data for different sections of the website, such as the interest groups, infrastructure, and more.

## Social Links

Social media links are configured in `app/constants/socialLinks.ts`. You can update the URLs information for the various social media platforms.

1. Open `app/constants/socialLinks.ts`.
2. Update the social media links as needed. This will ensure that users can find and follow the organization on the correct platforms.

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Building

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The optimized files will be in the `dist/` directory.
