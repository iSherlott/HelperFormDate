# HelperFormDate

Helper construido para formatar datas e horas de forma automática, seguindo pequenas diretrizes.

## Forma de usar:

Seu uso e simples, faça a chamada do Helper em seu projeto:<br />
`const HelperFormatDate = require("./helperFormatDate");`

Após fazer a chamada do mesmo, seu uso será por meio de instancia, basta distanciar ele com a data que deseja efetuar a formatação<br />
`
let date = "12/31/2021"
let dataMask = new HelperFormatDate(date);
`
<br />
e declarar qual o tipo de retorno que deseja dessa data, os metodos de retorno existente são:<br />
- formatDate: Retorna somente a data formatada ao padrão Brasileiro (DD/MM/YYYY)
- formatTime: Retorna somente a hora formatada ao padrão HH:MM:SS
- makeMask: Retorna a data e hora no padrão Brasileiro DD/MM/YYYY HH:MM:SS
- genMaskDateNow: Retorna a data atual no formato DD/MM/YYYY
- genMask: Tem o mesmo retorno do makeMask, contudo se a data fornecida for a mesma da data atual, ira retorna somente a hora.
<br />

## Suas chamadas, seguindo o exemplo acima ficaria:
- `dataMask.formatDate`
- `dataMask.formatTime`
- `dataMask.makeMask`
- `dataMask.genMaskDateNow`
- `dataMask.genMask`

## parametro de entrada permitidos:
- String
- Date
- TimeStamp

# Notas Finais

Fiquem sempre atento a esse repositorio, estarei sempre aprimorando e criando novas funções para torna-la cada vez melhor.
