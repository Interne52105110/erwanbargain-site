// Astro leaves two internal module files in an output folder that sits outside the project root.
// They are not part of the site, so remove them after each build.
import { rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const out = join(dirname(fileURLToPath(import.meta.url)), '../../job-search');
for (const f of ['content-assets.mjs', 'content-modules.mjs']) rmSync(join(out, f), { force: true });
