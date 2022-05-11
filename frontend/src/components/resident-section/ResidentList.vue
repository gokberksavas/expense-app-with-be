<template>
    <b-container 
        v-if="savedResidents.length > 0" 
        fluid="sm" 
        class="resident-list-wrapper w-50 mt-3 py-3"
    >   
        <div class="border border-1 p-2 rounded rounded-2 shadow-sm">
            <h5 class="font-weight-bold">Resident List</h5>
            <b-form-group>
                <b-form-radio 
                    v-for="resident in savedResidents" 
                    :key="resident._id" 
                    v-model="checked" 
                    :value="resident._id"
                    class="inline d-flex align-items-center"
                >            
                    {{ resident.name }}
                </b-form-radio>
            </b-form-group>
            <div class="action-buttons-wrapper" v-if="checked">
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
        <TicketModal v-if="checked" :resident="getResidentName"/>
    </b-container>
</template>


<script>
import TicketModal from '../ticket-operations/TicketModal.vue'

export default {
    name: 'ResidentList',
    data: function () {
        return {
            checked: '',
        }
    },
    components: {
        TicketModal
    },
    props: {
        savedResidents: Array,
    },
    computed: {
        getResidentName: function () {
            let resident = this.savedResidents.find(resident => {
                return resident._id === this.checked;
            });

            return resident.name;
        }
    },  
    methods: {
        removeResident: function () {
            this.$emit('resident-removed', this.checked);

            this.checked = '';
        }
    }
}
</script>