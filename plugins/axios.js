export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })

  $axios.defaults.headers['X-Bmob-Application-Id'] = '147d00d4168a717abfbd62618d061d52'
  $axios.defaults.headers['X-Bmob-REST-API-Key'] = 'c581844c3ef0af9360a27362756a6227'
}
