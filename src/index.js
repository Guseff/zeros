module.exports = function zeros(expression) {
  let res2 = 0,
      res5 = 0;
  let arr_expr = expression.split('*');

  function calcQty(expr) {
    const step = expr.length - expr.indexOf('!');
    const n = +expr.replace(/\!/g, '');
    let qty5 = 0,
        qty2 = 0;

    for (let i=n; i>1; i-=step) {
      if (!(i%25)) qty5++;
      if (!(i%5)) qty5++;
      
      if (!(i%64)) qty2++;
      if (!(i%32)) qty2++;
      if (!(i%16)) qty2++;
      if (!(i%8)) qty2++;
      if (!(i%4)) qty2++;
      if (!(i%2)) qty2++;
    }

    return {
      q2: qty2,
      q5: qty5,
    };
  }

  for (let j=0; j< arr_expr.length; j++) {
    res2 += calcQty(arr_expr[j]).q2;
    res5 += calcQty(arr_expr[j]).q5;
  }

  return res5 < res2 ? res5 : res2;
}
