!function(n){"use strict";n(".page-scroll a").bind("click",function(e){var t=n(this);n("html, body").stop().animate({scrollTop:n(t.attr("href")).offset().top-50},1250,"easeInOutExpo"),e.preventDefault()}),n("body").scrollspy({target:".navbar-fixed-top",offset:51}),n(".navbar-collapse ul li a").click(function(){n(".navbar-toggle:visible").click()}),n("#mainNav").affix({offset:{top:100}})}(jQuery),$(document).ready(function(){$(".plusminus").parent().parent().click(function(){$(this).hasClass("collapsed")?$(this).find("i").removeClass("fa-chevron-circle-right").addClass("fa-chevron-circle-down"):$(this).find("i").removeClass("fa-chevron-circle-down").addClass("fa-chevron-circle-right")}),$("#btn").click(function(){$("#fancy, #btn").fadeOut(1e3,function(){$("#bank, #btn-bk").fadeIn(1e3)})}),$("#btn-bk").click(function(){$("#bank, #btn-bk").fadeOut(500,function(){$("#fancy, #btn").fadeIn(500)})}),$("#understand").click(function(){$("#btn-bk, #bank").fadeOut(1e3,function(){$("#btn-back").fadeIn(1e3),$("#container").fadeIn(1e3)})}),$("#btn-back").click(function(){$("#container, #btn-back").fadeOut(500,function(){$("#bank, #btn-bk").fadeIn(500)})}),$("#sixteen").click(function(){$("#container, #btn-back").fadeOut(1e3,function(){$("#results, #btn-backItUp").fadeIn(1e3)})}),$("#btn-backItUp").click(function(){$("#results, #btn-backItUp").fadeOut(500,function(){$("#container, #btn-back").fadeIn(500)})}),$("#seventeen").click(function(){$("#container, #btn-back").fadeOut(1e3,function(){$("#resultss, #btn-backItUpTwo").fadeIn(1e3)})}),$("#btn-backItUpTwo").click(function(){$("#resultss, #btn-backItUpTwo").fadeOut(500,function(){$("#container, #btn-back").fadeIn(500)})}),$("#btn-backItUpThree").click(function(){$("#adult, #btn-backItUpThree").fadeOut(500,function(){$("#container, #btn-back").fadeIn(500)})}),$("#btn-backItUpFour").click(function(){$("#not_sure, #btn-backItUpFour").fadeOut(500,function(){$("#container, #btn-back").fadeIn(500)})}),$("#btn-backItUpFive").click(function(){$("#unclear, #btn-backItUpFive").fadeOut(500,function(){$("#container, #btn-back").fadeIn(500)})});var n=[{quote:"For every 1,000 juvenile arrests in Illinois only 3 are expunged.",name:"Illinois Juvenile Justice Commission"},{quote:"APPROXIMATELY 1.8 million of juvenile arrests in Illinois from 2004 – 2014",name:"Illinois Juvenile Justice Commission"},{quote:"95.5 percent of juvenile arrests are for nonviolent offenses nationwide",name:"Illinois Juvenile Justice Commission"},{quote:"0.29 percent of juvenile arrests were expunged in Illinois 2004-2014 (one-third of one percent)",name:"Illinois Juvenile Justice Commission"},{quote:"87 percent of counties in Illinois averaged less than one juvenile expungement per year from 2004-2014",name:"Illinois Juvenile Justice Commission"},{quote:"Weak Confidentiality Protections for Juvenile Records in Illinois Create Obstacles to Rehabilitation and Threaten Public Safety.",name:"Illinois Juvenile Justice Commission"},{quote:"Over 25,000 kids are arrested in Cook County each year.",name:"Mikva Challenge Juvenile Justice Council"}];$("#quoteButton").click(function(e){function t(){$("#tweetQuote").attr("href","https://twitter.com/intent/tweet?text='"+c+"' - "+u).attr("target","_blank")}$("#quoteContainerr p").text(),$("#quoteGenius").text();e.preventDefault();var a=n.length,o=Math.floor(Math.random()*a);for(i=0;i<=a;i+=1){var c=n[o].quote,u=n[o].name,l=600,r=$("#quoteContainerr");r.fadeOut(l,function(){r.html(""),r.append("<p>"+c+'</p><p id="quoteGenius">-'+u+"</p>"),r.fadeIn(l)}),t();break}})});

var show = function(){
    $('#overlay').modal('show');
};
$(window).load(function(){
    var timer = window.setTimeout(show,2000);
});
/*setTimeout(function() {
    $('#overlay').modal('hide');
}, 5000);*/