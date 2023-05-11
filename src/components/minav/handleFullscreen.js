// Habilitar fullscreen
export const handleFullscreen = async () => {
    const bool = document.fullscreenElement
    
    // inactivo
    if (!bool) {
        await document.body.requestFullscreen() // activar
    } else {
        document.exitFullscreen()
    }    
}