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
    .flags("m")
    .build();  
    console.log("r as string: ~~~" + r)
    console.log("~~~\r\n ")
    
var source = "Alter table [haha].[haha].[sRISRESPPol] add Constraint [FK_cUcZnak_sRISRESPPol] foreign key([IdUcZnak],[IfUcZnak],[huhu]) references [dbo].[cUcZnak] ([Id],[FirstId])  on "
source = "Alter table [uRozpUpravaPol] add Constraint [FK_cAkce_uRozpUpravaPol] foreign key([IdAkce],[IfAkce]) references [dbo].[cAkce] ([Id],[FirstId])  on update no action on delete no action "
source = "Alter table [dbo].[cOrgRok] add Constraint [FK_cOrg_cOrgRok] foreign key([IdOrg],[IfOrg]) references [dbo].[cOrg] ([Id],[FirstId])  on update no action on delete cascade "
var m = r.exec(source)
//console.log("as match:", m )  

const regexRelation = Regex.new()
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
    .flags("m")
    .build();
    console.log("regexRelation as string: ~~~" + regexRelation)
    console.log("~~~\r\n ")
    
    m = regexRelation.exec(source);
    if (!!(m?.groups)) {
        console.log("as match2:", m )  
    }else{
        console.log("as match2X:", m )  
    }


    m = regexRelation.exec(source);
    if (!!(m?.groups)) {
        console.log("as match2:", m )  
    }else{
        console.log("as match2X:", m )    
    }
    m = regexRelation.exec(source);
    if (!!(m?.groups)) {
        console.log("as match2:", m )  
    }else{
        console.log("as match2X:", m )  
    }
        