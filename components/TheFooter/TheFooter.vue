<template>
    <v-footer>
        © Copyright Asthriona LLC All Right Reserved. {{ new Date().getFullYear() }} &bull; <red>Beta v0.1</red>
    </v-footer>
</template>

<style>
v-footer {
    display: block;
    position: relative;
    margin-bottom: -50px;
    left: 0px;
    width: 100%;
    text-align: center;
    background-color: black;
    color: aliceblue;
    grid-row-start: 2;
    grid-row-end: 3;
}
red {
    color: red;
}
</style>
<script>
</script>