"use strict";function setActiveBars(i){$("#progress-nav").show(),$(".twr-quick-view").hide(),$(".progress > .progress-item").each(function(e){console.log(e+": "+$(this)),i>e?$(this).addClass("active"):$(this).removeClass("active")})}function playSlide0(){console.log("playSlide0"),$("#progress-nav").hide(),$("#yuan-welcome").velocity({opacity:[1,0,"linear"],"margin-top":["0","100px"]},{delay:0,duration:1e3}),$(".description-box").velocity({opacity:[1,0,"linear"]},{delay:0,duration:1500})}function playSlide1(){console.log("playSlide1"),setActiveBars(1)}function playSlide2(){console.log("playSlide2"),setActiveBars(2)}function playSlide3(){console.log("playSlide3"),setActiveBars(3)}function playSlide4(){console.log("playSlide4"),setActiveBars(4)}function showDialogAnimation(i,e,s){$(".twr-quick-view").show();var l=$(e).offset();i.css({top:l.top,left:l.left,width:$(e).width(),visibility:"visible"}).velocity({width:"100%",left:0,top:"5.5em"},800,"ease",s).addClass("is-visible")}function showSlide1Dialog(i,e){$("#slide1-quickview .title").html(e),showDialogAnimation($(".twr-quick-view"),i,function(){})}function showSlide2Dialog(i,e){switch(e){case"B":$("#slide2-quickview .title").html("<p>所有藍黨立委已經在上週開過黨團會議，會中決議支持藍黨的賴小葆為立法院長。</p>"),$("#slide2-quickview .middle-pic").attr({src:"images/decision-blue.svg"}),sParty="B";break;case"Y":$("#slide2-quickview .title").html("<p>所有黃黨立委已經在上週開過黨團會議，由於黃黨無人表達角逐院長意願，會中決議一致支持綠黨的蘇小全為立法院長。</p>"),$("#slide2-quickview .middle-pic").attr({src:"images/decision-green.svg"}),sParty="Y";break;case"G":$("#slide2-quickview .title").html("<p>所有綠黨立委已經在上週開過黨團會議，會中決議支持綠黨的蘇小全為立法院長。</p>"),$("#slide2-quickview .middle-pic").attr({src:"images/decision-green.svg"}),sParty="G";break;case"O":$("#slide2-quickview .title").html("<p>所有橘黨立委已經在上週開過黨團會議，由於橘黨無人表達角逐院長意願，會中決議開放黨籍立委自主投票。</p>"),$("#slide2-quickview .middle-pic").attr({src:"images/decision-orange.svg"}),sParty="O"}showDialogAnimation($(".twr-quick-view"),i,function(){})}function voteSlide3(i){sPerson=i,playSlide4(),location.hash="#slide4"}function showSlide4Dialog(i,e){var s=!1;console.log(e,sParty,sPerson),"S"!==e||"O"!==sParty&&sPerson!==sParty||(s=!0),s?($("#result-success").show(),$("#result-fail").hide()):($("#result-success").hide(),$("#result-fail").show()),showDialogAnimation($(".twr-quick-view"),i,function(){})}function scrollToInfoBox(i){$(".info-box").velocity("scroll",{container:$(i),duration:300,easing:"easeInOutSine"})}var sParty=null,sPerson=null;$(document).ready(function(){var i=window.location.hash.replace(/#/,"");switch(i){case"slide1":playSlide1();break;case"slide2":playSlide2();break;case"slide3":playSlide3();break;case"slide4":playSlide4();break;default:playSlide0()}});