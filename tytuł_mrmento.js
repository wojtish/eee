// tytuł_memento.js
var e = entry();
var n = e.field("nazwa");

i = intent("android.intent.action.SEND");
i.mimeType("text/plain");
i.extra("android.intent.extra.TEXT",n);
//i.extra("package:ClipboardManager");
//i.send();
//cancel();
//exit();
message(n)

