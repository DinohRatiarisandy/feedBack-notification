<script>
  import { FeedBackStore } from "./feedBackStore";

  $: feedBackCount = $FeedBackStore.length;
  $: moyenne = $FeedBackStore.reduce((acc, { rating }) => {
    return acc + rating / $FeedBackStore.length;
  }, 0);
</script>

<section class="feedback-infos">
  <div class="commentaire">
    <span>Commentaires: </span>
    <span class="count">{feedBackCount}</span>
  </div>
  <div class="moyenne">
    <span>Moyenne: </span>
    <span class="count">{parseFloat(moyenne.toFixed(2))}</span>
  </div>
</section>

<style>
  .feedback-infos {
    display: flex;
    justify-content: space-between;
    width: 40%;
    font-size: 18px;
    color: white;
  }

  .count {
    font-weight: 700;
  }
</style>
