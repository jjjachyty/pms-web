
export const state = () => ({
  user: null,
  sidebar: false

})

// Axios.defaults.headers['X-Bmob-Application-Id'] = '147d00d4168a717abfbd62618d061d52'
// Axios.defaults.headers['X-Bmob-REST-API-Key'] = 'c581844c3ef0af9360a27362756a6227'

export const actions = {
  query ({commit}, params) {
    console.log('data', params, this.$axios)
    this.$axios.get('/classes/PropertyUser', {params: {where: encodeURI(JSON.stringify(params))}})
  },
  SET_USER (state, user) {
    state.user = user || null
  }
}

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  SET_USER (state, user) {
    state.user = user || null
  }
}

export const getters = {
  isAuthenticated (state) {
    console.log('state', state)
    return !!state.user
  },
  loggedUser (state) {
    return state.user
  }
}
