<template>
    <b-container 
        v-if="savedResidents.length > 0" 
        fluid="sm" 
        class="resident-list-wrapper w-50 mt-3 py-3"
    >   
        <div class="border border-1 p-2 rounded rounded-2 shadow-sm">
            <h5 class="font-weight-bold">Resident List</h5>
            <b-form-checkbox-group>
                <b-form-checkbox 
                    v-for="resident in savedResidents" 
                    :key="resident._id" 
                    v-model="checkedList" 
                    :value="resident._id"
                    :resident-id="resident._id"
                    class="inline d-flex align-items-center"
                >            
                    {{ resident.name }}
                </b-form-checkbox>
            </b-form-checkbox-group>
            <div class="action-buttons-wrapper" v-if="checkedList.length > 0">
                <b-button
                    variant="danger" 
                    size="sm"
                    class="mt-3"
                    @click="removeResident"
                >
                    Remove
                </b-button>
                <b-button
                    variant="success"
                    size="sm"
                    class="mt-3 ml-1"
                    v-b-modal.create-ticket-modal
                >
                    Create Ticket
                </b-button>
            </div>
        </div>
        <TicketModal :resident="checkedList[0]"/>
    </b-container>
</template>


<script>
import TicketModal from '../ticket-operations/TicketModal.vue'

export default {
    name: 'ResidentList',
    data: function () {
        return {
            checkedList: [],
        }
    },
    components: {
        TicketModal
    },
    props: {
        savedResidents: Array,
    },
    methods: {
        removeResident: function () {
            this.$emit('resident-removed', this.checkedList);

            this.checkedList = [];
        }
    }
}
</script>