
   
<template>
  <div class="EntrarView">
    <div class="cad">
      <p v-for="dado in dados" :key="dado.id" class="card-title">
        Olá {{ dado.name }}!
      </p>
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
                <button class="entrar">Editar Dados</button>
              </b-col>
              <b-col class="botao" cols="12" sm="12" md="6" lg="4" xl="3">
                <button class="entrar">Sair</button>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>



<script>
import { firebaseDb } from "../firebaseConfig";
//const baseURL = "http://localhost:3000/dados";

export default {
  name: "EntrarView",
  data() {
    return {
      dados: [],
    };
  },
  /*
  created(){
    axios.get(baseURL).then((res) =>{
      this.dados = res.data;
      console.log(res.data)
    });
  }
  */
  created() {
    firebaseDb
      .collection("users")
      .doc("LSF1Bxm5mleESFxgVaSt")
      .get()
      .then((res) => {
        console.log(res.data());
         this.dados = res.data;
      });
  },
};
</script>




<style scoped>
.EntrarView {
  background-color: rgba(113, 113, 222, 0.841);
  height: 100vh;
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
