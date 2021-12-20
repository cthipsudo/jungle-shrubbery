import config from '../config'

const grabFFXIVChar = () => {
  return fetch(`${config.API_ENDPOINT}character/730968?private_key=${config.TOKEN_KEY}`, { mode: 'cors' }).then(res =>
    (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json()
  )
}


export default {
  grabFFXIVChar,
};