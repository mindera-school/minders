<script>
  export let name;
  export let src;
  export let onExpand;
  export let count;
</script>

<div on:click={() => onExpand(name)} class="container">
  <p class="count">{count}</p>
  <img {src} alt={name} />
  <p>{name}</p>
</div>

<style lang="scss">
  @use "../styles/colors";
  div.container {
    position: relative;
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

      &.count {
        position: absolute;
        top: 4px;
        right: 4px;
        color: colors.$blue;
      }
    }
  }
</style>
