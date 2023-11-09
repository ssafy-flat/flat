const routes = [
  {
    path: '',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '/sign-up', component: () => import('pages/sign-up/SignUpPage.vue')},
      { path: '/sign-in', component: () => import('pages/sign-in/SignInPage.vue')}
    ]
  },
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/test', component: () => import('pages/TestPage.vue')},
      { path: `/chat/room/enter/:roomId`, component: () => import('pages/chat/ChatRoomDetail.vue')},
      { path: '/chat/room', component: () => import('pages/chat/ChatRoomList.vue')},
      { path: '/property/register', component: () => import('pages/property/RegisterPropertyPage')},
      { path: '/property/:propertyId', component: () => import('pages/property/PropertyDetailPage')},
      { path: '/my-page', component: () => import('pages/MyPage.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes;
