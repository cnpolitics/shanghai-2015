$(function(){FastClick.attach(document.body)}),$("button, a").on("touchstart",function(){$(this).addClass("pressing"),$("button, a").on("touchend",function(){$(this).removeClass("pressing")})}),function(){"use strict";function e(e){$(e.target).children(".card").css("overflow-y","hidden"),setTimeout(function(){$(e.target).children(".card").css("overflow-y","")},0)}$(".event-1 header").click(function(){$(".event-1").hasClass("active")?($(".event-1, .events-wrap").removeClass("active"),$(".card-wrap.center").removeClass("center")):($(".events-wrap").hasClass("active")&&($(".card-wrap.active").removeClass("active"),$(".card-wrap.center").removeClass("center")),$(".event-1, .events-wrap").addClass("active"),$(".event-2").addClass("center"))}),$(".event-2 header").click(function(){$(".event-2").hasClass("active")?($(".event-2, .events-wrap").removeClass("active"),$(".card-wrap.center").removeClass("center")):($(".events-wrap").hasClass("active")&&($(".card-wrap.active").removeClass("active"),$(".card-wrap.center").removeClass("center")),$(".event-2, .events-wrap").addClass("active"),$(".event-1").addClass("center"))}),$(".event-3 header").click(function(){$(".event-3").hasClass("active")?($(".event-3, .events-wrap").removeClass("active"),$(".card-wrap.center").removeClass("center")):($(".events-wrap").hasClass("active")&&($(".card-wrap.active").removeClass("active"),$(".card-wrap.center").removeClass("center")),$(".event-3, .events-wrap").addClass("active"),$(".event-1").addClass("center"))}),$(".card-wrap").on("transitionend webkitTransitionEnd",e)}();