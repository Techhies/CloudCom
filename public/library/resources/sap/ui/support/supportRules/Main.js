/*!
* OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*/
sap.ui.define(["sap/base/Log","sap/ui/base/ManagedObject","sap/ui/core/Element","sap/ui/core/Component","sap/ui/support/supportRules/Analyzer","sap/ui/support/supportRules/CoreFacade","sap/ui/support/supportRules/ExecutionScope","sap/ui/support/supportRules/ui/external/Highlighter","sap/ui/support/supportRules/CommunicationBus","sap/ui/support/supportRules/IssueManager","sap/ui/support/supportRules/History","sap/ui/support/supportRules/report/DataCollector","sap/ui/support/supportRules/WCBChannels","sap/ui/support/supportRules/Constants","sap/ui/support/supportRules/RuleSetLoader","sap/ui/support/supportRules/RuleSerializer","sap/ui/support/library"],function(e,t,s,r,o,i,n,u,a,l,p,c,_,f,E,d,S){"use strict";var h=null;var R=null;var g=new u(f.HIGHLIGHTER_ID);var y=t.extend("sap.ui.support.Main",{constructor:function(){if(!R){this._oCore=null;this._oAnalyzer=new o;this._oAnalyzer.onNotifyProgress=function(e){a.publish(_.ON_PROGRESS_UPDATE,{currentProgress:e})};t.apply(this,arguments);var s=document.createEvent("CustomEvent");s.initCustomEvent("supportToolLoaded",true,true,{})}else{e.warning("Only one support tool allowed");return R}}});y.prototype._isInIframe=function(){try{return window.self!==window.top}catch(e){return true}};y.prototype.startPlugin=function(e){if(this._pluginStarted){return}this._pluginStarted=true;var t=this;sap.ui.getCore().registerPlugin({startPlugin:function(s){t._supportModeConfig=e=e||s.getConfiguration().getSupportMode();a.bSilentMode=e.indexOf("silent")>-1;t._setCommunicationSubscriptions();var r=t._isInIframe()&&e.indexOf("frame-force-ui")!==-1;t._oCore=s;t._oDataCollector=new c(s);t._oCoreFacade=i(s);t._oExecutionScope=null;t._createElementSpies();s.attachLibraryChanged(E._onLibraryChanged);if(!e||e.indexOf("silent")===-1||r){sap.ui.require(["sap/ui/support/supportRules/ui/IFrameController"],function(t){h=t;h.injectFrame(e);a.allowFrame(h.getCommunicationInfo())})}else{E.updateRuleSets(function(){t.fireEvent("ready")})}},stopPlugin:function(){h._stop();t._pluginStarted=false;t._oCore=null;t._oCoreFacade=null;t._oDataCollector=null;t._oExecutionScope=null}})};y.prototype._createElementSpies=function(){var e=this,t=500;this._fnDirtyTimeoutHandle=null;var r=function(r){var o=s.prototype[r];s.prototype[r]=function(){o.apply(this,arguments);clearTimeout(e._fnDirtyTimeoutHandle);e._fnDirtyTimeoutHandle=setTimeout(function(){a.publish(_.ON_CORE_STATE_CHANGE)},t)}};r("register");r("deregister")};y.prototype._setCommunicationSubscriptions=function(){a.subscribe(_.VERIFY_CREATE_RULE,function(e){var t=d.deserialize(e),s=E.getRuleSet(f.TEMP_RULESETS_NAME).ruleset,r=s.addRule(t);a.publish(_.VERIFY_RULE_CREATE_RESULT,{result:r,newRule:d.serialize(t)})},this);a.subscribe(_.VERIFY_UPDATE_RULE,function(e){var t=d.deserialize(e.updateObj),s=E.getRuleSet(f.TEMP_RULESETS_NAME).ruleset,r=s.updateRule(e.oldId,t);a.publish(_.VERIFY_RULE_UPDATE_RESULT,{result:r,updateRule:d.serialize(t)})},this);a.subscribe(_.DELETE_RULE,function(e){var t=d.deserialize(e),s=E.getRuleSet(f.TEMP_RULESETS_NAME).ruleset;s.removeRule(t)},this);a.subscribe(_.OPEN_URL,function(e){var t=window.open(e,"_blank");t.opener=null;t.focus()},this);a.subscribe(_.ON_DOWNLOAD_REPORT_REQUEST,function(e){var t=this._getReportData(e);sap.ui.require(["sap/ui/support/supportRules/report/ReportProvider"],function(e){e.downloadReportZip(t)})},this);a.subscribe(_.HIGHLIGHT_ELEMENT,function(e){var t=sap.ui.getCore().byId(e).$();t.css("background-color","red")},this);a.subscribe(_.TREE_ELEMENT_MOUSE_ENTER,function(e){g.highlight(e)},this);a.subscribe(_.TREE_ELEMENT_MOUSE_OUT,function(){g.hideHighLighter()},this);a.subscribe(_.TOGGLE_FRAME_HIDDEN,function(e){h.toggleHide(e)},this);a.subscribe(_.POST_UI_INFORMATION,function(e){this._oDataCollector.setSupportAssistantLocation(e.location);this._oDataCollector.setSupportAssistantVersion(e.version)},this);a.subscribe(_.GET_AVAILABLE_COMPONENTS,function(){a.publish(_.POST_AVAILABLE_COMPONENTS,Object.keys(r.registry.all()))},this);a.subscribe(_.ON_ANALYZE_REQUEST,function(e){this.analyze(e.executionContext,e.rulePreset)},this);a.subscribe(_.ON_INIT_ANALYSIS_CTRL,function(){E.updateRuleSets(function(){a.publish(_.POST_APPLICATION_INFORMATION,{versionInfo:sap.ui.getVersionInfo()});this.fireEvent("ready")}.bind(this))},this);a.subscribe(_.ON_SHOW_REPORT_REQUEST,function(e){var t=this._getReportData(e);sap.ui.require(["sap/ui/support/supportRules/report/ReportProvider"],function(e){e.openReport(t)})},this);a.subscribe(_.LOAD_RULESETS,function(e){E.loadAdditionalRuleSets(e.aLibNames)},this);a.subscribe(_.REQUEST_RULES_MODEL,function(e){if(e){a.publish(_.GET_RULES_MODEL,l.getTreeTableViewModel(e))}},this);a.subscribe(_.REQUEST_ISSUES,function(e){if(e){var t=l.groupIssues(e),s=l.getIssuesViewModel(t);a.publish(_.GET_ISSUES,{groupedIssues:t,issuesModel:s})}},this);a.subscribe(_.GET_NON_LOADED_RULE_SETS,function(e){E.fetchNonLoadedRuleSets(e.loadedRulesets)},this)};y.prototype.analyze=function(t,s,r){var o=this;if(this._oAnalyzer&&this._oAnalyzer.running()){return}if(typeof s==="string"){s=S.SystemPresets[s];if(!s){e.error("System preset ID is not valid");return}}t=t||{type:"global"};if(r){this._oAnalysisMetadata=JSON.parse(JSON.stringify(r))}else{this._oAnalysisMetadata=null}var i;if(s&&s.selections){this._oSelectedRulePreset=s;i=s.selections;if(!s.id||!s.title){e.error("The preset must have an ID and a title");return}}else{this._oSelectedRulePreset=null;i=s}i=i||E.getAllRuleDescriptors();if(!this._isExecutionScopeValid(t)){a.publish(_.POST_MESSAGE,{message:"Set a valid element ID."});return}a.publish(_.ON_ANALYZE_STARTED);if(t.selectors){this._mapExecutionScope(t)}this._oAnalyzer.reset();this.setExecutionScope(t);l.clearIssues();this._setSelectedRules(i);return this._oAnalyzer.start(this._aSelectedRules,this._oCoreFacade,this._oExecutionScope).then(function(){o._done()})};y.prototype._isExecutionScopeValid=function(t){var s=sap.ui.getCore(),r=[],o=false,i;if(n.possibleScopes.indexOf(t.type)===-1){e.error("Invalid execution scope type. Type must be one of the following: "+n.possibleScopes.join(", "));return false}if(t.type==="subtree"){if(t.parentId){r.push(t.parentId)}else if(Array.isArray(t.selectors)){r=r.concat(t.selectors)}else if(t.selectors){r.push(t.selectors)}for(i=0;i<r.length;i++){if(s.byId(r[i])){o=true;break}}if(!o){return false}}return true};y.prototype.setExecutionScope=function(e){this._oExecutionScope=n(this._oCore,e)};y.prototype._setSelectedRules=function(t){this._aSelectedRules=[];this._oSelectedRulesIds={};if(!t){return}if(!Array.isArray(t)){t=[t]}t.forEach(function(t){var s,r;if(!t.libName||!t.ruleId){e.error("["+f.SUPPORT_ASSISTANT_NAME+"] Invalid Rule Descriptor.");return}s=E.getRuleSet(t.libName);if(!s||!s.ruleset){e.error("["+f.SUPPORT_ASSISTANT_NAME+"] Could not find Ruleset for library "+t.libName);return}r=s.ruleset.getRules();if(!r||!r[t.ruleId]){e.error("["+f.SUPPORT_ASSISTANT_NAME+"] Could not find Rule with id "+t.ruleId+" for library "+t.libName);return}this._aSelectedRules.push(r[t.ruleId]);this._oSelectedRulesIds[t.ruleId]=true},this)};y.prototype._mapExecutionScope=function(e){if(e.type==="subtree"){if(typeof e.selectors==="string"){e.parentId=e.selectors}else if(Array.isArray(e.selectors)){e.parentId=e.selectors[0]}}else if(e.type==="components"){if(typeof e.selectors==="string"){e.components=[e.selectors]}else if(Array.isArray(e.selectors)){e.components=e.selectors}}delete e.selectors};y.prototype._done=function(){a.publish(_.ON_ANALYZE_FINISH,{issues:l.getIssuesModel(),elementTree:this._createElementTree(),elapsedTime:this._oAnalyzer.getElapsedTimeString()});p.saveAnalysis(this)};y.prototype._createElementTree=function(){var e=this._copyElementsStructure(),t=[];this._setContextElementReferences(e);for(var s in e){if(e[s].skip){continue}t.push(e[s])}return[{content:t,id:"WEBPAGE",name:"WEBPAGE"}]};y.prototype._setContextElementReferences=function(e){var t=s.registry.all();for(var r in e){var o=e[r],i=t[r]==undefined?undefined:t[r].getParent();if(t[r]instanceof sap.ui.core.ComponentContainer){var n=t[r],u=n.getComponent();if(u){o.content.push(e[u]);e[u].skip=true}}if(i){var a=i.getId();if(!e[a]){continue}e[a].content.push(e[r]);e[r].skip=true}}};y.prototype._copyElementsStructure=function(){var e={};var t=function(t,s){for(var r in t){if(Object.prototype.hasOwnProperty.call(t,r)){var o=t[r];var i={content:[],id:o.getId(),name:s==undefined?o.getMetadata().getName():s};e[o.getId()]=i}}};t(this._oExecutionScope.getElements());this._oExecutionScope.getElements().forEach(function(e){if(e instanceof sap.ui.core.ComponentContainer){var s=e.getComponent(),o=r.registry.get(s);if(o){t([o],"sap-ui-component")}}});switch(this._oExecutionScope.getType()){case"global":t(this._oCoreFacade.getUIAreas(),"sap-ui-area");t(this._oCoreFacade.getComponents(),"sap-ui-component");break;case"subtree":var o=this._oExecutionScope._getContext().parentId;t([s.registry.get(o)]);break;case"components":var i=this._oExecutionScope._getContext().components;i.forEach(function(e){t([r.registry.get(e)],"sap-ui-component")});break}return e};y.prototype._getReportData=function(e){var t=l.groupIssues(l.getIssuesModel()),s=E.getRuleSets(),r=this._oSelectedRulesIds,o=this._oSelectedRulePreset||null;return{issues:t,technical:this._oDataCollector.getTechInfoJSON(),application:this._oDataCollector.getAppInfo(),rules:l.getRulesViewModel(s,r,t),rulePreset:o,scope:{executionScope:this._oExecutionScope,scopeDisplaySettings:{executionScopes:e.executionScopes,executionScopeTitle:e.executionScopeTitle}},analysisDuration:this._oAnalyzer.getElapsedTimeString(),analysisDurationTitle:e.analysisDurationTitle,abap:p.getFormattedHistory(S.HistoryFormats.Abap),name:f.SUPPORT_ASSISTANT_NAME}};y.prototype.getAnalysisHistory=function(){if(this._oAnalyzer.running()){return null}return p.getHistory()};y.prototype.getFormattedAnalysisHistory=function(e){if(this._oAnalyzer.running()){return""}return p.getFormattedHistory(e)};y.prototype.getLastAnalysisHistory=function(){var e=this.getAnalysisHistory();if(Array.isArray(e)&&e.length>0){return e[e.length-1]}else{return null}};y.prototype.addRule=function(e){if(!e){return"No rule provided."}e.selected=e.selected!==undefined?e.selected:true;e.async=e.async||false;var t=E.getRuleSet(f.TEMP_RULESETS_NAME).ruleset.addRule(e);a.publish(_.VERIFY_RULE_CREATE_RESULT,{result:t,newRule:d.serialize(e)});return t};var R=new y;return R},true);
//# sourceMappingURL=Main.js.map