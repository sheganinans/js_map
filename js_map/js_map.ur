type js_map k v = Js_map_ffi.js_map

fun new_map      [k] [v] _ () = Js_map_ffi.new_map      ()
fun new_map_with [k] [v] _ l  = Js_map_ffi.new_map_with l
							       
fun size    [k] [v] m   = Js_map_ffi.size    m
fun clear   [k] [v] m   = Js_map_ffi.clear   m
fun delete  [k] [v] m k = Js_map_ffi.delete  m k
fun entries [k] [v] m   = Js_map_ffi.entries m
fun get     [k] [v] m k = Js_map_ffi.get     m k   
fun has     [k] [v] m k = Js_map_ffi.has     m k
fun keys    [k] [v] m   = Js_map_ffi.keys    m 
fun set     [k] [v] m v = Js_map_ffi.set     m v
fun values  [k] [v] m   = Js_map_ffi.values  m

fun forEach [k] [v] m f = Js_map_ffi.forEach m (fn (k,v) => f k v)
