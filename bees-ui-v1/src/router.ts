import {createWebHashHistory, createRouter} from 'vue-router'

const pathUrl = './views'
const docPathChildren = './components'


const history = createWebHashHistory()
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: () => import(`${pathUrl}/Home.vue`)},
    {path: '/doc', component: () => import(`${pathUrl}/Doc.vue`), children: [
      {path: '', component: () => import(`${docPathChildren}/DocDemo.vue`)},
      {path: 'switch', component: () => import(`${docPathChildren}/SwitchDemo.vue`)},
      {path: 'button', component: () => import(`${docPathChildren}/ButtonDemo.vue`)},
      {path: 'dialog', component: () => import(`${docPathChildren}/DialogDemo.vue`)},
      {path: 'tabs', component: () => import(`${docPathChildren}/TabsDemo.vue`)}
    ]}
  ]
})

