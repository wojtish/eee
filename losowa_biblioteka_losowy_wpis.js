var libraries = [pt,sp,in,wb,rk,tm,tt,lj,wi,mo,zb,ag,cf,bw,pp,gc,an,sm,lk,hk,hp,zt,lw,ma,rt,tc,ps,pr,sc];
//var libraries = [ag,cf]
var item = libraries[Math.floor(Math.random()*libraries.length)];
//message(item)

var entries = libByName(item).entries()

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
