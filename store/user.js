
export const state = () => ({
  user: null,
  sidebar: false

})

// Axios.defaults.headers['X-Bmob-Application-Id'] = '147d00d4168a717abfbd62618d061d52'
// Axios.defaults.headers['X-Bmob-REST-API-Key'] = 'c581844c3ef0af9360a27362756a6227'

export const actions = {
  login ({commit}, params) {
    console.log('encodeURI(JSON.stringify(params))', encodeURI(JSON.stringify(params)))
    return this.$axios.get('/api/1/classes/PropertyUser', {params: {where: JSON.stringify(params)}})
  }
}

export const mutations = {

  setUser (user) {
    sessionStorage.setItem('user', user)
  }
}

export const getters = {
  isAuthenticated (state) {
    console.log('state', state)
    return sessionStorage.getItem('user')
  },
  loggedUser (state) {
    return sessionStorage.getItem('user')
  }
}
