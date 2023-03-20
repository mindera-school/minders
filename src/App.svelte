<script>
  import Minder from "./lib/Minder.svelte";
  import Modal from "./lib/Modal.svelte";
  import Minders from "./Minders.js";

  let openMinders = null;
  function onExpand(name) {
    openMinders = Minders.filter((e) => e.find((m) => m.name === name))[0];
  }

  function onClose() {
    openMinders = null;
  }
</script>

<main>
  <h1>Minders</h1>
  <div class="minders">
    {#each Minders as minder}
      <Minder name={minder[0].name} src={minder[0].src} {onExpand} />
    {/each}
  </div>

  {#if openMinders}
    <Modal {openMinders} {onClose} />
  {/if}
</main>

<style lang="scss">
  @use "./styles/colors";
  main {
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    background-color: colors.$grey;

    h1 {
      text-align: center;
      color: colors.$yellow;
    }
    div.minders {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
    }
  }
</style>
