"use strict";(self["webpackChunkcontact_form_app"]=self["webpackChunkcontact_form_app"]||[]).push([[54],{829:function(e,o,r){r.r(o),r.d(o,{default:function(){return p}});var t=function(){var e=this,o=e._self._c;return o("div",{staticClass:"section personal-info"},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.isActiveSection("personalInfo"),expression:"isActiveSection('personalInfo')"}],staticClass:"input-wrapper"},e._l(e.fields,(function(r){return o("FormGroup",{key:r.id,attrs:{id:r.id,label:r.label,type:r.type,options:r.options,placeholder:r.placeholder,errorMessage:r.errorMessage,validator:e.getValidator(r.model)},model:{value:e.form[r.model],callback:function(o){e.$set(e.form,r.model,o)},expression:"form[field.model]"}})})),1)])},s=[],l=r(4242),i=r(1353),a={name:"PersonalInfoSection",components:{FormGroup:l.A},props:{activeSection:String},data(){return{form:{surname:"",name:"",middlename:"",dateOfBirth:"",phoneNumber:"7",sex:"",group:"",doctor:"",selectedOptions:[],sms:""},fields:[{id:"surname",label:"Фамилия*",model:"surname",type:"text",errorMessage:"Обязательное поле"},{id:"name",label:"Имя*",model:"name",type:"text",errorMessage:"Обязательное поле"},{id:"middlename",label:"Отчество",model:"middlename",type:"text"},{id:"dateOfBirth",label:"Дата рождения*",model:"dateOfBirth",type:"date",errorMessage:"Обязательное поле"},{id:"phoneNumber",label:"Телефон*",model:"phoneNumber",type:"text",errorMessage:"Номер должен содержать 11 цифр"},{id:"sex",label:"Пол",model:"sex",type:"select",placeholder:"Выберите пол",options:["Мужской","Женский"],errorMessage:"Выберите вариант"},{id:"group",label:"Группа клиентов*",model:"group",type:"multiselect",placeholder:"Выберите группу",options:["VIP","Проблемные","ОМС"],errorMessage:"Выберите вариант"},{id:"doctor",label:"Лечащий врач",model:"doctor",type:"select",placeholder:"Выберите врача",options:["Иванов","Захаров","Чернышева"],errorMessage:"Выберите вариант"},{id:"sms",label:"Не отправлять СМС",model:"sms",type:"checkbox"}]}},validations:{form:{surname:{required:i.mw},name:{required:i.mw},middlename:{},dateOfBirth:{required:i.mw},phoneNumber:{required:i.mw,minLength:(0,i.Bp)(11),maxLength:(0,i.Ru)(11),numeric:i.sH},sex:{},group:{required:i.mw},doctor:{},sms:{}}},methods:{toggle(){this.$emit("toggleSection","personalInfo")},isActiveSection(e){return this.activeSection===e},getValidator(e){return this.$v&&this.$v.form&&this.$v.form[e]?this.$v.form[e]:(console.error("Validation for "+e+" is not defined."),null)}}},n=a,d=r(1656),m=(0,d.A)(n,t,s,!1,null,"706dc27a",null),p=m.exports}}]);
//# sourceMappingURL=54.940e54de.js.map