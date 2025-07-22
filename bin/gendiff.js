#!/usr/bin/env node
import { Command } from 'commander'
import genDiff from '../index.js'

const program = new Command()

program
  .argument('<filepath1>')
  .argument('<filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-v, --version', 'output the version number')
  .option(
    '-f, --format <type>',
    'output formats: "stylish", "plain", "json"',
    'stylish',
    'plain',
    'json',
  )
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2, program.opts().format))
  })

program.parse()
