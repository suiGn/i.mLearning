"use strict";
$(document).ready(function () {
	$(".newsticker").newsTicker({
		row_height: 64,
		max_rows: 1,
		direction: "down"
	}),
	$("#sp-visitors").sparkline([191, 250, 332, 192, 420, 343, 301, 438, 177, 491], {
		type: "line",
		width: "230",
		height: "60",
		lineColor: "#03A9F4",
		fillColor: !1,
		lineWidth: 2,
		spotColor: "#03A9F4",
		minSpotColor: "#03A9F4",
		maxSpotColor: "#03A9F4",
		highlightSpotColor: "#F9CE1D",
		highlightLineColor: "#F9CE1D",
		spotRadius: 4
	}),
	$("#sp-revenue").sparkline([741, 901, 758, 776, 897, 801, 633, 801, 722, 773], {
		type: "line",
		width: "230",
		height: "60",
		lineColor: "#03A9F4",
		fillColor: !1,
		lineWidth: 2,
		spotColor: "#03A9F4",
		minSpotColor: "#03A9F4",
		maxSpotColor: "#03A9F4",
		highlightSpotColor: "#F9CE1D",
		highlightLineColor: "#F9CE1D",
		spotRadius: 4
	});
	var t = $(".conversation").height() - $("#chat-with").height() - parseInt($("#chat-with").css("margin-bottom")) - parseInt($(".chat-content").css("margin-bottom")) - $("#chat-input").height();
	$(".chat-content").height(t);
	var o = $(".right-sidebar").height() - $("#chat-title").height() - parseInt($("#chat-title").css("margin-bottom")) - $("#chat-search").height() - parseInt($("#chat-search").css("margin-bottom"));
	$(".chat-list").height(o),
	$(".chat-list").mCustomScrollbar({
		autoHideScrollbar: !0,
		theme: "dark-thin",
		scrollbarPosition: "outside",
		mouseWheel: {
			scrollAmount: 250
		}
	}),
	$(".chat-content").mCustomScrollbar({
		autoHideScrollbar: !0,
		theme: "dark-thin",
		scrollbarPosition: "outside",
		mouseWheel: {
			scrollAmount: 250
		}
	}),
	$("#compose-mail").summernote({
		height: 200,
		toolbar: [["style", ["style"]], ["font", ["bold", "italic", "underline", "clear"]], ["fontname", ["fontname"]], ["fontsize", ["fontsize"]], ["color", ["color"]], ["para", ["ul", "ol", "paragraph"]], ["height", ["height"]], ["table", ["table"]], ["insert", ["link", "picture", "hr"]], ["view", ["fullscreen"]]]
	})
});