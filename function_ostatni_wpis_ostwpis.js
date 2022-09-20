function ostwpis(t)
if (t == true)

var entri = lib().entries(); 
var l = entri.lenght
var n = "ostatni wpis"
var z = entri[0].field("ostatni wpis")
var q = parseInt(z);

entri[z].show();
for (var ent = 0; ent < entri.length; ent++)
 
{
entri[ent].set(n,q+1); 
}
