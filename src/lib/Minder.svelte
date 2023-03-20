<script>
  export let name = "";
  export let src = "";
  export let onExpand;
</script>

<div on:click={() => onExpand(name)} class="container">
  <img {src} alt={name} />
  <p>{name}</p>
</div>

<style lang="scss">
  @use "../styles/colors";
  div.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4px;
    border: 1px solid black;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      transform: scale(1.1);
      background-color: colors.$green;
      border: 1px solid colors.$yellow;
    }

    img {
      width: 250px;
      height: 250px;
      object-fit: contain;
    }

    p {
      color: colors.$yellow;
    }
  }
</style>
