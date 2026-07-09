// Para saber mais: CRUD em desenvolvimento de software

// 1. O que é CRUD?
// CRUD é um acrônimo para as operações básicas de manipulação de dados em sistemas de informação: Create (Criar), Read (Ler), Update (Atualizar) e Delete (Deletar). Essas operações são fundamentais para qualquer aplicação que precise gerenciar dados persistentes.

// 2. Quais são as operações CRUD*?
// Create (Criar): Responsável por criar novos registros ou recursos no sistema. Na prática, isso envolve inserir novos dados na base de dados, como adicionar um novo contato em uma lista de contatos. No caso do nosso projeto, foi a operação que fizemos de adicionar um novo pensamento no mural do Memoteca.

// Read (Ler): Realiza a leitura ou recuperação de informações existentes da base de dados. É usado para consultar e visualizar dados, como listar todos os contatos salvos em um sistema. No caso do nosso projeto, foi a operação GET que fizemos para recuperar a lista de pensamentos da API fake.

// Update (Atualizar): Atualiza registros existentes na base de dados com novas informações. Por exemplo, modificar o número de telefone de um contato já existente. No memoteca, o update corresponde a editar um pensamento do mural.

// Delete (Deletar): Remove registros ou recursos existentes da base de dados. Isso implica na exclusão permanente dos dados, como remover um contato da lista. Como vimos nesta aula, é a operação que deleta um pensamento com o método DELETE.

// 3. Qual a importância do CRUD?
// O CRUD é amplamente utilizado para lidar com dados em diversas operações. Veja três motivos de sua importância:

// Organização de dados: o CRUD define uma estrutura clara e consistente para manipular dados, garantindo que as operações sejam realizadas com segurança e eficiência;

// Interação com a pessoa usuária: permite que as pessoas usuárias interajam de maneira intuitiva com a aplicação, realizando operações básicas de forma direta e compreensível;

// Compatibilidade com APIs e bases de dados: a padronização das operações CRUD facilita a integração com diferentes sistemas e o uso de APIs que seguem esses princípios.

// Qual a ligação entre o protocolo HTTP e métodos CRUD?
// POST: Utilizado para criar novos recursos no servidor, correspondendo à operação de create;

// GET: Usado para buscar informações ou recursos do servidor, equivalente à operação de read;

// PUT: Atualiza informações de um recurso específico no servidor, correspondendo à operação de update;

D// ELETE: Remove um recurso específico do servidor, equivalente à operação de delete.

// São habilidades básicas de qualquer pessoa desenvolvedora a compreensão e aplicação das operações CRUD. Os conceitos e suas técnicas envolvem a manipulação de dados e seu uso pode ser generalizado e ampliado para qualquer linguagem de programação, embora cada uma implemente o CRUD de uma forma diferente.

// É graças ao CRUD que podemos receber, enviar, salvar e remover informações em aplicações.

// Para saber mais: entendendo os códigos de status das requisições HTTP

// 1. O que são os códigos de status das requisições HTTP?
// Os códigos de status das requisições HTTP são respostas numéricas enviadas pelo servidor para indicar o resultado da solicitação feita pelo cliente. Compreender esses códigos é fundamental, pois eles fornecem informações precisas sobre o sucesso, falhas ou outras condições das operações realizadas.

// Lembra quando dissemos que o HTTP é um conjunto de regras e protocolos que facilita o tráfego de dados da internet? Pois bem, os códigos de status são uma dessas regras, protocolos que funcionam de forma quase “universal” entre diversos dispositivos e linguagens.

// 2. Quais os principais códigos de status?
// 2.1. 2xx (Sucesso): indica que a requisição foi recebida, entendida e aceita pelo servidor. Exemplos comuns são:

// 200 OK: requisição bem-sucedida;
// 201 Created: requisição foi bem-sucedida e resultou na criação de um novo recurso.
// 2.2. 3xx (Redirecionamento): indica que mais ações são necessárias para completar a requisição. Exemplos incluem:

// 301 Moved Permanently: recurso requisitado foi movido permanentemente para um novo endereço;
// 302 Found: recurso requisitado foi encontrado temporariamente em um novo endereço.
//2.3. 4xx (Erro do cliente): indica que houve um erro por parte do cliente ao realizar a requisição. Exemplos //incluem:

//400 Bad Request: requisição inválida, como parâmetros ausentes ou malformados;
//401 Unauthorized: requer autenticação para acessar o recurso;
//404 Not Found: recurso requisitado não foi encontrado no servidor. Quem nunca recebeu uma dessas na vida?
//2.4. 5xx (Erro do servidor): indica que houve um erro por parte do servidor ao processar a requisição. Exemplos incluem:

//500 Internal Server Error: erro genérico do servidor, indicando falha na execução da requisição.
//503 Service Unavailable: servidor temporariamente incapaz de processar a requisição devido a sobrecarga ou manutenção.
//3. Qual a importância de entender os códigos de status?
//É importante que você compreenda o significado desses códigos, pois será mais tranquilo lidar com possíveis erros em uma aplicação:

//Diagnóstico de problemas: os códigos de status ajudam a identificar rapidamente a causa de problemas durante o desenvolvimento ou manutenção de aplicações web;
// Tratamento de erros: facilitam o tratamento correto de erros tanto no lado do cliente quanto no servidor, melhorando a experiência do usuário;
// Monitoramento de performance: permitem monitorar a performance da aplicação ao analisar quantos e quais tipos de códigos de status são retornados.
// Você provavelmente vai se deparar com códigos de status - e algum ou outro erro. Sabe como é: às vezes as coisas voam pelos ares. Faz parte de trabalhar com tecnologia. Compreender esses códigos aumenta sua confiança e capacidade de solução de problemas.