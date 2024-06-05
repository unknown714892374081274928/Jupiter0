/**
 * @name Jupiter0
 * @author novemberxray
 * @description This plugin makes memesounds 
 * @version 0.0.1
 */

module.exports = class MyPlugin {
    constructor(meta) {
        // Define la URL del video de YouTube
        this.youtubeVideoUrl = "https://www.youtube.com/watch?v=M3n3Dt4Mi0c";
    }

    start() {
        // Encuentra el elemento de entrada de texto del chat
        const textInput = document.querySelector('.textArea-2Spzkt textarea');
        if (!textInput) return;

        // Agrega un evento de escucha al elemento de entrada de texto
        textInput.addEventListener('input', this.handleInput.bind(this));
    }

    stop() {
        // Elimina el evento de escucha cuando el plugin se deshabilita
        const textInput = document.querySelector('.textArea-2Spzkt textarea');
        if (!textInput) return;
        textInput.removeEventListener('input', this.handleInput);
    }

    async handleInput(event) {
        // Verifica si el mensaje contiene "bro"
        const message = event.target.value;
        if (message.includes('bro')) {
            // Crea un elemento de audio y reproduce el sonido desde la URL del video de YouTube
            const audio = new Audio(this.youtubeVideoUrl);
            audio.play();
        }
    }
};

