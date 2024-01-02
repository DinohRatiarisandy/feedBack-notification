<script>
  import { FeedBackStore } from "./feedBackStore";
  import { v4 as uuid } from "uuid";

  const notes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let commentaire = "";
  $: isDisable = !(commentaire.length >= 10);

  let noteSelected = 10;
  const handleVote = (note) => {
    noteSelected = note;
  };

  const handleSubmit = () => {
    const newFeedBack = {
      id: uuid(),
      rating: noteSelected,
      text: commentaire,
    };
    FeedBackStore.addFeedBack(newFeedBack);
    commentaire = "";
    noteSelected = 10;
  };
</script>

<section class="feedback-form">
  <h1>Est-ce-que vous aimez l'application ?</h1>
  <div class="vote">
    <div class="notes">
      {#each notes as note (note)}
        <button
          class:selected={noteSelected === note}
          on:click={() => handleVote(note)}>{note}</button
        >
      {/each}
    </div>
    <div class="explication">
      <span>Moins apprécié</span>
      <span>Plus apprécié</span>
    </div>
  </div>
  <form name="feedback-input" on:submit|preventDefault={handleSubmit}>
    <div class="form-content">
      <input
        type="text"
        placeholder="Ecrivez votre commentaire"
        bind:value={commentaire}
      />
      <button disabled={isDisable}>Envoyer</button>
    </div>
    {#if commentaire && commentaire.length < 10}
      <div class="error-message">
        <span>Votre commentaire doit contenir au moins de 10 caractères !</span>
      </div>
    {/if}
  </form>
</section>

<style>
  .feedback-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    gap: 46px;
    padding: 16px;
    background-color: white;
    color: black;
    border-radius: 15px;
  }

  .vote {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .notes {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 24px;
    font-size: 20px;
    font-weight: 500;
  }

  .notes button {
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 46px; */
    /* height: 46px; */
    width: 3em;
    height: 3em;
    border-radius: 50%;
    background-color: #616161c2;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    color: white;
  }

  .notes button:hover:not(.selected) {
    background-color: #5f5f5f;
  }

  .notes .selected {
    background-color: #ff4c8a;
  }

  .explication {
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 14px;
  }

  form {
    gap: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .form-content {
    display: flex;
    border: 1px solid rgba(218, 218, 218, 0.938);
    border-radius: 8px;
    padding: 5px;
  }

  .form-content input {
    flex: 1;
    font-size: 18px;
    border: none;
    outline: none;
  }

  .form-content input::placeholder {
    color: #858585ef;
    font-size: 16px;
  }

  .form-content button {
    width: 90px;
    height: 45px;
    font-size: 15px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    background-color: rgb(63, 66, 252);
    color: white;
    outline: none;
    transition: background-color 0.2s ease-in-out;
  }

  .form-content button:disabled {
    cursor: not-allowed;
    background-color: #808080;
  }

  .form-content button:hover:not(:disabled) {
    background-color: rgb(16, 20, 247);
  }

  .error-message {
    color: rgb(214, 36, 36);
    font-size: 15px;
  }

  @media screen and (max-width: 1652px) {
    .explication {
      display: none;
    }
  }
</style>
