var Js_map = {
    new_map: function () { return new Map (); },
    
    new_map_with: function (init) {
	var acc = new Map ();
	var curr = init;
	while (curr._2 != null) {
	    acc.set (curr._1._1, curr._1._2);
	    curr = curr._2; }
	//curr._1._1 contains the last elem when curr._1._2 === null.
	acc.set (curr._1._1, curr._1._2);
	return acc; },
    
    size: function (m) { return m.size; },
    
    clear: function (m) { m.clear(); },
    
    del: function (m,k) { m.delete(k); },
    
    entries: function (m) { return m.entries(); },
    
    forEach: function (m,f) { return m.forEach(f); },
    
    get: function (m,k) { return m.get(k); },
    
    has: function (m,k) { return m.has(k); },
    
    keys: function (m) { return m.keys(); },
    
    set: function (m,k,v) { m.set(k,v); },
    
    values: function (m) { return m.values (); }}
