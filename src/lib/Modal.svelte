<script>
  import FaHandPointLeft from "svelte-icons-pack/fa/FaHandPointLeft";
  import FaHandPointRight from "svelte-icons-pack/fa/FaHandPointRight";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import IoClose from "svelte-icons-pack/io/IoClose";
  import DetailsMinder from "./DetailsMinder.svelte";

  export let openMinders;
  export let onClose;

  let currentIndex = 0;
  let currentMinder = { ...openMinders[currentIndex] };
  $: currentMinder = { ...openMinders[currentIndex] };

  function handleClick(value) {
    currentIndex += value;
  }
</script>

<div class="modal">
  <div class="container">
    <button class="icon close" on:click={onClose}>
      <Icon src={IoClose} />
    </button>

    <button
      class="icon"
      on:click={() => handleClick(-1)}
      disabled={currentIndex === 0}
    >
      <Icon src={FaHandPointLeft} />
    </button>

    <DetailsMinder {...currentMinder} />

    <button
      class="icon"
      on:click={() => handleClick(1)}
      disabled={currentIndex === openMinders.length - 1}
    >
      <Icon src={FaHandPointRight} />
    </button>
  </div>
</div>

<style lang="scss">
  @use "../styles/colors";

  div.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    div.container {
      position: relative;
      width: 90vw;
      height: 90vh;
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: rgba(0, 0, 0, 0.75);
      border-radius: 4px;
      border: 1px solid colors.$yellow;

      * {
        color: colors.$yellow;
      }
    }
  }
</style>
