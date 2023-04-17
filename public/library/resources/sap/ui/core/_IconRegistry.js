/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/URI","sap/base/i18n/ResourceBundle","sap/base/Log","sap/base/util/fetch","sap/base/util/syncFetch"],function(e,t,a,r,n){"use strict";var o="SAP-icons";var i="sap-icon";var s={undefined:{config:{fontFamily:o},metadataLoaded:true,inserted:true}};var c={undefined:{"accidental-leave":57344,account:57345,wrench:57346,"windows-doors":57347,"washing-machine":57348,visits:57349,video:57350,"travel-expense":122887,temperature:57352,task:122889,synchronize:57354,survey:122891,settings:57356,search:122893,"sales-document":122894,"retail-store":57359,refresh:57360,product:57361,present:57362,"ppt-attachment":57363,pool:57364,"pie-chart":57365,picture:57366,"photo-voltaic":57367,phone:57368,pending:57369,"pdf-attachment":57370,past:122907,"outgoing-call":57372,opportunity:57373,opportunities:122910,notes:57375,"money-bills":122912,map:57377,log:57378,"line-charts":57379,lightbulb:57380,leads:57381,lead:122918,laptop:57383,"kpi-managing-my-area":122920,"kpi-corporate-performance":122921,"incoming-call":57386,inbox:57387,"horizontal-bar-chart":57388,history:57389,"heating-cooling":57390,"gantt-bars":57391,future:122928,fridge:57393,fallback:57394,"expense-report":122931,"excel-attachment":57396,"energy-saving-lightbulb":57397,employee:57398,email:57399,edit:57400,duplicate:57401,download:57402,"doc-attachment":57403,dishwasher:57404,delete:57405,decline:57406,complete:122943,competitor:57408,"collections-management":57409,chalkboard:122946,cart:57411,card:57412,camera:57413,calendar:122950,begin:57415,basket:57416,"bar-chart":57417,attachment:57418,"arrow-top":57419,"arrow-right":57420,"arrow-left":57421,"arrow-bottom":57422,approvals:122959,appointment:57424,"alphabetical-order":122961,"along-stacked-chart":57426,alert:57427,addresses:57428,"address-book":122965,"add-filter":57430,"add-favorite":57431,add:57432,activities:122969,action:57434,accept:122971,hint:122972,group:57437,"check-availability":122974,"weather-proofing":57439,"payment-approval":122976,"batch-payments":122977,bed:57442,arobase:122979,"family-care":57444,favorite:57445,"navigation-right-arrow":57446,"navigation-left-arrow":57447,"e-care":57448,less:57449,lateness:57450,lab:57451,"internet-browser":57452,instance:57453,inspection:57454,"image-viewer":57455,home:57456,grid:57457,goalseek:57458,"general-leave-request":57459,"create-leave-request":57460,flight:57461,filter:57462,"favorite-list":57463,factory:57464,endoscopy:57465,"employee-pane":57466,"employee-approvals":123003,"email-read":57468,electrocardiogram:57469,documents:57470,decision:57471,database:57472,"customer-history":57473,customer:57474,"credit-card":57475,"create-entry-time":57476,contacts:57477,compare:57478,"clinical-order":57479,"chain-link":57480,"pull-down":57481,"cargo-train":57482,"car-rental":57483,"business-card":57484,"bar-code":57485,"folder-blank":57486,"passenger-train":57487,"question-mark":123024,world:57489,iphone:57490,ipad:57491,warning:57492,sort:57493,"course-book":57494,"course-program":57495,"add-coursebook":57496,print:57497,save:57498,play:123035,pause:57500,record:57501,response:57502,"pushpin-on":57503,"pushpin-off":57504,unfavorite:57505,"learning-assistant":57506,timesheet:57507,"time-entry-request":57508,list:57509,"action-settings":57510,share:57511,feed:57512,role:57513,flag:123050,post:57515,inspect:57516,"inspect-down":57517,"appointment-2":57518,"target-group":57519,"marketing-campaign":57520,notification:57521,"message-error":57521,comment:57522,"shipping-status":57523,collaborate:57524,shortcut:57525,"lead-outdated":123062,"tools-opportunity":57527,permission:57528,supplier:57529,"table-view":57530,"table-chart":57531,"switch-views":57532,"e-learning":57533,manager:57534,"switch-classes":57535,"simple-payment":123072,signature:57537,"sales-order-item":123074,"sales-order":123075,request:57540,receipt:57541,puzzle:57542,process:57543,private:57544,"popup-window":57545,"person-placeholder":57546,"per-diem":123083,"paper-plane":57548,"paid-leave":123085,"pdf-reader":123086,"overview-chart":57551,overlay:57552,"org-chart":57553,"number-sign":57554,"notification-2":57555,"my-sales-order":123092,meal:57557,loan:123094,"order-status":123095,"customer-order-entry":123096,performance:57561,menu:57562,"employee-lookup":57563,education:57564,"customer-briefing":57565,"customer-and-contacts":57566,"my-view":57567,accelerated:57568,"to-be-reviewed":57569,warning2:57570,"feeder-arrow":57571,"quality-issue":57572,"workflow-tasks":57573,create:57574,"home-share":57575,globe:123112,tags:57577,"work-history":57578,"x-ray":57579,"wounds-doc":57580,"web-cam":57581,waiver:123118,"vertical-bar-chart":57583,"upstacked-chart":57584,"trip-report":57585,microphone:57586,"unpaid-leave":123123,tree:57588,"toaster-up":57589,"toaster-top":57590,"toaster-down":57591,"time-account":57592,theater:57593,taxi:57594,"subway-train":57595,"study-leave":57596,stethoscope:57597,step:57598,sonography:57599,soccor:57600,soccer:57600,"physical-activity":57601,pharmacy:57602,"official-service":57603,"offsite-work":57604,"nutrition-activity":57605,newspaper:57606,"monitor-payments":123143,"map-2":57608,machine:57609,"mri-scan":57610,"end-user-experience-monitoring":57611,unwired:57612,"customer-financial-fact-sheet":123149,"retail-store-manager":57614,"Netweaver-business-client":57615,"electronic-medical-record":57616,"eam-work-order":123153,"customer-view":57618,"crm-service-manager":57619,"crm-sales":123156,widgets:123157,"commission-check":123158,"collections-insight":123159,"clinical-tast-tracker":57624,"citizen-connect":57625,"cart-approval":123162,"capital-projects":123163,"bo-strategy-management":57628,"business-objects-mobile":57629,"business-objects-explorer":57630,"business-objects-experience":57631,"bbyd-dashboard":57632,"bbyd-active-sales":123169,"business-by-design":123170,"business-one":123171,"sap-box":57636,"manager-insight":57637,"accounting-document-verification":123174,"hr-approval":123175,"idea-wall":57640,"Chart-Tree-Map":57641,"cart-5":57642,"cart-4":57643,wallet:57644,"vehicle-repair":57645,upload:57646,unlocked:57647,umbrella:57648,"travel-request":123185,"travel-expense-report":123186,"travel-itinerary":57651,"time-overtime":123188,"thing-type":57653,"technical-object":57654,tag:57655,syringe:57656,syntax:57657,suitcase:57658,simulate:57659,shield:57660,"share-2":57661,"sales-quote":123198,repost:57663,provision:57664,projector:57665,"add-product":57666,"pipeline-analysis":57667,"add-photo":57668,palette:57669,nurse:57670,"sales-notification":123207,mileage:57672,"meeting-room":57673,"media-forward":123210,"media-play":123211,"media-pause":57676,"media-reverse":123213,"media-rewind":123214,"measurement-document":57679,"measuring-point":57680,measure:57681,"map-3":57682,locked:57683,letter:57684,"journey-arrive":57685,"journey-change":57686,"journey-depart":57687,"it-system":57688,"it-instance":57689,"it-host":57690,"iphone-2":57691,"ipad-2":57692,inventory:57693,"insurance-house":57694,"insurance-life":57695,"insurance-car":57696,initiative:57697,incident:123234,"group-2":57699,goal:57700,"functional-location":57701,"full-screen":57702,form:57703,"fob-watch":57704,"blank-tag":57705,"family-protection":57706,folder:57707,"fax-machine":57708,example:57709,eraser:57710,"employee-rejections":57711,"drop-down-list":57712,"draw-rectangle":57713,document:57714,doctor:57715,"discussion-2":57716,discussion:57717,dimension:57718,"customer-and-supplier":57719,crop:57720,"add-contact":57721,"compare-2":57722,"color-fill":57723,collision:57724,curriculum:57725,"chart-axis":57726,"full-stacked-chart":57727,"full-stacked-column-chart":57728,"vertical-bar-chart-2":57729,"horizontal-bar-chart-2":57730,"horizontal-stacked-chart":57731,"vertical-stacked-chart":57732,"choropleth-chart":123269,"geographic-bubble-chart":123270,"multiple-radar-chart":57735,"radar-chart":57736,"crossed-line-chart":57737,"multiple-line-chart":57738,"multiple-bar-chart":57739,"line-chart":57740,"line-chart-dual-axis":57741,"bubble-chart":57742,"scatter-chart":57743,"multiple-pie-chart":57744,"column-chart-dual-axis":57745,"tag-cloud-chart":57746,"area-chart":57747,cause:57748,"cart-3":57749,"cart-2":57750,"bus-public-transport":57751,burglary:57752,building:57753,border:57754,bookmark:57755,badge:57756,"attachment-audio":57757,"attachment-video":57758,"attachment-html":57759,"attachment-photo":57760,"attachment-e-pub":57761,"attachment-zip-file":57762,"attachment-text-file":57763,"add-equipment":57764,"add-activity":123301,"activity-individual":57766,"activity-2":123303,"add-activity-2":123304,"activity-items":57769,"activity-assigned-to-goal":57770,"status-completed":57771,"status-positive":57771,"status-error":57772,"status-negative":57772,"status-inactive":57773,"status-in-process":57774,"status-critical":57774,"blank-tag-2":57775,"cart-full":57776,"locate-me":57777,paging:57778,"company-view":57779,"document-text":57780,explorer:57781,"personnel-view":57782,"sorting-ranking":57783,"drill-down":57784,"drill-up":57785,"vds-file":57786,"sap-logo-shape":123323,"folder-full":57788,"system-exit":57789,"system-exit-2":57790,"close-command-field":57791,"open-command-field":57792,"sys-enter-2":123329,"sys-enter":123330,"sys-help-2":123331,"sys-help":123332,"sys-back":57797,"sys-back-2":57798,"sys-cancel":57799,"sys-cancel-2":57800,"open-folder":57801,"sys-find-next":57802,"sys-find":57803,"sys-monitor":57804,"sys-prev-page":57805,"sys-first-page":57806,"sys-next-page":57807,"sys-last-page":57808,"generate-shortcut":57809,"create-session":57810,"display-more":57811,"enter-more":57812,"zoom-in":57813,"zoom-out":57814,header:57815,"detail-view":57816,"show-edit":57816,collapse:57817,expand:57818,positive:57819,negative:57820,display:57821,menu2:57822,redo:57823,undo:57824,"navigation-up-arrow":57825,"navigation-down-arrow":57826,down:57827,up:57828,shelf:57829,background:57830,resize:57831,move:57832,show:57833,hide:57834,"nav-back":57835,error:57836,"slim-arrow-right":57837,"slim-arrow-left":57838,"slim-arrow-down":57839,"slim-arrow-up":57840,forward:57841,overflow:57842,"value-help":57843,"multi-select":123380,"exit-full-screen":57845,"sys-add":57846,"sys-minus":57847,dropdown:57848,"expand-group":57849,"vertical-grip":57850,"horizontal-grip":57851,"sort-descending":57852,"sort-ascending":57853,"arrow-down":57854,legend:57855,"collapse-group":57856,"message-warning":57857,"message-information":123394,"message-success":123395,restart:57860,stop:57861,"add-process":57862,"cancel-maintenance":57863,activate:57864,"resize-horizontal":57865,"resize-vertical":57866,connected:57867,disconnected:57868,"edit-outside":57869,key:57870,minimize:57871,"back-to-top":57872,"hello-world":57873,outbox:57874,"donut-chart":57875,"heatmap-chart":57876,"horizontal-bullet-chart":57877,"vertical-bullet-chart":57878,call:57879,"download-from-cloud":57880,"upload-to-cloud":57881,jam:57882,"sap-ui5":57883,"message-popup":57884,cloud:57885,"horizontal-waterfall-chart":123422,"vertical-waterfall-chart":123423,"broken-link":57888,headset:57889,"thumb-up":123426,"thumb-down":123427,"multiselect-all":123428,"multiselect-none":123429,scissors:57894,sound:123431,"sound-loud":123432,"sound-off":123433,"date-time":123434,"user-settings":57899,"key-user-settings":57900,"developer-settings":57901,"text-formatting":123438,"bold-text":123439,"italic-text":123440,"underline-text":123441,"text-align-justified":123442,"text-align-left":123443,"text-align-center":123444,"text-align-right":123445,"bullet-text":123446,"numbered-text":123447,co:57912,"ui-notifications":57913,bell:57914,"cancel-share":57915,"write-new-document":57916,"write-new":57917,cancel:123454,"screen-split-one":57919,"screen-split-two":57920,"screen-split-three":57921,customize:57922,"user-edit":57923,"source-code":57924,copy:57925,paste:57926,"line-chart-time-axis":123463,"clear-filter":57928,reset:57929,"trend-up":57930,"trend-down":57931,"cursor-arrow":57932,"add-document":57933,"create-form":57934,"resize-corner":57935,"chevron-phase":57936,"chevron-phase-2":57937,"rhombus-milestone":57938,"rhombus-milestone-2":57939,"circle-task":57940,"circle-task-2":57941,"project-definition-triangle":57942,"project-definition-triangle-2":57943,"master-task-triangle":57944,"master-task-triangle-2":57945,"program-triangles":57946,"program-triangles-2":57947,"mirrored-task-circle":57948,"mirrored-task-circle-2":57949,"checklist-item":57950,"checklist-item-2":57951,checklist:57952,"checklist-2":57953,"chart-table-view":57954,"filter-analytics":57955,"filter-facets":57956,"filter-fields":57957,indent:57958,outdent:57959,heading1:123496,heading2:123497,heading3:123498,"decrease-line-height":57963,"increase-line-height":57964,fx:123501,"add-folder":57966,away:57967,busy:57968,"appear-offline":57969,blur:57970,pixelate:57971,"horizontal-combination-chart":57972,"add-employee":57973,"text-color":123510,"browse-folder":57975,"primary-key":57976,"two-keys":57977,strikethrough:57978,text:57979,responsive:57980,"desktop-mobile":57981,"table-row":57982,"table-column":57983,validate:123520,"keyboard-and-mouse":57985,touch:57986,"expand-all":57987,"collapse-all":57988,combine:57989,split:57990,megamenu:57991,feedback:57992,information:57993,s4hana:123530,translate:123531,"clear-all":57996,"command-line-interfaces":57997,sum:123534,"qr-code":123535,"space-navigation":58e3,"in-progress":123537,"not-editable":58002,heart:58003,"heart-2":58004,"tri-state":58005,"bookmark-2":58006,"detail-less":58007,"detail-more":58008,"flag-2":123545,"folder-2":58010,"paint-bucket":58011,"direction-arrows":58012,"non-binary":58013,female:58014,male:123551,"gender-male-and-female":123648,rotate:58113,"locate-me-2":58114,"map-fill":58115,"cloud-check":123652,enablement:123653}};var l;function d(){if(!l){l=sap.ui.getCore().getLibraryResourceBundle("sap.ui.core")}return l}var u={sapIconFontFamily:o};u.get=function(){return c};u.getFontRegistry=function(){return s};u.addIcon=function(r,n,o){if(typeof o==="string"){o={fontFamily:arguments[2],content:arguments[3],overWrite:!!arguments[4],suppressMirroring:!!arguments[5]}}if(typeof n!=="string"){n=String(n)}n=n==="undefined"?undefined:n;if(!c[n]){c[n]={}}var s=c[n],l=s[r],d,u,m,f;if(l){if(n===undefined){a.warning("Icon with name '"+r+"' in built-in collection already exists and can not be overwritten.","sap.ui.core.IconPool");return}else if(!o.overWrite){a.warning("Icon with name '"+r+"' in collection '"+n+"' already exists. Specify 'iconInfo.overWrite' in order to overwrite.","sap.ui.core.IconPool");return}}d={protocol:i,hostname:n||r,path:n?r:undefined};if(Array.isArray(o.content)){u=o.content.map(p).join("")}else{u=p(o.content)}if(o.resourceBundle instanceof t){f="Icon."+r;if(o.resourceBundle.hasText(f)){m=o.resourceBundle.getText(f)}}l=s[r]={name:r,collection:n,uri:e.build(d),fontFamily:o.fontFamily,content:u,text:m||"",suppressMirroring:o.suppressMirroring,skipMirroring:o.suppressMirroring};return l};u.getIconURI=function(e,t){var a=this.getIconInfo(e,t);return a&&a.uri};u.getIconInfo=function(t,r,n){var o,i,l,p,m=u.isIconURI(t);if(!t){return}if(!n&&m){n=r}n=n||"sync";l=n==="async"||n==="mixed";function f(){var e=c[r];var a=e&&e[t];if(typeof a==="number"){c[r][t]=undefined;a=u.addIcon(t,r,{fontFamily:s[r].config.fontFamily,content:a&65535,suppressMirroring:!!(a&65536),resourceBundle:d()})}return a}if(m){o=e.parse(t);if(o.path.length===1){r=undefined;t=o.hostname}else{r=o.hostname;t=o.path.slice(1)}if(!t){return}}if(typeof r!=="string"){r=String(r)}r=r==="undefined"?undefined:r;i=f();if(i===undefined&&r!==undefined){p=u._loadFontMetadata(r,l)}if(l){if(p){return p.then(function(){i=f();if(!i){a.warning("Icon info for icon '"+t+"' in collection '"+r+"' could not be found")}return i})}else if(n==="async"){if(!i){a.warning("Icon info for icon '"+t+"' in collection '"+r+"' could not be found")}return Promise.resolve(i)}else{i=f()}}else{i=f()}if(!i){a.warning("Icon info for icon '"+t+"' in collection '"+r+"' could not be found")}return i};u.isIconURI=function(t){if(!t){return false}var a=e.parse(t);return a.protocol===i&&!!a.hostname};u.getIconCollectionNames=function(){return Object.keys(c)};u.getIconNames=function(e){var t=c[e];return t?Object.keys(t):[]};u.insertFontFaceStyle=function(e,t,r){var n,i=u.getFontRegistry();function s(e){return u._convertUrl?u._convertUrl(e):e}if(arguments.length===0||e===o){a.info("It's not needed to call IconPool.insertFontFaceStyle to insert font-face for the predefined icon font SAP-icons because the font-face is included in the library.css of sap.ui.core");return}if(e&&t===undefined){a.error("IconPool.insertFontFaceStyle must be called with at least two parameters!");return}if(r===undefined){r=e}if(!i[r]){a.error("Icon font '"+r+"' has not been registered yet.");return}if(i[r].inserted){a.info("The font face style of icon font '"+r+"' was already inserted.");return}n=new FontFace(e,"url("+s(t+e+".woff2")+") format('woff2'),"+"local("+e+")",{weight:"normal",style:"normal"});document.fonts.add(n);n.load();i[r].inserted=true;i[r].fontFace=e};u._loadFontMetadata=function(e,t){var o,i=u.get(),s=u.getFontRegistry();if(s[e]){if(typeof s[e].metadataLoaded==="boolean"){return}if(t&&s[e].metadataLoaded instanceof Promise){return s[e].metadataLoaded}o=s[e].config}else{if(!i[e]){a.error("The font configuration for collection '"+e+"' is not registered")}s[e]={metadataLoaded:false}}function c(t){for(var a in t){t[a]=parseInt(t[a],16)}i[e]=t;u.insertFontFaceStyle(o.fontFamily,o.fontURI,e);s[e].metadataLoaded=true}var l=function(){a.error("An error occurred loading the font metadata for collection '"+e+"'");s[e].metadataLoaded=false};if(o){if(o.metadataURI===undefined){o.metadataURI=o.fontURI+o.fontFamily+".json"}if(t&&!o.metadata){if(s[e].metadataLoaded instanceof Promise){return s[e].metadataLoaded}if(i[e]===undefined){var d=new AbortController;s[e].abortController=d;s[e].metadataLoaded=r(o.metadataURI,{headers:{Accept:r.ContentTypes.JSON},signal:d.signal}).then(function(t){if(t.ok){return t.json().then(function(t){c(t);delete s[e].abortController})}throw new Error}).catch(function(e){if(e.name!=="AbortError"){l()}})}return s[e].metadataLoaded}else if(o.metadataURI){if(s[e].abortController){s[e].abortController.abort("Replaced by sync request");s[e].abortController=null}a.warning("Synchronous loading of font meta data in IconPool, due to .getIconInfo() call"+" for '"+e+"'. Use loading mode 'async' to avoid this call.","SyncXHR",null,function(){return{type:"SyncXHR",name:"IconPool"}});try{var p=n(o.metadataURI,{headers:{Accept:n.ContentTypes.JSON}});if(p.ok){var m=p.json();c(m)}else{l()}}catch(e){l()}}else{c(o.metadata)}}};function p(e){return String.fromCharCode(typeof e==="number"?e:parseInt(e,16))}return u});
//# sourceMappingURL=_IconRegistry.js.map