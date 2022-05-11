<template>
    <b-container fluid="sm" class="w-50">
        <b-input-group class="shadow-sm">
            <b-input-group-prepend>
                <b-input-group-text class="rounded-0 rounded-start">Resident Name: </b-input-group-text>
            </b-input-group-prepend>
            <b-form-input 
                class="rounded-end me-5"
                placeholder="Please type the resident name" 
                :value="inputValue"
                
                @keyup="($event) => {
                    preventNumericInput($event),
                    updateInput($event); 
                }"
            />
            <b-input-group-append class="ms-5">
                <b-button variant="success" @click="addResident">Add</b-button>
            </b-input-group-append>
        </b-input-group>
    </b-container>
</template>

<script>
export default {
    name: 'ResidentInput',
    data: function () {
        return {
            inputValue: '',
        }
    },
    props: {
        savedResidents: Array
    },
    computed: {
        toLowerCase: {
            get: function () {
                return this.inputValue;
            },
            set: function (value) {0
                this.inputValue = value.toLowerCase(); 
            }
        },
        isResidentAlreadyAdded: function () {
            return this.$props.savedResidents.includes(this.inputValue);
        },
        isNameLengthAcceptable: function () {
            return this.inputValue.length >= 3;
        },
    },
    methods: {
        preventNumericInput: function ($event) {
            let numericRegex = new RegExp(/[0-9]/);
            let key = $event.key;

            if (numericRegex.test(key)) {
                $event.preventDefault();
            }

            if (key === 'Enter') {
                this.addResident();
            }
        },
        updateInput: function ($event) {
            let inputValue = $event.target.value.trim();   
            let firstLetterUpperCase;    

            if (inputValue !== '' && $event.key !== 'Enter') {
                firstLetterUpperCase = inputValue.split(/\s/).map((str) => {
                    return str.replace(str[0], str[0].toUpperCase());
                });
    
                this.inputValue = firstLetterUpperCase.join(' ');
            }
        },
        addResident: function () { 
            if (this.isResidentAlreadyAdded) {
                this.$bvModal.msgBoxOk('This resident is already saved!', {
                    size: 'sm',
                    buttonSize: 'sm',
                    okVariant: 'danger',
                    hideHeaderClose: false,
                    centered: true
                });
            } else if (!this.isNameLengthAcceptable) {
                this.$bvModal.msgBoxOk('The name should be at least 3 characters long!', {
                    size: 'sm',
                    buttonSize: 'sm',
                    okVariant: 'danger',
                    hideHeaderClose: false,
                    centered: true
                });
            } else {
                this.isNameLengthAcceptable && this.$emit('resident-added', this.inputValue);
            }

            this.inputValue = '';
        }
    }
}
</script>