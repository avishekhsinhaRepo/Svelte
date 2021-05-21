<script>
    const colors =[
        'red', 'blue', 'green'
    ];
 let selectedValue= colors[1];
</script>
<select bind:value="{selectedValue}">
    {#each colors as color}
        <option value={color}>{color}</option>
    {/each}
</select>
<p style="color:{selectedValue}">Color</p>