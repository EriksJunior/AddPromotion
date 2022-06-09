import {MutationTree, ActionTree, GetterTree} from 'vuex'

    interface  Istate {
        products: Array<string>
    }

    interface IRootState {
        home:Istate;
    }

    const state:Istate = {
        products: ["gfdgfd"]
    }

    const getters:GetterTree<Istate,IRootState> = {
        productCount: (state: any) => {
            return state.produtcts
        }
    }

    const mutations:MutationTree<Istate> = {
        SET_PRODUCTS: (state: any, products: any) => {
            state.products = products;
        }
    }

    const actions:ActionTree<Istate, IRootState> = {
        getProducts: ({ commit }: any) => {
            commit('SET_PRODUCTS', console.log('funcionando essa merda'))
        }
    }

    export default {
        namespace: true,
        state,
        actions,
        mutations,
        getters
    }
