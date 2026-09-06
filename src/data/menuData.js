export const RESTAURANT_INFO = {
  name: "NaBrasa",
  tagline: "O Ponto da Picanha",
  whatsappNumber: "5538999980672",
  whatsappFormatted: "(38) 99998-0672",
  address: "Rua Principal do Sabor, 1200 - Centro",
  hours: "Todos os dias: 18:00 \xE0s 00:00 (Almo\xE7o especial aos fins de semana)",
  deliveryFee: 10,
  rainDeliveryFee: 12,
  mealVoucherFeePercentage: 0.1,
  // 10%
  pixKey: "38999980672",
  pixBeneficiary: "NaBrasa Restaurante e Churrascaria"
};
export const CATEGORIES = [
  { id: "todos", label: "Todos os Pratos", icon: "UtensilsCrossed" },
  { id: "espetos", label: "Espetos na Brasa", icon: "Flame" },
  { id: "jantar", label: "Jantares Completos", icon: "ChefHat" },
  { id: "porcoes", label: "Por\xE7\xF5es & Petiscos", icon: "Sparkles" },
  { id: "macarrao", label: "Macarr\xE3o na Chapa", icon: "Soup" },
  { id: "prato_da_casa", label: "Prato da Casa", icon: "Award" },
  { id: "caldos", label: "Caldos NaBrasa", icon: "Coffee" },
  { id: "monte_seu_prato", label: "Monte seu Prato", icon: "Sliders" },
  { id: "bebidas", label: "Bebidas Geladas", icon: "Wine" }
];
export const MENU_ITEMS = [
  {
    id: "espetos",
    categoryId: "espetos",
    title: "Espetos na Brasa",
    badge: "Mais Pedido",
    defaultDescription: "Acompanha: farinha temperada especial, mandioca cozida na manteiga e molho da casa artesanal.",
    defaultImage: "/images/espeto-picanha.jpeg",
    variants: [
      {
        id: "esp-contra-file",
        name: "Contra Fil\xE9",
        price: 12,
        description: "Corte nobre suculento assado no ponto certo. Acompanha farinha temperada, mandioca e molho da casa.",
        image: "/images/jantar.png",
        badge: "Favorito"
      },
      {
        id: "esp-franbacon",
        name: "Franbacon",
        price: 12,
        description: "Cubos de peito de frango selecionados envoltos em tiras crocantes de bacon defumado.",
        image: "/images/jantar.png"
      },
      {
        id: "esp-picanha",
        name: "Picanha",
        price: 30,
        description: "A aut\xEAntica picanha nobre com capa de gordura dourada e maciez inigual\xE1vel.",
        image: "/images/espeto-picanha.jpeg",
        badge: "Destaque"
      },
      {
        id: "esp-linguica",
        name: "Lingui\xE7a Tradicional",
        price: 12,
        description: "Lingui\xE7a de pernil artesanal suculenta e bem temperada.",
        image: "/images/teste.jpeg"
      },
      {
        id: "esp-linguica-pimenta",
        name: "Lingui\xE7a com Pimenta",
        price: 12,
        description: "Lingui\xE7a nobre com toque picante na medida certa para real\xE7ar o sabor da brasa.",
        image: "/images/teste.jpeg"
      },
      {
        id: "esp-coracao",
        name: "Cora\xE7\xE3o de Frango",
        price: 14,
        description: "Cora\xE7\xF5es de frango marinados em ervas finas, assados no ponto perfeito.",
        image: "/images/coracao.png"
      },
      {
        id: "esp-cafta",
        name: "Cafta Especial",
        price: 14,
        description: "Carne bovina mo\xEDda com temperos \xE1rabes tradicionais, hortel\xE3 fresca e especiarias.",
        image: "/images/teste.jpeg"
      },
      {
        id: "esp-cupim",
        name: "Cupim Maturado",
        price: 18,
        description: "Cupim bovino marinado e desfiando de t\xE3o macio, com sabor acentuado da brasa.",
        image: "/images/teste.jpeg",
        badge: "Maturado"
      },
      {
        id: "esp-provolone",
        name: "Queijo Provolone",
        price: 15,
        description: "Espeto de provolone chapeado com crosta crocante e interior derretido.",
        image: "/images/teste.jpeg"
      },
      {
        id: "esp-pao-alho",
        name: "P\xE3o de Alho Crocante",
        price: 10,
        description: "P\xE3o recheado com pasta de alho cremosa e queijo gratinado ao fogo.",
        image: "/images/teste.jpeg"
      },
      {
        id: "esp-vinagrete",
        name: "Adicional de Vinagrete",
        price: 3,
        description: "Por\xE7\xE3o extra de vinagrete fresco da casa com tomate, cebola e cheiro verde.",
        image: "/images/vinagrete.png"
      }
    ]
  },
  {
    id: "jantar",
    categoryId: "jantar",
    title: "Jantares Completos",
    badge: "Refei\xE7\xE3o Completa",
    defaultDescription: "Espeto \xE0 sua escolha acompanhado de arroz branco soltinho, feij\xE3o tropeiro tradicional com torresmo, vinagrete fresco e mandioca.",
    defaultImage: "/images/jantar.png",
    variants: [
      {
        id: "jantar-contra-file",
        name: "Jantar Contra Fil\xE9",
        price: 28,
        description: "Espeto de contra fil\xE9 + arroz branco soltinho + feij\xE3o tropeiro com torresmo + vinagrete + mandioca.",
        image: "/images/jantar.png",
        badge: "Campe\xE3o de Vendas"
      },
      {
        id: "jantar-franbacon",
        name: "Jantar Franbacon",
        price: 28,
        description: "Espeto de franbacon crocante + arroz + feij\xE3o tropeiro + vinagrete + mandioca.",
        image: "/images/jantar.png"
      },
      {
        id: "jantar-barrigada",
        name: "Jantar Barrigada",
        price: 28,
        description: "Espeto de barrigada su\xEDna com pururuca + arroz + feij\xE3o tropeiro + vinagrete + mandioca.",
        image: "/images/jantar.png"
      },
      {
        id: "jantar-linguica",
        name: "Jantar Lingui\xE7a",
        price: 28,
        description: "Espeto de lingui\xE7a de pernil + arroz + feij\xE3o tropeiro + vinagrete + mandioca.",
        image: "/images/espeto-picanha.jpeg"
      },
      {
        id: "jantar-linguica-pimenta",
        name: "Jantar Lingui\xE7a Apimentada",
        price: 28,
        description: "Espeto de lingui\xE7a com pimenta + arroz + feij\xE3o tropeiro + vinagrete + mandioca.",
        image: "/images/espeto-picanha.jpeg"
      },
      {
        id: "jantar-coracao",
        name: "Jantar Cora\xE7\xE3o de Frango",
        price: 30,
        description: "Espeto de cora\xE7\xE3o suculento + arroz + feij\xE3o tropeiro + vinagrete + mandioca.",
        image: "/images/coracaoj.png"
      },
      {
        id: "jantar-cafta",
        name: "Jantar Cafta",
        price: 30,
        description: "Espeto de cafta artesanal com especiarias + arroz + feij\xE3o tropeiro + vinagrete + mandioca.",
        image: "/images/teste.jpeg"
      },
      {
        id: "jantar-provolone",
        name: "Jantar Queijo Provolone",
        price: 30,
        description: "Espeto de provolone assado + arroz + feij\xE3o tropeiro + vinagrete + mandioca.",
        image: "/images/teste.jpeg"
      },
      {
        id: "jantar-picanha",
        name: "Jantar Picanha Nobre",
        price: 30,
        description: "Espeto de picanha macia grelhada + arroz + feij\xE3o tropeiro + vinagrete + mandioca.",
        image: "/images/teste.jpeg",
        badge: "Premium"
      }
    ]
  },
  {
    id: "porcoes",
    categoryId: "porcoes",
    title: "Por\xE7\xF5es & Petiscos da Casa",
    badge: "Para Compartilhar",
    defaultDescription: "Por\xE7\xF5es generosas preparadas na hora com ingredientes de primeira linha.",
    defaultImage: "/images/porcaopicanha.png",
    variants: [
      {
        id: "porcao-picanha-pedra",
        name: "Picanha na Pedra",
        price: 129,
        description: "500g de picanha nobre fatiada servida em pedra vulc\xE2nica quente, 200g de mandioca na manteiga de garrafa e 400g de batata frita com queijo e bacon.",
        image: "/images/porcaopicanha.png",
        badge: "Carro-Chefe"
      },
      {
        id: "porcao-tilapia",
        name: "Til\xE1pia com Batata Saut\xEA",
        price: 65,
        description: "500g de iscas de fil\xE9 de til\xE1pia fresca empanada crocante e 150g de batata saut\xEA com ervas.",
        image: "/images/tilapia.png"
      },
      {
        id: "porcao-kibe",
        name: "Kibe com Queijo",
        price: 28,
        description: "400g de mini kibes crocantes por fora e recheados com muito queijo derretido.",
        image: "/images/kibecomqueijo.png"
      },
      {
        id: "porcao-batata-completa",
        name: "Batata Frita Completa",
        price: 35,
        description: "500g de batata frita super crocante coberta com cubos de bacon e sua escolha de cheddar cremoso ou mussarela derretida.",
        image: "/images/batatacompleta.png",
        badge: "Imperd\xEDvel"
      },
      {
        id: "porcao-batata-simples",
        name: "Batata Frita Simples",
        price: 25,
        description: "500g de batatas selecionadas, douradinhas e crocantes com toque suave de sal e or\xE9gano.",
        image: "/images/batata.png"
      }
    ]
  },
  {
    id: "macarrao",
    categoryId: "macarrao",
    title: "Macarr\xE3o na Chapa",
    badge: "Tradicional",
    defaultDescription: "Massa fresca salteada na chapa com temperos caseiros, carne suculenta e legumes.",
    defaultImage: "/images/macarraonachapa.png",
    variants: [
      {
        id: "macarrao-1p",
        name: "Macarr\xE3o na Chapa (1 Pessoa)",
        price: 28,
        description: "Generosa por\xE7\xE3o individual de macarr\xE3o na chapa com 200g de carne, molho especial da casa, arroz e batata frita.",
        image: "/images/macarraonachapa.png"
      }
    ]
  },
  {
    id: "prato_da_casa",
    categoryId: "prato_da_casa",
    title: "Prato da Casa Especial",
    badge: "Sugest\xE3o do Chef",
    defaultDescription: "A combina\xE7\xE3o perfeita e farta de carne nobre com acompanhamentos cl\xE1ssicos brasileiros.",
    defaultImage: "/images/pratodacasa.png",
    variants: [
      {
        id: "prato-casa-1p",
        name: "Prato da Casa Completo",
        price: 39.99,
        description: "200g de maminha suculenta grelhada ao molho exclusivo da casa, arroz branco, feij\xE3o caprichado e batata frita crocante.",
        image: "/images/pratodacasa.png",
        badge: "Custo-Benef\xEDcio"
      }
    ]
  },
  {
    id: "caldos",
    categoryId: "caldos",
    title: "Caldos NaBrasa",
    badge: "Cremosos & Quentinhos",
    defaultDescription: "Acompanha: torresmo pururuca sequinho, torrada temperada, queijo minas curado e cebolinha fresca picada.",
    defaultImage: "/images/caldo-removebg-preview.png",
    variants: [
      {
        id: "caldo-frango",
        name: "Caldo de Frango Cremoso",
        price: 24.99,
        description: "Caldo de frango desfiado encorpado com mandioca e tempero verde. Acompanha torresmo, torrada, queijo e cebolinha.",
        image: "/images/caldo-removebg-preview.png"
      },
      {
        id: "caldo-feijao",
        name: "Caldo de Feij\xE3o Especial",
        price: 24.99,
        description: "Caldo de feij\xE3o batido com bacon e lingui\xE7a defumada. Acompanha torresmo crocante, torrada, queijo e cebolinha.",
        image: "/images/caldo-removebg-preview.png"
      },
      {
        id: "caldo-misto",
        name: "Caldo Misto NaBrasa",
        price: 24.99,
        description: "A fus\xE3o equilibrada do caldo de frango e feij\xE3o com peda\xE7os de carne e tempero do chef. Acompanha torresmo, torrada, queijo e cheiro verde.",
        image: "/images/caldo-removebg-preview.png",
        badge: "Mais Pedido"
      }
    ]
  },
  {
    id: "monte_seu_prato",
    categoryId: "monte_seu_prato",
    title: "Monte Seu Prato Personalizado",
    badge: "100% Customiz\xE1vel",
    defaultDescription: "Escolha a sua massa preferida, o molho artesanal e quantos adicionais quiser!",
    defaultImage: "/images/monteseuprato1.png",
    isCustomizable: true,
    variants: [
      {
        id: "monte-seu-prato-builder",
        name: "Personalizar Massa & Ingredientes",
        price: 16,
        // Base mínima aproximada (massa R$ 9 + molho R$ 7)
        description: "Monte a sua refei\xE7\xE3o sob medida: escolha Espaguete ou Penne, Molho Vermelho ou Branco, e combine com Bacon, Calabresa, Cheddar, Mussarela e muito mais.",
        image: "/images/monteseuprato1.png"
      }
    ]
  }
];
export const CUSTOM_PLATE_OPTIONS = {
  massas: [
    { id: "massa-espaguete", name: "Espaguete Al Dente", price: 9, category: "massa" },
    { id: "massa-penne", name: "Penne Grano Duro", price: 9, category: "massa" }
  ],
  molhos: [
    { id: "molho-vermelho", name: "Molho de Tomate R\xFAstico (Vermelho)", price: 9, category: "molho" },
    { id: "molho-branco", name: "Molho Branco Cremoso (Bechamel)", price: 7, category: "molho" }
  ],
  adicionais: [
    { id: "add-bacon", name: "Bacon Crocante", price: 4, category: "adicional" },
    { id: "add-calabresa", name: "Calabresa Fatiada", price: 4, category: "adicional" },
    { id: "add-mussarela", name: "Mussarela Ralada", price: 4, category: "adicional" },
    { id: "add-presunto", name: "Presunto em Cubos", price: 4, category: "adicional" },
    { id: "add-cheddar", name: "Cheddar Cremoso", price: 5, category: "adicional" },
    { id: "add-milho", name: "Milho Verde", price: 2, category: "adicional" },
    { id: "add-cebola", name: "Cebola Roxa Fatiada", price: 2, category: "adicional" },
    { id: "add-pimentao", name: "Piment\xE3o Verde", price: 2, category: "adicional" },
    { id: "add-tomate", name: "Tomate em Cubos", price: 3, category: "adicional" },
    { id: "add-azeitona", name: "Azeitonas Fatiadas", price: 2, category: "adicional" }
  ]
};
export const DRINKS_CATALOG = [
  // Cervejas Lata 350ml
  { id: "brahma-350", name: "Brahma", category: "Cervejas Lata 350ml", volume: "350ml", price: 4.5, image: "/images/brahma-lata-350ml.png" },
  { id: "original-350", name: "Original", category: "Cervejas Lata 350ml", volume: "350ml", price: 5.5, image: "/images/original350.png" },
  { id: "heineken-350", name: "Heineken", category: "Cervejas Lata 350ml", volume: "350ml", price: 6.5, image: "/images/heineken350.png", badge: "Premium" },
  { id: "antarctica-350", name: "Antarctica", category: "Cervejas Lata 350ml", volume: "350ml", price: 4.5, image: "/images/antartica350.png" },
  { id: "skol-350", name: "Skol", category: "Cervejas Lata 350ml", volume: "350ml", price: 4.5, image: "/images/skol350.png" },
  // Cervejas Latão 473ml
  { id: "brahma-473", name: "Brahma Lat\xE3o", category: "Cervejas Lat\xE3o 473ml", volume: "473ml", price: 5.5, image: "/images/brahma473.png" },
  { id: "original-473", name: "Original Lat\xE3o", category: "Cervejas Lat\xE3o 473ml", volume: "473ml", price: 6, image: "/images/original473.png" },
  { id: "heineken-473", name: "Heineken Lat\xE3o", category: "Cervejas Lat\xE3o 473ml", volume: "473ml", price: 7.5, image: "/images/heineken473.png", badge: "Gelad\xEDssima" },
  { id: "antarctica-473", name: "Antarctica Lat\xE3o", category: "Cervejas Lat\xE3o 473ml", volume: "473ml", price: 5.5, image: "/images/antartica473.png" },
  { id: "skol-473", name: "Skol Lat\xE3o", category: "Cervejas Lat\xE3o 473ml", volume: "473ml", price: 5.5, image: "/images/skol473.png" },
  // Cervejas 600ml
  { id: "antarctica-600", name: "Antarctica 600ml", category: "Cervejas 600ml", volume: "600ml", price: 8, image: "/images/antartica600.png" },
  { id: "antarctica-boa-600", name: "Antarctica Boa 600ml", category: "Cervejas 600ml", volume: "600ml", price: 8, image: "/images/antarticaboa600.png" },
  { id: "brahma-600", name: "Brahma 600ml", category: "Cervejas 600ml", volume: "600ml", price: 8.5, image: "/images/brahma600.png" },
  { id: "heineken-600", name: "Heineken 600ml", category: "Cervejas 600ml", volume: "600ml", price: 12, image: "/images/heineken600.png" },
  { id: "skol-600", name: "Skol 600ml", category: "Cervejas 600ml", volume: "600ml", price: 8, image: "/images/skol600.png" },
  { id: "stella-600", name: "Stella Artois 600ml", category: "Cervejas 600ml", volume: "600ml", price: 15, image: "/images/Stella-600ml.png" },
  { id: "original-600", name: "Original 600ml", category: "Cervejas 600ml", volume: "600ml", price: 9.5, image: "/images/original600.png", badge: "Cl\xE1ssica" },
  // Long Neck
  { id: "corona-ln", name: "Corona Extra Long Neck", category: "Long Neck", volume: "330ml", price: 8, image: "/images/corona.png" },
  { id: "heineken-ln", name: "Heineken Long Neck", category: "Long Neck", volume: "330ml", price: 8.5, image: "/images/heineken.png" },
  { id: "heineken-zero-ln", name: "Heineken 0.0% Long Neck (Sem \xC1lcool)", category: "Long Neck", volume: "330ml", price: 8.5, image: "/images/heineken0.png", badge: "Sem \xC1lcool" },
  { id: "heineken-shot", name: "Heineken Shot 250ml", category: "Long Neck", volume: "250ml", price: 6.5, image: "/images/heinekenshot.png" },
  // Refrigerantes Lata 350ml
  { id: "coca-lata", name: "Coca-Cola Original", category: "Refrigerantes Lata 350ml", volume: "350ml", price: 4, image: "/images/cocalata.png" },
  { id: "coca-zero-lata", name: "Coca-Cola Zero", category: "Refrigerantes Lata 350ml", volume: "350ml", price: 4, image: "/images/cocalata0.png" },
  { id: "fanta-laranja-lata", name: "Fanta Laranja", category: "Refrigerantes Lata 350ml", volume: "350ml", price: 4, image: "/images/fantalata.png" },
  { id: "fanta-uva-lata", name: "Fanta Uva", category: "Refrigerantes Lata 350ml", volume: "350ml", price: 4, image: "/images/fantauvalata.png" },
  { id: "guarana-lata", name: "Guaran\xE1 Antarctica", category: "Refrigerantes Lata 350ml", volume: "350ml", price: 4, image: "/images/antarticalata.png" },
  { id: "guarana-zero-lata", name: "Guaran\xE1 Antarctica Zero", category: "Refrigerantes Lata 350ml", volume: "350ml", price: 4, image: "/images/guarana0.png" },
  // Refrigerantes 600ml
  { id: "coca-600", name: "Coca-Cola 600ml", category: "Refrigerantes 600ml", volume: "600ml", price: 6, image: "/images/coca600.png" },
  { id: "coca-zero-600", name: "Coca-Cola Zero 600ml", category: "Refrigerantes 600ml", volume: "600ml", price: 6, image: "/images/coca0600.png" },
  // Refrigerantes 1L
  { id: "coca-1l", name: "Coca-Cola 1L", category: "Refrigerantes 1L", volume: "1 Litro", price: 8, image: "/images/coca1.png" },
  { id: "coca-zero-1l", name: "Coca-Cola Zero 1L", category: "Refrigerantes 1L", volume: "1 Litro", price: 8, image: "/images/coca01.png" },
  { id: "guarana-1l", name: "Guaran\xE1 Antarctica 1L", category: "Refrigerantes 1L", volume: "1 Litro", price: 7, image: "/images/guarana1.png" },
  // Refrigerantes 2L
  { id: "coca-2l", name: "Coca-Cola 2L", category: "Refrigerantes 2L", volume: "2 Litros", price: 12, image: "/images/coca2.png", badge: "Fam\xEDlia" },
  { id: "coca-zero-2l", name: "Coca-Cola Zero 2L", category: "Refrigerantes 2L", volume: "2 Litros", price: 12, image: "/images/coca02.png" },
  { id: "guarana-2l", name: "Guaran\xE1 Antarctica 2L", category: "Refrigerantes 2L", volume: "2 Litros", price: 11, image: "/images/guarana2.png" },
  { id: "guarana-zero-2l", name: "Guaran\xE1 Antarctica Zero 2L", category: "Refrigerantes 2L", volume: "2 Litros", price: 11, image: "/images/guarana20.png" },
  { id: "sprite-2l", name: "Sprite 2L", category: "Refrigerantes 2L", volume: "2 Litros", price: 10, image: "/images/sprite2.png" },
  { id: "sprite-zero-2l", name: "Sprite Zero 2L", category: "Refrigerantes 2L", volume: "2 Litros", price: 10, image: "/images/sprite2.png" },
  { id: "mineiro-2l", name: "Guaran\xE1 Mineiro 2L", category: "Refrigerantes 2L", volume: "2 Litros", price: 9, image: "/images/mineiro2.png" },
  { id: "mineiro-zero-2l", name: "Guaran\xE1 Mineiro Zero 2L", category: "Refrigerantes 2L", volume: "2 Litros", price: 9, image: "/images/mineiro20.png" },
  // Águas
  { id: "agua-1-5l", name: "\xC1gua Mineral sem G\xE1s 1,5L", category: "\xC1gua", volume: "1,5 Litro", price: 5, image: "/images/agua.png" },
  { id: "agua-500ml", name: "\xC1gua Mineral sem G\xE1s 500ml", category: "\xC1gua", volume: "500ml", price: 2.5, image: "/images/agua.png" },
  { id: "agua-gas-500ml", name: "\xC1gua Mineral com G\xE1s 500ml", category: "\xC1gua", volume: "500ml", price: 4, image: "/images/aguag.png" },
  // Sucos & Outros
  { id: "h2o-limao", name: "H2O Lim\xE3o 500ml", category: "Outros", volume: "500ml", price: 5, image: "/images/h2o.png" },
  { id: "h2o-limoneto", name: "H2O Limoneto 500ml", category: "Outros", volume: "500ml", price: 5, image: "/images/limoneto.png" },
  { id: "del-valle-uva-1l", name: "Suco Del Valle Uva 1L", category: "Outros", volume: "1 Litro", price: 8.5, image: "/images/dellvaleuva.png" },
  { id: "del-valle-pessego-1l", name: "Suco Del Valle P\xEAssego 1L", category: "Outros", volume: "1 Litro", price: 8.5, image: "/images/dellvalepessego.png" },
  { id: "kapo-uva", name: "Suco Kapo Uva", category: "Outros", volume: "200ml", price: 4, image: "/images/kapouva.png" },
  { id: "kapo-morango", name: "Suco Kapo Morango", category: "Outros", volume: "200ml", price: 4, image: "/images/kapomorango.png" }
];
export const BARBECUE_TIPS = [
  {
    title: "O Ponto Perfeito da Picanha",
    description: "Picanha na brasa deve ser selada com o braseiro bem quente (sem labaredas diretas) por 3 a 5 minutos de cada lado e descansada por 2 minutos antes de fatiar para reter todos os sucos suculentos.",
    icon: "Flame"
  },
  {
    title: "Feij\xE3o Tropeiro Artesanal",
    description: "Nosso tropeiro \xE9 feito na hora com farinha de mandioca de primeira, bacon crocante, couve fina e torresmo pururuca estaladi\xE7o.",
    icon: "Sparkles"
  },
  {
    title: "Cervejas Sempre Estupidamente Geladas",
    description: "Todas as bebidas chegam at\xE9 a sua porta na temperatura perfeita para acompanhar seu churrasco.",
    icon: "Wine"
  }
];
