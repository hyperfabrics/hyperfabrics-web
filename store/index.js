import Vuex from 'vuex'
import Cookie from 'js-cookie'

const createStore = () => {
  return new Vuex.Store({
    state: {
      cacheVersion: '',
      settings: {
        header: [],
        footer: []
      },
      form: {
        email: '',
        name: '',
        products: null,
        checked: []
      },
      formSubmitSuccess: false,
      token: null
    },

    mutations: {
      SET_SETTINGS (state, settings) {
        state.settings = settings
        // console.log(state.settings.header)
      },
      SET_CACHE_VERSION (state, version) {
        state.cacheVersion = version
      },

      // New

      FORM_SUBMIT (state) {
        state.formSubmitSuccess = true
      },
      SET_TOKEN (state, token) {
        state.token = token
      },
      CLEAR_TOKEN (state) {
        state.token = null
      }
    },

    actions: {
      nuxtServerInit ({ commit }, context) {
        return this.$storyapi.get(`cdn/stories/blocks/global`, {
          version: context.version
        }).then((res) => {
          commit('SET_SETTINGS', res.data.story.content)
        })
      },
      loadCacheVersion ({ commit }) {
        return this.$storyapi.get(`cdn/spaces/me`).then((res) => {
          commit('SET_CACHE_VERSION', res.data.space.version)
        })
      },
      formSubmit (vuexContext, form) {
        return this.$axios
          .$post(
            'https://hyperfabrics-marketing.firebaseio.com/contact-us.json', form)
          .then(result => {
            // console.log(form)
            vuexContext.commit('FORM_SUBMIT')
            this.$router.push('/form-submit')
          })
          .catch(e => console.log(e))
      },
      authenticateUser (vuexContext, authData) {
        console.log('process.env.fbAPIKey', process.env.fbAPIKey)
        let authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + process.env.fbAPIKey
        if (!authData.isLogin) {
          authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + process.env.fbAPIKey
        }
        // console.log('authData', authData)
        // console.log('fbAPIKey', process.env.fbAPIKey)
        // console.log('authUrl', authUrl)
        return this.$axios
          .$post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          })
          .then(result => {
            vuexContext.commit('SET_TOKEN', result.idToken)
            window.localStorage.setItem('token', result.idToken)
            // console.log(window.localStorage)
            window.localStorage.setItem(
              'tokenExpiration',
              new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
            )
            Cookie.set('jwt', result.idToken)
            Cookie.set(
              'expirationDate',
              new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
            )
            return this.$axios.$post('http://hyperfabrics.com/api/track-data', { data: 'Authenticated!' })
          })
          .catch(e => console.log(e))
      },
      initAuth (vuexContext, req) {
        let token
        let expirationDate
        if (req) {
          if (!req.headers.cookie) {
            return
          }
          const jwtCookie = req.headers.cookie
            .split(';')
            .find(c => c.trim().startsWith('jwt='))
          if (!jwtCookie) {
            return
          }
          token = jwtCookie.split('=')[1]
          expirationDate = req.headers.cookie
            .split(';')
            .find(c => c.trim().startsWith('expirationDate='))
            .split('=')[1]
        } else if (process.client) {
          token = window.localStorage.getItem('token')
          expirationDate = window.localStorage.getItem('tokenExpiration')
        }
        if (new Date().getTime() > +expirationDate || !token) {
          console.log('No token or invalid token')
          vuexContext.dispatch('logout')
          return
        }
        vuexContext.commit('SET_TOKEN', token)
      },
      logout (vuexContext) {
        vuexContext.commit('CLEAR_TOKEN')
        Cookie.remove('jwt')
        Cookie.remove('expirationDate')
        if (process.client) {
          window.localStorage.removeItem('token')
          window.localStorage.removeItem('tokenExpiration')
        }
      }
    },

    getters: {
      isAuthenticated (state) {
        return state.token != null
      }
    }
  })
}

export default createStore
