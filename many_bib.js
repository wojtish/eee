var lib = lib();
var ent = lib.entries();
var l = ent.length;

for (var j=0;j<l;j++) {

k = ent[j].field("h");

if( k == 1){
ent[j].set("many",1)}
else{
ent[j].set("many",0);
}
}
