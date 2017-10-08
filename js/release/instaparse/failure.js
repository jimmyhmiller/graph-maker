// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('instaparse.failure');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('instaparse.print');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__13977 = (line + (1));
var G__13978 = (1);
var G__13979 = (counter + (1));
line = G__13977;
col = G__13978;
counter = G__13979;
continue;
} else {
var G__13980 = line;
var G__13981 = (col + (1));
var G__13982 = (counter + (1));
line = G__13980;
col = G__13981;
counter = G__13982;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq(clojure.string.replace(text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(chars)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.first(chars))){
var G__13983 = cljs.core.next(chars);
var G__13984 = (n__$1 - (1));
chars = G__13983;
n__$1 = G__13984;
continue;
} else {
var G__13985 = cljs.core.next(chars);
var G__13986 = n__$1;
chars = G__13985;
n__$1 = G__13986;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_(n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column(cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,instaparse.failure.get_line(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(cljs.core.cst$kw$NOT.cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$NOT.cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(cljs.core.cst$kw$char_DASH_range.cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.char_range__GT_str(r)], 0));
} else {
if((r instanceof RegExp)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.regexp__GT_str(r)], 0));
} else {
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__13987){
var map__13988 = p__13987;
var map__13988__$1 = ((((!((map__13988 == null)))?((((map__13988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13988.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13988):map__13988);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13988__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13988__$1,cljs.core.cst$kw$column);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13988__$1,cljs.core.cst$kw$text);
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13988__$1,cljs.core.cst$kw$reason);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker(column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expecting,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$full,reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expecting,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.cst$kw$full),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 0));

}
}

var seq__13990_13998 = cljs.core.seq(full_reasons);
var chunk__13991_13999 = null;
var count__13992_14000 = (0);
var i__13993_14001 = (0);
while(true){
if((i__13993_14001 < count__13992_14000)){
var r_14002 = chunk__13991_13999.cljs$core$IIndexed$_nth$arity$2(null,i__13993_14001);
instaparse.failure.print_reason(r_14002);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));

var G__14003 = seq__13990_13998;
var G__14004 = chunk__13991_13999;
var G__14005 = count__13992_14000;
var G__14006 = (i__13993_14001 + (1));
seq__13990_13998 = G__14003;
chunk__13991_13999 = G__14004;
count__13992_14000 = G__14005;
i__13993_14001 = G__14006;
continue;
} else {
var temp__4657__auto___14007 = cljs.core.seq(seq__13990_13998);
if(temp__4657__auto___14007){
var seq__13990_14008__$1 = temp__4657__auto___14007;
if(cljs.core.chunked_seq_QMARK_(seq__13990_14008__$1)){
var c__8484__auto___14009 = cljs.core.chunk_first(seq__13990_14008__$1);
var G__14010 = cljs.core.chunk_rest(seq__13990_14008__$1);
var G__14011 = c__8484__auto___14009;
var G__14012 = cljs.core.count(c__8484__auto___14009);
var G__14013 = (0);
seq__13990_13998 = G__14010;
chunk__13991_13999 = G__14011;
count__13992_14000 = G__14012;
i__13993_14001 = G__14013;
continue;
} else {
var r_14014 = cljs.core.first(seq__13990_14008__$1);
instaparse.failure.print_reason(r_14014);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));

var G__14015 = cljs.core.next(seq__13990_14008__$1);
var G__14016 = null;
var G__14017 = (0);
var G__14018 = (0);
seq__13990_13998 = G__14015;
chunk__13991_13999 = G__14016;
count__13992_14000 = G__14017;
i__13993_14001 = G__14018;
continue;
}
} else {
}
}
break;
}

var seq__13994 = cljs.core.seq(partial_reasons);
var chunk__13995 = null;
var count__13996 = (0);
var i__13997 = (0);
while(true){
if((i__13997 < count__13996)){
var r = chunk__13995.cljs$core$IIndexed$_nth$arity$2(null,i__13997);
instaparse.failure.print_reason(r);

cljs.core.println();

var G__14019 = seq__13994;
var G__14020 = chunk__13995;
var G__14021 = count__13996;
var G__14022 = (i__13997 + (1));
seq__13994 = G__14019;
chunk__13995 = G__14020;
count__13996 = G__14021;
i__13997 = G__14022;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13994);
if(temp__4657__auto__){
var seq__13994__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13994__$1)){
var c__8484__auto__ = cljs.core.chunk_first(seq__13994__$1);
var G__14023 = cljs.core.chunk_rest(seq__13994__$1);
var G__14024 = c__8484__auto__;
var G__14025 = cljs.core.count(c__8484__auto__);
var G__14026 = (0);
seq__13994 = G__14023;
chunk__13995 = G__14024;
count__13996 = G__14025;
i__13997 = G__14026;
continue;
} else {
var r = cljs.core.first(seq__13994__$1);
instaparse.failure.print_reason(r);

cljs.core.println();

var G__14027 = cljs.core.next(seq__13994__$1);
var G__14028 = null;
var G__14029 = (0);
var G__14030 = (0);
seq__13994 = G__14027;
chunk__13995 = G__14028;
count__13996 = G__14029;
i__13997 = G__14030;
continue;
}
} else {
return null;
}
}
break;
}
});
