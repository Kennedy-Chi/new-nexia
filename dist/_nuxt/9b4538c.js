(window.webpackJsonp=window.webpackJsonp||[]).push([[56,23,24],{351:function(t,e,c){var content=c(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(150).default)("eb15011a",content,!0,{sourceMap:!1})},354:function(t,e,c){"use strict";c.r(e);var l=c(8),o=(c(49),{methods:{logout:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),n=(c(359),c(57)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"nav-section wf-section"},[e("div",{staticClass:"navbar w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"navbar-content-holder"},[e("div",[e("nuxt-link",{staticClass:"brand-logo",attrs:{to:"/"}},[e("img",{staticClass:"site-logo",attrs:{src:"/Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{attrs:{id:"ytWidget"}})],1),t._v(" "),e("nav",{staticClass:"nav-menu w-nav-menu",attrs:{role:"navigation"}},[e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:"/"}},[t._v("Home")]),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:"/about"}},[t._v("About Us")]),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:"/contact"}},[t._v("Contact")]),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:"/plan"}},[t._v("Plan")]),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:"/faq"}},[t._v("Faq")]),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:"/news"}},[t._v("News")]),t._v(" "),t.isAuthenticated?t._e():e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:"/signup"}},[t._v("Signup")]),t._v(" "),t.isAuthenticated?e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:"/dashboard"}},[t._v("Dashboard")]):t._e(),t._v(" "),t.isAuthenticated?e("span",{staticClass:"each-nav-link w-nav-link",on:{click:t.logout}},[t._v("logout")]):t._e(),t._v(" "),t.isAuthenticated?t._e():e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:"/login"}},[t._v("login")])],1),t._v(" "),t._m(0)])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"menu-button w-nav-button"},[t("div",{staticClass:"icon w-icon-nav-menu"})])}],!1,null,null,null);e.default=component.exports},358:function(t,e,c){"use strict";c.r(e);var l=c(8),o=(c(49),{data:function(){return{company:"",address:"",phone:""}},methods:{loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var c=document.querySelector("#footer");c?c.appendChild(e):console.error("Could not find app node to append script element")},setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},getCompany:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return c=e.sent,e.next=6,c.data.data;case 6:t.company=e.sent,t.address=c.data.data.media[0],t.phone=c.data.data.media[2],e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.response.data);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}},mounted:function(){this.loadScript(),this.setFileURL()}}),n=c(57),component=Object(n.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("section",{staticClass:"footer wf-section",attrs:{id:"footer"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"footer-content-holder"},[e("div",{staticClass:"inner-footer"},[e("div",{staticClass:"footer-logo-part"},[e("div",{staticClass:"footer-logo-holder"},[e("img",{staticClass:"image-18",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/646ac47cdfe239308357e1a8_logo_default.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"footer-texts-holder"},[e("div",{staticClass:"footer-top-text"},[t._v("\n              Fusce interdum ipsum egestas urna amet fringilla, et placerat ex\n              venenatis. Aliquet luctus pharetra. Proin sed fringilla lectusar\n              sit amet tellus in mollis. Proin nec egestas nibh, eget egestas\n              urna. Phasellus sit amet vehicula nunc. In hac habitasse platea\n              dictumst.\n            ")])]),t._v(" "),e("div",{staticClass:"icon-link-holder"},[e("a",{staticClass:"footer-link-icon w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-19",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/64725622c7cd7ef4f61b7468_facebook-round-svgrepo-com%201.svg",loading:"lazy",alt:""}})]),e("a",{staticClass:"footer-link-icon w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-20",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6472561a7d567f3b94569683_twitter-round-svgrepo-com%201.svg",loading:"lazy",alt:""}})]),e("a",{staticClass:"footer-link-icon w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-21",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/647256138126600a5a904a34_instagram-f-svgrepo-com%201.svg",loading:"lazy",alt:""}})])])]),t._v(" "),e("div",{staticClass:"footer-other-page"},[e("div",{staticClass:"footer-header-holder"},[e("h1",{staticClass:"footer-header"},[t._v("Additional Pages"),e("br")])]),t._v(" "),e("div",{staticClass:"footer-page-flexer"},[e("div",{staticClass:"each-footer-page"},[e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("a",{staticClass:"link-3",attrs:{href:"#"}},[t._v("History")])])]),t._v(" "),e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("a",{staticClass:"link-3",attrs:{href:"#"}},[t._v("Approach")])])]),t._v(" "),e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("a",{staticClass:"link-3",attrs:{href:"#"}},[t._v("Partners")])])])]),t._v(" "),e("div",{staticClass:"each-footer-page"},[e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("a",{staticClass:"link-3",attrs:{href:"#"}},[t._v("Front Page")])])]),t._v(" "),e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("a",{staticClass:"link-3",attrs:{href:"#"}},[t._v("Events")])])]),t._v(" "),e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("a",{staticClass:"link-3",attrs:{href:"#"}},[t._v("Team")])])])])])]),t._v(" "),e("div",{staticClass:"sucribe-other-page"},[e("div",{staticClass:"footer-header-holder"},[e("h1",{staticClass:"footer-header"},[t._v("Subscribe"),e("br")])]),t._v(" "),e("div",{staticClass:"light-text-holder"},[e("div",{staticClass:"footer-top-text lighting"},[t._v("\n              Sign up for Alerts, Special Offers, Education and Updates.\n            ")])]),t._v(" "),e("div",{staticClass:"footer-input-holder"},[e("div",{staticClass:"footer-input-block w-form"},[e("form",{attrs:{id:"email-form",name:"email-form","data-name":"Email Form",method:"get"}},[e("div",{staticClass:"input-icon-flexer"},[e("input",{staticClass:"text-field w-input",attrs:{type:"email",maxlength:"256",name:"email-2","data-name":"Email 2",placeholder:"",id:"email-2",required:""}}),t._v(" "),e("div",{staticClass:"footer-yellow-icon"},[e("img",{staticClass:"image-22",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473ead14eeb1ff94ab83e2a_long-arrow-right-icon%201.svg",loading:"lazy",alt:""}})])]),t._v(" "),e("div",{staticClass:"input-icon-flexer"},[e("input",{staticClass:"text-field w-input",attrs:{type:"email",maxlength:"256",name:"email-2","data-name":"Email 2",placeholder:"",id:"email-2",required:""}}),t._v(" "),e("div",{staticClass:"footer-yellow-icon"},[e("img",{staticClass:"image-37",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/64832b870db34f71153d13fc_loader-icon%201.svg",loading:"lazy",alt:""}})])])]),t._v(" "),e("div",{staticClass:"w-form-done"},[e("div",[t._v("Thank you! Your submission has been received!")])]),t._v(" "),e("div",{staticClass:"w-form-fail"},[e("div",[t._v("\n                  Oops! Something went wrong while submitting the form.\n                ")])])])]),t._v(" "),e("div",{staticClass:"yellow-text-foot"},[e("div",{staticClass:"footer-top-text yellow"},[e("a",{staticClass:"link-4",attrs:{href:"#"}},[t._v("Access Archive")])])])]),t._v(" "),e("div",{staticClass:"footer-social-media"},[e("div",{staticClass:"footer-header-holder"},[e("h1",{staticClass:"footer-header"},[t._v("Instagram Feed"),e("br")])]),t._v(" "),e("div",{staticClass:"media-box-flexer"},[e("a",{staticClass:"each-media-box w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-23",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473ef0b71bd1ec3d6e8ef2d_17861742107367300-s.jpg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"media-cover active"},[e("img",{staticClass:"image-24",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473ef9c1abb27b86bb87bf6_instagram-svgrepo-com%201.svg",loading:"lazy",alt:""}})])]),e("a",{staticClass:"each-media-box w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-23",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473f13f107043aab0901250_17876975147110586-s.jpg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"media-cover"},[e("img",{staticClass:"image-24",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473ef9c1abb27b86bb87bf6_instagram-svgrepo-com%201.svg",loading:"lazy",alt:""}})])]),e("a",{staticClass:"each-media-box w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-23",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473f16afe15e42cfa74711f_17881737650044870-s.jpg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"media-cover"},[e("img",{staticClass:"image-24",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473ef9c1abb27b86bb87bf6_instagram-svgrepo-com%201.svg",loading:"lazy",alt:""}})])]),e("a",{staticClass:"each-media-box w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-23",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473f1a2107043aab0905487_17894578420782119-s.jpg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"media-cover"},[e("img",{staticClass:"image-24",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473ef9c1abb27b86bb87bf6_instagram-svgrepo-com%201.svg",loading:"lazy",alt:""}})])]),e("a",{staticClass:"each-media-box w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-23",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473f1c9101c81b742891c86_17983664692318714-s.jpg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"media-cover"},[e("img",{staticClass:"image-24",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473ef9c1abb27b86bb87bf6_instagram-svgrepo-com%201.svg",loading:"lazy",alt:""}})])]),e("a",{staticClass:"each-media-box w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-23",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473f1e9101c81b742892fb2_18187364980025823-s.jpg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"media-cover"},[e("img",{staticClass:"image-24",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473ef9c1abb27b86bb87bf6_instagram-svgrepo-com%201.svg",loading:"lazy",alt:""}})])])])])]),t._v(" "),e("div",{staticClass:"footer-buttom-line"}),t._v(" "),e("div",{staticClass:"buttom-text-holder"},[e("div",{staticClass:"footer-buttom-text"},[t._v("\n          Copyright © 2012-2017 crypterio Theme by\n          "),e("a",{staticClass:"link-5",attrs:{href:"#"}},[t._v("Stylemix themes")]),t._v(". All rights reserved\n        ")])])])])])}],!1,null,null,null);e.default=component.exports},359:function(t,e,c){"use strict";c(351)},360:function(t,e,c){var l=c(149)((function(i){return i[1]}));l.push([t.i,".site-logo{max-width:140px}",""]),l.locals={},t.exports=l},477:function(t,e,c){"use strict";c.r(e);var l={methods:{loadScript:function(){var t=document.getElementById("script");null!=t&&document.body.removeChild(t);var script=document.createElement("script");script.type="text/javascript",script.src="/script/home.js",script.async=!0,script.id="script";var e=document.querySelector("#footer");e?e.appendChild(script):console.error("Could not find app node to append script element")}},mounted:function(){this.loadScript()},components:{HomeDarkNavigation:c(354).default}},o=c(57),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"news"},[e("home-dark-navigation"),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),e("home-footer")],1)}),[function(){var t=this,e=t._self._c;return e("section",{staticClass:"news-hero wf-section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"short-content-holder"},[e("div",{staticClass:"top-hint-holder dark"},[e("div",{staticClass:"top-nav-content"},[e("div",{staticClass:"nav-link-text white"},[e("a",{staticClass:"home-link white",attrs:{href:"#"}},[t._v("Home")])])]),t._v(" "),e("img",{staticClass:"hero-arrow-push",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/648022a70480e81309435a42_arrow-up-337-svgrepo-com%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"nav-link-text white"},[t._v("Company overviiew")])]),t._v(" "),e("div",{staticClass:"news-head-holder"},[e("h1",{staticClass:"section-head off"},[t._v("Contact two")])])])])])},function(){var t=this,e=t._self._c;return e("section",{staticClass:"news-section-two wf-section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"news-two-content"},[e("div",{staticClass:"first-box-news"},[e("div",{staticClass:"each-news-set"},[e("div",{staticClass:"news-header-top"},[e("h1",{staticClass:"mini-header"},[t._v("Everything about Crypto Coins")])]),t._v(" "),e("div",{staticClass:"rows-icon-texts"},[e("div",{staticClass:"first-icon-row"},[e("div",{staticClass:"set-icon"},[e("img",{staticClass:"set-time",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/648028cd37adfd5932f7b7dc_clock-svgrepo-com%20(2)%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"thick-light-text"},[t._v("June 28, 2018")])]),t._v(" "),e("div",{staticClass:"set-icon"},[e("div",{staticClass:"thick-light-text"},[t._v("\n                    Posted by:"),e("span",{staticClass:"thick"},[t._v(" admin")])])]),t._v(" "),e("div",{staticClass:"set-icon cut-short"},[e("div",{staticClass:"thick-light-text"},[t._v("\n                    Category: Blockchain, Cryptocurrency\n                  ")])])]),t._v(" "),e("div",{staticClass:"second-icon-row"},[e("div",{staticClass:"thick-light-text"},[e("a",{staticClass:"top-news-link",attrs:{href:"#"}},[t._v("No Comments")])])])]),t._v(" "),e("img",{staticClass:"background-1",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/64802c050d45637680525214_Freedom-1-960x550.jpg",loading:"lazy",sizes:"(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 92vw, (max-width: 1279px) 61vw, 69vw",srcset:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/64802c050d45637680525214_Freedom-1-960x550-p-500.jpg 500w, https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/64802c050d45637680525214_Freedom-1-960x550-p-800.jpg 800w, https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/64802c050d45637680525214_Freedom-1-960x550.jpg 960w",alt:""}}),t._v(" "),e("div",{staticClass:"news-text-holder"},[e("div",{staticClass:"mini-texts odd"},[t._v("\n                Everything about Crypto Coins June 28, 2018 Posted by: admin\n                Category: Blockchain, Cryptocurrency No Comments Crypterio is\n                Cryptocurrency Investments and ICO Consulting WordPress theme,\n                that perfectly fits for any type of crypto-consulting project,\n                including ICO Agencies, Bitcoin Traders, and private-practice\n                ICO Advisors. Those interested in opening a cryptocurrency\n                consulting business, or launching their own cryptocurrency\n              ")])]),t._v(" "),e("div",{staticClass:"new-button-holder"},[e("div",{staticClass:"yellow-black-button"},[e("div",{staticClass:"button-header-holder"},[e("h5",{staticClass:"yellow-slide-header black"},[t._v("Get Started")])]),t._v(" "),e("img",{staticClass:"image-11",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/646ca40b5abf546bdb737529_line-angle-right-icon%201.svg",loading:"lazy",alt:""}})])])]),t._v(" "),e("div",{staticClass:"each-news-set"},[e("div",{staticClass:"news-header-top"},[e("h1",{staticClass:"mini-header"},[t._v("ICO & Crytpocurrency WP Theme")])]),t._v(" "),e("div",{staticClass:"rows-icon-texts"},[e("div",{staticClass:"first-icon-row"},[e("div",{staticClass:"set-icon"},[e("img",{staticClass:"set-time",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/648028cd37adfd5932f7b7dc_clock-svgrepo-com%20(2)%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"thick-light-text"},[t._v("June 28, 2018")])]),t._v(" "),e("div",{staticClass:"set-icon"},[e("div",{staticClass:"thick-light-text"},[t._v("\n                    Posted by:"),e("span",{staticClass:"thick"},[t._v(" admin")])])]),t._v(" "),e("div",{staticClass:"set-icon cut-short"},[e("div",{staticClass:"thick-light-text"},[t._v("\n                    Category: Blockchain, Cryptocurrency\n                  ")])])]),t._v(" "),e("div",{staticClass:"second-icon-row"},[e("div",{staticClass:"thick-light-text"},[e("a",{staticClass:"top-news-link",attrs:{href:"#"}},[t._v("No Comments")])])])]),t._v(" "),e("img",{staticClass:"background-1",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/64814d7760ae807f1dfd66ee_crypterio.jpg",loading:"lazy",sizes:"(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 92vw, (max-width: 1279px) 61vw, 69vw",srcset:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/64814d7760ae807f1dfd66ee_crypterio-p-500.jpg 500w, https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/64814d7760ae807f1dfd66ee_crypterio.jpg 800w",alt:""}}),t._v(" "),e("div",{staticClass:"news-text-holder"},[e("div",{staticClass:"mini-texts odd"},[t._v("\n                Everything about Crypto Coins June 28, 2018 Posted by: admin\n                Category: Blockchain, Cryptocurrency No Comments Crypterio is\n                Cryptocurrency Investments and ICO Consulting WordPress theme,\n                that perfectly fits for any type of crypto-consulting project,\n                including ICO Agencies, Bitcoin Traders, and private-practice\n                ICO Advisors. Those interested in opening a cryptocurrency\n                consulting business, or launching their own cryptocurrency\n              ")])]),t._v(" "),e("div",{staticClass:"new-button-holder"},[e("div",{staticClass:"yellow-black-button"},[e("div",{staticClass:"button-header-holder"},[e("h5",{staticClass:"yellow-slide-header black"},[t._v("Get Started")])]),t._v(" "),e("img",{staticClass:"image-11",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/646ca40b5abf546bdb737529_line-angle-right-icon%201.svg",loading:"lazy",alt:""}})])])]),t._v(" "),e("div",{staticClass:"each-news-set"},[e("div",{staticClass:"news-header-top"},[e("h1",{staticClass:"mini-header"},[t._v("What Is Bitcoin?")])]),t._v(" "),e("div",{staticClass:"rows-icon-texts"},[e("div",{staticClass:"first-icon-row"},[e("div",{staticClass:"set-icon"},[e("img",{staticClass:"set-time",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/648028cd37adfd5932f7b7dc_clock-svgrepo-com%20(2)%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"thick-light-text"},[t._v("June 28, 2018")])]),t._v(" "),e("div",{staticClass:"set-icon"},[e("div",{staticClass:"thick-light-text"},[t._v("\n                    Posted by:"),e("span",{staticClass:"thick"},[t._v(" admin")])])]),t._v(" "),e("div",{staticClass:"set-icon cut-short"},[e("div",{staticClass:"thick-light-text"},[t._v("\n                    Category: Blockchain, Cryptocurrency\n                  ")])])]),t._v(" "),e("div",{staticClass:"second-icon-row"},[e("div",{staticClass:"thick-light-text"},[e("a",{staticClass:"top-news-link",attrs:{href:"#"}},[t._v("No Comments")])])])]),t._v(" "),e("img",{staticClass:"background-1",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/64814d4db30ca30eee1f3527_pexels-photo-730547-1110x550.jpeg",loading:"lazy",sizes:"(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 92vw, (max-width: 1279px) 61vw, 69vw",srcset:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/64814d4db30ca30eee1f3527_pexels-photo-730547-1110x550-p-500.jpeg 500w, https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/64814d4db30ca30eee1f3527_pexels-photo-730547-1110x550-p-800.jpeg 800w, https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/64814d4db30ca30eee1f3527_pexels-photo-730547-1110x550-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/64814d4db30ca30eee1f3527_pexels-photo-730547-1110x550.jpeg 1110w",alt:""}}),t._v(" "),e("div",{staticClass:"news-text-holder"},[e("div",{staticClass:"mini-texts odd"},[t._v("\n                What Is Bitcoin? January 15, 2018 Posted by: admin Category:\n                BitCoin, Blockchain No Comments Was idea know must annoying\n                laborious exercise account is any resultant, it: complete any\n                or are it desires right pursue. Painful idea, a those or\n                except know except explorer procure desires - happiness occur\n                system great master explain: master loves but\n              ")])]),t._v(" "),e("div",{staticClass:"new-button-holder"},[e("div",{staticClass:"yellow-black-button"},[e("div",{staticClass:"button-header-holder"},[e("h5",{staticClass:"yellow-slide-header black"},[t._v("Get Started")])]),t._v(" "),e("img",{staticClass:"image-11",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/646ca40b5abf546bdb737529_line-angle-right-icon%201.svg",loading:"lazy",alt:""}})])])]),t._v(" "),e("div",{staticClass:"each-news-set"},[e("div",{staticClass:"news-header-top"},[e("h1",{staticClass:"mini-header"},[t._v("Bitcoin and Economic Freedom")])]),t._v(" "),e("div",{staticClass:"rows-icon-texts"},[e("div",{staticClass:"first-icon-row"},[e("div",{staticClass:"set-icon"},[e("img",{staticClass:"set-time",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/648028cd37adfd5932f7b7dc_clock-svgrepo-com%20(2)%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"thick-light-text"},[t._v("June 28, 2018")])]),t._v(" "),e("div",{staticClass:"set-icon"},[e("div",{staticClass:"thick-light-text"},[t._v("\n                    Posted by:"),e("span",{staticClass:"thick"},[t._v(" admin")])])]),t._v(" "),e("div",{staticClass:"set-icon cut-short"},[e("div",{staticClass:"thick-light-text"},[t._v("\n                    Category: Blockchain, Cryptocurrency\n                  ")])])]),t._v(" "),e("div",{staticClass:"second-icon-row"},[e("div",{staticClass:"thick-light-text"},[e("a",{staticClass:"top-news-link",attrs:{href:"#"}},[t._v("No Comments")])])])]),t._v(" "),e("img",{staticClass:"background-1",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/64802c050d45637680525214_Freedom-1-960x550.jpg",loading:"lazy",sizes:"(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 92vw, (max-width: 1279px) 61vw, 69vw",srcset:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/64802c050d45637680525214_Freedom-1-960x550-p-500.jpg 500w, https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/64802c050d45637680525214_Freedom-1-960x550-p-800.jpg 800w, https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/64802c050d45637680525214_Freedom-1-960x550.jpg 960w",alt:""}}),t._v(" "),e("div",{staticClass:"news-text-holder"},[e("div",{staticClass:"mini-texts odd"},[t._v("\n                Many businesses, large and small, have a huge source of great\n                ideas that can help them improve, innovate, and grow, and yet\n                so many of these companies never think of using this amazing\n                corporate asset. What is this highly valuable asset? Its own\n                people.\n              ")])]),t._v(" "),e("div",{staticClass:"new-button-holder"},[e("div",{staticClass:"yellow-black-button"},[e("div",{staticClass:"button-header-holder"},[e("h5",{staticClass:"yellow-slide-header black"},[t._v("Get Started")])]),t._v(" "),e("img",{staticClass:"image-11",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/646ca40b5abf546bdb737529_line-angle-right-icon%201.svg",loading:"lazy",alt:""}})])])])]),t._v(" "),e("div",{staticClass:"second-box-news"},[e("div",{staticClass:"news-search-form w-form"},[e("form",{attrs:{id:"email-form-3",name:"email-form-3","data-name":"Email Form 3",method:"get"}},[e("div",{staticClass:"space-flexer"},[e("input",{staticClass:"space-text-input w-input",attrs:{type:"text",autofocus:"true",maxlength:"256",name:"email-3","data-name":"Email 3",placeholder:"Search",id:"email-3",required:""}}),t._v(" "),e("div",{staticClass:"space-holder"},[e("img",{staticClass:"image-35",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/648139d4a664682e7e0fea5a_search-magnifying-glass-svgrepo-com%201.svg",loading:"lazy",alt:""}})])])]),t._v(" "),e("div",{staticClass:"w-form-done"},[e("div",[t._v("Thank you! Your submission has been received!")])]),t._v(" "),e("div",{staticClass:"w-form-fail"},[e("div",[t._v("Oops! Something went wrong while submitting the form.")])])]),t._v(" "),e("div",{staticClass:"row-one-links"},[e("div",{staticClass:"link-header-holder"},[e("h1",{staticClass:"first-link-header"},[t._v("Recent Posts")])]),t._v(" "),e("a",{staticClass:"each-news-link w-inline-block",attrs:{href:"#"}},[e("div",{staticClass:"slide-thick-text"},[t._v("\n                Everything about Crypto Coins\n              ")])]),e("a",{staticClass:"each-news-link w-inline-block",attrs:{href:"#"}},[e("div",{staticClass:"slide-thick-text"},[t._v("\n                ICO & Crytpocurrency WP Theme\n              ")])]),e("a",{staticClass:"each-news-link w-inline-block",attrs:{href:"#"}},[e("div",{staticClass:"slide-thick-text"},[t._v("What Is Bitcoin?")])]),e("a",{staticClass:"each-news-link w-inline-block",attrs:{href:"#"}},[e("div",{staticClass:"slide-thick-text"},[t._v("\n                Bitcoin and Economic Freedom\n              ")])])]),t._v(" "),e("div",{staticClass:"row-one-links"},[e("div",{staticClass:"link-header-holder"},[e("h1",{staticClass:"first-link-header"},[t._v("Recent Comments")])])]),t._v(" "),e("div",{staticClass:"row-one-links"},[e("div",{staticClass:"link-header-holder"},[e("h1",{staticClass:"first-link-header"},[t._v("Archives")])]),t._v(" "),e("div",{staticClass:"row-push"},[e("a",{staticClass:"each-news-link w-inline-block",attrs:{href:"#"}},[e("div",{staticClass:"slide-thick-text bold"},[t._v("June 2018")])]),e("a",{staticClass:"each-news-link w-inline-block",attrs:{href:"#"}},[e("div",{staticClass:"slide-thick-text bold"},[t._v("June 2018")])])])]),t._v(" "),e("div",{staticClass:"row-one-links"},[e("div",{staticClass:"link-header-holder"},[e("h1",{staticClass:"first-link-header"},[t._v("Categories")])]),t._v(" "),e("div",{staticClass:"row-push"},[e("a",{staticClass:"each-news-link w-inline-block",attrs:{href:"#"}},[e("div",{staticClass:"slide-thick-text"},[t._v("Bitcoin")])]),e("a",{staticClass:"each-news-link w-inline-block",attrs:{href:"#"}},[e("div",{staticClass:"slide-thick-text"},[t._v("Blockchain")])]),e("a",{staticClass:"each-news-link w-inline-block",attrs:{href:"#"}},[e("div",{staticClass:"slide-thick-text"},[t._v("Cryptocurrency")])])])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HomeDarkNavigation:c(354).default,HomeFooter:c(358).default})}}]);