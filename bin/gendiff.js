#!/usr/bin/env node
import { Command, Option } from 'commander'
import genDiff from '../index.js'

const program = new Command()

program
  .argument('<filepath1>')
  .argument('<filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-v, --version', 'output the version number')
  .addOption(
    new Option('-f, --format <type>', 'output format')
      .choices(['stylish', 'plain', 'json'])
      .default('stylish'),
  )
  .action((filename1, filename2) => {
    console.log(genDiff(filename1, filename2, program.opts().format))
  })

program.parse()
