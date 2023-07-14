<script>
    export let data;
    let params = 0;
    import { onMount } from 'svelte';
  
    onMount(() => {
        window.$('[data-bs-toggle="tooltip"]').tooltip()
    });
</script>

<style>
    div.main {
        margin-left: 40pt;
        margin-top: 10pt;
    }
    p {
        font-size: 15pt ;
    }

    circle.gps {
        opacity: 0.05;
    }
    circle.gps-selected {
        fill: red;
    }
    circle.catering {
        fill:limegreen;
    }
    circle.professional {
        fill: crimson;
    }
    circle.domestic {
        fill: purple;
    }
    circle.housing {
        fill: steelblue;
    }
    circle.other {
        fill: black;
    }


</style>

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


<div class = 'main'>
    <h1>Serkan Shentyurk - KU Leuven - r0833419</h1>
    <h2>Overview</h2>

    Select car to highlight: <select bind:value={params}>
        {#each data.unique_car_id as car}
            <option value= "{car}">
                car {car}
            </option>
        {/each}
    </select>

    <p>
    {#if params != 0}
    Go to <a href={`/cars/${params}`}> details</a> for Car {params}.
    {/if}
    </p>

    <svg width=600 height =600>
        {#each data.GPS as dp}
        {#if params == dp.car_id}
        <circle id='gps' cx = {dp.long}  cy={dp.lat} r=3 class="gps-selected"/>
        {:else}
        <circle id='gps' cx = {dp.long}  cy={dp.lat} r=3 class="gps"/>
        {/if}
        {/each}

        {#each data.point_interest as dp}
            <circle id='poi' cx = {dp.long}  cy={dp.lat} r=5 class = {dp.type}>
                <title> {dp.name}</title>
            </circle>
        {/each}
    </svg>
</div>