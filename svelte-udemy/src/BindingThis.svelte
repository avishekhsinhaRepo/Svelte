<script>
    let element;
    let divElement;
    function reset() {
        element.value = "";
    }

    function getData() {
       console.log(element.value);
    }

    function getDivElementData(){
        console.dir(divElement);
        console.dir(divElement.innerText);
    }
</script>
<input bind:this={element} />
<button on:click={getData}>Save</button>
<button on:click={reset}>Reset</button>

<div bind:this="{divElement}"> Hello World!</div>
<button on:click={getDivElementData}>Get Div Data</button>