This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# etc.
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the page with no issues.

Build a production version of the app and start it:

```bash
npm run build
npm run start
# or
yarn build
yarn start
# etc.
```

Open [http://localhost:3000](http://localhost:3000) with your browser and notice the following error in your server console:
```
/my-local-directory/next-js-swc-plugin-coverage-instrument/.next/server/src/middleware.js:62
    var global1 = new ((function(){}).constructor)("return this")();
                  ^

EvalError: Code generation from strings disallowed for this context
```
