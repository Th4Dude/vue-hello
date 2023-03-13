'use strict'

  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        image : 'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        colore : 'azzurro'
      }
    }
  }).mount('#app')
