import { RESTAURANT_INFO } from "../data/menuData.js";

export function resolveImgUrl(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.replace(/^\.?\//, '');
  return `./${cleanPath}`;
}

export function formatCurrency(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value);
}
export function getPaymentMethodLabel(method) {
  switch (method) {
    case "pix":
      return "Pix (Chave / QR Code)";
    case "pix_maquininha":
      return "Pix na Maquininha";
    case "dinheiro":
      return "Dinheiro";
    case "cartao_credito":
      return "Cart\xE3o de Cr\xE9dito";
    case "cartao_debito":
      return "Cart\xE3o de D\xE9bito";
    case "vale_alimentacao":
      return "Vale Alimenta\xE7\xE3o / Refei\xE7\xE3o (+10% taxa)";
    default:
      return method;
  }
}
export function buildWhatsAppOrderMessage(cart, info, subtotal, deliveryFee, additionalFee, total) {
  let message = `\u{1F525} *NOVO PEDIDO - NABRASA*
`;
  message += `\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
`;
  message += `\u{1F464} *Cliente:* ${info.nome.trim()}
`;
  if (info.telefone) {
    message += `\u{1F4F1} *Telefone:* ${info.telefone.trim()}
`;
  }
  message += `\u{1F6F5} *Tipo:* ${info.tipoPedido === "entregar" ? "ENTREGA (Delivery)" : "RETIRADA NO LOCAL"}
`;
  if (info.tipoPedido === "entregar") {
    const end = info.endereco;
    message += `\u{1F4CD} *Endere\xE7o:* ${end.rua}, ${end.numero}`;
    if (end.bairro) message += ` - ${end.bairro}`;
    if (end.complemento) message += ` (${end.complemento})`;
    message += `
`;
    if (info.isRainyDay) {
      message += `\u{1F327}\uFE0F *Taxa de chuva aplicada:* R$ ${deliveryFee.toFixed(2).replace(".", ",")}
`;
    }
  }
  message += `\u{1F4B3} *Pagamento:* ${getPaymentMethodLabel(info.formaPagamento)}
`;
  if (info.formaPagamento === "dinheiro" && info.trocoPara && info.trocoPara > total) {
    message += `\u{1F4B5} *Troco para:* ${formatCurrency(info.trocoPara)} (Troco: ${formatCurrency(info.trocoPara - total)})
`;
  }
  if (info.formaPagamento === "vale_alimentacao") {
    message += `\u26A0\uFE0F *Taxa Vale Alimenta\xE7\xE3o (10%):* ${formatCurrency(additionalFee)}
`;
  }
  message += `
\u{1F6D2} *ITENS DO PEDIDO:*
`;
  message += `\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
`;
  cart.forEach((item, idx) => {
    message += `${idx + 1}. *${item.title}* - ${item.variantName}
`;
    message += `   Qtd: ${item.quantity}x | Valor: ${formatCurrency(item.unitPrice)} | Subtotal: ${formatCurrency(item.unitPrice * item.quantity)}
`;
    if (item.customDetails) {
      const { massa, molho, adicionais } = item.customDetails;
      if (massa) message += `   \u2022 Massa: ${massa}
`;
      if (molho) message += `   \u2022 Molho: ${molho}
`;
      if (adicionais && adicionais.length > 0) {
        message += `   \u2022 Adicionais: ${adicionais.join(", ")}
`;
      }
    }
    if (item.notes) {
      message += `   \u{1F4DD} Obs: _${item.notes}_
`;
    }
    message += `
`;
  });
  message += `\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
`;
  message += `\u{1F4B0} *Subtotal dos Itens:* ${formatCurrency(subtotal)}
`;
  if (info.tipoPedido === "entregar") {
    message += `\u{1F6F5} *Taxa de Entrega:* ${formatCurrency(deliveryFee)}
`;
  }
  if (additionalFee > 0) {
    message += `\u{1F4B3} *Taxa de Pagamento:* ${formatCurrency(additionalFee)}
`;
  }
  message += `\u{1F525} *TOTAL GERAL: ${formatCurrency(total)}*
`;
  message += `\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
`;
  if (info.observacoesGerais) {
    message += `\u{1F4AC} *Observa\xE7\xF5es:* ${info.observacoesGerais}

`;
  }
  message += `Obrigado por escolher o *NaBrasa - O Ponto da Picanha*! Aguardamos a confirma\xE7\xE3o.`;
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encoded}`;
  return { text: message, url };
}
