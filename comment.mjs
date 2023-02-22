import { Regex } from 'regexpress';
var r = Regex.new()
    .add(/Exec\s*sp_addextendedproperty\s*'MS_Description',\s*'(?<description>.+?)',\s*'.+?',\s*'.+?',\s*'table',\s*'(?<table>.+?)',\s*'column',\s*'(?<column>.+?)'/)
    .add(''.replaceAll(" ", "\\s*"))
    .flags("gm")
    .build();  
    console.log("as string: \[ " + r)
var source = "Exec sp_addextendedproperty 'MS_Description', 'Odkaz na FirstId v tabulce dVyberSestava.', 'user', 'dbo', 'table', 'dVyberUctu', 'column', 'IfVyberSestava'"
var m = r.exec(source)
if(!m.groups)
    throw 
console.log("as match:", m.groups ) 