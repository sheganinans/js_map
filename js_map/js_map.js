function getList(f, i) {
    var acc = null;
    Array.from(i).forEach(function(x) { acc = {_1 : f(x), _2 : acc}; });
    return acc }

function id(x) { return x }

function pair(x) { return {_1 : x[0], _2 : x[1]} }

var Js_map = {
    new_map: function () { return function(_) { return new Map () }},
    
    new_map_with: function (init) {
	var acc = new Map ();
	var curr = init;
	while (curr != null) {
	    acc.set (curr._1._1, curr._1._2);
	    curr = curr._2; }
	return function(_) { return acc };},
    
    size: function (m) { return m.size },
    
    clear: function (m) { m.clear() },
    
    delete: function (m) { return function(k) { return function (_) { m.delete(k) }}},
    
    entries: function (m) { return function (_) { return getList(pair, m.entries()) }},
    
    forEach: function (m) { return function(f) { return m.forEach(f) }},
    
    get: function (m) {
        return function(k) {
            return function(_) {
		var ret = m.get(k);
                if (ret == undefined) { return null } else { return ret }}}},
    
    has: function (m) {
        return function(k) {
            return function (_) {
                return m.has(k) }}},
    
    keys: function (m) { return function (_) { return getList(id, m.keys()) }},
    
    set: function (m) { return function(k) { return function(v) {
	return function (_) { m.set(k,v); }}}},
    
    values: function (m) { return function (_) { return getList(id, m.values()) }}}
