function memento(t){
if ( t == true )
{
var linkt = "tasker://secondary?text="
var intview = intent("android.intent.action.VIEW");

intview.data(linkt + "memento")
intview.send()
//message("test ok");
};
};
