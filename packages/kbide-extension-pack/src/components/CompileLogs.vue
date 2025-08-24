<template class="absolute">
    <v-flex xs12 class="pa-0 dark monitor-console" style="display: flex; width: 100%; flex-direction: column">
        <v-flex style="display: flex; flex: 1 1 auto; flex-basis: 100%">
            <v-card dark style="font-size:13px;overflow-y: scroll; width: 100%;">
                <ol ref="monitor" class="monitor-line">
                    <li v-for="(line, inx) in logs" :key="inx" class="serial-line" :style="[line.includes('Compile Error') ? {'color':'orangered'} : {}]">
                        {{ line }}
                    </li>
                </ol>
            </v-card>
        </v-flex>
    </v-flex>
</template>

<script>
export default {
  name: "CompileLogs",
  data() {
    return {
      logs: [],
      auto_scroll: true
    };
  },
  mounted() {
    this.$global.$on("compile-log", (msg) => {
      this.add_data(msg);
    });
    this.$global.$on("compile-begin", () => {
      this.clear_data();
    });
    this.$global.$on("upload-success", () => {
      this.logs.push("===>>> Upload Success <<<===");
    });
  },
  methods: {
    clear_data() {
      this.logs = [];
    },
    add_data(line) {
      this.logs.push(line);
      if (this.auto_scroll) {
        const m = this.$refs.monitor;
        if (m) {
          this.$nextTick(() => {
            m.scrollIntoView(false);
          });
        }
      }
    }
  }
};
</script>

<style scoped>
ol {
  list-style-type: none;
  counter-reset: elementcounter;
  padding-left: 0;
}

li:before {
  content: "  ";
  font-weight: bold;
}

.monitor-line {
  padding-left: 10px;
}

.monitor-console {
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
