<script>
    import photoStore from './photo.store'
    const baseUrl = "https://jsonplaceholder.typicode.com/photos";
    let albumId;

    function fetchPhotos() {
        fetch(`https://jsonplaceholder.typicode.com/photos/${albumId}`)
            .then((response) => response.json())
            .then((json) =>{
                photoStore.set(json);
            });
    }
</script>

<h1>Album</h1>
<select class="dog-selector" on:blur={fetchPhotos} bind:value={albumId}>
    <option value="">Select</option>
    <option value="1">1</option>
    <option value="2">2</option>
</select>
