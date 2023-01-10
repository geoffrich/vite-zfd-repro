# Repro for zod-form-data issue with Vite SSR

All this repro does is import and run `zod-form-data` on the server.

To repro, `npm install` and run `npm run build` and `npm run preview`.

You'll see the following error:

```
file:///Users/grich/code/other/vite-zfd-repro/dist/server/entry-server.js:1
import { zfd } from "zod-form-data";
         ^^^
SyntaxError: Named export 'zfd' not found. The requested module 'zod-form-data' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export, for example using:

import pkg from 'zod-form-data';
const { zfd } = pkg;

    at ModuleJob._instantiate (node:internal/modules/esm/module_job:128:21)
    at async ModuleJob.run (node:internal/modules/esm/module_job:194:5)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:385:24)
    at async file:///Users/grich/code/other/vite-zfd-repro/server.js:51:17
```
