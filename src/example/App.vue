<template>
  <div id="app">
    <GaleryDropDown label="Open Galery" v-bind:items="items" direction="left" />
  </div>
</template>

<script>
import GaleryDropDown from "../index";

export default {
  name: "App",
  data() {
    return {
      items: [
        {
          label: "Meu Github",
          backgroundImage: `https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2018/03/github.jpg`,
          onClick: () => window.open("https://github.com/dbarrinha", "_blank")
        },
        {
          label: "Meu Linkedin",
          backgroundImage:  `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATUAAACjCAMAAADciXncAAAAb1BMVEVJZ6n///85XKRDY6c9X6Xb4O23wdrN0+WDlcH6+/2ms9JFZKg3W6NBYaY9XqW9xt3j5/GOnsatuNXq7fRVcK7x8/idqs3f5O91iruhrs9adLBpgLZuhLhPbKxgebKTosh8j74nUZ/S2OjFzeG8xdylLkxWAAADZUlEQVR4nO3d7XKiMBSAYQOoKAmKWtTW2tbu/V/jaj8cV3OiHnZEM+8zs/+YDvsOmARD2+kAAAAAAAAAAAAAANCWInWuaPskHouz5Ute5Stns7ZP5WFkZT0338bDTtn26TwGW5tDE8uNelZRdM2/pjPX9kndu+L1yRwbrMkW5k6jbbPNuElDbN8TbTsoJG2f2D1zuTeaMUNmILJkKlQzbZ/ZHUsXUjRTMyBIsp5YrWvbPrm7ZeditQFLBEkyEKuZZyYfgiJQbUU1iRyNaqIscK2tqSaw4nSNCZss8a+ndqbMPCTpm1htxMxDxmCgUEqLgzk3aIgwir5wqQWk795oQz7VgsraE+2T+/MMe5ptRLSzytXRVwdvRLtAWi4PxoReh4ffl8nsYtIfT8ebXp4wDlwuzUprbZKlbZ8IANyP3bZBl23/pazGLuNKm64XVb1cLutq8exs3MPK1wVy6uByOX+Es6/VaHz4GGAw7+WujDac65mBj+n/TtvKrveAgVn+fDnvyup4A9x3uf7CRtpN/PJ9Xy3xJjG/+2cK++bbyvVt/B7ntsum1bLnsdhsZzOLcXnWsJqtgs12qggfBTSrZidnoxnTiy9bo2p2dEG0GB9xNqn2cVm0CB9yNqhWX3J7/hwa2dOnBtXkrW+nItsz0qDaNcZx3aM3qmaqqHb53qraNKr3F25VzeQxLUlvVm0T08V2s2pRbSK8XbU8ovHgdtVi2kX4P6o9fU7qejgKPzKKasrWvNpobZPMuay0M/n1oq1BRINo02rdWbJfLBXlLLClPKZ3ZRpW6338k6JIArfpIp6LrVm1yfFnVRF4xSiiRVWjap6XITP5kXhEL5w2qub7pJLfAlzG871Lk2p931yi/JQOj+hN+ibVvLN9J74tQ7Uv3h9YrKjWCVQTJvuvVOsEqvX9C8tSGg6ottPzV7DStg+qBSpYaXlAtVA16Rs/qgUqXHv8I6KaBtU0qKZBNQ2qaVBNg2oaVNOgmgbVNKimQTUNqmlQTYNqGlTToJoG1TSopkE1DappUE2DahpU06CaBtU0qKZBNQ2qaVBNg2oaVNOgmgbVNLI/wv9xs6925T5b8fhJPNWKl9xv/2dbioVwhPC7h8TjY/rrHEXqV1xxxLU/EQAAAAAAAAAAAAAAAACA2PwFkblArPyj484AAAAASUVORK5CYII=` ,
          onClick: () => window.open("https://www.linkedin.com/in/danilo-falcão-50179a136/", "_blank")
        },
      ]
    };
  },
  components: {
    GaleryDropDown
  }
};
</script>

<style>
</style>
