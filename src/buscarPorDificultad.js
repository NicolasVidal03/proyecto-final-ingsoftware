function buscarPorDificultad(instKata, dificultad){
    return instKata.getDificultad() === dificultad
}

function arrayKatasConMismaDificultad(lista, dificultad){
    return lista.getLista().filter(instKata => buscarPorDificultad(instKata, dificultad))
}

export default arrayKatasConMismaDificultad