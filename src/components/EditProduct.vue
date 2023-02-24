<template>
    <div>
      <div class="field">
        <label class="label">ProductID</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="ProductID"
            v-model="productID"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Product Name</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Product Name"
            v-model="productName"
          />
        </div>
      </div>
    
      <div class="field">
        <label class="label">Price</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Price"
            v-model="productPrice"
          />
        </div>
      </div>
      <div class="control">
        <button class="button is-success" @click="updateProduct()">UPDATE</button>
      </div>
    </div>
  </template>
    
  <script>
  // import axios
  import axios from "axios";
    
  export default {
    name: "EditProduct",
    data() {
      return {
        productID: "",
        productName: "",
        productPrice: ""
      };
    },
    created: function () {
      this.getProductById();
    },
    methods: {
      // Get Product By Id
      async getProductById() {
        try {
          const response = await axios.get(
            `http://localhost:5000/products/${this.$route.params.id}`
          );
          this.productID = response.data.productID;
          this.productName = response.data.productName;
          this.productPrice = response.data.productPrice;
        } catch (err) {
          console.log(err);
        }
      },
    
      // Update product
      async updateProduct() {
        try {
          await axios.put(
            `http://localhost:5000/products/${this.$route.params.id}`,
            {
              productID: this.productID,
              productName: this.productName,
              productPrice: this.productPrice
            }
          );
          this.productID = "";
          this.productName = "";
          this.productPrice = "";
          this.$router.push("/");
        } catch (err) {
          console.log(err);
        }
      },
    },
  };
  </script>
    
  <style>
  </style>