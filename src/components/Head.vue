<template>
    <div class="background" id="home">
        <section>
            <div class="header-content">
                <div class="title">
                    <span class="red">H</span>
                    <span class="green">i</span>
                    <span class="blue">, </span>
                    <span class="red">I</span>
                    <span class="green">'</span>
                    <span class="red">m </span>
                    <span class="blue">C</span>
                    <span class="green">o</span>
                    <span class="red">d</span>
                    <span class="blue">y</span>
                </div>
                <p>I build full stack web and mobile applications.</p>
            </div>
        </section>
        
    </div>
</template>

<script setup>

</script>

<style scoped>
    

section {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100vh;

    color: var(--text-primary);
    font-size: 3em;
    font-weight: bold;
    position: relative;
    
}

/* Header */
.header-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    text-align: left;
    margin-top: 60vh;
    width: 100%;
    max-width: 800px;
    
    z-index: 2;
    text-shadow:0px 5px 5px rgb(0, 0, 0);
}
.background {
    background-image: url('../assets/background1.jpg');
    background-size: cover !important; /* Ensures the image covers the entire background area */
    background-position: center !important; /* Centers the background image */
    background-attachment: fixed !important; /* Keeps the background image fixed during scrolling */

    /* Optional: Vendor prefixes for older browser support */
    -webkit-background-size: cover !important;
    -moz-background-size: cover !important;
    -o-background-size: cover !important;
    background-size: cover !important;

    -webkit-background-position: center !important;
    -moz-background-position: center !important;
    -o-background-position: center !important;
    background-position: center !important;

    -webkit-background-attachment: fixed !important;
    -moz-background-attachment: fixed !important;
    -o-background-attachment: fixed !important;
    background-attachment: fixed !important;
}
.background::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    background: linear-gradient(to top, var(--background-primary), rgba(0, 0, 0, 0.1));
    z-index: 0;
}
.title span {
    transition: color 0.3s;
    cursor: pointer;
}
.red:hover {
    color: red;
    transition: color 0.3s;
}

.blue:hover {
    color: blue;
    transition: color 0.3s;
}

.green:hover {
    color: green;
    transition: color 0.3s;
}
</style>