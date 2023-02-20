import { Regex } from 'regexpress';
var r = Regex.new()
    .add('Alter table '.replaceAll(" ", "\\s*"))
    .add(/(?:\[.+?\].)?(?:\[.+?\].)?(?:\[(?<foreginTable>.+?)\])/)
    .add(' add Constraint '.replaceAll(" ", "\\s*"))
    .add(/\[.+?\]/)
    .add(' foreign key'.replaceAll(" ", "\\s*"))
    .add(/\((?<FK>.+?)\)/)
    .add(' references '.replaceAll(" ", "\\s*"))
    .add(/(?:\[.+?\].)?(?:\[.+?\].)?(?:\[(?<primaryTable>.+?)\])/)
    .add(' '.replaceAll(" ", "\\s*"))
    .add(/\((?<PK>.+?)\)/)
    .add(' on '.replaceAll(" ", "\\s*"))
    .add(''.replaceAll(" ", "\\s*"))
    .flags("gm")
    .build();  
    console.log("as string: \[ " + r)
var source = "Alter table [haha].[haha].[sRISRESPPol] add Constraint [FK_cUcZnak_sRISRESPPol] foreign key([IdUcZnak],[IfUcZnak],[huhu]) references [dbo].[cUcZnak] ([Id],[FirstId])  on "
var m = r.exec(source)
console.log("as match:", m ) 