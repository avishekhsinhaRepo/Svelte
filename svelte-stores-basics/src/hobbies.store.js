import {writable} from 'svelte/store';

const hobbiesStore = writable([],async set =>{
   const response = await fetch('https://svelte-app-d56b0-default-rtdb.firebaseio.com/hobbies.json');
   const hobbies = await response.json();
    set(hobbies);
   return()=>{
       console.log("Some Clean up task");
   }
});

export default hobbiesStore;