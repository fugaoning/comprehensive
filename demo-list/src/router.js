import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from './views/index.vue'


export default new Router({
	routes: [
		{
			path: '/',
			component: Layout,
			children:[
				{
					path:'/sortjs',
					name:'sort-js',
					component: () => import('@/views/sortjs/index.vue'),
				},
				{
					path:'/editor',
					name:'wangEditor',
					component: () => import('@/views/editor/index.vue'),
				},
				{
					path:'/wxshare',
					name:'wxshare',
					component: () => import('@/views/wxshare/index.vue'),
				},
				{
					path:'/scroll',
					name:'seamless-scroll',
					component: () => import('@/views/scroll/index.vue'),
				},
				{
					path:'/html2canvas',
					name:'html2canvas',
					component: () => import('@/views/html2canvas/index.vue'),
				},
				{
					path:'/clipboard',
					name:'clipboard',
					component: () => import('@/views/clipboard/index.vue'),
				},
				{
					path:'/video',
					name:'video',
					component: () => import('@/views/video/index.vue'),
				}
			]
			
		},
		{
			path: '*',
			redirect: '/',
			component: Layout,
      		meta: {}
		}
	],
	scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return {
      x: 0,
      y: 0
    };
  }
})
