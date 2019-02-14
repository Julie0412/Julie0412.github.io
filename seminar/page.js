
; /* Start:"a:4:{s:4:"full";s:99:"/bitrix/templates/aspro-allcorp2/components/bitrix/news.detail/services/script.min.js?1521717435665";s:6:"source";s:81:"/bitrix/templates/aspro-allcorp2/components/bitrix/news.detail/services/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function(){$(".detail .galery-block .flexslider .item").length&&($(".detail .galery-block .flexslider .item").sliceHeight({lineheight:-3}),$(".detail .galery #carousel").length&&$(".detail .galery #carousel").flexslider({animation:"slide",controlNav:!1,animationLoop:!0,slideshow:!1,itemWidth:77,itemMargin:7.5,minItems:2,maxItems:4,asNavFor:".detail .galery #slider"})),$(".docs-block .blocks").length&&$(".docs-block .blocks .inner-wrapper").sliceHeight({row:".blocks",item:".inner-wrapper"}),$(".projects.item-views").length&&($(".projects.item-views .item .image").sliceHeight({lineheight:-3}),$(".projects.item-views .item").sliceHeight())});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:70:"/bitrix/templates/aspro-allcorp2/js/rating_likes.min.js?15217174367297";s:6:"source";s:51:"/bitrix/templates/aspro-allcorp2/js/rating_likes.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
if(!BXRL)var BXRL={},BXRLW=null;RatingLikes=function(t,e,i,n,o,p,s,a,u){return this.enabled=!0,this.likeId=t,this.entityTypeId=e,this.entityId=i,this.available="Y"==n,this.userId=o,this.localize=p,this.template=s,this.pathToUserProfile=a,this.pathToAjax="string"==typeof u?u:"/bitrix/components/bitrix/rating.vote/vote.ajax.php",this.box=BX("bx-ilike-button-"+t),null===this.box?(this.enabled=!1,!1):(this.button=BX.findChild(this.box,{className:"bx-ilike-left-wrap"},!0,!1),this.wrapp=BX.findChild(this.box,{className:"all-wrapper"},!0,!1),this.buttonText=BX.findChild(this.button,{className:"bx-ilike-text"},!0,!1),this.count=BX.findChild(this.box,{tagName:"span",className:"bx-ilike-right-wrap"},!0,!1),this.countText=BX.findChild(this.count,{tagName:"span",className:"bx-ilike-right"},!0,!1),this.popup=null,this.popupId=null,this.popupOpenId=null,this.popupTimeoutId=null,this.popupContent=BX.findChild(BX("bx-ilike-popup-cont-"+t),{tagName:"span",className:"bx-ilike-popup"},!0,!1),this.popupContentPage=1,this.popupListProcess=!1,this.popupTimeout=!1,this.likeTimeout=!1,void(this.lastVote=BX.hasClass("standart"==s?this.button:this.count,"bx-you-like")?"plus":"cancel"))},RatingLikes.LiveUpdate=function(t){if(t.USER_ID==BX.message("USER_ID"))return!1;for(var e in BXRL)if(BXRL.hasOwnProperty(e)&&BXRL[e].entityTypeId==t.ENTITY_TYPE_ID&&BXRL[e].entityId==t.ENTITY_ID){var i=BXRL[e];i.countText.innerHTML=parseInt(t.TOTAL_POSITIVE_VOTES),i.count.insertBefore(BX.create("span",{props:{className:"bx-ilike-plus-one"},style:{width:i.countText.clientWidth-8+"px",height:i.countText.clientHeight-8+"px"},html:"ADD"==t.TYPE?"+1":"-1"}),i.count.firstChild),i.popup&&(i.popup.close(),i.popupContentPage=1)}},RatingLikes.Set=function(t,e,i,n,o,p,s,a,u){if(void 0===s&&(s="standart"),!BXRL[t]||BXRL[t].tryToSet<=5){var l=BXRL[t]&&BXRL[t].tryToSet?BXRL[t].tryToSet:1;BXRL[t]=new RatingLikes(t,e,i,n,o,p,s,a,u),BXRL[t].enabled?RatingLikes.Init(t):setTimeout(function(){BXRL[t].tryToSet=l+1,RatingLikes.Set(t,e,i,n,o,p,s,a,u)},500)}},RatingLikes.Init=function(t){BXRL[t].available?(BX.bind("standart"==BXRL[t].template?BXRL[t].button:BXRL[t].buttonText,"click",function(e){clearTimeout(BXRL[t].likeTimeout),BX.hasClass("standart"==BXRL[t].template?this:BXRL[t].count,"bx-you-like")?(BXRL[t].buttonText.innerHTML=BXRL[t].localize.LIKE_N,BXRL[t].countText.innerHTML=parseInt(BXRL[t].countText.innerHTML)-1,BX.removeClass("standart"==BXRL[t].template?this:BXRL[t].count,"bx-you-like"),BXRL[t].likeTimeout=setTimeout(function(){"cancel"!=BXRL[t].lastVote&&RatingLikes.Vote(t,"cancel")},1e3)):(BXRL[t].buttonText.innerHTML=BXRL[t].localize.LIKE_Y,BXRL[t].countText.innerHTML=parseInt(BXRL[t].countText.innerHTML)+1,BX.addClass("standart"==BXRL[t].template?this:BXRL[t].count,"bx-you-like"),BXRL[t].likeTimeout=setTimeout(function(){"plus"!=BXRL[t].lastVote&&RatingLikes.Vote(t,"plus")},1e3)),BX.removeClass(this.box,"bx-ilike-button-hover"),BX.PreventDefault(e)}),BX.bind(BXRL[t].box,"mouseover",function(){BX.addClass(this,"bx-ilike-button-hover")}),BX.bind(BXRL[t].box,"mouseout",function(){BX.removeClass(this,"bx-ilike-button-hover")})):void 0!=BXRL[t].buttonText&&(BXRL[t].buttonText.innerHTML=BXRL[t].localize.LIKE_D),RatingLikes.PopupScroll(t),console.log(),BX.bind(BXRL[t].wrapp,"mouseover",function(){clearTimeout(BXRL[t].popupTimeoutId),BXRL[t].popupTimeoutId=setTimeout(function(){return BXRLW==t?!1:(1==BXRL[t].popupContentPage&&RatingLikes.List(t,1),void(BXRL[t].popupTimeoutId=setTimeout(function(){RatingLikes.OpenWindow(t)},400)))},400)}),BX.bind(BXRL[t].wrapp,"mouseout",function(){clearTimeout(BXRL[t].popupTimeoutId)}),BX.bind(BXRL[t].box,"mouseover",function(){clearTimeout(BXRL[t].popupTimeout)}),BX.bind(BXRL[t].box,"mouseout",function(){clearTimeout(BXRL[t].popupTimeout),BXRL[t].popupTimeout=setTimeout(function(){null!==BXRL[t].popup&&(BXRL[t].popup.close(),BXRLW=null)},1e3)})},RatingLikes.OpenWindow=function(t){return 0==parseInt(BXRL[t].countText.innerHTML)?!1:(null==BXRL[t].popup&&(BXRL[t].popup=new BX.PopupWindow("ilike-popup-"+t,"standart"==BXRL[t].template?BXRL[t].count:BXRL[t].box,{lightShadow:!0,offsetLeft:5,autoHide:!0,closeByEsc:!0,zIndex:2005,bindOptions:{position:"top"},events:{onPopupClose:function(){BXRLW=null},onPopupDestroy:function(){}},content:BX("bx-ilike-popup-cont-"+t)}),BXRL[t].popup.setAngle({}),BX.bind(BX("ilike-popup-"+t),"mouseout",function(){clearTimeout(BXRL[t].popupTimeout),BXRL[t].popupTimeout=setTimeout(function(){BXRL[t].popup.close()},1e3)}),BX.bind(BX("ilike-popup-"+t),"mouseover",function(){clearTimeout(BXRL[t].popupTimeout)})),null!=BXRLW&&BXRL[BXRLW].popup.close(),BXRLW=t,BXRL[t].popup.show(),void RatingLikes.AdjustWindow(t))},RatingLikes.Vote=function(t,e){return BX.ajax({url:BXRL[t].pathToAjax,method:"POST",dataType:"json",data:{RATING_VOTE:"Y",RATING_VOTE_TYPE_ID:BXRL[t].entityTypeId,RATING_VOTE_ENTITY_ID:BXRL[t].entityId,RATING_VOTE_ACTION:e,sessid:BX.bitrix_sessid()},onsuccess:function(e){BXRL[t].lastVote=e.action,BXRL[t].countText.innerHTML=e.items_all,BXRL[t].popupContentPage=1,BXRL[t].popupContent.innerHTML="",spanTag0=document.createElement("span"),spanTag0.className="bx-ilike-wait",BXRL[t].popupContent.appendChild(spanTag0),RatingLikes.AdjustWindow(t),BX("ilike-popup-"+t)&&"block"==BX("ilike-popup-"+t).style.display&&RatingLikes.List(t,null)},onfailure:function(t){}}),!1},RatingLikes.List=function(t,e){return 0==parseInt(BXRL[t].countText.innerHTML)?!1:(null==e&&(e=BXRL[t].popupContentPage),BXRL[t].popupListProcess=!0,BX.ajax({url:BXRL[t].pathToAjax,method:"POST",dataType:"json",data:{RATING_VOTE_LIST:"Y",RATING_VOTE_TYPE_ID:BXRL[t].entityTypeId,RATING_VOTE_ENTITY_ID:BXRL[t].entityId,RATING_VOTE_LIST_PAGE:e,PATH_TO_USER_PROFILE:BXRL[t].pathToUserProfile,sessid:BX.bitrix_sessid()},onsuccess:function(i){if(BXRL[t].countText.innerHTML=i.items_all,0==parseInt(i.items_page))return!1;1==e&&(BXRL[t].popupContent.innerHTML="",spanTag0=document.createElement("span"),spanTag0.className="bx-ilike-bottom_scroll",BXRL[t].popupContent.appendChild(spanTag0)),BXRL[t].popupContentPage+=1;for(var n=null,o=0;o<i.items.length;o++)n=i.items[o].PHOTO_SRC.length>0?BX.create("IMG",{attrs:{src:i.items[o].PHOTO_SRC},props:{className:"bx-ilike-popup-avatar-img"}}):BX.create("IMG",{attrs:{src:"/bitrix/images/main/blank.gif"},props:{className:"bx-ilike-popup-avatar-img bx-ilike-popup-avatar-img-default"}}),BXRL[t].popupContent.appendChild(BX.create("div",{props:{className:"bx-ilike-popup-img"+(i.items[o].USER_TYPE?" bx-ilike-popup-img-"+i.items[o].USER_TYPE:"")},children:[BX.create("SPAN",{props:{className:"bx-ilike-popup-avatar-new"},children:[n,BX.create("SPAN",{props:{className:"bx-ilike-popup-avatar-status-icon"}})]}),BX.create("SPAN",{props:{className:"bx-ilike-popup-name-new"},html:i.items[o].FULL_NAME})]}));RatingLikes.AdjustWindow(t),RatingLikes.PopupScroll(t),BXRL[t].popupListProcess=!1},onfailure:function(t){}}),!1)},RatingLikes.AdjustWindow=function(t){null!=BXRL[t].popup&&(BXRL[t].popup.bindOptions.forceBindPosition=!0,BXRL[t].popup.adjustPosition(),BXRL[t].popup.bindOptions.forceBindPosition=!1)},RatingLikes.PopupScroll=function(t){BX.bind(BXRL[t].popupContent,"scroll",function(){this.scrollTop>(this.scrollHeight-this.offsetHeight)/1.5&&(RatingLikes.List(t,null),BX.unbindAll(this))})};
/* End */
;
; /* Start:"a:4:{s:4:"full";s:97:"/bitrix/templates/aspro-allcorp2/components/bitrix/catalog.comments/main/script.js?15217174357355";s:6:"source";s:82:"/bitrix/templates/aspro-allcorp2/components/bitrix/catalog.comments/main/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
;(function(window) {
if (!!window.JCCatalogSocnetsComments)
{
	return;
}

window.JCCatalogSocnetsComments = function(arParams)
{
	var i;

	this.errorCode = 0;

	this.params = {};

	this.serviceList = {
		blog: false,
		facebook: false,
		vk: false
	};
	this.settings = {
		blog: {
			ajaxUrl: '',
			ajaxParams: {},
			contID: 'bx-cat-soc-comments-blg'
		},
		facebook: {
			contID: 'bx-cat-soc-comments-fb',
			contWidthID: '',
			parentContID: 'soc_comments',
			facebookJSDK: 'facebook-jssdk',
			facebookPath: ''
		},
		vk: {}
	};

	this.services = {
		blog: {
			obBlogCont: null
		},
		facebook: {
			obFBCont: null,
			obFBContWidth: null,
			obFBParentCont: null,
			obFBjSDK: null,
			currentWidth: 0
		}
	};

	this.activeTabId = '';
	this.currentTab = -1;
	this.tabsContId = '';
	this.tabList = [];
	this.obTabList = [];

	if (typeof arParams === 'object')
	{
		this.params = arParams;
		if (!!this.params.serviceList && typeof(this.params.serviceList) === 'object')
		{
			for (i in this.serviceList)
			{
				if (this.serviceList.hasOwnProperty(i) && !!this.params.serviceList[i])
					this.serviceList[i] = true;
			}
		}
		if (this.serviceList.blog)
			this.initParams('blog');
		if (this.serviceList.facebook)
			this.initParams('facebook');

		if (typeof(this.params.tabs) === 'object')
		{
			this.activeTabId = this.params.tabs.activeTabId;
			this.tabsContId = this.params.tabs.tabsContId;
			this.tabList = this.params.tabs.tabList;
		}
	}
	else
	{
		this.errorCode = -1;
	}

	if (this.errorCode === 0)
		BX.ready(BX.proxy(this.Init, this));
};

window.JCCatalogSocnetsComments.prototype.initParams = function(id)
{
	var i;

	if (!!this.params.settings && typeof(this.params.settings) === 'object' && typeof(this.params.settings[id]) === 'object')
	{
		for (i in this.settings[id])
		{
			if (this.settings[id].hasOwnProperty(i) && !!this.params.settings[id][i])
				this.settings[id][i] = this.params.settings[id][i];
		}
	}
};

window.JCCatalogSocnetsComments.prototype.Init = function()
{
	if (!this.tabList || !BX.type.isArray(this.tabList) || this.tabList.length === 0)
	{
		this.errorCode = -1;
		return;
	}
	var i,
		strFullId;

	for (i = 0; i < this.tabList.length; i++)
	{
		strFullId = this.tabsContId + this.tabList[i];
		this.obTabList[i] = {
			id: this.tabList[i],
			tabId: strFullId,
			contId: strFullId+'_cont',
			tab: BX(strFullId),
			cont: BX(strFullId+'_cont')
		};
		if (!this.obTabList[i].tab || !this.obTabList[i].cont)
		{
			this.errorCode = -2;
			break;
		}
		if (this.activeTabId === this.tabList[i])
			this.currentTab = i;
		BX.bind(this.obTabList[i].tab, 'click', BX.proxy(this.onClick, this));
	}

	if (this.serviceList.blog)
	{
		this.services.blog.obBlogCont = BX(this.settings.blog.contID);
		if (!this.services.blog.obBlogCont)
		{
			this.serviceList.blog = false;
			this.errorCode = -16;
		}
	}
	if (this.serviceList.facebook)
	{
		this.services.facebook.obFBCont = BX(this.settings.facebook.contID);
		if (!this.services.facebook.obFBCont)
		{
			this.serviceList.facebook = false;
			this.errorCode = -32;
		}
		else
		{
			this.services.facebook.obFBContWidth = this.services.facebook.obFBCont.firstChild;
		}
		this.services.facebook.obFBParentCont = BX(this.settings.facebook.parentContID);
	}

	if (this.errorCode === 0)
	{
		this.showActiveTab();
		if (this.serviceList.blog)
			this.loadBlog();
		if (this.serviceList.facebook)
			this.loadFB();
	}

	this.params = {};
};

window.JCCatalogSocnetsComments.prototype.loadBlog = function()
{
	var postData;

	if (this.errorCode !== 0 || !this.serviceList.blog || this.settings.blog.ajaxUrl.length === 0)
	{
		return;
	}

	postData = this.settings.blog.ajaxParams;
	postData.sessid = BX.bitrix_sessid();
	BX.ajax({
		timeout:   30,
		method:   'POST',
		dataType: 'html',
		url:       this.settings.blog.ajaxUrl,
		data:      postData,
		onsuccess: BX.proxy(this.loadBlogResult, this)
	});
};

window.JCCatalogSocnetsComments.prototype.loadBlogResult = function(result)
{
	if (BX.type.isNotEmptyString(result))
		BX.adjust(this.services.blog.obBlogCont, { html: result });
};

window.JCCatalogSocnetsComments.prototype.loadFB = function()
{
	var width;

	if (this.services.facebook.obFBParentCont && this.services.facebook.obFBContWidth)
	{
		width = parseInt(this.services.facebook.obFBParentCont.offsetWidth, 10);
		if (!isNaN(width) && width > 20)
		{
			BX.adjust(this.services.facebook.obFBContWidth, { attrs: { 'data-width': (width-20) } });
			this.services.facebook.currentWidth = width;
		}

		if (!this.services.facebook.obFBjSDK)
		{
			this.services.facebook.obFBjSDK = true;
			BX.defer(BX.proxy((function(d, s, id, fbpath) {
				var js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id))
				{
					return;
				}
				js = d.createElement(s); js.id = id;
				js.src = fbpath;
				fjs.parentNode.insertBefore(js, fjs);
			}(document, "script", this.settings.facebook.facebookJSDK, this.settings.facebook.facebookPath)), this));
		}
	}
};

window.JCCatalogSocnetsComments.prototype.getFBParentWidth = function()
{
	var width = 0;
	if (!!this.services.facebook.obFBParentCont)
	{
		width = parseInt(this.services.facebook.obFBParentCont.offsetWidth, 10);
		if (isNaN(width))
			width = 0;
	}
	return width;
};

window.JCCatalogSocnetsComments.prototype.setFBWidth = function(width)
{
	var obFrame = null,
		src,
		newSrc;

	if (
		this.serviceList.facebook &&
		this.services.facebook.currentWidth !== width &&
		width > 20 &&
		!!this.services.facebook.obFBContWidth
	)
	{
		if (!!this.services.facebook.obFBContWidth.firstChild && !!this.services.facebook.obFBContWidth.firstChild.fitrstChild)
		{
			obFrame = this.services.facebook.obFBContWidth.firstChild.fitrstChild;
			if (!!obFrame)
			{
				src = obFrame.getAttribute("src");
				newSrc = src.replace(/width=(\d+)/ig, "width="+width);
				BX.adjust(this.services.facebook.obFBContWidth, { attrs: { 'data-width': (width-20) } });
				this.services.facebook.currentWidth = width;
				BX.style(this.services.facebook.obFBContWidth.firstChild, 'width', width+'px');
				BX.adjust(obFrame, { attrs : { src: newSrc }, style: { width: width+'px' } });
			}
		}
	}
};

window.JCCatalogSocnetsComments.prototype.onResize = function()
{
	if (this.serviceList.facebook)
		this.setFBWidth(this.getFBParentWidth());
};

window.JCCatalogSocnetsComments.prototype.onClick = function()
{
	var target = BX.proxy_context,
		index = -1,
		i;

	for (i = 0; i < this.obTabList.length; i++)
	{
		if (target.id === this.obTabList[i].tabId)
		{
			index = i;
			break;
		}
	}
	if (index > -1)
	{
		if (index !== this.currentTab)
		{
			this.hideActiveTab();
			this.currentTab = index;
			this.showActiveTab();
		}
	}
};

window.JCCatalogSocnetsComments.prototype.hideActiveTab = function()
{
	BX.removeClass(this.obTabList[this.currentTab].tab, 'active');
	BX.addClass(this.obTabList[this.currentTab].cont, 'tab-off');
	BX.addClass(this.obTabList[this.currentTab].cont, 'hidden');
};

window.JCCatalogSocnetsComments.prototype.showActiveTab = function()
{
	BX.onCustomEvent('onAfterBXCatTabsSetActive_'+this.tabsContId,[{activeTab: this.obTabList[this.currentTab].id}]);
	BX.addClass(this.obTabList[this.currentTab].tab, 'active');
	BX.removeClass(this.obTabList[this.currentTab].cont, 'tab-off');
	BX.removeClass(this.obTabList[this.currentTab].cont, 'hidden');
};
})(window);
/* End */
;; /* /bitrix/templates/aspro-allcorp2/components/bitrix/news.detail/services/script.min.js?1521717435665*/
; /* /bitrix/templates/aspro-allcorp2/js/rating_likes.min.js?15217174367297*/
; /* /bitrix/templates/aspro-allcorp2/components/bitrix/catalog.comments/main/script.js?15217174357355*/
