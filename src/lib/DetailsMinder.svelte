<script>
  import BiDownload from "svelte-icons-pack/bi/BiDownload";
  import Icon from "svelte-icons-pack/Icon.svelte";

  export let name;
  export let src;
  export let description;
</script>

<div class="container">
  <h2 class="name">{name}</h2>
  <img {src} alt={name} />
  <p class="description">{description || ""}</p>

  <a class="icon" href={src} download>
    <Icon src={BiDownload} />
  </a>
</div>

<style lang="scss">
  @use "../styles/colors";

  div.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    * {
      color: colors.$yellow;
    }

    img {
      width: 500px;
      height: 500px;
      object-fit: contain;
    }

    p,
    h2 {
      font-weight: bold;
    }

    h2 {
      &.name {
        font-size: 40px;
      }
    }

    p {
      &.description {
        font-size: 20px;
      }
    }
  }
</style>
