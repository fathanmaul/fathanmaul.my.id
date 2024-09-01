<script>
  import { page } from '$app/stores';
</script>
<div>
  <p>
    Page : {
      $page.error?.message
    }
  </p>
</div>