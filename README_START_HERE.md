# Yanmar Amplify 17.1

This folder contains the maintained static Yanmar Amplify portal. The source of truth is `Yanmar Distri portal Ardi.html`; `index.html` is a compatibility entry point that redirects to it.

## Run locally

Open `Yanmar Distri portal Ardi.html` directly in a modern browser. No build step, server or PowerShell is required for normal portal use.

## Release package

Run `CREATE_ENDPRODUCT.cmd` once to assemble a clean sibling folder named `Eindproduct Yanmar Amplify`. That package uses the current portal as its direct `index.html` and includes only the active CSS, JavaScript, tests and assets required by GitHub Pages.

## Tests

```text
npm install
npm run test:contract
npm run test:smoke
```

The contract suite checks structure, routes, assets, independent competitor state and Support Request persistence after refresh. The smoke test opens Chromium and verifies the distributor/admin flows, downloads, theme switching and responsive overflow.

## GitHub Pages

Upload the contents of `Eindproduct Yanmar Amplify` to the repository root. Keep `.nojekyll`, `index.html`, the release files and `assets/` together. Then publish from the repository root under **Settings > Pages**.
