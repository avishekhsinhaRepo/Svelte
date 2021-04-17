<script>
    export let username;
    export let name;
    export let email;
    export let phone;
    export let imgUrl='';

</script>
  <div class="card" style="width: 14rem;">
    <img src="{imgUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{username}</h5>
      <p class="card-text">{name}</p>
      <p>Phone:  {phone}</p>
      <p>Email:  {email}</p>
      <div class="row mb-2">
        <a href="/" class="btn btn-primary">Remove</a>
      </div>
      <div class="row">
      <a href="/" class="btn btn-primary">Edit</a>
      </div>
      
    </div>
  </div>