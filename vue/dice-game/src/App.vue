<template>
  <div class="wrapper clearfix">
    <Player
      v-for="(player, index) in players"
      :key="index"
      :playerName="player.playerName"
      :score="player.score"
      :activePlayer="player.activePlayer"
      :currentScore="player.currentScore"
    />

    <Control
      @handleNewGame="handleNewGame()"
      @handleRollDice="handleRollDice()"
      @handleHold="handleHold()"
    />

    <Dice :dices="dices" />

    <Popup-rule @handleConfirm="handleConfirm()" :isOpenPopup="isOpenPopup" />
  </div>
</template>

<script>
import Player from "./components/Player.vue";
import Control from "./components/Control.vue";
import Dice from "./components/Dice.vue";
import PopupRule from "./components/PopupRule.vue";

export default {
  name: "App",
  data() {
    return {
      players: [
        {
          playerName: "Qui1",
          score: 0,
          activePlayer: false,
          currentScore: 0,
        },
        {
          playerName: "Qui2",
          score: 0,
          activePlayer: false,
          currentScore: 0,
        },
      ],
      dices: [6, 6],
      isOpenPopup: false,
      finalScore: 0,
    };
  },
  methods: {
    handleNewGame() {
      this.isOpenPopup = true;
    },
    handleConfirm() {
      this.isOpenPopup = false;
      this.players[0].activePlayer = true;
      this.players[0].score = 0;
      this.players[1].score = 0;
      this.players[0].currentScore = 0;
      this.players[1].currentScore = 0;
      this.dices = [1, 1];
    },
    handleRollDice() {
      var dice1 = Math.floor(Math.random() * 6) + 1;
      var dice2 = Math.floor(Math.random() * 6) + 1;

      this.dices = [dice1, dice2];
    },
    handleHold() {
      const sumDices = this.dices[0] + this.dices[1];
      if (this.players[0].activePlayer == true) {
        this.players[0].score = sumDices;
      } else {
        this.players[1].score = sumDices;
      }
    },
  },
  components: { Player, Control, Dice, PopupRule },
};
</script>

<style>
/**********************************************
*** GENERAL
**********************************************/

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

body {
  background-image: linear-gradient(
      rgba(62, 20, 20, 0.4),
      rgba(62, 20, 20, 0.4)
    ),
    url(./assets/back.jpg);
  background-size: cover;
  background-position: center;
  font-family: Lato;
  font-weight: 300;
  position: relative;
  height: 100vh;
  color: #555;
}

.wrapper {
  width: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}
</style>
