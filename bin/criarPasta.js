#!/usr/bin/env node

//Esta linha é fundamental para que o NPM gere um executável corretamente.

const args = process.argv.splice(process.execArgv.length + 2),
  nome = args[0];

const {criarPasta} = require('../lib/index.js');
criarPasta(nome);