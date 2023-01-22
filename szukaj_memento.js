// szukaj_memento.js
var linkt = "tasker://secondary?text="
var intview = intent("android.intent.action.VIEW");


intview.data(linkt + "szukajmemento")
intview.send()
