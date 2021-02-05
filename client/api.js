import request from 'superagent'

const url = '/api/v1/words/'

export function getSynos () {
  return request
    .get(url)
    .then(res => {
      return res.body
    })
}
