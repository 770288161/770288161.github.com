/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-03 08:54:12
 * @version $Id$
 */

$(document).ready(function(){
	$(".F-ui-bigimg").css("background-image", "url(text/32.png)");
	$(".F-ui-bigimg").hide();
        $(".F-ui-header-left").click(function(){
          $(".F-ui-bigimg").show();
      });

         $(".F-ui-bigimg").click(function(){
         		$(this).hide();
         });

	$(".S-ui-header-left").click(function(){
	    $(".S-ui-footer-left").text("1");
	    $(".S-ui-header-left").css('background-color', '#c0c0c0');
	    $(".S-ui-header-middle").css('background-color', '#ffffff');
	    $(".S-ui-header-right").css('background-color', '#ffffff');
    });
    $(".S-ui-header-middle").click(function(){
	    $(".S-ui-footer-left").text("2");
	    $(".S-ui-header-middle").css('background-color', '#c0c0c0');
	    $(".S-ui-header-right").css('background-color', '#ffffff');
	    $(".S-ui-header-left").css('background-color', '#ffffff');
    });
    $(".S-ui-header-right").click(function(){
	    $(".S-ui-footer-left").text("3");
	    $(".S-ui-header-right").css('background-color', '#c0c0c0');
	    $(".S-ui-header-left").css('background-color', '#ffffff');
	    $(".S-ui-header-middle").css('background-color', '#ffffff');
    });

	$(".ui-footer").click(function(){
		$("ol li:last").after($("li:eq(4)").clone(true));
	});
	$(".rightBorder").click(function(){
		$("ol li:last").remove();
	})
 });