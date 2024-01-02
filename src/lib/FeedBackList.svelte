<script>
  import { blur, scale } from "svelte/transition";
  import { FeedBackStore } from "./feedBackStore";
  import { flip } from "svelte/animate";

  const handleDelete = (id) => {
    FeedBackStore.removeFeedBack(id);
  };
</script>

<section class="feedBack-content">
  {#each $FeedBackStore as feedBack (feedBack.id)}
    <div
      class="feedBack-content-body"
      in:scale
      out:blur={{ delay: 100 }}
      animate:flip
    >
      <span class="rating">{feedBack.rating}</span>
      <div class="textContent">{feedBack.text}</div>
      <button on:click={() => handleDelete(feedBack.id)} class="delete"
        >&times;</button
      >
    </div>
  {/each}
</section>

<style>
  button {
    background: none;
    outline: none;
    border: none;
  }

  .feedBack-content {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .feedBack-content-body {
    background-color: white;
    padding: 24px;
    border-radius: 8px;
    position: relative;
    transition: scale 0.2s ease-in-out;
    cursor: default;
  }

  .feedBack-content-body:hover {
    scale: 1.01;
  }

  .feedBack-content-body .rating {
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: #ff4c8a;
    font-size: 14px;
    color: white;
    cursor: default;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    left: -7px;
    top: -15px;
  }

  .feedBack-content-body .delete {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 25px;
    cursor: pointer;
    height: 25px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s ease-in-out;
    border-radius: 0 8px 0 0;
  }

  .feedBack-content-body .delete:hover {
    background-color: rgb(250, 91, 91);
    color: white;
  }
</style>
