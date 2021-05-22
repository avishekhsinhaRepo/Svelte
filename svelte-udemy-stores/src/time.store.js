import {readable} from 'svelte/store';
 const timeStore = readable([], set =>{
    const timeInterval = setInterval(()=>{
        const date = new Date();
        set(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    },1000);
    return ()=>{
        clearInterval(timeInterval);
    }
});

export default timeStore;