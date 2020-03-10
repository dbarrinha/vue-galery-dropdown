# Galery DropDown

### Instalação


```sh
$ npm install --save vue-galery-dropdown
```

### Exemplo
```sh
import GaleryDropDown from 'vue-galery-dropdown'
```
```sh
<GaleryDropDown 
    label="Open Galery" 
    v-bind:items="items" 
    direction="left"
/>
```
## Parâmetros
| Nome        |  Tipo               |   Opções          |
| ----------- | ------------------- |------------------ |
|  label      |  String             | 
|  items      |  Array              | Array de itens
|  direction  |  String             | ['left','right']

#### Item

| Nome              |  Tipo               | 
| ----------------- | ------------------- |
|  label            |  String               
|  backgroundImage  |  String url   
|  backgroundColor  |  String       
|  onClick          |  Function             

### Todos

 - Escrever Tests

License
----

MIT


**Free Module, Hell Yeah!**

