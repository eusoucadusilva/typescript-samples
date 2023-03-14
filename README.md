## Os exemplos foram tirados dos capítulos iniciais do livro: guia prático de typescript: melhore suas aplicações javascript


### Transpilar TypeScript para js

 ```sh
 tsc arquivo.ts
 node arquivo.js
 ```

### corrigir erros de versões

```sh
tsc.cmd arquivo.ts --target es6
```

 ### Expor erros em tempo real ( listen)

 ```sh
 tsc -w
 ```

### POO

- O paradigma de uma linguagem de programação é a sua identidade. Ele corresponde a um conjunto de características que, juntas, definem como ela opera e resolve os problemas.
- Na Orientação a Objetos, nós organizamos o nosso código em estruturas chamadas _classes_
- Uma classe é uma estrutura que abstrai um conjunto de objetos com características similares. Ela define o comportamento de seus objetos através de atributos e métodos e os estados possíveis desses objetos.
- Um objeto é uma representação de algo do mundo real.

### Classes

- Um classe é um molde com o qual os objetos são modelados. É nela que passamos quais atributos um objeto deve ter e quais ações ele deve executar.


### Imagine o seguinte cenário:

- você está modelando um sistema para um banco e precisa criar uma classe para gerenciamento de contas. A primeira pergunta que você deve fazer é: o que todas as contas têm? Em uma breve análisem nós identificamos:
-- número da conta
-- nome do titular
-- saldo

### Métodos

- sabemos que nossa classe contém atributos, mas como podemos manipular esses atributos?
- É nessa hora que que o método entra em cena. Ele é responsável por identificar e executar as operações que a classe fornecerá, serviços e ações. Eles são responsáveis por definir e realizar um determinado comportamento.

### Modificadores de acesso

- _public_ é padrão, tudo que for declarado sem modificador de acesso automaticamente se torna público.
- _private_ com esse modificador estamos dizendo que esse atributo ou método não pode ser acessado de fora da classe em que ele foi declarado.
- _protected_ é bme parecido com o private, a diferença entre eles é que o protected pode ser acessado de uma classe que herda de uma outra classe.

### Herança

- um dos pilares da POO é a herança, ela nos permite reutilizar código sem a necessidade de duplicá-lo.
- a _herança_ otimiza a produção da nossa aplicação em tempo e linhas de código. Através dela, podemos herdar os métodos e os atributos de uma outra classe.

### Getters & Setters

- _getters_ esse método é utilizado quando queremos acessar o valor de uma propriedade de um objeto.
- _setters_ esse método é utilizado quando queremos alterar o vlaor de uma propriedade de um objeto.

### Classe Abstrata

- As classes abstratas não permitem ralizar qualquer tipo de instância, ela são utilizadas como modelos para oturas classes, que são conhecidas como classes concretas.

### Readonly

- Faz com que uma propriedade dentro de uma classe seja utilizada como somente leitura. Uma vez setado o seu valor, ele não pdoe ser alterado.
- Assim garantindo que a propriedade em questão não seja alterada por nenhum outro método de dentro da própria classe.