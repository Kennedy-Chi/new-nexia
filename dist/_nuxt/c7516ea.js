(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{351:function(t,n,e){var content=e(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(150).default)("eb15011a",content,!0,{sourceMap:!1})},354:function(t,n,e){"use strict";e.r(n);var l=e(8),o=(e(49),{methods:{logout:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return n.stop()}}),n)})))()}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),c=(e(359),e(57)),component=Object(c.a)(o,(function(){var t=this,n=t._self._c;return n("section",{staticClass:"nav-section wf-section"},[n("div",{staticClass:"navbar w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-content-holder"},[n("div",[n("nuxt-link",{staticClass:"brand-logo",attrs:{to:"/"}},[n("img",{staticClass:"site-logo",attrs:{src:"/Logo.png",loading:"lazy",alt:""}})]),t._v(" "),n("div",{attrs:{id:"ytWidget"}})],1),t._v(" "),n("nav",{staticClass:"nav-menu w-nav-menu",attrs:{role:"navigation"}},[n("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:"/"}},[t._v("Home")]),n("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:"/about"}},[t._v("About Us")]),n("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:"/contact"}},[t._v("Contact")]),n("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:"/plan"}},[t._v("Plan")]),n("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:"/faq"}},[t._v("Faq")]),n("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:"/news"}},[t._v("News")]),t._v(" "),t.isAuthenticated?t._e():n("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:"/signup"}},[t._v("Signup")]),t._v(" "),t.isAuthenticated?n("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:"/dashboard"}},[t._v("Dashboard")]):t._e(),t._v(" "),t.isAuthenticated?n("span",{staticClass:"each-nav-link w-nav-link",on:{click:t.logout}},[t._v("logout")]):t._e(),t._v(" "),t.isAuthenticated?t._e():n("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:"/login"}},[t._v("login")])],1),t._v(" "),t._m(0)])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"menu-button w-nav-button"},[t("div",{staticClass:"icon w-icon-nav-menu"})])}],!1,null,null,null);n.default=component.exports},359:function(t,n,e){"use strict";e(351)},360:function(t,n,e){var l=e(149)((function(i){return i[1]}));l.push([t.i,".site-logo{max-width:140px}",""]),l.locals={},t.exports=l}}]);