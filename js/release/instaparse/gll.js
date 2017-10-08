// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('instaparse.gll');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('instaparse.auto_flatten_seq');
goog.require('instaparse.failure');
goog.require('instaparse.reduction');
goog.require('instaparse.combinators_source');
goog.require('instaparse.print');
goog.require('goog.i18n.uChar');
instaparse.gll._STAR_diagnostic_char_lookahead_STAR_ = (10);

instaparse.gll.get_parser = (function instaparse$gll$get_parser(grammar,p){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(grammar,p,p);
});














instaparse.gll._parse = (function instaparse$gll$_parse(parser,index,tramp){

var G__14776 = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(parser);
var G__14776__$1 = (((G__14776 instanceof cljs.core.Keyword))?G__14776.fqn:null);
switch (G__14776__$1) {
case "nt":
return (instaparse.gll.non_terminal_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.non_terminal_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.non_terminal_parse.call(null,parser,index,tramp));

break;
case "alt":
return (instaparse.gll.alt_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.alt_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.alt_parse.call(null,parser,index,tramp));

break;
case "cat":
return (instaparse.gll.cat_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.cat_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.cat_parse.call(null,parser,index,tramp));

break;
case "string":
return (instaparse.gll.string_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.string_parse.call(null,parser,index,tramp));

break;
case "string-ci":
return (instaparse.gll.string_case_insensitive_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_case_insensitive_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.string_case_insensitive_parse.call(null,parser,index,tramp));

break;
case "char":
return (instaparse.gll.char_range_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.char_range_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.char_range_parse.call(null,parser,index,tramp));

break;
case "epsilon":
return (instaparse.gll.epsilon_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.epsilon_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.epsilon_parse.call(null,parser,index,tramp));

break;
case "opt":
return (instaparse.gll.opt_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.opt_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.opt_parse.call(null,parser,index,tramp));

break;
case "plus":
return (instaparse.gll.plus_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.plus_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.plus_parse.call(null,parser,index,tramp));

break;
case "rep":
return (instaparse.gll.rep_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.rep_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.rep_parse.call(null,parser,index,tramp));

break;
case "star":
return (instaparse.gll.star_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.star_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.star_parse.call(null,parser,index,tramp));

break;
case "regexp":
return (instaparse.gll.regexp_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.regexp_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.regexp_parse.call(null,parser,index,tramp));

break;
case "look":
return (instaparse.gll.lookahead_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.lookahead_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.lookahead_parse.call(null,parser,index,tramp));

break;
case "neg":
return (instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.negative_lookahead_parse.call(null,parser,index,tramp));

break;
case "ord":
return (instaparse.gll.ordered_alt_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.ordered_alt_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.ordered_alt_parse.call(null,parser,index,tramp));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14776__$1)].join('')));

}
});













instaparse.gll._full_parse = (function instaparse$gll$_full_parse(parser,index,tramp){

var G__14778 = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(parser);
var G__14778__$1 = (((G__14778 instanceof cljs.core.Keyword))?G__14778.fqn:null);
switch (G__14778__$1) {
case "nt":
return (instaparse.gll.non_terminal_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.non_terminal_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.non_terminal_full_parse.call(null,parser,index,tramp));

break;
case "alt":
return (instaparse.gll.alt_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.alt_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.alt_full_parse.call(null,parser,index,tramp));

break;
case "cat":
return (instaparse.gll.cat_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.cat_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.cat_full_parse.call(null,parser,index,tramp));

break;
case "string":
return (instaparse.gll.string_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.string_full_parse.call(null,parser,index,tramp));

break;
case "string-ci":
return (instaparse.gll.string_case_insensitive_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.string_case_insensitive_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.string_case_insensitive_full_parse.call(null,parser,index,tramp));

break;
case "char":
return (instaparse.gll.char_range_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.char_range_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.char_range_full_parse.call(null,parser,index,tramp));

break;
case "epsilon":
return (instaparse.gll.epsilon_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.epsilon_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.epsilon_full_parse.call(null,parser,index,tramp));

break;
case "opt":
return (instaparse.gll.opt_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.opt_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.opt_full_parse.call(null,parser,index,tramp));

break;
case "plus":
return (instaparse.gll.plus_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.plus_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.plus_full_parse.call(null,parser,index,tramp));

break;
case "rep":
return (instaparse.gll.rep_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.rep_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.rep_full_parse.call(null,parser,index,tramp));

break;
case "star":
return (instaparse.gll.star_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.star_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.star_full_parse.call(null,parser,index,tramp));

break;
case "regexp":
return (instaparse.gll.regexp_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.regexp_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.regexp_full_parse.call(null,parser,index,tramp));

break;
case "look":
return (instaparse.gll.lookahead_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.lookahead_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.lookahead_full_parse.call(null,parser,index,tramp));

break;
case "neg":
return (instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.negative_lookahead_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.negative_lookahead_parse.call(null,parser,index,tramp));

break;
case "ord":
return (instaparse.gll.ordered_alt_full_parse.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.ordered_alt_full_parse.cljs$core$IFn$_invoke$arity$3(parser,index,tramp) : instaparse.gll.ordered_alt_full_parse.call(null,parser,index,tramp));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14778__$1)].join('')));

}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
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
instaparse.gll.Failure = (function (index,reason,__meta,__extmap,__hash){
this.index = index;
this.reason = reason;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
instaparse.gll.Failure.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
return this__8285__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8286__auto__,null);
});

instaparse.gll.Failure.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8287__auto__,k14781,else__8288__auto__){
var self__ = this;
var this__8287__auto____$1 = this;
var G__14785 = k14781;
var G__14785__$1 = (((G__14785 instanceof cljs.core.Keyword))?G__14785.fqn:null);
switch (G__14785__$1) {
case "index":
return self__.index;

break;
case "reason":
return self__.reason;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14781,else__8288__auto__);

}
});

instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8299__auto__,writer__8300__auto__,opts__8301__auto__){
var self__ = this;
var this__8299__auto____$1 = this;
var pr_pair__8302__auto__ = ((function (this__8299__auto____$1){
return (function (keyval__8303__auto__){
return cljs.core.pr_sequential_writer(writer__8300__auto__,cljs.core.pr_writer,""," ","",opts__8301__auto__,keyval__8303__auto__);
});})(this__8299__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8300__auto__,pr_pair__8302__auto__,"#instaparse.gll.Failure{",", ","}",opts__8301__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$index,self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$reason,self__.reason],null))], null),self__.__extmap));
});

instaparse.gll.Failure.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14780){
var self__ = this;
var G__14780__$1 = this;
return (new cljs.core.RecordIter((0),G__14780__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$index,cljs.core.cst$kw$reason], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

instaparse.gll.Failure.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8283__auto__){
var self__ = this;
var this__8283__auto____$1 = this;
return self__.__meta;
});

instaparse.gll.Failure.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,self__.__extmap,self__.__hash));
});

instaparse.gll.Failure.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8289__auto__){
var self__ = this;
var this__8289__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

instaparse.gll.Failure.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8281__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
var h__8099__auto__ = self__.__hash;
if(!((h__8099__auto__ == null))){
return h__8099__auto__;
} else {
var h__8099__auto____$1 = (function (){var fexpr__14786 = ((function (h__8099__auto__,this__8281__auto____$1){
return (function (coll__8282__auto__){
return (-1140991288 ^ cljs.core.hash_unordered_coll(coll__8282__auto__));
});})(h__8099__auto__,this__8281__auto____$1))
;
return fexpr__14786(this__8281__auto____$1);
})();
self__.__hash = h__8099__auto____$1;

return h__8099__auto____$1;
}
});

instaparse.gll.Failure.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14782,other14783){
var self__ = this;
var this14782__$1 = this;
return (!((other14783 == null))) && ((this14782__$1.constructor === other14783.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14782__$1.index,other14783.index)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14782__$1.reason,other14783.reason)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14782__$1.__extmap,other14783.__extmap));
});

instaparse.gll.Failure.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8294__auto__,k__8295__auto__){
var self__ = this;
var this__8294__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$index,null,cljs.core.cst$kw$reason,null], null), null),k__8295__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8294__auto____$1),self__.__meta),k__8295__auto__);
} else {
return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8295__auto__)),null));
}
});

instaparse.gll.Failure.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8292__auto__,k__8293__auto__,G__14780){
var self__ = this;
var this__8292__auto____$1 = this;
var pred__14787 = cljs.core.keyword_identical_QMARK_;
var expr__14788 = k__8293__auto__;
if(cljs.core.truth_((function (){var G__14790 = cljs.core.cst$kw$index;
var G__14791 = expr__14788;
return (pred__14787.cljs$core$IFn$_invoke$arity$2 ? pred__14787.cljs$core$IFn$_invoke$arity$2(G__14790,G__14791) : pred__14787.call(null,G__14790,G__14791));
})())){
return (new instaparse.gll.Failure(G__14780,self__.reason,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14792 = cljs.core.cst$kw$reason;
var G__14793 = expr__14788;
return (pred__14787.cljs$core$IFn$_invoke$arity$2 ? pred__14787.cljs$core$IFn$_invoke$arity$2(G__14792,G__14793) : pred__14787.call(null,G__14792,G__14793));
})())){
return (new instaparse.gll.Failure(self__.index,G__14780,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8293__auto__,G__14780),null));
}
}
});

instaparse.gll.Failure.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8297__auto__){
var self__ = this;
var this__8297__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$index,self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$reason,self__.reason],null))], null),self__.__extmap));
});

instaparse.gll.Failure.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8284__auto__,G__14780){
var self__ = this;
var this__8284__auto____$1 = this;
return (new instaparse.gll.Failure(self__.index,self__.reason,G__14780,self__.__extmap,self__.__hash));
});

instaparse.gll.Failure.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8290__auto__,entry__8291__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8291__auto__)){
return this__8290__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8291__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8291__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8290__auto____$1,entry__8291__auto__);
}
});

instaparse.gll.Failure.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$index,cljs.core.cst$sym$reason], null);
});

instaparse.gll.Failure.cljs$lang$type = true;

instaparse.gll.Failure.cljs$lang$ctorPrSeq = (function (this__8321__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"instaparse.gll/Failure");
});

instaparse.gll.Failure.cljs$lang$ctorPrWriter = (function (this__8321__auto__,writer__8322__auto__){
return cljs.core._write(writer__8322__auto__,"instaparse.gll/Failure");
});

instaparse.gll.__GT_Failure = (function instaparse$gll$__GT_Failure(index,reason){
return (new instaparse.gll.Failure(index,reason,null,null,null));
});

instaparse.gll.map__GT_Failure = (function instaparse$gll$map__GT_Failure(G__14784){
return (new instaparse.gll.Failure(cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(G__14784),cljs.core.cst$kw$reason.cljs$core$IFn$_invoke$arity$1(G__14784),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14784,cljs.core.cst$kw$index,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$reason], 0))),null));
});

instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (fail,writer,_){
var fail__$1 = this;
return cljs.core._write(writer,(function (){var sb__8672__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_14795_14797 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14796_14798 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14795_14797,_STAR_print_fn_STAR_14796_14798,sb__8672__auto__,fail__$1){
return (function (x__8673__auto__){
return sb__8672__auto__.append(x__8673__auto__);
});})(_STAR_print_newline_STAR_14795_14797,_STAR_print_fn_STAR_14796_14798,sb__8672__auto__,fail__$1))
;

try{instaparse.failure.pprint_failure(fail__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14796_14798;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14795_14797;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8672__auto__)].join('');
})());
});
instaparse.gll.failure_type = cljs.core.type((new instaparse.gll.Failure(null,null,null,null,null)));
instaparse.gll.text__GT_segment = (function instaparse$gll$text__GT_segment(text){
return text;
});
instaparse.gll.sub_sequence = cljs.core.subs;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
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
instaparse.gll.Tramp = (function (grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure,trace_QMARK_,__meta,__extmap,__hash){
this.grammar = grammar;
this.text = text;
this.segment = segment;
this.fail_index = fail_index;
this.node_builder = node_builder;
this.stack = stack;
this.next_stack = next_stack;
this.generation = generation;
this.negative_listeners = negative_listeners;
this.msg_cache = msg_cache;
this.nodes = nodes;
this.success = success;
this.failure = failure;
this.trace_QMARK_ = trace_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
instaparse.gll.Tramp.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
return this__8285__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8286__auto__,null);
});

instaparse.gll.Tramp.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8287__auto__,k14800,else__8288__auto__){
var self__ = this;
var this__8287__auto____$1 = this;
var G__14804 = k14800;
var G__14804__$1 = (((G__14804 instanceof cljs.core.Keyword))?G__14804.fqn:null);
switch (G__14804__$1) {
case "grammar":
return self__.grammar;

break;
case "text":
return self__.text;

break;
case "segment":
return self__.segment;

break;
case "fail-index":
return self__.fail_index;

break;
case "node-builder":
return self__.node_builder;

break;
case "stack":
return self__.stack;

break;
case "next-stack":
return self__.next_stack;

break;
case "generation":
return self__.generation;

break;
case "negative-listeners":
return self__.negative_listeners;

break;
case "msg-cache":
return self__.msg_cache;

break;
case "nodes":
return self__.nodes;

break;
case "success":
return self__.success;

break;
case "failure":
return self__.failure;

break;
case "trace?":
return self__.trace_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14800,else__8288__auto__);

}
});

instaparse.gll.Tramp.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8299__auto__,writer__8300__auto__,opts__8301__auto__){
var self__ = this;
var this__8299__auto____$1 = this;
var pr_pair__8302__auto__ = ((function (this__8299__auto____$1){
return (function (keyval__8303__auto__){
return cljs.core.pr_sequential_writer(writer__8300__auto__,cljs.core.pr_writer,""," ","",opts__8301__auto__,keyval__8303__auto__);
});})(this__8299__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8300__auto__,pr_pair__8302__auto__,"#instaparse.gll.Tramp{",", ","}",opts__8301__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$grammar,self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$text,self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$segment,self__.segment],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fail_DASH_index,self__.fail_index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$node_DASH_builder,self__.node_builder],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$stack,self__.stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$next_DASH_stack,self__.next_stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$generation,self__.generation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$negative_DASH_listeners,self__.negative_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$msg_DASH_cache,self__.msg_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$nodes,self__.nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$success,self__.success],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$failure,self__.failure],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trace_QMARK_,self__.trace_QMARK_],null))], null),self__.__extmap));
});

instaparse.gll.Tramp.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14799){
var self__ = this;
var G__14799__$1 = this;
return (new cljs.core.RecordIter((0),G__14799__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$grammar,cljs.core.cst$kw$text,cljs.core.cst$kw$segment,cljs.core.cst$kw$fail_DASH_index,cljs.core.cst$kw$node_DASH_builder,cljs.core.cst$kw$stack,cljs.core.cst$kw$next_DASH_stack,cljs.core.cst$kw$generation,cljs.core.cst$kw$negative_DASH_listeners,cljs.core.cst$kw$msg_DASH_cache,cljs.core.cst$kw$nodes,cljs.core.cst$kw$success,cljs.core.cst$kw$failure,cljs.core.cst$kw$trace_QMARK_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

instaparse.gll.Tramp.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8283__auto__){
var self__ = this;
var this__8283__auto____$1 = this;
return self__.__meta;
});

instaparse.gll.Tramp.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

instaparse.gll.Tramp.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8289__auto__){
var self__ = this;
var this__8289__auto____$1 = this;
return (14 + cljs.core.count(self__.__extmap));
});

instaparse.gll.Tramp.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8281__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
var h__8099__auto__ = self__.__hash;
if(!((h__8099__auto__ == null))){
return h__8099__auto__;
} else {
var h__8099__auto____$1 = (function (){var fexpr__14805 = ((function (h__8099__auto__,this__8281__auto____$1){
return (function (coll__8282__auto__){
return (166878148 ^ cljs.core.hash_unordered_coll(coll__8282__auto__));
});})(h__8099__auto__,this__8281__auto____$1))
;
return fexpr__14805(this__8281__auto____$1);
})();
self__.__hash = h__8099__auto____$1;

return h__8099__auto____$1;
}
});

instaparse.gll.Tramp.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14801,other14802){
var self__ = this;
var this14801__$1 = this;
return (!((other14802 == null))) && ((this14801__$1.constructor === other14802.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14801__$1.grammar,other14802.grammar)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14801__$1.text,other14802.text)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14801__$1.segment,other14802.segment)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14801__$1.fail_index,other14802.fail_index)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14801__$1.node_builder,other14802.node_builder)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14801__$1.stack,other14802.stack)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14801__$1.next_stack,other14802.next_stack)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14801__$1.generation,other14802.generation)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14801__$1.negative_listeners,other14802.negative_listeners)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14801__$1.msg_cache,other14802.msg_cache)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14801__$1.nodes,other14802.nodes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14801__$1.success,other14802.success)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14801__$1.failure,other14802.failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14801__$1.trace_QMARK_,other14802.trace_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14801__$1.__extmap,other14802.__extmap));
});

instaparse.gll.Tramp.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8294__auto__,k__8295__auto__){
var self__ = this;
var this__8294__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [cljs.core.cst$kw$msg_DASH_cache,null,cljs.core.cst$kw$negative_DASH_listeners,null,cljs.core.cst$kw$generation,null,cljs.core.cst$kw$failure,null,cljs.core.cst$kw$fail_DASH_index,null,cljs.core.cst$kw$grammar,null,cljs.core.cst$kw$success,null,cljs.core.cst$kw$nodes,null,cljs.core.cst$kw$node_DASH_builder,null,cljs.core.cst$kw$segment,null,cljs.core.cst$kw$stack,null,cljs.core.cst$kw$trace_QMARK_,null,cljs.core.cst$kw$next_DASH_stack,null,cljs.core.cst$kw$text,null], null), null),k__8295__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8294__auto____$1),self__.__meta),k__8295__auto__);
} else {
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8295__auto__)),null));
}
});

instaparse.gll.Tramp.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8292__auto__,k__8293__auto__,G__14799){
var self__ = this;
var this__8292__auto____$1 = this;
var pred__14806 = cljs.core.keyword_identical_QMARK_;
var expr__14807 = k__8293__auto__;
if(cljs.core.truth_((function (){var G__14809 = cljs.core.cst$kw$grammar;
var G__14810 = expr__14807;
return (pred__14806.cljs$core$IFn$_invoke$arity$2 ? pred__14806.cljs$core$IFn$_invoke$arity$2(G__14809,G__14810) : pred__14806.call(null,G__14809,G__14810));
})())){
return (new instaparse.gll.Tramp(G__14799,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14811 = cljs.core.cst$kw$text;
var G__14812 = expr__14807;
return (pred__14806.cljs$core$IFn$_invoke$arity$2 ? pred__14806.cljs$core$IFn$_invoke$arity$2(G__14811,G__14812) : pred__14806.call(null,G__14811,G__14812));
})())){
return (new instaparse.gll.Tramp(self__.grammar,G__14799,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14813 = cljs.core.cst$kw$segment;
var G__14814 = expr__14807;
return (pred__14806.cljs$core$IFn$_invoke$arity$2 ? pred__14806.cljs$core$IFn$_invoke$arity$2(G__14813,G__14814) : pred__14806.call(null,G__14813,G__14814));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,G__14799,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14815 = cljs.core.cst$kw$fail_DASH_index;
var G__14816 = expr__14807;
return (pred__14806.cljs$core$IFn$_invoke$arity$2 ? pred__14806.cljs$core$IFn$_invoke$arity$2(G__14815,G__14816) : pred__14806.call(null,G__14815,G__14816));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,G__14799,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14817 = cljs.core.cst$kw$node_DASH_builder;
var G__14818 = expr__14807;
return (pred__14806.cljs$core$IFn$_invoke$arity$2 ? pred__14806.cljs$core$IFn$_invoke$arity$2(G__14817,G__14818) : pred__14806.call(null,G__14817,G__14818));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,G__14799,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14819 = cljs.core.cst$kw$stack;
var G__14820 = expr__14807;
return (pred__14806.cljs$core$IFn$_invoke$arity$2 ? pred__14806.cljs$core$IFn$_invoke$arity$2(G__14819,G__14820) : pred__14806.call(null,G__14819,G__14820));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,G__14799,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14821 = cljs.core.cst$kw$next_DASH_stack;
var G__14822 = expr__14807;
return (pred__14806.cljs$core$IFn$_invoke$arity$2 ? pred__14806.cljs$core$IFn$_invoke$arity$2(G__14821,G__14822) : pred__14806.call(null,G__14821,G__14822));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,G__14799,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14823 = cljs.core.cst$kw$generation;
var G__14824 = expr__14807;
return (pred__14806.cljs$core$IFn$_invoke$arity$2 ? pred__14806.cljs$core$IFn$_invoke$arity$2(G__14823,G__14824) : pred__14806.call(null,G__14823,G__14824));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,G__14799,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14825 = cljs.core.cst$kw$negative_DASH_listeners;
var G__14826 = expr__14807;
return (pred__14806.cljs$core$IFn$_invoke$arity$2 ? pred__14806.cljs$core$IFn$_invoke$arity$2(G__14825,G__14826) : pred__14806.call(null,G__14825,G__14826));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,G__14799,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14827 = cljs.core.cst$kw$msg_DASH_cache;
var G__14828 = expr__14807;
return (pred__14806.cljs$core$IFn$_invoke$arity$2 ? pred__14806.cljs$core$IFn$_invoke$arity$2(G__14827,G__14828) : pred__14806.call(null,G__14827,G__14828));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,G__14799,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14829 = cljs.core.cst$kw$nodes;
var G__14830 = expr__14807;
return (pred__14806.cljs$core$IFn$_invoke$arity$2 ? pred__14806.cljs$core$IFn$_invoke$arity$2(G__14829,G__14830) : pred__14806.call(null,G__14829,G__14830));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,G__14799,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14831 = cljs.core.cst$kw$success;
var G__14832 = expr__14807;
return (pred__14806.cljs$core$IFn$_invoke$arity$2 ? pred__14806.cljs$core$IFn$_invoke$arity$2(G__14831,G__14832) : pred__14806.call(null,G__14831,G__14832));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,G__14799,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14833 = cljs.core.cst$kw$failure;
var G__14834 = expr__14807;
return (pred__14806.cljs$core$IFn$_invoke$arity$2 ? pred__14806.cljs$core$IFn$_invoke$arity$2(G__14833,G__14834) : pred__14806.call(null,G__14833,G__14834));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,G__14799,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14835 = cljs.core.cst$kw$trace_QMARK_;
var G__14836 = expr__14807;
return (pred__14806.cljs$core$IFn$_invoke$arity$2 ? pred__14806.cljs$core$IFn$_invoke$arity$2(G__14835,G__14836) : pred__14806.call(null,G__14835,G__14836));
})())){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,G__14799,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8293__auto__,G__14799),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

instaparse.gll.Tramp.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8297__auto__){
var self__ = this;
var this__8297__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$grammar,self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$text,self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$segment,self__.segment],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fail_DASH_index,self__.fail_index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$node_DASH_builder,self__.node_builder],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$stack,self__.stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$next_DASH_stack,self__.next_stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$generation,self__.generation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$negative_DASH_listeners,self__.negative_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$msg_DASH_cache,self__.msg_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$nodes,self__.nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$success,self__.success],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$failure,self__.failure],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trace_QMARK_,self__.trace_QMARK_],null))], null),self__.__extmap));
});

instaparse.gll.Tramp.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8284__auto__,G__14799){
var self__ = this;
var this__8284__auto____$1 = this;
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,G__14799,self__.__extmap,self__.__hash));
});

instaparse.gll.Tramp.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8290__auto__,entry__8291__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8291__auto__)){
return this__8290__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8291__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8291__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8290__auto____$1,entry__8291__auto__);
}
});

instaparse.gll.Tramp.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$grammar,cljs.core.cst$sym$text,cljs.core.cst$sym$segment,cljs.core.cst$sym$fail_DASH_index,cljs.core.cst$sym$node_DASH_builder,cljs.core.cst$sym$stack,cljs.core.cst$sym$next_DASH_stack,cljs.core.cst$sym$generation,cljs.core.cst$sym$negative_DASH_listeners,cljs.core.cst$sym$msg_DASH_cache,cljs.core.cst$sym$nodes,cljs.core.cst$sym$success,cljs.core.cst$sym$failure,cljs.core.cst$sym$trace_QMARK_], null);
});

instaparse.gll.Tramp.cljs$lang$type = true;

instaparse.gll.Tramp.cljs$lang$ctorPrSeq = (function (this__8321__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"instaparse.gll/Tramp");
});

instaparse.gll.Tramp.cljs$lang$ctorPrWriter = (function (this__8321__auto__,writer__8322__auto__){
return cljs.core._write(writer__8322__auto__,"instaparse.gll/Tramp");
});

instaparse.gll.__GT_Tramp = (function instaparse$gll$__GT_Tramp(grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure,trace_QMARK_){
return (new instaparse.gll.Tramp(grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure,trace_QMARK_,null,null,null));
});

instaparse.gll.map__GT_Tramp = (function instaparse$gll$map__GT_Tramp(G__14803){
return (new instaparse.gll.Tramp(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(G__14803),cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__14803),cljs.core.cst$kw$segment.cljs$core$IFn$_invoke$arity$1(G__14803),cljs.core.cst$kw$fail_DASH_index.cljs$core$IFn$_invoke$arity$1(G__14803),cljs.core.cst$kw$node_DASH_builder.cljs$core$IFn$_invoke$arity$1(G__14803),cljs.core.cst$kw$stack.cljs$core$IFn$_invoke$arity$1(G__14803),cljs.core.cst$kw$next_DASH_stack.cljs$core$IFn$_invoke$arity$1(G__14803),cljs.core.cst$kw$generation.cljs$core$IFn$_invoke$arity$1(G__14803),cljs.core.cst$kw$negative_DASH_listeners.cljs$core$IFn$_invoke$arity$1(G__14803),cljs.core.cst$kw$msg_DASH_cache.cljs$core$IFn$_invoke$arity$1(G__14803),cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(G__14803),cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(G__14803),cljs.core.cst$kw$failure.cljs$core$IFn$_invoke$arity$1(G__14803),cljs.core.cst$kw$trace_QMARK_.cljs$core$IFn$_invoke$arity$1(G__14803),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14803,cljs.core.cst$kw$grammar,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$text,cljs.core.cst$kw$segment,cljs.core.cst$kw$fail_DASH_index,cljs.core.cst$kw$node_DASH_builder,cljs.core.cst$kw$stack,cljs.core.cst$kw$next_DASH_stack,cljs.core.cst$kw$generation,cljs.core.cst$kw$negative_DASH_listeners,cljs.core.cst$kw$msg_DASH_cache,cljs.core.cst$kw$nodes,cljs.core.cst$kw$success,cljs.core.cst$kw$failure,cljs.core.cst$kw$trace_QMARK_], 0))),null));
});

instaparse.gll.make_tramp = (function instaparse$gll$make_tramp(var_args){
var G__14839 = arguments.length;
switch (G__14839) {
case 2:
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2 = (function (grammar,text){
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5(grammar,text,instaparse.gll.text__GT_segment(text),(-1),null);
});

instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$3 = (function (grammar,text,segment){
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5(grammar,text,segment,(-1),null);
});

instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4 = (function (grammar,text,fail_index,node_builder){
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5(grammar,text,instaparse.gll.text__GT_segment(text),fail_index,node_builder);
});

instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5 = (function (grammar,text,segment,fail_index,node_builder){
return (new instaparse.gll.Tramp(grammar,text,segment,fail_index,node_builder,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map_by(cljs.core._GT_)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((new instaparse.gll.Failure((0),cljs.core.PersistentVector.EMPTY,null,null,null))),false,null,null,null));
});

instaparse.gll.make_tramp.cljs$lang$maxFixedArity = 5;

instaparse.gll.make_success = (function instaparse$gll$make_success(result,index){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$result,result,cljs.core.cst$kw$index,index], null);
});
instaparse.gll.total_success_QMARK_ = (function instaparse$gll$total_success_QMARK_(tramp,s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp)),cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(s));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
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
instaparse.gll.Node = (function (listeners,full_listeners,results,full_results,__meta,__extmap,__hash){
this.listeners = listeners;
this.full_listeners = full_listeners;
this.results = results;
this.full_results = full_results;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
instaparse.gll.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
return this__8285__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8286__auto__,null);
});

instaparse.gll.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8287__auto__,k14842,else__8288__auto__){
var self__ = this;
var this__8287__auto____$1 = this;
var G__14846 = k14842;
var G__14846__$1 = (((G__14846 instanceof cljs.core.Keyword))?G__14846.fqn:null);
switch (G__14846__$1) {
case "listeners":
return self__.listeners;

break;
case "full-listeners":
return self__.full_listeners;

break;
case "results":
return self__.results;

break;
case "full-results":
return self__.full_results;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14842,else__8288__auto__);

}
});

instaparse.gll.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8299__auto__,writer__8300__auto__,opts__8301__auto__){
var self__ = this;
var this__8299__auto____$1 = this;
var pr_pair__8302__auto__ = ((function (this__8299__auto____$1){
return (function (keyval__8303__auto__){
return cljs.core.pr_sequential_writer(writer__8300__auto__,cljs.core.pr_writer,""," ","",opts__8301__auto__,keyval__8303__auto__);
});})(this__8299__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8300__auto__,pr_pair__8302__auto__,"#instaparse.gll.Node{",", ","}",opts__8301__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$listeners,self__.listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$full_DASH_listeners,self__.full_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$results,self__.results],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$full_DASH_results,self__.full_results],null))], null),self__.__extmap));
});

instaparse.gll.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14841){
var self__ = this;
var G__14841__$1 = this;
return (new cljs.core.RecordIter((0),G__14841__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$listeners,cljs.core.cst$kw$full_DASH_listeners,cljs.core.cst$kw$results,cljs.core.cst$kw$full_DASH_results], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

instaparse.gll.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8283__auto__){
var self__ = this;
var this__8283__auto____$1 = this;
return self__.__meta;
});

instaparse.gll.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,self__.__extmap,self__.__hash));
});

instaparse.gll.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8289__auto__){
var self__ = this;
var this__8289__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

instaparse.gll.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8281__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
var h__8099__auto__ = self__.__hash;
if(!((h__8099__auto__ == null))){
return h__8099__auto__;
} else {
var h__8099__auto____$1 = (function (){var fexpr__14847 = ((function (h__8099__auto__,this__8281__auto____$1){
return (function (coll__8282__auto__){
return (-1610074144 ^ cljs.core.hash_unordered_coll(coll__8282__auto__));
});})(h__8099__auto__,this__8281__auto____$1))
;
return fexpr__14847(this__8281__auto____$1);
})();
self__.__hash = h__8099__auto____$1;

return h__8099__auto____$1;
}
});

instaparse.gll.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14843,other14844){
var self__ = this;
var this14843__$1 = this;
return (!((other14844 == null))) && ((this14843__$1.constructor === other14844.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14843__$1.listeners,other14844.listeners)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14843__$1.full_listeners,other14844.full_listeners)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14843__$1.results,other14844.results)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14843__$1.full_results,other14844.full_results)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14843__$1.__extmap,other14844.__extmap));
});

instaparse.gll.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8294__auto__,k__8295__auto__){
var self__ = this;
var this__8294__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$full_DASH_results,null,cljs.core.cst$kw$full_DASH_listeners,null,cljs.core.cst$kw$listeners,null,cljs.core.cst$kw$results,null], null), null),k__8295__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8294__auto____$1),self__.__meta),k__8295__auto__);
} else {
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8295__auto__)),null));
}
});

instaparse.gll.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8292__auto__,k__8293__auto__,G__14841){
var self__ = this;
var this__8292__auto____$1 = this;
var pred__14848 = cljs.core.keyword_identical_QMARK_;
var expr__14849 = k__8293__auto__;
if(cljs.core.truth_((function (){var G__14851 = cljs.core.cst$kw$listeners;
var G__14852 = expr__14849;
return (pred__14848.cljs$core$IFn$_invoke$arity$2 ? pred__14848.cljs$core$IFn$_invoke$arity$2(G__14851,G__14852) : pred__14848.call(null,G__14851,G__14852));
})())){
return (new instaparse.gll.Node(G__14841,self__.full_listeners,self__.results,self__.full_results,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14853 = cljs.core.cst$kw$full_DASH_listeners;
var G__14854 = expr__14849;
return (pred__14848.cljs$core$IFn$_invoke$arity$2 ? pred__14848.cljs$core$IFn$_invoke$arity$2(G__14853,G__14854) : pred__14848.call(null,G__14853,G__14854));
})())){
return (new instaparse.gll.Node(self__.listeners,G__14841,self__.results,self__.full_results,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14855 = cljs.core.cst$kw$results;
var G__14856 = expr__14849;
return (pred__14848.cljs$core$IFn$_invoke$arity$2 ? pred__14848.cljs$core$IFn$_invoke$arity$2(G__14855,G__14856) : pred__14848.call(null,G__14855,G__14856));
})())){
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,G__14841,self__.full_results,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14857 = cljs.core.cst$kw$full_DASH_results;
var G__14858 = expr__14849;
return (pred__14848.cljs$core$IFn$_invoke$arity$2 ? pred__14848.cljs$core$IFn$_invoke$arity$2(G__14857,G__14858) : pred__14848.call(null,G__14857,G__14858));
})())){
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,G__14841,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8293__auto__,G__14841),null));
}
}
}
}
});

instaparse.gll.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8297__auto__){
var self__ = this;
var this__8297__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$listeners,self__.listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$full_DASH_listeners,self__.full_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$results,self__.results],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$full_DASH_results,self__.full_results],null))], null),self__.__extmap));
});

instaparse.gll.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8284__auto__,G__14841){
var self__ = this;
var this__8284__auto____$1 = this;
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,G__14841,self__.__extmap,self__.__hash));
});

instaparse.gll.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8290__auto__,entry__8291__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8291__auto__)){
return this__8290__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8291__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8291__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8290__auto____$1,entry__8291__auto__);
}
});

instaparse.gll.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$listeners,cljs.core.cst$sym$full_DASH_listeners,cljs.core.cst$sym$results,cljs.core.cst$sym$full_DASH_results], null);
});

instaparse.gll.Node.cljs$lang$type = true;

instaparse.gll.Node.cljs$lang$ctorPrSeq = (function (this__8321__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"instaparse.gll/Node");
});

instaparse.gll.Node.cljs$lang$ctorPrWriter = (function (this__8321__auto__,writer__8322__auto__){
return cljs.core._write(writer__8322__auto__,"instaparse.gll/Node");
});

instaparse.gll.__GT_Node = (function instaparse$gll$__GT_Node(listeners,full_listeners,results,full_results){
return (new instaparse.gll.Node(listeners,full_listeners,results,full_results,null,null,null));
});

instaparse.gll.map__GT_Node = (function instaparse$gll$map__GT_Node(G__14845){
return (new instaparse.gll.Node(cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(G__14845),cljs.core.cst$kw$full_DASH_listeners.cljs$core$IFn$_invoke$arity$1(G__14845),cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(G__14845),cljs.core.cst$kw$full_DASH_results.cljs$core$IFn$_invoke$arity$1(G__14845),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14845,cljs.core.cst$kw$listeners,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$full_DASH_listeners,cljs.core.cst$kw$results,cljs.core.cst$kw$full_DASH_results], 0))),null));
});

instaparse.gll.make_node = (function instaparse$gll$make_node(){
return (new instaparse.gll.Node(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),null,null,null));
});
/**
 * Pushes an item onto the trampoline's stack
 */
instaparse.gll.push_stack = (function instaparse$gll$push_stack(tramp,item){

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$stack.cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.conj,item);
});
/**
 * Pushes onto stack a message to a given listener about a result
 */
instaparse.gll.push_message = (function instaparse$gll$push_message(tramp,listener,result){
var cache = cljs.core.cst$kw$msg_DASH_cache.cljs$core$IFn$_invoke$arity$1(tramp);
var i = cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(result);
var k = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [listener,i], null);
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(cache),k,(0));
var f = ((function (cache,i,k,c){
return (function (){
return (listener.cljs$core$IFn$_invoke$arity$1 ? listener.cljs$core$IFn$_invoke$arity$1(result) : listener.call(null,result));
});})(cache,i,k,c))
;

if((c > cljs.core.deref(cljs.core.cst$kw$generation.cljs$core$IFn$_invoke$arity$1(tramp)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$next_DASH_stack.cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.conj,f);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$stack.cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.conj,f);
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,k,(c + (1)));
});
/**
 * Tests whether node already has a listener
 */
instaparse.gll.listener_exists_QMARK_ = (function instaparse$gll$listener_exists_QMARK_(tramp,node_key){
var nodes = cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(tramp);
var temp__4657__auto__ = (function (){var fexpr__14860 = cljs.core.deref(nodes);
return (fexpr__14860.cljs$core$IFn$_invoke$arity$1 ? fexpr__14860.cljs$core$IFn$_invoke$arity$1(node_key) : fexpr__14860.call(null,node_key));
})();
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return (cljs.core.count(cljs.core.deref(cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(node))) > (0));
} else {
return null;
}
});
/**
 * Tests whether node already has a listener or full-listener
 */
instaparse.gll.full_listener_exists_QMARK_ = (function instaparse$gll$full_listener_exists_QMARK_(tramp,node_key){
var nodes = cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(tramp);
var temp__4657__auto__ = (function (){var fexpr__14861 = cljs.core.deref(nodes);
return (fexpr__14861.cljs$core$IFn$_invoke$arity$1 ? fexpr__14861.cljs$core$IFn$_invoke$arity$1(node_key) : fexpr__14861.call(null,node_key));
})();
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ((cljs.core.count(cljs.core.deref(cljs.core.cst$kw$full_DASH_listeners.cljs$core$IFn$_invoke$arity$1(node))) > (0))) || ((cljs.core.count(cljs.core.deref(cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(node))) > (0)));
} else {
return null;
}
});
/**
 * Tests whether node has a result or full-result
 */
instaparse.gll.result_exists_QMARK_ = (function instaparse$gll$result_exists_QMARK_(tramp,node_key){
var nodes = cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(tramp);
var temp__4657__auto__ = (function (){var fexpr__14862 = cljs.core.deref(nodes);
return (fexpr__14862.cljs$core$IFn$_invoke$arity$1 ? fexpr__14862.cljs$core$IFn$_invoke$arity$1(node_key) : fexpr__14862.call(null,node_key));
})();
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ((cljs.core.count(cljs.core.deref(cljs.core.cst$kw$full_DASH_results.cljs$core$IFn$_invoke$arity$1(node))) > (0))) || ((cljs.core.count(cljs.core.deref(cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(node))) > (0)));
} else {
return null;
}
});
/**
 * Tests whether node has a full-result
 */
instaparse.gll.full_result_exists_QMARK_ = (function instaparse$gll$full_result_exists_QMARK_(tramp,node_key){
var nodes = cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(tramp);
var temp__4657__auto__ = (function (){var fexpr__14863 = cljs.core.deref(nodes);
return (fexpr__14863.cljs$core$IFn$_invoke$arity$1 ? fexpr__14863.cljs$core$IFn$_invoke$arity$1(node_key) : fexpr__14863.call(null,node_key));
})();
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return (cljs.core.count(cljs.core.deref(cljs.core.cst$kw$full_DASH_results.cljs$core$IFn$_invoke$arity$1(node))) > (0));
} else {
return null;
}
});
/**
 * Gets node if already exists, otherwise creates one
 */
instaparse.gll.node_get = (function instaparse$gll$node_get(tramp,node_key){
var nodes = cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(tramp);
var temp__4655__auto__ = (function (){var fexpr__14864 = cljs.core.deref(nodes);
return (fexpr__14864.cljs$core$IFn$_invoke$arity$1 ? fexpr__14864.cljs$core$IFn$_invoke$arity$1(node_key) : fexpr__14864.call(null,node_key));
})();
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
return node;
} else {
var node = instaparse.gll.make_node();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,node_key,node);

return node;
}
});
instaparse.gll.safe_with_meta = (function instaparse$gll$safe_with_meta(obj,metamap){
if(((!((obj == null)))?((((obj.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IWithMeta$)))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,obj))){
return cljs.core.with_meta(obj,metamap);
} else {
return obj;
}
});
/**
 * Pushes a result into the trampoline's node.
 * Categorizes as either result or full-result.
 * Schedules notification to all existing listeners of result
 * (Full listeners only get notified about full results)
 */
instaparse.gll.push_result = (function instaparse$gll$push_result(tramp,node_key,result){

var node = instaparse.gll.node_get(tramp,node_key);
var parser = (node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((1)) : node_key.call(null,(1)));
var result__$1 = (cljs.core.truth_(cljs.core.cst$kw$hide.cljs$core$IFn$_invoke$arity$1(parser))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,cljs.core.cst$kw$result,null):result);
var result__$2 = (function (){var temp__4655__auto__ = cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1(parser);
if(cljs.core.truth_(temp__4655__auto__)){
var reduction_function = temp__4655__auto__;
return instaparse.gll.make_success(instaparse.gll.safe_with_meta(instaparse.reduction.apply_reduction(reduction_function,cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(result__$1)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$instaparse$gll_SLASH_start_DASH_index,(node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((0)) : node_key.call(null,(0))),cljs.core.cst$kw$instaparse$gll_SLASH_end_DASH_index,cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(result__$1)], null)),cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(result__$1));
} else {
return result__$1;
}
})();
var total_QMARK_ = instaparse.gll.total_success_QMARK_(tramp,result__$2);
var results = (cljs.core.truth_(total_QMARK_)?cljs.core.cst$kw$full_DASH_results.cljs$core$IFn$_invoke$arity$1(node):cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.not((function (){var fexpr__14866 = cljs.core.deref(results);
return (fexpr__14866.cljs$core$IFn$_invoke$arity$1 ? fexpr__14866.cljs$core$IFn$_invoke$arity$1(result__$2) : fexpr__14866.call(null,result__$2));
})())){

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,result__$2);

var seq__14867_14875 = cljs.core.seq(cljs.core.deref(cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(node)));
var chunk__14868_14876 = null;
var count__14869_14877 = (0);
var i__14870_14878 = (0);
while(true){
if((i__14870_14878 < count__14869_14877)){
var listener_14879 = chunk__14868_14876.cljs$core$IIndexed$_nth$arity$2(null,i__14870_14878);
instaparse.gll.push_message(tramp,listener_14879,result__$2);

var G__14880 = seq__14867_14875;
var G__14881 = chunk__14868_14876;
var G__14882 = count__14869_14877;
var G__14883 = (i__14870_14878 + (1));
seq__14867_14875 = G__14880;
chunk__14868_14876 = G__14881;
count__14869_14877 = G__14882;
i__14870_14878 = G__14883;
continue;
} else {
var temp__4657__auto___14884 = cljs.core.seq(seq__14867_14875);
if(temp__4657__auto___14884){
var seq__14867_14885__$1 = temp__4657__auto___14884;
if(cljs.core.chunked_seq_QMARK_(seq__14867_14885__$1)){
var c__8484__auto___14886 = cljs.core.chunk_first(seq__14867_14885__$1);
var G__14887 = cljs.core.chunk_rest(seq__14867_14885__$1);
var G__14888 = c__8484__auto___14886;
var G__14889 = cljs.core.count(c__8484__auto___14886);
var G__14890 = (0);
seq__14867_14875 = G__14887;
chunk__14868_14876 = G__14888;
count__14869_14877 = G__14889;
i__14870_14878 = G__14890;
continue;
} else {
var listener_14891 = cljs.core.first(seq__14867_14885__$1);
instaparse.gll.push_message(tramp,listener_14891,result__$2);

var G__14892 = cljs.core.next(seq__14867_14885__$1);
var G__14893 = null;
var G__14894 = (0);
var G__14895 = (0);
seq__14867_14875 = G__14892;
chunk__14868_14876 = G__14893;
count__14869_14877 = G__14894;
i__14870_14878 = G__14895;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(total_QMARK_)){
var seq__14871 = cljs.core.seq(cljs.core.deref(cljs.core.cst$kw$full_DASH_listeners.cljs$core$IFn$_invoke$arity$1(node)));
var chunk__14872 = null;
var count__14873 = (0);
var i__14874 = (0);
while(true){
if((i__14874 < count__14873)){
var listener = chunk__14872.cljs$core$IIndexed$_nth$arity$2(null,i__14874);
instaparse.gll.push_message(tramp,listener,result__$2);

var G__14896 = seq__14871;
var G__14897 = chunk__14872;
var G__14898 = count__14873;
var G__14899 = (i__14874 + (1));
seq__14871 = G__14896;
chunk__14872 = G__14897;
count__14873 = G__14898;
i__14874 = G__14899;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14871);
if(temp__4657__auto__){
var seq__14871__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14871__$1)){
var c__8484__auto__ = cljs.core.chunk_first(seq__14871__$1);
var G__14900 = cljs.core.chunk_rest(seq__14871__$1);
var G__14901 = c__8484__auto__;
var G__14902 = cljs.core.count(c__8484__auto__);
var G__14903 = (0);
seq__14871 = G__14900;
chunk__14872 = G__14901;
count__14873 = G__14902;
i__14874 = G__14903;
continue;
} else {
var listener = cljs.core.first(seq__14871__$1);
instaparse.gll.push_message(tramp,listener,result__$2);

var G__14904 = cljs.core.next(seq__14871__$1);
var G__14905 = null;
var G__14906 = (0);
var G__14907 = (0);
seq__14871 = G__14904;
chunk__14872 = G__14905;
count__14873 = G__14906;
i__14874 = G__14907;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Pushes a listener into the trampoline's node.
 * Schedules notification to listener of all existing results.
 * Initiates parse if necessary
 */
instaparse.gll.push_listener = (function instaparse$gll$push_listener(tramp,node_key,listener){
var listener_already_exists_QMARK_ = instaparse.gll.listener_exists_QMARK_(tramp,node_key);
var node = instaparse.gll.node_get(tramp,node_key);
var listeners = cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(node);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners,cljs.core.conj,listener);

var seq__14908_14916 = cljs.core.seq(cljs.core.deref(cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(node)));
var chunk__14909_14917 = null;
var count__14910_14918 = (0);
var i__14911_14919 = (0);
while(true){
if((i__14911_14919 < count__14910_14918)){
var result_14920 = chunk__14909_14917.cljs$core$IIndexed$_nth$arity$2(null,i__14911_14919);
instaparse.gll.push_message(tramp,listener,result_14920);

var G__14921 = seq__14908_14916;
var G__14922 = chunk__14909_14917;
var G__14923 = count__14910_14918;
var G__14924 = (i__14911_14919 + (1));
seq__14908_14916 = G__14921;
chunk__14909_14917 = G__14922;
count__14910_14918 = G__14923;
i__14911_14919 = G__14924;
continue;
} else {
var temp__4657__auto___14925 = cljs.core.seq(seq__14908_14916);
if(temp__4657__auto___14925){
var seq__14908_14926__$1 = temp__4657__auto___14925;
if(cljs.core.chunked_seq_QMARK_(seq__14908_14926__$1)){
var c__8484__auto___14927 = cljs.core.chunk_first(seq__14908_14926__$1);
var G__14928 = cljs.core.chunk_rest(seq__14908_14926__$1);
var G__14929 = c__8484__auto___14927;
var G__14930 = cljs.core.count(c__8484__auto___14927);
var G__14931 = (0);
seq__14908_14916 = G__14928;
chunk__14909_14917 = G__14929;
count__14910_14918 = G__14930;
i__14911_14919 = G__14931;
continue;
} else {
var result_14932 = cljs.core.first(seq__14908_14926__$1);
instaparse.gll.push_message(tramp,listener,result_14932);

var G__14933 = cljs.core.next(seq__14908_14926__$1);
var G__14934 = null;
var G__14935 = (0);
var G__14936 = (0);
seq__14908_14916 = G__14933;
chunk__14909_14917 = G__14934;
count__14910_14918 = G__14935;
i__14911_14919 = G__14936;
continue;
}
} else {
}
}
break;
}

var seq__14912_14937 = cljs.core.seq(cljs.core.deref(cljs.core.cst$kw$full_DASH_results.cljs$core$IFn$_invoke$arity$1(node)));
var chunk__14913_14938 = null;
var count__14914_14939 = (0);
var i__14915_14940 = (0);
while(true){
if((i__14915_14940 < count__14914_14939)){
var result_14941 = chunk__14913_14938.cljs$core$IIndexed$_nth$arity$2(null,i__14915_14940);
instaparse.gll.push_message(tramp,listener,result_14941);

var G__14942 = seq__14912_14937;
var G__14943 = chunk__14913_14938;
var G__14944 = count__14914_14939;
var G__14945 = (i__14915_14940 + (1));
seq__14912_14937 = G__14942;
chunk__14913_14938 = G__14943;
count__14914_14939 = G__14944;
i__14915_14940 = G__14945;
continue;
} else {
var temp__4657__auto___14946 = cljs.core.seq(seq__14912_14937);
if(temp__4657__auto___14946){
var seq__14912_14947__$1 = temp__4657__auto___14946;
if(cljs.core.chunked_seq_QMARK_(seq__14912_14947__$1)){
var c__8484__auto___14948 = cljs.core.chunk_first(seq__14912_14947__$1);
var G__14949 = cljs.core.chunk_rest(seq__14912_14947__$1);
var G__14950 = c__8484__auto___14948;
var G__14951 = cljs.core.count(c__8484__auto___14948);
var G__14952 = (0);
seq__14912_14937 = G__14949;
chunk__14913_14938 = G__14950;
count__14914_14939 = G__14951;
i__14915_14940 = G__14952;
continue;
} else {
var result_14953 = cljs.core.first(seq__14912_14947__$1);
instaparse.gll.push_message(tramp,listener,result_14953);

var G__14954 = cljs.core.next(seq__14912_14947__$1);
var G__14955 = null;
var G__14956 = (0);
var G__14957 = (0);
seq__14912_14937 = G__14954;
chunk__14913_14938 = G__14955;
count__14914_14939 = G__14956;
i__14915_14940 = G__14957;
continue;
}
} else {
}
}
break;
}

if(cljs.core.not(listener_already_exists_QMARK_)){
return instaparse.gll.push_stack(tramp,((function (listener_already_exists_QMARK_,node,listeners){
return (function (){
return instaparse.gll._parse((node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((1)) : node_key.call(null,(1))),(node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((0)) : node_key.call(null,(0))),tramp);
});})(listener_already_exists_QMARK_,node,listeners))
);
} else {
return null;
}
});
/**
 * Pushes a listener into the trampoline's node.
 * Schedules notification to listener of all existing full results.
 */
instaparse.gll.push_full_listener = (function instaparse$gll$push_full_listener(tramp,node_key,listener){
var full_listener_already_exists_QMARK_ = instaparse.gll.full_listener_exists_QMARK_(tramp,node_key);
var node = instaparse.gll.node_get(tramp,node_key);
var listeners = cljs.core.cst$kw$full_DASH_listeners.cljs$core$IFn$_invoke$arity$1(node);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners,cljs.core.conj,listener);

var seq__14958_14962 = cljs.core.seq(cljs.core.deref(cljs.core.cst$kw$full_DASH_results.cljs$core$IFn$_invoke$arity$1(node)));
var chunk__14959_14963 = null;
var count__14960_14964 = (0);
var i__14961_14965 = (0);
while(true){
if((i__14961_14965 < count__14960_14964)){
var result_14966 = chunk__14959_14963.cljs$core$IIndexed$_nth$arity$2(null,i__14961_14965);
instaparse.gll.push_message(tramp,listener,result_14966);

var G__14967 = seq__14958_14962;
var G__14968 = chunk__14959_14963;
var G__14969 = count__14960_14964;
var G__14970 = (i__14961_14965 + (1));
seq__14958_14962 = G__14967;
chunk__14959_14963 = G__14968;
count__14960_14964 = G__14969;
i__14961_14965 = G__14970;
continue;
} else {
var temp__4657__auto___14971 = cljs.core.seq(seq__14958_14962);
if(temp__4657__auto___14971){
var seq__14958_14972__$1 = temp__4657__auto___14971;
if(cljs.core.chunked_seq_QMARK_(seq__14958_14972__$1)){
var c__8484__auto___14973 = cljs.core.chunk_first(seq__14958_14972__$1);
var G__14974 = cljs.core.chunk_rest(seq__14958_14972__$1);
var G__14975 = c__8484__auto___14973;
var G__14976 = cljs.core.count(c__8484__auto___14973);
var G__14977 = (0);
seq__14958_14962 = G__14974;
chunk__14959_14963 = G__14975;
count__14960_14964 = G__14976;
i__14961_14965 = G__14977;
continue;
} else {
var result_14978 = cljs.core.first(seq__14958_14972__$1);
instaparse.gll.push_message(tramp,listener,result_14978);

var G__14979 = cljs.core.next(seq__14958_14972__$1);
var G__14980 = null;
var G__14981 = (0);
var G__14982 = (0);
seq__14958_14962 = G__14979;
chunk__14959_14963 = G__14980;
count__14960_14964 = G__14981;
i__14961_14965 = G__14982;
continue;
}
} else {
}
}
break;
}

if(cljs.core.not(full_listener_already_exists_QMARK_)){
return instaparse.gll.push_stack(tramp,((function (full_listener_already_exists_QMARK_,node,listeners){
return (function (){
return instaparse.gll._full_parse((node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((1)) : node_key.call(null,(1))),(node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((0)) : node_key.call(null,(0))),tramp);
});})(full_listener_already_exists_QMARK_,node,listeners))
);
} else {
return null;
}
});
instaparse.gll.merge_negative_listeners = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.into);
/**
 * Pushes a thunk onto the trampoline's negative-listener stack.
 */
instaparse.gll.push_negative_listener = (function instaparse$gll$push_negative_listener(tramp,creator,negative_listener){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$negative_DASH_listeners.cljs$core$IFn$_invoke$arity$1(tramp),instaparse.gll.merge_negative_listeners,cljs.core.PersistentArrayMap.createAsIfByAssoc([(creator.cljs$core$IFn$_invoke$arity$1 ? creator.cljs$core$IFn$_invoke$arity$1((0)) : creator.call(null,(0))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negative_listener], null)]));
});
instaparse.gll.fail = (function instaparse$gll$fail(tramp,node_key,index,reason){

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$failure.cljs$core$IFn$_invoke$arity$1(tramp),(function (failure){
var current_index = cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(failure);
var G__14983 = cljs.core.compare(index,current_index);
switch (G__14983) {
case (1):
return (new instaparse.gll.Failure(index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reason], null),null,null,null));

break;
case (0):
return (new instaparse.gll.Failure(index,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reason.cljs$core$IFn$_invoke$arity$1(failure),reason),null,null,null));

break;
case (-1):
return failure;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14983)].join('')));

}
}));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.cst$kw$fail_DASH_index.cljs$core$IFn$_invoke$arity$1(tramp))){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success((function (){var G__14984 = cljs.core.cst$kw$node_DASH_builder.cljs$core$IFn$_invoke$arity$1(tramp);
var G__14985 = cljs.core.cst$kw$instaparse_SLASH_failure;
var G__14986 = (function (){var G__14989 = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp);
var G__14990 = index;
return (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2(G__14989,G__14990) : instaparse.gll.sub_sequence.call(null,G__14989,G__14990));
})();
var G__14987 = index;
var G__14988 = cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp));
return (instaparse.gll.build_node_with_meta.cljs$core$IFn$_invoke$arity$5 ? instaparse.gll.build_node_with_meta.cljs$core$IFn$_invoke$arity$5(G__14984,G__14985,G__14986,G__14987,G__14988) : instaparse.gll.build_node_with_meta.call(null,G__14984,G__14985,G__14986,G__14987,G__14988));
})(),cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp))));
} else {
return null;
}
});
/**
 * Executes one thing on the stack (not threadsafe)
 */
instaparse.gll.step = (function instaparse$gll$step(stack){
var top = cljs.core.peek(cljs.core.deref(stack));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.pop);

return (top.cljs$core$IFn$_invoke$arity$0 ? top.cljs$core$IFn$_invoke$arity$0() : top.call(null));
});
/**
 * Executes the stack until exhausted
 */
instaparse.gll.run = (function instaparse$gll$run(var_args){
var G__14993 = arguments.length;
switch (G__14993) {
case 1:
return instaparse.gll.run.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return instaparse.gll.run.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

instaparse.gll.run.cljs$core$IFn$_invoke$arity$1 = (function (tramp){
return instaparse.gll.run.cljs$core$IFn$_invoke$arity$2(tramp,null);
});

instaparse.gll.run.cljs$core$IFn$_invoke$arity$2 = (function (tramp,found_result_QMARK_){
while(true){
var stack = cljs.core.cst$kw$stack.cljs$core$IFn$_invoke$arity$1(tramp);
if(cljs.core.truth_(cljs.core.deref(cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(tramp)))){

return cljs.core.cons(cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(tramp))),(new cljs.core.LazySeq(null,((function (tramp,found_result_QMARK_,stack){
return (function (){
cljs.core.reset_BANG_(cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(tramp),null);

return instaparse.gll.run.cljs$core$IFn$_invoke$arity$2(tramp,true);
});})(tramp,found_result_QMARK_,stack))
,null,null)));
} else {
if((cljs.core.count(cljs.core.deref(stack)) > (0))){
instaparse.gll.step(stack);

var G__14998 = tramp;
var G__14999 = found_result_QMARK_;
tramp = G__14998;
found_result_QMARK_ = G__14999;
continue;
} else {
if((cljs.core.count(cljs.core.deref(cljs.core.cst$kw$negative_DASH_listeners.cljs$core$IFn$_invoke$arity$1(tramp))) > (0))){
var vec__14994 = cljs.core.first(cljs.core.deref(cljs.core.cst$kw$negative_DASH_listeners.cljs$core$IFn$_invoke$arity$1(tramp)));
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14994,(0),null);
var listeners = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14994,(1),null);
var listener = cljs.core.peek(listeners);

(listener.cljs$core$IFn$_invoke$arity$0 ? listener.cljs$core$IFn$_invoke$arity$0() : listener.call(null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(listeners),(1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$negative_DASH_listeners.cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.dissoc,index);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$negative_DASH_listeners.cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [index], null),cljs.core.pop);
}

var G__15000 = tramp;
var G__15001 = found_result_QMARK_;
tramp = G__15000;
found_result_QMARK_ = G__15001;
continue;
} else {
if(cljs.core.truth_(found_result_QMARK_)){
var next_stack = cljs.core.cst$kw$next_DASH_stack.cljs$core$IFn$_invoke$arity$1(tramp);
cljs.core.reset_BANG_(stack,cljs.core.deref(next_stack));

cljs.core.reset_BANG_(next_stack,cljs.core.PersistentVector.EMPTY);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$generation.cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.inc);

var G__15002 = tramp;
var G__15003 = null;
tramp = G__15002;
found_result_QMARK_ = G__15003;
continue;
} else {
return null;

}
}
}
}
break;
}
});

instaparse.gll.run.cljs$lang$maxFixedArity = 2;

instaparse.gll.NodeListener = (function instaparse$gll$NodeListener(node_key,tramp){
return (function (result){
return instaparse.gll.push_result(tramp,node_key,result);
});
});
instaparse.gll.LookListener = (function instaparse$gll$LookListener(node_key,tramp){
return (function (result){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(null,(node_key.cljs$core$IFn$_invoke$arity$1 ? node_key.cljs$core$IFn$_invoke$arity$1((0)) : node_key.call(null,(0)))));
});
});
instaparse.gll.CatListener = (function instaparse$gll$CatListener(results_so_far,parser_sequence,node_key,tramp){

return (function (result){
var map__15004 = result;
var map__15004__$1 = ((((!((map__15004 == null)))?((((map__15004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15004.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15004):map__15004);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15004__$1,cljs.core.cst$kw$result);
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15004__$1,cljs.core.cst$kw$index);
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
if(cljs.core.seq(parser_sequence)){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first(parser_sequence)], null),(function (){var G__15006 = new_results_so_far;
var G__15007 = cljs.core.next(parser_sequence);
var G__15008 = node_key;
var G__15009 = tramp;
return (instaparse.gll.CatListener.cljs$core$IFn$_invoke$arity$4 ? instaparse.gll.CatListener.cljs$core$IFn$_invoke$arity$4(G__15006,G__15007,G__15008,G__15009) : instaparse.gll.CatListener.call(null,G__15006,G__15007,G__15008,G__15009));
})());
} else {
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
}
});
});
instaparse.gll.CatFullListener = (function instaparse$gll$CatFullListener(results_so_far,parser_sequence,node_key,tramp){
return (function (result){
var map__15010 = result;
var map__15010__$1 = ((((!((map__15010 == null)))?((((map__15010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15010.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15010):map__15010);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15010__$1,cljs.core.cst$kw$result);
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15010__$1,cljs.core.cst$kw$index);
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
if(cljs.core.truth_(instaparse.reduction.singleton_QMARK_(parser_sequence))){
return instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first(parser_sequence)], null),(function (){var G__15012 = new_results_so_far;
var G__15013 = cljs.core.next(parser_sequence);
var G__15014 = node_key;
var G__15015 = tramp;
return (instaparse.gll.CatFullListener.cljs$core$IFn$_invoke$arity$4 ? instaparse.gll.CatFullListener.cljs$core$IFn$_invoke$arity$4(G__15012,G__15013,G__15014,G__15015) : instaparse.gll.CatFullListener.call(null,G__15012,G__15013,G__15014,G__15015));
})());
} else {
if(cljs.core.seq(parser_sequence)){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first(parser_sequence)], null),(function (){var G__15016 = new_results_so_far;
var G__15017 = cljs.core.next(parser_sequence);
var G__15018 = node_key;
var G__15019 = tramp;
return (instaparse.gll.CatFullListener.cljs$core$IFn$_invoke$arity$4 ? instaparse.gll.CatFullListener.cljs$core$IFn$_invoke$arity$4(G__15016,G__15017,G__15018,G__15019) : instaparse.gll.CatFullListener.call(null,G__15016,G__15017,G__15018,G__15019));
})());
} else {
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));

}
}
});
});
instaparse.gll.PlusListener = (function instaparse$gll$PlusListener(results_so_far,parser,prev_index,node_key,tramp){
return (function (result){
var map__15020 = result;
var map__15020__$1 = ((((!((map__15020 == null)))?((((map__15020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15020.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15020):map__15020);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15020__$1,cljs.core.cst$kw$result);
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15020__$1,cljs.core.cst$kw$index);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,prev_index)){
if((cljs.core.count(results_so_far) === (0))){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(null,continue_index));
} else {
return null;
}
} else {
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),(instaparse.gll.PlusListener.cljs$core$IFn$_invoke$arity$5 ? instaparse.gll.PlusListener.cljs$core$IFn$_invoke$arity$5(new_results_so_far,parser,continue_index,node_key,tramp) : instaparse.gll.PlusListener.call(null,new_results_so_far,parser,continue_index,node_key,tramp)));

return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
}
});
});
instaparse.gll.PlusFullListener = (function instaparse$gll$PlusFullListener(results_so_far,parser,prev_index,node_key,tramp){
return (function (result){
var map__15022 = result;
var map__15022__$1 = ((((!((map__15022 == null)))?((((map__15022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15022.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15022):map__15022);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15022__$1,cljs.core.cst$kw$result);
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15022__$1,cljs.core.cst$kw$index);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,prev_index)){
if((cljs.core.count(results_so_far) === (0))){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(null,continue_index));
} else {
return null;
}
} else {
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
} else {
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),(instaparse.gll.PlusFullListener.cljs$core$IFn$_invoke$arity$5 ? instaparse.gll.PlusFullListener.cljs$core$IFn$_invoke$arity$5(new_results_so_far,parser,continue_index,node_key,tramp) : instaparse.gll.PlusFullListener.call(null,new_results_so_far,parser,continue_index,node_key,tramp)));
}
}
});
});
instaparse.gll.RepListener = (function instaparse$gll$RepListener(results_so_far,n_results_so_far,parser,m,n,prev_index,node_key,tramp){
return (function (result){
var map__15024 = result;
var map__15024__$1 = ((((!((map__15024 == null)))?((((map__15024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15024.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15024):map__15024);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15024__$1,cljs.core.cst$kw$result);
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15024__$1,cljs.core.cst$kw$index);
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
var new_n_results_so_far = (n_results_so_far + (1));
if(((m <= new_n_results_so_far)) && ((new_n_results_so_far <= n))){
instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
} else {
}

if((new_n_results_so_far < n)){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),(instaparse.gll.RepListener.cljs$core$IFn$_invoke$arity$8 ? instaparse.gll.RepListener.cljs$core$IFn$_invoke$arity$8(new_results_so_far,new_n_results_so_far,parser,m,n,continue_index,node_key,tramp) : instaparse.gll.RepListener.call(null,new_results_so_far,new_n_results_so_far,parser,m,n,continue_index,node_key,tramp)));
} else {
return null;
}
});
});
instaparse.gll.RepFullListener = (function instaparse$gll$RepFullListener(results_so_far,n_results_so_far,parser,m,n,prev_index,node_key,tramp){
return (function (result){
var map__15026 = result;
var map__15026__$1 = ((((!((map__15026 == null)))?((((map__15026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15026.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15026):map__15026);
var parsed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15026__$1,cljs.core.cst$kw$result);
var continue_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15026__$1,cljs.core.cst$kw$index);
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat(results_so_far,parsed_result);
var new_n_results_so_far = (n_results_so_far + (1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(continue_index,cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp)))){
if(((m <= new_n_results_so_far)) && ((new_n_results_so_far <= n))){
return instaparse.gll.push_result(tramp,node_key,instaparse.gll.make_success(new_results_so_far,continue_index));
} else {
return null;
}
} else {
if((new_n_results_so_far < n)){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),(instaparse.gll.RepFullListener.cljs$core$IFn$_invoke$arity$8 ? instaparse.gll.RepFullListener.cljs$core$IFn$_invoke$arity$8(new_results_so_far,new_n_results_so_far,parser,m,n,continue_index,node_key,tramp) : instaparse.gll.RepFullListener.call(null,new_results_so_far,new_n_results_so_far,parser,m,n,continue_index,node_key,tramp)));
} else {
return null;
}
}
});
});
instaparse.gll.TopListener = (function instaparse$gll$TopListener(tramp){
return (function (result){
return cljs.core.reset_BANG_(cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(tramp),result);
});
});
instaparse.gll.string_parse = (function instaparse$gll$string_parse(this$,index,tramp){
var string = cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(this$);
var text = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp);
var end = (function (){var x__8002__auto__ = cljs.core.count(text);
var y__8003__auto__ = (index + cljs.core.count(string));
return ((x__8002__auto__ < y__8003__auto__) ? x__8002__auto__ : y__8003__auto__);
})();
var head = (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3(text,index,end) : instaparse.gll.sub_sequence.call(null,text,index,end));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(string,head)){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(string,end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$expecting,string], null));
}
});
instaparse.gll.string_full_parse = (function instaparse$gll$string_full_parse(this$,index,tramp){
var string = cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(this$);
var text = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp);
var end = (function (){var x__8002__auto__ = cljs.core.count(text);
var y__8003__auto__ = (index + cljs.core.count(string));
return ((x__8002__auto__ < y__8003__auto__) ? x__8002__auto__ : y__8003__auto__);
})();
var head = (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3(text,index,end) : instaparse.gll.sub_sequence.call(null,text,index,end));
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,cljs.core.count(text))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(string,head))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(string,end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$expecting,string,cljs.core.cst$kw$full,true], null));
}
});
instaparse.gll.equals_ignore_case = (function instaparse$gll$equals_ignore_case(s1,s2){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1.toUpperCase(),s2.toUpperCase());
});
instaparse.gll.string_case_insensitive_parse = (function instaparse$gll$string_case_insensitive_parse(this$,index,tramp){
var string = cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(this$);
var text = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp);
var end = (function (){var x__8002__auto__ = cljs.core.count(text);
var y__8003__auto__ = (index + cljs.core.count(string));
return ((x__8002__auto__ < y__8003__auto__) ? x__8002__auto__ : y__8003__auto__);
})();
var head = (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3(text,index,end) : instaparse.gll.sub_sequence.call(null,text,index,end));
if(cljs.core.truth_(instaparse.gll.equals_ignore_case(string,head))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(string,end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$expecting,string], null));
}
});
instaparse.gll.string_case_insensitive_full_parse = (function instaparse$gll$string_case_insensitive_full_parse(this$,index,tramp){
var string = cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(this$);
var text = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp);
var end = (function (){var x__8002__auto__ = cljs.core.count(text);
var y__8003__auto__ = (index + cljs.core.count(string));
return ((x__8002__auto__ < y__8003__auto__) ? x__8002__auto__ : y__8003__auto__);
})();
var head = (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$3(text,index,end) : instaparse.gll.sub_sequence.call(null,text,index,end));
if(cljs.core.truth_((function (){var and__7633__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,cljs.core.count(text));
if(and__7633__auto__){
return instaparse.gll.equals_ignore_case(string,head);
} else {
return and__7633__auto__;
}
})())){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(string,end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$expecting,string,cljs.core.cst$kw$full,true], null));
}
});
instaparse.gll.single_char_code_at = (function instaparse$gll$single_char_code_at(text,index){
return text.charCodeAt(index);
});
instaparse.gll.unicode_code_point_at = (function instaparse$gll$unicode_code_point_at(text,index){
var G__15028 = text;
var G__15029 = (index | (0));
return goog.i18n.uChar.getCodePointAround(G__15028,G__15029);
});
instaparse.gll.code_point__GT_chars = (function instaparse$gll$code_point__GT_chars(code_point){
return goog.i18n.uChar.fromCharCode(code_point);
});
instaparse.gll.char_range_parse = (function instaparse$gll$char_range_parse(this$,index,tramp){
var lo = cljs.core.cst$kw$lo.cljs$core$IFn$_invoke$arity$1(this$);
var hi = cljs.core.cst$kw$hi.cljs$core$IFn$_invoke$arity$1(this$);
var text = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp);
if((index >= cljs.core.count(text))){
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$char,cljs.core.cst$kw$expecting,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$char_DASH_range,true,cljs.core.cst$kw$lo,lo,cljs.core.cst$kw$hi,hi], null)], null));
} else {
if((hi <= (65535))){
var code = instaparse.gll.single_char_code_at(text,index);
if(((lo <= code)) && ((code <= hi))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$(code))].join(''),(index + (1))));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$char,cljs.core.cst$kw$expecting,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$char_DASH_range,true,cljs.core.cst$kw$lo,lo,cljs.core.cst$kw$hi,hi], null)], null));
}
} else {
var code_point = instaparse.gll.unicode_code_point_at(text,index);
var char_string = instaparse.gll.code_point__GT_chars(code_point);
if(((lo <= code_point)) && ((code_point <= hi))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(char_string,(index + cljs.core.count(char_string))));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$char,cljs.core.cst$kw$expecting,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$char_DASH_range,true,cljs.core.cst$kw$lo,lo,cljs.core.cst$kw$hi,hi], null)], null));
}

}
}
});
instaparse.gll.char_range_full_parse = (function instaparse$gll$char_range_full_parse(this$,index,tramp){
var lo = cljs.core.cst$kw$lo.cljs$core$IFn$_invoke$arity$1(this$);
var hi = cljs.core.cst$kw$hi.cljs$core$IFn$_invoke$arity$1(this$);
var text = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp);
var end = cljs.core.count(text);
if((index >= cljs.core.count(text))){
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$char,cljs.core.cst$kw$expecting,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$char_DASH_range,true,cljs.core.cst$kw$lo,lo,cljs.core.cst$kw$hi,hi], null)], null));
} else {
if((hi <= (65535))){
var code = instaparse.gll.single_char_code_at(text,index);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((index + (1)),end)) && (((lo <= code)) && ((code <= hi)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$(code))].join(''),end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$char,cljs.core.cst$kw$expecting,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$char_DASH_range,true,cljs.core.cst$kw$lo,lo,cljs.core.cst$kw$hi,hi], null)], null));
}
} else {
var code_point = instaparse.gll.unicode_code_point_at(text,index);
var char_string = instaparse.gll.code_point__GT_chars(code_point);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((index + cljs.core.count(char_string)),end)) && (((lo <= code_point)) && ((code_point <= hi)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(char_string,end));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$char,cljs.core.cst$kw$expecting,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$char_DASH_range,true,cljs.core.cst$kw$lo,lo,cljs.core.cst$kw$hi,hi], null),cljs.core.cst$kw$full,true], null));
}

}
}
});
instaparse.gll.re_match_at_front = (function instaparse$gll$re_match_at_front(regexp,text){
var re = (new RegExp(regexp.source,"g"));
var m = re.exec(text);
if(cljs.core.truth_((function (){var and__7633__auto__ = m;
if(cljs.core.truth_(and__7633__auto__)){
return (m.index === (0));
} else {
return and__7633__auto__;
}
})())){
return cljs.core.first(m);
} else {
return null;
}
});
instaparse.gll.regexp_parse = (function instaparse$gll$regexp_parse(this$,index,tramp){
var regexp = cljs.core.cst$kw$regexp.cljs$core$IFn$_invoke$arity$1(this$);
var text = cljs.core.cst$kw$segment.cljs$core$IFn$_invoke$arity$1(tramp);
var substring = (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2(text,index) : instaparse.gll.sub_sequence.call(null,text,index));
var match = instaparse.gll.re_match_at_front(regexp,substring);
if(cljs.core.truth_(match)){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(match,(index + cljs.core.count(match))));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$regexp,cljs.core.cst$kw$expecting,regexp], null));
}
});
instaparse.gll.regexp_full_parse = (function instaparse$gll$regexp_full_parse(this$,index,tramp){
var regexp = cljs.core.cst$kw$regexp.cljs$core$IFn$_invoke$arity$1(this$);
var text = cljs.core.cst$kw$segment.cljs$core$IFn$_invoke$arity$1(tramp);
var substring = (instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2 ? instaparse.gll.sub_sequence.cljs$core$IFn$_invoke$arity$2(text,index) : instaparse.gll.sub_sequence.call(null,text,index));
var match = instaparse.gll.re_match_at_front(regexp,substring);
var desired_length = (cljs.core.count(text) - index);
if(cljs.core.truth_((function (){var and__7633__auto__ = match;
if(cljs.core.truth_(and__7633__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(match),desired_length);
} else {
return and__7633__auto__;
}
})())){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(match,cljs.core.count(text)));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$regexp,cljs.core.cst$kw$expecting,regexp,cljs.core.cst$kw$full,true], null));
}
});
instaparse.gll.cat_parse = (function instaparse$gll$cat_parse(this$,index,tramp){
var parsers = cljs.core.cst$kw$parsers.cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cljs.core.first(parsers)], null),instaparse.gll.CatListener(instaparse.auto_flatten_seq.EMPTY,cljs.core.next(parsers),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.cat_full_parse = (function instaparse$gll$cat_full_parse(this$,index,tramp){
var parsers = cljs.core.cst$kw$parsers.cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cljs.core.first(parsers)], null),instaparse.gll.CatFullListener(instaparse.auto_flatten_seq.EMPTY,cljs.core.next(parsers),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.plus_parse = (function instaparse$gll$plus_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusListener(instaparse.auto_flatten_seq.EMPTY,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.plus_full_parse = (function instaparse$gll$plus_full_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusFullListener(instaparse.auto_flatten_seq.EMPTY,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.rep_parse = (function instaparse$gll$rep_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
var m = cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(this$);
var n = cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1(this$);
if((m === (0))){
instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));

if((n >= (1))){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepListener(instaparse.auto_flatten_seq.EMPTY,(0),parser,(1),n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
} else {
return null;
}
} else {
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepListener(instaparse.auto_flatten_seq.EMPTY,(0),parser,m,n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});
instaparse.gll.rep_full_parse = (function instaparse$gll$rep_full_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
var m = cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(this$);
var n = cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1(this$);
if((m === (0))){
instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));

if((n >= (1))){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepFullListener(instaparse.auto_flatten_seq.EMPTY,(0),parser,(1),n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
} else {
return null;
}
} else {
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepFullListener(instaparse.auto_flatten_seq.EMPTY,(0),parser,m,n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});
instaparse.gll.star_parse = (function instaparse$gll$star_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusListener(instaparse.auto_flatten_seq.EMPTY,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
});
instaparse.gll.star_full_parse = (function instaparse$gll$star_full_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
} else {
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusFullListener(instaparse.auto_flatten_seq.EMPTY,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});
instaparse.gll.alt_parse = (function instaparse$gll$alt_parse(this$,index,tramp){
var parsers = cljs.core.cst$kw$parsers.cljs$core$IFn$_invoke$arity$1(this$);
var seq__15030 = cljs.core.seq(parsers);
var chunk__15031 = null;
var count__15032 = (0);
var i__15033 = (0);
while(true){
if((i__15033 < count__15032)){
var parser = chunk__15031.cljs$core$IIndexed$_nth$arity$2(null,i__15033);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

var G__15034 = seq__15030;
var G__15035 = chunk__15031;
var G__15036 = count__15032;
var G__15037 = (i__15033 + (1));
seq__15030 = G__15034;
chunk__15031 = G__15035;
count__15032 = G__15036;
i__15033 = G__15037;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15030);
if(temp__4657__auto__){
var seq__15030__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15030__$1)){
var c__8484__auto__ = cljs.core.chunk_first(seq__15030__$1);
var G__15038 = cljs.core.chunk_rest(seq__15030__$1);
var G__15039 = c__8484__auto__;
var G__15040 = cljs.core.count(c__8484__auto__);
var G__15041 = (0);
seq__15030 = G__15038;
chunk__15031 = G__15039;
count__15032 = G__15040;
i__15033 = G__15041;
continue;
} else {
var parser = cljs.core.first(seq__15030__$1);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

var G__15042 = cljs.core.next(seq__15030__$1);
var G__15043 = null;
var G__15044 = (0);
var G__15045 = (0);
seq__15030 = G__15042;
chunk__15031 = G__15043;
count__15032 = G__15044;
i__15033 = G__15045;
continue;
}
} else {
return null;
}
}
break;
}
});
instaparse.gll.alt_full_parse = (function instaparse$gll$alt_full_parse(this$,index,tramp){
var parsers = cljs.core.cst$kw$parsers.cljs$core$IFn$_invoke$arity$1(this$);
var seq__15046 = cljs.core.seq(parsers);
var chunk__15047 = null;
var count__15048 = (0);
var i__15049 = (0);
while(true){
if((i__15049 < count__15048)){
var parser = chunk__15047.cljs$core$IIndexed$_nth$arity$2(null,i__15049);
instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

var G__15050 = seq__15046;
var G__15051 = chunk__15047;
var G__15052 = count__15048;
var G__15053 = (i__15049 + (1));
seq__15046 = G__15050;
chunk__15047 = G__15051;
count__15048 = G__15052;
i__15049 = G__15053;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15046);
if(temp__4657__auto__){
var seq__15046__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15046__$1)){
var c__8484__auto__ = cljs.core.chunk_first(seq__15046__$1);
var G__15054 = cljs.core.chunk_rest(seq__15046__$1);
var G__15055 = c__8484__auto__;
var G__15056 = cljs.core.count(c__8484__auto__);
var G__15057 = (0);
seq__15046 = G__15054;
chunk__15047 = G__15055;
count__15048 = G__15056;
i__15049 = G__15057;
continue;
} else {
var parser = cljs.core.first(seq__15046__$1);
instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

var G__15058 = cljs.core.next(seq__15046__$1);
var G__15059 = null;
var G__15060 = (0);
var G__15061 = (0);
seq__15046 = G__15058;
chunk__15047 = G__15059;
count__15048 = G__15060;
i__15049 = G__15061;
continue;
}
} else {
return null;
}
}
break;
}
});
instaparse.gll.ordered_alt_parse = (function instaparse$gll$ordered_alt_parse(this$,index,tramp){
var parser1 = cljs.core.cst$kw$parser1.cljs$core$IFn$_invoke$arity$1(this$);
var parser2 = cljs.core.cst$kw$parser2.cljs$core$IFn$_invoke$arity$1(this$);
var node_key_parser1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser1], null);
var node_key_parser2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser2], null);
var listener = instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp);
instaparse.gll.push_listener(tramp,node_key_parser1,listener);

return instaparse.gll.push_negative_listener(tramp,node_key_parser1,((function (parser1,parser2,node_key_parser1,node_key_parser2,listener){
return (function (){
return instaparse.gll.push_listener(tramp,node_key_parser2,listener);
});})(parser1,parser2,node_key_parser1,node_key_parser2,listener))
);
});
instaparse.gll.ordered_alt_full_parse = (function instaparse$gll$ordered_alt_full_parse(this$,index,tramp){
var parser1 = cljs.core.cst$kw$parser1.cljs$core$IFn$_invoke$arity$1(this$);
var parser2 = cljs.core.cst$kw$parser2.cljs$core$IFn$_invoke$arity$1(this$);
var node_key_parser1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser1], null);
var node_key_parser2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser2], null);
var listener = instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp);
instaparse.gll.push_full_listener(tramp,node_key_parser1,listener);

return instaparse.gll.push_negative_listener(tramp,node_key_parser1,((function (parser1,parser2,node_key_parser1,node_key_parser2,listener){
return (function (){
return instaparse.gll.push_full_listener(tramp,node_key_parser2,listener);
});})(parser1,parser2,node_key_parser1,node_key_parser2,listener))
);
});
instaparse.gll.opt_parse = (function instaparse$gll$opt_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
});
instaparse.gll.opt_full_parse = (function instaparse$gll$opt_full_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$optional,cljs.core.cst$kw$expecting,cljs.core.cst$kw$end_DASH_of_DASH_string], null));
}
});
instaparse.gll.non_terminal_parse = (function instaparse$gll$non_terminal_parse(this$,index,tramp){
var parser = instaparse.gll.get_parser(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.cst$kw$keyword.cljs$core$IFn$_invoke$arity$1(this$));
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.non_terminal_full_parse = (function instaparse$gll$non_terminal_full_parse(this$,index,tramp){
var parser = instaparse.gll.get_parser(cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.cst$kw$keyword.cljs$core$IFn$_invoke$arity$1(this$));
return instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.lookahead_parse = (function instaparse$gll$lookahead_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.LookListener(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.lookahead_full_parse = (function instaparse$gll$lookahead_full_parse(this$,index,tramp){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.lookahead_parse(this$,index,tramp);
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$lookahead,cljs.core.cst$kw$expecting,cljs.core.cst$kw$end_DASH_of_DASH_string], null));
}
});
instaparse.gll.negative_lookahead_parse = (function instaparse$gll$negative_lookahead_parse(this$,index,tramp){
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(this$);
var node_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null);
if(cljs.core.truth_(instaparse.gll.result_exists_QMARK_(tramp,node_key))){
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$kw$negative_DASH_lookahead], null));
} else {
instaparse.gll.push_listener(tramp,node_key,(function (){var fail_send = (new cljs.core.Delay(((function (parser,node_key){
return (function (){
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$negative_DASH_lookahead,cljs.core.cst$kw$expecting,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$NOT,instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$1(parser)], null)], null));
});})(parser,node_key))
,null));
return ((function (fail_send,parser,node_key){
return (function (result){
return cljs.core.force(fail_send);
});
;})(fail_send,parser,node_key))
})());

return instaparse.gll.push_negative_listener(tramp,node_key,((function (parser,node_key){
return (function (){
if(cljs.core.not(instaparse.gll.result_exists_QMARK_(tramp,node_key))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
} else {
return null;
}
});})(parser,node_key))
);
}
});
instaparse.gll.epsilon_parse = (function instaparse$gll$epsilon_parse(this$,index,tramp){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
});
instaparse.gll.epsilon_full_parse = (function instaparse$gll$epsilon_full_parse(this$,index,tramp){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.count(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success(null,index));
} else {
return instaparse.gll.fail(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$Epsilon,cljs.core.cst$kw$expecting,cljs.core.cst$kw$end_DASH_of_DASH_string], null));
}
});
instaparse.gll.start_parser = (function instaparse$gll$start_parser(tramp,parser,partial_QMARK_){
if(cljs.core.truth_(partial_QMARK_)){
return instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),parser], null),instaparse.gll.TopListener(tramp));
} else {
return instaparse.gll.push_full_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),parser], null),instaparse.gll.TopListener(tramp));
}
});
instaparse.gll.parses = (function instaparse$gll$parses(grammar,start,text,partial_QMARK_){

var tramp = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2(grammar,text);
var parser = instaparse.combinators_source.nt(start);
instaparse.gll.start_parser(tramp,parser,partial_QMARK_);

var temp__4655__auto__ = instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(tramp);
if(cljs.core.truth_(temp__4655__auto__)){
var all_parses = temp__4655__auto__;
return all_parses;
} else {
return cljs.core.with_meta(cljs.core.List.EMPTY,instaparse.failure.augment_failure(cljs.core.deref(cljs.core.cst$kw$failure.cljs$core$IFn$_invoke$arity$1(tramp)),text));
}
});
instaparse.gll.parse = (function instaparse$gll$parse(grammar,start,text,partial_QMARK_){

var tramp = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2(grammar,text);
var parser = instaparse.combinators_source.nt(start);
instaparse.gll.start_parser(tramp,parser,partial_QMARK_);

var temp__4655__auto__ = instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(tramp);
if(cljs.core.truth_(temp__4655__auto__)){
var all_parses = temp__4655__auto__;
return cljs.core.first(all_parses);
} else {
return instaparse.failure.augment_failure(cljs.core.deref(cljs.core.cst$kw$failure.cljs$core$IFn$_invoke$arity$1(tramp)),text);
}
});
instaparse.gll.build_node_with_meta = (function instaparse$gll$build_node_with_meta(node_builder,tag,content,start,end){
return cljs.core.with_meta((node_builder.cljs$core$IFn$_invoke$arity$2 ? node_builder.cljs$core$IFn$_invoke$arity$2(tag,content) : node_builder.call(null,tag,content)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$instaparse$gll_SLASH_start_DASH_index,start,cljs.core.cst$kw$instaparse$gll_SLASH_end_DASH_index,end], null));
});
instaparse.gll.build_total_failure_node = (function instaparse$gll$build_total_failure_node(node_builder,start,text){
var build_failure_node = instaparse.gll.build_node_with_meta(node_builder,cljs.core.cst$kw$instaparse_SLASH_failure,text,(0),cljs.core.count(text));
var build_start_node = instaparse.gll.build_node_with_meta(node_builder,start,build_failure_node,(0),cljs.core.count(text));
return build_start_node;
});
instaparse.gll.parses_total_after_fail = (function instaparse$gll$parses_total_after_fail(grammar,start,text,fail_index,partial_QMARK_,node_builder){
var tramp = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4(grammar,text,fail_index,node_builder);
var parser = instaparse.combinators_source.nt(start);

instaparse.gll.start_parser(tramp,parser,partial_QMARK_);

var temp__4655__auto__ = instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(tramp);
if(cljs.core.truth_(temp__4655__auto__)){
var all_parses = temp__4655__auto__;
return all_parses;
} else {
var x__8507__auto__ = instaparse.gll.build_total_failure_node(node_builder,start,text);
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto__);
}
});
/**
 * A variation on with-meta that merges the existing metamap into the new metamap,
 * rather than overwriting the metamap entirely.
 */
instaparse.gll.merge_meta = (function instaparse$gll$merge_meta(obj,metamap){
return cljs.core.with_meta(obj,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metamap,cljs.core.meta(obj)], 0)));
});
instaparse.gll.parses_total = (function instaparse$gll$parses_total(grammar,start,text,partial_QMARK_,node_builder){

var all_parses = instaparse.gll.parses(grammar,start,text,partial_QMARK_);
if(cljs.core.seq(all_parses)){
return all_parses;
} else {
return instaparse.gll.merge_meta(instaparse.gll.parses_total_after_fail(grammar,start,text,cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(all_parses)),partial_QMARK_,node_builder),cljs.core.meta(all_parses));
}
});
instaparse.gll.parse_total_after_fail = (function instaparse$gll$parse_total_after_fail(grammar,start,text,fail_index,partial_QMARK_,node_builder){
var tramp = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4(grammar,text,fail_index,node_builder);
var parser = instaparse.combinators_source.nt(start);

instaparse.gll.start_parser(tramp,parser,partial_QMARK_);

var temp__4655__auto__ = instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(tramp);
if(cljs.core.truth_(temp__4655__auto__)){
var all_parses = temp__4655__auto__;
return cljs.core.first(all_parses);
} else {
return instaparse.gll.build_total_failure_node(node_builder,start,text);
}
});
instaparse.gll.parse_total = (function instaparse$gll$parse_total(grammar,start,text,partial_QMARK_,node_builder){

var result = instaparse.gll.parse(grammar,start,text,partial_QMARK_);
if(!((result instanceof instaparse.gll.Failure))){
return result;
} else {
return instaparse.gll.merge_meta(instaparse.gll.parse_total_after_fail(grammar,start,text,cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(result),partial_QMARK_,node_builder),result);
}
});
