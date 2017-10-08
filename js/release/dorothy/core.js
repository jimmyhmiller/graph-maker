// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('dorothy.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('goog.string');
dorothy.core.error = (function dorothy$core$error(var_args){
var args__8821__auto__ = [];
var len__8814__auto___13705 = arguments.length;
var i__8815__auto___13706 = (0);
while(true){
if((i__8815__auto___13706 < len__8814__auto___13705)){
args__8821__auto__.push((arguments[i__8815__auto___13706]));

var G__13707 = (i__8815__auto___13706 + (1));
i__8815__auto___13706 = G__13707;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((1) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((1)),(0),null)):null);
return dorothy.core.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8822__auto__);
});

dorothy.core.error.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
throw (new Error(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args)));
});

dorothy.core.error.cljs$lang$maxFixedArity = (1);

dorothy.core.error.cljs$lang$applyTo = (function (seq13703){
var G__13704 = cljs.core.first(seq13703);
var seq13703__$1 = cljs.core.next(seq13703);
return dorothy.core.error.cljs$core$IFn$_invoke$arity$variadic(G__13704,seq13703__$1);
});

/**
 * Node ids are expected to be keywords or strings. Sometimes you have an object
 *   graph where the nodes don't have obvious keyword or string ids. Pass the object
 *   to (gen-id) and a consisten unique id will be generated for the object when the
 *   graph is generated.
 * 
 *   Notes:
 *  Assume the return value of this function is opaque. The impl will change.
 * 
 *   See:
 *  (dorothy.core/gen-id?)
 *   
 */
dorothy.core.gen_id = (function dorothy$core$gen_id(target){
return cljs.core.constantly(target);
});
/**
 * Returns true if the target was created with (dorothy.core/gen-id)
 */
dorothy.core.gen_id_QMARK_ = (function dorothy$core$gen_id_QMARK_(target){
return cljs.core.fn_QMARK_(target);
});
dorothy.core.id_generator = (function dorothy$core$id_generator(){
var id_map = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return ((function (id_map){
return (function (target){
var temp__4655__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(id_map),target);
if(cljs.core.truth_(temp__4655__auto__)){
var id = temp__4655__auto__;
return id;
} else {
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0())].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(id_map,cljs.core.assoc,target,id);

return id;
}
});
;})(id_map))
});
/**
 * Returns true if v is an AST node, i.e. has :type. The second form
 *   checks for a particular type.
 * 
 *   Examples:
 * 
 *  (is-ast? {:type ::node})
 *  ;=> true
 * 
 *  (is-ast? {:type ::node} ::node)
 *  ;=> true
 *   
 */
dorothy.core.is_ast_QMARK_ = (function dorothy$core$is_ast_QMARK_(var_args){
var G__13709 = arguments.length;
switch (G__13709) {
case 1:
return dorothy.core.is_ast_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dorothy.core.is_ast_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dorothy.core.is_ast_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (v){
return (cljs.core.map_QMARK_(v)) && (cljs.core.contains_QMARK_(v,cljs.core.cst$kw$type));
});

dorothy.core.is_ast_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (v,type){
var and__7633__auto__ = dorothy.core.is_ast_QMARK_.cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(and__7633__auto__)){
if(cljs.core.set_QMARK_(type)){
var G__13710 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(v);
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(G__13710) : type.call(null,G__13710));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(v));
}
} else {
return and__7633__auto__;
}
});

dorothy.core.is_ast_QMARK_.cljs$lang$maxFixedArity = 2;

dorothy.core.check_ast = (function dorothy$core$check_ast(v,type){
if(cljs.core.not(dorothy.core.is_ast_QMARK_.cljs$core$IFn$_invoke$arity$2(v,type))){
return dorothy.core.error.cljs$core$IFn$_invoke$arity$variadic("Expected AST node of type %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type], 0));
} else {
return null;
}
});
dorothy.core.compass_pts = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["n",null,"w",null,"s",null,"sw",null,"ne",null,"e",null,"nw",null,"_",null,"se",null,"c",null], null), null);
dorothy.core.check_compass_pt = (function dorothy$core$check_compass_pt(pt){
if(cljs.core.truth_((function (){var or__7645__auto__ = (pt == null);
if(or__7645__auto__){
return or__7645__auto__;
} else {
var G__13713 = cljs.core.name(pt);
return (dorothy.core.compass_pts.cljs$core$IFn$_invoke$arity$1 ? dorothy.core.compass_pts.cljs$core$IFn$_invoke$arity$1(G__13713) : dorothy.core.compass_pts.call(null,G__13713));
}
})())){
return pt;
} else {
return dorothy.core.error.cljs$core$IFn$_invoke$arity$variadic("Invalid compass point %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pt], 0));
}
});
/**
 * Create a node-id. Creates an AST node with :type ::node-id
 * 
 *   Examples:
 * 
 *  (node-id :foo)
 *  ;=> {:dorothy.core/type :dorothy.core/node-id :id :foo}
 *   
 */
dorothy.core.node_id = (function dorothy$core$node_id(var_args){
var G__13715 = arguments.length;
switch (G__13715) {
case 3:
return dorothy.core.node_id.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dorothy.core.node_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dorothy.core.node_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dorothy.core.node_id.cljs$core$IFn$_invoke$arity$3 = (function (id,port,compass_pt){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$dorothy$core_SLASH_node_DASH_id,cljs.core.cst$kw$id,id,cljs.core.cst$kw$port,port,cljs.core.cst$kw$compass_DASH_pt,dorothy.core.check_compass_pt(compass_pt)], null);
});

dorothy.core.node_id.cljs$core$IFn$_invoke$arity$2 = (function (id,port){
return dorothy.core.node_id.cljs$core$IFn$_invoke$arity$3(id,port,null);
});

dorothy.core.node_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return dorothy.core.node_id.cljs$core$IFn$_invoke$arity$3(id,null,null);
});

dorothy.core.node_id.cljs$lang$maxFixedArity = 3;

dorothy.core.x_attrs = (function dorothy$core$x_attrs(type,attrs){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$attrs,attrs], null);
});
/**
 * Create a graph attribute statement. attrs is the attribute map.
 * 
 *   Examples:
 * 
 *  (graph-attrs {:label "hi"})
 *  ;=> {:dorothy.core/type :dorothy.core/graph-attrs :attrs {:label "hi"}
 *   
 */
dorothy.core.graph_attrs = (function dorothy$core$graph_attrs(attrs){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$dorothy$core_SLASH_graph_DASH_attrs,cljs.core.cst$kw$attrs,attrs], null);
});
/**
 * Create a node attribute statement. attrs is the attribute map.
 * 
 *   Examples:
 * 
 *  (node-attrs {:label "hi"})
 *  ;=> {:dorothy.core/type :dorothy.core/node-attrs :attrs {:label "hi"}
 *   
 */
dorothy.core.node_attrs = (function dorothy$core$node_attrs(attrs){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$dorothy$core_SLASH_node_DASH_attrs,cljs.core.cst$kw$attrs,attrs], null);
});
/**
 * Create a edge attribute statement. attrs is the attribute map.
 * 
 *   Examples:
 * 
 *  (edge-attrs {:label "hi"})
 *  ;=> {:dorothy.core/type :dorothy.core/edge-attrs :attrs {:label "hi"}
 *   
 */
dorothy.core.edge_attrs = (function dorothy$core$edge_attrs(attrs){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$dorothy$core_SLASH_edge_DASH_attrs,cljs.core.cst$kw$attrs,attrs], null);
});
/**
 * Create a node in a graph. This is a more structured version of the
 *   :node-id or [:node-id { attrs }] sugar for specifying nodes in a graph. Its
 *   result may be used in place of that sugar within a graph specification.
 * 
 *   attrs is a possibly empty map of attributes for the edge
 *   id is the result of (dorothy.core/node-id)
 */
dorothy.core.node = (function dorothy$core$node(attrs,id){
dorothy.core.check_ast(id,cljs.core.cst$kw$dorothy$core_SLASH_node_DASH_id);

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$dorothy$core_SLASH_node,cljs.core.cst$kw$attrs,attrs,cljs.core.cst$kw$id,id], null);
});
/**
 * Create an edge. This is a more structured version of the
 *   [:source :target] sugar for specifying edges. Its result may be used in place
 *   of that sugar within a graph specification.
 * 
 *   attrs is a possibly empty map of attributes for the edge.
 *   node-ids is a seq of 2 or more node identifiers.
 * 
 *   See:
 *  (dorothy.core/node-id)
 *   
 */
dorothy.core.edge = (function dorothy$core$edge(attrs,node_ids){
var seq__13717_13721 = cljs.core.seq(node_ids);
var chunk__13718_13722 = null;
var count__13719_13723 = (0);
var i__13720_13724 = (0);
while(true){
if((i__13720_13724 < count__13719_13723)){
var n_13725 = chunk__13718_13722.cljs$core$IIndexed$_nth$arity$2(null,i__13720_13724);
dorothy.core.check_ast(n_13725,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dorothy$core_SLASH_node_DASH_id,null,cljs.core.cst$kw$dorothy$core_SLASH_subgraph,null], null), null));

var G__13726 = seq__13717_13721;
var G__13727 = chunk__13718_13722;
var G__13728 = count__13719_13723;
var G__13729 = (i__13720_13724 + (1));
seq__13717_13721 = G__13726;
chunk__13718_13722 = G__13727;
count__13719_13723 = G__13728;
i__13720_13724 = G__13729;
continue;
} else {
var temp__4657__auto___13730 = cljs.core.seq(seq__13717_13721);
if(temp__4657__auto___13730){
var seq__13717_13731__$1 = temp__4657__auto___13730;
if(cljs.core.chunked_seq_QMARK_(seq__13717_13731__$1)){
var c__8484__auto___13732 = cljs.core.chunk_first(seq__13717_13731__$1);
var G__13733 = cljs.core.chunk_rest(seq__13717_13731__$1);
var G__13734 = c__8484__auto___13732;
var G__13735 = cljs.core.count(c__8484__auto___13732);
var G__13736 = (0);
seq__13717_13721 = G__13733;
chunk__13718_13722 = G__13734;
count__13719_13723 = G__13735;
i__13720_13724 = G__13736;
continue;
} else {
var n_13737 = cljs.core.first(seq__13717_13731__$1);
dorothy.core.check_ast(n_13737,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dorothy$core_SLASH_node_DASH_id,null,cljs.core.cst$kw$dorothy$core_SLASH_subgraph,null], null), null));

var G__13738 = cljs.core.next(seq__13717_13731__$1);
var G__13739 = null;
var G__13740 = (0);
var G__13741 = (0);
seq__13717_13721 = G__13738;
chunk__13718_13722 = G__13739;
count__13719_13723 = G__13740;
i__13720_13724 = G__13741;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$dorothy$core_SLASH_edge,cljs.core.cst$kw$attrs,attrs,cljs.core.cst$kw$node_DASH_ids,node_ids], null);
});
/**
 * Create a graph AST node with type `:dorothy.core/graph`.
 * 
 *   opts is an option map with keys `:id` and `:strict?`
 *   statements is a list of statement AST nodes.
 */
dorothy.core.graph_STAR_ = (function dorothy$core$graph_STAR_(opts,statements){
var map__13742 = opts;
var map__13742__$1 = ((((!((map__13742 == null)))?((((map__13742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13742.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13742):map__13742);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13742__$1,cljs.core.cst$kw$id);
var strict_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13742__$1,cljs.core.cst$kw$strict_QMARK_);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$dorothy$core_SLASH_graph,cljs.core.cst$kw$id,id,cljs.core.cst$kw$strict_QMARK_,cljs.core.boolean$(strict_QMARK_),cljs.core.cst$kw$statements,statements], null);
});
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dorothy$core_SLASH_digraph,cljs.core.cst$kw$dorothy$core_SLASH_graph);
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dorothy$core_SLASH_subgraph,cljs.core.cst$kw$dorothy$core_SLASH_graph);
/**
 * Same as `(dorothy.core/graph*)` but has type `:dorothy.core/digraph`
 */
dorothy.core.digraph_STAR_ = (function dorothy$core$digraph_STAR_(opts,statements){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dorothy.core.graph_STAR_(opts,statements),cljs.core.cst$kw$type,cljs.core.cst$kw$dorothy$core_SLASH_digraph);
});
/**
 * Same as `(dorothy.core/graph*)` but has type `:dorothy.core/subgraph`
 */
dorothy.core.subgraph_STAR_ = (function dorothy$core$subgraph_STAR_(opts,statements){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dorothy.core.graph_STAR_(opts,statements),cljs.core.cst$kw$type,cljs.core.cst$kw$dorothy$core_SLASH_subgraph);
});
dorothy.core.vector_to_ast_edge = (function dorothy$core$vector_to_ast_edge(v){
var end = cljs.core.last(v);
var attrs_QMARK_ = cljs.core.map_QMARK_(end);
var attrs = ((attrs_QMARK_)?end:cljs.core.PersistentArrayMap.EMPTY);
var parts = ((attrs_QMARK_)?cljs.core.butlast(v):v);
var parts__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_GT_,null], null), null),parts);
return dorothy.core.edge(attrs,cljs.core.map.cljs$core$IFn$_invoke$arity$2(dorothy.core.to_ast,parts__$1));
});
dorothy.core.vector_to_ast = (function dorothy$core$vector_to_ast(p__13744){
var vec__13745 = p__13744;
var seq__13746 = cljs.core.seq(vec__13745);
var first__13747 = cljs.core.first(seq__13746);
var seq__13746__$1 = cljs.core.next(seq__13746);
var v0 = first__13747;
var first__13747__$1 = cljs.core.first(seq__13746__$1);
var seq__13746__$2 = cljs.core.next(seq__13746__$1);
var v1 = first__13747__$1;
var more = seq__13746__$2;
var v = vec__13745;
if(more){
return dorothy.core.vector_to_ast_edge(v);
} else {
if(cljs.core.map_QMARK_(v1)){
return dorothy.core.node(v1,(dorothy.core.to_ast.cljs$core$IFn$_invoke$arity$1 ? dorothy.core.to_ast.cljs$core$IFn$_invoke$arity$1(v0) : dorothy.core.to_ast.call(null,v0)));
} else {
if(cljs.core.truth_(v1)){
return dorothy.core.vector_to_ast_edge(v);
} else {
if(cljs.core.truth_(dorothy.core.is_ast_QMARK_.cljs$core$IFn$_invoke$arity$1(v0))){
return v0;
} else {
if(cljs.core.map_QMARK_(v0)){
return dorothy.core.graph_attrs(v0);
} else {
if(cljs.core.truth_(dorothy.core.gen_id_QMARK_(v0))){
return dorothy.core.node(cljs.core.PersistentArrayMap.EMPTY,dorothy.core.node_id.cljs$core$IFn$_invoke$arity$1(v0));
} else {
if(cljs.core.truth_(v0)){
return dorothy.core.node(cljs.core.PersistentArrayMap.EMPTY,(dorothy.core.to_ast.cljs$core$IFn$_invoke$arity$1 ? dorothy.core.to_ast.cljs$core$IFn$_invoke$arity$1(v0) : dorothy.core.to_ast.call(null,v0)));
} else {
return null;
}
}
}
}
}
}
}
});
dorothy.core.parse_node_id = (function dorothy$core$parse_node_id(v){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(dorothy.core.node_id,clojure.string.split.cljs$core$IFn$_invoke$arity$2(v,/:/));
});
dorothy.core.to_ast = (function dorothy$core$to_ast(v){
if(cljs.core.truth_(dorothy.core.is_ast_QMARK_.cljs$core$IFn$_invoke$arity$1(v))){
return v;
} else {
if((v instanceof cljs.core.Keyword)){
return dorothy.core.parse_node_id(cljs.core.name(v));
} else {
if(typeof v === 'string'){
return dorothy.core.parse_node_id(v);
} else {
if(typeof v === 'number'){
return dorothy.core.parse_node_id([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));
} else {
if(cljs.core.truth_(dorothy.core.gen_id_QMARK_(v))){
return dorothy.core.node_id.cljs$core$IFn$_invoke$arity$1(v);
} else {
if(cljs.core.map_QMARK_(v)){
return dorothy.core.graph_attrs(v);
} else {
if(cljs.core.vector_QMARK_(v)){
return dorothy.core.vector_to_ast(v);
} else {
return dorothy.core.error.cljs$core$IFn$_invoke$arity$variadic("Don't know what to do with %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));

}
}
}
}
}
}
}
});
/**
 * Turn first arg of (graph) into something usable
 */
dorothy.core.desugar_graph_options = (function dorothy$core$desugar_graph_options(options){
if(cljs.core.map_QMARK_(options)){
return options;
} else {
if((options instanceof cljs.core.Keyword)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,options], null);
} else {
if(typeof options === 'number'){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(options)].join('')], null);
} else {
if(typeof options === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,options], null);
} else {
return dorothy.core.error.cljs$core$IFn$_invoke$arity$variadic("Invalid graph arg %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options], 0));

}
}
}
}
});
dorothy.core.flatten_statements = (function dorothy$core$flatten_statements(ss){
var helper = (function (statement){
if(cljs.core.seq_QMARK_(statement)){
return (dorothy.core.flatten_statements.cljs$core$IFn$_invoke$arity$1 ? dorothy.core.flatten_statements.cljs$core$IFn$_invoke$arity$1(statement) : dorothy.core.flatten_statements.call(null,statement));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [statement], null);

}
});
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(helper,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ss], 0));
});
/**
 * Construct an undirected graph from the given statements which must be a vector.
 *   See https://github.com/daveray/dorothy or README.md for details of the DSL.
 * 
 *   The returned value may be converted to dot language with (dorothy.core/dot).
 */
dorothy.core.graph = (function dorothy$core$graph(var_args){
var G__13749 = arguments.length;
switch (G__13749) {
case 3:
return dorothy.core.graph.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dorothy.core.graph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dorothy.core.graph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dorothy.core.graph.cljs$core$IFn$_invoke$arity$3 = (function (handler,options,statements){
var G__13750 = dorothy.core.desugar_graph_options(options);
var G__13751 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(dorothy.core.to_ast,dorothy.core.flatten_statements(statements));
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__13750,G__13751) : handler.call(null,G__13750,G__13751));
});

dorothy.core.graph.cljs$core$IFn$_invoke$arity$2 = (function (options,statements){
return dorothy.core.graph.cljs$core$IFn$_invoke$arity$3(dorothy.core.graph_STAR_,options,statements);
});

dorothy.core.graph.cljs$core$IFn$_invoke$arity$1 = (function (statements){
return dorothy.core.graph.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,statements);
});

dorothy.core.graph.cljs$lang$maxFixedArity = 3;

/**
 * Construct a directed graph from the given statements which must be a vector.
 *   See https://github.com/daveray/dorothy or README.md for details of the DSL.
 * 
 *   The returned value may be converted to dot language with (dorothy.core/dot).
 */
dorothy.core.digraph = (function dorothy$core$digraph(var_args){
var G__13754 = arguments.length;
switch (G__13754) {
case 2:
return dorothy.core.digraph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dorothy.core.digraph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dorothy.core.digraph.cljs$core$IFn$_invoke$arity$2 = (function (attrs,statements){
return dorothy.core.graph.cljs$core$IFn$_invoke$arity$3(dorothy.core.digraph_STAR_,attrs,statements);
});

dorothy.core.digraph.cljs$core$IFn$_invoke$arity$1 = (function (statements){
return dorothy.core.digraph.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,statements);
});

dorothy.core.digraph.cljs$lang$maxFixedArity = 2;

/**
 * Construct a sub-graph from the given statements which must be a vector.
 *   See https://github.com/daveray/dorothy or README.md for details of the DSL.
 *   A subgraph may be used as a statement in a graph, or as a node entry in
 *   an edge statement.
 * 
 *   The returned value may be converted to dot language with (dorothy.core/dot).
 */
dorothy.core.subgraph = (function dorothy$core$subgraph(var_args){
var G__13757 = arguments.length;
switch (G__13757) {
case 2:
return dorothy.core.subgraph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dorothy.core.subgraph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dorothy.core.subgraph.cljs$core$IFn$_invoke$arity$2 = (function (attrs,statements){
return dorothy.core.graph.cljs$core$IFn$_invoke$arity$3(dorothy.core.subgraph_STAR_,attrs,statements);
});

dorothy.core.subgraph.cljs$core$IFn$_invoke$arity$1 = (function (statements){
return dorothy.core.subgraph.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,statements);
});

dorothy.core.subgraph.cljs$lang$maxFixedArity = 2;

dorothy.core._STAR_options_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$edge_DASH_op,"->",cljs.core.cst$kw$id_DASH_generator,(function (p1__13759_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(p1__13759_SHARP_))].join('');
})], null);
dorothy.core.safe_id_pattern = /^[_a-zA-Z\u0080-\u0255][_a-zA-Z0-9\u0080-\u0255]*$/;
dorothy.core.html_pattern = /^\s*<([a-zA-Z1-9_-]+)(\s|>).*<\/\1>\s*$/;
dorothy.core.safe_id_QMARK_ = (function dorothy$core$safe_id_QMARK_(s){
return cljs.core.re_find(dorothy.core.safe_id_pattern,s);
});
dorothy.core.html_QMARK_ = (function dorothy$core$html_QMARK_(s){
return cljs.core.re_find(dorothy.core.html_pattern,s);
});
dorothy.core.escape_quotes = (function dorothy$core$escape_quotes(s){
return clojure.string.replace(s,"\"","\\\"");
});
dorothy.core.escape_id = (function dorothy$core$escape_id(id){
if(typeof id === 'string'){
if(cljs.core.truth_(dorothy.core.safe_id_QMARK_(id))){
return id;
} else {
if(cljs.core.truth_(dorothy.core.html_QMARK_(id))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(">")].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dorothy.core.escape_quotes(id)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');

}
}
} else {
if(typeof id === 'number'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
} else {
if((id instanceof cljs.core.Keyword)){
var G__13760 = cljs.core.name(id);
return (dorothy.core.escape_id.cljs$core$IFn$_invoke$arity$1 ? dorothy.core.escape_id.cljs$core$IFn$_invoke$arity$1(G__13760) : dorothy.core.escape_id.call(null,G__13760));
} else {
if(cljs.core.truth_(dorothy.core.gen_id_QMARK_(id))){
var G__13761 = (function (){var G__13763 = (id.cljs$core$IFn$_invoke$arity$0 ? id.cljs$core$IFn$_invoke$arity$0() : id.call(null));
var fexpr__13762 = cljs.core.cst$kw$id_DASH_generator.cljs$core$IFn$_invoke$arity$1(dorothy.core._STAR_options_STAR_);
return (fexpr__13762.cljs$core$IFn$_invoke$arity$1 ? fexpr__13762.cljs$core$IFn$_invoke$arity$1(G__13763) : fexpr__13762.call(null,G__13763));
})();
return (dorothy.core.escape_id.cljs$core$IFn$_invoke$arity$1 ? dorothy.core.escape_id.cljs$core$IFn$_invoke$arity$1(G__13761) : dorothy.core.escape_id.call(null,G__13761));
} else {
return dorothy.core.error.cljs$core$IFn$_invoke$arity$variadic("Invalid id: %s - %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(id),id], 0));

}
}
}
}
});
if(typeof dorothy.core.dot_STAR_ !== 'undefined'){
} else {
dorothy.core.dot_STAR_ = (function (){var method_table__8600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8603__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("dorothy.core","dot*"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__8604__auto__,method_table__8600__auto__,prefer_table__8601__auto__,method_cache__8602__auto__,cached_hierarchy__8603__auto__));
})();
}
dorothy.core.dot_STAR__statements = (function dorothy$core$dot_STAR__statements(statements){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(dorothy.core.dot_STAR_,statements),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(";\n")));
});
dorothy.core.dot_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$dorothy$core_SLASH_node_DASH_id,(function (p__13764){
var map__13765 = p__13764;
var map__13765__$1 = ((((!((map__13765 == null)))?((((map__13765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13765.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13765):map__13765);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13765__$1,cljs.core.cst$kw$id);
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13765__$1,cljs.core.cst$kw$port);
var compass_pt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13765__$1,cljs.core.cst$kw$compass_DASH_pt);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dorothy.core.escape_id(id)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(port)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dorothy.core.escape_id(port))].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(compass_pt)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(compass_pt))].join(''):null))].join('');
}));
dorothy.core.dot_STAR__attrs = (function dorothy$core$dot_STAR__attrs(attrs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",(function (){var iter__8453__auto__ = (function dorothy$core$dot_STAR__attrs_$_iter__13767(s__13768){
return (new cljs.core.LazySeq(null,(function (){
var s__13768__$1 = s__13768;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13768__$1);
if(temp__4657__auto__){
var s__13768__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13768__$2)){
var c__8451__auto__ = cljs.core.chunk_first(s__13768__$2);
var size__8452__auto__ = cljs.core.count(c__8451__auto__);
var b__13770 = cljs.core.chunk_buffer(size__8452__auto__);
if((function (){var i__13769 = (0);
while(true){
if((i__13769 < size__8452__auto__)){
var vec__13771 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8451__auto__,i__13769);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13771,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13771,(1),null);
cljs.core.chunk_append(b__13770,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dorothy.core.escape_id(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dorothy.core.escape_id(v))].join(''));

var G__13777 = (i__13769 + (1));
i__13769 = G__13777;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13770),dorothy$core$dot_STAR__attrs_$_iter__13767(cljs.core.chunk_rest(s__13768__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13770),null);
}
} else {
var vec__13774 = cljs.core.first(s__13768__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13774,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13774,(1),null);
return cljs.core.cons([cljs.core.str.cljs$core$IFn$_invoke$arity$1(dorothy.core.escape_id(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dorothy.core.escape_id(v))].join(''),dorothy$core$dot_STAR__attrs_$_iter__13767(cljs.core.rest(s__13768__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8453__auto__(attrs);
})());
});
dorothy.core.dot_STAR__trailing_attrs = (function dorothy$core$dot_STAR__trailing_attrs(attrs){
if(!(cljs.core.empty_QMARK_(attrs))){
return [" [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dorothy.core.dot_STAR__attrs(attrs)),"]"].join('');
} else {
return null;
}
});
dorothy.core.dot_STAR__x_attrs = (function dorothy$core$dot_STAR__x_attrs(type,p__13778){
var map__13779 = p__13778;
var map__13779__$1 = ((((!((map__13779 == null)))?((((map__13779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13779.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13779):map__13779);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13779__$1,cljs.core.cst$kw$attrs);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dorothy.core.dot_STAR__attrs(attrs)),"]"].join('');
});
dorothy.core.dot_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$dorothy$core_SLASH_graph_DASH_attrs,(function (this$){
return dorothy.core.dot_STAR__x_attrs("graph",this$);
}));
dorothy.core.dot_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$dorothy$core_SLASH_node_DASH_attrs,(function (this$){
return dorothy.core.dot_STAR__x_attrs("node",this$);
}));
dorothy.core.dot_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$dorothy$core_SLASH_edge_DASH_attrs,(function (this$){
return dorothy.core.dot_STAR__x_attrs("edge",this$);
}));
dorothy.core.dot_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$dorothy$core_SLASH_node,(function (p__13781){
var map__13782 = p__13781;
var map__13782__$1 = ((((!((map__13782 == null)))?((((map__13782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13782):map__13782);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13782__$1,cljs.core.cst$kw$attrs);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13782__$1,cljs.core.cst$kw$id);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((dorothy.core.dot_STAR_.cljs$core$IFn$_invoke$arity$1 ? dorothy.core.dot_STAR_.cljs$core$IFn$_invoke$arity$1(id) : dorothy.core.dot_STAR_.call(null,id))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dorothy.core.dot_STAR__trailing_attrs(attrs))].join('');
}));
dorothy.core.dot_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$dorothy$core_SLASH_edge,(function (p__13784){
var map__13785 = p__13784;
var map__13785__$1 = ((((!((map__13785 == null)))?((((map__13785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13785.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13785):map__13785);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13785__$1,cljs.core.cst$kw$attrs);
var node_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13785__$1,cljs.core.cst$kw$node_DASH_ids);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$edge_DASH_op.cljs$core$IFn$_invoke$arity$1(dorothy.core._STAR_options_STAR_))," "].join(''),cljs.core.map.cljs$core$IFn$_invoke$arity$2(dorothy.core.dot_STAR_,node_ids))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dorothy.core.dot_STAR__trailing_attrs(attrs))].join('');
}));
dorothy.core.options_for_type = (function dorothy$core$options_for_type(type){
var pred__13787 = cljs.core._EQ_;
var expr__13788 = type;
if(cljs.core.truth_((function (){var G__13790 = cljs.core.cst$kw$dorothy$core_SLASH_graph;
var G__13791 = expr__13788;
return (pred__13787.cljs$core$IFn$_invoke$arity$2 ? pred__13787.cljs$core$IFn$_invoke$arity$2(G__13790,G__13791) : pred__13787.call(null,G__13790,G__13791));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dorothy.core._STAR_options_STAR_,cljs.core.cst$kw$edge_DASH_op,"--");
} else {
if(cljs.core.truth_((function (){var G__13792 = cljs.core.cst$kw$dorothy$core_SLASH_digraph;
var G__13793 = expr__13788;
return (pred__13787.cljs$core$IFn$_invoke$arity$2 ? pred__13787.cljs$core$IFn$_invoke$arity$2(G__13792,G__13793) : pred__13787.call(null,G__13792,G__13793));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dorothy.core._STAR_options_STAR_,cljs.core.cst$kw$edge_DASH_op,"->");
} else {
if(cljs.core.truth_((function (){var G__13794 = cljs.core.cst$kw$dorothy$core_SLASH_subgraph;
var G__13795 = expr__13788;
return (pred__13787.cljs$core$IFn$_invoke$arity$2 ? pred__13787.cljs$core$IFn$_invoke$arity$2(G__13794,G__13795) : pred__13787.call(null,G__13794,G__13795));
})())){
return dorothy.core._STAR_options_STAR_;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__13788)].join('')));
}
}
}
});
dorothy.core.dot_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$dorothy$core_SLASH_graph,(function (p__13796){
var map__13797 = p__13796;
var map__13797__$1 = ((((!((map__13797 == null)))?((((map__13797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13797.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13797):map__13797);
var this$ = map__13797__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13797__$1,cljs.core.cst$kw$id);
var strict_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13797__$1,cljs.core.cst$kw$strict_QMARK_);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13797__$1,cljs.core.cst$kw$statements);
var _STAR_options_STAR_13799 = dorothy.core._STAR_options_STAR_;
dorothy.core._STAR_options_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dorothy.core.options_for_type(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id_DASH_generator,dorothy.core.id_generator()], null)], 0));

try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(strict_QMARK_)?"strict ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(this$)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(id)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dorothy.core.escape_id(id))," "].join(''):null)),"{\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dorothy.core.dot_STAR__statements(statements)),"} "].join('');
}finally {dorothy.core._STAR_options_STAR_ = _STAR_options_STAR_13799;
}}));
/**
 * Convert the given Dorothy graph AST to a string suitable for input to
 *   the Graphviz dot tool.
 * 
 *   input can either be the result of (graph) or (digraph), or it can be a vector of
 *   statements (see README.md) in which case (graph) is implied.
 * 
 *   Examples:
 * 
 *  user=> (dot (digraph [[:a :b :c]]))
 *  "digraph { a -> b -> c; }"
 * 
 *   See:
 *   * `(dorothy.core/render)`
 *   * `(dorothy.core/show!)`
 *   * `(dorothy.core/save!)`
 *   
 */
dorothy.core.dot = (function dorothy$core$dot(input){
if(cljs.core.truth_(dorothy.core.is_ast_QMARK_.cljs$core$IFn$_invoke$arity$1(input))){
return (dorothy.core.dot_STAR_.cljs$core$IFn$_invoke$arity$1 ? dorothy.core.dot_STAR_.cljs$core$IFn$_invoke$arity$1(input) : dorothy.core.dot_STAR_.call(null,input));
} else {
if(cljs.core.vector_QMARK_(input)){
var G__13800 = dorothy.core.graph.cljs$core$IFn$_invoke$arity$1(input);
return (dorothy.core.dot_STAR_.cljs$core$IFn$_invoke$arity$1 ? dorothy.core.dot_STAR_.cljs$core$IFn$_invoke$arity$1(G__13800) : dorothy.core.dot_STAR_.call(null,G__13800));
} else {
if(cljs.core.seq_QMARK_(input)){
var G__13801 = dorothy.core.graph.cljs$core$IFn$_invoke$arity$1(input);
return (dorothy.core.dot_STAR_.cljs$core$IFn$_invoke$arity$1 ? dorothy.core.dot_STAR_.cljs$core$IFn$_invoke$arity$1(G__13801) : dorothy.core.dot_STAR_.call(null,G__13801));
} else {
return dorothy.core.error.cljs$core$IFn$_invoke$arity$variadic("Invalid (dot) input: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));

}
}
}
});
