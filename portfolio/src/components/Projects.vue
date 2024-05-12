<template>
    <section>

        <header>
            <h1>Heres some I made earlier</h1>
        </header>

        <div class="content">
            <li>Food Website</li>
            <li>Software Website</li>
            <li>Gourmai Mobile</li>
            <li>Gourmai Web</li>
        </div>

    </section>
</template>

<script setup>
</script>

<style scoped>
    section {
        display: flex;
        flex-direction: column;
        gap: 50px;
    

    }
    
    header {
        color: var(--text-primary);
    }

    header h1 {
        font-size: 2.5rem;
    }

    .content {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;
    }

    .content li {
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 15px;
        color: var(--text-secondary);

        list-style-type: none;
        height: 150px;
        width: 300px;
        background-color: var(--background-secondary);
    }
</style>