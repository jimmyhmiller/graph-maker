// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('instaparse.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.walk');
goog.require('instaparse.gll');
goog.require('instaparse.cfg');
goog.require('instaparse.failure');
goog.require('instaparse.print');
goog.require('instaparse.reduction');
goog.require('instaparse.transform');
goog.require('instaparse.abnf');
goog.require('instaparse.repeat');
goog.require('instaparse.combinators_source');
goog.require('instaparse.line_col');
goog.require('instaparse.viz');
goog.require('instaparse.util');
instaparse.core._STAR_default_output_format_STAR_ = cljs.core.cst$kw$hiccup;
/**
 * Changes the default output format.  Input should be :hiccup or :enlive
 */
instaparse.core.set_default_output_format_BANG_ = (function instaparse$core$set_default_output_format_BANG_(type){
if(cljs.core.truth_((function (){var fexpr__15802 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hiccup,null,cljs.core.cst$kw$enlive,null], null), null);
return (fexpr__15802.cljs$core$IFn$_invoke$arity$1 ? fexpr__15802.cljs$core$IFn$_invoke$arity$1(type) : fexpr__15802.call(null,type));
})())){
} else {
throw (new Error("Assert failed: (#{:hiccup :enlive} type)"));
}

return instaparse.core._STAR_default_output_format_STAR_ = type;
});
instaparse.core._STAR_default_input_format_STAR_ = cljs.core.cst$kw$ebnf;
/**
 * Changes the default input format.  Input should be :abnf or :ebnf
 */
instaparse.core.set_default_input_format_BANG_ = (function instaparse$core$set_default_input_format_BANG_(type){
if(cljs.core.truth_((function (){var fexpr__15803 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ebnf,null,cljs.core.cst$kw$abnf,null], null), null);
return (fexpr__15803.cljs$core$IFn$_invoke$arity$1 ? fexpr__15803.cljs$core$IFn$_invoke$arity$1(type) : fexpr__15803.call(null,type));
})())){
} else {
throw (new Error("Assert failed: (#{:ebnf :abnf} type)"));
}

return instaparse.core._STAR_default_input_format_STAR_ = type;
});


instaparse.core.unhide_parser = (function instaparse$core$unhide_parser(parser,unhide){
var G__15804 = unhide;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__15804)){
return parser;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$content,G__15804)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$grammar,instaparse.combinators_source.unhide_all_content(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(parser)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tags,G__15804)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$grammar,instaparse.combinators_source.unhide_tags(cljs.core.cst$kw$output_DASH_format.cljs$core$IFn$_invoke$arity$1(parser),cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(parser)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$all,G__15804)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$grammar,instaparse.combinators_source.unhide_all(cljs.core.cst$kw$output_DASH_format.cljs$core$IFn$_invoke$arity$1(parser),cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(parser)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15804)].join('')));

}
}
}
}
});
/**
 * Use parser to parse the text.  Returns first parse tree found
 * that completely parses the text.  If no parse tree is possible, returns
 * a Failure object.
 * 
 * Optional keyword arguments:
 * :start :keyword  (where :keyword is name of starting production rule)
 * :partial true    (parses that don't consume the whole string are okay)
 * :total true      (if parse fails, embed failure node in tree)
 * :unhide <:tags or :content or :all> (for this parse, disable hiding)
 * :optimize :memory   (when possible, employ strategy to use less memory)
 * 
 * Clj only:
 * :trace true      (print diagnostic trace while parsing)
 */
instaparse.core.parse = (function instaparse$core$parse(var_args){
var args__8821__auto__ = [];
var len__8814__auto___15812 = arguments.length;
var i__8815__auto___15813 = (0);
while(true){
if((i__8815__auto___15813 < len__8814__auto___15812)){
args__8821__auto__.push((arguments[i__8815__auto___15813]));

var G__15814 = (i__8815__auto___15813 + (1));
i__8815__auto___15813 = G__15814;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((2) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((2)),(0),null)):null);
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8822__auto__);
});

instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic = (function (parser,text,p__15808){
var map__15809 = p__15808;
var map__15809__$1 = ((((!((map__15809 == null)))?((((map__15809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15809):map__15809);
var options = map__15809__$1;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,cljs.core.cst$kw$tags,null,cljs.core.cst$kw$content,null,cljs.core.cst$kw$all,null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$unhide))){
} else {
throw (new Error("Assert failed: (contains? #{nil :tags :content :all} (get options :unhide))"));
}

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,cljs.core.cst$kw$memory,null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$optimize))){
} else {
throw (new Error("Assert failed: (contains? #{nil :memory} (get options :optimize))"));
}

var start_production = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$start,cljs.core.cst$kw$start_DASH_production.cljs$core$IFn$_invoke$arity$1(parser));
var partial_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$partial,false);
var optimize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$optimize,false);
var unhide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$unhide);
var trace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$trace,false);
var parser__$1 = instaparse.core.unhide_parser(parser,unhide);
if(cljs.core.truth_(cljs.core.cst$kw$total.cljs$core$IFn$_invoke$arity$1(options))){
return instaparse.gll.parse_total(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_,(function (){var G__15811 = cljs.core.cst$kw$output_DASH_format.cljs$core$IFn$_invoke$arity$1(parser__$1);
return (instaparse.reduction.node_builders.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.node_builders.cljs$core$IFn$_invoke$arity$1(G__15811) : instaparse.reduction.node_builders.call(null,G__15811));
})());
} else {
if(cljs.core.truth_((function (){var and__7633__auto__ = optimize_QMARK_;
if(cljs.core.truth_(and__7633__auto__)){
return cljs.core.not(partial_QMARK_);
} else {
return and__7633__auto__;
}
})())){
var result = instaparse.repeat.try_repeating_parse_strategy(parser__$1,text,start_production);
if(cljs.core.truth_((instaparse.core.failure_QMARK_.cljs$core$IFn$_invoke$arity$1 ? instaparse.core.failure_QMARK_.cljs$core$IFn$_invoke$arity$1(result) : instaparse.core.failure_QMARK_.call(null,result)))){
return instaparse.gll.parse(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_);
} else {
return result;
}
} else {
return instaparse.gll.parse(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_);

}
}
});

instaparse.core.parse.cljs$lang$maxFixedArity = (2);

instaparse.core.parse.cljs$lang$applyTo = (function (seq15805){
var G__15806 = cljs.core.first(seq15805);
var seq15805__$1 = cljs.core.next(seq15805);
var G__15807 = cljs.core.first(seq15805__$1);
var seq15805__$2 = cljs.core.next(seq15805__$1);
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(G__15806,G__15807,seq15805__$2);
});

/**
 * Use parser to parse the text.  Returns lazy seq of all parse trees
 * that completely parse the text.  If no parse tree is possible, returns
 * () with a Failure object attached as metadata.
 * 
 * Optional keyword arguments:
 * :start :keyword  (where :keyword is name of starting production rule)
 * :partial true    (parses that don't consume the whole string are okay)
 * :total true      (if parse fails, embed failure node in tree)
 * :unhide <:tags or :content or :all> (for this parse, disable hiding)
 * 
 * Clj only:
 * :trace true      (print diagnostic trace while parsing)
 */
instaparse.core.parses = (function instaparse$core$parses(var_args){
var args__8821__auto__ = [];
var len__8814__auto___15822 = arguments.length;
var i__8815__auto___15823 = (0);
while(true){
if((i__8815__auto___15823 < len__8814__auto___15822)){
args__8821__auto__.push((arguments[i__8815__auto___15823]));

var G__15824 = (i__8815__auto___15823 + (1));
i__8815__auto___15823 = G__15824;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((2) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((2)),(0),null)):null);
return instaparse.core.parses.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8822__auto__);
});

instaparse.core.parses.cljs$core$IFn$_invoke$arity$variadic = (function (parser,text,p__15818){
var map__15819 = p__15818;
var map__15819__$1 = ((((!((map__15819 == null)))?((((map__15819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15819.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15819):map__15819);
var options = map__15819__$1;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,cljs.core.cst$kw$tags,null,cljs.core.cst$kw$content,null,cljs.core.cst$kw$all,null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$unhide))){
} else {
throw (new Error("Assert failed: (contains? #{nil :tags :content :all} (get options :unhide))"));
}

var start_production = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$start,cljs.core.cst$kw$start_DASH_production.cljs$core$IFn$_invoke$arity$1(parser));
var partial_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$partial,false);
var unhide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$unhide);
var trace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$trace,false);
var parser__$1 = instaparse.core.unhide_parser(parser,unhide);
if(cljs.core.truth_(cljs.core.cst$kw$total.cljs$core$IFn$_invoke$arity$1(options))){
return instaparse.gll.parses_total(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_,(function (){var G__15821 = cljs.core.cst$kw$output_DASH_format.cljs$core$IFn$_invoke$arity$1(parser__$1);
return (instaparse.reduction.node_builders.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.node_builders.cljs$core$IFn$_invoke$arity$1(G__15821) : instaparse.reduction.node_builders.call(null,G__15821));
})());
} else {
return instaparse.gll.parses(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_);

}
});

instaparse.core.parses.cljs$lang$maxFixedArity = (2);

instaparse.core.parses.cljs$lang$applyTo = (function (seq15815){
var G__15816 = cljs.core.first(seq15815);
var seq15815__$1 = cljs.core.next(seq15815);
var G__15817 = cljs.core.first(seq15815__$1);
var seq15815__$2 = cljs.core.next(seq15815__$1);
return instaparse.core.parses.cljs$core$IFn$_invoke$arity$variadic(G__15816,G__15817,seq15815__$2);
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
instaparse.core.Parser = (function (grammar,start_production,output_format,__meta,__extmap,__hash){
this.grammar = grammar;
this.start_production = start_production;
this.output_format = output_format;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667595;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
instaparse.core.Parser.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
return this__8285__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8286__auto__,null);
});

instaparse.core.Parser.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8287__auto__,k15826,else__8288__auto__){
var self__ = this;
var this__8287__auto____$1 = this;
var G__15831 = k15826;
var G__15831__$1 = (((G__15831 instanceof cljs.core.Keyword))?G__15831.fqn:null);
switch (G__15831__$1) {
case "grammar":
return self__.grammar;

break;
case "start-production":
return self__.start_production;

break;
case "output-format":
return self__.output_format;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15826,else__8288__auto__);

}
});

instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8299__auto__,writer__8300__auto__,opts__8301__auto__){
var self__ = this;
var this__8299__auto____$1 = this;
var pr_pair__8302__auto__ = ((function (this__8299__auto____$1){
return (function (keyval__8303__auto__){
return cljs.core.pr_sequential_writer(writer__8300__auto__,cljs.core.pr_writer,""," ","",opts__8301__auto__,keyval__8303__auto__);
});})(this__8299__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8300__auto__,pr_pair__8302__auto__,"#instaparse.core.Parser{",", ","}",opts__8301__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$grammar,self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_production,self__.start_production],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$output_DASH_format,self__.output_format],null))], null),self__.__extmap));
});

instaparse.core.Parser.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15825){
var self__ = this;
var G__15825__$1 = this;
return (new cljs.core.RecordIter((0),G__15825__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$grammar,cljs.core.cst$kw$start_DASH_production,cljs.core.cst$kw$output_DASH_format], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

instaparse.core.Parser.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8283__auto__){
var self__ = this;
var this__8283__auto____$1 = this;
return self__.__meta;
});

instaparse.core.Parser.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,self__.__meta,self__.__extmap,self__.__hash));
});

instaparse.core.Parser.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8289__auto__){
var self__ = this;
var this__8289__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

instaparse.core.Parser.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8281__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
var h__8099__auto__ = self__.__hash;
if(!((h__8099__auto__ == null))){
return h__8099__auto__;
} else {
var h__8099__auto____$1 = (function (){var fexpr__15832 = ((function (h__8099__auto__,this__8281__auto____$1){
return (function (coll__8282__auto__){
return (-360509877 ^ cljs.core.hash_unordered_coll(coll__8282__auto__));
});})(h__8099__auto__,this__8281__auto____$1))
;
return fexpr__15832(this__8281__auto____$1);
})();
self__.__hash = h__8099__auto____$1;

return h__8099__auto____$1;
}
});

instaparse.core.Parser.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15827,other15828){
var self__ = this;
var this15827__$1 = this;
return (!((other15828 == null))) && ((this15827__$1.constructor === other15828.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15827__$1.grammar,other15828.grammar)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15827__$1.start_production,other15828.start_production)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15827__$1.output_format,other15828.output_format)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15827__$1.__extmap,other15828.__extmap));
});

instaparse.core.Parser.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8294__auto__,k__8295__auto__){
var self__ = this;
var this__8294__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$start_DASH_production,null,cljs.core.cst$kw$grammar,null,cljs.core.cst$kw$output_DASH_format,null], null), null),k__8295__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8294__auto____$1),self__.__meta),k__8295__auto__);
} else {
return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8295__auto__)),null));
}
});

instaparse.core.Parser.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8292__auto__,k__8293__auto__,G__15825){
var self__ = this;
var this__8292__auto____$1 = this;
var pred__15833 = cljs.core.keyword_identical_QMARK_;
var expr__15834 = k__8293__auto__;
if(cljs.core.truth_((function (){var G__15836 = cljs.core.cst$kw$grammar;
var G__15837 = expr__15834;
return (pred__15833.cljs$core$IFn$_invoke$arity$2 ? pred__15833.cljs$core$IFn$_invoke$arity$2(G__15836,G__15837) : pred__15833.call(null,G__15836,G__15837));
})())){
return (new instaparse.core.Parser(G__15825,self__.start_production,self__.output_format,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15838 = cljs.core.cst$kw$start_DASH_production;
var G__15839 = expr__15834;
return (pred__15833.cljs$core$IFn$_invoke$arity$2 ? pred__15833.cljs$core$IFn$_invoke$arity$2(G__15838,G__15839) : pred__15833.call(null,G__15838,G__15839));
})())){
return (new instaparse.core.Parser(self__.grammar,G__15825,self__.output_format,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15840 = cljs.core.cst$kw$output_DASH_format;
var G__15841 = expr__15834;
return (pred__15833.cljs$core$IFn$_invoke$arity$2 ? pred__15833.cljs$core$IFn$_invoke$arity$2(G__15840,G__15841) : pred__15833.call(null,G__15840,G__15841));
})())){
return (new instaparse.core.Parser(self__.grammar,self__.start_production,G__15825,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8293__auto__,G__15825),null));
}
}
}
});

instaparse.core.Parser.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8297__auto__){
var self__ = this;
var this__8297__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$grammar,self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_production,self__.start_production],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$output_DASH_format,self__.output_format],null))], null),self__.__extmap));
});

instaparse.core.Parser.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8284__auto__,G__15825){
var self__ = this;
var this__8284__auto____$1 = this;
return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,G__15825,self__.__extmap,self__.__hash));
});

instaparse.core.Parser.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8290__auto__,entry__8291__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8291__auto__)){
return this__8290__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8291__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8291__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8290__auto____$1,entry__8291__auto__);
}
});

instaparse.core.Parser.prototype.call = (function() {
var G__15843 = null;
var G__15843__2 = (function (self__,text){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse(parser,text);
});
var G__15843__4 = (function (self__,text,key1,val1){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key1,val1], 0));
});
var G__15843__6 = (function (self__,text,key1,val1,key2,val2){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key1,val1,key2,val2], 0));
});
var G__15843__8 = (function (self__,text,key1,val1,key2,val2,key3,val3){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key1,val1,key2,val2,key3,val3], 0));
});
var G__15843__10 = (function (self__,text,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});
var G__15843__12 = (function (self__,text,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});
var G__15843__14 = (function (self__,text,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});
var G__15843__16 = (function (self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});
var G__15843__18 = (function (self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});
var G__15843__20 = (function (self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});
var G__15843__22 = (function (self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,more){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(instaparse.core.parse,parser,text,a,b,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,more], 0));
});
G__15843 = function(self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,more){
switch(arguments.length){
case 2:
return G__15843__2.call(this,self__,text);
case 4:
return G__15843__4.call(this,self__,text,a,b);
case 6:
return G__15843__6.call(this,self__,text,a,b,c,d);
case 8:
return G__15843__8.call(this,self__,text,a,b,c,d,e,f);
case 10:
return G__15843__10.call(this,self__,text,a,b,c,d,e,f,g,h);
case 12:
return G__15843__12.call(this,self__,text,a,b,c,d,e,f,g,h,i,j);
case 14:
return G__15843__14.call(this,self__,text,a,b,c,d,e,f,g,h,i,j,k,l);
case 16:
return G__15843__16.call(this,self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 18:
return G__15843__18.call(this,self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 20:
return G__15843__20.call(this,self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 22:
return G__15843__22.call(this,self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,more);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__15843.cljs$core$IFn$_invoke$arity$2 = G__15843__2;
G__15843.cljs$core$IFn$_invoke$arity$4 = G__15843__4;
G__15843.cljs$core$IFn$_invoke$arity$6 = G__15843__6;
G__15843.cljs$core$IFn$_invoke$arity$8 = G__15843__8;
G__15843.cljs$core$IFn$_invoke$arity$10 = G__15843__10;
G__15843.cljs$core$IFn$_invoke$arity$12 = G__15843__12;
G__15843.cljs$core$IFn$_invoke$arity$14 = G__15843__14;
G__15843.cljs$core$IFn$_invoke$arity$16 = G__15843__16;
G__15843.cljs$core$IFn$_invoke$arity$18 = G__15843__18;
G__15843.cljs$core$IFn$_invoke$arity$20 = G__15843__20;
G__15843.cljs$core$IFn$_invoke$arity$22 = G__15843__22;
return G__15843;
})()
;

instaparse.core.Parser.prototype.apply = (function (self__,args15830){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15830)));
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$1 = (function (text){
var self__ = this;
var parser = this;
return instaparse.core.parse(parser,text);
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$3 = (function (text,key1,val1){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key1,val1], 0));
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$5 = (function (text,key1,val1,key2,val2){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key1,val1,key2,val2], 0));
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$7 = (function (text,key1,val1,key2,val2,key3,val3){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key1,val1,key2,val2,key3,val3], 0));
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$9 = (function (text,a,b,c,d,e,f,g,h){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$11 = (function (text,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$13 = (function (text,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$15 = (function (text,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$17 = (function (text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$19 = (function (text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$21 = (function (text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,more){
var self__ = this;
var parser = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(instaparse.core.parse,parser,text,a,b,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,more], 0));
});

instaparse.core.Parser.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$grammar,cljs.core.cst$sym$start_DASH_production,cljs.core.cst$sym$output_DASH_format], null);
});

instaparse.core.Parser.cljs$lang$type = true;

instaparse.core.Parser.cljs$lang$ctorPrSeq = (function (this__8321__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"instaparse.core/Parser");
});

instaparse.core.Parser.cljs$lang$ctorPrWriter = (function (this__8321__auto__,writer__8322__auto__){
return cljs.core._write(writer__8322__auto__,"instaparse.core/Parser");
});

instaparse.core.__GT_Parser = (function instaparse$core$__GT_Parser(grammar,start_production,output_format){
return (new instaparse.core.Parser(grammar,start_production,output_format,null,null,null));
});

instaparse.core.map__GT_Parser = (function instaparse$core$map__GT_Parser(G__15829){
return (new instaparse.core.Parser(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(G__15829),cljs.core.cst$kw$start_DASH_production.cljs$core$IFn$_invoke$arity$1(G__15829),cljs.core.cst$kw$output_DASH_format.cljs$core$IFn$_invoke$arity$1(G__15829),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15829,cljs.core.cst$kw$grammar,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$start_DASH_production,cljs.core.cst$kw$output_DASH_format], 0))),null));
});

instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (parser,writer,_){
var parser__$1 = this;
return cljs.core._write(writer,instaparse.print.Parser__GT_str(parser__$1));
});
/**
 * Takes a string specification of a context-free grammar,
 *   or a URI for a text file containing such a specification (Clj only),
 *   or a map of parser combinators and returns a parser for that grammar.
 * 
 *   Optional keyword arguments:
 *   :input-format :ebnf
 *   or
 *   :input-format :abnf
 * 
 *   :output-format :enlive
 *   or
 *   :output-format :hiccup
 * 
 *   :start :keyword (where :keyword is name of starting production rule)
 * 
 *   :string-ci true (treat all string literals as case insensitive)
 * 
 *   :auto-whitespace (:standard or :comma)
 *   or
 *   :auto-whitespace custom-whitespace-parser
 * 
 *   Clj only:
 *   :no-slurp true (disables use of slurp to auto-detect whether
 *                input is a URI.  When using this option, input
 *                must be a grammar string or grammar map.  Useful
 *                for platforms where slurp is slow or not available.)
 */
instaparse.core.parser = (function instaparse$core$parser(var_args){
var args__8821__auto__ = [];
var len__8814__auto___15853 = arguments.length;
var i__8815__auto___15854 = (0);
while(true){
if((i__8815__auto___15854 < len__8814__auto___15853)){
args__8821__auto__.push((arguments[i__8815__auto___15854]));

var G__15855 = (i__8815__auto___15854 + (1));
i__8815__auto___15854 = G__15855;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((1) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((1)),(0),null)):null);
return instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8822__auto__);
});

instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic = (function (grammar_specification,p__15846){
var map__15847 = p__15846;
var map__15847__$1 = ((((!((map__15847 == null)))?((((map__15847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15847.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15847):map__15847);
var options = map__15847__$1;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [null,null,cljs.core.cst$kw$ebnf,null,cljs.core.cst$kw$abnf,null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$input_DASH_format))){
} else {
throw (new Error("Assert failed: (contains? #{nil :ebnf :abnf} (get options :input-format))"));
}

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [null,null,cljs.core.cst$kw$hiccup,null,cljs.core.cst$kw$enlive,null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$output_DASH_format))){
} else {
throw (new Error("Assert failed: (contains? #{nil :hiccup :enlive} (get options :output-format))"));
}

if((function (){var ws_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$auto_DASH_whitespace);
return ((ws_parser == null)) || (cljs.core.contains_QMARK_(instaparse.core.standard_whitespace_parsers,ws_parser)) || ((cljs.core.map_QMARK_(ws_parser)) && (cljs.core.contains_QMARK_(ws_parser,cljs.core.cst$kw$grammar)) && (cljs.core.contains_QMARK_(ws_parser,cljs.core.cst$kw$start_DASH_production)));
})()){
} else {
throw (new Error("Assert failed: (let [ws-parser (get options :auto-whitespace)] (or (nil? ws-parser) (contains? standard-whitespace-parsers ws-parser) (and (map? ws-parser) (contains? ws-parser :grammar) (contains? ws-parser :start-production))))"));
}

var input_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$input_DASH_format,instaparse.core._STAR_default_input_format_STAR_);
var build_parser = (function (){var G__15849 = input_format;
var G__15849__$1 = (((G__15849 instanceof cljs.core.Keyword))?G__15849.fqn:null);
switch (G__15849__$1) {
case "abnf":
return instaparse.abnf.build_parser;

break;
case "ebnf":
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$string_DASH_ci))){
return ((function (G__15849,G__15849__$1,input_format,map__15847,map__15847__$1,options){
return (function (spec,output_format){
var _STAR_case_insensitive_literals_STAR_15850 = instaparse.cfg._STAR_case_insensitive_literals_STAR_;
instaparse.cfg._STAR_case_insensitive_literals_STAR_ = true;

try{return instaparse.cfg.build_parser(spec,output_format);
}finally {instaparse.cfg._STAR_case_insensitive_literals_STAR_ = _STAR_case_insensitive_literals_STAR_15850;
}});
;})(G__15849,G__15849__$1,input_format,map__15847,map__15847__$1,options))
} else {
return instaparse.cfg.build_parser;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15849__$1)].join('')));

}
})();
var output_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$output_DASH_format,instaparse.core._STAR_default_output_format_STAR_);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$start,null);
var built_parser = ((typeof grammar_specification === 'string')?(function (){var parser = (build_parser.cljs$core$IFn$_invoke$arity$2 ? build_parser.cljs$core$IFn$_invoke$arity$2(grammar_specification,output_format) : build_parser.call(null,grammar_specification,output_format));
if(cljs.core.truth_(start)){
return instaparse.core.map__GT_Parser(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$start_DASH_production,start));
} else {
return instaparse.core.map__GT_Parser(parser);
}
})():((cljs.core.map_QMARK_(grammar_specification))?(function (){var parser = instaparse.cfg.build_parser_from_combinators(grammar_specification,output_format,start);
return instaparse.core.map__GT_Parser(parser);
})():((cljs.core.vector_QMARK_(grammar_specification))?(function (){var start__$1 = (cljs.core.truth_(start)?start:(grammar_specification.cljs$core$IFn$_invoke$arity$1 ? grammar_specification.cljs$core$IFn$_invoke$arity$1((0)) : grammar_specification.call(null,(0))));
var parser = instaparse.cfg.build_parser_from_combinators(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,grammar_specification),output_format,start__$1);
return instaparse.core.map__GT_Parser(parser);
})():instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected string, map, or vector as grammar specification, got ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([grammar_specification], 0))], 0))
)));
var auto_whitespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$auto_DASH_whitespace);
var whitespace_parser = (((auto_whitespace instanceof cljs.core.Keyword))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(instaparse.core.standard_whitespace_parsers,auto_whitespace):auto_whitespace);
var temp__4655__auto__ = whitespace_parser;
if(cljs.core.truth_(temp__4655__auto__)){
var map__15851 = temp__4655__auto__;
var map__15851__$1 = ((((!((map__15851 == null)))?((((map__15851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15851.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15851):map__15851);
var ws_grammar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15851__$1,cljs.core.cst$kw$grammar);
var ws_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15851__$1,cljs.core.cst$kw$start_DASH_production);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(built_parser,cljs.core.cst$kw$grammar,instaparse.combinators_source.auto_whitespace(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(built_parser),cljs.core.cst$kw$start_DASH_production.cljs$core$IFn$_invoke$arity$1(built_parser),ws_grammar,ws_start));
} else {
return built_parser;
}
});

instaparse.core.parser.cljs$lang$maxFixedArity = (1);

instaparse.core.parser.cljs$lang$applyTo = (function (seq15844){
var G__15845 = cljs.core.first(seq15844);
var seq15844__$1 = cljs.core.next(seq15844);
return instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic(G__15845,seq15844__$1);
});

/**
 * Tests whether a parse result is a failure.
 */
instaparse.core.failure_QMARK_ = (function instaparse$core$failure_QMARK_(result){
return ((result instanceof instaparse.gll.failure_type)) || ((cljs.core.meta(result) instanceof instaparse.gll.failure_type));
});
/**
 * Extracts failure object from failed parse result.
 */
instaparse.core.get_failure = (function instaparse$core$get_failure(result){
if((result instanceof instaparse.gll.failure_type)){
return result;
} else {
if((cljs.core.meta(result) instanceof instaparse.gll.failure_type)){
return cljs.core.meta(result);
} else {
return null;

}
}
});
instaparse.core.standard_whitespace_parsers = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$standard,instaparse.core.parser("whitespace = #'\\s+'"),cljs.core.cst$kw$comma,instaparse.core.parser("whitespace = #'[,\\s]+'")], null);
instaparse.core.transform = instaparse.transform.transform;
instaparse.core.add_line_and_column_info_to_metadata = instaparse.line_col.add_line_col_spans;
instaparse.core.span = instaparse.viz.span;