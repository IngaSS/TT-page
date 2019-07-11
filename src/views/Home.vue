<template>
  <div class="container-fluid">
    <div class="wrapper">
      <v-btn
        to="./"
        flat
        class="title"
      >
        <v-img
          :src="this.logoPF"
          min-width="210px"
        >
        </v-img>
      </v-btn>
      <div class="homePageMenu">
        <v-btn
          class="homePageMenuItem"
          to="/TTs"
        >
          <span>Демонстрация личного кабинета</span>
        </v-btn>

        <v-btn
          class="homePageMenuItem"
          to="/list"
        >
          <span>Демонстрация мониторинга состояния машин</span>
        </v-btn>
      </div>
    </div>
  </div>
</template>


<script>
import logo from '../images/Pack&Fly2.png';
export default {
  data: () => ({
      logoPF: logo,
    }),
}
</script>



<style>
.homePageMenu {
  margin: auto;
  display: flex;
  min-height: 150px;
  min-width: 1000px;
  justify-content: space-between;
}

.homePageMenuItem {
  max-width: 450px;
  min-width: 450px;
  min-height: 150px;
}

.homePageMenuItem > .v-btn__content {
  max-width: 420px;
  min-height: 150px;
}

.homePageMenuItem:hover {
  text-decoration: none;
}
</style>
