// Compiled by ClojureScript 1.9.946 {}
goog.provide('ajax.interceptors');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.util');
goog.require('ajax.url');
goog.require('ajax.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.interceptors.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__82418__auto__,k__82419__auto__){
var self__ = this;
var this__82418__auto____$1 = this;
return this__82418__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__82419__auto__,null);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__82420__auto__,k85032,else__82421__auto__){
var self__ = this;
var this__82420__auto____$1 = this;
var G__85036 = k85032;
var G__85036__$1 = (((G__85036 instanceof cljs.core.Keyword))?G__85036.fqn:null);
switch (G__85036__$1) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k85032,else__82421__auto__);

}
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__85037,opts){
var self__ = this;
var map__85038 = p__85037;
var map__85038__$1 = ((((!((map__85038 == null)))?((((map__85038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85038.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85038):map__85038);
var request__$1 = cljs.core.get.call(null,map__85038__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__85040 = this;
var map__85040__$1 = ((((!((map__85040 == null)))?((((map__85040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85040.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85040):map__85040);
var request__$2 = cljs.core.get.call(null,map__85040__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__85042,xhrio){
var self__ = this;
var map__85043 = p__85042;
var map__85043__$1 = ((((!((map__85043 == null)))?((((map__85043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85043.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85043):map__85043);
var response__$1 = cljs.core.get.call(null,map__85043__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__85045 = this;
var map__85045__$1 = ((((!((map__85045 == null)))?((((map__85045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85045.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85045):map__85045);
var response__$2 = cljs.core.get.call(null,map__85045__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__82432__auto__,writer__82433__auto__,opts__82434__auto__){
var self__ = this;
var this__82432__auto____$1 = this;
var pr_pair__82435__auto__ = ((function (this__82432__auto____$1){
return (function (keyval__82436__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__82433__auto__,cljs.core.pr_writer,""," ","",opts__82434__auto__,keyval__82436__auto__);
});})(this__82432__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__82433__auto__,pr_pair__82435__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__82434__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__85031){
var self__ = this;
var G__85031__$1 = this;
return (new cljs.core.RecordIter((0),G__85031__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__82416__auto__){
var self__ = this;
var this__82416__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__82413__auto__){
var self__ = this;
var this__82413__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__82422__auto__){
var self__ = this;
var this__82422__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__82414__auto__){
var self__ = this;
var this__82414__auto____$1 = this;
var h__81949__auto__ = self__.__hash;
if(!((h__81949__auto__ == null))){
return h__81949__auto__;
} else {
var h__81949__auto____$1 = ((function (h__81949__auto__,this__82414__auto____$1){
return (function (coll__82415__auto__){
return (1482887116 ^ cljs.core.hash_unordered_coll.call(null,coll__82415__auto__));
});})(h__81949__auto__,this__82414__auto____$1))
.call(null,this__82414__auto____$1);
self__.__hash = h__81949__auto____$1;

return h__81949__auto____$1;
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this85033,other85034){
var self__ = this;
var this85033__$1 = this;
return (!((other85034 == null))) && ((this85033__$1.constructor === other85034.constructor)) && (cljs.core._EQ_.call(null,this85033__$1.name,other85034.name)) && (cljs.core._EQ_.call(null,this85033__$1.request,other85034.request)) && (cljs.core._EQ_.call(null,this85033__$1.response,other85034.response)) && (cljs.core._EQ_.call(null,this85033__$1.__extmap,other85034.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__82427__auto__,k__82428__auto__){
var self__ = this;
var this__82427__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__82428__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__82427__auto____$1),self__.__meta),k__82428__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__82428__auto__)),null));
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__82425__auto__,k__82426__auto__,G__85031){
var self__ = this;
var this__82425__auto____$1 = this;
var pred__85047 = cljs.core.keyword_identical_QMARK_;
var expr__85048 = k__82426__auto__;
if(cljs.core.truth_(pred__85047.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__85048))){
return (new ajax.interceptors.StandardInterceptor(G__85031,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__85047.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__85048))){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__85031,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__85047.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__85048))){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__85031,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__82426__auto__,G__85031),null));
}
}
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__82430__auto__){
var self__ = this;
var this__82430__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__82417__auto__,G__85031){
var self__ = this;
var this__82417__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__85031,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__82423__auto__,entry__82424__auto__){
var self__ = this;
var this__82423__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__82424__auto__)){
return this__82423__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__82424__auto__,(0)),cljs.core._nth.call(null,entry__82424__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__82423__auto____$1,entry__82424__auto__);
}
});

ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.interceptors.StandardInterceptor.cljs$lang$type = true;

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__82456__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__82456__auto__,writer__82457__auto__){
return cljs.core._write.call(null,writer__82457__auto__,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__85035){
return (new ajax.interceptors.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__85035),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__85035),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__85035),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__85035,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192))),null));
});

ajax.interceptors.to_interceptor = (function ajax$interceptors$to_interceptor(m){

return ajax.interceptors.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.interceptors.success_QMARK_ = (function ajax$interceptors$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([status]),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.interceptors.exception_message = (function ajax$interceptors$exception_message(e){
return e.message;
});
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__85051,xhrio){
var map__85052 = p__85051;
var map__85052__$1 = ((((!((map__85052 == null)))?((((map__85052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85052.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85052):map__85052);
var description = cljs.core.get.call(null,map__85052__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.interceptors.exception_message.call(null,e)),"  Format should have been ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.interceptors.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.interceptors.fail = (function ajax$interceptors$fail(var_args){
var args__83016__auto__ = [];
var len__83009__auto___85058 = arguments.length;
var i__83010__auto___85059 = (0);
while(true){
if((i__83010__auto___85059 < len__83009__auto___85058)){
args__83016__auto__.push((arguments[i__83010__auto___85059]));

var G__85060 = (i__83010__auto___85059 + (1));
i__83010__auto___85059 = G__85060;
continue;
} else {
}
break;
}

var argseq__83017__auto__ = ((((3) < args__83016__auto__.length))?(new cljs.core.IndexedSeq(args__83016__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__83017__auto__);
});

ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.interceptors.fail.cljs$lang$maxFixedArity = (3);

ajax.interceptors.fail.cljs$lang$applyTo = (function (seq85054){
var G__85055 = cljs.core.first.call(null,seq85054);
var seq85054__$1 = cljs.core.next.call(null,seq85054);
var G__85056 = cljs.core.first.call(null,seq85054__$1);
var seq85054__$2 = cljs.core.next.call(null,seq85054__$1);
var G__85057 = cljs.core.first.call(null,seq85054__$2);
var seq85054__$3 = cljs.core.next.call(null,seq85054__$2);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic(G__85055,G__85056,G__85057,seq85054__$3);
});

ajax.interceptors.content_type_to_request_header = (function ajax$interceptors$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.interceptors.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__82418__auto__,k__82419__auto__){
var self__ = this;
var this__82418__auto____$1 = this;
return this__82418__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__82419__auto__,null);
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__82420__auto__,k85063,else__82421__auto__){
var self__ = this;
var this__82420__auto____$1 = this;
var G__85067 = k85063;
var G__85067__$1 = (((G__85067 instanceof cljs.core.Keyword))?G__85067.fqn:null);
switch (G__85067__$1) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k85063,else__82421__auto__);

}
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__85068,request){
var self__ = this;
var map__85069 = p__85068;
var map__85069__$1 = ((((!((map__85069 == null)))?((((map__85069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85069.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85069):map__85069);
var content_type__$1 = cljs.core.get.call(null,map__85069__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__85071 = this;
var map__85071__$1 = ((((!((map__85071 == null)))?((((map__85071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85071.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85071):map__85071);
var content_type__$2 = cljs.core.get.call(null,map__85071__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__85071,map__85071__$1,content_type__$2,map__85069,map__85069__$1,content_type__$1){
return (function (p1__85061_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__80935__auto__ = p1__85061_SHARP_;
if(cljs.core.truth_(or__80935__auto__)){
return or__80935__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__85071,map__85071__$1,content_type__$2,map__85069,map__85069__$1,content_type__$1))
);
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__85073,xhrio){
var self__ = this;
var map__85074 = p__85073;
var map__85074__$1 = ((((!((map__85074 == null)))?((((map__85074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85074.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85074):map__85074);
var format = map__85074__$1;
var read__$1 = cljs.core.get.call(null,map__85074__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__85076 = this;
var map__85076__$1 = ((((!((map__85076 == null)))?((((map__85076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85076.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85076):map__85076);
var format__$1 = map__85076__$1;
var read__$2 = cljs.core.get.call(null,map__85076__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.interceptors.fail,status);
var G__85079 = status;
switch (G__85079) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.interceptors.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e85080){if((e85080 instanceof Object)){
var e = e85080;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e85080;

}
}
}
}catch (e85078){if((e85078 instanceof Object)){
var e = e85078;
var message = e.message;
return ajax.interceptors.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e85078;

}
}});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__82432__auto__,writer__82433__auto__,opts__82434__auto__){
var self__ = this;
var this__82432__auto____$1 = this;
var pr_pair__82435__auto__ = ((function (this__82432__auto____$1){
return (function (keyval__82436__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__82433__auto__,cljs.core.pr_writer,""," ","",opts__82434__auto__,keyval__82436__auto__);
});})(this__82432__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__82433__auto__,pr_pair__82435__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__82434__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__85062){
var self__ = this;
var G__85062__$1 = this;
return (new cljs.core.RecordIter((0),G__85062__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__82416__auto__){
var self__ = this;
var this__82416__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__82413__auto__){
var self__ = this;
var this__82413__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__82422__auto__){
var self__ = this;
var this__82422__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__82414__auto__){
var self__ = this;
var this__82414__auto____$1 = this;
var h__81949__auto__ = self__.__hash;
if(!((h__81949__auto__ == null))){
return h__81949__auto__;
} else {
var h__81949__auto____$1 = ((function (h__81949__auto__,this__82414__auto____$1){
return (function (coll__82415__auto__){
return (-2103965186 ^ cljs.core.hash_unordered_coll.call(null,coll__82415__auto__));
});})(h__81949__auto__,this__82414__auto____$1))
.call(null,this__82414__auto____$1);
self__.__hash = h__81949__auto____$1;

return h__81949__auto____$1;
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this85064,other85065){
var self__ = this;
var this85064__$1 = this;
return (!((other85065 == null))) && ((this85064__$1.constructor === other85065.constructor)) && (cljs.core._EQ_.call(null,this85064__$1.read,other85065.read)) && (cljs.core._EQ_.call(null,this85064__$1.description,other85065.description)) && (cljs.core._EQ_.call(null,this85064__$1.content_type,other85065.content_type)) && (cljs.core._EQ_.call(null,this85064__$1.__extmap,other85065.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__82427__auto__,k__82428__auto__){
var self__ = this;
var this__82427__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__82428__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__82427__auto____$1),self__.__meta),k__82428__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__82428__auto__)),null));
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__82425__auto__,k__82426__auto__,G__85062){
var self__ = this;
var this__82425__auto____$1 = this;
var pred__85081 = cljs.core.keyword_identical_QMARK_;
var expr__85082 = k__82426__auto__;
if(cljs.core.truth_(pred__85081.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__85082))){
return (new ajax.interceptors.ResponseFormat(G__85062,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__85081.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__85082))){
return (new ajax.interceptors.ResponseFormat(self__.read,G__85062,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__85081.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__85082))){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__85062,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__82426__auto__,G__85062),null));
}
}
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__82430__auto__){
var self__ = this;
var this__82430__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__82417__auto__,G__85062){
var self__ = this;
var this__82417__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__85062,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__82423__auto__,entry__82424__auto__){
var self__ = this;
var this__82423__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__82424__auto__)){
return this__82423__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__82424__auto__,(0)),cljs.core._nth.call(null,entry__82424__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__82423__auto____$1,entry__82424__auto__);
}
});

ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.interceptors.ResponseFormat.cljs$lang$type = true;

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__82456__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__82456__auto__,writer__82457__auto__){
return cljs.core._write.call(null,writer__82457__auto__,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__85066){
return (new ajax.interceptors.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__85066),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__85066),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__85066),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__85066,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634))),null));
});

ajax.interceptors.get_request_format = (function ajax$interceptors$get_request_format(format){

if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if((format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as request formats in ajax calls: ",format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
ajax.interceptors.apply_request_format = (function ajax$interceptors$apply_request_format(write,params){
return write.call(null,params);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.interceptors.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__82418__auto__,k__82419__auto__){
var self__ = this;
var this__82418__auto____$1 = this;
return this__82418__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__82419__auto__,null);
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__82420__auto__,k85087,else__82421__auto__){
var self__ = this;
var this__82420__auto____$1 = this;
var G__85091 = k85087;
switch (G__85091) {
default:
return cljs.core.get.call(null,self__.__extmap,k85087,else__82421__auto__);

}
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__85092){
var self__ = this;
var map__85093 = p__85092;
var map__85093__$1 = ((((!((map__85093 == null)))?((((map__85093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85093.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85093):map__85093);
var request = map__85093__$1;
var uri = cljs.core.get.call(null,map__85093__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__85093__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__85093__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__85093__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__85093__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__85095 = ajax.interceptors.get_request_format.call(null,format);
var map__85095__$1 = ((((!((map__85095 == null)))?((((map__85095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85095.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85095):map__85095);
var write = cljs.core.get.call(null,map__85095__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__85095__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.interceptors.apply_request_format.call(null,write,params):ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__80935__auto__ = headers;
if(cljs.core.truth_(or__80935__auto__)){
return or__80935__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.interceptors.content_type_to_request_header.call(null,content_type)):headers__$1));
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__82432__auto__,writer__82433__auto__,opts__82434__auto__){
var self__ = this;
var this__82432__auto____$1 = this;
var pr_pair__82435__auto__ = ((function (this__82432__auto____$1){
return (function (keyval__82436__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__82433__auto__,cljs.core.pr_writer,""," ","",opts__82434__auto__,keyval__82436__auto__);
});})(this__82432__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__82433__auto__,pr_pair__82435__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__82434__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__85086){
var self__ = this;
var G__85086__$1 = this;
return (new cljs.core.RecordIter((0),G__85086__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__82416__auto__){
var self__ = this;
var this__82416__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__82413__auto__){
var self__ = this;
var this__82413__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__82422__auto__){
var self__ = this;
var this__82422__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__82414__auto__){
var self__ = this;
var this__82414__auto____$1 = this;
var h__81949__auto__ = self__.__hash;
if(!((h__81949__auto__ == null))){
return h__81949__auto__;
} else {
var h__81949__auto____$1 = ((function (h__81949__auto__,this__82414__auto____$1){
return (function (coll__82415__auto__){
return (1698259290 ^ cljs.core.hash_unordered_coll.call(null,coll__82415__auto__));
});})(h__81949__auto__,this__82414__auto____$1))
.call(null,this__82414__auto____$1);
self__.__hash = h__81949__auto____$1;

return h__81949__auto____$1;
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this85088,other85089){
var self__ = this;
var this85088__$1 = this;
return (!((other85089 == null))) && ((this85088__$1.constructor === other85089.constructor)) && (cljs.core._EQ_.call(null,this85088__$1.__extmap,other85089.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__82427__auto__,k__82428__auto__){
var self__ = this;
var this__82427__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__82428__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__82427__auto____$1),self__.__meta),k__82428__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__82428__auto__)),null));
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__82425__auto__,k__82426__auto__,G__85086){
var self__ = this;
var this__82425__auto____$1 = this;
var pred__85097 = cljs.core.keyword_identical_QMARK_;
var expr__85098 = k__82426__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__82426__auto__,G__85086),null));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__82430__auto__){
var self__ = this;
var this__82430__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__82417__auto__,G__85086){
var self__ = this;
var this__82417__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__85086,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__82423__auto__,entry__82424__auto__){
var self__ = this;
var this__82423__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__82424__auto__)){
return this__82423__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__82424__auto__,(0)),cljs.core._nth.call(null,entry__82424__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__82423__auto____$1,entry__82424__auto__);
}
});

ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true;

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__82456__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__82456__auto__,writer__82457__auto__){
return cljs.core._write.call(null,writer__82457__auto__,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__85090){
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__85090)),null));
});

ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(var_args){
var G__85102 = arguments.length;
switch (G__85102) {
case 2:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (p__85103,uri){
var map__85104 = p__85103;
var map__85104__$1 = ((((!((map__85104 == null)))?((((map__85104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85104.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85104):map__85104);
var vec_strategy = cljs.core.get.call(null,map__85104__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__85104__$1,new cljs.core.Keyword(null,"params","params",710516235));

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (p__85106){
var map__85107 = p__85106;
var map__85107__$1 = ((((!((map__85107 == null)))?((((map__85107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85107.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85107):map__85107);
var vec_strategy = cljs.core.get.call(null,map__85107__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__85107__$1,new cljs.core.Keyword(null,"params","params",710516235));
return ((function (map__85107,map__85107__$1,vec_strategy,params){
return (function (uri){

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});
;})(map__85107,map__85107__$1,vec_strategy,params))
});

ajax.interceptors.uri_with_params.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.interceptors.ProcessGet = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__82418__auto__,k__82419__auto__){
var self__ = this;
var this__82418__auto____$1 = this;
return this__82418__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__82419__auto__,null);
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__82420__auto__,k85111,else__82421__auto__){
var self__ = this;
var this__82420__auto____$1 = this;
var G__85115 = k85111;
switch (G__85115) {
default:
return cljs.core.get.call(null,self__.__extmap,k85111,else__82421__auto__);

}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__85116){
var self__ = this;
var map__85117 = p__85116;
var map__85117__$1 = ((((!((map__85117 == null)))?((((map__85117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85117.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85117):map__85117);
var request = map__85117__$1;
var method = cljs.core.get.call(null,map__85117__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),ajax.interceptors.uri_with_params.call(null,request)));
} else {
return request;
}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__82432__auto__,writer__82433__auto__,opts__82434__auto__){
var self__ = this;
var this__82432__auto____$1 = this;
var pr_pair__82435__auto__ = ((function (this__82432__auto____$1){
return (function (keyval__82436__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__82433__auto__,cljs.core.pr_writer,""," ","",opts__82434__auto__,keyval__82436__auto__);
});})(this__82432__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__82433__auto__,pr_pair__82435__auto__,"#ajax.interceptors.ProcessGet{",", ","}",opts__82434__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__85110){
var self__ = this;
var G__85110__$1 = this;
return (new cljs.core.RecordIter((0),G__85110__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__82416__auto__){
var self__ = this;
var this__82416__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__82413__auto__){
var self__ = this;
var this__82413__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__82422__auto__){
var self__ = this;
var this__82422__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__82414__auto__){
var self__ = this;
var this__82414__auto____$1 = this;
var h__81949__auto__ = self__.__hash;
if(!((h__81949__auto__ == null))){
return h__81949__auto__;
} else {
var h__81949__auto____$1 = ((function (h__81949__auto__,this__82414__auto____$1){
return (function (coll__82415__auto__){
return (1135316249 ^ cljs.core.hash_unordered_coll.call(null,coll__82415__auto__));
});})(h__81949__auto__,this__82414__auto____$1))
.call(null,this__82414__auto____$1);
self__.__hash = h__81949__auto____$1;

return h__81949__auto____$1;
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this85112,other85113){
var self__ = this;
var this85112__$1 = this;
return (!((other85113 == null))) && ((this85112__$1.constructor === other85113.constructor)) && (cljs.core._EQ_.call(null,this85112__$1.__extmap,other85113.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__82427__auto__,k__82428__auto__){
var self__ = this;
var this__82427__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__82428__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__82427__auto____$1),self__.__meta),k__82428__auto__);
} else {
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__82428__auto__)),null));
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__82425__auto__,k__82426__auto__,G__85110){
var self__ = this;
var this__82425__auto____$1 = this;
var pred__85119 = cljs.core.keyword_identical_QMARK_;
var expr__85120 = k__82426__auto__;
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__82426__auto__,G__85110),null));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__82430__auto__){
var self__ = this;
var this__82430__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__82417__auto__,G__85110){
var self__ = this;
var this__82417__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(G__85110,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__82423__auto__,entry__82424__auto__){
var self__ = this;
var this__82423__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__82424__auto__)){
return this__82423__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__82424__auto__,(0)),cljs.core._nth.call(null,entry__82424__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__82423__auto____$1,entry__82424__auto__);
}
});

ajax.interceptors.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ProcessGet.cljs$lang$type = true;

ajax.interceptors.ProcessGet.cljs$lang$ctorPrSeq = (function (this__82456__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.ProcessGet.cljs$lang$ctorPrWriter = (function (this__82456__auto__,writer__82457__auto__){
return cljs.core._write.call(null,writer__82457__auto__,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.__GT_ProcessGet = (function ajax$interceptors$__GT_ProcessGet(){
return (new ajax.interceptors.ProcessGet(null,null,null));
});

ajax.interceptors.map__GT_ProcessGet = (function ajax$interceptors$map__GT_ProcessGet(G__85114){
return (new ajax.interceptors.ProcessGet(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__85114)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.interceptors.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__82418__auto__,k__82419__auto__){
var self__ = this;
var this__82418__auto____$1 = this;
return this__82418__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__82419__auto__,null);
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__82420__auto__,k85124,else__82421__auto__){
var self__ = this;
var this__82420__auto____$1 = this;
var G__85128 = k85124;
switch (G__85128) {
default:
return cljs.core.get.call(null,self__.__extmap,k85124,else__82421__auto__);

}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__85129){
var self__ = this;
var map__85130 = p__85129;
var map__85130__$1 = ((((!((map__85130 == null)))?((((map__85130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85130.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85130):map__85130);
var request = map__85130__$1;
var body = cljs.core.get.call(null,map__85130__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__82432__auto__,writer__82433__auto__,opts__82434__auto__){
var self__ = this;
var this__82432__auto____$1 = this;
var pr_pair__82435__auto__ = ((function (this__82432__auto____$1){
return (function (keyval__82436__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__82433__auto__,cljs.core.pr_writer,""," ","",opts__82434__auto__,keyval__82436__auto__);
});})(this__82432__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__82433__auto__,pr_pair__82435__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__82434__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__85123){
var self__ = this;
var G__85123__$1 = this;
return (new cljs.core.RecordIter((0),G__85123__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__82416__auto__){
var self__ = this;
var this__82416__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__82413__auto__){
var self__ = this;
var this__82413__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__82422__auto__){
var self__ = this;
var this__82422__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__82414__auto__){
var self__ = this;
var this__82414__auto____$1 = this;
var h__81949__auto__ = self__.__hash;
if(!((h__81949__auto__ == null))){
return h__81949__auto__;
} else {
var h__81949__auto____$1 = ((function (h__81949__auto__,this__82414__auto____$1){
return (function (coll__82415__auto__){
return (-1077152635 ^ cljs.core.hash_unordered_coll.call(null,coll__82415__auto__));
});})(h__81949__auto__,this__82414__auto____$1))
.call(null,this__82414__auto____$1);
self__.__hash = h__81949__auto____$1;

return h__81949__auto____$1;
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this85125,other85126){
var self__ = this;
var this85125__$1 = this;
return (!((other85126 == null))) && ((this85125__$1.constructor === other85126.constructor)) && (cljs.core._EQ_.call(null,this85125__$1.__extmap,other85126.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__82427__auto__,k__82428__auto__){
var self__ = this;
var this__82427__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__82428__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__82427__auto____$1),self__.__meta),k__82428__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__82428__auto__)),null));
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__82425__auto__,k__82426__auto__,G__85123){
var self__ = this;
var this__82425__auto____$1 = this;
var pred__85132 = cljs.core.keyword_identical_QMARK_;
var expr__85133 = k__82426__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__82426__auto__,G__85123),null));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__82430__auto__){
var self__ = this;
var this__82430__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__82417__auto__,G__85123){
var self__ = this;
var this__82417__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__85123,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__82423__auto__,entry__82424__auto__){
var self__ = this;
var this__82423__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__82424__auto__)){
return this__82423__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__82424__auto__,(0)),cljs.core._nth.call(null,entry__82424__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__82423__auto____$1,entry__82424__auto__);
}
});

ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.DirectSubmission.cljs$lang$type = true;

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__82456__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__82456__auto__,writer__82457__auto__){
return cljs.core._write.call(null,writer__82457__auto__,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__85127){
return (new ajax.interceptors.DirectSubmission(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__85127)),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessGet(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__85136){
var map__85137 = p__85136;
var map__85137__$1 = ((((!((map__85137 == null)))?((((map__85137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85137.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85137):map__85137);
var opts = map__85137__$1;
var response_format = cljs.core.get.call(null,map__85137__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.truth_(ajax.interceptors.is_response_format_QMARK_.call(null,response_format))){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return interpret_vector.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,response_format);
} else {
if((response_format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as response formats in ajax calls: ",response_format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
}
});

//# sourceMappingURL=interceptors.js.map
