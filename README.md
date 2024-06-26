# Balacobaco ORM

Projeto Final Desenvolvido para a matéria de Programação Orientada a Objeto.

## Descrição

Balacobaco ORM é um projeto desenvolvido como trabalho final para a disciplina de Programação Orientada a Objeto.

## Repositório

O código fonte do projeto está disponível no GitHub:
[balacobaco-orm](https://github.com/luizpaulo2005/balacobaco-orm)

## Contribuidores

- **Luiz Paulo R. S. Santos**

  - Email: [luizpaulorodrigues2005@gmail.com](mailto:luizpaulorodrigues2005@gmail.com)
  - GitHub: [luizpaulo2005](https://github.com/luizpaulo2005)

- **Vitor de Souza Lichoti**
  - Email: [vitorlichoti@gmail.com](mailto:vitorlichoti@gmail.com)
  - GitHub: [vitorlichoti](https://github.com/vitorlichoti)

## Informações Adicionais

- **Versão:** 1.0.0
- **Arquivo Principal:** `index.js`
- **Tipo de Módulo:** ES Module
- **Licença:** MIT

<div class="markdown prose w-full break-words dark:prose-invert dark"><h1>Documentação da Classe ORM</h1><h2>Visão Geral</h2><p>A classe <code>ORM</code> é uma utilidade básica de mapeamento objeto-relacional (ORM) para gerenciar uma coleção de itens em memória. Esta classe fornece métodos para criar, ler, atualizar e deletar (CRUD) itens. Os itens são armazenados em uma lista interna, com cada item tendo um ID único.</p><h2>Índice</h2><ul><li><a rel="noreferrer" href="#instala%C3%A7%C3%A3o">Instalação</a></li><li><a rel="noreferrer" href="#uso">Uso</a><ul><li><a rel="noreferrer" href="#criando-um-item">Criando um Item</a></li><li><a rel="noreferrer" href="#criando-m%C3%BAltiplos-itens">Criando Múltiplos Itens</a></li><li><a rel="noreferrer" href="#selecionando-todos-os-itens">Selecionando Todos os Itens</a></li><li><a rel="noreferrer" href="#selecionando-um-item-%C3%BAnico">Selecionando um Item Único</a></li><li><a rel="noreferrer" href="#atualizando-um-item">Atualizando um Item</a></li><li><a rel="noreferrer" href="#deletando-um-item">Deletando um Item</a></li></ul></li><li><a rel="noreferrer" href="#m%C3%A9todos">Métodos</a><ul><li><a rel="noreferrer" href="#createitem">create(item)</a></li><li><a rel="noreferrer" href="#createmanyitems">createMany(items)</a></li><li><a rel="noreferrer" href="#selectall">selectAll</a></li><li><a rel="noreferrer" href="#selectuniqueid">selectUnique(id)</a></li><li><a rel="noreferrer" href="#updateid-item">update(id, item)</a></li><li><a rel="noreferrer" href="#deleteid">delete(id)</a></li></ul></li><li><a rel="noreferrer" href="#exemplo">Exemplo</a></li><li><a rel="noreferrer" href="#notas">Notas</a></li></ul><h2>Instalação</h2><p>Execute o seguinte comando para instalar o Balacobaco ORM: <code>npm install balacobaco-orm<code></p><h2>Uso</h2><h3>Criando um Item</h3><p>Para criar um item, use o método <code>create</code>. Este método recebe um objeto como parâmetro e o adiciona à lista interna com um ID único.</p><pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><div class="flex items-center"><span class="" data-state="closed"></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-javascript"><span class="hljs-keyword">import</span> { <span class="hljs-variable constant_">ORM</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">'./orm'</span>;

<span class="hljs-keyword">class</span> <span class="hljs-title class_">ItemORM</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">ORM</span> {}

<span class="hljs-keyword">const</span> itemORM = <span class="hljs-keyword">new</span> <span class="hljs-title class_">ItemORM</span>();
itemORM.<span class="hljs-title function_">create</span>({ <span class="hljs-attr">name</span>: <span class="hljs-string">'Item 1'</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">'Value 1'</span> });
</code></div></div></pre><h3>Criando Múltiplos Itens</h3><p>Para criar múltiplos itens de uma vez, use o método <code>createMany</code>. Este método recebe um array de objetos como parâmetro e adiciona cada item à lista interna com IDs únicos.</p><pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><div class="flex items-center"><span class="" data-state="closed"></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-javascript">itemORM.<span class="hljs-title function_">createMany</span>([
{ <span class="hljs-attr">name</span>: <span class="hljs-string">'Item 2'</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">'Value 2'</span> },
{ <span class="hljs-attr">name</span>: <span class="hljs-string">'Item 3'</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">'Value 3'</span> }
]);
</code></div></div></pre><h3>Selecionando Todos os Itens</h3><p>Para recuperar todos os itens, use o getter <code>selectAll</code>. Este retorna uma lista de todos os itens na lista interna.</p><pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><div class="flex items-center"><span class="" data-state="closed"></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-javascript"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(itemORM.<span class="hljs-property">selectAll</span>);
</code></div></div></pre><h3>Selecionando um Item Único</h3><p>Para recuperar um único item pelo seu ID, use o método <code>selectUnique</code>. Este método recebe um ID como parâmetro e retorna o item correspondente, se existir.</p><pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><div class="flex items-center"><span class="" data-state="closed"></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-javascript"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(itemORM.<span class="hljs-title function_">selectUnique</span>(<span class="hljs-number">1</span>));
</code></div></div></pre><h3>Atualizando um Item</h3><p>Para atualizar um item, use o método <code>update</code>. Este método recebe um ID e um objeto como parâmetros e atualiza o item com o ID correspondente.</p><pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><div class="flex items-center"><span class="" data-state="closed"></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-javascript">itemORM.<span class="hljs-title function_">update</span>(<span class="hljs-number">1</span>, { <span class="hljs-attr">name</span>: <span class="hljs-string">'Updated Item 1'</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">'Updated Value 1'</span> });
</code></div></div></pre><h3>Deletando um Item</h3><p>Para deletar um item, use o método <code>delete</code>. Este método recebe um ID como parâmetro e remove o item com o ID correspondente da lista interna.</p><pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><div class="flex items-center"><span class="" data-state="closed"></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-javascript">itemORM.<span class="hljs-title function_">delete</span>(<span class="hljs-number">1</span>);
</code></div></div></pre><h2>Métodos</h2><h3><code>create(item)</code></h3><p>Adiciona um único item à lista interna.</p><ul><li><strong>Parâmetros:</strong><ul><li><code>item</code> (objeto): O item a ser adicionado.</li></ul></li><li><strong>Retorna:</strong> Uma string confirmando que o item foi adicionado.</li></ul><h3><code>createMany(items)</code></h3><p>Adiciona múltiplos itens à lista interna.</p><ul><li><strong>Parâmetros:</strong><ul><li><code>items</code> (array): Um array de objetos a serem adicionados.</li></ul></li><li><strong>Retorna:</strong> Uma string confirmando que os itens foram adicionados.</li></ul><h3><code>selectAll</code></h3><p>Recupera todos os itens da lista interna.</p><ul><li><strong>Retorna:</strong> Um array de itens.</li></ul><h3><code>selectUnique(id)</code></h3><p>Recupera um único item pelo seu ID.</p><ul><li><strong>Parâmetros:</strong><ul><li><code>id</code> (número): O ID do item a ser recuperado.</li></ul></li><li><strong>Retorna:</strong> O item com o ID correspondente ou uma mensagem se não for encontrado.</li></ul><h3><code>update(id, item)</code></h3><p>Atualiza um item com o ID especificado.</p><ul><li><strong>Parâmetros:</strong><ul><li><code>id</code> (número): O ID do item a ser atualizado.</li><li><code>item</code> (objeto): Os novos dados do item.</li></ul></li><li><strong>Retorna:</strong> Uma string confirmando que o item foi atualizado.</li></ul><h3><code>delete(id)</code></h3><p>Deleta um item com o ID especificado.</p><ul><li><strong>Parâmetros:</strong><ul><li><code>id</code> (número): O ID do item a ser deletado.</li></ul></li><li><strong>Retorna:</strong> Uma string confirmando que o item foi deletado.</li></ul><h2>Exemplo</h2><pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><div class="flex items-center"><span class="" data-state="closed"></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-javascript"><span class="hljs-keyword">import</span> { <span class="hljs-variable constant_">ORM</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">'./orm'</span>;

<span class="hljs-keyword">class</span> <span class="hljs-title class_">ItemORM</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">ORM</span> {}

<span class="hljs-keyword">const</span> itemORM = <span class="hljs-keyword">new</span> <span class="hljs-title class_">ItemORM</span>();

itemORM.<span class="hljs-title function_">create</span>({ <span class="hljs-attr">name</span>: <span class="hljs-string">'Item 1'</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">'Value 1'</span> });
itemORM.<span class="hljs-title function_">createMany</span>([
{ <span class="hljs-attr">name</span>: <span class="hljs-string">'Item 2'</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">'Value 2'</span> },
{ <span class="hljs-attr">name</span>: <span class="hljs-string">'Item 3'</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">'Value 3'</span> }
]);

<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(itemORM.<span class="hljs-property">selectAll</span>);

<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(itemORM.<span class="hljs-title function_">selectUnique</span>(<span class="hljs-number">1</span>));

itemORM.<span class="hljs-title function_">update</span>(<span class="hljs-number">1</span>, { <span class="hljs-attr">name</span>: <span class="hljs-string">'Updated Item 1'</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">'Updated Value 1'</span> });

<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(itemORM.<span class="hljs-property">selectAll</span>);

itemORM.<span class="hljs-title function_">delete</span>(<span class="hljs-number">1</span>);

<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(itemORM.<span class="hljs-property">selectAll</span>);
</code></div></div></pre><h2>Notas</h2><ul><li>A classe <code>ORM</code> foi projetada para ser estendida. A instanciação direta de <code>ORM</code> lançará um erro.</li><li>Os IDs dos itens são gerados automaticamente e incrementados com base no comprimento atual da lista interna.</li><li>Métodos prefixados com <code>#</code> são privados e não devem ser chamados diretamente. Use os métodos públicos fornecidos.</li></ul></div>
