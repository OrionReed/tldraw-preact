# tldraw-preact

Basic test to see if TLDraw builds with Preact. It does technically, but there are some tsc compile errors which I supress with `"skipLibCheck": true` in `tsconfig.json`. Would be kinda neat if TLDraw became compatible with Preact.

It is a little smaller, might be faster based on my 60 entirely unscientific tests.

|  | Preact | React |
|---------|--------|-------|
| Build Size | `911.87 kB` | `1,034.02 kB` |
| Gzip | `274.35 kB` | `311.02 kB` |

