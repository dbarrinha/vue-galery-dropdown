<template>
  <div id="app">
    <ListDrop label="Open Galery" v-bind:items="items" direction="left" />
  </div>
</template>

<script>
import ListDrop from "./components/list-dropdown";

export default {
  name: "App",
  data() {
    return {
      items: [
        {
          section: "Aplicações",
          label: "Minha Escola",
          id: "1",
          backgroundImage: `url(https://minhaescola.me/app/resources/themes/minhaescola/assets/images/log-escolas.png)`,
          link: "https://minhaescola.me",
          onClick: () => window.open("https://minhaescola.me", "_blank")
        },
        {
          section: "Aplicações",
          label: "Conselho Escolar",
          id: "2",
          backgroundColor: "#6bd098",
          //backgroundImage:  `url(https://minhaescola.me/app/resources/themes/minhaescola/assets/images/log-escolas.png)` ,
          link: "https://conselhos.mobieduca.me"
        },
        {
          section: "Aplicações",
          label: "Comitê de Mediadores",
          id: "3",
          backgroundColor: "#6bd098",
          //backgroundImage:  `url(https://minhaescola.me/app/resources/themes/minhaescola/assets/images/log-escolas.png)` ,
          link: "https://mediadores.mobieduca.me"
        },
        {
          section: "Aplicações",
          label: "Comitê de Mediadores",
          id: "3",
          backgroundColor: "#6bd098",
          //backgroundImage:  `url(https://minhaescola.me/app/resources/themes/minhaescola/assets/images/log-escolas.png)` ,
          link: "https://mediadores.mobieduca.me"
        },
        {
          section: "Aplicações",
          label: "Comitê de Mediadores",
          id: "3",
          backgroundColor: "#6bd098",
          //backgroundImage:  `url(https://minhaescola.me/app/resources/themes/minhaescola/assets/images/log-escolas.png)` ,
          link: "https://mediadores.mobieduca.me"
        }
      ]
    };
  },
  components: {
    ListDrop
  },
  created: () => {
    /*this.items = this.items.filter(item => {
      return (item.onClick = () => window.open(item.link, "_blank"));
    });
    console.log(this.items)*/
  }
};
</script>

<style>
</style>
