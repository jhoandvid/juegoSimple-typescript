///<reference path="02.clases.ts"/>

CLASES.listaBloques.map(bloque=>{
    document.addEventListener('keydown', (e)=>{
        if(e.key=='d' || e.key=='D'){
            bloque.posX+=5
        }
        if(e.key=='a' || e.key=='A'){
            bloque.posX-=5
        }


    })
})