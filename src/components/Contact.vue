<template>
    <section>
        
        <form   
            action="https://formspree.io/f/xoqgodkr"
            method="POST"
           
            >
            <h1>Let's discuss your project ideas</h1>
            <label>
                Your email:
                <input type="email" name="email" required>
            </label>
            <label>
                Your message:
                <textarea name="message" rows="8" required></textarea>
            </label>
            <button type="submit">Let's do this!</button>
        </form>
    </section>

</template>

<script setup>
</script>

<style scoped>
section h1 {
    text-align: left;
    margin-bottom: 50px;

}
section {
    display: flex;

    text-align: left;
    justify-content: center;
    align-items: center;
    padding-block: 100px;
}

form {
    background: var(--background-primary);
    padding: 50px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    width: 100%;
    text-align: left;
    max-width: 600px;
    color: #fff;
    font-family: Arial, sans-serif;
    border: 1px solid #fff;
    transition: 0.5s box-shadow;
}


form:hover {
    box-shadow: -2px -2px 5px lightblue, /* Top-left */
                2px -2px 5px lightblue,  /* Top-right */
                -2px 2px 5px lightblue,  /* Bottom-left */
                2px 2px 5px lightblue;   /* Bottom-right */
    cursor: pointer;
}

label {
    display: block;
    margin-bottom: 10px;
    font-size: 1.5rem;
}

input,
textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: var(--background-primary);
    color: #fff;
    transition: 0.2s box-shadow;
}

textarea {

}
input:focus,
textarea:focus {
box-shadow: -2px -2px 5px lightblue,
            2px -2px 5px lightblue,  
            -2px 2px 5px lightblue, 
            2px 2px 5px lightblue;   
}

button {
    padding: 10px 20px;
    background: var(--background-secondary);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.25rem;
}
button:hover {
    background: var(--background-primary);
    box-shadow: -2px -2px 5px lightblue,
            2px -2px 5px lightblue,  
            -2px 2px 5px lightblue, 
            2px 2px 5px lightblue;  
    transition: 0.2s box-shadow; 
}

</style>