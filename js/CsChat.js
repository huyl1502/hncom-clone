function openCsChatBox(){if(currentVersion&&2==currentVersion)window&&window.cslw&&cslw("open-widget")
else{var csIframe=document.getElementById(CS_LIVE_CHAT_IFRAME_DOM_ID)
if(csIframe){var data={id:1}
csIframe.contentWindow.postMessage(JSON.stringify(data),"*")}}}function mouseUp(){window.removeEventListener("mousemove",divMove,!0)}function mouseDown(e){var div=document.getElementById(CS_LIVE_CHAT_DIV_DOM_ID)
csCurrentPosition="right"==csAlign?document.body.clientWidth-e.clientX-parseInt(div.style.right,10):e.clientX-parseInt(div.style.left,10),window.addEventListener("mousemove",divMove,!0)}function divMove(e){var div=document.getElementById(CS_LIVE_CHAT_DIV_DOM_ID)
if("right"==csAlign){var newRight=document.body.clientWidth-e.clientX-csCurrentPosition
div.style.right=newRight+"px"}else{var newLeft=e.clientX-csCurrentPosition
div.style.left=newLeft+"px"}}function embedCsChat(data){globalData=data
var iframe=document.createElement("iframe"),div=document.createElement("div"),divDrag=document.createElement("div"),body=document.body,style=window.getComputedStyle(body,null)
currentBodyPosition=style.position
try{div.id=CS_LIVE_CHAT_DIV_DOM_ID,div.style.width="300px",div.style.height="30px",div.style.position="fixed",div.style.bottom="0px",div.style.zIndex=999999999,div.style.overflow="hidden",div.style.margin=0,div.style.padding=0,div.style.border=0,div.style.background="transparent",divDrag.id=CS_LIVE_CHAT_DIVDRAG_DOM_ID,divDrag.style.width="0px",divDrag.style.height="0px",divDrag.style.position="absolute",divDrag.style.top="0",divDrag.style.zIndex=999,divDrag.style.cursor="-webkit-grab",iframe.id=CS_LIVE_CHAT_IFRAME_DOM_ID,iframe.style.border="none",iframe.style.width="100%",iframe.style.height="100%",iframe.style.position="relative",iframe.style.overflow="hidden",iframe.style.margin=0,iframe.style.verticalAlign="text-bottom",iframe.style.backgroundColor="transparent",iframe.style.display="block"
var src="https://webchat.caresoft.vn:8090/getChatView?key=",username=void 0==data.username?"":data.username,color=void 0==data.color?"":data.color,language=void 0==data.language?"":data.language,email=void 0==data.email?"":data.email,phone=void 0==data.phone?"":data.phone,align=void 0==data.align?"right":"left"==data.align?"left":"right",auto=void 0==data.auto?"1":data.auto
hidePopup=hide_popup_global=void 0==data.hide?"0":data.hide
var pageTitle=""!=document.title?document.title:"",referer=document.referrer,domainId=void 0==data.domainId?"":data.domainId,inApp=void 0==data.inApp?"":data.inApp
isSPA=data.isSPA,csAlign=align
var queryString="?domain="+data.domain+"&username="+encodeURIComponent(username)+"&color="+color+"&language="+encodeURIComponent(language)+"&email="+encodeURIComponent(email)+"&phone="+encodeURIComponent(phone)+"&auto="+auto+"&hide="+hidePopup+"&pageTitle="+encodeURIComponent(pageTitle)+"&referrer="+encodeURIComponent(referer)+"&domainId="+encodeURIComponent(domainId)+"&inApp="+encodeURIComponent(inApp)
if(isMobile.any()||"left"!=align?div.style.right="10px":div.style.left="60px",iframe.src=src+encodeURIComponent(btoa(queryString)),isMobile.any()?(iframe.style.position="fixed",iframe.style.zIndex=9999999,iframe.style.bottom="35px",iframe.style.right="20px",iframe.style.width="48px",iframe.style.height="48px",2==csWidgetType&&(iframe.style.width="170px",iframe.style.height="45px"),1==csWidgetPos&&(iframe.style.left="20px",iframe.style.right=auto),document.body.appendChild(iframe)):(div.appendChild(divDrag),div.appendChild(iframe),document.body.appendChild(div)),divDrag.addEventListener("mousedown",mouseDown,!1),window.addEventListener("mouseup",mouseUp,!1),"undefined"==typeof IS_CARESOFT){console.log("Not embed in caresoft , using own message listener")
var eventMethod=window.addEventListener?"addEventListener":"attachEvent",eventer=window[eventMethod],messageEvent="attachEvent"==eventMethod?"onmessage":"message"
eventer(messageEvent,handleIframeMessage,!1)}}catch(e){iframe.parentNode.removeChild(iframe),currentBodyPosition?document.body.setAttribute("style","position:"+currentBodyPosition):document.body.setAttribute("style","position:static")}}function clearElement(){var divCs=document.getElementById(CS_LIVE_CHAT_DIV_DOM_ID)
divCs&&divCs.remove()
var ifrCs=document.getElementById(CS_LIVE_CHAT_IFRAME_DOM_ID)
ifrCs&&ifrCs.remove(),"undefined"==typeof IS_CARESOFT&&(window.removeEventListener("message",handleIframeMessage),window.removeEventListener("onmessage",handleIframeMessage)),window.removeEventListener("mousemove",divMove,!0)}function loadChatVersion2(window,document,scriptTagName,scriptAddress,globalName,scriptElement,otherScriptElement){window.CSLiveChatWidget=globalName,window[globalName]=window[globalName]||function(){(window[globalName].q=window[globalName].q||[]).push(arguments)},window[globalName].l=1*new Date,scriptElement=document.createElement(scriptTagName),otherScriptElement=document.getElementsByTagName(scriptTagName)[0],scriptElement.async=1,scriptElement.src=scriptAddress,otherScriptElement.parentNode.insertBefore(scriptElement,otherScriptElement)}function switchVersion(version){currentVersion=version,clearElement(),2==version&&(loadChatVersion2(window,document,"script","https://webchat.caresoft.vn:8091/widget/widget.min.js?v=4.0","cslw"),cslw("create",globalData))}function onURLChange(url){var csIframe=document.getElementById(CS_LIVE_CHAT_IFRAME_DOM_ID)
if(csIframe){var data={id:5,url:url}
csIframe.contentWindow.postMessage(JSON.stringify(data),"*")}}function emitEvent(action,data){evt.action=action,evt.trackingData=data,document.dispatchEvent(evt)}function handleIframeMessage(e){try{var key=e.message?"message":"data",iframe=document.getElementById(CS_LIVE_CHAT_IFRAME_DOM_ID),div=document.getElementById(CS_LIVE_CHAT_DIV_DOM_ID),divDrag=document.getElementById(CS_LIVE_CHAT_DIVDRAG_DOM_ID)
try{var data=JSON.parse(e[key])}catch(e){return}if(6==data.id)switch(data.type){case"openChatBox":isMobile.any()?(document.body.style.position="fixed",iframe.style.width="100%",iframe.style.height="100%",iframe.style.right="0px",iframe.style.left="0px",iframe.style.bottom="0px"):(div.style.width="290px",div.style.height="400px",divDrag.style.width="260px",divDrag.style.height="24px"),iframe&&(iframe.style.display="block"),div&&(div.style.display="block")
var msgifr=iframe.contentWindow
msgifr.postMessage(JSON.stringify({id:2}),"*"),data.manual&&emitEvent("open_chat",null)
break
case"closeChatBox":if(isMobile.any()){currentBodyPosition?document.body.style.position=currentBodyPosition:document.body.style.position="static",iframe.style.width="48px",iframe.style.height="48px",2==csWidgetType&&(iframe.style.width="170px",iframe.style.height="45px"),1==csWidgetPos&&(iframe.style.left="20px",iframe.style.right="auto"),2==csWidgetPos&&(iframe.style.right="20px",iframe.style.left="auto"),iframe.style.bottom="35px"
var url=window.location.href,sub=url.indexOf("http://topmat.vn")
sub>-1&&isMobile.iOS()&&($("#page").css("display","none"),setTimeout(function(){$("#page").css("display","block")},100))}else div.style.width="300px",div.style.height="30px",divDrag.style.width="0px",divDrag.style.height="0px"
break
case"closeChatBoxHide":isMobile.any()?(currentBodyPosition?document.body.style.position=currentBodyPosition:document.body.style.position="static",iframe.style.width="48px",iframe.style.height="48px",2==csWidgetType&&(iframe.style.width="170px",iframe.style.height="45px"),1==csWidgetPos&&(iframe.style.left="20px",iframe.style.right="auto"),2==csWidgetPos&&(iframe.style.right="20px",iframe.style.left="auto"),iframe.style.bottom="35px"):(div.style.width="300px",div.style.height="30px",divDrag.style.width="0px",divDrag.style.height="0px"),hidePopup&&(iframe&&(iframe.style.display="none"),div&&(div.style.display="none"))
break
case"new_mess_incoming":if(!Notification)return
"granted"!==Notification.permission?Notification.requestPermission():(newMessageNotificationChatClient=new Notification(window.location.hostname,{icon:"../images/chat-noti.png",body:data.content,tag:"new-message-incoming"}),setTimeout(function(){newMessageNotificationChatClient.close()},3e3),newMessageNotificationChatClient.onclick=function(){window.focus()})
break
case"changeWidgetType":csWidgetType=data.value,1==csWidgetType&&(iframe.style.width="48px",iframe.style.height="48px"),2==csWidgetType&&(iframe.style.width="170px",iframe.style.height="45px")
break
case"changeWidgetPosition":csWidgetPos=data.value,1==csWidgetPos&&(iframe.style.left="20px",iframe.style.right="auto"),2==csWidgetPos&&(iframe.style.right="20px",iframe.style.left="auto")
break
case"syncStorage":var chatstate=localStorage.getItem(data.value.chatState),deviceKey=localStorage.getItem(data.value.deviceKey),landingtime=sessionStorage.getItem("cs_landingtime"),csdebug=localStorage.getItem("csdebug"),data={id:3,value:{chatState:chatstate,deviceKey:deviceKey,landingtime:landingtime,csdebug:csdebug}}
iframe.contentWindow.postMessage(JSON.stringify(data),"*")
break
case"saveIfrChatState":localStorage.setItem(data.value.name,data.value.value)
break
case"saveIfrChatStateDeviceKey":localStorage.setItem(data.value.name,data.value.value)
break
case"saveLandingTime":sessionStorage.setItem(data.value.name,data.value.value)
break
case"getPageUrl":var data={id:4,url:document.location.href}
iframe.contentWindow.postMessage(JSON.stringify(data),"*")
break
case"changeVersion":switchVersion(data.version)}else 7==data.id&&emitEvent(data.type,data.data)}catch(e){"*"==localStorage.getItem("cschatdebug")&&console.error(e)}}var evt=document.createEvent("Event")
evt.initEvent("cs_widgetTracking",!0,!0)
var globalData=null,currentVersion=1,currentPageUrl=document.location.href,isSPA=!1,currentBodyPosition,hidePopup,isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPod|iPad/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}},CS_LIVE_CHAT_DIV_DOM_ID="cs-live-chat",CS_LIVE_CHAT_DIVDRAG_DOM_ID="cs-div-drag",CS_LIVE_CHAT_IFRAME_DOM_ID="cs_chat_iframe",CS_LIVE_CHAT_NOFITICATION_BADGE_DOM_ID="cs_badge",csWidgetType=1,csWidgetPos=2,csCurrentPosition=0,csAlign="right",hide_popup_global
!function(history){var pushState=history.pushState
history.pushState=function(state){return"function"==typeof history.onpushstate&&history.onpushstate({state:state}),pushState.apply(history,arguments)}}(window.history),window.onpopstate=history.onpushstate=function(e){isSPA&&(currentPageUrl=document.location.href,onURLChange(currentPageUrl),console.log("url changed: "+document.location.href))}
