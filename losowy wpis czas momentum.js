var entries = lib().entries()

var min = Math.ceil(10000);
var max = Math.floor(1000);

var order = { compare: function(a,b) { return a.field("czas momentum") - b.field("czas momentum"); }}

entries.sort(order)
entries.reverse()[0].show()
//entries[0].show()

for (var ent = 0; ent < entries.length; ent++){    
var ggg = Math.floor(Math.random() * (max - min)) + min
var jjj = ggg / 100
var kkk = jjj.toFixed(2)

entries[ent].set("czas momentum",kkk);
}
