// import { log } from './logger'
// import message from './message'
// import { name, version } from '../package.json'
// import _ from 'lodash-es'
// import cjs from './cjs-module'

// const msg = message.say
// log(msg)
// log(name)
// log(version)
// log(_.camelCase('hello lodash'))
// log(cjs)

import ('./logger').then(({ log }) => {
    log('code splitting')
})