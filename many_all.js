//script many all
var sum = 0
var libclients = lib()
var entries = libclients.entries()
var l = entries.length
for (var j=0;j<l;j++){
var m = entries[j].field('many') 
var sum = sum + m
};
//message (sum) 
entry().set("many all",sum);
