<script>
import BindingThis from "./BindingThis.svelte";
import ContactCard from "./ContactCard.svelte";
import CustomInput from "./CustomInput.svelte";
import Product from "./Product.svelte";
import Select from "./Select.svelte";
	let userName='';
	let jobTitle ='';
	let description = '';
	let contactCards =[];
	let formStatus="empty";

	function addContact(){
		if(!(userName && jobTitle && description)){
			formStatus = 'invalid'
			return;
		}
	  contactCards = [ ...contactCards,{
		  userName,
		  jobTitle,
		  description
	  }];
	}
let parentCount = 10;
	
</script>
{#if formStatus == 'invalid'}
<p>Invalid Data</p>
{/if }
<br/>
User Name<input type="text" bind:value={userName} /><br/>
Job Title<input type="text" bind:value={jobTitle} /><br/>
Description <textarea bind:value={description} /><br/>
<br/>
<button on:click="{addContact}">Add Contacts</button>
{#each contactCards as contactCard, index}
	<h1># {index}</h1>
	<ContactCard {...contactCard} />
{/each}
<hr/>
<Product on:add-to-cart={(event) => console.log(event.detail)} on:delete-from-cart={(event) => console.log(event.detail)}/>

<h3>Custom Component Binding</h3>
<p>Count From Parent : {parentCount}</p>
<button on:click="{()=>parentCount = parentCount+1}">Increment</button>
<CustomInput  bind:count={parentCount}/>
<Select />
<BindingThis/>