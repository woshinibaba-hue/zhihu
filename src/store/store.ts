import { createStore } from 'vuex'
import { testData, ColumDetailData, ColumProps, ColumDetail } from '../testData'

interface UserInfo {
  isLogin: boolean
  id?: number
  name?: string
}
export interface GloballProps {
  columns: ColumProps[]
  ColumDetails: ColumDetail[]
  user: UserInfo
}
// 创建store
export default createStore<GloballProps>({
  state: {
    columns: testData,
    ColumDetails: ColumDetailData,
    user: { isLogin: false }
  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, name: '张三' }
    }
  },
  getters: {
    // 获取专栏详情
    getColum: state => (id: number) => {
      return state.columns.find(item => item.id === id)
    },
    // 获取对应专栏当中的内容详情
    getProps: state => (id: number) => {
      return state.ColumDetails.filter(item => item.columId === id)
    }
  }
})
