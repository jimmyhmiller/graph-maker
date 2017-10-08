// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('graph_maker.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('viz.core');
goog.require('dorothy.core');
goog.require('instaparse.core');
graph_maker.core.default_text = "thing -> other-thing -> stuff \ndir: both\n\nmore-stuff -> thing\n\nthing\nshape: square";
graph_maker.core.initial_hash = cljs.core.subs.cljs$core$IFn$_invoke$arity$2((function (){var G__15859 = location.hash;
return decodeURIComponent(G__15859);
})(),(1));
if(typeof graph_maker.core.graph_text !== 'undefined'){
} else {
graph_maker.core.graph_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(graph_maker.core.initial_hash,"")))?graph_maker.core.initial_hash:graph_maker.core.default_text));
}
cljs.core.add_watch(graph_maker.core.graph_text,cljs.core.cst$kw$url_DASH_encode,(function (_,___$1,___$2,new_state){
return location.hash = encodeURIComponent(new_state);
}));
graph_maker.core.grammar = "<graph>        = element*\n<element>       = subgraph | connection | node\nsubgraph        = connection edge-attributes\nconnection      = from (<arrow> to)+ \nnode            = identifier node-attributes?\nedge-attributes = attributes\nnode-attributes = attributes\nattributes      = attribute+\nattribute       = identifier <\":\"> identifier\n<from>          = identifier\n<to>            = identifier\narrow           = \"->\"\nidentifier    = #\"[A-Za-z0-9\\-_]+\"";
graph_maker.core.parse = instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic(graph_maker.core.grammar,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$auto_DASH_whitespace,cljs.core.cst$kw$standard], 0));
(graph_maker.core.parse.cljs$core$IFn$_invoke$arity$1 ? graph_maker.core.parse.cljs$core$IFn$_invoke$arity$1(graph_maker.core.default_text) : graph_maker.core.parse.call(null,graph_maker.core.default_text));
graph_maker.core.transform_graph = (function graph_maker$core$transform_graph(graph){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var G__15860 = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$connection,(function() { 
var G__15862__delegate = function (connections){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,connections);
};
var G__15862 = function (var_args){
var connections = null;
if (arguments.length > 0) {
var G__15863__i = 0, G__15863__a = new Array(arguments.length -  0);
while (G__15863__i < G__15863__a.length) {G__15863__a[G__15863__i] = arguments[G__15863__i + 0]; ++G__15863__i;}
  connections = new cljs.core.IndexedSeq(G__15863__a,0,null);
} 
return G__15862__delegate.call(this,connections);};
G__15862.cljs$lang$maxFixedArity = 0;
G__15862.cljs$lang$applyTo = (function (arglist__15864){
var connections = cljs.core.seq(arglist__15864);
return G__15862__delegate(connections);
});
G__15862.cljs$core$IFn$_invoke$arity$variadic = G__15862__delegate;
return G__15862;
})()
,cljs.core.cst$kw$node,(function() { 
var G__15865__delegate = function (node){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,node);
};
var G__15865 = function (var_args){
var node = null;
if (arguments.length > 0) {
var G__15866__i = 0, G__15866__a = new Array(arguments.length -  0);
while (G__15866__i < G__15866__a.length) {G__15866__a[G__15866__i] = arguments[G__15866__i + 0]; ++G__15866__i;}
  node = new cljs.core.IndexedSeq(G__15866__a,0,null);
} 
return G__15865__delegate.call(this,node);};
G__15865.cljs$lang$maxFixedArity = 0;
G__15865.cljs$lang$applyTo = (function (arglist__15867){
var node = cljs.core.seq(arglist__15867);
return G__15865__delegate(node);
});
G__15865.cljs$core$IFn$_invoke$arity$variadic = G__15865__delegate;
return G__15865;
})()
,cljs.core.cst$kw$edge_DASH_attributes,dorothy.core.edge_attrs,cljs.core.cst$kw$node_DASH_attributes,cljs.core.identity,cljs.core.cst$kw$subgraph,(function (connections,attributes){
return dorothy.core.subgraph.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attributes,connections], null));
}),cljs.core.cst$kw$attributes,(function() { 
var G__15868__delegate = function (attributes){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,attributes);
};
var G__15868 = function (var_args){
var attributes = null;
if (arguments.length > 0) {
var G__15869__i = 0, G__15869__a = new Array(arguments.length -  0);
while (G__15869__i < G__15869__a.length) {G__15869__a[G__15869__i] = arguments[G__15869__i + 0]; ++G__15869__i;}
  attributes = new cljs.core.IndexedSeq(G__15869__a,0,null);
} 
return G__15868__delegate.call(this,attributes);};
G__15868.cljs$lang$maxFixedArity = 0;
G__15868.cljs$lang$applyTo = (function (arglist__15870){
var attributes = cljs.core.seq(arglist__15870);
return G__15868__delegate(attributes);
});
G__15868.cljs$core$IFn$_invoke$arity$variadic = G__15868__delegate;
return G__15868;
})()
,cljs.core.cst$kw$attribute,(function() { 
var G__15871__delegate = function (attribute){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,attribute));
};
var G__15871 = function (var_args){
var attribute = null;
if (arguments.length > 0) {
var G__15872__i = 0, G__15872__a = new Array(arguments.length -  0);
while (G__15872__i < G__15872__a.length) {G__15872__a[G__15872__i] = arguments[G__15872__i + 0]; ++G__15872__i;}
  attribute = new cljs.core.IndexedSeq(G__15872__a,0,null);
} 
return G__15871__delegate.call(this,attribute);};
G__15871.cljs$lang$maxFixedArity = 0;
G__15871.cljs$lang$applyTo = (function (arglist__15873){
var attribute = cljs.core.seq(arglist__15873);
return G__15871__delegate(attribute);
});
G__15871.cljs$core$IFn$_invoke$arity$variadic = G__15871__delegate;
return G__15871;
})()
,cljs.core.cst$kw$identifier,cljs.core.keyword], null);
var G__15861 = graph;
return (instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__15860,G__15861) : instaparse.core.transform.call(null,G__15860,G__15861));
})());
});
graph_maker.core.build_graph = (function graph_maker$core$build_graph(input){
return dorothy.core.dot(dorothy.core.digraph.cljs$core$IFn$_invoke$arity$1(graph_maker.core.transform_graph((graph_maker.core.parse.cljs$core$IFn$_invoke$arity$1 ? graph_maker.core.parse.cljs$core$IFn$_invoke$arity$1(input) : graph_maker.core.parse.call(null,input)))));
});
graph_maker.core.build_graph(graph_maker.core.default_text);
graph_maker.core.get_value = (function graph_maker$core$get_value(e){
return e.target.value;
});
graph_maker.core.home_page = (function graph_maker$core$home_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Create a Graph"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.deref(graph_maker.core.graph_text),cljs.core.cst$kw$onChange,(function (p1__15874_SHARP_){
return cljs.core.reset_BANG_(graph_maker.core.graph_text,graph_maker.core.get_value(p1__15874_SHARP_));
}),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,"30%",cljs.core.cst$kw$height,"200px",cljs.core.cst$kw$margin_DASH_right,"30px",cljs.core.cst$kw$float,cljs.core.cst$kw$left], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,(function (){var G__15875 = graph_maker.core.build_graph(cljs.core.deref(graph_maker.core.graph_text));
return (viz.core.image.cljs$core$IFn$_invoke$arity$1 ? viz.core.image.cljs$core$IFn$_invoke$arity$1(G__15875) : viz.core.image.call(null,G__15875));
})()], null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"40%",cljs.core.cst$kw$height,"200px",cljs.core.cst$kw$float,cljs.core.cst$kw$left], null)], null)], null)], null);
});
graph_maker.core.mount_root = (function graph_maker$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [graph_maker.core.home_page], null),document.getElementById("app"));
});
graph_maker.core.init_BANG_ = (function graph_maker$core$init_BANG_(){
return graph_maker.core.mount_root();
});
