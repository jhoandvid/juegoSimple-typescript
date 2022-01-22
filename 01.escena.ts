///<reference path="02.clases.ts"/>


const canvas:any=document.querySelector('canvas')
const ctx=canvas.getContext('2d')
const cuerpo:any=document.querySelector('body')

canvas.width= 800 //cada cuadro va a tener 32px * 25 =800px
canvas.height= 608 //cada cuadro va a tener 32px * 19 =608px
canvas.style.border="4px solid black"
canvas.style.backgroundColor="grey"

cuerpo.style.backgroundColor='black'
cuerpo.style.display='flex'
cuerpo.style.justifyContent="center"


//array de dos dimensiones -> matrix 25 cuadros de ancho x 19 de alto
function pinta(){

// para comparar las dos magnitudes se tienen que transformar los px en columnas y filas y se hace dividiendo entre 32 los px
let escenario:number[][]=[
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]
//recorre la matriz y le da un color donde si xy es 0 asigne un color 
//y si es 1 asigne otro color
for(let y=0;y<19;y++){
    for(let x=0; x<25;x++){
        if(escenario[y][x]==0){
            ctx.fillStyle='lightblue'
            ctx.fillRect(32*x, 32*y, 32,32)
        }

        if(escenario[y][x]==1){
            ctx.fillStyle='darkgreen'
            ctx.fillRect(32*x, 32*y, 32,32)
        }

    }

}


CLASES.listaBloques.map(bloque=>{
    let coorX=Math.round(bloque.posX/32)
    let coorY=Math.round(bloque.posY/31)

    bloque.dibujar()
    if(escenario[coorY][coorX]==0){
        bloque.mover()
 
}
}) 

}

function principal(){
    requestAnimationFrame(principal)
    canvas.width= 800 //cada cuadro va a tener 32px * 25 =800px
    canvas.height= 608 //cada cuadro va a tener 32px * 19 =608px
    pinta()
}

principal()
