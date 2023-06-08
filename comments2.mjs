console.log("huhu",String.prototype.replaceAll)

import { Regex } from 'regexpress';
var regexCommentTable = Regex.new()
    .add(/Exec\s*sp_addextendedproperty\s*'MS_Description',\s*'(?<description>.+?)',\s*'.+?',\s*'.+?',\s*'table',\s*'(?<table>.+?)',\s*NULL/)
    //.add(''.replaceAll(" ", "\\s*"))
    .flags("gm")
    .build();  
    console.log("as string 2 : \[ " + regexCommentTable)
var source = "Exec sp_addextendedproperty 'MS_Description', 'Odkaz na FirstId v tabulce dVyberSestava.', 'user', 'dbo', 'table', 'dVyberUctu', 'column', 'IfVyberSestava'"
var source2 = "Exec sp_addextendedproperty 'MS_Description', 'Přiřazení uživatelů na Disponentní útvary. Využito pro SUIP', 'user', 'dbo', 'table', 'cUzivDU', NULL, NULL"
var m = regexCommentTable.exec(source2)
if(!m.groups)
    throw new Error()
console.log("as match 2 :", m.groups ) 

