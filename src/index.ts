import 'dotenv/config.js'
import axios from 'axios'
import { Command } from 'commander'
import * as fs from 'fs'
import * as ds from './utils/debugScopes'

const log = ds.getLog('index')
const program = new Command();

const main = async(): Promise<void> => {
  log.info('Hello World!')
  process.exit(0)
}

program
  .command('main', { isDefault: true })
  .description('Prints hello and exits.')
  .action(main)

program
  .command('help')
  .action(() => {
    program.help()
  })

program.parse(process.argv)
