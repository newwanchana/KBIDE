<template>
  <v-card flat class="serial-console">
    <v-layout row fill-height style="width: 100%; height: 100%">
      <!-- LEFT CONTROL PANEL -->
      <v-flex
        xs3
        class="pa-3"
        style="
          display: flex;
          flex-direction: column;
          width: 250px;
          border-right: 1px solid #ddd;
        "
      >
        <!-- COM & Baudrate -->
        <div class="d-flex mb-3">
          <v-combobox
            dense
            class="mr-2"
            v-model="currentPort"
            :items="comports"
            label="Select COM port"
          />
          <v-combobox
            dense
            v-model="baudrate"
            :items="baudrates"
            label="Serial upload baudrate"
          />
        </div>

        <!-- OPTIONS -->
        <v-switch
          dense
          hide-details
          v-model="auto_scroll"
          :label="`Auto Scroll : ${auto_scroll}`"
        ></v-switch>
        <v-switch
          dense
          hide-details
          v-model="display_raw"
          :label="`Display Hex String : ${display_raw}`"
        ></v-switch>

        <!-- Buttons -->
        <div class="mt-3 d-flex align-center">
          <v-btn
            :color="isOpened ? 'error' : 'success'"
            @click="connect"
            class="mr-2"
            style="width: 110px"
          >
            {{ isOpened ? "DISCONNECT" : "CONNECT" }}
          </v-btn>

          <!-- ปุ่ม Pause / Play -->
          <v-btn
            small
            outlined
            @click="pausePlaySerial"
            :disabled="!isOpened"
            color="grey lighten-2"
            class="mr-2"
          >
            <v-icon left>{{ isPause ? "play_arrow" : "pause" }}</v-icon>
            {{ isPause ? "RESUME" : "PAUSE" }}
          </v-btn>

          <!-- ปุ่ม Reconnect -->
          <v-btn small outlined @click="reconnect" color="grey lighten-2">
            <v-icon left>refresh</v-icon>
            RECONNECT
          </v-btn>
        </div>
      </v-flex>

      <!-- RIGHT: Monitor -->
      <v-flex xs9 class="pa-3" style="display: flex; flex-direction: column">
        <!-- Monitor Output -->
        <v-card
          outlined
          style="flex: 1; overflow-y: auto; font-size: 14px; padding: 10px"
          @scroll.passive="handleScroll"
        >
          <ol ref="monitor" class="monitor-line">
            <li
              v-for="(line, inx) in serial_data"
              :key="inx"
              class="serial-line"
            >
              {{ line }}
            </li>
          </ol>
        </v-card>

        <!-- Send Panel -->
        <div
          class="mt-2"
          style="display: flex; flex-direction: row; align-items: center"
        >
          <v-flex style="flex: 1">
            <v-text-field
              dense
              outlined
              v-model="send_string"
              clearable
              :disabled="!isOpened"
              label="Message"
            />
          </v-flex>
          <v-btn-toggle v-model="current_postfix" dense class="ml-3">
            <v-btn small v-for="(msg, ind) in send_postfix" :key="ind">{{
              msg.label
            }}</v-btn>
          </v-btn-toggle>
          <v-btn
            color="primary"
            class="ml-3"
            :disabled="!isOpened"
            @click="sendData(send_string)"
          >
            SEND <v-icon right>send</v-icon>
          </v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import Vue from "vue";
const util = Vue.prototype.$engine.util;
const SerialPort = util.requireFunc("serialport");
const Readline = util.requireFunc("@serialport/parser-readline");

export default {
  name: "SerialMonitor",
  data() {
    return {
      currentPort: "",
      comports: [],
      baudrate: 115200,
      baudrates: [9600, 19200, 57600, 115200, 230400],
      port: null,
      parser: null,
      isOpened: false,
      isPause: false,
      auto_scroll: true,
      userScrolled: false,
      display_raw: false,
      serial_data: [],
      max_line: 1000,
      send_string: "",
      send_time: 1,
      send_delay: 50,
      current_postfix: 3,
      send_postfix: [
        { label: "RAW", value: "" },
        { label: "LF", value: "\n" },
        { label: "CR", value: "\r" },
        { label: "CRLF", value: "\r\n" },
      ],
    };
  },
  mounted() {
    this.listPort();
  },
  methods: {
    async listPort() {
      const ports = await SerialPort.list();
      this.comports = ports.map((p) => p.path || p.comName);
      if (this.comports.length) this.currentPort = this.comports[0];
    },
    connect() {
      if (!this.currentPort) return;
      if (this.port && this.port.isOpen) {
        this.port.close();
        return;
      }
      this.port = new SerialPort(this.currentPort, { baudRate: this.baudrate });
      this.parser = this.port.pipe(new Readline({ delimiter: "\r\n" }));
      this.port.on("open", () => {
        this.isOpened = true;
        this.serial_data = [];
      });
      this.parser.on("data", (data) => this.addData(data));
      this.port.on("close", () => (this.isOpened = false));
    },
    addData(line) {
      const text = this.display_raw ? Buffer.from(line).toString("hex") : line;
      this.serial_data.push(text);
      if (this.serial_data.length > this.max_line) this.serial_data.shift();

      if (!this.userScrolled && this.auto_scroll && this.$refs.monitor) {
        const container = this.$refs.monitor.parentNode;
        this.$nextTick(() => (container.scrollTop = container.scrollHeight));
      }
    },
    handleScroll(e) {
      const c = e.target;
      this.userScrolled = c.scrollTop + c.clientHeight < c.scrollHeight - 5;
    },
    sendData(msg) {
      if (!this.port || !this.port.isOpen) return;
      const message = msg + this.send_postfix[this.current_postfix].value;
      for (let i = 0; i < this.send_time; i++)
        setTimeout(() => this.port.write(message), i * this.send_delay);
    },
    pausePlaySerial() {
      if (!this.port) return;
      this.isPause ? this.port.resume() : this.port.pause();
      this.isPause = !this.isPause;
    },
    reconnect() {
      if (this.port && this.port.isOpen) {
        this.port.close();
        setTimeout(() => this.connect(), 300);
      }
    },
  },
};
</script>

<style scoped>
.serial-console {
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
}
ol.monitor-line {
  padding-left: 5px;
  list-style: none;
  margin: 0;
}
.serial-line {
  border-left: 2px solid #aeabaf;
  padding-left: 0.5em;
}
</style>
