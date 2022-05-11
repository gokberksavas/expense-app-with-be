<template>
    <b-container fluid="md" class="text-center my-3">
        <h1>{{ title }}</h1>
        <h6 class="font-italic">{{ descriptionText }}</h6>
    </b-container>
</template>

<script>
export default {
    name: 'PageHeader',
    props: {
        title: String,
        descriptionText: String,
    }
}
</script>