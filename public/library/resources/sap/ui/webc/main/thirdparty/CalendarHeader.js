sap.ui.define(["exports","sap/ui/webc/common/thirdparty/base/UI5Element","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer","sap/ui/webc/common/thirdparty/base/Keys","sap/ui/webc/common/thirdparty/base/i18nBundle","sap/ui/webc/common/thirdparty/base/types/Integer","sap/ui/webc/common/thirdparty/base/types/CalendarType","sap/ui/webc/common/thirdparty/icons/slim-arrow-left","sap/ui/webc/common/thirdparty/icons/slim-arrow-right","./Icon","./generated/templates/CalendarHeaderTemplate.lit","./generated/i18n/i18n-defaults","./generated/themes/CalendarHeader.css"],function(e,t,n,r,a,s,o,i,u,d,p,l,c){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;t=h(t);n=h(n);s=h(s);o=h(o);d=h(d);p=h(p);c=h(c);function h(e){return e&&e.__esModule?e:{default:e}}const y={tag:"ui5-calendar-header",languageAware:true,properties:{timestamp:{type:s.default},primaryCalendarType:{type:o.default},secondaryCalendarType:{type:o.default},buttonTextForSecondaryCalendarType:{type:Object},isNextButtonDisabled:{type:Boolean},isPrevButtonDisabled:{type:Boolean},isMonthButtonHidden:{type:Boolean},_monthButtonText:{type:String},_yearButtonText:{type:String},isYearButtonHidden:{type:Boolean}},events:{"previous-press":{},"next-press":{},"show-month-press":{},"show-year-press":{}}};class f extends t.default{static get metadata(){return y}static get render(){return n.default}static get template(){return p.default}static get styles(){return c.default}static get dependencies(){return[d.default]}static async onDefine(){f.i18nBundle=await(0,a.getI18nBundle)("@ui5/webcomponents")}constructor(){super()}onBeforeRendering(){this._prevButtonText=f.i18nBundle.getText(l.CALENDAR_HEADER_PREVIOUS_BUTTON);this._nextButtonText=f.i18nBundle.getText(l.CALENDAR_HEADER_NEXT_BUTTON);if(this.hasSecondaryCalendarType){this._secondMonthButtonText=this.buttonTextForSecondaryCalendarType.monthButtonText;this._secondYearButtonText=this.buttonTextForSecondaryCalendarType.yearButtonText}}onPrevButtonClick(e){this.fireEvent("previous-press",e)}onNextButtonClick(e){this.fireEvent("next-press",e)}onMonthButtonClick(e){this.fireEvent("show-month-press",e)}onMonthButtonKeyDown(e){if((0,r.isSpace)(e)){e.preventDefault()}if((0,r.isEnter)(e)){this.fireEvent("show-month-press",e)}}onMonthButtonKeyUp(e){if((0,r.isSpace)(e)){e.preventDefault();this.fireEvent("show-month-press",e)}}onYearButtonClick(e){this.fireEvent("show-year-press",e)}onYearButtonKeyDown(e){if((0,r.isSpace)(e)){e.preventDefault()}if((0,r.isEnter)(e)){this.fireEvent("show-year-press",e)}}onYearButtonKeyUp(e){if((0,r.isSpace)(e)){e.preventDefault();this.fireEvent("show-year-press",e)}}get hasSecondaryCalendarType(){return!!this.secondaryCalendarType}get classes(){return{prevButton:{"ui5-calheader-arrowbtn":true,"ui5-calheader-arrowbtn-disabled":this.isPrevButtonDisabled},nextButton:{"ui5-calheader-arrowbtn":true,"ui5-calheader-arrowbtn-disabled":this.isNextButtonDisabled}}}get accInfo(){return{ariaLabelMonthButton:this.hasSecondaryCalendarType?`${this._monthButtonText}, ${this.buttonTextForSecondaryCalendarType.info}`:`${this._monthButtonText}`}}}f.define();var B=f;e.default=B});
//# sourceMappingURL=CalendarHeader.js.map