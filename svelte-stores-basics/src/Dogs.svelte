<script>
import { onMount } from "svelte";
let alldogData =[];
let src ='';
let selectedDogBreed=''
let isDataLoading = false;
let hasErrors= false;
let showData = false;
//$: getDogsData(selectedDogBreed)

//$: getDogsDataAsync(selectedDogBreed)

/*WAY  1 START*/
/*function getDogsData(breed){
    if(!breed)
        return;
        isDataLoading = true  
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`).
    then(response => response.json()).
    then(dogImageData => {
        src = dogImageData.message
        isDataLoading = false;
        showData = true;
    }).catch(error =>{
        hasErrors = true;
    }).finally(()=>{
        isDataLoading = false;
    });
}*/
/*WAY 1  End*/

/*WAY  2 START*/
/*async function getDogsDataAsync(breed){
    if(!breed)
        return;
    try{
        isDataLoading = true;
        let dogImageData = await getRandomDogImage(breed);
        src = dogImageData.message;
        isDataLoading = false;
        showData = true;

    }catch(error){
        hasErrors= true;
    }
}
async function getRandomDogImage(breed){
    let response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    let dogImageData = await response.json();
    return dogImageData
}*/
/*WAY 2 End*/

async function getRandomDogImageForAwaitBlock(breed){
    let response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    let dogImageData = await response.json();
    return dogImageData
}

onMount(()=>{
    fetch('https://dog.ceo/api/breeds/list/all').
    then(dogList => dogList.json()).
    then(dogData => { 
        alldogData = Object.keys(dogData.message)
     });
});


</script>
<div class="card">
    <div class="card-body">
      <select class="form-select" aria-label="Default select example" bind:value="{selectedDogBreed}">
          <option selected>Open this select menu</option>
          {#each alldogData as dogData}
          <option value="{dogData}">{dogData}</option>
          {/each}
    </select>
    </div>
  </div>
  <hr/>


 <!--
{#if isDataLoading == true }
<div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  {:else if isDataLoading == false && showData}
  <div class="card" style="width: 18rem;">
      <img {src} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Breed Selected : {selectedDogBreed}</h5>
      </div>
    </div>
    {:else if hasErrors}
    <div class="alert alert-danger" role="alert">
        Error!
      </div>
{/if}
    -->
    {#await getRandomDogImageForAwaitBlock(selectedDogBreed)}
	<div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
{:then dogImageData}
<div class="card" style="width: 18rem;">
    <img src="{dogImageData.message}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Breed Selected : {selectedDogBreed}</h5>
      </div>
    </div>
{:catch error}
	<div class="alert alert-danger" role="alert">
        Error!
      </div>
{/await}



