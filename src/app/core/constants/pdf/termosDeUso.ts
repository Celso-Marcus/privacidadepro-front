import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';


@Injectable({
  providedIn: 'root',
})
export class PdfGeneratorService {
  termosDeUso(companyName: string, description: string, companyEmail: string) {
    const doc = new jsPDF();

    doc.setFont('helvetica');
    doc.setFont('bold');
    doc.setFontSize(18);
    doc.text('Termos de Uso', doc.internal.pageSize.getWidth() / 2, 20, );

    doc.setFont('normal');
    doc.setFontSize(14);

    doc.text('Introdução', 20, 40);
    doc.text(`Bem-vindo aos termos de uso da ${companyName}! Ao usar nossos serviços, você concorda com os termos e condições descritos abaixo. Por favor, leia com atenção.`, 20, 50);

    doc.text('Serviços', 20, doc.internal.pageSize.getWidth() + 10);
    doc.text(`Nosso serviço permite que você: ${description}`, 20, doc.internal.pageSize.getWidth() + 20);

    doc.text('Conta', 20, doc.internal.pageSize.getWidth() + 10);
    doc.text('Para usar nossos serviços, você precisa criar uma conta. Ao criar uma conta, você concorda em fornecer informações precisas e completas e mantê-las atualizadas. Você é responsável por manter a segurança da sua conta e senha.', 20, doc.internal.pageSize.getWidth() + 20);

    doc.text('Uso do serviço', 20, doc.internal.pageSize.getWidth() + 10);
    doc.text('Você concorda em usar nossos serviços apenas para fins legais e de acordo com nossos termos de uso. Você não pode usar nossos serviços de maneira que prejudique os direitos de terceiros, incluindo seus direitos de propriedade intelectual, privacidade e reputação.', 20, doc.internal.pageSize.getWidth() + 20);

    doc.text('Alterações nos termos de uso', 20, doc.internal.pageSize.getWidth() + 10);
    doc.text('Podemos atualizar ou alterar nossos termos de uso a qualquer momento. Se fizermos alterações, notificaremos você por email ou por meio de uma notificação em nossos serviços. Seu uso contínuo de nossos serviços após as alterações significa que você concorda com os termos atualizados.', 20, doc.internal.pageSize.getWidth() + 20);

    doc.text('Encerramento da conta', 20, doc.internal.pageSize.getWidth() + 10);
    doc.text('Você pode encerrar sua conta a qualquer momento. Se você encerrar sua conta, não terá mais acesso aos nossos serviços e seus dados serão excluídos. Reservamos o direito de encerrar sua conta se você violar nossos termos de uso.', 20, doc.internal.pageSize.getWidth() + 20);

    doc.text('Limitação de responsabilidade', 20, doc.internal.pageSize.getWidth() + 10);
    doc.text('Não seremos responsáveis por danos indiretos, especiais, incidentais, consequenciais ou punitivos, incluindo perda de lucro ou receita, que possam surgir do uso ou incapacidade de usar nossos serviços.', 20, doc.internal.pageSize.getWidth() + 20);

    doc.text('Lei aplicável', 20, doc.internal.pageSize.getWidth() + 10);
    doc.text('Nossos termos de uso serão regidos e interpretados de acordo com as leis do Brasil.', 20,doc.internal.pageSize.getWidth() + 20);

    doc.text('Contato', 20, doc.internal.pageSize.getHeight() - 20);
    doc.text(`Se você tiver alguma dúvida ou sugestão sobre nossos termos de uso, entre em contato conosco através do email ${companyEmail}.`, 20, doc.internal.pageSize.getHeight() - 10);

    // Salvar o PDF
    doc.save('TermosDeUso.pdf');
  }
}
