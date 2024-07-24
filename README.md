# exploringReact
Just me exploring react using codespaces.

**In the terminal: `npm run dev` to start!**

## Getting started: Creating from scratch
Created from a blank repo on Github (with just a README.md) using codespaces. In the codespaces terminal the project was generated with:

    npm create vite@latest

Then `cd` into the project folder and:

    npm install

Open up the `package.json` file and add a `--port` and `--host` to the `scripts.dev` field:

    "scripts" : {
        "dev": "vite --port 3000 --host"
    }


Thanks to [Kyrstof Koziarski](https://dev.to/kkoziarski/react-vite-github-codespaces-5529) for exploring this process.

## Install tailwindcss

In the terminal run:

    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init

Add the paths to all of your template files in the newly created `tailwind.config.js` file.

    /** @type {import('tailwindcss').Config} */
    module.exports = {
        content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
        extend: {},
    },
    plugins: [],
    }

Add the @tailwind directives for each of Tailwind’s layers to your main CSS file (`index.css`).

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    :root { ...

