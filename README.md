# exploringReact
Just me exploring react using codespaces.

**In the terminal: `npm run dev` to start!**

## Getting started: Creating from scratch
Created from a blank repo on Github (with just a README.md) using codespaces. In the codespaces terminal the project was generated with:

    npm create vite@latest

Then cd into the project folder and:

    npm install

Open up the `package.json` file and add a `--port` and `--host` to the `scripts.dev` field:

    "scripts" : {
        "dev": "vite --port 3000 --host"
    }

