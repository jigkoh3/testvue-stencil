<template>
  <div class="container">
    <button @click="takePicture">Take</button>
  </div>
</template>

<script>
import { CameraResultType, Plugins } from "@capacitor/core";

const { Camera } = Plugins;

export default {
  name: "HelloWorld",
  methods: {
    async takePicture() {
      console.log("xcxc");
      const image = await Camera.getPhoto({
        resultType: CameraResultType.Base64,
      });

      console.log(image);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
