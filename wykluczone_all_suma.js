//script wykluczone all suma
var sum = 0
var libclients = lib()
var entries = libclients.entries()
var l = entries.length
for (var j=0;j<l;j++){
var m = entries[j].field('wykluczone') 
var sum = sum + m
};
//message (sum) 
entry().set("wykluczone_all",sum);
