<template>
  <div class="HelloWorld">
    <b-container class="container">
      <b-card class="cards" title="Olá Visitante!">
        <div class="lab-ip">
          <label class="labeltext" for="firstName"> E-mail</label>

          <b-form-input
            class="input-text"
            id="email"
            type="email"
            placeholder="Digite seu E-mail"
          ></b-form-input>
        </div>
        <div class="lab-ip-2">
          <label v-for="type in types" :key="type" class="labeltext" for="senha"
            >Senha</label
          >
          <b-form-input
            class="input-text senha"
            :type="type"
            placeholder="Digite a sua senha"
          ></b-form-input>
        </div>

        <div class="botao">
          <button class="entrar">Entrar</button>

          <div class="link">
            <router-link to="/about">
              <b-link class="link-estilo" href="#foo"> Ou Cadastre-se</b-link>
            </router-link>
          </div>
        </div>
      </b-card>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HelloWorld",
  data() {
    return {
      types: ["password"],
    };
  },
};
</script>
<style scoped>
.HelloWorld {
  background-color: rgba(113, 113, 222, 0.841);
  height: 100vh;
}
.container {
  padding-top: 200px;
}

.cards {
  background-color: rgb(255, 255, 255);

  width: 100%;
  height: 50vh;
  border-radius: 20px;
}
.labeltext {
  padding-top: 20px;
}
.input-text {
  width: 100%;
}

.input-text {
  height: 50px;
  border: none;
  border: none;
  border-radius: 10px;
  box-shadow: 1px 1px 6px #00000032;
}
.card-title {
  padding-top: 30px;
  text-align: center;
  color: rgba(64, 64, 207, 0.841);
}
.link {
  text-align: center;
  padding-top: 20px;
}
.link-estilo {
  color: rgb(158, 152, 196);

  font-weight: bold;
}
.botao {
  padding: 20px 0 20px 0;
  text-align: center;
}
.entrar {
  background-color: rgba(113, 95, 205, 0.446);
  border: none;
  border-radius: 30px;
  height: 50px;
  width: 130px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}
.entrar:hover {
  background-color: rgba(63, 45, 201, 0.551);
  transition: 1s;
}
@media screen and (min-width: 320px) and (max-width: 480px) {
  .container {
    padding-top: 100px;
  }
  .cards {
    height: 70vh;
  }
  .link {
    text-align: center;
    padding-top: 10px;
  }
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  .container {
    padding-top: 100px;
  }
  .cards {
    height: 60vh;
  }
  .link {
    text-align: center;
    padding-top: 10px;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .container {
    padding-top: 180px;
  }
  .cards {
    height: 70vh;
    padding-top: 60px;
  }
  .link {
    text-align: center;
    padding-top: 10px;
  }
  .lab-ip {
    padding: 30px 100px 10px 100px;
  }
  .lab-ip-2 {
    padding: 0px 100px 30px 100px;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1200px) {
  .container {
    padding-top: 150px;
  }
  .cards {
    height: 70vh;
    padding-top: 80px;
  }
  .link {
    text-align: center;
    padding-top: 20px;
  }
  .lab-ip {
    padding: 30px 200px 0px 200px;
  }
  .lab-ip-2 {
    padding: 20px 200px 10px 200px;
  }
}
@media screen and (min-width: 1201px) {
  .container {
    padding: 220px 200px 0 200px;
  }
  .cards {
    height: 50vh;
    padding-top: 20px;
  }
  .botao {
    padding-top: 40px;
  }

  .lab-ip {
    padding: 30px 150px 0px 150px;
  }
  .lab-ip-2 {
    padding: 30px 150px 0px 150px;
  }
}
@media screen and (min-width: 1400px) {
  .container {
    padding: 220px 300px 0 300px;
  }
}
</style>


