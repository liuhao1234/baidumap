;(function($){
	/** integer **/
	$.fn.bootstrapValidator.i18n.integer = $.extend($.fn.bootstrapValidator.i18n.integer||{},{
		"default": "请输入整数。"
	});
	$.fn.bootstrapValidator.validators.integer = {
		validate: function(validator, $field, options) {  
			var val = $field.val();  
			if(val === ""){ return true; }
			var reg = /^-?\d+$/;
			return reg.test(val);
		}
	};
	/** price **/
	$.fn.bootstrapValidator.i18n.price = $.extend($.fn.bootstrapValidator.i18n.price||{},{
		"default": "请输入有效的金额数。"
	});
	$.fn.bootstrapValidator.validators.price = {
		validate: function(validator, $field, options) {  
			var val = $field.val();  
			if(val === ""){ return true; }
			var reg = /^\d+(\.\d+)?$/;
			return reg.test(val);
		}
	};
	/** chinese **/
	$.fn.bootstrapValidator.i18n.chinese = $.extend($.fn.bootstrapValidator.i18n.chinese||{},{
		"default": "请输入中文"
	});
	$.fn.bootstrapValidator.validators.chinese = {
		validate: function(validator, $field, options) {  
			var val = $field.val();  
			if(val === ""){ return true; }
			var reg = /^[\u4e00-\u9fa5]+$/;
			return reg.test(val);
		}
	};
	/** text **/
	$.fn.bootstrapValidator.i18n.text = $.extend($.fn.bootstrapValidator.i18n.text||{},{
		"default": "请输入中文、英文字母、数字、下划线或横线。"
	});
	$.fn.bootstrapValidator.validators.text = {
		validate: function(validator, $field, options) {  
			var val = $field.val();  
			if(val === ""){ return true; }
			var reg = /^[a-zA-Z0-9_\-\u4e00-\u9fa5]+$/;
			return reg.test(val);
		}
	};
	/** name **/
	$.fn.bootstrapValidator.i18n.name = $.extend($.fn.bootstrapValidator.i18n.name||{},{
		"default": "请输入中文、字母、数字,并以中文或字母开头。"
	});
	$.fn.bootstrapValidator.validators.name = {
		validate: function(validator, $field, options) {  
			var val = $field.val();  
			if(val === ""){ return true; }
			var reg = /^[a-zA-Z\u4e00-\u9fa5][a-zA-Z0-9\u4e00-\u9fa5]*$/;
			return reg.test(val);
		}
	};
	/** char **/
	$.fn.bootstrapValidator.i18n.char = $.extend($.fn.bootstrapValidator.i18n.text||{},{
		"default": "请输入英文字母、数字、下划线或横线。"
	});
	$.fn.bootstrapValidator.validators.char = {
		validate: function(validator, $field, options) {  
			var val = $field.val();  
			if(val === ""){ return true; }
			var reg = /^[a-zA-Z0-9_\-]+$/;
			return reg.test(val);
		}
	};
	
	//原有 stringLength
	/** charLength **/
	$.fn.bootstrapValidator.i18n.charLength = $.extend($.fn.bootstrapValidator.i18n.charLength||{},{
		"default": "请输入长度符合规范的字符。"
	});
	$.fn.bootstrapValidator.validators.charLength = {
		validate: function(validator, $field, options) {
			//options min max message chineseLen
			var val = $field.val();
			if(!options){ options = {}; }
			var len = _charLength(val, options.chineseLen);
			if(options.min && options.min>0){
				if(len < options.min){ return false; }
			}
			if(options.max && options.max>0){
				if(len > options.max){ return false; }
			}
			return true;
		}
	};
	
	/**
	 * 字符长度，处理中文
	 * utf-8以三个字节存储中文；gbk以二个字节存储中文。
	 */
	function _charLength(str, chineseLen) {
		if(!str || str.length<=0 ){ return 0; };
		//str = mytrim(str);
		var chineseLength = 3; //utf-8编码，中文长度
		if(chineseLen && chineseLen > 0){
			chineseLength = chineseLen
		}
		var objValue = str;
		var objLength = 0;
		var compareChar = "";
		var regExp = new RegExp("^[A-Za-z0-9 -_`~!@#$%^&*()-+=|,<.>/?;:'\\\"]$");
		for (var count = 0; count<objValue.length; count++){
			compareChar = objValue.substring(count, count+1);
			if(regExp.test(compareChar)){
				objLength += 1;
			} else if("\\"==compareChar){
				objLength += 1;
			} else{
				objLength += chineseLength;
			}
		}
		return objLength;
	}

}(window.jQuery));


