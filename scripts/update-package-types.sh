#!/usr/bin/env bash

cat >out/cjs/package.json <<!EOF
{
    "type": "commonjs"
}
!EOF

cat >out/mjs/package.json <<!EOF
{
    "type": "module"
}
!EOF