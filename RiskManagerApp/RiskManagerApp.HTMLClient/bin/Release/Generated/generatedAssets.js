﻿window.myapp=msls.application,function(n){function f(n){i.call(this,n)}function h(n){i.call(this,n)}function c(n){i.call(this,n)}function e(n){i.call(this,n)}function l(n){i.call(this,n)}function o(n){i.call(this,n)}function s(n){i.call(this,n)}function a(n){i.call(this,n)}function v(n){y.call(this,n)}function k(){p.call(this)}var i=msls.Entity,y=msls.DataService,p=msls.DataWorkspace,r=msls._defineEntity,w=msls._defineDataService,b=msls._defineDataWorkspace,t=msls.DataServiceQuery,u=msls._toODataString;msls._addToNamespace("msls.application",{RiskAssessment:r(f,[{name:"Id",type:Number},{name:"ReferenceNumber",type:String},{name:"RiskType",kind:"reference",type:h},{name:"RiskAssessmentTitle",type:String},{name:"ProcessDescription",type:String},{name:"PersonsAffected",type:String},{name:"HowPersonsAffected",type:String},{name:"InherentLikelihood",type:Number},{name:"InherentImpact",type:Number},{name:"InherentRisk",type:Number},{name:"ControlMeasures",type:String},{name:"ControlledLikehood",type:Number},{name:"ControlledImpact",type:Number},{name:"ControlledRisk",type:Number},{name:"RiskAssessor",kind:"reference",type:e},{name:"RiskAssessmentStatus",kind:"reference",type:l},{name:"RiskAssessmentApprover",kind:"reference",type:e},{name:"DateApproved",type:Date},{name:"DateEffective",type:Date},{name:"RiskAssessmentReviews",kind:"collection",elementType:o},{name:"RiskAssessmentHazards",kind:"collection",elementType:s},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),RiskType:r(h,[{name:"Id",type:Number},{name:"TypeOfRisk",type:String},{name:"InUse",type:Boolean},{name:"RiskAssessments",kind:"collection",elementType:f},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),Employee:r(c,[{name:"Id",type:Number},{name:"LastName",type:String},{name:"FirstName",type:String},{name:"UserName",type:String},{name:"Email",type:String},{name:"Current",type:Boolean},{name:"RiskAssessor",kind:"reference",type:e},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),RiskAssessor:r(e,[{name:"Id",type:Number},{name:"Employee",kind:"reference",type:c},{name:"DateTrained",type:Date},{name:"DateRefresherTrainingDue",type:Date},{name:"RiskAssessments_RiskAssessor",kind:"collection",elementType:f},{name:"RiskAssessments_Approver",kind:"collection",elementType:f},{name:"RiskAssessmentReviews",kind:"collection",elementType:o},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),RiskAssessmentStatus:r(l,[{name:"Id",type:Number},{name:"Status",type:String},{name:"RiskAssessments",kind:"collection",elementType:f},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),RiskAssessmentReview:r(o,[{name:"Id",type:Number},{name:"DateDue",type:Date},{name:"DateCompleted",type:Date},{name:"Outcome",type:String},{name:"RiskAssessmentReviewer",kind:"reference",type:e},{name:"RiskAssessment",kind:"reference",type:f},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),RiskAssessmentHazard:r(s,[{name:"Id",type:Number},{name:"HazardDescription",type:String},{name:"HazardType",kind:"reference",type:a},{name:"HazardConsequence",type:String},{name:"ControlMeasures",type:String},{name:"RiskAssessment",kind:"reference",type:f},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),HazardType:r(a,[{name:"Id",type:Number},{name:"HazardTypeDescription",type:String},{name:"RiskAssessmentHazards",kind:"collection",elementType:s},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),ApplicationData:w(v,n.rootUri+"/ApplicationData.svc",[{name:"RiskAssessments",elementType:f},{name:"RiskTypes",elementType:h},{name:"Employees",elementType:c},{name:"RiskAssessors",elementType:e},{name:"RiskAssessmentStatuses",elementType:l},{name:"RiskAssessmentReviews",elementType:o},{name:"RiskAssessmentHazards",elementType:s},{name:"HazardTypes",elementType:a}],[{name:"RiskAssessments_SingleOrDefault",value:function(i){return new t({_entitySet:this.RiskAssessments},n.rootUri+"/ApplicationData.svc/RiskAssessments(Id="+u(i,"Int32?")+")")}},{name:"RiskTypes_SingleOrDefault",value:function(i){return new t({_entitySet:this.RiskTypes},n.rootUri+"/ApplicationData.svc/RiskTypes(Id="+u(i,"Int32?")+")")}},{name:"Employees_SingleOrDefault",value:function(i){return new t({_entitySet:this.Employees},n.rootUri+"/ApplicationData.svc/Employees(Id="+u(i,"Int32?")+")")}},{name:"RiskAssessors_SingleOrDefault",value:function(i){return new t({_entitySet:this.RiskAssessors},n.rootUri+"/ApplicationData.svc/RiskAssessors(Id="+u(i,"Int32?")+")")}},{name:"RiskAssessmentStatuses_SingleOrDefault",value:function(i){return new t({_entitySet:this.RiskAssessmentStatuses},n.rootUri+"/ApplicationData.svc/RiskAssessmentStatuses(Id="+u(i,"Int32?")+")")}},{name:"RiskAssessmentReviews_SingleOrDefault",value:function(i){return new t({_entitySet:this.RiskAssessmentReviews},n.rootUri+"/ApplicationData.svc/RiskAssessmentReviews(Id="+u(i,"Int32?")+")")}},{name:"RiskAssessmentHazards_SingleOrDefault",value:function(i){return new t({_entitySet:this.RiskAssessmentHazards},n.rootUri+"/ApplicationData.svc/RiskAssessmentHazards(Id="+u(i,"Int32?")+")")}},{name:"HazardTypes_SingleOrDefault",value:function(i){return new t({_entitySet:this.HazardTypes},n.rootUri+"/ApplicationData.svc/HazardTypes(Id="+u(i,"Int32?")+")")}},{name:"MyRiskAssessments",value:function(){return new t({_entitySet:this.RiskAssessments},n.rootUri+"/ApplicationData.svc/MyRiskAssessments()",{})}},{name:"OverdueRiskAssessmentReviews",value:function(){return new t({_entitySet:this.RiskAssessmentReviews},n.rootUri+"/ApplicationData.svc/OverdueRiskAssessmentReviews()",{})}},{name:"MyRiskAssessmentReviews",value:function(){return new t({_entitySet:this.RiskAssessmentReviews},n.rootUri+"/ApplicationData.svc/MyRiskAssessmentReviews()",{})}}]),DataWorkspace:b(k,[{name:"ApplicationData",type:v}])})}(msls.application),function(n){function f(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditEmployee",t)}function e(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditHazardType",t)}function o(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditRiskAssessment",t)}function s(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditRiskAssessmentHazard",t)}function h(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditRiskAssessmentReview",t)}function c(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditRiskAssessmentStatus",t)}function l(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditRiskAssessor",t)}function a(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditRiskType",t)}function v(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"BrowseEmployees",t)}function y(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"BrowseHazardTypes",t)}function p(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"BrowseMyRiskAssessmentReviews",t)}function w(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"BrowseMyRiskAssessments",t)}function b(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"BrowseOverdueRiskAssessmentReviews",t)}function k(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"BrowseRiskAssessments",t)}function d(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"BrowseRiskAssessmentStatuses",t)}function g(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"BrowseRiskAssessors",t)}function nt(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"BrowseRiskTypes",t)}function tt(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"Home",t)}function it(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"MobileHome",t)}var i=msls.Screen,r=msls._defineScreen,rt=msls.DataServiceQuery,t=msls._toODataString,u=msls._defineShowScreen;msls._addToNamespace("msls.application",{AddEditEmployee:r(f,[{name:"Employee",kind:"local",type:n.Employee}],[]),AddEditHazardType:r(e,[{name:"HazardType",kind:"local",type:n.HazardType}],[]),AddEditRiskAssessment:r(o,[{name:"RiskAssessment",kind:"local",type:n.RiskAssessment},{name:"RiskAssessmentReviews",kind:"collection",elementType:n.RiskAssessmentReview,getNavigationProperty:function(){return this.owner.RiskAssessment?this.owner.RiskAssessment.details.properties.RiskAssessmentReviews:null},appendQuery:function(){return this.expand("RiskAssessmentReviewer").expand("RiskAssessmentReviewer.Employee")}},{name:"RiskAssessmentHazards",kind:"collection",elementType:n.RiskAssessmentHazard,getNavigationProperty:function(){return this.owner.RiskAssessment?this.owner.RiskAssessment.details.properties.RiskAssessmentHazards:null},appendQuery:function(){return this.expand("HazardType")}}],[]),AddEditRiskAssessmentHazard:r(s,[{name:"RiskAssessmentHazard",kind:"local",type:n.RiskAssessmentHazard}],[]),AddEditRiskAssessmentReview:r(h,[{name:"RiskAssessmentReview",kind:"local",type:n.RiskAssessmentReview}],[]),AddEditRiskAssessmentStatus:r(c,[{name:"RiskAssessmentStatus",kind:"local",type:n.RiskAssessmentStatus}],[]),AddEditRiskAssessor:r(l,[{name:"RiskAssessor",kind:"local",type:n.RiskAssessor}],[]),AddEditRiskType:r(a,[{name:"RiskType",kind:"local",type:n.RiskType}],[]),BrowseEmployees:r(v,[{name:"Employees",kind:"collection",elementType:n.Employee,createQuery:function(n){return this.dataWorkspace.ApplicationData.Employees.filter("(("+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", FirstName)")+" or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", LastName)")+") or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", UserName)")+") or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", Email)")+"")}},{name:"Search",kind:"local",type:String}],[]),BrowseHazardTypes:r(y,[{name:"HazardTypes",kind:"collection",elementType:n.HazardType,createQuery:function(n){return this.dataWorkspace.ApplicationData.HazardTypes.filter(""+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", HazardTypeDescription)")+"")}},{name:"Search",kind:"local",type:String}],[]),BrowseMyRiskAssessmentReviews:r(p,[{name:"MyRiskAssessmentReviews",kind:"collection",elementType:n.RiskAssessmentReview,createQuery:function(n){return this.dataWorkspace.ApplicationData.MyRiskAssessmentReviews().filter("("+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", RiskAssessment/ReferenceNumber)")+" or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", RiskAssessment/RiskAssessmentTitle)")+") or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", Outcome)")+"").expand("RiskAssessment")}},{name:"Search",kind:"local",type:String}],[]),BrowseMyRiskAssessments:r(w,[{name:"MyRiskAssessments",kind:"collection",elementType:n.RiskAssessment,createQuery:function(n){return this.dataWorkspace.ApplicationData.MyRiskAssessments().filter("(("+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", ReferenceNumber)")+" or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", RiskAssessmentTitle)")+") or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", RiskType/TypeOfRisk)")+") or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", RiskAssessmentStatus/Status)")+"").expand("RiskType").expand("RiskAssessmentStatus")}},{name:"Search",kind:"local",type:String}],[]),BrowseOverdueRiskAssessmentReviews:r(b,[{name:"OverdueRiskAssessmentReviews",kind:"collection",elementType:n.RiskAssessmentReview,createQuery:function(n){return this.dataWorkspace.ApplicationData.OverdueRiskAssessmentReviews().filter("(("+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", RiskAssessment/ReferenceNumber)")+" or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", RiskAssessment/RiskAssessmentTitle)")+") or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", RiskAssessmentReviewer/Employee/LastName)")+") or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", RiskAssessmentReviewer/Employee/FirstName)")+"").expand("RiskAssessment").expand("RiskAssessmentReviewer").expand("RiskAssessmentReviewer.Employee")}},{name:"Search",kind:"local",type:String}],[]),BrowseRiskAssessments:r(k,[{name:"RiskAssessments",kind:"collection",elementType:n.RiskAssessment,createQuery:function(n){return this.dataWorkspace.ApplicationData.RiskAssessments.filter("(("+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", ReferenceNumber)")+" or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", RiskAssessmentTitle)")+") or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", RiskType/TypeOfRisk)")+") or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", RiskAssessmentStatus/Status)")+"").expand("RiskType").expand("RiskAssessmentStatus")}},{name:"Search",kind:"local",type:String}],[]),BrowseRiskAssessmentStatuses:r(d,[{name:"RiskAssessmentStatuses",kind:"collection",elementType:n.RiskAssessmentStatus,createQuery:function(n){return this.dataWorkspace.ApplicationData.RiskAssessmentStatuses.filter(""+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", Status)")+"")}},{name:"Search",kind:"local",type:String}],[]),BrowseRiskAssessors:r(g,[{name:"RiskAssessors",kind:"collection",elementType:n.RiskAssessor,createQuery:function(n){return this.dataWorkspace.ApplicationData.RiskAssessors.filter(""+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", Employee/FirstName)")+" or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", Employee/LastName)")+"").expand("Employee")}},{name:"Search",kind:"local",type:String}],[]),BrowseRiskTypes:r(nt,[{name:"RiskTypes",kind:"collection",elementType:n.RiskType,createQuery:function(n){return this.dataWorkspace.ApplicationData.RiskTypes.filter(""+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", TypeOfRisk)")+"")}},{name:"Search",kind:"local",type:String}],[]),Home:r(tt,[],[]),MobileHome:r(it,[],[]),showAddEditEmployee:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditEmployee",r,i)}),showAddEditHazardType:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditHazardType",r,i)}),showAddEditRiskAssessment:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditRiskAssessment",r,i)}),showAddEditRiskAssessmentHazard:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditRiskAssessmentHazard",r,i)}),showAddEditRiskAssessmentReview:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditRiskAssessmentReview",r,i)}),showAddEditRiskAssessmentStatus:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditRiskAssessmentStatus",r,i)}),showAddEditRiskAssessor:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditRiskAssessor",r,i)}),showAddEditRiskType:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditRiskType",r,i)}),showBrowseEmployees:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseEmployees",i,t)}),showBrowseHazardTypes:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseHazardTypes",i,t)}),showBrowseMyRiskAssessmentReviews:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseMyRiskAssessmentReviews",i,t)}),showBrowseMyRiskAssessments:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseMyRiskAssessments",i,t)}),showBrowseOverdueRiskAssessmentReviews:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseOverdueRiskAssessmentReviews",i,t)}),showBrowseRiskAssessments:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseRiskAssessments",i,t)}),showBrowseRiskAssessmentStatuses:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseRiskAssessmentStatuses",i,t)}),showBrowseRiskAssessors:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseRiskAssessors",i,t)}),showBrowseRiskTypes:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseRiskTypes",i,t)}),showHome:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("Home",i,t)}),showMobileHome:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("MobileHome",i,t)})})}(msls.application),myapp.AddEditEmployee.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditEmployees"]?!1:!0},myapp.AddEditHazardType.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditHazardTypes"]?!1:!0},myapp.AddEditRiskAssessment.InherentRisk_postRender=function(n,t){$(n).css("font-size","18px"),$(n).css("font-weight","bold"),$(n).css("text-align","center"),$(n).find("div").css("padding-top","10px"),t.value>=12?$(n).css({color:"red"}):t.value>6&&t.value<12?$(n).css({color:"orange"}):$(n).css({color:"green"}),t.addChangeListener(null,function(){t.value>=12?$(n).css({color:"red"}):t.value>6&&t.value<12?$(n).css({color:"orange"}):$(n).css({color:"green"})})},myapp.AddEditRiskAssessment.ControlledRisk_postRender=function(n,t){$(n).css("font-size","18px"),$(n).css("font-weight","bold"),$(n).css("text-align","center"),$(n).find("div").css("padding-top","10px"),t.value>=12?$(n).css({color:"red"}):t.value>6&&t.value<12?$(n).css({color:"orange"}):$(n).css({color:"green"}),t.addChangeListener(null,function(){t.value>=12?$(n).css({color:"red"}):t.value>6&&t.value<12?$(n).css({color:"orange"}):$(n).css({color:"green"})})},myapp.AddEditRiskAssessment.created=function(n){function t(){n.RiskAssessment.InherentRisk=n.RiskAssessment.InherentLikelihood*n.RiskAssessment.InherentImpact}function i(){n.RiskAssessment.ControlledRisk=n.RiskAssessment.ControlledLikehood*n.RiskAssessment.ControlledImpact}var r,u;n.RiskAssessment.ReferenceNumber!==undefined?(r=n.RiskAssessment.ReferenceNumber,u=n.RiskAssessment.RiskAssessmentTitle,n.details.displayName="RA ("+r+") - "+u):n.details.displayName="Add new Risk Assessment",myapp.permissions["LightSwitchApplication:CanEditRiskAssessments"]?(n.findContentItem("DetailsTab").isReadOnly=!1,n.findContentItem("RiskAssessmentReviews").isReadOnly=!1,n.findContentItem("RiskAssessmentHazards").isReadOnly=!1):(n.findContentItem("DetailsTab").isReadOnly=!0,n.findContentItem("RiskAssessmentReviews").isReadOnly=!0,n.findContentItem("RiskAssessmentHazards").isReadOnly=!0),n.RiskAssessment.addChangeListener("InherentLikelihood",t),n.details.rootContentItem.handleViewDispose(function(){n.RiskAssessment.removeChangeListener("InherentLikelihood",t)}),n.RiskAssessment.addChangeListener("InherentImpact",t),n.details.rootContentItem.handleViewDispose(function(){n.RiskAssessment.removeChangeListener("InherentImpact",t)}),n.RiskAssessment.addChangeListener("ControlledLikehood",i),n.details.rootContentItem.handleViewDispose(function(){n.RiskAssessment.removeChangeListener("ControlledLikehood",i)}),n.RiskAssessment.addChangeListener("ControlledImpact",i),n.details.rootContentItem.handleViewDispose(function(){n.RiskAssessment.removeChangeListener("ControlledImpact",i)})},myapp.AddEditRiskAssessmentHazard.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditRiskAssessmentHazards"]?!1:!0},myapp.AddEditRiskAssessmentReview.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditRiskAssessmentReviews"]?!1:!0},myapp.AddEditRiskAssessmentStatus.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditRiskAssessmentStatuses"]?!1:!0},myapp.AddEditRiskAssessor.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditRiskAssessors"]?!1:!0},myapp.AddEditRiskType.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditRiskTypes"]?!1:!0},myapp.BrowseEmployees.created=function(n){n.findContentItem("AddEmployee").isEnabled=myapp.permissions["LightSwitchApplication:CanEditEmployees"]?!0:!1},myapp.BrowseHazardTypes.created=function(n){n.findContentItem("AddHazardType").isEnabled=myapp.permissions["LightSwitchApplication:CanEditHazardTypes"]?!0:!1},myapp.BrowseMyRiskAssessments.InherentRisk_postRender=function(n,t){$(n).css("text-align","center"),t.value>=12?$(n).css({background:"red",color:"white"}):t.value>6&&t.value<12?$(n).css({background:"orange",color:"white"}):$(n).css({background:"green",color:"white"}),t.addChangeListener(null,function(){t.value>=12?$(n).css({background:"red",color:"white"}):t.value>6&&t.value<12?$(n).css({background:"orange",color:"white"}):$(n).css({background:"green",color:"white"})})},myapp.BrowseMyRiskAssessments.ControlledRisk_postRender=function(n,t){$(n).css("text-align","center"),t.value>=12?$(n).css({background:"red",color:"white"}):t.value>6&&t.value<12?$(n).css({background:"orange",color:"white"}):$(n).css({background:"green",color:"white"}),t.addChangeListener(null,function(){t.value>=12?$(n).css({background:"red",color:"white"}):t.value>6&&t.value<12?$(n).css({background:"orange",color:"white"}):$(n).css({background:"green",color:"white"})})},myapp.BrowseRiskAssessments.InherentRisk_postRender=function(n,t){$(n).css("text-align","center"),t.value>=12?$(n).css({background:"red",color:"white"}):t.value>6&&t.value<12?$(n).css({background:"orange",color:"white"}):$(n).css({background:"green",color:"white"}),t.addChangeListener(null,function(){t.value>=12?$(n).css({background:"red",color:"white"}):t.value>6&&t.value<12?$(n).css({background:"orange",color:"white"}):$(n).css({background:"green",color:"white"})})},myapp.BrowseRiskAssessments.ControlledRisk_postRender=function(n,t){$(n).css("text-align","center"),t.value>=12?$(n).css({background:"red",color:"white"}):t.value>6&&t.value<12?$(n).css({background:"orange",color:"white"}):$(n).css({background:"green",color:"white"}),t.addChangeListener(null,function(){t.value>=12?$(n).css({background:"red",color:"white"}):t.value>6&&t.value<12?$(n).css({background:"orange",color:"white"}):$(n).css({background:"green",color:"white"})})},myapp.BrowseRiskAssessments.created=function(n){n.findContentItem("AddRiskAssessment").isEnabled=myapp.permissions["LightSwitchApplication:CanEditRiskAssessments"]?!0:!1},myapp.BrowseRiskAssessmentStatuses.created=function(n){n.findContentItem("AddRiskAssessmentStatus").isEnabled=myapp.permissions["LightSwitchApplication:CanEditRiskAssessmentStatuses"]?!0:!1},myapp.BrowseRiskAssessors.created=function(n){n.findContentItem("AddRiskAssessor").isEnabled=myapp.permissions["LightSwitchApplication:CanEditRiskAssessors"]?!0:!1},myapp.BrowseRiskTypes.created=function(n){n.findContentItem("AddRiskType").isEnabled=myapp.permissions["LightSwitchApplication:CanEditRiskTypes"]?!0:!1},myapp.Home.ShowBrowseEmployees_postRender=function(n){$(n).find("a").addClass("delordson-menu-style").css({"background-image":"url(Content/Images/Employees.png)"})},myapp.Home.ShowBrowseRiskAssessors_postRender=function(n){$(n).find("a").addClass("delordson-menu-style").css({"background-image":"url(Content/Images/RiskAssessor.png)"})},myapp.Home.ShowBrowseHazardTypes_postRender=function(n){$(n).find("a").addClass("delordson-menu-style").css({"background-image":"url(Content/Images/Gun.png)"})},myapp.Home.ShowBrowseRiskAssessmentStatuses_postRender=function(n){$(n).find("a").addClass("delordson-menu-style").css({"background-image":"url(Content/Images/Statuses.png)"})},myapp.Home.ShowBrowseRiskTypes_postRender=function(n){$(n).find("a").addClass("delordson-menu-style").css({"background-image":"url(Content/Images/Risks.png)"})},myapp.Home.ShowBrowseRiskAssessments_postRender=function(n){$(n).find("a").addClass("delordson-menu-style").css({"background-image":"url(Content/Images/Scales.png)"})},myapp.Home.ShowBrowseMyRiskAssessments_postRender=function(n){$(n).find("a").addClass("delordson-menu-style").css({"background-image":"url(Content/Images/Employees.png)"})},myapp.Home.ShowBrowseOverdueRiskAssessmentReviews_postRender=function(n){$(n).find("a").addClass("delordson-menu-style").css({"background-image":"url(Content/Images/Hourglass.png)"})},myapp.Home.ShowBrowseMyRiskAssessmentReviews_postRender=function(n){$(n).find("a").addClass("delordson-menu-style").css({"background-image":"url(Content/Images/Reviews.png)"})},myapp.Home.created=function(){$.getJSON("../UserPermissions/UserPermissions/",function(n){myapp.permissions=n})},myapp.MobileHome.created=function(){$.getJSON("../UserPermissions/UserPermissions/",function(n){myapp.permissions=n})},myapp.MobileHome.ShowBrowseRiskAssessments_postRender=function(n){$(n).find("a").addClass("delordson-mobile-menu-style").css({"background-image":"url(Content/Images/MobileScales.png)"})},myapp.MobileHome.ShowBrowseMyRiskAssessments_postRender=function(n){$(n).find("a").addClass("delordson-mobile-menu-style").css({"background-image":"url(Content/Images/MobileEmployees.png)"})},myapp.MobileHome.ShowBrowseOverdueRiskAssessmentReviews_postRender=function(n){$(n).find("a").addClass("delordson-mobile-menu-style").css({"background-image":"url(Content/Images/MobileHourglass.png)"})},myapp.MobileHome.ShowBrowseMyRiskAssessmentReviews_postRender=function(n){$(n).find("a").addClass("delordson-mobile-menu-style").css({"background-image":"url(Content/Images/MobileReviews.png)"})},myapp.MobileHome.ShowBrowseEmployees_postRender=function(n){$(n).find("a").addClass("delordson-mobile-menu-style").css({"background-image":"url(Content/Images/MobileEmployees.png)"})},myapp.MobileHome.ShowBrowseRiskAssessors_postRender=function(n){$(n).find("a").addClass("delordson-mobile-menu-style").css({"background-image":"url(Content/Images/MobileRiskAssessor.png)"})},myapp.MobileHome.ShowBrowseHazardTypes_postRender=function(n){$(n).find("a").addClass("delordson-mobile-menu-style").css({"background-image":"url(Content/Images/MobileGun.png)"})},myapp.MobileHome.ShowBrowseRiskAssessmentStatuses_postRender=function(n){$(n).find("a").addClass("delordson-mobile-menu-style").css({"background-image":"url(Content/Images/MobileStatuses.png)"})},myapp.MobileHome.ShowBrowseRiskTypes_postRender=function(n){$(n).find("a").addClass("delordson-mobile-menu-style").css({"background-image":"url(Content/Images/MobileRisks.png)"})};