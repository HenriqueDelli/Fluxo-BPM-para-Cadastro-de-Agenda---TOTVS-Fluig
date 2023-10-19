# Fluxo-BPM-para-Cadastro-de-Agenda---TOTVS-Fluig
Fluxo BPM para cadastro de agenda via ferramenta fluig da totvs

Atividades do fluxo:
Início – Preenchimento do formulário
Aprovar agendamento – Atividade de aprovação, deve ser executada por um onde qualquer membro desse grupo pode aprovar a solicitação
Fim – Apenas visualização da agenda

Formulário:
O formulário deve se separador por seções:
1. Cabeçalho
2. Agendamento
3. Aprovação
a. Se aprovado, segue para "Fim"
b. Se reprovado, segue para "Correção"
4. Correção
a. Após a correção segue de volta para "Aprovação"
5. Fim

Cabeçalho deve conter campos
1. Nome (preenchimento automático com o número de usuário e senha de que está abrindo a solicitação) (text-bloqueado)
2. Login (preenchimento automático com o login de usuário e senha de que está abrindo a solicitação) (text-bloqueado)
3. Data (preenchimento automático com a data de abertura da solicitação) (text-bloqueado)

Agendamento deve conter os campos:
1. Data do agendamento (campo date)
2. Descrição (textarea)
3. CEP (O campo CEP deve consumir a API Via CEP (ViaCEP - Webservice CEP e IBGE gratuito) e preencher automaticamente os demais campos (text)
4. Estado (text)
5. Cidade (text)
6. Bairro (text)
7. Logradouro (text)

Aprovação
1. Aprovador (preenchimento automático com o nome do aprovador) (text-bloqueado)
2. Observações (textarea – pai e filho)

Regras do fluxo/formulários
1. Todos os campos devem ser obrigatórios, com exceção do campo "Observações" da aprovação, este campo deve ser obrigatório sempre se o aprovador rejeitar o agendamento.
2. Se o usuário "aprovador" rejeitar o agendamento, o fluxo deve seguir para a atividade "Correção", se aprovar, deve seguir para o "Fim".
3. A seção "Aprovação" não deve ser exibida na atividade "Início".
4. Na atividade "Aprovação" todos os campos devem ser apresentados bloqueados com exceção do campo "Observações".
5. Na atividade "Correção" somente os campos da seção "Agendamento" podem ser editados, os demais devem ser bloqueados.
6. Na segunda interação da atividade "Aprovação", se ocorrer, o campo pai e filho da observação anterior precisa estar bloqueado, a função de o apontamento deve ser bloqueada ou travada caso o usuário tente remover.
