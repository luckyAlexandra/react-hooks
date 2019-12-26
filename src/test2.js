Promise.resolve('A')
  .then(function(a){console.log(2, a); return 'B';})
  .then(function(a){
     Promise.resolve('C')
       .then(function(a){console.log(7, a);})
       .then(function(a){console.log(8, a);});
     console.log(3, a);
     return a;})
  .then(function(a){
     Promise.resolve('D')
       .then(function(a){console.log(9, a);})
       .then(function(a){console.log(10, a);});
     console.log(4, a);})
  .then(function(a){
     console.log(5, a);});
console.log(1);
setTimeout(function(){console.log(6)},0);