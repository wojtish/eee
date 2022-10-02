var entri = lib().entries(); 
var l = entri.lenght
var n = "ostatni wpis"
var z = entri[0].field("ostatni wpis")

var q = parseInt(z);

for (var ent = 0; ent < entri.length; ent++)
{
entri[ent].set(n,0); 

}

//entri[z].show();
//for (var ent = 0; ent < entri.length; ent++)
 
//{
//entri[ent].set(n,q); 

//}

