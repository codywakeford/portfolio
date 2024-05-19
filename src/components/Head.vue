<template>
    <div class="background" id="home">
        <section>
            <header>
                <h3>Hello,</h3>
                <h1>I'm Cody Wakeford</h1>
                <p>I build full stack web and mobile applications.</p>
            </header>
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
header {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    position: relative;
    bottom: -0px;
    width: 100%;
    height: 100%;
    max-width: 800px;
    margin-bottom: 10%;
    
    z-index: 2;
    text-shadow:0px 5px 5px rgb(0, 0, 0);
    user-select: none;
}

header h1 {
    font-size: 5rem;
    font-weight: bold;
}

header h3 {
    font-size: 2rem;
    font-weight: 100;
}

.background {
    background-image: url(../assets/background3.jpg);
    background-size: cover ;
    background-position: center ;
    background-attachment: fixed ;
    
    
}


@media (max-width: 768px) {
    header h1 {
        font-size: 3rem;
    }

    header h3 {
        font-size:1.5rem;
    }

    header p {
        font-size: 1.25rem;
    }
}


@media (max-width: 600px) {
    .background {
        background-attachment: scroll ;
    }

    header h1 {
        font-size: 2rem;
    }

    header h3 {
        font-size: 1.25rem;
    }

    header p {
        font-size: 1rem;
    }

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


</style>