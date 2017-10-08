// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('instaparse.print');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
instaparse.print.paren_for_tags = (function instaparse$print$paren_for_tags(tag_set,hidden_QMARK_,parser){
if(cljs.core.truth_((function (){var and__7633__auto__ = cljs.core.not(hidden_QMARK_);
if(and__7633__auto__){
var G__13936 = (function (){var G__13937 = cljs.core.cst$kw$tag;
return (parser.cljs$core$IFn$_invoke$arity$1 ? parser.cljs$core$IFn$_invoke$arity$1(G__13937) : parser.call(null,G__13937));
})();
return (tag_set.cljs$core$IFn$_invoke$arity$1 ? tag_set.cljs$core$IFn$_invoke$arity$1(G__13936) : tag_set.call(null,G__13936));
} else {
return and__7633__auto__;
}
})())){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2(parser,false) : instaparse.print.combinators__GT_str.call(null,parser,false))),")"].join('');
} else {
return (instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2(parser,false) : instaparse.print.combinators__GT_str.call(null,parser,false));
}
});
instaparse.print.paren_for_compound = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse.print.paren_for_tags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cat,null,cljs.core.cst$kw$ord,null,cljs.core.cst$kw$alt,null], null), null));
/**
 * Replaces whitespace characters with escape sequences for better printing
 */
instaparse.print.regexp_replace = (function instaparse$print$regexp_replace(s){
var G__13938 = s;
switch (G__13938) {
case "\n":
return "\\n";

break;
case "\b":
return "\\b";

break;
case "\f":
return "\\f";

break;
case "\r":
return "\\r";

break;
case "\t":
return "\\t";

break;
default:
return s;

}
});
instaparse.print.regexp__GT_str = (function instaparse$print$regexp__GT_str(r){
return clojure.string.replace(["#\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(r.source,(1))),"\""].join(''),/[\s]/,instaparse.print.regexp_replace);
});
instaparse.print.number__GT_hex_padded = (function instaparse$print$number__GT_hex_padded(n){
if((n <= (4095))){
return ["0000",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n.toString((16)))].join('').substr((-4));
} else {
return n.toString((16));
}
});

instaparse.print.char_range__GT_str = (function instaparse$print$char_range__GT_str(p__13940){
var map__13941 = p__13940;
var map__13941__$1 = ((((!((map__13941 == null)))?((((map__13941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13941.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13941):map__13941);
var lo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13941__$1,cljs.core.cst$kw$lo);
var hi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13941__$1,cljs.core.cst$kw$hi);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lo,hi)){
return ["%x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.number__GT_hex_padded(lo))].join('');
} else {
return ["%x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.number__GT_hex_padded(lo)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.number__GT_hex_padded(hi))].join('');
}
});
/**
 * Stringifies a parser built from combinators
 */
instaparse.print.combinators__GT_str = (function instaparse$print$combinators__GT_str(var_args){
var G__13944 = arguments.length;
switch (G__13944) {
case 1:
return instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$1 = (function (p){
return instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2(p,false);
});

instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2 = (function (p__13945,hidden_QMARK_){
var map__13946 = p__13945;
var map__13946__$1 = ((((!((map__13946 == null)))?((((map__13946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13946.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13946):map__13946);
var p = map__13946__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13946__$1,cljs.core.cst$kw$parser);
var parser1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13946__$1,cljs.core.cst$kw$parser1);
var parser2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13946__$1,cljs.core.cst$kw$parser2);
var parsers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13946__$1,cljs.core.cst$kw$parsers);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13946__$1,cljs.core.cst$kw$tag);
if(cljs.core.truth_((function (){var and__7633__auto__ = cljs.core.not(hidden_QMARK_);
if(and__7633__auto__){
return cljs.core.cst$kw$hide.cljs$core$IFn$_invoke$arity$1(p);
} else {
return and__7633__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2(p,true)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(">")].join('');
} else {
var G__13948 = tag;
var G__13948__$1 = (((G__13948 instanceof cljs.core.Keyword))?G__13948.fqn:null);
switch (G__13948__$1) {
case "epsilon":
return "\u03B5";

break;
case "opt":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(hidden_QMARK_,parser) : instaparse.print.paren_for_compound.call(null,hidden_QMARK_,parser))),"?"].join('');

break;
case "plus":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(hidden_QMARK_,parser) : instaparse.print.paren_for_compound.call(null,hidden_QMARK_,parser))),"+"].join('');

break;
case "star":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(hidden_QMARK_,parser) : instaparse.print.paren_for_compound.call(null,hidden_QMARK_,parser))),"*"].join('');

break;
case "rep":
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1(p))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(hidden_QMARK_,parser) : instaparse.print.paren_for_compound.call(null,hidden_QMARK_,parser))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("{"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(","),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1(p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("}")].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(hidden_QMARK_,parser) : instaparse.print.paren_for_compound.call(null,hidden_QMARK_,parser))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("{"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("}")].join('');
}

break;
case "alt":
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(instaparse.print.paren_for_tags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ord,null], null), null),hidden_QMARK_),parsers));

break;
case "ord":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_tags(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$alt,null], null), null),hidden_QMARK_,parser1))," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_tags(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$alt,null], null), null),hidden_QMARK_,parser2))].join('');

break;
case "cat":
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(instaparse.print.paren_for_tags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ord,null,cljs.core.cst$kw$alt,null], null), null),hidden_QMARK_),parsers));

break;
case "string":
var sb__8672__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_13949_13955 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_13950_13956 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_13949_13955,_STAR_print_fn_STAR_13950_13956,sb__8672__auto__,G__13948,G__13948__$1,map__13946,map__13946__$1,p,parser,parser1,parser2,parsers,tag){
return (function (x__8673__auto__){
return sb__8672__auto__.append(x__8673__auto__);
});})(_STAR_print_newline_STAR_13949_13955,_STAR_print_fn_STAR_13950_13956,sb__8672__auto__,G__13948,G__13948__$1,map__13946,map__13946__$1,p,parser,parser1,parser2,parsers,tag))
;

try{cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(p)], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13950_13956;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_13949_13955;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8672__auto__)].join('');

break;
case "string-ci":
var sb__8672__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_13951_13957 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_13952_13958 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_13951_13957,_STAR_print_fn_STAR_13952_13958,sb__8672__auto__,G__13948,G__13948__$1,map__13946,map__13946__$1,p,parser,parser1,parser2,parsers,tag){
return (function (x__8673__auto__){
return sb__8672__auto__.append(x__8673__auto__);
});})(_STAR_print_newline_STAR_13951_13957,_STAR_print_fn_STAR_13952_13958,sb__8672__auto__,G__13948,G__13948__$1,map__13946,map__13946__$1,p,parser,parser1,parser2,parsers,tag))
;

try{cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(p)], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13952_13958;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_13951_13957;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8672__auto__)].join('');

break;
case "char":
return instaparse.print.char_range__GT_str(p);

break;
case "regexp":
return instaparse.print.regexp__GT_str(cljs.core.cst$kw$regexp.cljs$core$IFn$_invoke$arity$1(p));

break;
case "nt":
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$keyword.cljs$core$IFn$_invoke$arity$1(p))].join(''),(1));

break;
case "look":
return ["&",cljs.core.str.cljs$core$IFn$_invoke$arity$1((instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(hidden_QMARK_,parser) : instaparse.print.paren_for_compound.call(null,hidden_QMARK_,parser)))].join('');

break;
case "neg":
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(hidden_QMARK_,parser) : instaparse.print.paren_for_compound.call(null,hidden_QMARK_,parser)))].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13948__$1)].join('')));

}
}
});

instaparse.print.combinators__GT_str.cljs$lang$maxFixedArity = 2;

/**
 * Takes a non-terminal symbol and a parser built from combinators,
 * and returns a string for the rule.
 */
instaparse.print.rule__GT_str = (function instaparse$print$rule__GT_str(non_terminal,parser){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reduction_DASH_type.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1(parser)),cljs.core.cst$kw$raw)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(non_terminal)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(">")," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$1(parser))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(non_terminal))," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$1(parser))].join('');
}
});
/**
 * Takes a Parser object, i.e., something with a grammar map and a start 
 * production keyword, and stringifies it.
 */
instaparse.print.Parser__GT_str = (function instaparse$print$Parser__GT_str(p__13959){
var map__13960 = p__13959;
var map__13960__$1 = ((((!((map__13960 == null)))?((((map__13960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13960.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13960):map__13960);
var grammar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13960__$1,cljs.core.cst$kw$grammar);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13960__$1,cljs.core.cst$kw$start_DASH_production);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cons(instaparse.print.rule__GT_str(start,(grammar.cljs$core$IFn$_invoke$arity$1 ? grammar.cljs$core$IFn$_invoke$arity$1(start) : grammar.call(null,start))),(function (){var iter__8453__auto__ = ((function (map__13960,map__13960__$1,grammar,start){
return (function instaparse$print$Parser__GT_str_$_iter__13962(s__13963){
return (new cljs.core.LazySeq(null,((function (map__13960,map__13960__$1,grammar,start){
return (function (){
var s__13963__$1 = s__13963;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13963__$1);
if(temp__4657__auto__){
var s__13963__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13963__$2)){
var c__8451__auto__ = cljs.core.chunk_first(s__13963__$2);
var size__8452__auto__ = cljs.core.count(c__8451__auto__);
var b__13965 = cljs.core.chunk_buffer(size__8452__auto__);
if((function (){var i__13964 = (0);
while(true){
if((i__13964 < size__8452__auto__)){
var vec__13966 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8451__auto__,i__13964);
var non_terminal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13966,(0),null);
var parser = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13966,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(non_terminal,start)){
cljs.core.chunk_append(b__13965,instaparse.print.rule__GT_str(non_terminal,parser));

var G__13972 = (i__13964 + (1));
i__13964 = G__13972;
continue;
} else {
var G__13973 = (i__13964 + (1));
i__13964 = G__13973;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13965),instaparse$print$Parser__GT_str_$_iter__13962(cljs.core.chunk_rest(s__13963__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13965),null);
}
} else {
var vec__13969 = cljs.core.first(s__13963__$2);
var non_terminal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13969,(0),null);
var parser = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13969,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(non_terminal,start)){
return cljs.core.cons(instaparse.print.rule__GT_str(non_terminal,parser),instaparse$print$Parser__GT_str_$_iter__13962(cljs.core.rest(s__13963__$2)));
} else {
var G__13974 = cljs.core.rest(s__13963__$2);
s__13963__$1 = G__13974;
continue;
}
}
} else {
return null;
}
break;
}
});})(map__13960,map__13960__$1,grammar,start))
,null,null));
});})(map__13960,map__13960__$1,grammar,start))
;
return iter__8453__auto__(grammar);
})()));
});
