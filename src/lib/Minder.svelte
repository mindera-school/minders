<script>
  export let name = "";
  export let src = "";
  const open = () => {
    console.log("beep");
  };
</script>

<div on:click={open}>
  <img {src} alt={name} />
  <p>{name}</p>
</div>
