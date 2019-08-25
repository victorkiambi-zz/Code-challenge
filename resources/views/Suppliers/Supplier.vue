<template>
<v-container>
    <div>
<template>
  <v-row>
      <v-col>
    <v-btn
      color="primary"
      dark
      @click.stop="dialog = true"
    >
      Add Supplier
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Add Supplier</v-card-title>

        <v-card-text>

             <div>
                        <form @submit.prevent="handleSubmit">
                            <div class="form-group">
                                <label for="Supplier">name</label>
                                <input type="text" v-model="supplier.name" id="name" name="name" class="form-control" :class="{ 'is-invalid': submitted && $v.supplier.name.$error }" />
                                <div v-if="submitted && !$v.supplier.name.required" class="invalid-feedback">name is required</div>
                            </div>
                              <div class="form-group">
                                <button class="btn btn-primary">Save</button>
                            </div>
                        </form>
             </div>

        </v-card-text>

        <v-card-actions>
          <div class="flex-grow-1"></div>

        
        </v-card-actions>
      </v-card>
    </v-dialog>
      </v-col>
  </v-row>
</template> </div>

 <div>
     <v-container>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
     </v-container>
     </div>
</v-container>
</template>


<script>
import Vue from 'vue';
import Vuelidate from 'vuelidate';


Vue.use(Vuelidate);

    import { required, email, minLength, sameAs } from "vuelidate/lib/validators";



  export default {
    data () {
      return {
          dialog: false,
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
         
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },

        ],

         supplier: {
                    name:"",
                   
                },
                submitted: false
            };
        },
        validations: {
            supplier: {
                name: { required },
               
            }
        },
        methods: {
            handleSubmit(e) {
                this.submitted = true;

                // stop here if form is invalid
                this.$v.$touch();
                if (this.$v.$invalid) {

                    console.log("try again")
                    return;
                }

                alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.supplier));
            }
        },
      }
    
  
</script>