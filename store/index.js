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
        name: 'MyProject02MyProject02MyProject02MyProject02',
        updatedAt: '2020-04-05T12:00:00+09:00',
      },
      { id: 3, name: 'MyProject03', updatedAt: '2020-04-03T12:00:00+09:00' },
      { id: 4, name: 'MyProject04', updatedAt: '2020-04-04T12:00:00+09:00' },
      { id: 5, name: 'MyProject05', updatedAt: '2020-04-01T12:00:00+09:00' },
    ],
  },
})
export const gatters = {}
export const mutations = {
  setCurrentProject(state, payload) {
    state.projects.current = payload
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
}
