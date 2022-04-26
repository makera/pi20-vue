import {createStore} from 'vuex'

// Create a new store instance.
const store = createStore({
    state() {
        return {
            cols: [
                {title: 'ID', name: 'id'},
                {title: 'Название', name: 'name'},
                {title: 'Описание', name: 'des'}
            ],
            rows: JSON.parse(window.localStorage.getItem('rows')) || []
        }
    },
    mutations: {
        addRow(state, row) {
            state.rows.push({
                des: row.des,
                name: row.name,
                id: (Math.max.apply(null, [0, ...state.rows.map(({id}) => id)])) + 1
            })
            window.localStorage.setItem('rows', JSON.stringify(state.rows))
        },
        removeRow(state, id) {
            state.rows.splice(state.rows.findIndex(({id: prodId}) => id === prodId), 1)
            window.localStorage.setItem('rows', JSON.stringify(state.rows))
        }
    },
    actions: {
        removeRow({commit}, id) {
            commit('removeRow', id)
        }
    }
})

export default store