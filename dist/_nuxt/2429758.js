(window.webpackJsonp=window.webpackJsonp||[]).push([[41,23,24],{351:function(t,e,l){var content=l(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(150).default)("eb15011a",content,!0,{sourceMap:!1})},354:function(t,e,l){"use strict";l.r(e);var c=l(8),o=(l(49),{methods:{logout:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),n=(l(359),l(57)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"nav-section wf-section"},[e("div",{staticClass:"navbar w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"navbar-content-holder"},[e("div",[e("nuxt-link",{staticClass:"brand-logo",attrs:{to:"/"}},[e("img",{staticClass:"site-logo",attrs:{src:"/Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{attrs:{id:"ytWidget"}})],1),t._v(" "),e("nav",{staticClass:"nav-menu w-nav-menu",attrs:{role:"navigation"}},[e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:"/"}},[t._v("Home")]),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:"/about"}},[t._v("About Us")]),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:"/contact"}},[t._v("Contact")]),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:"/plan"}},[t._v("Plan")]),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:"/faq"}},[t._v("Faq")]),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:"/news"}},[t._v("News")]),t._v(" "),t.isAuthenticated?t._e():e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:"/signup"}},[t._v("Signup")]),t._v(" "),t.isAuthenticated?e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:"/dashboard"}},[t._v("Dashboard")]):t._e(),t._v(" "),t.isAuthenticated?e("span",{staticClass:"each-nav-link w-nav-link",on:{click:t.logout}},[t._v("logout")]):t._e(),t._v(" "),t.isAuthenticated?t._e():e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:"/login"}},[t._v("login")])],1),t._v(" "),t._m(0)])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"menu-button w-nav-button"},[t("div",{staticClass:"icon w-icon-nav-menu"})])}],!1,null,null,null);e.default=component.exports},358:function(t,e,l){"use strict";l.r(e);var c=l(8),o=(l(49),{data:function(){return{company:"",address:"",phone:""}},methods:{loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var l=document.querySelector("#footer");l?l.appendChild(e):console.error("Could not find app node to append script element")},setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},getCompany:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return l=e.sent,e.next=6,l.data.data;case 6:t.company=e.sent,t.address=l.data.data.media[0],t.phone=l.data.data.media[2],e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.response.data);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}},mounted:function(){this.loadScript(),this.setFileURL()}}),n=l(57),component=Object(n.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("section",{staticClass:"footer wf-section",attrs:{id:"footer"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"footer-content-holder"},[e("div",{staticClass:"inner-footer"},[e("div",{staticClass:"footer-logo-part"},[e("div",{staticClass:"footer-logo-holder"},[e("img",{staticClass:"image-18",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/646ac47cdfe239308357e1a8_logo_default.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"footer-texts-holder"},[e("div",{staticClass:"footer-top-text"},[t._v("\n              Fusce interdum ipsum egestas urna amet fringilla, et placerat ex\n              venenatis. Aliquet luctus pharetra. Proin sed fringilla lectusar\n              sit amet tellus in mollis. Proin nec egestas nibh, eget egestas\n              urna. Phasellus sit amet vehicula nunc. In hac habitasse platea\n              dictumst.\n            ")])]),t._v(" "),e("div",{staticClass:"icon-link-holder"},[e("a",{staticClass:"footer-link-icon w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-19",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/64725622c7cd7ef4f61b7468_facebook-round-svgrepo-com%201.svg",loading:"lazy",alt:""}})]),e("a",{staticClass:"footer-link-icon w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-20",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6472561a7d567f3b94569683_twitter-round-svgrepo-com%201.svg",loading:"lazy",alt:""}})]),e("a",{staticClass:"footer-link-icon w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-21",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/647256138126600a5a904a34_instagram-f-svgrepo-com%201.svg",loading:"lazy",alt:""}})])])]),t._v(" "),e("div",{staticClass:"footer-other-page"},[e("div",{staticClass:"footer-header-holder"},[e("h1",{staticClass:"footer-header"},[t._v("Additional Pages"),e("br")])]),t._v(" "),e("div",{staticClass:"footer-page-flexer"},[e("div",{staticClass:"each-footer-page"},[e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("a",{staticClass:"link-3",attrs:{href:"#"}},[t._v("History")])])]),t._v(" "),e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("a",{staticClass:"link-3",attrs:{href:"#"}},[t._v("Approach")])])]),t._v(" "),e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("a",{staticClass:"link-3",attrs:{href:"#"}},[t._v("Partners")])])])]),t._v(" "),e("div",{staticClass:"each-footer-page"},[e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("a",{staticClass:"link-3",attrs:{href:"#"}},[t._v("Front Page")])])]),t._v(" "),e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("a",{staticClass:"link-3",attrs:{href:"#"}},[t._v("Events")])])]),t._v(" "),e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("a",{staticClass:"link-3",attrs:{href:"#"}},[t._v("Team")])])])])])]),t._v(" "),e("div",{staticClass:"sucribe-other-page"},[e("div",{staticClass:"footer-header-holder"},[e("h1",{staticClass:"footer-header"},[t._v("Subscribe"),e("br")])]),t._v(" "),e("div",{staticClass:"light-text-holder"},[e("div",{staticClass:"footer-top-text lighting"},[t._v("\n              Sign up for Alerts, Special Offers, Education and Updates.\n            ")])]),t._v(" "),e("div",{staticClass:"footer-input-holder"},[e("div",{staticClass:"footer-input-block w-form"},[e("form",{attrs:{id:"email-form",name:"email-form","data-name":"Email Form",method:"get"}},[e("div",{staticClass:"input-icon-flexer"},[e("input",{staticClass:"text-field w-input",attrs:{type:"email",maxlength:"256",name:"email-2","data-name":"Email 2",placeholder:"",id:"email-2",required:""}}),t._v(" "),e("div",{staticClass:"footer-yellow-icon"},[e("img",{staticClass:"image-22",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473ead14eeb1ff94ab83e2a_long-arrow-right-icon%201.svg",loading:"lazy",alt:""}})])]),t._v(" "),e("div",{staticClass:"input-icon-flexer"},[e("input",{staticClass:"text-field w-input",attrs:{type:"email",maxlength:"256",name:"email-2","data-name":"Email 2",placeholder:"",id:"email-2",required:""}}),t._v(" "),e("div",{staticClass:"footer-yellow-icon"},[e("img",{staticClass:"image-37",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/64832b870db34f71153d13fc_loader-icon%201.svg",loading:"lazy",alt:""}})])])]),t._v(" "),e("div",{staticClass:"w-form-done"},[e("div",[t._v("Thank you! Your submission has been received!")])]),t._v(" "),e("div",{staticClass:"w-form-fail"},[e("div",[t._v("\n                  Oops! Something went wrong while submitting the form.\n                ")])])])]),t._v(" "),e("div",{staticClass:"yellow-text-foot"},[e("div",{staticClass:"footer-top-text yellow"},[e("a",{staticClass:"link-4",attrs:{href:"#"}},[t._v("Access Archive")])])])]),t._v(" "),e("div",{staticClass:"footer-social-media"},[e("div",{staticClass:"footer-header-holder"},[e("h1",{staticClass:"footer-header"},[t._v("Instagram Feed"),e("br")])]),t._v(" "),e("div",{staticClass:"media-box-flexer"},[e("a",{staticClass:"each-media-box w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-23",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473ef0b71bd1ec3d6e8ef2d_17861742107367300-s.jpg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"media-cover active"},[e("img",{staticClass:"image-24",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473ef9c1abb27b86bb87bf6_instagram-svgrepo-com%201.svg",loading:"lazy",alt:""}})])]),e("a",{staticClass:"each-media-box w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-23",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473f13f107043aab0901250_17876975147110586-s.jpg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"media-cover"},[e("img",{staticClass:"image-24",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473ef9c1abb27b86bb87bf6_instagram-svgrepo-com%201.svg",loading:"lazy",alt:""}})])]),e("a",{staticClass:"each-media-box w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-23",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473f16afe15e42cfa74711f_17881737650044870-s.jpg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"media-cover"},[e("img",{staticClass:"image-24",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473ef9c1abb27b86bb87bf6_instagram-svgrepo-com%201.svg",loading:"lazy",alt:""}})])]),e("a",{staticClass:"each-media-box w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-23",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473f1a2107043aab0905487_17894578420782119-s.jpg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"media-cover"},[e("img",{staticClass:"image-24",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473ef9c1abb27b86bb87bf6_instagram-svgrepo-com%201.svg",loading:"lazy",alt:""}})])]),e("a",{staticClass:"each-media-box w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-23",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473f1c9101c81b742891c86_17983664692318714-s.jpg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"media-cover"},[e("img",{staticClass:"image-24",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473ef9c1abb27b86bb87bf6_instagram-svgrepo-com%201.svg",loading:"lazy",alt:""}})])]),e("a",{staticClass:"each-media-box w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-23",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473f1e9101c81b742892fb2_18187364980025823-s.jpg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"media-cover"},[e("img",{staticClass:"image-24",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473ef9c1abb27b86bb87bf6_instagram-svgrepo-com%201.svg",loading:"lazy",alt:""}})])])])])]),t._v(" "),e("div",{staticClass:"footer-buttom-line"}),t._v(" "),e("div",{staticClass:"buttom-text-holder"},[e("div",{staticClass:"footer-buttom-text"},[t._v("\n          Copyright © 2012-2017 crypterio Theme by\n          "),e("a",{staticClass:"link-5",attrs:{href:"#"}},[t._v("Stylemix themes")]),t._v(". All rights reserved\n        ")])])])])])}],!1,null,null,null);e.default=component.exports},359:function(t,e,l){"use strict";l(351)},360:function(t,e,l){var c=l(149)((function(i){return i[1]}));c.push([t.i,".site-logo{max-width:140px}",""]),c.locals={},t.exports=c},472:function(t,e,l){"use strict";l.r(e);var c={methods:{loadScript:function(){var t=document.getElementById("script");null!=t&&document.body.removeChild(t);var script=document.createElement("script");script.type="text/javascript",script.src="/script/home.js",script.async=!0,script.id="script";var e=document.querySelector("#footer");e?e.appendChild(script):console.error("Could not find app node to append script element")}},mounted:function(){this.loadScript()},components:{HomeDarkNavigation:l(354).default}},o=l(57),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact"},[e("home-dark-navigation"),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),e("home-footer")],1)}),[function(){var t=this,e=t._self._c;return e("section",{staticClass:"contact-hero-section wf-section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"about-hero-content"},[e("div",{staticClass:"top-hint-holder"},[e("div",{staticClass:"top-nav-content"},[e("div",{staticClass:"nav-link-text"},[e("a",{staticClass:"home-link",attrs:{href:"#"}},[t._v("Home")])])]),t._v(" "),e("img",{staticClass:"hero-arrow-push",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6474006295fb51d4b877cd82_line-angle-right-icon%20(1)%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"nav-link-text"},[t._v("Company overviiew")])]),t._v(" "),e("div",{staticClass:"contact-top-holder"},[e("h1",{staticClass:"section-head"},[t._v("Contact two")])]),t._v(" "),e("div",{staticClass:"switch-side"},[e("div",{staticClass:"contact-info-content"},[e("div",{staticClass:"contact-text-holder"},[e("div",{staticClass:"assit-texts"},[t._v("\n                Please let us know if you have a question, want to leave a\n                comment, or would like further information about Blockchain\n                WP.\n              ")])]),t._v(" "),e("div",{staticClass:"top-contact-line"}),t._v(" "),e("div",{staticClass:"contact-sign-holder"},[e("h1",{staticClass:"mini-header"},[t._v("Contact Details")])]),t._v(" "),e("div",{staticClass:"contact-details-content"},[e("div",{staticClass:"contact-details-each"},[e("img",{staticClass:"details-locate-icon",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/64721cb32daee6c4e029d53d_location-pin-svgrepo-com%20(1)%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"text-info"},[t._v("\n                  1010 Avenue of the Moon"),e("br"),t._v("New York, NY 10018 US.\n                ")])]),t._v(" "),e("div",{staticClass:"contact-details-each"},[e("img",{staticClass:"details-call-icon",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6472063d0fd875785b4c1b25_call-191-svgrepo-com%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"text-info"},[t._v("+1 628 123 4000")])]),t._v(" "),e("div",{staticClass:"contact-details-each"},[e("img",{staticClass:"details-message-icon",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/647ff9042eff672c58ad4f0b_message-svgrepo-com%20(1)%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"text-info"},[e("a",{staticClass:"link-to",attrs:{href:"mailto:hello@Blockchain.wp"}},[t._v("hello@Blockchain.wp")])])])]),t._v(" "),e("div",{staticClass:"media-icon-link"},[e("a",{staticClass:"media-linked-icon w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"facebook-details-icon",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/64725622c7cd7ef4f61b7468_facebook-round-svgrepo-com%201.svg",loading:"lazy",alt:""}})]),e("a",{staticClass:"media-linked-icon w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"twiitt-details-icon",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6472561a7d567f3b94569683_twitter-round-svgrepo-com%201.svg",loading:"lazy",alt:""}})]),e("a",{staticClass:"media-linked-icon w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"insta-details-icon",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/647256138126600a5a904a34_instagram-f-svgrepo-com%201.svg",loading:"lazy",alt:""}})]),e("a",{staticClass:"media-linked-icon w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"goog-details-icon",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/647fecf390c034207705ae44_google-plus-alt-svgrepo-com%201.svg",loading:"lazy",alt:""}})]),e("a",{staticClass:"media-linked-icon w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"skp-details-icon",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/647fecfbae90552e4c950869_skype-round-svgrepo-com%201.svg",loading:"lazy",alt:""}})])])]),t._v(" "),e("div",{staticClass:"inputer-contact-holder"},[e("div",{staticClass:"contact-form w-form"},[e("form",{attrs:{id:"email-form-2",name:"email-form-2","data-name":"Email Form 2",method:"get"}},[e("div",{staticClass:"contact-input-flexer"},[e("div",{staticClass:"first-row"},[e("div",{staticClass:"input-lenght-holder"},[e("input",{staticClass:"input-contact-space w-input",attrs:{type:"text",autofocus:"true",maxlength:"256",name:"name","data-name":"Name",placeholder:"First name*",id:"name",required:""}})]),t._v(" "),e("div",{staticClass:"input-lenght-holder"},[e("input",{staticClass:"input-contact-space w-input",attrs:{type:"text",autofocus:"true",maxlength:"256",name:"name-3","data-name":"Name 3",placeholder:"Title*",id:"name-3",required:""}})]),t._v(" "),e("div",{staticClass:"input-lenght-holder"},[e("input",{staticClass:"input-contact-space w-input",attrs:{type:"text",autofocus:"true",maxlength:"256",name:"name-2","data-name":"Name 2",placeholder:"Company/Position*",id:"name-2",required:""}})]),t._v(" "),e("div",{staticClass:"input-lenght-holder"},[e("input",{staticClass:"input-contact-space w-input",attrs:{type:"text",autofocus:"true",maxlength:"256",name:"name-2","data-name":"Name 2",placeholder:"E-mail*",id:"name-2",required:""}})]),t._v(" "),e("div",{staticClass:"input-lenght-holder"},[e("input",{staticClass:"input-contact-space w-input",attrs:{type:"text",autofocus:"true",maxlength:"256",name:"name-2","data-name":"Name 2",placeholder:"Reason for contact*",id:"name-2",required:""}})])]),t._v(" "),e("div",{staticClass:"second-row"},[e("div",{staticClass:"input-lenght-holder"},[e("input",{staticClass:"input-contact-space w-input",attrs:{type:"text",autofocus:"true",maxlength:"256",name:"name-2","data-name":"Name 2",placeholder:"Area of interest*",id:"name-2",required:""}})]),t._v(" "),e("div",{staticClass:"input-lenght-holder"},[e("input",{staticClass:"input-contact-space w-input",attrs:{type:"text",autofocus:"true",maxlength:"256",name:"name-2","data-name":"Name 2",placeholder:"Subject*",id:"name-2",required:""}})]),t._v(" "),e("div",{staticClass:"input-lenght-holder"},[e("textarea",{staticClass:"contact-textarea w-input",attrs:{required:"",placeholder:"Example Text",maxlength:"5000",id:"field",name:"field","data-name":"Field"}})]),t._v(" "),e("div",{staticClass:"button-black"},[e("h5",{staticClass:"yellow-slide-header black"},[t._v("Submit")]),t._v(" "),e("img",{staticClass:"image-34",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/646ca40b5abf546bdb737529_line-angle-right-icon%201.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"button-black"},[e("img",{staticClass:"image-38",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/64832b870db34f71153d13fc_loader-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("h5",{staticClass:"yellow-slide-header black"},[t._v("Submit")]),t._v(" "),e("img",{staticClass:"image-34",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/646ca40b5abf546bdb737529_line-angle-right-icon%201.svg",loading:"lazy",alt:""}})])])])]),t._v(" "),e("div",{staticClass:"w-form-done"},[e("div",[t._v("Thank you! Your submission has been received!")])]),t._v(" "),e("div",{staticClass:"w-form-fail"},[e("div",[t._v("\n                  Oops! Something went wrong while submitting the form.\n                ")])])])])])])])])},function(){var t=this._self._c;return t("section",{staticClass:"contact-section-two wf-section"},[t("div",{staticClass:"contact-two-content"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HomeDarkNavigation:l(354).default,HomeFooter:l(358).default})}}]);