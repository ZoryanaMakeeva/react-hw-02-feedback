(this["webpackJsonpreact-hw-02-feedback"]=this["webpackJsonpreact-hw-02-feedback"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),l=a.n(r),o=a(3),u=a(4),i=a(5),s=a(7),d=a(6),v=(a(13),function(e){var t=e.options,a=e.onLeaveFeedback;return c.a.createElement("div",{className:"feedback-options"},t.map((function(e){return c.a.createElement("button",{key:e,className:"button",value:e,onClick:a},e)})))}),b=function(e){var t=e.good,a=e.neutral,n=e.bad,r=e.total,l=e.positivePercentage;return c.a.createElement("div",null,c.a.createElement("div",null,"Good: ",t),c.a.createElement("div",null,"Neutral: ",a),c.a.createElement("div",null,"Bad: ",n),c.a.createElement("div",null,"Total: ",r),c.a.createElement("div",null,"Positive feedback: ",l,"%"))},m=function(e){var t=e.title,a=e.children;return c.a.createElement("div",{className:"section"},c.a.createElement("h2",null,t),a)},f=function(e){var t=e.message;return c.a.createElement("p",null,t)},k=(a(14),function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.feedbackHandler=function(t){var a=t.target.value;e.setState(Object(o.a)({},a,e.state[a]+1))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}))},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,a=e.countTotalFeedback();return a?Math.round(100*t/a):0},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,r=this.countTotalFeedback(),l=this.countPositiveFeedbackPercentage();return c.a.createElement("div",{className:"feedback-widget"},c.a.createElement(m,{title:"Please leave feedback"},c.a.createElement(v,{options:Object.keys(this.state),onLeaveFeedback:this.feedbackHandler})),c.a.createElement(m,{title:"Statistics"},r?c.a.createElement(b,{good:t,neutral:a,bad:n,total:r,positivePercentage:l}):c.a.createElement(f,{message:"No feedback given"})))}}]),a}(n.Component));var E=function(){return c.a.createElement(k,null)};l.a.render(c.a.createElement(E,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.27d43e4d.chunk.js.map