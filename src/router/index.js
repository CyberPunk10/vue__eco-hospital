import VueRouter from 'vue-router'

import MainPage from '../pages/MainPage'
import AllFilmsPage from '../pages/AllFilmsPage'
import FilmPage from '../pages/FilmPage'
import AllDocumentsPage from '../pages/AllDocumentsPage.vue'
import NotFound from '../pages/404'
import FilmsLayout from '../pages/FilmsLayout'
import DocumentsLayout from '../pages/DocumentsLayout'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/films',
      name: 'filmsLayout',
      component: FilmsLayout,
      children: [
        {
          path: '',
          name: 'films',
          component: AllFilmsPage
        },
        {
          path: ':id',
          name: 'filmPage',
          component: FilmPage,
          beforeEnter: (to, from, next) => {
            if (localStorage.getItem('user')) {
              next()
            } else {
              next({ name: 'films' })
            }
          }
        },
        {
          path: '*/*',
          redirect: { name: 'films' }
        },
      ]
    },
    {
      path: '/ecohospital',
      name: 'documentsLayout',
      component: DocumentsLayout,
      children: [
        {
          path: '',
          name: 'documents',
          component: AllDocumentsPage
        },
        {
          path: '*/*',
          redirect: { name: 'documents' }
        },
      ]
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    },
  ]
})