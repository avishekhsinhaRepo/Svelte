import {writable} from 'svelte/store';

const students = [
    { 
        id: 0,
        name: 'ABC'
    },
    { 
        id: 1,
        name: 'ABC2'
    }

]
const testStore = writable({});
export default testStore;