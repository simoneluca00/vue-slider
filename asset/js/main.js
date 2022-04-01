var app = new Vue(
    {
        el: '#root',

        data: {
            // array con tutte le immagini da scorrere nello slider
            images: [
                './asset/img/architecture-g33c8cb6a3_1280.jpg',
                './asset/img/kuala-lumpur-gb38269957_1280.jpg',
                './asset/img/paris-g5e85a80c2_1280.jpg',
                './asset/img/pedestrians-gb91d81103_1280.jpg',
            ],

            // timer impostato su null per poi essere modificato dalla funzione "startSlider"
            timer: null,
            // variabile esterna che "registra" l'indice dell'immagine che viene mostrata al click della freccia
            currentIndex : 0,

            // variabile da definire nella funzione reRun per far ciclare tutte le img in modo continuo
            restart: '',
            
        },

        // nel momento in cui viene caricata la pagina
        created(){
            this.startSlider();
        },

        methods:{

            // ogni 3 secondi l'immagine cambia automaticamente, modificando il valore di "timer"
            startSlider: function() {
                this.timer = setInterval(this.next, 3000)
            },

            // fermare lo slider automatico all'hover --> il valore di timer viene modificato ancora in "null"
            stopSlider: function(){
                clearInterval(this.timer);
                this.timer = null;
            },

            // salvare la lunghezza dell'array images
            imagesCount: function() {
                return this.images.length;
            },

            // all'indice dell'immagine attuale viene sottratto 1 e si passa all'immagine precedente
            prev: function() {
                this.currentIndex -= 1;

                if (this.currentIndex < 0) {
                    this.currentIndex = this.imagesCount() - 1;
                }
                /* 
                */
            },

            // all'indice dell'immagine attuale viene aggiunto 1 e si passa all'immagine successiva
            next: function() {
                this.currentIndex += 1;
                if (this.currentIndex > this.imagesCount() - 1) {
                    this.currentIndex = 0;
                }

            },

            clickDots: function(indexImage){
                this.currentIndex = indexImage;
            }


            /* 
                verificare se l'indice (valore assoluto) dell'immagine attuale è maggiore del numero 
                delle immagini (modulo) cosicché all'ultima con NEXT si riparte dalla prima 
                e alla prima con PREV si va all'ultima

                reRun: function() {
                    poteva essere fatto anche con l'IF all'interno delle funzioni NEXT e PREV
                    ma non funzionava correlato al cambio classe dei dots
                    
                    restart = this.images[Math.abs(this.currentIndex) % this.imagesCount()];
                    return restart
                },
            */

        },
        
        /*
            COMPUTED è simile a Methods ma più adatta per la composizione di nuovi dati provenienti 
            da fonti esistenti --> per ottenre valori dinamici sulla base di altre proprietà
        */
    }
    )