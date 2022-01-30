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
    list: [],
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
  setProjectList(state, payload) {
    state.projects.list = payload
  },
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
  getProjectList({ commit }, projects) {
    projects = projects || []
    commit('setProjectList', projects)
  },
  getCurrentProject({ state, commit }, params) {
    let currentProject = null
    if (params && params.id) {
      const id = Number(params.id)
      currentProject = state.projects.list.find(
        (project) => project.id === id || null
      )
    }
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
