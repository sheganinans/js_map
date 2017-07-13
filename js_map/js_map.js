function getList(i) {
    var acc = null;
    Array.from(i).forEach(function(x) { acc = {_1 : x, _2 : acc}; });
    return acc; }

var Js_map = {
    new_map: function () { return function(_) { return new Map (); }},
    
    new_map_with: function (init) {
	var acc = new Map ();
	var curr = init;
	while (curr != null) {
	    acc.set (curr._1._1, curr._1._2);
	    curr = curr._2; }
	return function(_) { return acc; };},
    
    size: function (m) { return m.size; },
    
    clear: function (m) { m.clear(); },
    
    delete: function (m) { return function(k) { return function (_) { m.delete(k); }}},
    
    entries: function (m) { return function (_) {
	var acc = null;
	Array.from(m.entries()).forEach(function(x) {
	    acc = {_1 : {_1 : x[0], _2 : x[1]}, _2 : acc} });
	return acc; }},
    
    forEach: function (m) { return function(f) { return m.forEach(f); }},
    
    get: function (m) {
        return function(k) {
            return function(_) {
                return m.get(k); }}},
    
    has: function (m) {
        return function(k) {
            return function (_) {
                return m.has(k); }}},
    
    keys: function (m) { return function (_) { return getList(m.keys()) }},
    
    set: function (m) { return function(k) { return function(v) {
	return function (_) { m.set(k,v); }}}},
    
    values: function (m) { return function (_) { return getList(m.values()) }}}
