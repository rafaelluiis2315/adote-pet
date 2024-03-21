from django.core.mail import send_mail


def enviar_email_confirmação(adocao):
    assunto = "Adoção realizada com sucesso!"
    conteudo = f"Parabés por realizar a adoção do Pet {adocao.pet.nome} com o valor mensal de R$ {adocao.valor}"
    remetente = "adoteumpet00@gmail.com"
    destinatario = [adocao.email]
    send_mail(assunto, conteudo, remetente, destinatario)
