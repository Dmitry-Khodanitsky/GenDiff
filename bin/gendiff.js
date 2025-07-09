#!/usr/bin/env node
import { Command } from 'commander'
const program = new Command()

program
  .name('gendiff')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .helpOption('-h, --help [type]', 'display help for command')
  .option('-f, --format', 'output format')

program.parse()
