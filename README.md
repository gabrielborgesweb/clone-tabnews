# Clone TabNews

**Para o [curso.dev](https://curso.dev) de [@filipedeschamps](https://github.com/filipedeschamps).**

## 🪛 COMO UTILIZAR?

Antes de tudo, nesse repositório é recomendado **utilizar os Codespaces do GitHub** para modificar, testar e _commitar_ os Pull Requests (PRs) para a branch `origin/main`.

### Servidor Local:

Para iniciar um servidor web local, basta no terminal executar o seguinte comando:

```
npm run dev
```

Que toda a **infrastutura será levantada** e pronta para brincar.

### Testar a integridade:

Para testar as funcionalidades implementadas, basta no terminal executar o seguinte comando:

```
npm test
```

Que toda, novamente, a **infrastutura será levantada** e mostrará o relatório do módulo `Jest`.

### Testes ao vivo:

Caso queira rodar o servidor web local e fazer os teste ao mesmo tempo, basta abrir dois terminais e em um executar:

```
npm run dev
```

E no outro terminal:

```
npm run test:watch
```

## 🤝 COMO CONTRIBUIR?

Neste tópico tem alguns pontos a serem esclarecidos, que são:

- Toda vez que você salva uma alteração em um arquivo **é feito a formatação automática**, com o módulo `Prettier`, para garantir a **fácil leitura e melhorar o Developer Experience (DX)**.
- Para fazer os `commits` na branch de feature (separada da branch `main`) é recomendado utilizar o comando `npm run commit` e seguir os passos. Pois é **preferível que a mensagem do `commit` siga a estrutura recomendada** e respeitando o **[Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/)**: `<tipo>(escopo): <descrição-curta>`
- Em **garantir a qualidade do código** é utilizado o módulo `ESLint`. Onde o mesmo **analisa todos os códigos e procura por erros**, como por exemplo, variáveis ignoradas.
