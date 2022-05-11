<template>
    <b-modal id="create-ticket-modal" @ok="handleOk">
        <div>
            <span>Creating Ticket for {{ resident }}</span>
        </div>
        <b-form-select class="mt-2" v-model="expenseType" :options="options"/>
        <b-form-input class="mt-2" v-model="expenseCost"/>
    </b-modal>
</template>

<script>
export default {
    name: 'TicketModal',
    props: {
        resident: String,
    },
    data: function () {
        return {
            expenseType: null,
            expenseCost: 0,
            options: [
                { value: null, text: 'Please select an expense type.'},
                { value: 'gas', text: 'Gas'},
                { value: 'electric', text: 'Electric'},
                { value: 'water', text: 'Water'},
                { value: 'internet/phone', text: 'Internet / Phone'},
                { value: 'rent', text: 'Rent' },
                { value: 'shopping', text: 'Shopping'}
            ]
        }
    },
    methods: {
        handleOk: function () {
            window.alert('goko');
        }
    }
}
</script>