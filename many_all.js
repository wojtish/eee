//script many all
var sum = 0
var libclients = lib() // Rename this library
var entries = libclients.entries() // Load all entries
var l = entries.length; // Number of entries
for (var j=0;j<l;j++){ // loop
var m =entries[j].field('many') // entry j . Feldneme Intex
var sum = sum + m
};
//message (sum) // Results
entry().set("many all",sum);
