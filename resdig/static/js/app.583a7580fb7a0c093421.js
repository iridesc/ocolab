webpackJsonp([1],{"3+of":function(t,e){},"5uNP":function(t,e){},"9M+g":function(t,e){},Dan6:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),o={name:"Test",props:["testData"],created:function(){setInterval(()=>{console.log("TEST",this.testData)},2e3)},methods:{},data:()=>({hello:"hello world!"})},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("***********TEST*************")]),this._v(" "),e("h1",[this._v(this._s(this.hello))])])},staticRenderFns:[]};var n=s("VU/8")(o,r,!1,function(t){s("uSUO")},"data-v-7396d672",null).exports,i={name:"StatusBar",props:["tasks","engines"],data:()=>({})},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{staticClass:"textCenter"},[s("b-row",[0!=t.tasks.length?s("b-col",t._l(t.tasks,function(e){return s("span",["Digging"==e.status?s("b-progress",[s("b-progress-bar",{attrs:{max:100,value:e.progress,animated:""}},[t._v(t._s(e.keyword))])],1):"Waiting"==e.status?s("b-badge",{attrs:{variant:"info",pill:""}},[t._v("\n          "+t._s(e.keyword+" "+e.status)+"\n        ")]):"Initing"==e.status?s("b-badge",{attrs:{variant:"secondary",pill:""}},[t._v("\n          "+t._s(e.keyword+" "+e.status)+"\n        ")]):t._e()],1)}),0):t._e(),t._v(" "),s("b-col",t._l(t.engines,function(e){return s("b-badge",{staticClass:"shadow",attrs:{variant:e.isActive?"success":"secondary",pill:""}},[t._v(t._s(e.name))])}),1)],1)],1)},staticRenderFns:[]};var c=s("VU/8")(i,d,!1,function(t){s("Dan6")},"data-v-1e00ea8c",null).exports,l=s("M4fF"),h=s.n(l),u={name:"GussList",props:["keyword"],watch:{keyword:function(t,e){this.guessList=["waiting inputing..."],this.debouncedGuess()}},created:function(){this.debouncedGuess=h.a.debounce(this.guess,1e3)},methods:{guess:function(){if(this.keyword.length>0){this.guessList=["Thinking..."];this.axios.get("j/subject_suggest/",{params:{q:this.keyword},headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36",Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8","Accept-Language":"zh-CN,zh;q=0.8"}}).then(t=>{console.log("*****************"),console.log(t.data)}).catch(t=>console.log("--------\n",t))}}},data:()=>({guessList:[]})},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"watch-example"}},t._l(t.guessList,function(e,a){return s("li",{key:a},[t._v(t._s(e))])}),0)},staticRenderFns:[]};var g=s("VU/8")(u,p,!1,function(t){s("jlKe")},"data-v-119f4e12",null).exports,f=s("sWbh"),m=s.n(f),v={encrypt:(t,e)=>m.a.encrypt(JSON.stringify(t),e),decrypt:(t,e)=>JSON.parse(m.a.decrypt(t,e))},y={name:"DigBar",components:{GuessList:g},props:["makeToast","resBoardData","PASSWORD"],methods:{dig(){let t=this.keyword,e=this.userKeywords.indexOf(t);-1==e?this.userKeywords.unshift(t):(this.userKeywords.splice(e,1),this.userKeywords.unshift(t)),this.axios.post("/api/",v.encrypt({reason:"checkKeyword",keyword:t},this.PASSWORD)).then(e=>{let s=v.decrypt(e.data,this.PASSWORD).status;if("recorded"==s){let e="/movie/"+encodeURIComponent(t)+"/";window.location.href=e}else"digging"==s?this.makeToast("Digging...",'"'+t+'"正在挖掘，请查看任务列表！',"info"):"notRecord"==s?this.axios.post("/api/",v.encrypt({reason:"dig",keyword:t},this.PASSWORD)).then(e=>{this.makeToast("Digging...",'"'+t+'"未收录，但已加入任务列表，请查看！',"info")}).catch(t=>this.makeToast("Warning!","似乎你的关键字无效！","warning")):this.makeToast("Error!","似乎出了点问题....","danger")}).catch(t=>this.makeToast("Error!","似乎出了点问题....","danger"))}},computed:{checkKeyword:function(){return 0==this.keyword.length||this.keyword.length>50?(this.keywordValid=!1,this.keywordInvalidInfo="Keyword length must in the range of 1-50."):-1!=this.keyword.search(/\s\s+/)?(this.keywordValid=!1,this.keywordInvalidInfo="Keyword shall not contain continuous space."):-1!=this.keyword.search(/(^\s)|(\s$)/)?(this.keywordValid=!1,this.keywordInvalidInfo="Space shall not at the start/end of the keyword."):this.keywordValid=!0,this.keywordValid}},created:function(){this.$cookies.isKey("userKeywords")?this.userKeywords=JSON.parse(this.$cookies.get("userKeywords")):this.$cookies.set("userKeywords",JSON.stringify([]))},watch:{userKeywords:function(){this.$cookies.set("userKeywords",JSON.stringify(this.userKeywords))}},data:()=>({keyword:"",keywordValid:!1,keywordInvalidInfo:"",userKeywords:[]})},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{staticClass:"textCenter"},[s("b-row",[s("b-col"),t._v(" "),s("b-col",{attrs:{sm:"10",md:"8",lg:"6"}},[s("b-input-group",[s("b-form-input",{staticClass:"shadow",attrs:{state:t.checkKeyword,placeholder:"请输入关键词"},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),t._v(" "),0!=t.keyword.length?s("b-form-invalid-feedback",[t._v("\n          "+t._s(t.keywordInvalidInfo)+"\n        ")]):t._e(),t._v(" "),t.keywordValid?s("b-input-group-append",[s("b-button",{staticClass:"shadow",attrs:{variant:"success"},on:{click:t.dig}},[t._v("Dig")])],1):t._e()],1),t._v(" "),t._l(t.userKeywords,function(e){return s("b-badge",{staticClass:"speaceX",on:{click:function(s){t.keyword=e,t.dig()}}},[t._v("\n        "+t._s(e)+"\n      ")])})],2),t._v(" "),s("b-col")],1)],1)},staticRenderFns:[]};var k=s("VU/8")(y,w,!1,function(t){s("eAp/")},"data-v-0fe33f27",null).exports,b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-card-group",{attrs:{columns:""}},t._l(t.hots,function(e){return s("b-card",{staticClass:"shadow round textCenter",attrs:{"img-alt":e.keyword,"img-top":"",tag:"article","bg-variant":"dark"}},[s("a",{attrs:{href:"/movie/"+e.keyword+"/"}},[s("b-card-title",{staticClass:"textHL"},[t._v("\n        "+t._s(e.keyword)+"\n      ")])],1),t._v(" "),s("b-card-text",[t._v("\n      热度："+t._s(e.digTimes)+"\n      "),s("br"),t._v("\n      挖掘时间："+t._s(new Date(1e3*e.lastDigTime).toLocaleString())+"\n    ")])],1)}),1)},staticRenderFns:[]},A=s("VU/8")({name:"HotRec",props:["hots"]},b,!1,null,null,null).exports,C={name:"ResBoard",props:["resBoardData","makeToast","PASSWORD"],methods:{redig(){this.axios.post("/api/",v.encrypt({reason:"dig",keyword:this.resBoardData.keyword},this.PASSWORD)).then(t=>{let e=t.data;e.suc?this.makeToast("Success!",this.resBoardData.keyword+"已加入任务列表！","success"):"inTasks"==e.reason?this.makeToast("In tasks!",this.resBoardData.keyword+"已在任务列表！请关注任务列表！","info"):"timeLocked"==e.reason?this.makeToast("Rejected!",this.resBoardData.keyword+"上次挖掘据今还未超出一天！","warning"):"keywordInvalid"==e.reason?this.makeToast("Error!",this.resBoardData.keyword+"关键字无效！","danger"):this.makeToast("Error!",this.resBoardData.keyword+"未知的错误","danger")}).catch()},onCopySuc:function(t){this.makeToast("Success!","复制成功!","success")},onCopyError:function(t){alert("复制失败！请手动复制：\n"+t.text)}},created:function(){let t=[],e=0,s=1;this.resBoardData.ress.forEach(t=>{0!=t.filesize&&(e+=t.filesize,s+=1)});let a=e/s;for(let e=0;e<this.resBoardData.ress.length;e++){const s=this.resBoardData.ress[e];let o,r,n,i;s.tags=[],o=(1+(s.filesize-a)/a)/2,s.tags.push({color:"warning",name:0==s.filesize?" 未知大小":(s.filesize/1024).toFixed(2)+"GB"}),null!=s.filename?(s.filename.indexOf("1080p")>-1||s.filename.indexOf("BD1920")>-1?(r=.8,s.tags.push({color:"primary",name:"1080p"})):s.filename.indexOf("720p")>-1||s.filename.indexOf("BD1280")>-1?(r=.6,s.tags.push({color:"success",name:"720p"})):s.filename.indexOf("480p")>-1?(r=.4,s.tags.push({color:"secondary",name:"HD1280"})):r=.2,s.filename.indexOf("BluRay")>-1?(n=1,s.tags.push({color:"primary",name:"BluRay"})):n=0,s.filename.indexOf("DTS-HD")>-1?(i=1,s.tags.push({color:"info",name:"DTS-HD"})):s.filename.indexOf("DTS")>-1?(i=.7,s.tags.push({color:"info",name:"DTS"})):s.filename.indexOf("DD5.1")>-1?(i=.5,s.tags.push({color:"info",name:"Dolby"})):i=0):(i=0,r=0,n=0),s.total_score=100*(.45*r+.1*i+.3*o+.15*n),t.push(s)}t.sort(function(t,e){return e.total_score-t.total_score});for(let e=0;e<t.length;e++){const s=t[e];s.jump=function(){window.open(s.web)},this.sortedRess.HQR50.count<50&&(s._rowVariant="info",this.sortedRess.HQR50.ress.push(s),this.sortedRess.HQR50.count+=1),"thunder"==s.type?(s._rowVariant="primary",this.sortedRess.thunder.ress.push(s),this.sortedRess.thunder.count+=1):"magnet"==s.type?(s._rowVariant="success",this.sortedRess.magnet.ress.push(s),this.sortedRess.magnet.count+=1):"ed2k"==s.type&&(s._rowVariant="info",this.sortedRess.ed2k.ress.push(s),this.sortedRess.ed2k.count+=1)}},data:()=>({textForCopy:"",fields:[{key:"Filename",sortable:!0},{key:"Size&Tech",sortable:!0},"Action"],sortedRess:{HQR50:{type:"HQR-50",ress:[],count:0},magnet:{type:"magnet",ress:[],count:0},ed2k:{type:"ed2k",ress:[],count:0},thunder:{type:"thunder",ress:[],count:0}}})},R={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"textCenter"},[s("b-container",{staticClass:" round shadow"},[s("b-row",{staticClass:"shadow round"},[s("b-col",[s("h1",{staticClass:"speace "},[t._v(t._s(t.resBoardData.keyword))])]),t._v(" "),s("b-col",[s("b-button",{staticClass:"shadow speace",attrs:{pill:"",size:"sm",variant:"success"},on:{click:t.redig}},[t._v("redig")])],1)],1),t._v(" "),s("br"),t._v(" "),s("b-row",t._l(t.sortedRess,function(e){return e.ress.length>0?s("b-col",{attrs:{sm:"auto",md:"auto",lg:"6",xl:"6"}},[s("h3",[t._v(t._s(e.type+" : ")+" "+t._s(e.ress.length))]),t._v(" "),s("b-table",{staticClass:"shadow",attrs:{"head-variant":"dark",fixed:"",striped:"",hover:"","sticky-header":"800px",items:e.ress,fields:t.fields},scopedSlots:t._u([{key:"cell(Action)",fn:function(e){return[s("b-button",{staticClass:"speaceX shadow",attrs:{variant:"secondary",size:"sm",pill:""},on:{click:function(t){return e.item.jump()}}},[t._v("原址")]),t._v(" "),s("b-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.item.link,expression:"data.item.link",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopySuc,expression:"onCopySuc",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onCopyError,expression:"onCopyError",arg:"error"}],staticClass:"speaceX shadow",attrs:{variant:"success",size:"sm",pill:""}},[t._v("复制")])]}},{key:"cell(Filename)",fn:function(e){return[s("p",{staticStyle:{"word-break":"break-all"}},[t._v("\n              "+t._s(e.index+1+":")+t._s(null==e.item.filename?e.item.link.slice(0,40)+"...":e.item.filename.slice(0,40)+"...")+"\n            ")])]}},{key:"cell(Size&Tech)",fn:function(e){return t._l(e.item.tags,function(e){return s("b-badge",{staticClass:"shadow",attrs:{variant:e.color}},[t._v(t._s(e.name))])})}}],null,!0)})],1):t._e()}),1)],1)],1)},staticRenderFns:[]};var S=s("VU/8")(C,R,!1,function(t){s("Z552")},"data-v-7149d192",null).exports,_={name:"MainIcon",props:["donors"],created:function(){},methods:{},data:()=>({fields:["name","msg"],wechatpayData:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAYAAAB1PADUAAAERUlEQVR4nO2ZS4rkMBAF6/6XntkaF7RI4mVKdkWAV7JffhQFDf35JxLks7sBeRcKJVEUSqIolERRKImiUBJFoSSKQkkUhZIoCiVRFEqiKJREUSiJolASRaEkChbq8/mMPqv6aWj99HzT+y3vCwcolEJd+8UBCqVQ135xgEIp1LVfHHDYhaYXSOun89Mo1OJcoWoo1OJcoWoo1OJcoWo8Tih6wdMXlBa0e/7p/a5QKNjv7vkVSqEU6s+AwwZWKIVqXWh3PzTv9P2W+8UBCqVQ1zwcoFAKdc3DAQqlUNc8HHDYwN39dOdNz6NQm/vpzpueR6E299OdNz2PQm3upztvep7HCbU7Py1k9fu0sGkUqvl7hYJ5pzWUzleo2XyFaq6nULCh7mdV/+3n0/utolAPO1cohVKoUoBCKdS1X5ywGSogXWj6B/B0Hj+RQp3F4ydSqLN4/EQKdRbb/zlcfb96Iem8KrQ+nbfaD54XByhUa32FWpwrlEL9HaBQrfV/Xqj0hXdDL3R63rSQChVGoRQqikIpVBSFOlyo1Tl9f/cFpEnPtxuFKs6TRqHuAQqFUKh7gEIhFGoV2Hzh1Xpp4avQvOoPbLeQCqVQClWpp1C9/X3l4YR7oEKV6le/V6jFOX1/Om9aEEp3/le9eKBClfajUKtAhSrtR6FWgQpV2o9CpRuAA1cFqp6n+0//4Kbzl/VxAm1AoVDedP6yPk6gDSgUypvOX9bHCbQBhUJ50/nL+jjhHrhomF5A+gKr9ar5dB+791dFoYr1qvkKRQMPW4hCKRTKW31P+6/mK1SYaQG6+4lfwPSFh/O+8uOJ9wIKhfpRqHsBhUL9KNS9gEKhfn5OqNMEoPWrF0x/IN37G8+bbkihsvugKJRCKVTyfYV6uVDLAmEhaD4VqrufbgHT+/+qF0+8F1AohYoWUCiFihZQKIUqBQwLQp9qveq8aSHT++pGoRQqikIpVBSFUqgox/1RTs+782g92h99v1s4hVIohVIohVKoUH8/JxRtcFrAbuHoBU8/FIVSKIWq1FMohVIohdoHFbD7++4LpXkKdUOhFCqKQilUFIV6mVDdC+4WZJWXhs5H+22fDwcoVHRf1X6Omw8HKFR0X9V+jpsPByhUdF/Vfo6bDwcMXwA93y0ozaPzdaNQxfcVatEPDlCoUv8KtQpQqFL/CrUKaL4geoHT73cL1/1QFEqhFIr00/2+QtEAhYrm7X4ojxeK1q/Od9wFNu+v3A8OUCiFuubhAIVSqGseDlAohbrm4YDDhNotIIXWS++jXB8HKFQUhVKoKAqlUFEUqnnh1fz0hUz3c1r/5fo4QKFe3X+5Pg5QqFf3X66PAxTq1f2X6+OAW4PdD63f/X33vigKpVAKpVB9+6IolEL9llAiVxRKoiiURFEoiaJQEkWhJIpCSRSFkigKJVEUSqIolERRKImiUBJFoSSKQkkUhZIo/wHduoquiCbq5AAAAABJRU5ErkJggg==",anypayData:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAYAAAB1PADUAAAEZUlEQVR4nO2Y0YojSRAD5/9/eve1zwNbCElZ2b4I8FOXlcrqMAzz8wcgyM/tAvBdIBREQSiIglAQBaEgCkJBFISCKAgFURAKoiAUREEoiIJQEAWhIApCQRSEgii2UD8/P6Of0/zpvmr+2+5X7msHIJSU/7b7lfvaAQgl5b/tfuW+dgBCSflvu1+5rx0QLqTmtwWov4DwDyY9X87bVkjNR6jufDlvWyE1H6G68+W8bYXUfITqzpfz2oXSL7z9PC3Q9P7pfHlfOwChpPtBqFMAQkn3g1CnAISS7gehTgHLF3YFmf4BuHkIhVDSfLUfQon5aj+E8voc+9oByxdGKISy8t35t/tsu18VhFrWZ9v9qiDUsj7b7lcFoZb12Xa/KnWhpvPdC1W/n+7j7u/2s/O2FXLzEcrrZ+dtK+TmI5TXz87bVsjNRyivn52XLtT+nOZ/+/Pp+1VBqJc9RyiEQigpAKEQ6tnXTngZ6gWmL3w6f5r3byCCUF3ev4EIQnV5/wYiCNVl/B+bt//IvP1HbTuvPe/Yxw5AKIR6zrMDEAqhnvPsAIRCqOc8O+E0oL1AWKjT+Wmmf2B2XzvhNAChLBDqcwBCWSDU5wCEsvjfC6UW3H5ht38A7T5pECq8j7vvdJ80CBXex913uk8ahArv4+473SdN/R+b2wRIC397fnsfFYQS8xDqkG8HINTV+QiFUAhlDRAvxH2B6Rcev/Dyfm4fO89OOA1AqGhfhEKoaF+EQqho368XatsFneapz6f7nM4jlHk+3U99Pt3ndB6hzPPpfurz6T6n8whlnk/3U59P9zmd/3qh0rQFvX3eFRyhRG6/8PZ5hBrm9gtvn0eoYW6/8PZ5hDILpS/IPe9+2v3bfdsgFEJFQSiEioJQCBVlnVDbBEh/X90/ndcWEKHC+7p5CIVQFgh1WMB9jlAIVb3g9vcRJAtCIVQUhEKoKAiFUFHiQrkLu+fb/dt9233awiHUsr4IhVAI9ZxvByAUQj3n2wFhodR5ap/2+fT+bWHTIBRCRUEohIqCUAgVpS6U+v30c7Vv+4W7fdofF4RCKIRSnqt9EcoDoRBql1C3aQvXnu++UFWQtEC/8uOJwyAUQkVBKISKglBfJtRpofTnNF99ns67Pc+9TxeECufdnodQCIVQ/wlAqFXzvk6oNO0Ld/dJv3CV2wL96mMHIBRCPfvYAQiFUM8+dgBCIdSzjx1QvtB0/jZB3f6uQGnhECo8b7o/Qi17Iel50/0RatkLSc+b7o9Q5Rcy3d9lWoh0/1/5dgBCWSDUZwBCWSDUZwBCWSDUZ8Blodw+at50n237HPPtAISq9tm2zzHfDkCoap9t+xzz7QCEqvbZts8x3w4IF2rnq4KnX0D7B3gbhEKoKAiFUFEQCqGixIVqf6bnu/dxm2khEQqhsvPsAIT6Z5/bIBRCRXmdUABPEAqiIBREQSiIglAQBaEgCkJBFISCKAgFURAKoiAUREEoiIJQEAWhIApCQRSEgih/AUSh6k4hoPvNAAAAAElFTkSuQmCC"})},D={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-img",{staticClass:"shadow",attrs:{id:"mainIcon",rounded:"circle",center:"",src:"https://raw.githubusercontent.com/iridesc/ocolabstatic/master/resdig/img/favicon.ico",alt:""}}),t._v(" "),s("b-popover",{attrs:{target:"mainIcon",variant:"danger",triggers:"hover",placement:"top"}},[s("b-list-group-item",{attrs:{variant:"info"}},[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-1",modifiers:{"accordion-1":!0}}],attrs:{block:"",variant:"info"}},[t._v("\n        donner\n      ")]),t._v(" "),s("b-collapse",{staticClass:"textCenter",attrs:{id:"accordion-1",visible:""}},[s("b-table",{attrs:{striped:"",hover:"",items:t.donors,fields:t.fields}}),t._v(" "),s("h5",[t._v("Anypay")]),t._v(" "),s("b-img",{staticClass:"shadow m1",attrs:{rounded:"",src:t.anypayData,alt:""}}),t._v(" "),s("h5",[t._v("Wechatpay")]),t._v(" "),s("b-img",{staticClass:"shadow m1",attrs:{rounded:"",src:t.wechatpayData,alt:""}})],1)],1),t._v(" "),s("b-list-group-item",{attrs:{variant:"info"}},[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-3",modifiers:{"accordion-3":!0}}],attrs:{block:"",variant:"info"}},[t._v("\n        help\n      ")]),t._v(" "),s("b-collapse",{attrs:{id:"accordion-3"}},[s("H4",[t._v("如何获得我想要的资源? ")]),t._v("\n        资源搜索：在主控室输入你想搜索的资源名称，点击dig按钮发动挖掘。\n        你会发现关键字会出现在'我的搜索'列表,同时你将收到三种可能的提示\n        1.提示已挖到xxx条资源，此时查看资源储存箱界面，这些资源都陈列这这里！\n        2.提示已将关键字加入引擎的任务列表，此时你可以在任务列表看到你的关键字，你可以选择等待直到完成或者过会再来查看'我的搜索'列表(引擎会自动完成挖掘)，同时你也可继续搜索其他资源。\n        3.提示翻遍n个网页也没有挖到资源，那不好意思，有两种可能\n        （1）可能是您搜索的是正在上映的电影，电影在上映时一般是不可能有资源的！即使有那基本上是枪版资源，我们应强烈抵制这种垃圾资源！\n        （2）可能是您搜索的是一些违反国家法律法规的东西！我们坚决反对这样的行为！我们将在后面的开发中逐渐引入关键字检测机制！\n        "),s("h4",[t._v("挖到的资源在哪？如何使用这些链接？")]),t._v("\n        获取到资源后将把资源储存到资源储存箱界面，在此界面你就可以看到你所搜索的关键字的资源链接，分为\n        迅雷下载链接、种子下载链接、ed2k下载链接、百度网盘链接(附有原网址，以便得到资源共享密钥)。\n        1、对于\n        迅雷下载链接、种子链接、ed2k链接，点击链接调出迅雷(或者复制去迅雷新建任务,迅雷开启时批量复制有惊喜偶!)，使用迅雷等下载器进行下载。\n        2、对于\n        百度云链接，你可以转存到自己网盘(如有密钥访问原网址查找密码)，然后在百度云在线观看或者下载(ed2k链接也可使用百度网盘离线下载到自己空间在线观看，以安卓端百度云APP为例，先复制链接，打开百度云点击更多--离线下载--新建链接任务)。\n        3、桌面端也可使用爱奇艺万能播放器进行播放。(使用方式很多，欢迎在控制室留言板分享)\n        4、如果遇到问题，请直接在本页面上方提交反馈。\n        "),s("h4",[t._v("我对搜索结果不满意怎么办？")]),t._v("\n        如发现多数链接失效，或者搜索时间过早，你可以点击资源储存箱页面最下面，扔给挖掘机，重新挖掘。\n        然后查看任务列表,关键字将会出现在那儿!\n        如果提示有人在xx月xx日xx时搜索过!这是正常的,一个关键字一天之内只能发动挖掘机一次,因为一天之内网络上的资源是不会有太大变化的,即使再发动一次挖掘也不会获得更多的资源,所以为了提高效率优化体验,我们将一个关键字的挖掘间隔限定在一天!您可以改日再试!\n      ")],1)],1)],1)],1)},staticRenderFns:[]};var E={name:"cp",methods:{onCopy:function(t){alert("You just copied: "+t.text)},onError:function(t){alert("Failed to copy texts")}},data:()=>({message:"Copy These Text"})},B={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:this.message,expression:"message",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:this.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:this.onError,expression:"onError",arg:"error"}],attrs:{type:"button"}},[this._v("Copy!")])])},staticRenderFns:[]},x={name:"App",components:{Test:n,StatusBar:c,MainIcon:s("VU/8")(_,D,!1,function(t){s("5uNP")},"data-v-1434af14",null).exports,DigBar:k,HotRec:A,ResBoard:S,cp:s("VU/8")(E,B,!1,null,null,null).exports},created:function(){let t=this.$cookies.get("csrftoken");this.axios.interceptors.request.use(function(e){return"post"==e.method&&(e.headers["X-CSRFToken"]=t),e},function(t){return Promise.reject(t)}),this.appLoadingValue=5,document.querySelector("body").setAttribute("class","bg textColor"),this.appLoadingValue=10;let e=document.location.toString().split("//")[1].split("/");if("movie"==e[1]){let t=decodeURIComponent(e[2]);window.title="Resdig-"+t,this.axios.post("/api/",v.encrypt({reason:"getRess",keyword:t},this.PASSWORD)).then(e=>{let s=v.decrypt(e.data,this.PASSWORD);s.suc?(this.resBoardData.ress=s.ress,this.resBoardData.keyword=t):this.loadError=!0}).catch(t=>{this.loadError=!0})}this.appLoadingValue=30,this.loadError||this.axios.post("/api/",v.encrypt({reason:"getStaticData"},this.PASSWORD)).then(t=>{let e=v.decrypt(t.data,this.PASSWORD);this.casts=e.casts,this.hots=e.hots,this.donors=e.donors,this.resAmount=e.resAmount,this.keywordAmount=e.keywordAmount,this.appLoadingValue=60}).catch(t=>{this.loadError=!0}),this.loadError||setInterval(()=>{this.axios.post("/api/",v.encrypt({reason:"getDynamicData"},this.PASSWORD)).then(t=>{let e=v.decrypt(t.data,this.PASSWORD);this.tasks=e.tasks,this.engines=e.engines,this.msgs=e.msgs}),this.appLoadingValue=100},2500)},methods:{makeToast(t,e,s=null){this.$bvToast.toast(e,{title:t,variant:s,solid:!0})}},data:()=>({appLoadingValue:0,appLoadMax:100,loadError:!1,PASSWORD:"q863cqfiwyug72jc",casts:[],hots:[],donors:[],resAmount:0,keywordAmount:0,engines:[],msgs:[],tasks:[],resBoardData:{keyword:"",ress:[]}})},U={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.loadError?s("div",{staticClass:"textCenter",attrs:{id:"app"}},[s("h1",{staticStyle:{color:"red"}},[t._v("Load Error !")]),t._v(" "),t._m(0)]):t.appLoadingValue<100?s("div",{attrs:{id:"app"}},[s("div",{staticClass:"pageCenter textCenter "},[s("b-img",{staticClass:"shadow",attrs:{id:"mainIcon",rounded:"circle",center:"",src:"https://raw.githubusercontent.com/iridesc/ocolabstatic/master/resdig/img/favicon.ico",alt:""}}),t._v(" "),s("h1",{staticClass:"textHL"},[t._v("Loading...")]),t._v(" "),s("b-progress",{attrs:{value:t.appLoadingValue,max:t.appLoadMax,animated:""}})],1)]):s("div",{attrs:{id:"app"}},[s("StatusBar",{attrs:{tasks:t.tasks,engines:t.engines}}),t._v(" "),s("MainIcon",{staticClass:"speace",attrs:{donors:t.donors}}),t._v(" "),s("DigBar",{staticClass:"speaceY",attrs:{makeToast:t.makeToast,resBoardData:t.resBoardData,PASSWORD:t.PASSWORD}}),t._v(" "),""!=t.resBoardData.keyword?s("ResBoard",{attrs:{makeToast:t.makeToast,resBoardData:t.resBoardData,PASSWORD:t.PASSWORD}}):t._e(),t._v(" "),s("HotRec",{staticClass:"speace",attrs:{hots:t.hots}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{},[this._v("\n    Try refresh later / go to\n    "),e("a",{attrs:{href:"/"}},[this._v("homepage")])])}]};var V=s("VU/8")(x,U,!1,function(t){s("3+of")},null,null).exports,F=s("/ocq");a.default.use(F.a);var I=new F.a({routes:[{path:"/",name:"Resdig",component:V}]}),K=s("mtWM"),Q=s.n(K),q=s("Rf8U"),T=s.n(q),W=s("ppUw"),O=s.n(W),P=s("Tqaz"),H=(s("Jmt5"),s("9M+g"),s("wvfG")),L=s.n(H);a.default.use(L.a),a.default.use(O.a),a.default.use(T.a,Q.a),a.default.use(P.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:I,components:{App:V},template:"<App/>"})},Z552:function(t,e){},"eAp/":function(t,e){},jlKe:function(t,e){},uSUO:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.583a7580fb7a0c093421.js.map