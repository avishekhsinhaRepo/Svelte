<script>
	import ContactCard from './ContactCard.svelte';
	import Header from './UI/Header.svelte';
	let username;
    let name;
    let email;
    let phone;
    let imgUrl;
	let contactCards=[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  }
  
];

function addContactCard(){
	const newContactCard = {
		id:Math.random(),
		name:name,
		username:username,
		email:email,
		phone:phone
	}

	contactCards = [...contactCards,newContactCard];
}
</script>

<main>
	<Header/>
	<hr/>
	<div class="container">
	<div class="row">
		
		<div class="col-sm-4">
			<form>
				<div class="mb-1">
				  <label for="uname" class="form-label">User Name</label>
				  <input type="text" class="form-control" id="uname" bind:value="{username}"/>
				</div>

				<div class="mb-1">
				  <label for="name" class="form-label">Name</label>
				  <input type="text" class="form-control" id="name" bind:value="{name}"/>
				</div>

				<div class="mb-1">
					<label for="email" class="form-label">Email</label>
					<input type="email" class="form-control" id="email" bind:value="{email}"/>
				  </div>

				  <div class="mb-1">
					<label for="phone" class="form-label">Phone</label>
					<input type="text" class="form-control" id="phone" bind:value="{phone}"/>
				  </div>

				<button type="button" class="btn btn-primary" on:click="{addContactCard}">Add Contact</button>
			  </form>
		</div>
	
</div>
<hr/>
		<div class="row">
			<h3>Contact Card</h3>
		{#each contactCards as contact , index (contact.id)}
			<ContactCard 
				username="{contact.username}" 
				name="{contact.name}" 
				email="{contact.email}"  
				phone="{contact.phone}" 
				imgUrl ="https://randomuser.me/api/portraits/women/{index}.jpg"/>
		{/each}
	</div>
	</div>
	</main>
