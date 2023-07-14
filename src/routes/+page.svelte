<script>
    import { onMount } from 'svelte';
  
    onMount(() => {
        window.$('[data-bs-toggle="tooltip"]').tooltip()
    });
</script>


<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="http://localhost:5173/">Serkan Shentyurk - App</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="http://localhost:5173/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="http://localhost:5173/cars">Car Analysis</a>
            </li>
        </ul>
      </div>
    </div>
  </nav>

<style>
    div.main {
        margin-left: 40pt;
        margin-top: 10pt;
    }

</style>

<div class= 'main'>
    <h1>Serkan Shentyurk - KU Leuven - r0833419</h1>
    <h2>Home Page</h2>
    <p>
        This is Serkan Shentyurk's project for Data Visualization in Data Science [G0R72a] course.
    </p>


    <p>
        Click for <a href="http://localhost:5173/cars"> Car Analysis</a>.
    </p>
</div>