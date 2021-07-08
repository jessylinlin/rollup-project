import fetchApi from './fetch.js'
import { log } from '../logger'

//private
fetchApi('/posts').then(data => {
    data.forEach(item => {
        log(item)
    })
})