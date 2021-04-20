<script>
import Dogs from "./Dogs.svelte";

import Hobbies from "./Hobbies.svelte";
import Input from "./Input.svelte";
import Output1 from "./Output1.svelte";
import Output2 from "./Output2.svelte";
import Parent from "./Parent.svelte";
let firstName='';
let lastName='';

$:fullName = firstName +' '+ lastName;
</script>
<div class="container">
    <div class="row">
          <Dogs/>  

    </div>
</div>


<hr/>

    <input type="text" bind:value="{firstName}"/>
    <input type="text" bind:value="{lastName}"/>
    <p>${fullName}</p>
<Input/>
<Output1/>
<Output2/>
<Hobbies/>
<Parent/>


