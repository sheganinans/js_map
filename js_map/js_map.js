// https://gist.github.com/sjoerdvisscher/3078744
function curry(f) {
    if (typeof f != "function" || f.length < 2) return f;
    function go(f, args) {
	return a => {
	    var args1 = args.concat([a]);
	    if (args1.length == f.length) return f.apply(this, args1);
	    else                          return go(f, args1); }; }
    return go(f, []); }

function getList(f, i) {
    var acc = null;
    Array.from(i).forEach(x => { acc = {_1 : f(x), _2 : acc}; });
    return acc }

function id(x) { return x }

function pair(x) { return {_1 : x[0], _2 : x[1]} }

var Js_map = {
    new_map: curry((_1,_2) => { return new Map ()}),
    
    new_map_with: curry ((init,_) => {
	var acc = new Map ();
	var curr = init;
	while (curr != null) {
	    acc.set (curr._1._1, curr._1._2);
	    curr = curr._2; }
	return acc }),
    
    size: m => { return m.size },
    
    clear: m => { m.clear() },
    
    delete: curry((m,k,_) => { m.delete(k) }),
    
    entries: curry((m,_) => { return getList(pair, m.entries()) }),
    
    forEach: curry((m,f,_) => {
	return m.forEach((v,k) => { execF(execF(f, {_1: k, _2: v})); }); }),
    
    get: curry((m,k,_) => {
	var ret = m.get(k);
        if (ret == undefined) { return null } else { return ret }}),
    
    has: curry((m,k,_) => { return m.has(k) }),
    
    keys: curry((m,_) => { return getList(id, m.keys()) }),
    
    set: curry((m,k,v,_) => { m.set(k,v); }),
    
    values: curry((m,_) => { return getList(id, m.values()) })}

