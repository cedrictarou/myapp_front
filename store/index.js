const homePath = 'projects'

export const state = () => ({
  styles: {
    homeAppBar: {
      homeAppBarHeight: 56,
    },
  },
  loggedIn: {
    homePath,
  },
  projects: {
    current: null,
    list: [
      { id: 1, name: 'MyProject01', updatedAt: '2020-04-01T12:00:00+09:00' },
      {
        id: 2,
        name: 'MyProject02',
        updatedAt: '2020-04-05T12:00:00+09:00',
      },
      { id: 3, name: 'MyProject03', updatedAt: '2020-04-03T12:00:00+09:00' },
      { id: 4, name: 'MyProject04', updatedAt: '2020-04-04T12:00:00+09:00' },
      { id: 5, name: 'MyProject05', updatedAt: '2020-04-01T12:00:00+09:00' },
    ],
  },
  user: {
    current: null,
  },
  auth: {
    token: null,
    expires: 0,
    payload: {},
  },
})
export const gatters = {}
export const mutations = {
  setCurrentProject(state, payload) {
    state.projects.current = payload
  },
  setCurrentUser(state, payload) {
    state.user.current = payload
  },
  setAuthToken(state, payload) {
    state.auth.token = payload
  },
  setAuthExpires(state, payload) {
    state.auth.expires = payload
  },
  setAuthPayload(state, payload) {
    state.auth.payload = payload
  },
}
export const actions = {
  getCurrentProject({ state, commit }, params) {
    const id = Number(params.id)
    const currentProject = state.projects.list.find(
      (project) => project.id === id || null
    )
    commit('setCurrentProject', currentProject)
  },
  getCurrentUser({ commit }, user) {
    commit('setCurrentUser', user)
  },
  getAuthToken({ commit }, token) {
    commit('setAuthToken', token)
  },
  getAuthExpires({ commit }, expires) {
    expires = expires || 0
    commit('setAuthExpires', expires)
  },
  getAuthPayload({ commit }, jwtPayload) {
    jwtPayload = jwtPayload || {}
    commit('setAuthPayload', jwtPayload)
  },
}
