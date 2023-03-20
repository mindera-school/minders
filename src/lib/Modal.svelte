<script>
  import BiDownload from "svelte-icons-pack/bi/BiDownload";
  import FaHandPointLeft from "svelte-icons-pack/fa/FaHandPointLeft";
  import FaHandPointRight from "svelte-icons-pack/fa/FaHandPointRight";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import IoClose from "svelte-icons-pack/io/IoClose";

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

    <div class="minder">
      <h2 class="name">{currentMinder.name}</h2>
      <img src={currentMinder.src} alt={currentMinder.name} />
      <p class="description">{currentMinder.description || ""}</p>

      <a class="icon" href={currentMinder.src} download>
        <Icon src={BiDownload} />
      </a>
    </div>

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

      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px 6px;
        font-size: 20px;
        border: 1px solid colors.$green;
        border-radius: 4px;
        background-color: colors.$blue;
        transition: 1s;

        &.close {
          position: absolute;
          top: 8px;
          right: 8px;
        }

        &:hover {
          transform: scale(1.1);
        }

        &:disabled {
          opacity: 0.5;
        }
      }

      div.minder {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

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
    }
  }
</style>
