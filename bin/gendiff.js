#!/usr/bin/env node
import { Command } from 'commander'
import fs from 'fs'
import path from 'path'
import { parseData, getDiff } from '../index.js'

const program = new Command()

program
  .name('gendiff')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format', 'output format')
  .action((filepath1, filepath2) => {
    const fullPathFile1 = path.resolve(process.cwd(), filepath1)
    const fullPathFile2 = path.resolve(process.cwd(), filepath2)
    const parsedFile1 = parseData(fullPathFile1)
    const parsedFile2 = parseData(fullPathFile2)
    return getDiff(parsedFile1, parsedFile2)
  })
// добавить возможность передавать аргументы и вызывать тут функцию получения абсолютного пути
program.parse()
