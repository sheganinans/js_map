fun show_pair [a ::: Type] [b ::: Type] (_ : show a) (_ : show b) : show (a * b) =
    mkShow (fn (y, z) => "(" ^ show y ^ ", " ^ show z ^ ")")
    
fun main () =
  return <xml><body>
    <active code={
  js_m <- Js_map.new_map_with ((1,2) :: (3,4) :: [] : list (int*int));

  i <- Js_map.get js_m 1;
  j <- Js_map.get js_m 3;
  
  has_0 <- Js_map.has js_m 0;

  Js_map.delete js_m 0;
  
  sz <- Js_map.size js_m;

  Js_map.set js_m 1 5;
  
  kys <- Js_map.keys js_m;
  ent <- Js_map.entries js_m;
  vls <- Js_map.values js_m;

  Js_map.clear js_m;

  sz2 <- Js_map.size js_m;

  return <xml>
    {[show i]}<br/>
    {[show j]}<br/>
    {[show has_0]}<br/>
    {[show sz]}<br/>
    {[show sz2]}<br/>
    {[show kys]}<br/>
    {[show ent]}<br/>
    {[show vls]}<br/>
  </xml>
  }/>
   </body></xml>
  
