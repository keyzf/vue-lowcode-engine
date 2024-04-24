import { execa } from 'execa'

const { stdout } = await execa('pnpm', ['lint'], {})
console.log(stdout)
