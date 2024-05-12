<!-- Nav.vue -->

<template>
    <nav>
        
        <div class="nav-left-content">
            <img src="../assets/cw-logo.png" alt="CW-Logo">
            <div>Cody Wakeford</div>
        </div>
        <div class="nav-right-content">
            <a href="#home">Home</a>
            <a href="#about">About Me</a>
            <a href="#projects"></a>
        </div>
    
    </nav>
</template>

<style>
/* Global */
:root {
    --background-primary: rgba(9,19,29,255); /* Deep Navy Blue */
    --background-secondary: rgba(13,27,42,255); /* Lighter Navy */
    --text-primary: rgba(220,221,225,255); /* Light Gray */
    --text-secondary: rgba(136,145,158,255); /* Medium Gray */
    --accent-color: rgba(144,202,249,255); /* Soft Blue */
    --highlight-color: rgba(255,203,107,255); /* Warm Yellow */
}
nav img {
    width: 50px;
}
nav {
    display: flex;
    justify-content: space-between;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 4;

    width: 100%;
    max-width: 1800px;
    padding: 50px;
    margin-inline: auto;

    color: var(--text-primary);
}

.nav-left-content, .nav-right-content {
    display: flex;
    align-items: center;
    gap: 20px;

    font-size: 1.5rem;
    color:var(--text-primary);
}
.nav-content {
    display: flex;
    justify-content: space-between;
    width: 1200px;
}
nav a {
    font-size: 1rem;;
    text-decoration: none;
    color: var(--text-primary);
}


</style>

