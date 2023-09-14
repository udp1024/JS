/*jshint esversion: 6 */
$(document).ready(function(){
    var LinkUrl = $("td.ms-stylebox > table > tbody > tr:nth-child(1) > td.ms-stylebody > a");
    var LinkUrlHref = LinkUrl[0].href;
    $("td.ms-stylebox > table > tbody > tr:nth-child(1) > td.ms-stylebody > a").css("display","none");
	//$("td.ms-stylebox > table > tbody > tr:nth-child(2) > td.ms-stylebody > img").css({"width":"700px", "height":"840px"});
	$("td.ms-stylebox > table > tbody > tr:nth-child(2) > td.ms-stylebody > img").css({"max-width":"95%", "width":"auto", "height":"auto"});
	$("td.ms-stylebox > table > tbody > tr:nth-child(2) > td.ms-stylebody > img").wrap($('<a>',{ href: LinkUrlHref }));
	$(".ms-vh2").css("display","none");
});
