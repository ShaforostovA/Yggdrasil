"use strict";(self["webpackChunkyggdrasil_client"]=self["webpackChunkyggdrasil_client"]||[]).push([[841],{573:function(e,t,a){var s=a(4161),r=a(2479);a(3456);const i="http://localhost/api/v1/department/";class l{getUserDepartmentAllUsers(e){return s.Z.get(i+`users/list/${e}`,{headers:(0,r.Z)()})}getDepartmentsAll(){return s.Z.get(i+"all",{headers:(0,r.Z)()})}getDepartmentsAllSearch(e,t,a,l,d,n,o,u){let m=JSON.stringify({parameter:e,currentPage:t,sortField:a,sortDir:l,facultyName:d,isActive:n,minDate:o,maxDate:u}),p={method:"post",maxBodyLength:1/0,url:i+"search/all",headers:(0,r.Z)(),data:m};return s.Z.request(p)}getDepartmentsActiveAll(){return s.Z.get(i+"active/all",{headers:(0,r.Z)()})}updateDepartment(e,t,a,l,d){let n=JSON.stringify({id:e,shortName:t,name:a,description:l,facultyId:Number(d)}),o={method:"post",maxBodyLength:1/0,url:i+"update",headers:(0,r.Z)(),data:n};return s.Z.request(o)}createDepartment(e,t,a,l,d){let n=JSON.stringify({id:e,shortName:t,name:a,description:l,facultyId:Number(d)}),o={method:"post",maxBodyLength:1/0,url:i+"create",headers:(0,r.Z)(),data:n};return s.Z.request(o)}}t["Z"]=new l},8548:function(e,t,a){var s=a(4161),r=a(2479),i=a(3456);const l="http://localhost/api/v1/students/";class d{getAllStudent(e,t,a,i,d,n,o,u){let m=JSON.stringify({parameter:e,currentPage:t,sortField:a,sortDir:i,minDate:d,maxDate:n,departmentName:o,isActive:u}),p={method:"post",maxBodyLength:1/0,url:l+"all",headers:(0,r.Z)(),data:m};return s.Z.request(p)}getAllFacultyStudent(e,t,a,i,d,n,o,u,m){let p=JSON.stringify({parameter:e,currentPage:t,sortField:a,sortDir:i,minDate:d,maxDate:n,departmentName:o,isActive:u,facultyId:m}),c={method:"post",maxBodyLength:1/0,url:l+"faculty/all",headers:(0,r.Z)(),data:p};return s.Z.request(c)}getAllDepartmentStudent(e,t,a,i,d,n,o,u,m){let p=JSON.stringify({parameter:e,currentPage:t,sortField:a,sortDir:i,minDate:d,maxDate:n,departmentName:o,isActive:u,departmentId:m}),c={method:"post",maxBodyLength:1/0,url:l+"department/all",headers:(0,r.Z)(),data:p};return s.Z.request(c)}createStudent(e,t,a,i,d,n,o,u,m,p){let c=JSON.stringify({lastName:e,name:t,patronymic:a,groupName:i,departmentId:d,yearStart:n,yearEnd:o,email:u,phone:m,birthday:p}),h={method:"post",maxBodyLength:1/0,url:l+"create",headers:(0,r.Z)(),data:c};return s.Z.request(h)}getStudent(e){return s.Z.get(l+e,{headers:(0,r.Z)()})}updateStudent(e,t,a,i,d,n,o,u,m,p,c){let h=JSON.stringify({studentId:e,lastName:t,name:a,patronymic:i,groupName:d,departmentId:n,yearStart:o,yearEnd:u,email:m,phone:p,birthday:c}),g={method:"post",maxBodyLength:1/0,url:l+"update",headers:(0,r.Z)(),data:h};return s.Z.request(g)}getAllForDocumentStudent(){return s.Z.get(l+"document/all",{headers:(0,r.Z)()})}updateStudentStatus(e,t){let a=JSON.stringify({studentId:e,isTrained:t}),i={method:"post",maxBodyLength:1/0,url:l+"status/update",headers:(0,r.Z)(),data:a};return s.Z.request(i)}currentUser(){return i.Z.state.auth.user}}t["Z"]=new d},5753:function(e,t,a){var s=a(4161),r=a(2479),i=a(3456);const l="http://localhost/api/v1/user/";class d{getUserInfo(){return s.Z.get(l+this.currentUser().username,{headers:(0,r.Z)()})}getEmployeeInfo(e){return s.Z.get(l+`profile/${e}/info`,{headers:(0,r.Z)()})}getUserFaculty(e){return s.Z.get(l+`${e}/faculty`,{headers:(0,r.Z)()})}getUserDepartment(e){return s.Z.get(l+`${e}/department`,{headers:(0,r.Z)()})}userTokenCheck(){return console.log((0,r.Z)()),s.Z.get(l+"token/check",{headers:(0,r.Z)()})}getAllUsers(){return s.Z.get(l+"list",{headers:(0,r.Z)()})}getAllDepartmentUsers(){return s.Z.get(l+"department/list",{headers:(0,r.Z)()})}getAllUsersFind(e,t,a,i,d,n,o,u,m,p){let c=JSON.stringify({parameter:e,currentPage:t,sortField:a,sortDir:i,minDate:d,maxDate:n,departmentName:o,isState:u,userRole:m,isActive:p}),h={method:"post",maxBodyLength:1/0,url:l+"list/find",headers:(0,r.Z)(),data:c};return s.Z.request(h)}updateProfile(e,t,a,i,d,n,o,u,m,p,c,h,g,y,v){let w=JSON.stringify({id:e,phone:t,email:a,imgUrl:i,lastName:d,name:n,patronymic:o,jobTitle:u,academicTitle:m,academicDegree:p,orcid:c,spinCode:h,birthday:g,state:y,departmentId:v}),f={method:"post",maxBodyLength:1/0,url:l+"update",headers:(0,r.Z)(),data:w};return s.Z.request(f)}checkValidUsername(e){let t=JSON.stringify({username:e}),a={method:"post",maxBodyLength:1/0,url:l+"username/check",headers:(0,r.Z)(),data:t};return s.Z.request(a)}createUser(e,t,a,i,d,n,o,u){let m=JSON.stringify({lastName:e,name:t,patronymic:a,state:i,departmentId:Number(d),username:n,password:o,userRole:u}),p={method:"post",maxBodyLength:1/0,url:l+"create",headers:(0,r.Z)(),data:m};return s.Z.request(p)}updateUserStatus(e,t){let a=JSON.stringify({userId:Number(e),isActive:t}),i={method:"post",maxBodyLength:1/0,url:l+"status/update",headers:(0,r.Z)(),data:a};return s.Z.request(i)}updateUserPassword(e,t){let a=JSON.stringify({userId:Number(e),password:t}),i={method:"post",maxBodyLength:1/0,url:l+"password/update",headers:(0,r.Z)(),data:a};return s.Z.request(i)}currentUser(){return i.Z.state.auth.user}}t["Z"]=new d},8310:function(e,t,a){a.d(t,{Z:function(){return U}});var s=a(3396),r=a(7139);const i={class:"input-field col s12 selectSingle w-full"},l=["multiple","disabled"],d=["selected"],n=["value","selected"],o=["multiple","disabled"],u=["selected"],m=["value","selected"],p=["multiple","disabled"],c=["selected"],h=["value","selected"],g=["multiple","disabled"],y=["selected"],v=["value","selected"],w={class:"opacity-0"},f=["multiple","disabled"],x=["selected"],b=["value","selected"],k={class:"opacity-0"};function S(e,t,a,S,_,Z){return(0,s.wg)(),(0,s.iD)("div",i,["filter"===this.type?((0,s.wg)(),(0,s.iD)("select",{key:0,multiple:this.multy,disabled:this.disabled},[(0,s._)("option",{value:"",selected:this.selected},(0,r.zw)(a.message),9,d),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(this.content,(e=>((0,s.wg)(),(0,s.iD)("option",{key:e,value:e,selected:e===this.equalId},(0,r.zw)(e),9,n)))),128))],8,l)):Array.isArray(this.equalId)||0===this.content.length||"object"===typeof this.content[0]?Array.isArray(this.equalId)&&0!==this.content.length&&"object"!==typeof this.content[0]?((0,s.wg)(),(0,s.iD)("select",{key:2,multiple:this.multy,disabled:this.disabled},[(0,s._)("option",{value:"",disabled:"",selected:this.selected},(0,r.zw)(a.message),9,c),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(this.content,(e=>((0,s.wg)(),(0,s.iD)("option",{key:e,value:e,selected:this.isSelect(this.equalId,e)},(0,r.zw)(e),9,h)))),128))],8,p)):Array.isArray(this.equalId)?((0,s.wg)(),(0,s.iD)("select",{key:4,multiple:this.multy,disabled:this.disabled},[(0,s._)("option",{value:"",disabled:"",selected:this.selected},(0,r.zw)(a.message),9,x),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(this.content,(e=>((0,s.wg)(),(0,s.iD)("option",{key:e.id,value:e.id,selected:this.isSelect(this.equalId,e.id)},[(0,s.Uk)((0,r.zw)(e.name)+" ",1),(0,s._)("span",k,"("+(0,r.zw)(e.id)+")",1)],8,b)))),128))],8,f)):((0,s.wg)(),(0,s.iD)("select",{key:3,multiple:this.multy,disabled:this.disabled},[(0,s._)("option",{value:"",disabled:"",selected:this.selected},(0,r.zw)(a.message),9,y),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(this.content,(e=>((0,s.wg)(),(0,s.iD)("option",{key:e.id,value:e.id,selected:e.id===this.equalId},[(0,s.Uk)((0,r.zw)(e.name)+" ",1),(0,s._)("span",w,"("+(0,r.zw)(e.id)+")",1)],8,v)))),128))],8,g)):((0,s.wg)(),(0,s.iD)("select",{key:1,multiple:this.multy,disabled:this.disabled},[(0,s._)("option",{value:"",disabled:"",selected:this.selected},(0,r.zw)(a.message),9,u),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(this.content,(e=>((0,s.wg)(),(0,s.iD)("option",{key:e,value:e,selected:e===this.equalId},(0,r.zw)(e),9,m)))),128))],8,o))])}a(7658);var _={name:"selectComponent",props:["selected","message","content","multy","disabled","equalId","type"],data:()=>({select:null}),mounted(){setTimeout((()=>{this.select=M.FormSelect.init(document.querySelectorAll("select"),{})}),0)},methods:{isSelect(e,t){let a=[];for(let s of e)a.push(Number(s));return a.includes(t)}},computed:{currentUser(){return this.$store.state.auth.user}},beforeDestroy(){this.select&&this.select.destroy&&this.select.destroy()}},Z=a(89);const D=(0,Z.Z)(_,[["render",S]]);var U=D},2435:function(e,t,a){a.d(t,{Z:function(){return m}});var s=a(3396),r=a(7139);const i={class:"shadow-md rounded-xl overflow-hidden border"};function l(e,t,a,l,d,n){const o=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("ul",i,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.links,(e=>((0,s.wg)(),(0,s.iD)("li",{key:e.url},[e.roles.includes(this.currentUser.roles[0])?((0,s.wg)(),(0,s.j4)(o,{key:0,"active-class":"active",to:e.url,class:"hover:bg-gray-200 pl-5 py-2 block select-none"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)(e.title),1)])),_:2},1032,["to"])):(0,s.kq)("",!0)])))),128))])}var d=a(8806),n={data:()=>({links:[{title:"Документы",url:"/documents",roles:[d.v.User,d.v.Admin,d.v.Moderator]},{title:"Отчеты",url:"/reports",roles:[d.v.Admin,d.v.Moderator]},{title:"Факультеты",url:"/facultets",roles:[d.v.SuperAdmin]},{title:"Кафедры",url:"/departments",roles:[d.v.SuperAdmin]},{title:"Сотрудники",url:"/employees",roles:[d.v.SuperAdmin,d.v.Moderator]},{title:"Студенты",url:"/students",roles:[d.v.User,d.v.SuperAdmin,d.v.Moderator]},{title:"Конструктор шаблонов",url:"/constructors",roles:[d.v.SuperAdmin]},{title:"Статистика",url:"/statistics",roles:[d.v.User,d.v.Admin,d.v.Moderator]},{title:"Разное",url:"/different",roles:[d.v.SuperAdmin]}]}),computed:{currentUser(){return this.$store.state.auth.user}}},o=a(89);const u=(0,o.Z)(n,[["render",l]]);var m=u},9841:function(e,t,a){a.r(t),a.d(t,{default:function(){return De}});var s=a(3396),r=a(7139),i=a(9242);const l={class:"chapter-name text-3xl mb-6"},d={class:"flex gap-x-5 flex-grow"},n={class:"menu w-1/5"},o={class:"w-4/5"},u={key:1,class:"menu-top mb-6 flex justify-between"},m=(0,s._)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 mr-1"},[(0,s._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"})],-1),p=(0,s._)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 mr-1"},[(0,s._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"})],-1),c=(0,s._)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 mr-1"},[(0,s._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"})],-1),h={class:"faculty-data-top-menu flex justify-between mb-5"},g={class:"faculty-data-status"},y={key:0,class:"text-green-600"},v={key:1,class:"text-red-600"},w={class:"faculty-data-dates"},f={class:"faculty-data-dateCreate"},x={class:"faculty-data-dateUpdate"},b={class:"profile-data-input mb-3"},k=(0,s._)("label",{for:"",class:"relative required"},"Фамилия:",-1),S=["disabled"],_={class:"helper-text"},Z={class:"profile-data-input mb-3"},D=(0,s._)("label",{for:"",class:"relative required"},"Имя:",-1),U=["disabled"],$={class:"helper-text"},q={class:"profile-data-input mb-5"},C=(0,s._)("label",{for:"",class:"relative required"},"Отчество:",-1),N=["disabled"],I={class:"helper-text"},A={class:"profile-data-input mb-5"},L=(0,s._)("label",{for:"",class:"relative required"},"Группа студента:",-1),B=["disabled"],Y={class:"helper-text"},z={class:"user-center-menu mb-5"},j={class:"menu-item"},V={class:"input-field col s12 department-data-input"},T=(0,s._)("label",{for:"",class:"relative required"},"Выберите кафедру:",-1),O={class:"profile-data-group flex gap-5 mb-5"},J={class:"profile-data-input flex-grow"},K=(0,s._)("label",{class:"relative required",for:""},"Год начала обучения:",-1),E=["disabled","max"],F={class:"profile-data-input flex-grow"},H=(0,s._)("label",{class:"relative required",for:""},"Год окончания обучения:",-1),P=["disabled","min"],R={class:"profile-data-group flex gap-5 mb-10"},W={class:"profile-data-input flex-grow w-1/3"},X=(0,s._)("label",{for:""},"Email:",-1),G=["disabled"],Q={class:"profile-data-input flex-grow w-1/3"},ee=(0,s._)("label",{for:""},"Телефон:",-1),te=["disabled"],ae={class:"profile-data-input flex-grow w-1/3"},se=(0,s._)("label",{for:""},"Дата рождения:",-1),re=["disabled"],ie={class:"bottom-menu flex justify-end gap-5"},le=(0,s._)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 mr-1"},[(0,s._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})],-1),de={key:1,class:"inline-flex gap-5 items-end"},ne=(0,s._)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 mr-1"},[(0,s._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"})],-1),oe=(0,s._)("button",{class:"main-btn px-5 py-3 text-xl inline-flex items-center",type:"submit"},[(0,s._)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 mr-1"},[(0,s._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"})]),(0,s.Uk)(" Сохранить ")],-1),ue={id:"myModel",class:"modal modal-fixed-footer",ref:"modal"},me=(0,s.uE)('<div class="modal-content flex flex-col"><div class="modal-img inline-block p-10 rounded-full border-[8px] border-solid border-red-700 text-red-700 mx-auto mb-5 font-bold"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-[8rem]"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"></path></svg></div><div class="worn-text text-3xl text-red-700 mb-20 text-center">Внимание!</div><p class="text-2xl mb-3 text-center">При уходе с этой страницы данные будет потеряны.</p></div>',1),pe={class:"modal-footer flex justify-evenly"},ce=(0,s._)("a",{href:"#",class:"modal-close main-btn-invers inline-block rounded-lg px-5 py-3 w-[150px] text-center text-xl"},"Остаться",-1);function he(e,t,a,M,he,ge){const ye=(0,s.up)("FullScreenLoader"),ve=(0,s.up)("Sidebar"),we=(0,s.up)("Loader"),fe=(0,s.up)("SelectVue");return(0,s.wg)(),(0,s.iD)(s.HY,null,[this.updateStudentProcess?((0,s.wg)(),(0,s.j4)(ye,{key:0})):(0,s.kq)("",!0),(0,s._)("div",l," Студент — №"+(0,r.zw)(this.studentId),1),(0,s._)("div",d,[(0,s._)("div",n,[(0,s.Wm)(ve)]),(0,s._)("div",o,[this.loading?((0,s.wg)(),(0,s.j4)(we,{key:0})):(0,s.kq)("",!0),this.loading?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",u,[(0,s._)("button",{onClick:t[0]||(t[0]=(0,i.iM)(((...e)=>ge.back&&ge.back(...e)),["prevent"])),class:"main-btn py-3 px-5 inline-flex"},[m,(0,s.Uk)(" Вернуться ")]),!this.updateMode&&this.isTrained?((0,s.wg)(),(0,s.iD)("button",{key:0,class:"main-btn-yellow px-5 py-3 text-lg flex items-center gap-1",onClick:t[1]||(t[1]=(0,i.iM)((e=>ge.updateStudentStatus(!1)),["prevent"]))},[p,(0,s.Uk)(" Деактивировать ")])):(0,s.kq)("",!0),this.updateMode||this.isTrained?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("button",{key:1,class:"main-btn px-5 py-3 text-lg flex items-center gap-1",onClick:t[2]||(t[2]=(0,i.iM)((e=>ge.updateStudentStatus(!0)),["prevent"]))},[c,(0,s.Uk)(" Активировать ")]))])),this.loading?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("form",{key:2,action:"",onSubmit:t[20]||(t[20]=(0,i.iM)(((...e)=>ge.updateStudent&&ge.updateStudent(...e)),["prevent"])),class:"shadow-md rounded-xl border p-5 mb-10"},[(0,s._)("div",h,[(0,s._)("div",g,[(0,s.Uk)(" Статус: "),this.isTrained?((0,s.wg)(),(0,s.iD)("span",y,"Учится")):((0,s.wg)(),(0,s.iD)("span",v,"Не учится"))]),(0,s._)("div",w,[(0,s._)("div",f,"Дата создания: "+(0,r.zw)(this.$normaldate(this.dateCreate)),1),(0,s._)("div",x,"Дата обновления: "+(0,r.zw)(this.$normaldate(this.dateUpdate)),1)])]),(0,s._)("div",b,[k,(0,s.wy)((0,s._)("input",{disabled:!this.updateMode,autocomplete:"off","onUpdate:modelValue":t[3]||(t[3]=t=>e.lastname=t),onInput:t[4]||(t[4]=(...e)=>ge.canUpdateCheck&&ge.canUpdateCheck(...e)),class:(0,r.C_)([{invalid:M.v$.lastname.$errors.length},"input-text"]),minlength:"1",maxlength:"50",required:"",type:"text",name:"",id:"",placeholder:"Фамилия",title:"Введите фамилию"},null,42,S),[[i.nr,e.lastname,void 0,{trim:!0}]]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(M.v$.lastname.$errors,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"input-errors max-w-xl",key:e.$uid},[(0,s._)("div",_,(0,r.zw)("This field should be at least 6 characters long"===e.$message?"Длина этого поля должна составлять не менее 6 символов":"Value is required"===e.$message?"Значение является обязательным":e.$message),1)])))),128))]),(0,s._)("div",Z,[D,(0,s.wy)((0,s._)("input",{disabled:!this.updateMode,autocomplete:"off","onUpdate:modelValue":t[5]||(t[5]=t=>e.name=t),onInput:t[6]||(t[6]=(...e)=>ge.canUpdateCheck&&ge.canUpdateCheck(...e)),class:(0,r.C_)([{invalid:M.v$.name.$errors.length},"input-text"]),minlength:"1",maxlength:"50",required:"",type:"text",name:"",id:"",placeholder:"Имя",title:"Введите имя"},null,42,U),[[i.nr,e.name,void 0,{trim:!0}]]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(M.v$.name.$errors,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"input-errors max-w-xl",key:e.$uid},[(0,s._)("div",$,(0,r.zw)("This field should be at least 6 characters long"===e.$message?"Длина этого поля должна составлять не менее 6 символов":"Value is required"===e.$message?"Значение является обязательным":e.$message),1)])))),128))]),(0,s._)("div",q,[C,(0,s.wy)((0,s._)("input",{disabled:!this.updateMode,autocomplete:"off","onUpdate:modelValue":t[7]||(t[7]=t=>e.patronymic=t),onInput:t[8]||(t[8]=(...e)=>ge.canUpdateCheck&&ge.canUpdateCheck(...e)),class:(0,r.C_)([{invalid:M.v$.patronymic.$errors.length},"input-text"]),minlength:"1",maxlength:"50",required:"",type:"text",name:"",id:"",placeholder:"Отчество",title:"Введите отчество"},null,42,N),[[i.nr,e.patronymic,void 0,{trim:!0}]]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(M.v$.patronymic.$errors,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"input-errors max-w-xl",key:e.$uid},[(0,s._)("div",I,(0,r.zw)("This field should be at least 6 characters long"===e.$message?"Длина этого поля должна составлять не менее 6 символов":"Value is required"===e.$message?"Значение является обязательным":e.$message),1)])))),128))]),(0,s._)("div",A,[L,(0,s.wy)((0,s._)("input",{disabled:!this.updateMode,autocomplete:"off","onUpdate:modelValue":t[9]||(t[9]=t=>e.groupName=t),onInput:t[10]||(t[10]=(...e)=>ge.canUpdateCheck&&ge.canUpdateCheck(...e)),class:(0,r.C_)([{invalid:M.v$.groupName.$errors.length},"input-text"]),minlength:"1",maxlength:"20",required:"",type:"text",name:"",id:"",placeholder:"Группа студента",title:"Введите группу студента"},null,42,B),[[i.nr,e.groupName,void 0,{trim:!0}]]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(M.v$.groupName.$errors,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"input-errors max-w-xl",key:e.$uid},[(0,s._)("div",Y,(0,r.zw)("This field should be at least 1 characters long"===e.$message?"Длина этого поля должна составлять не менее 1 символа":"Value is required"===e.$message?"Значение является обязательным":e.$message),1)])))),128))]),(0,s._)("div",z,[(0,s._)("div",j,[(0,s._)("div",V,[T,((0,s.wg)(),(0,s.j4)(fe,{disabled:!this.updateMode,class:"search-field",selected:!1,message:"Выберите кафедру",content:this.departments,equalId:this.selectedDepartment,key:this.resetKey},null,8,["disabled","content","equalId"]))])])]),(0,s._)("div",O,[(0,s._)("div",J,[K,(0,s.wy)((0,s._)("input",{disabled:!this.updateMode,"onUpdate:modelValue":t[11]||(t[11]=t=>e.startYear=t),onInput:t[12]||(t[12]=(...e)=>ge.canUpdateCheck&&ge.canUpdateCheck(...e)),type:"number",minlength:"4",min:"1000",max:this.endYear,maxlength:"4",name:"",id:"",class:"input-text",placeholder:"Год начала обучения",title:"Введите год начала обучения"},null,40,E),[[i.nr,e.startYear,void 0,{trim:!0}]])]),(0,s._)("div",F,[H,(0,s.wy)((0,s._)("input",{disabled:!this.updateMode,"onUpdate:modelValue":t[13]||(t[13]=t=>e.endYear=t),onInput:t[14]||(t[14]=(...e)=>ge.canUpdateCheck&&ge.canUpdateCheck(...e)),minlength:"4",maxlength:"4",min:this.startYear,max:"9999",type:"number",name:"",id:"",class:"input-text",placeholder:"Год окончания обучения",title:"Введите год окончания обучения"},null,40,P),[[i.nr,e.endYear,void 0,{trim:!0}]])])]),(0,s._)("div",R,[(0,s._)("div",W,[X,(0,s.wy)((0,s._)("input",{disabled:!this.updateMode,"onUpdate:modelValue":t[15]||(t[15]=t=>e.email=t),type:"email",maxlength:"100",name:"",id:"",class:"input-text",placeholder:"Email",title:"Введите Email"},null,8,G),[[i.nr,e.email,void 0,{trim:!0}]])]),(0,s._)("div",Q,[ee,(0,s.wy)((0,s._)("input",{disabled:!this.updateMode,"onUpdate:modelValue":t[16]||(t[16]=t=>e.phone=t),minlength:"11",maxlength:"11",type:"tel",name:"",id:"",class:"input-text",placeholder:"Телефон",title:"Введите номер телефона без (+)"},null,8,te),[[i.nr,e.phone,void 0,{trim:!0}]])]),(0,s._)("div",ae,[se,(0,s.wy)((0,s._)("input",{disabled:!this.updateMode,"onUpdate:modelValue":t[17]||(t[17]=t=>e.birthday=t),type:"date",name:"",id:"",class:"input-text",placeholder:"Дата рождения",title:"Введите дату рождения"},null,8,re),[[i.nr,e.birthday,void 0,{trim:!0}]])])]),(0,s._)("div",ie,[this.updateMode?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("button",{key:0,class:"main-btn px-5 py-3 text-xl inline-flex items-center",onClick:t[18]||(t[18]=(0,i.iM)(((...e)=>ge.changeOperationMode&&ge.changeOperationMode(...e)),["prevent"]))},[le,(0,s.Uk)(" Редактировать ")])),this.updateMode?((0,s.wg)(),(0,s.iD)("div",de,[(0,s._)("button",{class:"main-btn-red px-5 py-3 text-xl inline-flex items-center",onClick:t[19]||(t[19]=(0,i.iM)(((...e)=>ge.rajectChangesModal&&ge.rajectChangesModal(...e)),["prevent"]))},[ne,(0,s.Uk)(" Отменить ")]),oe])):(0,s.kq)("",!0)])],32)),(0,s._)("div",ue,[me,(0,s._)("div",pe,[(0,s._)("button",{onClick:t[21]||(t[21]=(0,i.iM)((e=>this.$router.go(-1)),["prevent"])),class:"main-btn inline-block px-5 py-3 w-[150px] text-center text-xl"},"Уйти"),ce])],512)])])],64)}a(7658);var ge=a(2435),ye=a(8310),ve=a(6270),we=a(573),fe=(a(5753),a(3053)),xe=a(9117),be=a(8806),ke=a(8548),Se={name:"StudentView",setup(){return{v$:(0,fe.Xw)()}},props:["studentId"],data:()=>({loading:!0,formSelect:null,lastname:"",name:"",patronymic:"",groupName:"",birthday:"",startYear:"",endYear:"",phone:"",email:"",canCreate:!1,departments:[],departmentsMap:{},role:be.v.SuperAdmin,departmentId:"",isModer:!1,updateStudentProcess:!1,modal:null,resetKey:1,updateMode:!1,dateCreate:"",dateUpdate:"",isTrained:!1,selectedDepartment:""}),validations(){return{lastname:{required:xe.C1,minLength:(0,xe.Ei)(1),maxLength:(0,xe.BS)(50)},name:{required:xe.C1,minLength:(0,xe.Ei)(1),maxLength:(0,xe.BS)(50)},patronymic:{required:xe.C1,minLength:(0,xe.Ei)(1),maxLength:(0,xe.BS)(50)},groupName:{required:xe.C1,minLength:(0,xe.Ei)(1),maxLength:(0,xe.BS)(20)}}},async mounted(){ve.Z[this.$route.query.message]&&this.$message(ve.Z[this.$route.query.message]),await this.loadStudent(),await we.Z.getDepartmentsAll().then((e=>{this.departments=[];for(let t of e.data)this.departments.push(t.shortName);for(let t of e.data)this.departmentsMap[t.shortName]=t.id}),(e=>{this.message=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),this.$error(ve.Z[this.message]||"Что-то пошло не так")})),setTimeout((()=>{this.formSelect=M.FormSelect.init(document.querySelectorAll("select"),{}),this.modal=M.Modal.init(this.$refs.modal),this.resetKey+=1}),0),this.loading=!1},methods:{async canUpdateCheck(){this.canCreate=!1,""!==this.groupName&&""!==this.startYear&&""!==this.endYear&&(this.canCreate=!0)},async updateStudent(){this.v$.$invalid?this.v$.$touch():(this.updateStudentProcess=!0,this.departmentId=this.departmentsMap[document.querySelector(".select-wrapper li.selected").innerText],await ke.Z.updateStudent(this.studentId,this.lastname,this.name,this.patronymic,this.groupName,this.departmentId,this.startYear,this.endYear,this.email,this.phone,this.birthday).then((e=>{this.$message(`Студент №${e.data.id} обновлен`),this.dateUpdate=e.data.dateUpdate}),(e=>{this.message=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),this.$error(ve.Z[this.message]||"Что-то пошло не так")})),this.updateMode=!1,this.updateStudentProcess=!1)},async rajectChangesModal(){this.$message("Изменения отменены"),await this.loadStudent(),this.updateMode=!1},async updateStudentStatus(e){await ke.Z.updateStudentStatus(this.studentId,e).then((e=>{e.data.isTrained?this.$message(`Студент №${this.studentId} активирован`):this.$message(`Студент №${this.studentId} деактивирован`),this.isTrained=e.data.isTrained,this.dateUpdate=e.data.dateUpdate}),(e=>{this.message=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),this.$error(ve.Z[this.message]||"Что-то пошло не так")}))},async loadStudent(){await ke.Z.getStudent(this.studentId).then((e=>{this.lastname=e.data.lastName,this.name=e.data.name,this.patronymic=e.data.patronymic,this.groupName=e.data.groupName,this.birthday=e.data.birthday,this.startYear=e.data.yearStart,this.endYear=e.data.yearEnd,this.phone=e.data.phone,this.email=e.data.email,this.departmentId=e.data.department.id,this.selectedDepartment=e.data.department.shortName,this.isTrained=e.data.isTrained,this.dateCreate=e.data.dateCreate,this.dateUpdate=e.data.dateUpdate}),(e=>{this.message=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),this.$error(ve.Z[this.message]||"Что-то пошло не так")}))},changeOperationMode(){this.updateMode=!0,this.resetKey+=1,this.$message("Включен режим редактирования")},back(){this.updateMode?this.modal.open():this.$router.go(-1)}},computed:{},watch:{},beforeDestroy(){this.formSelect&&this.formSelect.destroy&&this.formSelect.destroy(),this.modal&&this.modal.destroy&&this.modal.destroy()},components:{Sidebar:ge.Z,SelectVue:ye.Z}},_e=a(89);const Ze=(0,_e.Z)(Se,[["render",he]]);var De=Ze}}]);
//# sourceMappingURL=841.56122cc2.js.map