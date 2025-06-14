# mobileFakeStore: Loja online!

## Descrição do Projeto

O `mobileFakeStore` é um aplicativo móvel desenvolvido com **Ionic** e **Angular**, com empacotamento **Capacitor**, que simula uma experiência de e-commerce completa. Seu objetivo principal é demonstrar a capacidade de consumo de dados de uma API pública (`Fake Store API`), exibindo produtos, seus detalhes e informações relevantes de forma intuitiva e responsiva em dispositivos móveis.

Este projeto visa aprofundar conhecimentos em:
* Desenvolvimento híbrido com Ionic e Angular.
* Consumo de APIs RESTful.
* Gerenciamento de estado e navegação entre telas.
* Implementação de UI/UX responsiva.
* Utilização de controle de versão (Git) e hospedagem em repositório público.

* ## Pré-requisitos

Antes de clonar e executar este projeto, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

* **Node.js** (versão LTS recomendada)
* **npm** (gerenciador de pacotes do Node.js, vem junto com o Node.js)
* **CLI do Ionic** (Command Line Interface):
   
    npm install -g @ionic/cli

* **Capacitor CLI e Ferramentas de Recursos** (opcional, mas recomendado para recursos):
    
    npm install -g @capacitor/cli cordova-res capacitor-resources
    
* **Git** (para clonar o repositório)

## Como Baixar

Siga os passos abaixo para baixar, configurar e executar o projeto em sua máquina local:

1.  **Clone o repositório:**
    Abra seu terminal ou prompt de comando e execute:
   
    git clone [https://github.com/HelioTorres01/mobileFakeStore.git](https://github.com/HelioTorres01/mobileFakeStore.git)
    

2.  **Navegue até a pasta do projeto:**
  
    cd mobileFakeStore
  

3.  **Instale as dependências:**
   
    npm install
    

4.  **Sincronize o Capacitor:**
    Isso copia os assets web para as plataformas nativas e atualiza as dependências do Capacitor.

    ionic capacitor sync
    

5.  **Execute o aplicativo no navegador:**
    Para testar o aplicativo em seu navegador, use:
   
    ionic serve
   
    O aplicativo será aberto automaticamente em seu navegador padrão, geralmente em `http://localhost:8100`.

6.  **(Opcional) Executar em Emulador/Dispositivo:**
    * **Para Android:** Você precisará ter o Android Studio configurado.
       
        ionic capacitor run android
        
    * **Para iOS:** Você precisará de um Mac com Xcode configurado.
        
        ionic capacitor run ios
        

## Contribuindo com o Projeto

Este projeto foi desenvolvido como parte de um trabalho de avaliação individual. Portanto, não aceita contribuições externas. No entanto, sinta-se à vontade para bifurcar (fork) o repositório para seus próprios estudos e experimentações.

Se encontrar algum problema ou tiver sugestões, você pode abrir uma `issue` no próprio repositório do GitHub.

## Autor

Nome:Hélio Torres

RA: 01679716

Email: heliotorres63@gmail.com

LinkedIn: www.linkedin.com/in/heliotorres1
    
