<template>
    <section class="resident-section">
        <div class="resident-wrapper">
            <ResidentInput :saved-residents="savedResidents" @resident-added="addResident($event)"/>
			<ResidentList :saved-residents="savedResidents" @resident-removed="removeResident($event, savedResidents)"/>
        </div>
    </section>
</template>

<script>
import ResidentInput from "./ResidentInput.vue"
import ResidentList from './ResidentList.vue'
import axios from 'axios'

const baseUrl = 'http://localhost:5000';

export default {
	name: "ResidentSection",
	data: function () {
        return {
            savedResidents: [],
        };
	},
	props: {},
	components: { 
		ResidentInput,
		ResidentList
	},
	methods: {
		addResident: async function (resident) {
            await axios.post(baseUrl + '/create-user', { name: resident });

            this.getResidents();
		},
		removeResident: async function ($event) {
            await axios.delete(baseUrl + '/delete-user', {data: { id: $event }});

            this.getResidents();
                
		},
        getResidents: async function () {
            await axios.get(baseUrl + '/users').then(res => this.savedResidents = res.data);
        }
	},
    mounted() {
        this.getResidents();
    }
};
</script>