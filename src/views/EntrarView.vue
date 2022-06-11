<template>
  <div>
    <div v-if="token" class="EntrarView">
      <div class="cad">
        <p class="card-title">Olá, {{ dados.name }}!</p>
      </div>
      <b-container class="container">
        <b-row>
          <b-col class="coluna-um" cols="12" sm="12" md="6" lg="5" xl="5">
            <div>
              <img class="img-sair" alt="Sair" src="../assets/sair.svg" />
            </div>
          </b-col>

          <b-col>
            <div class="coluna-dois">
              <b-row>
                <b-col class="botao" cols="12" sm="12" md="6" lg="4" xl="3">
                  <router-link to="/Editar">
                    <button class="entrar">Editar Dados</button>
                  </router-link>
                </b-col>
                <b-col class="botao" cols="12" sm="12" md="6" lg="4" xl="3">
                  <button @click="logout()" class="entrar">Sair</button>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div>
      <h1 class="sem-acesso">Sem Acesso!</h1>
      <router-link class="voltar-login" to="/">
        <p>Voltar para página de <span class="login">Login</span></p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { firebaseDb } from "../firebaseConfig";
//const baseURL = "http://localhost:3000/dados";

export default {
  name: "EntrarView",
  data() {
    return {
      dados: null,
      token: localStorage.getItem("token"),
    };
  },

  created() {
    firebaseDb
      .collection("users")
      .doc(this.token)
      .get()
      .then((res) => {
        this.dados = res.data();
      });
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>




<style scoped>
.EntrarView {
  background-color: rgba(113, 113, 222, 0.841);
  height: 100vh;
}
.sem-acesso {
  text-align: center;
  padding-top: 100px;
  font-size: 60px;
  color: rgb(205, 24, 24);
}
.voltar-login {
  text-align: center;
  font-size: 20px;
  color: rgb(162, 161, 163);
}
.login {
  font-weight: bold;
  color: rgb(108, 108, 108);
}
.container {
  padding-top: 200px;
}
.cad {
  padding-top: 50px;
}
.card-title {
  padding-top: 30px;
  text-align: center;
  color: white;
  font-size: 40px;
}
.img-sair {
  height: 350px;
  width: 400px;
}
.coluna-dois {
  padding-top: 20px;
}
.cards {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 50vh;
  border-radius: 20px;
}
.botao {
  text-align: center;
  padding-bottom: 20px;
}
.entrar {
  background-color: rgba(113, 95, 205, 0.446);
  border: none;
  border-radius: 30px;
  height: 40px;
  width: 120px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
.entrar:hover {
  background-color: rgba(63, 45, 201, 0.551);
  transition: 1s;
}
@media screen and (min-width: 320px) and (max-width: 480px) {
  .container {
    padding-top: 20px;
  }
  .cad {
    padding-top: 20px;
  }
  .card-title {
    padding-top: 0;
    text-align: center;
    color: white;
    font-size: 20px;
  }
  .img-sair {
    width: 280px;
  }
  .coluna-dois {
    padding-top: 0px;
  }
  .botao {
    padding-bottom: 10px;
  }
}
</style>
