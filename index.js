(function()
{
	"use strict";
	
	
	
	// Copied from http://www.w3schools.com/tags/ref_eventattributes.asp
	var html = 
	{
		// Window Event Attributes
		onafterprint: true,
		onbeforeprint: true,
		onbeforeunload: true,
		onerror: true,
		onhashchange: true,
		onload: true,
		onmessage: true,
		onoffline: true,
		ononline: true,
		onpagehide: true,
		onpageshow: true,
		onpopstate: true,
		onresize: true,
		onstorage: true,
		onunload: true,
		
		// Form Events
		onblur: true,
		onchange: true,
		oncontextmenu: true,
		onfocus: true,
		oninput: true,
		oninvalid: true,
		onreset: true,
		onsearch: true,
		onselect: true,
		onsubmit: true,
		
		// Keyboard Events
		onkeydown: true,
		onkeypress: true,
		onkeyup: true,
		
		// Mouse Events
		onclick: true,
		ondblclick: true,
		ondrag: true,
		ondragend: true,
		ondragenter: true,
		ondragleave: true,
		ondragover: true,
		ondragstart: true,
		ondrop: true,
		onmousedown: true,
		onmousemove: true,
		onmouseout: true,
		onmouseover: true,
		onmouseup: true,
		onmousewheel: true,
		onscroll: true,
		onwheel: true,
		
		// Clipboard Events
		oncopy: true,
		oncut: true,
		onpaste: true,
		
		// Media Events
		onabort: true,
		oncanplay: true,
		oncanplaythrough: true,
		oncuechange: true,
		ondurationchange: true,
		onemptied: true,
		onended: true,
		//onerror: true,
		onloadeddata: true,
		onloadedmetadata: true,
		onloadstart: true,
		onpause: true,
		onplay: true,
		onplaying: true,
		onprogress: true,
		onratechange: true,
		onseeked: true,
		onseeking: true,
		onstalled: true,
		onsuspend: true,
		ontimeupdate: true,
		onvolumechange: true,
		onwaiting: true,
		
		// Misc Events
		//onerror: true,
		onshow: true,
		ontoggle: true
	};
	
	
	
	// Copied from http://www.w3.org/TR/SVG/script.html#EventAttributes
	var svg = 
	{
		// 18.4.1 Event attribute for the SVGLoad event
		onload: true,
		
		// 18.4.2 Event attributes on graphics and container elements
		onfocusin: true,
		onfocusout: true,
		onactivate: true,
		onclick: true,
		onmousedown: true,
		onmouseup: true,
		onmouseover: true,
		onmousemove: true,
		onmouseout: true,
		
		// 18.4.3 Document-level event attributes
		onunload: true,
		onabort: true,
		onerror: true,
		onresize: true,
		onscroll: true,
		onzoom: true,
		
		// 18.4.4 Animation event attributes
		onbegin: true,
		onend: true,
		onrepeat: true
	};
	
	
	
	var eventAttributes = 
	{
		html: html,
		svg: svg
	};
	
	
	
	if (typeof module==="object" && typeof module.exports==="object")
	{
		module.exports = eventAttributes;
	}
	else if (typeof define==="function" && define.amd)
	{
		define("event-attributes", [], function(){ return eventAttributes });
	}
	else
	{
		window.eventAttributes = eventAttributes;
	}
})();
