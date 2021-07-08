import fetchApi from './fetch.js'
import { log } from '../logger'

//private
fetchApi('/photos?albumid=1').then(data => {
    data.forEach(item => {
        log(item)
    })
})