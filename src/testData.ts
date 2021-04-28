// 定义一个接口，用于专栏
export interface ColumProps {
  id: number
  title: string
  avatar?: string
  description: string
}
// 定义接口，用于专栏详情
export interface ColumDetail {
  id: number
  title: string
  content: string
  image?: string
  createAt: string
  columId: number
}
export const testData: ColumProps[] = [
  {
    id: 1,
    title: '专栏1',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41a8b7d9c60b68cdd1ec.jpg?x-oss-process=image/resize,m_pad,h_100,w_100',
    description:
      '嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯'
  },
  {
    id: 2,
    title: '专栏2',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41a8b7d9c60b68cdd1ec.jpg?x-oss-process=image/resize,m_pad,h_100,w_100',
    description: '嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额'
  },
  {
    id: 3,
    title: '专栏3',
    description: '嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额'
  },
  {
    id: 4,
    title: '专栏4',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41a8b7d9c60b68cdd1ec.jpg?x-oss-process=image/resize,m_pad,h_100,w_100',
    description: '嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额'
  },
  {
    id: 5,
    title: '专栏5',
    description: '嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额'
  },
  {
    id: 6,
    title: '专栏6',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41a8b7d9c60b68cdd1ec.jpg?x-oss-process=image/resize,m_pad,h_100,w_100',
    description: '嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额嗯嗯嫩恩恩额'
  }
]

export const ColumDetailData: ColumDetail[] = [
  {
    id: 101,
    title: '子标题1',
    content:
      '嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢',
    image: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5e912f4c7f24af242a382b8c.png?x-oss-process=image/resize,m_fill,h_110,w_200',
    createAt: '2021-04-26 11:32',
    columId: 1
  },
  {
    id: 102,
    title: '子标题2',
    content: '嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢',
    image: '',
    createAt: '2021-04-26 11:32',
    columId: 1
  },
  {
    id: 103,
    title: '子标题3',
    content: '嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢',
    image: '',
    createAt: '2021-04-26 11:32',
    columId: 3
  },
  {
    id: 104,
    title: '子标题4',
    content: '嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢',
    image: '',
    createAt: '2021-04-26 11:32',
    columId: 1
  },
  {
    id: 105,
    title: '子标题5',
    content: '嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢',
    image: '',
    createAt: '2021-04-26 11:32',
    columId: 3
  },
  {
    id: 106,
    title: '子标题6',
    content: '嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢',
    image: '',
    createAt: '2021-04-26 11:32',
    columId: 1
  },
  {
    id: 107,
    title: '子标题7',
    content: '嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢',
    image: '',
    createAt: '2021-04-26 11:32',
    columId: 1
  },
  {
    id: 108,
    title: '子标题1',
    content: '嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢',
    image: '',
    createAt: '2021-04-26 11:32',
    columId: 4
  },
  {
    id: 109,
    title: '子标题8',
    content: '嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢',
    image: '',
    createAt: '2021-04-26 11:32',
    columId: 1
  },
  {
    id: 120,
    title: '子标题9',
    content: '嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢嗯嗯嫩呢',
    image: '',
    createAt: '2021-04-26 11:32',
    columId: 5
  }
]
