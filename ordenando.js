/* 
Funções básicas de ordenação e funções assessórias: 

  (a) swap(vetor, posicao_A, posicao_B) –> true:
      • Recebe como argumento um vetor e dois índices desse vetor,
        e tem como efeito colateral a troca dos valores nas posições indicadas
        por esses índices. Retorna o valor booleano 'true' caso seja executada até o
        final sem erros.
    
  (b) shuffle(vetor, quantidade_posicoes) –> true:
      • Recebe como argumento um vetor qualquer e a quantidade de posições (ao menos duas)
        a serem ebaralhadas nesse vetor, e tem como efeito colateral a troca entre valores 
        de posições escolhidas aleatóriamente. Retorna o valor booleano 'true' caso seja 
        executada até o final sem erros.

  (c) bubble_sort(vetor) –> true:
      • Recebe como argumento um vetor (array) de números inteiros, 
        e tem como efeito colateral a ordenação dos números desse vetor, do menor ao maior.
        Retorna o valor booleano 'true' caso seja executada até o final sem erros.

(d.1) selection_sort(vetor) –> true:
      • Recebe como argumento um vetor (array) de números inteiros, 
        e tem como efeito colateral a ordenação dos números desse vetor, do menor ao maior.
        Retorna o valor booleano 'true' caso seja executada até o final sem erros.

(d.2) busca_menor(vetor) –> menor_indice:
      • Recebe como argumento um único vetor (i.e., um array) de números inteiros,
        e retorna o índice do número de menor valor existente nesse vetor
        que primeiro for encontrado (buscando-se a partir do índice 0).

  (e) quick_sort(vetor, posicao_baixa = 0, posicao_alta = vetor.legth - 1) –> true
      • Recebe como argumento um vetor (array) de números inteiros e, opcionalmente,
        um segundo argumento indicando a posição baixa do algoritmo Quick Sort, e um terceiro
        argumento especificando a posicao alta desse mesmo algoritmo, e tem como efeito colateral
        a ordenação dos números desse vetor, do menor ao maior.
        Retorna o valor booleano 'true' indicando que a função foi executada até o final sem erros.

  (f) particionamento(vetor, posicao_baixa, posicao_alta) –> indice_do_pivot
      • Recebe como argumento um vetor (array) de números inteiros e, obrigatoriamente,
        um segundo argumento indicando a posição baixa do algoritmo Particionamento, e um terceiro
        argumento especificando a posicao alta desse mesmo algoritmo (que será tomada inicialmento como
        o pivô desse algoritmo), e tem como efeito colateral a ordenação parcial dos números desse vetor,
        que ao final apresenta três partes distintas:

        (1) a parte inicial, correspondedo aos números que são estritamente menores que o chamado "pivô" do algorítmo;
        (2) a parte do meio, correspondendo ao próprio pivô do algoritmo (que é a referência para esta ordenação);
        (3) a parte final, correspondente aos números que são maiores ou iguais ao pivô de ordenação do algorítmo.

        Retorna o índice correspondente à posição do pivô após a execução da função.

  (g) function_input_tests(funcao, vetor, quantidade_de_vetores OU posicao_A, posicao_B) –> true:
      • Realiza testes de input específicos para cada uma 
        das funções de ordenação e das funções acessórias declaradas acima:

        - Para todas as funções listadas acima, as quais invariavelmente possuem um vetor
          como primeiro argumento, testa se, aquilo que foi passado como primriro argumento 
          é de fato um objeto da classe Array (i.e., é um vetor).

        - Para a função 'shuffle', que recebe como segundo argumento a quantidade de posições cujos
          valores deverão ser trocados de posição, a função testa:
          • (1) se essa quantidade é maior ou igual a zero;
          • (2) se ela é diferente de 1;
          • (3) se ela é menor ou igual ao tamanho do vetor.

        - Para aquelas funcões que possuem como argumentos um vetor seguido de dois números naturais que
          indicam índices desse vetor, a função testa:
          • (1) se esse número é maior ou igual a zero;
          • (2) se esse número é estritamente menor do que o tamanho do vetor.
*/


/*
(a) swap(vetor) –> true:
*/
const swap = (...args) => {

    // Este primeiro condicional lança um erro caso não sejam passandos 
    // exatamente três argumentos para a função 'swap'.
    if (args.length !== 3) {
        throw new Error("A função 'swap' deve conter exatamente 3 argumentos: um vetor " +
                        "seguido de dois índices.");
    }

    let vetor = args[0];
    const posicao_A = args[1];
    const posicao_B = args[2];

    // Bateria de testes para a entrada da função 'swap' (com lançamento de erros)
    // para garantir que o usuário a utilize de forma correta: passando três argumentos, 
    // o primeiro dos quais deve ser um vetor qualquer e os outros dois devem ser números inteiros 
    // positivos menores que a extensão (length) do vetor indicando os dois índices a serem trocados 
    // um pelo outro.
    function_input_tests(swap, vetor, posicao_A, posicao_B);

    // É preciso criar uma variável temporária para armazenar o valor presente na 'posicao_A' do vetor,
    // para que, quando o valor armazenado na 'posicao_B' for atribuído ao espaço do vetor localizado
    // na 'posicao_A', o valor anteriormente aí presente não seja perdido e, desta forma, possa ser utilizado 
    // para atualizar o valor presente na 'posicao_B', mesmo após a atribuição mencionada anteriormente.
    const valor_temporario = vetor[posicao_A];
    vetor[posicao_A] = vetor[posicao_B];
    vetor[posicao_B] = valor_temporario;

    // Retorna-se o valor booleano 'true' caso a função tenha sido executada até o fim
    // sem a ocorrência de erros.
    return true;
}


/*
(b) shuffle(vetor, quantidade_de_trocas) –> true
*/
const shuffle = (...args) => {
    let vetor = args[0];
    const quantidade_de_trocas = args[1];
    const extensao_vetor = vetor.length;

    // Este primeiro condicional lança um erro caso não sejam passandos 
    // exatamente dois argumentos para a função 'shuffle'.
    if (args.length !== 2) {
        throw new Error("A função 'shuffle' deve conter exatamente 2 argumentos: um vetor " +
                        "seguido do número de posições a serem embaralhadas.");
    }

    // Bateria de testes para a entrada da função 'shuffle' (com lançamento de erros)
    // para garantir que o usuário a utilize de forma correta: passando exatamente dois argumentos,
    // sendo que o primeiro deve ser um vetor qualquer e segundo devem ser um número
    // inteiro positivo igual ou menor que a extensão (length) do vetor, indicando
    // quantas posições devem ter seus valores trocados entre si.
    function_input_tests(shuffle, vetor, quantidade_de_trocas);

    // O seguinte loop WHILE cria um novo vetor cuja extensão (length) é igual ao número
    // específicado no argumento 'trocas', e cujos elementos são números que
    // correspondem a possíveis posições (índices) existentes no vetor passado
    // como argumento para a função 'shuffle':
    let vetor_trocas = [];
    let iteracoes = 0;
    let numero_sorteado;
    while (iteracoes < quantidade_de_trocas) {
        numero_sorteado = Math.trunc(Math.random() * extensao_vetor)
        if (!vetor_trocas.includes(numero_sorteado)) {
            vetor_trocas.push(numero_sorteado);
            iteracoes++;
        }
    }
    const vetor_trocas_original = vetor_trocas;

    // O seguinte loop WHILE embaralha todos os valores nas posições de 'vetor' (o vetor passado como argumento), 
    // caso a extensão (length) de 'vetor' seja um número par, e embaralha (vetor.length - 1) valores caso a extensão de
    // 'vetor' seja um número ímpar.
    let posicao_A;
    let posicao_B;
    while (vetor_trocas.length > 1) {
        posicao_A = Math.trunc(Math.random() * vetor_trocas.length);
        posicao_B = Math.trunc(Math.random() * vetor_trocas.length);

        if (posicao_A !== posicao_B) {
            swap(vetor, vetor_trocas[posicao_A], vetor_trocas[posicao_B]);
            vetor_trocas = vetor_trocas.filter(elem => elem !== vetor_trocas[posicao_A] && elem !== vetor_trocas[posicao_B]);
        }
    }

    // Caso a extensão (length) de 'vetor' seja um número ímpar, terá sobrado um valor em 'vetor_posicoes'
    // que corresponde à posição em 'vetor' cujo valor ainda não foi embaralhado.
    // O seguinte loop WHILE embaralha o valor na posicao 'vetor_posicao[0]' de 'vetor':
    while (vetor_trocas.length === 1) {
        posicao_A = Math.trunc(Math.random() * quantidade_de_trocas);
        posicao_A = vetor_trocas_original[posicao_A];
        posicao_B = vetor_trocas[0];

        if (posicao_A !== posicao_B) {
            swap(vetor, posicao_A, posicao_B);
            vetor_trocas = [];
        }
    }

    // Retorna-se o valor booleano 'true' caso a função tenha sido executada até o fim
    // sem a ocorrência de erros.
    return true;
}


/*
(c) bubble_sort(vetor) –> true
*/
const bubble_sort = (...args) => {

    // Este primeiro condicional lança um erro caso não seja passado 
    // exatamente um argumento para a função 'bubble_sort'.
    if (args.length !== 1) {
        throw new Error("A função 'bubble_sort' deve conter exatamente 1 argumentos: um vetor (array).");
    }

    let vetor = args[0];

    // Bateria de testes para a entrada da função 'bubble_sort' (com lançamento de erros)
    // para garantir que o usuário a utilize de forma correta: passando, como único argumento, 
    // um vetor cujos elementos devem ser todos números inteiros.
    function_input_tests(bubble_sort, vetor);

    // Assume-se, de início, que o vetor não está ordenado.
    let ordenado = false;

    // Loop WHILE 
    while (!ordenado) {
        // Conjectura-se que o vetor esteja ordenado antes de fazer uma sequencia de testes
        // condicionais – if (condicao === true) {declaracoes} – dentro de um loop FOR.
        ordenado = true;

        // Percorre-se todo o vetor, através de um loop FOR, conferindo-se a cada iteração, 
        // através de uma declaração condicional (i.e., declaração de controle de fluxo IF),
        // se existe algum elemento de índice 'i' que maior que o elemento imediadiatamente
        // antecedente (i.e., o elemento de índice 'i - 1').
        // Caso a condição se mostre verdadeira, os valores presentes nos respectivos índices 
        // são trocados entre si, através da função 'swap', de modo que o valor menor fique antes do maior.
        // Altera-se então o valor variável 'ordenado' para 'false' se indicar que o vetor ainda não
        // se encontrava-se ordenado nesta iteração do loop WHILE.
        // Se, durante uma iteração do loop WHILE, nenhum dos valores do vetor selecionados através
        // do loop FOR se mostre menor que o valor no índice imediatamente antecedente, isso demostra
        // que o vetor está ordenado e, com a condição 'if (vetor[i] < vetor[i-1])' não sendo satisfeita,
        // o valor da variável 'ordenado' que no momento é 'true', não será alterado para 'false'.
        // Com isso o isso a condição do loop WHILE (i.e., '!ordenado') não será satisfeita e o fluxo da
        // função terá proceguimento até o fim, com o vetor ne números inteiros estando agora devidamente 
        // ordenado do menor para o maior valor.
        for (let i = 1; i < vetor.length; i++) {
            if (vetor[i] < vetor[i-1]) {
                swap(vetor, (i-1), i);
                ordenado = false;
            }
        }
    }

    // Retorna-se o valor booleano 'true' caso a função tenha sido executada até o fim
    // sem a ocorrência de erros.
    return true;
}


/*
(d.1) selection_sort(vetor) –> true
*/
const selection_sort = (...args) => {

    // Este primeiro condicional lança um erro caso não seja passado 
    // exatamente um argumento para a função 'selection_sort'.
    if (args.length !== 1) {
        throw new Error("A função 'selection_sort' deve conter exatamente 1 argumentos: um vetor (array).");
    }

    vetor_entrada = args[0];

    // Bateria de testes para a entrada da função 'selection_sort' (com lançamento de erros)
    // para garantir que o usuário a utilize de forma correta: passando, como único argumento, 
    // um vetor cujos elementos devem ser todos números inteiros.
    function_input_tests(selection_sort, vetor_entrada);

    // Ná variável 'vetor_ordenado' serão armazenados, de forma incremental e ordenada (do menor ao maior),
    // os valores presentes no vetor_entrada, que foi inicialmente passado como argumento para esta função.
    let vetor_ordenado = [];
    let menor_indice;
    
    // Loop WHILE busca pelo menor elemento de 'vetor_entrada' através da função 'busca_menor' e,
    // em seguida, retira esse elemento de 'vetor_entrada' através da função 'splice' (reordenando 
    // o vetor para não haver 'gaps'), ao mesmo tempo que, através da função 'push', acresenta tal valor 
    // ao final de 'vetor_ordenado', que, dessa forma, conterá ao final os valores inicialmente presentes 
    // em 'vetor_entrada' ordenados do menor ao maior, enquanto que 'vetor_entrada' ficará vazio. 
    while (vetor_entrada.length > 0) {
        menor_indice = busca_menor(vetor_entrada);
        vetor_ordenado.push(vetor_entrada.splice(menor_indice, 1)[0]);
    }

    const tamanho_vetor_ordenado = vetor_ordenado.length;

    // Loop FOR, através da função 'push', acrescenta ao final de 'vetor_entrada', que inicialmente
    // se encontra vazio, os valores já ordenados de 'vetor_ordenado', do primeiro ao último índice desse.
    for (i = 0; i < tamanho_vetor_ordenado; i++) {
        vetor_entrada.push(vetor_ordenado[i]);
    }

    // Retorna-se o valor booleano 'true' caso a função tenha sido executada até o fim
    // sem a ocorrência de erros.
    return true;
}


/*
(d.2) busca_menor(vetor) –> menor_indice 
*/
const busca_menor = (...args) => {
    
    // Este primeiro condicional lança um erro caso não seja passado 
    // exatamente um argumento para a função 'busca_menor'.
    if (args.length !== 1) {
        throw new Error("A função 'busca_menor' deve conter exatamente 1 argumentos: um vetor (array).");
    }

    const vetor = args[0];

    // Bateria de testes para a entrada da função 'busca_menor' (com lançamento de erros)
    // para garantir que o usuário a utilize de forma correta: passando, como único argumento, 
    // um vetor cujos elementos devem ser todos números inteiros.
    function_input_tests(busca_menor, vetor);

    let menor_valor = vetor[0];
    let indice_do_menor_valor = 0;
    const tamanho_do_vetor = vetor.length;

    // Loop FOR percorre o vetor de entrada, da segunda à última posição, verificando, a cada iteração, 
    // se o valor da variável local 'i' (correspondente ao índice do vetor, e que é incrementada em uma 
    // unidade, a cada iteração, pelo loop FOR) é menor que o valor armazenado na variável 'menor_valor'
    // (que inicialmente contem o valor da primeira posição de 'vetor').
    // Caso essa condição seja satisfeita, a variável 'menor_valor' tem seu valor atualizado para
    // corresponder ao valor da variável local 'i'.
    for (let i = 1; i < tamanho_do_vetor; i++) {
        if (vetor[i] < menor_valor) {
            menor_valor = vetor[i];
            indice_do_menor_valor = i;
        }
    }

    return indice_do_menor_valor
}


/*
(e) quick_sort(vetor, pos_baixa = 0, pos_alta = vetor.legth - 1) –> true
*/
const quick_sort = (vetor, pos_baixa = 0, pos_alta = vetor.length - 1) => {

    if (pos_baixa < pos_alta) {
        // Índice de partição, o pivô está na posição correta
        const pivot = particionamento(vetor, pos_baixa, pos_alta);

        // Ordena recursivamente os elementos antes e depois da partição
        quick_sort(vetor, pos_baixa, pivot - 1);
        quick_sort(vetor, pivot + 1, pos_alta);
    }

    // Retorna-se o valor booleano 'true' indicando que a função foi executada até o fim
    // sem a ocorrência de erros.
    return true;
}


/*
(f) particionamento(vetor, posicao_baixa, posicao_alta) –> indice_do_pivot
*/
const particionamento = (...args) => {

    // Este primeiro condicional lança um erro caso não sejam passandos 
    // exatamente três argumentos para a função 'particionamento'.
    if (args.length !== 3) {
        throw new Error("A função 'swap' deve conter exatamente 3 argumentos: um vetor " +
                        "seguido de dois índices.");
    }

    var vetor = args[0];
    var posicao_baixa = args[1];
    var posicao_alta = args[2];

    // Bateria de testes para a entrada da função 'particionamento' (com lançamento de erros)
    // para garantir que o usuário a utilize de forma correta: passando três argumentos, 
    // o primeiro dos quais deve ser um vetor de números intairos e os outros dois devem ser números 
    // inteiros positivos menores que a extensão (length) do vetor indicando os dois índices 
    // correspondentes, respectivamente, às posições baixa e alta do algorirmo 'particionamento'.
    function_input_tests(particionamento, vetor, posicao_baixa, posicao_alta);

    const pivot = vetor[posicao_alta];  // Seleciona o último elemento como pivô
    let i = posicao_baixa - 1;  // Índice do menor elemento

    for (let j = posicao_baixa; j < posicao_alta; j++) {

        // Se o elemento atual for menor que o pivô
        if (vetor[j] < pivot) {
            i++;
            
            // Troca vetor[i] com vetor[j]
            swap(vetor, i, j);
        }
    }

    const indice_do_pivot = i + 1;

    // Coloca o pivô na posição correta    
    swap(vetor, indice_do_pivot, posicao_alta);

    return indice_do_pivot;  // Retorna o índice do pivô
}


/* 
Função que realiza testes de input específicos para cada uma 
das funções de ordenação e das funções acessórias declaradas acima:

function_input_tests(funcao, vetor, quantidade_de_vetores OU posicao_A, posicao_B) –> true
*/
function function_input_tests (...args) {

    const quantidade_de_argumentos = args.length;

    if (quantidade_de_argumentos < 2) {
        throw new Error("A função 'function input test' ao menos 2 argumentos: uma funcao" + 
                        "como primeiro argumento e um vetor (array) como segundo argumento.");
    }

    const funcao = args[0];
    const vetor = args[1];
    const nome_funcao = funcao.name;

    if (typeof funcao !== 'function') {
        throw new Error("A função 'function_input_test' deve ter, como primeiro argumento, uma função.");
    }

    if (!Array.isArray(vetor)) {
        throw new Error(`A função '${nome_funcao}' deve ter como primeiro argumento um vetor ` + 
                        "(i.e., um objeto do tipo Array).");
    }

    const tamanho_do_vetor = vetor.length;

    if (nome_funcao === 'busca_menor' || nome_funcao == 'selection_sort' || nome_funcao == 'bubble_sort' || 
        nome_funcao == 'particionamento') {
        for (let i = 0; i < tamanho_do_vetor; i++) {
            if (!Number.isInteger(vetor[i])) {
                throw new Error(`Todos os elementos do vetor (array) passado como argumento da função ${nome_funcao} ` + 
                                "devem ser número inteiros.");
            }
        }
    }

    if (quantidade_de_argumentos > 2) {
        const numero_A = args[2];

        if (nome_funcao === 'shuffle') {
            if (numero_A === 1) {
                throw new Error ("A quantidade de trocas (especificada no segundo argumento da função 'shuffle') " + 
                                 "deve ser diferente de 1.");
            }
        }

        if (!(nome_funcao === 'shuffle')) {
            var numero_B = args[3];
        }

        if (!Number.isInteger(numero_A)) {
            throw new Error(`O segundo argumento da função ${nome_funcao} deve ser um numero inteiro.`);
        }
        else if (!(nome_funcao === 'shuffle')){
            if (!Number.isInteger(numero_B)) {
                throw new Error(`O terceiro argumento da função ${nome_funcao} deve ser um numero inteiro.`);
            }
        }

        if (numero_A < 0) {
            throw new Error(`O segundo argumento da função '${nome_funcao}' deve ser um número natural ` + 
                            "(i.e., um número inteiro não negativo).");
        }
        else if (!(nome_funcao === 'shuffle')){
            if (numero_B < 0) {
                throw new Error(`O terceiro argumento da função '${nome_funcao}' deve ser um número natural ` + 
                                "(i.e., um número inteiro não negativo).");
            }
        }

        if (nome_funcao === 'shuffle' && numero_A > vetor.length) {
            throw new Error("O valor da quantidade de posições a serem trocadas, especificada no segundo argumento da função 'shuffle'\n" +
                            "não pode ser maior do que o tamanho (length) do vetor passado como primeiro argumento.");
        }
        else if (!(nome_funcao === 'shuffle')) {
            if (numero_A >= vetor.length || numero_B >= vetor.length) {
                throw new Error(`O valor de cada um dos índices especificados no segundo e no terceiro argumento da função '${nome_funcao}'\n` +
                                "não pode ser igual ou maior do que o tamanho (length) do vetor passado como primeiro argumento.");
            }
        }
    }

    // Retorna o valor booleano 'true' caso a função chamada tenha passado 
    // por todos os testes sem levantar um erro.
    return true;
}
