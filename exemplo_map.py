# escrever uma função que converte uma lista de int para str

def converte(s, funcao_de_conversao): # 'int' ou 'str' ou 'float'
    s_convertido = []
    print('A função de conversão é:', funcao_de_conversao.__name__)
    for item in s:
        novo_item = funcao_de_conversao(item)
        s_convertido.append(novo_item)

    return s_convertido

numeros = [10, 25, 19, 87, 91]
strings = converte(numeros, str)
# print(strings) # resultado esperado: ['10', '25', '19', '87', '91']
print(converte(numeros, str))
print(converte(numeros, float))
print(converte(strings, int))

# def converte(seq_int):
#     # percorrer a lista
#     seq_str = []
#     for item in seq_int:
#         # para cada elemento
#         # - converter em str
#         # - adicionar em uma nova lista
#         # print(item, type(item))
#         novo_item = str(item)
#         # print(novo_item, type(novo_item))
#         seq_str.append(novo_item)
#         # print(seq_str)

#     # retornar a nova lista
#     return seq_str