this["QuizCore"] = this["QuizCore"] || {};
this["QuizCore"]["templates"] = this["QuizCore"]["templates"] || {};

this["QuizCore"]["templates"]["question-template"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section class=\"quiz-step question\">\r\n	<h2>"
    + alias4(((helper = (helper = helpers.question || (depth0 != null ? depth0.question : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "</h2>\r\n	<div class=\"responses "
    + alias4(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"style","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.answers : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "	</div>\r\n</section> \r\n";
},"2":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "			<input data-index=\""
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" type=\"radio\" name=\"q"
    + alias4(alias5(blockParams[1][1], depth0))
    + "\" id=\"q"
    + alias4(alias5(blockParams[1][1], depth0))
    + "-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\">\r\n			<label for=\"q"
    + alias4(alias5(blockParams[1][1], depth0))
    + "-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\">\r\n				<span class=\"answer-text\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = blockParams[1][0]) != null ? stack1.icons : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "					"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\r\n				</span>\r\n			</label>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "						<img src='dist/assets/"
    + container.escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"text","hash":{},"data":data}) : helper)))
    + ".svg'/>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.questions : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"useData":true,"useBlockParams":true});

this["QuizCore"]["templates"]["results-template"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section class=\"results\">\r\n	<div class=\"results-header\">  \r\n		<h3>You should try:</h3>     \r\n		<h2 class=\"bold-text\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>  \r\n	</div> \r\n	<div class=\"col2 col-left\">   \r\n		<img src=\""
    + alias4(((helper = (helper = helpers.img_src || (depth0 != null ? depth0.img_src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img_src","hash":{},"data":data}) : helper)))
    + "\"/>   \r\n	</div>  \r\n	<div class=\"col2 col-right\">\r\n		<p class=\"description\">"
    + alias4(((helper = (helper = helpers.desc || (depth0 != null ? depth0.desc : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"desc","hash":{},"data":data}) : helper)))
    + "</p>\r\n		<p class=\"lfloat\">Duration: <span class=\"bold-text\">"
    + alias4(((helper = (helper = helpers.duration || (depth0 != null ? depth0.duration : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"duration","hash":{},"data":data}) : helper)))
    + "</span>\r\n			<a class=\"info-link bold-text\" href=\""
    + alias4(((helper = (helper = helpers.infolink || (depth0 != null ? depth0.infolink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"infolink","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">More Info</a>\r\n		</p>\r\n		<div class=\"image-wrapper\">\r\n			<span class=\"location-indicator\" style=\"left:"
    + alias4(((helper = (helper = helpers.leftpos || (depth0 != null ? depth0.leftpos : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"leftpos","hash":{},"data":data}) : helper)))
    + "; top:"
    + alias4(((helper = (helper = helpers.toppos || (depth0 != null ? depth0.toppos : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"toppos","hash":{},"data":data}) : helper)))
    + "\"></span> \r\n			<img src=\"dist/assets/nz_outline_dark.svg\" width=\"108px\"/>\r\n		</div>\r\n	</div>\r\n</section>\r\n";
},"useData":true});