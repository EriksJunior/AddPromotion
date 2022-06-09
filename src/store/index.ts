import Vuex, {StoreOptions} from 'vuex'

// import * as state from "./state";
// import * as getters from "./getters";
// import * as mutations from "./mutations";
// import * as actions from "./actions";

import home from "../components/Home/store"

const store: StoreOptions<any> = {
    modules:{
      home
    }
}

export default new Vuex.Store(store)