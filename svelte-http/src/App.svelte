<script>
import { onMount } from "svelte";


	export let hobbies =[];
	let isDataLoading = false;
	let hobbyInput;
	function addHobby(){
		isDataLoading = true;
		fetch('https://svelte-app-d56b0-default-rtdb.firebaseio.com/hobbies.json',{
				method:'POST',
				body:JSON.stringify(hobbyInput.value),
				header: {
					'Content-type':'application/json'
				}
		}).then((data)=>{
			if(!data.ok){
				return new Error("Network Error");
			}
			isDataLoading = false;
			console.log(data);
			hobbies = [...hobbies, hobbyInput.value];
			hobbyInput.value = '';
		}).catch(()=>{
			isDataLoading = false;
			console.log("Failed")
		});
		
	}
	onMount(()=>{getHobbies()});
	function getHobbies(){
		fetch('https://svelte-app-d56b0-default-rtdb.firebaseio.com/hobbies.json').then((data)=>{
			if(!data.ok){
				return new Error("Network Error");
			}
			return data.json();
		}).then((hobbiesRes)=>{
			hobbies = Object.values(hobbiesRes);
				console.log(hobbies);
		}).catch((error)=>{
			console.log("Failed",error)
		});
	
	}
	
</script>
 <div class="container">
	 <div class="row mb-3">
		<form>
			<div class="mb-3">
			  <label for="hobby" class="form-label">Hobby</label>
			  <input type="text" class="form-control" id="hobby" bind:this ="{hobbyInput}" />
			  </div>
			<button type="button" on:click="{addHobby}" class="btn btn-primary">Add Hobby</button>
		  </form>
	 </div>
	 <div class="row">
		 {#if hobbies.length >0}
		 <ul class="list-group">
			{#each hobbies as hobby }
			<li class="list-group-item">{hobby}</li>
			{/each}
		  </ul>
		  {:else if hobbies.length == 0}
		  <div class="alert alert-danger" role="alert">
			No hobbies Data Available
		  </div>
		{:else if isDataLoading == true}
		<div class="spinner-border text-primary" role="status">
			<span class="visually-hidden">Loading...</span>
		  </div>
		 {/if}
		
		
	 </div>
 </div>