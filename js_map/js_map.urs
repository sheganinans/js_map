type js_map k v

val new_map      : k ::: Type -> v ::: Type -> eq k -> unit -> transaction (js_map k v)
val new_map_with : k ::: Type -> v ::: Type -> eq k -> list (k * v) -> transaction (js_map k v)
							       
val size    : k ::: Type -> v ::: Type -> js_map k v -> transaction int	     
val clear   : k ::: Type -> v ::: Type -> js_map k v -> transaction unit
val delete  : k ::: Type -> v ::: Type -> js_map k v -> k -> transaction unit
val entries : k ::: Type -> v ::: Type -> js_map k v -> transaction (list (k * v))
val get     : k ::: Type -> v ::: Type -> js_map k v -> k -> transaction v
val has     : k ::: Type -> v ::: Type -> js_map k v -> k -> transaction bool
val keys    : k ::: Type -> v ::: Type -> js_map k v -> transaction (list k)
val set     : k ::: Type -> v ::: Type -> js_map k v -> k -> v -> transaction unit
val values  : k ::: Type -> v ::: Type -> js_map k v -> transaction (list v)

val forEach  : k ::: Type -> v ::: Type -> x ::: Type -> (k -> v -> js_map k v -> x) -> transaction (list x)
											
