<script>
    export let data;
    let min = undefined;
    let days = [6,7,8,9,10,11,12,13,14,15,16,17,18,19];
    $: next = data.GPS[0].car_id+1;
    $: previous = data.GPS[0].car_id-1;
    $: use_day = Math.floor(min / 1440) * 20;
    $: use_min = (min % 1440)*300/1440 + 60;

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
    input.slider {
        width: 300px;
    }
    circle.gps {
        opacity: 0.1;
        fill:dodgerblue;
    }
    circle.gps-within {
        opacity: 1.5;
        fill:red;
    }
    line {
        stroke:whitesmoke;
    }
    .catering {
        fill:limegreen;
    }
    .professional {
        fill:crimson;
    }
    .domestic {
        fill: purple;
    }
    .housing {
        fill: steelblue;
    }
    .other {
        fill: black;
    }
    text {
        font-family: Times;
    }
    .selected {
        stroke:black;
        stroke-width: 1.5pt;
        
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

            {#if previous == 0}
            <li><a class="nav-link" href="http://localhost:5173/cars/{next}"> Next car</a></li>
            {:else if previous == 106}
            <li><a class="nav-link" href="http://localhost:5173/cars/{previous}"> Next car</a></li>
            {:else if next == 36}
            <li><a href="http://localhost:5173/cars/{previous}"> Previous car</a></li>
            <li><a href="http://localhost:5173/cars/101"> Next car</a></li>
            {:else if previous == 100}
            <li><a href="http://localhost:5173/cars/35"> Previous car</a></li>
            <li><a href="http://localhost:5173/cars/104"> Next car</a></li>
            {:else if previous == 103}
            <li><a href="http://localhost:5173/cars/101"> Previous car</a></li>
            <li><a href="http://localhost:5173/cars/{next}"> Next car</a></li>
            {:else}
            <li><a class="nav-link" href="http://localhost:5173/cars/{previous}"> Previous car</a></li>
            <li><a class="nav-link" href="http://localhost:5173/cars/{next}"> Next car</a> </li>

        {/if}



        </ul>
      </div>
    </div>
</nav>

<div class='main'>
<p><a href="http://localhost:5173/cars/"> Car Overview</a></p>
<p>
    {#if previous == 0}
    <a href="http://localhost:5173/cars/{next}"> Next car</a>
    {:else if previous == 106}
    <a href="http://localhost:5173/cars/{previous}"> Previous car</a>
    {:else if next == 36}
    <a href="http://localhost:5173/cars/{previous}"> Previous car</a>
    <a href="http://localhost:5173/cars/101"> Next car</a>
    {:else if previous == 100}
    <a href="http://localhost:5173/cars/35"> Previous car</a>
    <a href="http://localhost:5173/cars/104"> Next car</a>
    {:else if previous == 103}
    <a href="http://localhost:5173/cars/101"> Previous car</a>
    <a href="http://localhost:5173/cars/{next}"> Next car</a>
    {:else}
    <a href="http://localhost:5173/cars/{previous}"> Previous car</a>
    <a href="http://localhost:5173/cars/{next}"> Next car</a>
{/if}
</p>

<h1>Serkan Shentyurk - KU Leuven - r0833419</h1>

<h3>Details for car {data.GPS[0].car_id} </h3>

<div class ='slidecontainer'>
    <input type="range" min=0 max=20160 bind:value={min} class="slider" id="myRange">
</div>

<div>
<svg width=300 height=300>
    {#each data.GPS as dp}
    {#if min > dp.cumulative_minute_total && min - dp.cumulative_minute_total < 16}
        <circle id='gps' cx = {dp.long}  cy={dp.lat} r=3 class="gps-within"/>
    {:else if min <= dp.cumulative_minute_total && dp.cumulative_minute_total - min < 16}
        <circle id='gps' cx = {dp.long}  cy={dp.lat} r=3 class="gps-within"/>
    {:else}
        <circle id='gps' cx = {dp.long}  cy={dp.lat} r=2.5 class="gps"/>
    {/if}
    {/each}
</svg>
<svg width=370 height=300>
    {#each data.car_stops as dp}
        <rect x={dp.ver_start} y={dp.hor_start} width={dp.ver_end-dp.ver_start} height="16" class ={dp.location.location_type}>
            <title> {dp.start.time} - {dp.end.time}: {dp.location.name} ({dp.location.location_type})</title>
        </rect>
    {/each}

    <line x1="60" y1="0" x2="60" y2="290" />
    <line x1="135" y1="0" x2="135" y2="290" />
    <line x1="210" y1="0" x2="210" y2="290" />
    <line x1="285" y1="0" x2="285" y2="290" />
    <line x1="360" y1="0" x2="360" y2="290" />
    {#each days as d}
        <text x="40" y= {20*(d-5)-6} class="small">{d}</text>
    {/each}
    <text x = '55' y = 300 >0</text>
    <text x = '130' y = 300 >6</text>
    <text x = '200' y = 300 >12</text>
    <text x = '275' y = 300 >18</text>
    <text x = '350' y = 300 >24</text>

    
    <line x1= {use_min} y1={use_day} x2={use_min} y2={use_day + 16} class = 'selected'/>
    <line x1= {use_min} y1={use_day} x2={use_min} y2={use_day + 16} class = 'selected'/>

</svg>
</div>
</div>