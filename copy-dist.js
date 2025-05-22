import { copy } from 'fs-extra'

async function main() {
  await copy('./apps/host/dist', './dist/host')
  await copy('./apps/remote/dist', './dist/remote')
  console.log('Copied dist folders to /dist')
}

main().catch(console.error)
