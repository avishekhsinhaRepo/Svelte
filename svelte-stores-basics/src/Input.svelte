<script>
    import valueStore from './value.store';
    let name='';
	function updateValue(){
        valueStore.set(name);
      }
</script>

INPUT VALUE : <input type="text" bind:value="{name}" on:input="{updateValue}">
<p>INPUT COMPONENT - {name}</p>