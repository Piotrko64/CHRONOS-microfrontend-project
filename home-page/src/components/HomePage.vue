<template>
    <div class="main-wrapper">
        <div class="text-container">
            <h1>CHRON<span class="orange">OS</span></h1>
            <p>
                Keep track of how much time is left until the most important events in your life with a
                personalized countdown!
            </p>
            <div class="buttons-wrapper">
                <a class="btn-orange" href="/add-event" onclick="singleSpaNavigate(event)">Add new event</a>
                <a class="btn-white" href="/events-list" onclick="singleSpaNavigate(event)"
                    >See all events
                </a>
            </div>
        </div>
        <div class="image-container">
            <img src="../assets/images/undraw_time_management_re_tk5w-2.svg" alt="" />
        </div>
    </div>
</template>

<script>
export default {
    name: "HomePage",
};
</script>

<style scoped>
.main-wrapper {
    height: 100%;
    min-height: 100dvh;
    background: url("../assets/images/main-background.png");
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20rem;
}

.text-container {
    width: 25%;
    display: flex;
    flex-direction: column;
}

h1 {
    margin-top: 0;
    font-size: 3.5rem;
    font-weight: 400;
}

p {
    margin-top: 0;
    font-size: 1.5rem;
    font-weight: 300;
}

span {
    font-weight: 600;
}

.buttons-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    margin-top: 1rem;
}

.image-container {
    width: 25%;
}

img {
    max-width: 100%;
}

.btn-orange {
    padding: 0.8rem 3.5rem;
    background-color: #f9a826;
    border: 2px solid #f9a826;
    color: white;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
}

.btn-white {
    padding: 0.8rem 3.5rem;
    background-color: #fff;
    border: none;
    color: #f9a826;
    border: 2px solid #f9a826;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
}

h1 {
    margin-top: 0px;
}

.orange {
    color: #f9a826;
}
</style>
