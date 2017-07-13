fun main () =
  return <xml><body>
    <active code={
  js_m <- Js_map.new_map_with ( (1,2) :: (3,4) :: [] : list (int*int));
  i <- Js_map.get js_m 1;

  j <- Js_map.get js_m 3;
  
  alert (show i);
  alert (show j);

  has_0 <- Js_map.has js_m 0;
  alert (show has_0);

  sz <- Js_map.size js_m;
  alert ("size: "^ show sz);
  
  return <xml>hello</xml>
}/>
  </body></xml>
