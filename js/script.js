// creo app Vue

const app = Vue.createApp({
    data() {
        return {
            user: {
                name: 'Nome Utente',
                avatar: '_io'
              },
            contacts: [
                {
                  id: 1,
                  name: 'Michele',
                  avatar: '_1',
                  visible: true,
                  messages: [
                    {
                      id: 1,
                      date: '10/01/2020 15:30:55',
                      message: 'Hai portato a spasso il cane?',
                      status: 'sent'
                    },
                    {
                      id: 2,
                      date: '10/01/2020 15:50:00',
                      message: 'Ricordati di stendere i panni',
                      status: 'sent'
                    },
                    {
                      id: 3,
                      date: '10/01/2020 16:15:22',
                      message: 'Tutto fatto!',
                      status: 'received'
                    }
                  ],
                },
                {
                  id: 2,
                  name: 'Fabio',
                  avatar: '_2',
                  visible: true,
                  messages: [
                    {
                      id: 1,
                      date: '20/03/2020 16:30:00',
                      message: 'Ciao come stai?',
                      status: 'sent'
                    },
                    {
                      id: 2,
                      date: '20/03/2020 16:30:55',
                      message: 'Bene grazie! Stasera ci vediamo?',
                      status: 'received'
                    },
                    {
                      id: 3,
                      date: '20/03/2020 16:35:00',
                      message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                      status: 'sent'
                    }
                  ],
                },
                {
                  id: 3,
                  name: 'Samuele',
                  avatar: '_3',
                  visible: true,
                  messages: [
                    {
                      id: 1,
                      date: '28/03/2020 10:10:40',
                      message: 'La Marianna va in campagna',
                      status: 'received'
                    },
                    {
                      id: 2,
                      date: '28/03/2020 10:20:10',
                      message: 'Sicuro di non aver sbagliato chat?',
                      status: 'sent'
                    },
                    {
                      id: 3,
                      date: '28/03/2020 16:15:22',
                      message: 'Ah scusa!',
                      status: 'received'
                    }
                  ],
                },
                {
                  id: 4,
                  name: 'Alessandro B.',
                  avatar: '_4',
                  visible: true,
                  messages: [
                    {
                      id: 1,
                      date: '10/01/2020 15:30:55',
                      message: 'Lo sai che ha aperto una nuova pizzeria?',
                      status: 'sent'
                    },
                    {
                      id: 2,
                      date: '10/01/2020 15:50:00',
                      message: 'Si, ma preferirei andare al cinema',
                      status: 'received'
                    }
                  ],
                },
                {
                  id: 5,
                  name: 'Alessandro L.',
                  avatar: '_5',
                  visible: true,
                  messages: [
                    {
                      id: 1,
                      date: '10/01/2020 15:30:55',
                      message: 'Ricordati di chiamare la nonna',
                      status: 'sent'
                    },
                    {
                      id: 2,
                      date: '10/01/2020 15:50:00',
                      message: 'Va bene, stasera la sento',
                      status: 'received'
                    }
                  ],
                },
                {
                  id: 6,
                  name: 'Claudia',
                  avatar: '_5',
                  visible: true,
                  messages: [
                    {
                      id: 1,
                      date: '10/01/2020 15:30:55',
                      message: 'Ciao Claudia, hai novità?',
                      status: 'sent'
                    },
                    {
                      id: 2,
                      date: '10/01/2020 15:50:00',
                      message: 'Non ancora',
                      status: 'received'
                    },
                    {
                      id: 3,
                      date: '10/01/2020 15:51:00',
                      message: 'Nessuna nuova, buona nuova',
                      status: 'sent'
                    }
                  ],
                },
                {
                  id: 7,
                  name: 'Federico',
                  avatar: '_7',
                  visible: true,
                  messages: [
                    {
                      id: 1,
                      date: '10/01/2020 15:30:55',
                      message: 'Fai gli auguri a Martina che è il suo compleanno!',
                      status: 'sent'
                    },
                    {
                      id: 2,
                      date: '10/01/2020 15:50:00',
                      message: 'Grazie per avermelo ricordato, le scrivo subito!',
                      status: 'received'
                    }
                  ],
                },
                {
                  id: 8,
                  name: 'Davide',
                  avatar: '_8',
                  visible: true,
                  messages: [
                    {
                      id: 1,
                      date: '10/01/2020 15:30:55',
                      message: 'Ciao, andiamo a mangiare la pizza stasera?',
                      status: 'received'
                    },
                    {
                      id: 2,
                      date: '10/01/2020 15:50:00',
                      message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                      status: 'sent'
                    },
                    {
                      id: 3,
                      date: '10/01/2020 15:51:00',
                      message: 'OK!!',
                      status: 'received'
                    }
                  ],
                }
              ],  
            currentIndex: 0,  
            searchInput: '',
        }
    },
    computed:{
        currentContact(){
            return this.contacts[this.currentIndex];
        }
    },
    methods: {
        setCurrentIndex(index) {
          this.currentIndex = index;
        },
        sendMessage() {
          //prendo l'elemento dal dom
          const messageInput = document.getElementById('messageInput');
          // prendo il valore dal messaggio dall'user
          const messageText = messageInput.value;
          // creo nuovo object 
          const newMessage = {
            id: this.currentContact.messages.length + 1,
            date: '10/01/2020 15:30:55',
            message: messageText,
            status: 'sent'
          };
          // pusho il nuovo messaggio scritto nella chat del current contact
          this.currentContact.messages.push(newMessage);
          // riporto a stringa vuota l'input così da poter scrivere un nuovo messaggio
          messageInput.value = '';
          // dopo un secondo rispondo ok
          setTimeout(() => {
            this.currentContact.messages.push({
              message: "Ok",
              date: '10/01/2020 15:30:55',
              status: 'received',
            });
          }, 1000);
        }
    },
});

app.mount('#root');