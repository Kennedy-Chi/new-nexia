(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{365:function(e,t,n){"use strict";n.r(t);var r=n(8),o=(n(49),{data:function(){return{company:""}},methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},getCompany:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.get("/company");case 3:return n=t.sent,t.next=6,n.data.data;case 6:e.company=t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.response.data);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}},mounted:function(){this.setFileURL(),this.getCompany()}}),c=n(57),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"dashboard-footer"},[t("div",[e._v("\n    "+e._s((new Date).getFullYear())+" Copyright "+e._s(e.company.companyName)+", All\n    Rights Reserved.\n  ")])])}),[],!1,null,null,null);t.default=component.exports}}]);