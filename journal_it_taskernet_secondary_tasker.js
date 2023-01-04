var url = ("tasker://secondary?text=journalit");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();
