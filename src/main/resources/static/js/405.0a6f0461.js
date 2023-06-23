"use strict";(self["webpackChunkyggdrasil_client"]=self["webpackChunkyggdrasil_client"]||[]).push([[405],{7882:function(e,t,r){var s=r(4161),a=r(2479);const u="http://10.100.124.9/api/v1/documents/";class n{getDocument(e){return s.Z.get(u+`${e}`,{headers:(0,a.Z)()})}getDocuments(e,t,r,n,d,o,i,l,m){let c=JSON.stringify({typeSearch:e,parameter:t,currentPage:r,sortField:n,sortDir:d,statusName:o,minDate:i,maxDate:l,documentType:m}),h={method:"post",maxBodyLength:1/0,url:u+"all",headers:(0,a.Z)(),data:c};return s.Z.request(h)}getDocumentStructures(){return s.Z.get(u+"structures/short",{headers:(0,a.Z)()})}getDocumentStructure(e){return s.Z.get(u+`structures/${e}`,{headers:(0,a.Z)()})}createDocument(e,t,r,n){let d=JSON.stringify({documentData:JSON.stringify(n),documentStatusId:Number(r),documentStructureId:Number(t),username:e}),o={method:"post",maxBodyLength:1/0,url:u+"create",headers:(0,a.Z)(),data:d};return s.Z.request(o)}deleteDocument(e){return s.Z["delete"](u+"delete/"+e,{headers:(0,a.Z)()})}updateDocumentStatus(e,t){let r=JSON.stringify({documentStatusId:JSON.stringify(t)}),n={method:"post",maxBodyLength:1/0,url:u+`${e}/status/update`,headers:(0,a.Z)(),data:r};return s.Z.request(n)}updateDocumentData(e,t){let r=JSON.stringify({documentData:JSON.stringify(t)}),n={method:"post",maxBodyLength:1/0,url:u+`${e}/data/update`,headers:(0,a.Z)(),data:r};return s.Z.request(n)}getUserStatistics(e,t,r){let n=JSON.stringify({minDate:t,maxDate:r}),d={method:"post",maxBodyLength:1/0,url:u+`statistic/user/${e}`,headers:(0,a.Z)(),data:n};return s.Z.request(d)}getDepartmentStatistics(e,t,r){let n=JSON.stringify({minDate:t,maxDate:r}),d={method:"post",maxBodyLength:1/0,url:u+`statistic/department/${e}`,headers:(0,a.Z)(),data:n};return s.Z.request(d)}getFacultayStatistics(e,t,r){let n=JSON.stringify({minDate:t,maxDate:r}),d={method:"post",maxBodyLength:1/0,url:u+`statistic/faculty/${e}`,headers:(0,a.Z)(),data:n};return s.Z.request(d)}getAllStatistics(e,t){let r=JSON.stringify({minDate:e,maxDate:t}),n={method:"post",maxBodyLength:1/0,url:u+"statistic/all",headers:(0,a.Z)(),data:r};return s.Z.request(n)}getAllDocumentTypes(){return s.Z.get(u+"types/all",{headers:(0,a.Z)()})}checkDocumentTypeName(e){let t=JSON.stringify({name:e}),r={method:"post",maxBodyLength:1/0,url:u+"types/check",headers:(0,a.Z)(),data:t};return s.Z.request(r)}createDocumentType(e){let t=JSON.stringify({name:e}),r={method:"post",maxBodyLength:1/0,url:u+"types/create",headers:(0,a.Z)(),data:t};return s.Z.request(r)}getAdminDocumentStructures(e,t,r,n,d,o,i,l){let m=JSON.stringify({parameter:e,currentPage:t,sortField:r,sortDir:n,isActive:d,minDate:o,maxDate:i,documentTypeName:l}),c={method:"post",maxBodyLength:1/0,url:u+"structures/short/admin",headers:(0,a.Z)(),data:m};return s.Z.request(c)}createDocumentStructure(e,t,r,n,d){let o=JSON.stringify({id:e,name:t,description:r,documentTypeId:n,structureData:JSON.stringify(d)}),i={method:"post",maxBodyLength:1/0,url:u+"structures/create",headers:(0,a.Z)(),data:o};return s.Z.request(i)}updateDocumentStructure(e,t,r,n,d){let o=JSON.stringify({id:e,name:t,description:r,documentTypeId:n,structureData:JSON.stringify(d)}),i={method:"post",maxBodyLength:1/0,url:u+"structures/update",headers:(0,a.Z)(),data:o};return s.Z.request(i)}updateStatusDocumentStructure(e,t){let r=JSON.stringify({id:e,isActive:Boolean(t)}),n={method:"post",maxBodyLength:1/0,url:u+"structures/status/update",headers:(0,a.Z)(),data:r};return s.Z.request(n)}checkDocumentStructure(e){return s.Z.get(u+`structures/${e}/check`,{headers:(0,a.Z)()})}updateStatusDocumentsByStructureId(e){let t=JSON.stringify({id:e}),r={method:"post",maxBodyLength:1/0,url:u+"status/update/remake",headers:(0,a.Z)(),data:t};return s.Z.request(r)}getNewDocumentStructures(e){let t=JSON.stringify({oldDocumentStructureId:e}),r={method:"post",maxBodyLength:1/0,url:u+"structures/new/all",headers:(0,a.Z)(),data:t};return s.Z.request(r)}getAllFacultyDocuments(e,t,r,n){let d=JSON.stringify({documentStructureId:e,facultyId:t,minDate:r,maxDate:n}),o={method:"post",maxBodyLength:1/0,url:u+"faculty/all",headers:(0,a.Z)(),data:d};return s.Z.request(o)}getAllDepartmentDocuments(e,t,r,n){let d=JSON.stringify({documentStructureId:e,departmentId:t,minDate:r,maxDate:n}),o={method:"post",maxBodyLength:1/0,url:u+"department/all",headers:(0,a.Z)(),data:d};return s.Z.request(o)}archivingDocuments(e,t,r,n){let d=JSON.stringify({documentStructureId:e,documentStatusId:t,minDate:r,maxDate:n}),o={method:"post",maxBodyLength:1/0,url:u+"archiving",headers:(0,a.Z)(),data:d};return s.Z.request(o)}documentExportToExcel(e,t,r,n,d){let o=JSON.stringify({documentStructures:e,facultyId:t,departmentId:r,minDate:n,maxDate:d}),i={method:"post",maxBodyLength:1/0,url:u+"export",headers:(0,a.Z)(),responseType:"blob",data:o};return s.Z.request(i)}documentCombinedExportToExcel(e,t,r,n,d){let o=JSON.stringify({documentStructures:e,facultyList:t,departmentList:r,minDate:n,maxDate:d}),i={method:"post",maxBodyLength:1/0,url:u+"combined/export",headers:(0,a.Z)(),responseType:"blob",data:o};return s.Z.request(i)}updateDocumentType(e,t){let r=JSON.stringify({documentTypeName:t}),n={method:"post",maxBodyLength:1/0,url:u+"types/update/"+e,headers:(0,a.Z)(),data:r};return s.Z.request(n)}}t["Z"]=new n},8573:function(e,t,r){var s=r(4161),a=r(2479);const u="http://10.100.124.9/api/v1/keywords/";class n{getKeyWords(){return s.Z.get(u+"all",{headers:(0,a.Z)()})}attachKeyWord(e,t){let r=JSON.stringify({keyWords:t}),n={method:"post",maxBodyLength:1/0,url:u+"add/"+e,headers:(0,a.Z)(),data:r};return s.Z.request(n)}getDocumentKeyWords(e){return s.Z.get(u+"document/"+e,{headers:(0,a.Z)()})}updateKeyWord(e,t){let r=JSON.stringify({keyWordName:t}),n={method:"post",maxBodyLength:1/0,url:u+"update/"+e,headers:(0,a.Z)(),data:r};return s.Z.request(n)}deleteKeyWord(e){return s.Z["delete"](u+"delete/"+e,{headers:(0,a.Z)()})}}t["Z"]=new n},5753:function(e,t,r){var s=r(4161),a=r(2479),u=r(3456);const n="http://10.100.124.9/api/v1/user/";class d{getUserInfo(){return s.Z.get(n+this.currentUser().username,{headers:(0,a.Z)()})}getEmployeeInfo(e){return s.Z.get(n+`profile/${e}/info`,{headers:(0,a.Z)()})}getUserFaculty(e){return s.Z.get(n+`${e}/faculty`,{headers:(0,a.Z)()})}getUserDepartment(e){return s.Z.get(n+`${e}/department`,{headers:(0,a.Z)()})}userTokenCheck(){return console.log((0,a.Z)()),s.Z.get(n+"token/check",{headers:(0,a.Z)()})}getAllUsers(){return s.Z.get(n+"list",{headers:(0,a.Z)()})}getAllDepartmentUsers(){return s.Z.get(n+"department/list",{headers:(0,a.Z)()})}getAllUsersFind(e,t,r,u,d,o,i,l,m,c){let h=JSON.stringify({parameter:e,currentPage:t,sortField:r,sortDir:u,minDate:d,maxDate:o,departmentName:i,isState:l,userRole:m,isActive:c}),p={method:"post",maxBodyLength:1/0,url:n+"list/find",headers:(0,a.Z)(),data:h};return s.Z.request(p)}updateProfile(e,t,r,u,d,o,i,l,m,c,h,p,g,y,Z){let f=JSON.stringify({id:e,phone:t,email:r,imgUrl:u,lastName:d,name:o,patronymic:i,jobTitle:l,academicTitle:m,academicDegree:c,orcid:h,spinCode:p,birthday:g,state:y,departmentId:Z}),x={method:"post",maxBodyLength:1/0,url:n+"update",headers:(0,a.Z)(),data:f};return s.Z.request(x)}checkValidUsername(e){let t=JSON.stringify({username:e}),r={method:"post",maxBodyLength:1/0,url:n+"username/check",headers:(0,a.Z)(),data:t};return s.Z.request(r)}createUser(e,t,r,u,d,o,i,l){let m=JSON.stringify({lastName:e,name:t,patronymic:r,state:u,departmentId:Number(d),username:o,password:i,userRole:l}),c={method:"post",maxBodyLength:1/0,url:n+"create",headers:(0,a.Z)(),data:m};return s.Z.request(c)}updateUserStatus(e,t){let r=JSON.stringify({userId:Number(e),isActive:t}),u={method:"post",maxBodyLength:1/0,url:n+"status/update",headers:(0,a.Z)(),data:r};return s.Z.request(u)}updateUserPassword(e,t){let r=JSON.stringify({userId:Number(e),password:t}),u={method:"post",maxBodyLength:1/0,url:n+"password/update",headers:(0,a.Z)(),data:r};return s.Z.request(u)}currentUser(){return u.Z.state.auth.user}}t["Z"]=new d},6532:function(e,t,r){r.d(t,{_:function(){return s}});const s={Draft:1,Ready:2,Remake:3,Archive:4,1:"Черновик",2:"Готов",3:"Переделать",4:"Архив","Черновик":1,"Готов":2,"Переделать":3,"Архив":4}},6775:function(e,t,r){r.d(t,{Z:function(){return S}});var s=r(3396),a=r(7139);const u={class:"document-create-message fixed w-full h-full top-0 left-0 z-40 bg-black/60 flex justify-center"},n={class:"document-message-body bg-white w-[30%] self-center rounded-xl p-6 text-center"},d=(0,s._)("div",{class:"document-message-img bg-[var(--color-main)] inline-block text-white rounded-full p-6 mx-auto mb-10"},[(0,s._)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2.5",stroke:"currentColor",class:"w-32"},[(0,s._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"})])],-1),o={class:"document-message-text mb-10"},i={class:"document-message-title text-2xl mb-10"},l={class:"document-message-description text-start"},m={class:"document-message-navigate flex justify-around gap-5 flex-grow flex-wrap"},c=(0,s._)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mr-1"},[(0,s._)("path",{d:"M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z"}),(0,s._)("path",{d:"M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z"})],-1),h=(0,s._)("div",null,"Открыть документ",-1),p=(0,s._)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mr-1"},[(0,s._)("path",{"fill-rule":"evenodd",d:"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z","clip-rule":"evenodd"})],-1),g=(0,s._)("div",null,"Закрыть",-1);function y(e,t,r,y,Z,f){const x=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",u,[(0,s._)("div",n,[d,(0,s._)("div",o,[(0,s._)("h2",i,(0,a.zw)(this.typeCreate)+" №"+(0,a.zw)(this.documentId)+" успешно создан! ",1),(0,s._)("div",l," Исходный шаблон: №"+(0,a.zw)(this.structureId)+" — "+(0,a.zw)(this.structureName),1)]),(0,s._)("div",m,[(0,s.Wm)(x,{to:{name:"document",params:{documentId:this.documentId,firstOpenDoc:!1}},class:"document-message-button main-btn inline-flex p-3 self-center"},{default:(0,s.w5)((()=>[c,h])),_:1},8,["to"]),(0,s.Wm)(x,{to:{name:"documents"},class:"document-message-button main-btn inline-flex p-3 self-center w-[191.233px] justify-center"},{default:(0,s.w5)((()=>[p,g])),_:1})])])])}var Z={props:["typeCreate","structureId","structureName","documentId"]},f=r(89);const x=(0,f.Z)(Z,[["render",y]]);var S=x},2435:function(e,t,r){r.d(t,{Z:function(){return m}});var s=r(3396),a=r(7139);const u={class:"shadow-md rounded-xl overflow-hidden border"};function n(e,t,r,n,d,o){const i=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("ul",u,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.links,(e=>((0,s.wg)(),(0,s.iD)("li",{key:e.url},[e.roles.includes(this.currentUser.roles[0])?((0,s.wg)(),(0,s.j4)(i,{key:0,"active-class":"active",to:e.url,class:"hover:bg-gray-200 pl-5 py-2 block select-none"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(e.title),1)])),_:2},1032,["to"])):(0,s.kq)("",!0)])))),128))])}var d=r(8806),o={data:()=>({links:[{title:"Документы",url:"/documents",roles:[d.v.User,d.v.Admin,d.v.Moderator]},{title:"Отчеты",url:"/reports",roles:[d.v.Admin,d.v.Moderator]},{title:"Факультеты",url:"/facultets",roles:[d.v.SuperAdmin]},{title:"Кафедры",url:"/departments",roles:[d.v.SuperAdmin]},{title:"Сотрудники",url:"/employees",roles:[d.v.SuperAdmin,d.v.Moderator]},{title:"Студенты",url:"/students",roles:[d.v.User,d.v.SuperAdmin,d.v.Moderator]},{title:"Конструктор шаблонов",url:"/constructors",roles:[d.v.SuperAdmin]},{title:"Статистика",url:"/statistics",roles:[d.v.User,d.v.Admin,d.v.Moderator]},{title:"Разное",url:"/different",roles:[d.v.SuperAdmin]}]}),computed:{currentUser(){return this.$store.state.auth.user}}},i=r(89);const l=(0,i.Z)(o,[["render",n]]);var m=l}}]);
//# sourceMappingURL=405.0a6f0461.js.map