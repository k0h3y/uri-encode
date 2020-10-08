#!/usr/bin/env node
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
console.log(decodeURIComponent(input));
