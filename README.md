<p align="center">
    <img alt="Babylon Logo" src="https://github.com/user-attachments/assets/dc74271e-90f1-44bd-9122-2b7438ab375c" width="100" />
    <!-- <h3 align="center">@babylonlabs-io/btc-staking-ts</h3> -->
    <p align="center">Babylon Typescript Monorepo</p>
    <p align="center"><strong>TypeScript</strong> application & libraries</p>
    <p align="center">
      <a href="https://www.npmjs.com/package/@babylonlabs-io/btc-staking-ts"><img src="https://badge.fury.io/js/btc-staking-ts.svg" alt="npm version" height="18"></a>
    </p>
</p>
<br/>


# Babylon Monorepo

This repository is a monorepo for Babylon Labs TypeScript applications and libraries. It uses [Nx](https://nx.dev/) to manage multiple packages, allowing for efficient development and deployment of TypeScript-based projects.

# Development
Please follow the guidelines outlined in the [DEVELOPMENT.md](DEVELOPMENT.md) file.

# Working with simple-staking

The simple-staking service is located in the `services/simple-staking` directory. To get started with development, follow these steps:

```bash
npm run build # Build the entire monorepo. After the first run, the build result will be cached for most packages.
```

Option 1:
```bash
npx nx dev @services/simple-staking # Start the development server for the simple-staking service.
npx nx watchDeps @services/simple-staking # Watch for changes in dependencies and rebuild as necessary.
```

Option 2:
```bash
npx nx dev:watchDeps @services/simple-staking # Start the development server and watch for changes in dependencies. The problem with this approach is that all logs are mixed together and can be hard to find out what's going on some times.
```