# First - MF

Turborepo with Multiple apps, connected via Module Federation


## Priorities

[+] Turborepo with NextJS apps
[+] 2 or more micro frontends
[+] React Query
[+] UI Library
[+] Data Visualisation
[+] Virtualized Table
[+] Playwright Tests
[+] And many more deltas

NOTE : Next.js 13+ with App Router as core framework is not possible [because](https://x.com/ScriptedAlchemy/status/1814613730820563415)



## Apps and Packages

- dashboard: a Next.js app
- settings: another Next.js app
- users: another Next.js app
- shared: another Next.js app
- shell: another Next.js app as Entry point to the app
- @repo/ui: a shadcn ui component library shared by both all apps
- @repo/eslint-config: eslint configurations (includes eslint-config-next and eslint-config-prettier)
- @repo/typescript-config: tsconfig.jsons used throughout the monorepo

Each package/app is 100% TypeScript.


### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
yarn build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
yarn dev
```