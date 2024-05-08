
<template>
    <div class="card flex justify-content-center">
        <Stepper>
            <StepperPanel>
                <template #content="{ nextCallback }">
                    <div class="flex flex-column h-12rem">
                        <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                            <p>Dados cadastrais</p>

                            <section class="inputs">
                              <section class="bloco">
                                <label for="nome">Nome da Empresa</label>
                                <input type="text" />
                              </section>
                          
                              <section class="bloco">
                                <label for="telefone">Telefone comercial</label>
                                <input type="text" />
                              </section>
                          
                              <section class="bloco">
                                <label for="email">E-mail</label>
                                <input type="email" />
                              </section>
                          
                              <section class="bloco">
                                <label for="">CNPJ da Empresa</label>
                                <input type="tel" />
                              </section>
                            </section>
                        </div>
                    </div>
                    <div class="flex pt-4 justify-content-end">
                        <Button class="avancar" @click="nextCallback"> Avançar </Button>
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel>
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-column h-12rem">
                        <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">


                        </div>
                    </div>
                    <div class="flex pt-4 justify-content-between">
                        <Button class="voltar" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback"> Voltar</Button>
                        <Button class="avancar" @click="nextCallback"> Avançar </Button>
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel>
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-column h-12rem">
                        <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                       
                        
                        </div>
                    </div>
                    <div class="flex pt-4 justify-content-between">
                        <Button class="voltar" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback"> Voltar</Button>
                        <Button class="avancar" @click="nextCallback"> Avançar </Button>
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel>
                <template #content="{ prevCallback }">
                    <div class="flex flex-column h-12rem">
                        <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">


                        </div>
                    </div>
                    <div class="flex pt-4 justify-content-start">
                        <Button class="voltar" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback"> Voltar</Button>
                        <Button class="avancar" > Finalizar </Button>
                    </div>
                </template>
            </StepperPanel>
        </Stepper>
    </div>
</template>

<style scoped>
.p-stepper {
    flex-basis: 50rem;
}

button{
    background-color: #ED1C26;
}

.p-stepper-number {
    background-color: #7b1919;
}

@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

body {
  background: #f8f8f8;
  font-family: 'Montserrat', sans-serif;
}

.sidebar {
  width: 8rem;
  display: inline-flex;
  padding: 2.625rem 2.3125rem 60.047rem 2.125rem; /* 42px 37px 960.757px 34px */
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex-shrink: 0;
  height: 100%;
  flex-shrink: 0;
  background-color: #220707;
}

.navbar {
  display: flex;
  width: 100%;
  height: 4rem; /* 64px */
  padding: 1.3125rem 94.875rem 1.3125rem 2rem; /* 21px 1518px 21px 32px */
  align-items: center;
  flex-shrink: 0;
  background: var(--Neutral-Black, #000);
}

.container {
  background-color: #fff;
  width: fit-content;
  height: 58rem; /* 928px */
  flex-shrink: 0;
  border-radius: 0.1875rem; /* 3px */
  box-shadow: 0px 0.25rem 0.25rem 0px rgba(0, 0, 0, 0.25); /* 0px 4px 4px 0px rgba(0, 0, 0, 0.25) */
  padding: 2rem;
}

h1 {
  font-size: 1rem; /* 10px */
  color: #fff;
  
}

h6 {
  font-size: 14px;
  color: #fff;
}

.dados {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5625rem; /* 25px */
}

label {
  color: #000;
  font-family: Montserrat;
  font-size: 1rem; /* 16px */
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem; /* 24px */
}

input {
  display: flex;
  width: 18.6875rem; /* 299px */
  margin-top: 0.9375rem; /* 15px */
  padding: 0.625rem 1rem; /* 10px 16px */
  gap: 0.0625rem; /* 1px */
  align-items: flex-start;
  border-radius: 0.5rem; /* 8px */
  border: 0.0625rem solid var(--Neutral-400, #ced4da); /* 1px */
  background: #fff;
  box-shadow: 0px 0.125rem 0.125rem 0px rgba(33, 37, 41, 0.06), 0px 0px 0.0625rem 0px rgba(33, 37, 41, 0.08); /* 0px 2px 2px 0px rgba(33, 37, 41, 0.06), 0px 0px 1px 0px rgba(33, 37, 41, 0.08); */
}

.inputs {
  display: flex;
  width: 84.625rem; /* 1346px */
  align-items: flex-start;
  align-content: flex-start;
  gap: 3.125rem; /* 50px */
  flex-wrap: wrap;
}

p {
  color: #000;
  font-family: Montserrat;
  font-size: 1.25rem; /* 20px */
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; /* 24px */
}

.botoes {
  display: inline-flex;
  align-items: flex-start;
  gap: 0.9375rem; /* 15px */
}

.cancel {
  display: flex;
  padding: 0.375rem 0.75rem; /* 6px 12px */
  justify-content: center;
  align-items: center;
  border-radius: 0.3125rem; /* 5px */
  background: var(--Neutral-500, #adb5bd);
  border: none;
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 1rem; /* 16px */
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 24px */
}

.save {
  display: flex;
  padding: 0.375rem 0.75rem; /* 6px 12px */
  justify-content: center;
  align-items: center;
  border-radius: 0.3125rem; /* 5px */
  background: var(--VermelhoFulltime-Regular, #ed1c26);
  border: none;
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 1rem; /* 16px */
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 24px */
}

</style>
