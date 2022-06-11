<template>
  <div id="SignView">
    <div class="SignView">
      <div class="principal">
        <b-row>
          <b-col class="coluna-um" cols="12" sm="12" md="12" lg="12" xl="6">
            <img
              class="img-principal"
              alt="Vue logo"
              src="../assets/img-principal.svg"
            />
          </b-col>

          <b-col cols="12" sm="12" md="12" lg="12" xl="6">
            <div class="cad">
              <h1 class="cadastre">Cadastre-se</h1>
            </div>
            <div class="coluna-dois">
              <b-row>
                <b-col class="coluna" sm="12" md="6" lg="12" xl="6">
                  <label class="label__text" for="firstName"> Nome</label>
                  <b-form-input
                    class="input-text"
                    id="name"
                    type="text"
                    v-model="name"
                    placeholder="Digite seu nome"
                  ></b-form-input>
                </b-col>
                <b-col class="coluna" sm="12" md="6" lg="12" xl="6">
                  <label class="label__text" for="firstName"> E-mail</label>
                  <b-form-input
                    class="input-text"
                    id="email"
                    v-model="email"
                    type="email"
                    placeholder="Digite seu E-mail"
                  ></b-form-input>
                </b-col>
              </b-row>
              <b-row>
                <b-col class="coluna" sm="12" md="6" lg="12" xl="6">
                  <label class="label__text" for="firstName"> Cpf</label>
                  <b-form-input
                    class="input-text"
                    id="cpf"
                    type="text"
                    v-model="cpf"
                    placeholder="Digite seu Cpf"
                  ></b-form-input>
                </b-col>
                <b-col class="coluna" sm="12" md="6" lg="12" xl="6">
                  <label class="label__text" for="firstName"> Pis</label>
                  <b-form-input
                    class="input-text"
                    id="pis"
                    type="numbertext"
                    v-model="pis"
                    placeholder="Pis"
                  ></b-form-input>
                </b-col>
              </b-row>
              <b-row>
                <b-col class="coluna" sm="12" md="6" lg="12" xl="6">
                  <label class="label__text" for="firstName"> Cep</label>
                  <b-form-input
                    class="input-text"
                    id="cep"
                    type="text"
                    v-model="cep"
                    placeholder="Digite seu Cep"
                  ></b-form-input>
                </b-col>
                <b-col class="coluna" sm="12" md="6" lg="12" xl="6">
                  <label class="label__text" for="firstName"> País</label>
                  <b-form-input
                    class="input-text"
                    id="pais"
                    type="text"
                    v-model="country"
                    placeholder="Digite seu País"
                  ></b-form-input>
                </b-col>
              </b-row>
              <b-row>
                <b-col class="coluna" sm="12" md="6" lg="12" xl="6">
                  <label class="label__text" for="firstName"> Município </label>
                  <b-form-input
                    class="input-text"
                    id="municipio"
                    type="text"
                    v-model="county"
                    placeholder="Digite seu Município"
                  ></b-form-input>
                </b-col>
                <b-col class="coluna" sm="12" md="6" lg="12" xl="6">
                  <label class="label__text" for="firstName"> Estado</label>
                  <b-form-input
                    class="input-text"
                    id="estado"
                    type="text"
                    v-model="state"
                    placeholder="Digite seu Estado"
                  ></b-form-input>
                </b-col>
              </b-row>
              <b-row>
                <b-col class="coluna" sm="12" md="6" lg="12" xl="6">
                  <label class="label__text" for="firstName"> Rua</label>
                  <b-form-input
                    class="input-text"
                    id="rua"
                    type="text"
                    v-model="road"
                    placeholder="Digite sua Rua"
                  ></b-form-input>
                </b-col>
                <b-col class="coluna" sm="12" md="6" lg="12" xl="6">
                  <label class="label__text" for="firstName"> Número</label>
                  <b-form-input
                    class="input-text"
                    id="numero"
                    type="tel"
                    v-model="number"
                    placeholder="Digite seu Número"
                  ></b-form-input>
                </b-col>
              </b-row>
              <b-row>
                <b-col class="coluna" sm="12" md="12" lg="12" xl="12">
                  <label class="label__text" for="complemento">
                    Complemento</label
                  >
                  <b-form-input
                    class="input-text"
                    id="complemento"
                    type="text"
                    v-model="complement"
                    placeholder="Digite o Complemento"
                  ></b-form-input>
                </b-col>
              </b-row>
              <b-row>
                <b-col class="coluna" sm="12" md="12" lg="12" xl="12">
                  <label class="label__text" for="senha">senha</label>
                  <b-form-input
                    class="input-text senha"
                    v-model="password"
                    type="password"
                    placeholder="Digite a sua senha"
                  ></b-form-input>
                </b-col>
              </b-row>
            </div>
            <b-row>
              <b-col class="coluna" cols="12" sm="12" md="12" lg="12" xl="12">
                <div class="botao">
                  <!--
                  <router-link to="/">
                      </router-link>
                      -->
                  <button @click="signup" class="input-text entrar">
                    Cadastre-se
                  </button>
                  <p>
                    Já possui uma conta?
                    <router-link class="link-estilo" to="/">Login</router-link>
                  </p>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
    </div>

    <router-view />
  </div>
</template>

<script>
import { firebaseDb, firebaseAuth } from "../firebaseConfig";

export default {
  name: "SignView",
  data() {
    return {
      email: "",
      password: "",
      initials: "",
      name: "",
      cpf: "",
      pis: "",
      cep: "",
      country: "",
      county: "",
      state: "",
      road: "",
      number: "",
      complement: "",
    };
  },
  methods: {
    signup() {
      firebaseAuth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          (result) => {
            firebaseDb
              .collection("users")
              .doc(result.user.uid)
              .set({
                id: result.user.uid,
                name: this.name,
                email: this.email,
                cpf: this.cpf,
                pis: this.pis,
                cep: this.cep,
                country: this.country,
                county: this.county,
                state: this.state,
                road: this.road,
                number: this.number,
                complement: this.complement,
              })
              .then(() => {
                this.$swal(
                  "Sucesso",
                  "Conta criada com sucesso!",
                  "success"
                ).then(() => this.$router.push("/"));
              })

              .catch((error) => {
                console.log(error);
              });
          },
          (err) => {
            console.log(err);
            this.$swal("Oops...", "Preencha todos os campos!", "error");
          }
        );
    },
  },
};
</script>
<style scoped>
#SignView {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

* {
  border: 0;
  padding: 0;
  margin: 0;
}
.link-estilo {
  color: rgb(158, 152, 196);
  font-weight: bold;
}
.principal {
  padding: 100px 150px 100px 150px;
}

.coluna-um {
  padding-top: 260px;
  background-color: rgba(113, 113, 222, 0.841);
}
.coluna-dois {
  color: rgb(0, 0, 0);
  text-align: start;
  padding: 40px;
}
.coluna {
  padding: 20px 0 0 20px;
}
.cad h1::after {
  content: "";
  display: block;
  width: 5rem;
  height: 0.3rem;
  background-color: #6c63ff;
  margin: 0 auto;
  position: absolute;

  border-radius: 10px;
}

.cadastre {
  color: rgb(55, 55, 55);
  text-align: start;
  padding: 20px 0 40px 20px;
}
.SignView {
  width: 100%;
  height: 100vh;
  font-family: "Inter", sans-serif;
}
.label__text {
  color: #2e2d2ebc;
  font-weight: bold;
  padding-left: 5px;
  padding-bottom: 10px;
}
.input-text {
  height: 40px;

  border: none;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  box-shadow: 1px 1px 6px #00000032;
}
.botao {
  padding: 20px 0 20px 0;
}
.entrar {
  background-color: rgba(113, 95, 205, 0.446);

  height: 50px;
  width: 200px;
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
  .principal {
    padding: 0;
  }
  .coluna-um {
    padding-top: 30px;
  }
  .img-principal {
    height: 200px;
  }
}
@media screen and (min-width: 481px) and (max-width: 768px) {
  .principal {
    padding: 0;
  }
  .coluna-um {
    padding-top: 30px;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .principal {
    padding: 0;
  }
  .coluna-um {
    padding-top: 50px;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1200px) {
  .principal {
    padding: 0;
  }
  .coluna-dois {
    padding: 10px 90px 0 90px;
  }
  .coluna-um {
    padding-top: 50px;
  }
}
@media screen and (min-width: 1201px) {
  .principal {
    padding: 0;
  }
  .coluna-dois {
    padding: 3px 20px 0 20px;
  }
  .img-principal {
    position: relative;
    top: 100px;
  }
  .coluna-um {
    padding-top: 200px;
  }
}
@media screen and (min-width: 1400px) {
  .principal {
    padding: 0;
  }
  .SignView {
    width: 100%;
  }
  .coluna-um {
    padding-top: 260px;
    background-color: rgba(113, 113, 222, 0.841);
  }
  .coluna-dois {
    padding: 3px 90px 0 90px;
  }
}
</style>


