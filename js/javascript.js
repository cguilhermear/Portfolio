const handleSubmit = async (event) => {
    event.preventDefault();

    const name = document.querySelector('input[name=name]').value;
    const email = document.querySelector('input[name=email]').value;
    const message = document.querySelector('textarea[name=message]').value;

    // Enviar os dados para a API
    const response = await fetch('https://api.sheetmonkey.io/form/3fAfhDtPwHCNR99ofzPL9w', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    });

    // Verificar se o envio foi bem-sucedido (código de status 2xx)
    if (response.ok) {
        alert('Envio bem-sucedido!');
        
        // Limpar os campos do formulário
        document.querySelector('input[name=name]').value = '';
        document.querySelector('input[name=email]').value = '';
        document.querySelector('textarea[name=message]').value = '';
    } else {
        console.error('Erro no envio. Código de status:', response.status);
    }
}

document.querySelector('form').addEventListener('submit', handleSubmit);
