<template>
  <div id="themeSetting">
    <v-toolbar color="blue" dark>
      <v-toolbar-title> Settings </v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-layout column>
        <v-flex>
          <v-subheader class="px-1 my-2"> Color Option </v-subheader>
          <div class="color-option">
            <v-layout wrap>
              <label
                class="color-option--label flex xs6 pa-1"
                v-for="(option, index) in themeColorOptions"
                :key="index"
              >
                <input
                  type="radio"
                  name="color"
                  v-bind:value="option.key"
                  v-model="themeColor"
                />
                <span class="color-option--item bg">
                  <span class="overlay">
                    <span class="material-icons">check</span>
                  </span>
                  <span
                    class="color-option--item--header sideNav"
                    :class="option.value.sideNav"
                  ></span>
                  <span
                    class="color-option--item--header mainNav"
                    :class="option.value.mainNav"
                  ></span>
                  <span class="sideMenu" :class="option.value.sideManu"></span>
                </span>
              </label>
            </v-layout>
          </div>
          <div class="theme-options">
            <v-subheader class="px-1 my-2"> Sidebar Option </v-subheader>
            <v-divider></v-divider>
            <div class="my-3">
              <v-btn-toggle v-model="sideBarOption">
                <v-btn flat value="dark"> Dark </v-btn>
                <v-btn flat value="light"> Light </v-btn>
              </v-btn-toggle>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

