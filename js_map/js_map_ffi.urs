type js_map

val new_map      : unit -> transaction js_map
val new_map_with : k ::: Type -> v ::: Type -> list (k * v) -> transaction js_map
							       
val size    : js_map -> transaction int	     
val clear   : js_map -> transaction unit
val delete  : k ::: Type ->               js_map -> k -> transaction unit
val entries : k ::: Type -> v ::: Type -> js_map -> transaction (list (k * v))
val get     : k ::: Type -> v ::: Type -> js_map -> k -> transaction (option v)
val has     : k ::: Type ->               js_map -> k -> transaction bool
val keys    : k ::: Type ->               js_map -> transaction (list k)
val set     : k ::: Type -> v ::: Type -> js_map -> k -> v -> transaction unit
val values  :               v ::: Type -> js_map -> transaction (list v)

val forEach  : k ::: Type -> v ::: Type -> x ::: Type -> (k -> v -> js_map -> x) -> transaction (list x)
