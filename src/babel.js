async function start() {
  await Promise.resolve('async is working')
}

start().then(console.log)

class Util {
  static datenow = Date.now()
}

console.log('date', Util.datenow)


import('lodash').then(({ default: _ }) => {
  console.log('Lodash', _.multiply(6, 4))
})
