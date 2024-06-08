# Exercício: Login
### Criar uma página de login usando React

Informações:
- A estrutura da página já está criada em <code>main.jsx</code>;
- Vocês podem usar de um valor estático para os logins, ou um vetor com vários possíveis logins: <code>
    [<br>
        {email: "satoh@conpec.com.br", password: "mercado1234"},<br>
        {email: "lima@conpec.com.br", password: "abacaxi"}
    <br>]
</code>

Dicas:
- Lembrem-se sempre da estrutura básica do React de termos
    - um elemento no <code>html</code> para enraizar o React (normalmente a <code>div#app</code>);
    - um elemento raiz do React creado pelo <code>ReactDOM.createRoot()</code>;
    - uma chamada do <code>root.render()</code> para renderizar a tela (lembrando sempre que esta deve receber um único elemento HTML/JSX por vez);