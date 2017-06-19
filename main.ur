fun main () =
  return <xml><body>
    <active code={
      js_m <- Js_map.new_map_with ((1,2) :: (3,4) :: []);
      i <- Js_map.get js_m 1;
      alert (show i);
      return <xml></xml> }/>
  </body></xml>
