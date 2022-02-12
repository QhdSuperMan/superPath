import { useStore } from "vuex";
import type { State } from './index'

import { Getters } from './utils'

interface hha {
  state: State,
  getters: Getters
}


const useHStore = (): hha => {
  const { state, getters }: hha = useStore<State>()
  return { state, getters }
}
export { useHStore }
export default useHStore