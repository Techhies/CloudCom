ace.define("ace/mode/doc_comment_highlight_rules",[],function(e,t,n){"use strict";var i=e("../lib/oop");var r=e("./text_highlight_rules").TextHighlightRules;var o=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},o.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:true}]}};i.inherits(o,r);o.getTagRule=function(e){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}};o.getStartRule=function(e){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:e}};o.getEndRule=function(e){return{token:"comment.doc",regex:"\\*\\/",next:e}};t.DocCommentHighlightRules=o});ace.define("ace/mode/haxe_highlight_rules",[],function(e,t,n){"use strict";var i=e("../lib/oop");var r=e("./doc_comment_highlight_rules").DocCommentHighlightRules;var o=e("./text_highlight_rules").TextHighlightRules;var a=function(){var e="break|case|cast|catch|class|continue|default|else|enum|extends|for|function|if|implements|import|in|inline|interface|new|override|package|private|public|return|static|super|switch|this|throw|trace|try|typedef|untyped|var|while|Array|Void|Bool|Int|UInt|Float|Dynamic|String|List|Hash|IntHash|Error|Unknown|Type|Std";var t="null|true|false";var n=this.createKeywordMapper({"variable.language":"this",keyword:e,"constant.language":t},"identifier");this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},r.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:"comment"},{token:"string.regexp",regex:"[/](?:(?:\\[(?:\\\\]|[^\\]])+\\])|(?:\\\\/|[^\\]/]))*[/]\\w*\\s*(?=[).,;]|$)"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:n,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)"},{token:"punctuation.operator",regex:"\\?|\\:|\\,|\\;|\\."},{token:"paren.lparen",regex:"[[({<]"},{token:"paren.rparen",regex:"[\\])}>]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}]};this.embedRules(r,"doc-",[r.getEndRule("start")])};i.inherits(a,o);t.HaxeHighlightRules=a});ace.define("ace/mode/matching_brace_outdent",[],function(e,t,n){"use strict";var i=e("../range").Range;var r=function(){};(function(){this.checkOutdent=function(e,t){if(!/^\s+$/.test(e))return false;return/^\s*\}/.test(t)};this.autoOutdent=function(e,t){var n=e.getLine(t);var r=n.match(/^(\s*\})/);if(!r)return 0;var o=r[1].length;var a=e.findMatchingBracket({row:t,column:o});if(!a||a.row==t)return 0;var s=this.$getIndent(e.getLine(a.row));e.replace(new i(t,0,t,o-1),s)};this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(r.prototype);t.MatchingBraceOutdent=r});ace.define("ace/mode/folding/cstyle",[],function(e,t,n){"use strict";var i=e("../../lib/oop");var r=e("../../range").Range;var o=e("./fold_mode").FoldMode;var a=t.FoldMode=function(e){if(e){this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start));this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end))}};i.inherits(a,o);(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/;this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/;this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/;this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/;this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/;this._getFoldWidgetBase=this.getFoldWidget;this.getFoldWidget=function(e,t,n){var i=e.getLine(n);if(this.singleLineBlockCommentRe.test(i)){if(!this.startRegionRe.test(i)&&!this.tripleStarBlockCommentRe.test(i))return""}var r=this._getFoldWidgetBase(e,t,n);if(!r&&this.startRegionRe.test(i))return"start";return r};this.getFoldWidgetRange=function(e,t,n,i){var r=e.getLine(n);if(this.startRegionRe.test(r))return this.getCommentRegionBlock(e,r,n);var o=r.match(this.foldingStartMarker);if(o){var a=o.index;if(o[1])return this.openingBracketBlock(e,o[1],n,a);var s=e.getCommentFoldRange(n,a+o[0].length,1);if(s&&!s.isMultiLine()){if(i){s=this.getSectionRange(e,n)}else if(t!="all")s=null}return s}if(t==="markbegin")return;var o=r.match(this.foldingStopMarker);if(o){var a=o.index+o[0].length;if(o[1])return this.closingBracketBlock(e,o[1],n,a);return e.getCommentFoldRange(n,a,-1)}};this.getSectionRange=function(e,t){var n=e.getLine(t);var i=n.search(/\S/);var o=t;var a=n.length;t=t+1;var s=t;var g=e.getLength();while(++t<g){n=e.getLine(t);var c=n.search(/\S/);if(c===-1)continue;if(i>c)break;var l=this.getFoldWidgetRange(e,"all",t);if(l){if(l.start.row<=o){break}else if(l.isMultiLine()){t=l.end.row}else if(i==c){break}}s=t}return new r(o,a,s,e.getLine(s).length)};this.getCommentRegionBlock=function(e,t,n){var i=t.search(/\s*$/);var o=e.getLength();var a=n;var s=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;var g=1;while(++n<o){t=e.getLine(n);var c=s.exec(t);if(!c)continue;if(c[1])g--;else g++;if(!g)break}var l=n;if(l>a){return new r(a,i,l,t.length)}}}).call(a.prototype)});ace.define("ace/mode/haxe",[],function(e,t,n){"use strict";var i=e("../lib/oop");var r=e("./text").Mode;var o=e("./haxe_highlight_rules").HaxeHighlightRules;var a=e("./matching_brace_outdent").MatchingBraceOutdent;var s=e("./behaviour/cstyle").CstyleBehaviour;var g=e("./folding/cstyle").FoldMode;var c=function(){this.HighlightRules=o;this.$outdent=new a;this.$behaviour=new s;this.foldingRules=new g};i.inherits(c,r);(function(){this.lineCommentStart="//";this.blockComment={start:"/*",end:"*/"};this.getNextLineIndent=function(e,t,n){var i=this.$getIndent(t);var r=this.getTokenizer().getLineTokens(t,e);var o=r.tokens;if(o.length&&o[o.length-1].type=="comment"){return i}if(e=="start"){var a=t.match(/^.*[\{\(\[]\s*$/);if(a){i+=n}}return i};this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)};this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)};this.$id="ace/mode/haxe"}).call(c.prototype);t.Mode=c});(function(){ace.require(["ace/mode/haxe"],function(e){if(typeof module=="object"&&typeof exports=="object"&&module){module.exports=e}})})();
//# sourceMappingURL=mode-haxe.js.map