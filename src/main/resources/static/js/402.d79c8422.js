"use strict";(self["webpackChunkyggdrasil_client"]=self["webpackChunkyggdrasil_client"]||[]).push([[402],{2435:function(s,l,a){a.d(l,{Z:function(){return v}});var i=a(3396),n=a(7139);const d={class:"shadow-md rounded-xl overflow-hidden border"};function o(s,l,a,o,e,c){const t=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("ul",d,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.links,(s=>((0,i.wg)(),(0,i.iD)("li",{key:s.url},[s.roles.includes(this.currentUser.roles[0])?((0,i.wg)(),(0,i.j4)(t,{key:0,"active-class":"active",to:s.url,class:"hover:bg-gray-200 pl-5 py-2 block select-none"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(s.title),1)])),_:2},1032,["to"])):(0,i.kq)("",!0)])))),128))])}var e=a(8806),c={data:()=>({links:[{title:"Документы",url:"/documents",roles:[e.v.User,e.v.Admin,e.v.Moderator]},{title:"Отчеты",url:"/reports",roles:[e.v.Admin,e.v.Moderator]},{title:"Факультеты",url:"/facultets",roles:[e.v.SuperAdmin]},{title:"Кафедры",url:"/departments",roles:[e.v.SuperAdmin]},{title:"Сотрудники",url:"/employees",roles:[e.v.SuperAdmin,e.v.Moderator]},{title:"Студенты",url:"/students",roles:[e.v.User,e.v.SuperAdmin,e.v.Moderator]},{title:"Конструктор шаблонов",url:"/constructors",roles:[e.v.SuperAdmin]},{title:"Статистика",url:"/statistics",roles:[e.v.User,e.v.Admin,e.v.Moderator]},{title:"Разное",url:"/different",roles:[e.v.SuperAdmin]}]}),computed:{currentUser(){return this.$store.state.auth.user}}},t=a(89);const p=(0,t.Z)(c,[["render",o]]);var v=p},8402:function(s,l,a){a.r(l),a.d(l,{default:function(){return W}});var i=a(3396),n=a(7139);const d=(0,i._)("div",{class:"chapter-name text-3xl mb-6"}," Главная ",-1),o={class:"flex gap-x-5 flex-grow"},e={class:"menu w-1/5"},c={class:"w-4/5 flex flex-col mb-6 flex-grow shadow-md rounded-xl items-stretch border p-6"},t={class:"info-header mb-6 flex justify-between"},p={key:0,class:"wellcome text-2xl"},v={key:1,class:"wellcome text-2xl"},r={key:2,class:"wellcome text-2xl"},b={key:3,class:"info-role"},u=(0,i._)("span",{class:"font-bold"},"Ваша роль:",-1),f=(0,i._)("div",{class:"line h-1 bg-gray-200 mb-6"},null,-1),h={class:"info-body"},m={key:0,class:"text-lg"},y={class:"collapsible",ref:"col"},q=(0,i.uE)('<li><div class="collapsible-header">Работа с факультетами</div><div class="collapsible-body"><span> При выборе в левой панеле вкладки <span class="font-bold">Факультеты</span> у вас откроется страница факультетов. </span><div class=""> В таблице можно увидеть основную информацию о факультетах. </div><div class=""> При нажатии на кнопку <span class="font-bold">Создать</span>, у вас откроется страница для создания нового факультета. </div><div class=""> При нажатии на кнопку <span class="font-bold">Подробнее</span>, у вас откроется страница выбраного факультета. В ней также можно изменить информацию при нажатии кнопку <span class="font-bold">Редактировать</span>. В этом же окне отображены сводные таблицы кафедр факультета и сотрудников на факультете. </div></div></li><li><div class="collapsible-header">Работа с кафедрами</div><div class="collapsible-body"><span> При выборе в левой панеле вкладки <span class="font-bold">Кафедры</span> у вас откроется страница кафедр. </span><div class=""> В таблице можно увидеть основную информацию о кафедрах. </div><div class=""> При нажатии на кнопку <span class="font-bold">Создать</span>, у вас откроется страница для создания новой кафедры. </div><div class=""> При нажатии на кнопку <span class="font-bold">Подробнее</span>, у вас откроется страница выбраной кафедры. В ней также можно изменить информацию при нажатии кнопку <span class="font-bold">Редактировать</span>. В этом же окне отображены сводные таблицы сотрудников на кафедре. </div></div></li><li><div class="collapsible-header">Работа с сотрудниками</div><div class="collapsible-body"><span> При выборе в левой панеле вкладки <span class="font-bold">Сотрудники</span> у вас откроется страница сотрудников. </span><div class=""> В таблице можно увидеть основную информацию о сотрудниках. </div><div class=""> При нажатии на кнопку <span class="font-bold">Создать</span>, у вас откроется страница для создания нового сотрудника. </div><div class=""> При нажатии на кнопку <span class="font-bold">Подробнее</span>, у вас откроется страница выбраного сотрудника. В ней также можно изменить информацию при нажатии кнопку <span class="font-bold">Редактировать</span>. При нажатии на кнопку <span class="font-bold">Изменить пароль</span> можно установить новый пароль для пользователя, если он забыл свой старый. </div></div></li><li><div class="collapsible-header">Работа с студентами</div><div class="collapsible-body"><span> При выборе в левой панеле вкладки <span class="font-bold">Студенты</span> у вас откроется страница студентов. </span><div class=""> В таблице можно увидеть основную информацию о студентах. </div><div class=""> При нажатии на кнопку <span class="font-bold">Создать</span>, у вас откроется страница для создания нового студента. </div><div class=""> При нажатии на кнопку <span class="font-bold">Подробнее</span>, у вас откроется страница выбраного студента. В ней также можно изменить информацию при нажатии кнопку <span class="font-bold">Редактировать</span>. При нажатии на кнопку <span class="font-bold">Деактивировать</span> можно изменить стаутс студента на <span class="font-bold">&quot;Не учится&quot;</span> или в обратную сторону при нажатии на кнопку <span class="font-bold">Активировать</span>. </div></div></li><li><div class="collapsible-header">Работа с конструкторами шаблонов</div><div class="collapsible-body"><span> При выборе в левой панеле вкладки <span class="font-bold">Конструктор шаблонов</span> у вас откроется страница с шаблонов документов и отчетов (по умолчанию отображаеются шаблоны документов). </span><div class=""> В таблице можно увидеть основную информацию о шаблонах. </div><div class=""> При нажатии на кнопку <span class="font-bold">Создать</span>, у вас откроется страница для создания нового шаблона (документа / отчета). </div><div class=""> В окне для документов, вам необходимо нажимать на интересующий вас тип поля в левой панеле, после чего у вас откроется диалоговое окно с настройками поля. После создания поля, оно отобразится ниже в списке. Если вам необходимо его отредактировать, то нажмите на него в списке созданных полей. </div><div class=""> В окне для отчетов, вам необходимо заполнить все поля, добавить, если нужно, новый тип отчета или выбрать из уже имеющихся, выбрать перечень документов, которые будут использоваться в отчете и для того чтобы сохранить выбранные документов, необходимо нажать на кнопку <span class="font-bold">Сохранить выбранный перечень</span>. </div><div class=""> При нажатии на кнопку <span class="font-bold">Подробнее</span>, у вас откроется страница выбраного шаблона. В ней можно отредактировать шаблон. </div><div class=""> Если на основе шаблона документа / отчета есть документы / отчеты в статусе <span class="font-bold">&quot;Архив&quot;</span>, то при изменении шаблона, будет создана копия и все документы / отчеты, которые не архивные, будут переведены на новый шаблон. </div></div></li><li><div class="collapsible-header">Работа с разделом разное</div><div class="collapsible-body"><span> При выборе в левой панеле вкладки <span class="font-bold">Разное</span> у вас откроется страница с ключевыми словами, типами документов и типами отчетов. </span><div class=""> В таблице можно увидеть основную информацию о них. </div><div class=""> При нажатии на кнопку <span class="font-bold">Подробнее</span>, у вас откроется страница для редактирования выбраной записи. </div></div></li>',6),w=[q],g={key:1,class:""},k={class:"collapsible",ref:"col"},U=(0,i.uE)('<li><div class="collapsible-header">Работа с документами</div><div class="collapsible-body"><span> При выборе в левой панеле вкладки <span class="font-bold">Документы</span> у вас откроется страница документов. </span><div class=""> В таблице можно увидеть основную информацию о документах. </div><div class=""> При нажатии на кнопку <span class="font-bold">Подробнее</span>, у вас откроется страница выбраного документа. Также можно добавить или удалить ключевые слова. Для добавления нового ключевого слова, необходимо его ввести в поле и нажать Enter. </div></div></li><li><div class="collapsible-header">Работа с отчет</div><div class="collapsible-body"><span> При выборе в левой панеле вкладки <span class="font-bold">Отчеты</span> у вас откроется страница отчетов. </span><div class=""> В таблице можно увидеть основную информацию о отчетах. </div><div class=""> При нажатии на кнопку <span class="font-bold">Создать</span>, у вас откроется страница для создания нового отчета. Вам необходимо выбрать шаблон, период за который будут браться документы в статусе <span class="font-bold">&quot;Готов&quot;</span> и по чему будет формироваться отчет (по кафрам или факультетам). </div><div class=""> При нажатии на кнопку <span class="font-bold">Подробнее</span>, у вас откроется страница выбраного отчета. Можно псмотреть данные, которые есть в отчете, изменить статус отчета и если отчет не в статусе <span class="font-bold">&quot;Архив&quot;</span>, то его можно отредактировать. Если вы изменити статус отчета на <span class="font-bold">&quot;Архив&quot;</span>, то все документы, которые в отчете, будут переведены в статус <span class="font-bold">&quot;Архив&quot;</span> и больше не будут возможны для редактирования. </div></div></li><li><div class="collapsible-header">Работа с статистикой</div><div class="collapsible-body"><span> При выборе в левой панеле вкладки <span class="font-bold">Статистика</span> у вас откроется страница статистики. </span><div class=""> Здесь можно ознакомиться с статистикой на разных уровнях и за разный период. </div></div></li>',3),x=[U],A={key:2,class:""},_={class:"collapsible",ref:"col"},D=(0,i.uE)('<li><div class="collapsible-header">Работа с документами</div><div class="collapsible-body"><span> При выборе в левой панеле вкладки <span class="font-bold">Документы</span> у вас откроется страница ваших документов и документов кафедры (кроме документов, которые не были созданы вами и в статусе <span class="font-bold">&quot;Черновик&quot;</span>). </span><div class=""> В таблице можно увидеть основную информацию о документах. </div><div class=""> При нажатии на кнопку <span class="font-bold">Создать</span>, у вас откроется страница создания документа. Пока вы не опубликуете документ (статус <span class="font-bold">&quot;Черновик&quot;</span>), все ваши изменения будут автоматически сохраняться. Также можно добавить или удалить ключевые слова. Для добавления нового ключевого слова, необходимо его ввести в поле и нажать Enter. </div><div class=""> При нажатии на кнопку <span class="font-bold">Подробнее</span>, у вас откроется страница выбраного документа. Также можно добавить или удалить ключевые слова. Для добавления нового ключевого слова, необходимо его ввести в поле и нажать Enter. </div><div class=""> При нажатии на кнопку <span class="font-bold">Переделать</span>, статус документа будет изменен на <span class="font-bold">&quot;Переделать&quot;</span>. </div></div></li><li><div class="collapsible-header">Работа с отчет</div><div class="collapsible-body"><span> При выборе в левой панеле вкладки <span class="font-bold">Отчеты</span> у вас откроется страница отчетов. </span><div class=""> В таблице можно увидеть основную информацию о отчетах. </div><div class=""> При нажатии на кнопку <span class="font-bold">Создать</span>, у вас откроется страница для создания нового отчета. Вам необходимо выбрать шаблон, период за который будут браться документы в статусе <span class="font-bold">&quot;Готов&quot;</span>. </div><div class=""> При нажатии на кнопку <span class="font-bold">Подробнее</span>, у вас откроется страница выбраного отчета. Можно псмотреть данные, которые есть в отчете, изменить статус отчета и если отчет не в статусе <span class="font-bold">&quot;Готов&quot;</span>, то ваш отчет будет виден для Администратора. Изменить статус отчета на <span class="font-bold">&quot;Архив&quot;</span> может <span class="font-bold">ТОЛЬКО</span> Администратор. </div></div></li><li><div class="collapsible-header">Работа с сотрудниками</div><div class="collapsible-body"><span> При выборе в левой панеле вкладки <span class="font-bold">Сотрудники</span> у вас откроется страница сотрудников вашей кафедры. </span><div class=""> В таблице можно увидеть основную информацию о сотрудниках. </div><div class=""> При нажатии на кнопку <span class="font-bold">Создать</span>, у вас откроется страница для создания нового сотрудника. </div><div class=""> При нажатии на кнопку <span class="font-bold">Подробнее</span>, у вас откроется страница выбраного сотрудника. В ней также можно изменить информацию при нажатии кнопку <span class="font-bold">Редактировать</span>. При нажатии на кнопку <span class="font-bold">Изменить пароль</span> можно установить новый пароль для пользователя, если он забыл свой старый. </div></div></li><li><div class="collapsible-header">Работа с студентами</div><div class="collapsible-body"><span> При выборе в левой панеле вкладки <span class="font-bold">Студенты</span> у вас откроется страница студентов вашей кафедры. </span><div class=""> В таблице можно увидеть основную информацию о студентах. </div><div class=""> При нажатии на кнопку <span class="font-bold">Создать</span>, у вас откроется страница для создания нового студента. </div><div class=""> При нажатии на кнопку <span class="font-bold">Подробнее</span>, у вас откроется страница выбраного студента. В ней также можно изменить информацию при нажатии кнопку <span class="font-bold">Редактировать</span>. </div></div></li><li><div class="collapsible-header">Работа с статистикой</div><div class="collapsible-body"><span> При выборе в левой панеле вкладки <span class="font-bold">Статистика</span> у вас откроется страница статистики. </span><div class=""> Здесь можно ознакомиться с статистикой на разных уровнях и за разный период. </div></div></li>',5),E=[D],S={key:3,class:""},Z={class:"collapsible",ref:"col"},$=(0,i.uE)('<li><div class="collapsible-header">Работа с документами</div><div class="collapsible-body"><span> При выборе в левой панеле вкладки <span class="font-bold">Документы</span> у вас откроется страница ваших документов и документов кафедры (кроме документов, которые не были созданы вами и в статусе <span class="font-bold">&quot;Черновик&quot;</span>). </span><div class=""> В таблице можно увидеть основную информацию о документах. </div><div class=""> При нажатии на кнопку <span class="font-bold">Создать</span>, у вас откроется страница создания документа. Пока вы не опубликуете документ (статус <span class="font-bold">&quot;Черновик&quot;</span>), все ваши изменения будут автоматически сохраняться. Также можно добавить или удалить ключевые слова. Для добавления нового ключевого слова, необходимо его ввести в поле и нажать Enter. </div><div class=""> При нажатии на кнопку <span class="font-bold">Подробнее</span>, у вас откроется страница выбраного документа. Также можно добавить или удалить ключевые слова. Для добавления нового ключевого слова, необходимо его ввести в поле и нажать Enter. </div></div></li><li><div class="collapsible-header">Работа с студентами</div><div class="collapsible-body"><span> При выборе в левой панеле вкладки <span class="font-bold">Студенты</span> у вас откроется страница студентов вашей кафедры. </span><div class=""> В таблице можно увидеть основную информацию о студентах. </div><div class=""> При нажатии на кнопку <span class="font-bold">Создать</span>, у вас откроется страница для создания нового студента. </div><div class=""> При нажатии на кнопку <span class="font-bold">Подробнее</span>, у вас откроется страница выбраного студента. В ней также можно изменить информацию при нажатии кнопку <span class="font-bold">Редактировать</span>. </div></div></li><li><div class="collapsible-header">Работа с статистикой</div><div class="collapsible-body"><span> При выборе в левой панеле вкладки <span class="font-bold">Статистика</span> у вас откроется страница статистики. </span><div class=""> Здесь можно ознакомиться с статистикой. </div></div></li>',3),z=[$];function C(s,l,a,q,U,D){const M=(0,i.up)("Sidebar");return(0,i.wg)(),(0,i.iD)(i.HY,null,[d,(0,i._)("div",o,[(0,i._)("div",e,[(0,i.Wm)(M)]),(0,i._)("div",c,[(0,i._)("div",t,[this.currentUser.roles[0]===this.tAdmin?((0,i.wg)(),(0,i.iD)("h2",p," Добро пожаловать, Технический Администратор! ")):this.currentUser.roles[0]===this.admin?((0,i.wg)(),(0,i.iD)("h2",v," Добро пожаловать, Администратор! ")):((0,i.wg)(),(0,i.iD)("h2",r," Добро пожаловать, "+(0,n.zw)(this.currentUser.lastname+" "+this.currentUser.name+" "+this.currentUser.patronymic)+"! ",1)),this.currentUser.roles[0]!==this.admin&&this.currentUser.roles[0]!==this.tAdmin?((0,i.wg)(),(0,i.iD)("div",b,[u,(0,i.Uk)(" "+(0,n.zw)(this.currentUser.roles[0]===this.moder?"Зав. кафедрой":"Преподаватель"),1)])):(0,i.kq)("",!0)]),f,(0,i._)("div",h,[this.currentUser.roles[0]===this.tAdmin?((0,i.wg)(),(0,i.iD)("div",m,[(0,i.Uk)(" Ваши возможности в системе: "),(0,i._)("ul",y,w,512)])):this.currentUser.roles[0]===this.admin?((0,i.wg)(),(0,i.iD)("div",g,[(0,i._)("ul",k,x,512)])):this.currentUser.roles[0]===this.moder?((0,i.wg)(),(0,i.iD)("div",A,[(0,i._)("ul",_,E,512)])):this.currentUser.roles[0]===this.user?((0,i.wg)(),(0,i.iD)("div",S,[(0,i._)("ul",Z,z,512)])):(0,i.kq)("",!0)])])])],64)}var H=a(2435),j=a(6270),Y=a(8806),K={name:"HomeView",data:()=>({tAdmin:Y.v.SuperAdmin,admin:Y.v.Admin,moder:Y.v.Moderator,user:Y.v.User,col:null}),mounted(){j.Z[this.$route.query.message]&&this.$message(j.Z[this.$route.query.message]),setTimeout((()=>{this.col=M.Collapsible.init(this.$refs.col)}))},computed:{currentUser(){return this.$store.state.auth.user}},beforeDestroy(){this.col&&this.col.destroy&&this.col.destroy()},components:{Sidebar:H.Z}},T=a(89);const V=(0,T.Z)(K,[["render",C]]);var W=V}}]);
//# sourceMappingURL=402.d79c8422.js.map