// NaBrasa - Vanilla JS Bundle for Root index.html
(function() {
const RESTAURANT_INFO = {
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
const CATEGORIES = [
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
const MENU_ITEMS = [
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
const CUSTOM_PLATE_OPTIONS = {
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
const DRINKS_CATALOG = [
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
const BARBECUE_TIPS = [
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


// SVG icon generator for pure Vanilla JS (based on Lucide)
function getIcon(name, className = 'w-5 h-5') {
  const icons = {
    flame: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z"/></svg>`,
    'shopping-bag': `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
    phone: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    sparkles: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,
    'arrow-down': `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>`,
    'chef-hat': `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/><line x1="6" y1="17" x2="18" y2="17"/></svg>`,
    'shield-check': `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
    'chevron-left': `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`,
    'chevron-right': `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
    search: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
    x: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
    trash: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>`,
    plus: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,
    minus: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>`,
    send: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>`,
    'map-pin': `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>`,
    'credit-card': `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>`,
    banknote: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>`,
    'qr-code': `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/></svg>`,
    'alert-circle': `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
    'cloud-rain': `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m9 17-2 4"/><path d="m13 17-2 4"/><path d="m17 17-2 4"/></svg>`,
    copy: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
    check: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
    utensils: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8Z"/><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"/><path d="m2.1 21.8 6.4-6.3"/><path d="m19 5-7 7"/></svg>`,
    award: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
    soup: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"/><path d="M7 21v-4"/><path d="M17 21v-4"/><path d="M21 12c0-2-2-4-4-4s-4 2-4 4"/></svg>`,
    coffee: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h12Zm0 0h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-2"/><path d="M6 2v2"/></svg>`,
    sliders: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="1" x2="7" y1="14" y2="14"/><line x1="9" x2="15" y1="8" y2="8"/><line x1="17" x2="23" y1="16" y2="16"/></svg>`,
    wine: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 22h8"/><path d="M7 10h10"/><path d="M12 15v7"/><path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"/></svg>`,
    clock: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  };

  return icons[name] || icons['flame'];
}




function resolveImgUrl(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.replace(/^\.?\//, '');
  return `./${cleanPath}`;
}

function formatCurrency(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value);
}
function getPaymentMethodLabel(method) {
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
function buildWhatsAppOrderMessage(cart, info, subtotal, deliveryFee, additionalFee, total) {
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






// --- Global Application State ---
let cart = [];
try {
  const savedCart = localStorage.getItem('nabrasa_cart_items');
  if (savedCart) cart = JSON.parse(savedCart);
} catch (e) {
  cart = [];
}

function saveCart() {
  localStorage.setItem('nabrasa_cart_items', JSON.stringify(cart));
}

let activeCategory = 'todos';
let searchQuery = '';
let isCartOpen = false;
let isCustomDishOpen = false;
let isDrinksModalOpen = false;
let successOrderData = null;
let activeSlideIndex = 0;
let slideInterval = null;

// Track selected variant and notes per dish
const dishVariantsState = {};
const dishNotesState = {};
MENU_ITEMS.forEach((dish) => {
  dishVariantsState[dish.id] = 0;
  dishNotesState[dish.id] = '';
});

// Custom Plate State
let customPlateState = {
  massa: CUSTOM_PLATE_OPTIONS.massas[0],
  molho: CUSTOM_PLATE_OPTIONS.molhos[0],
  adicionais: [],
  quantity: 1,
  notes: '',
};

// Drinks Modal State
let activeDrinkCategory = 'todos';

// Customer Form State
let customerState = {
  name: localStorage.getItem('nabrasa_client_name') || '',
  phone: localStorage.getItem('nabrasa_client_phone') || '',
  orderType: 'entregar',
  rua: localStorage.getItem('nabrasa_client_rua') || '',
  num: localStorage.getItem('nabrasa_client_num') || '',
  bairro: localStorage.getItem('nabrasa_client_bairro') || '',
  comp: '',
  isRainyDay: false,
  paymentMethod: 'pix',
  trocoPara: '',
  orderNotes: '',
  errorMsg: '',
  copiedPix: false,
};

function saveCustomerInfo() {
  if (customerState.name) localStorage.setItem('nabrasa_client_name', customerState.name);
  if (customerState.phone) localStorage.setItem('nabrasa_client_phone', customerState.phone);
  if (customerState.rua) localStorage.setItem('nabrasa_client_rua', customerState.rua);
  if (customerState.num) localStorage.setItem('nabrasa_client_num', customerState.num);
  if (customerState.bairro) localStorage.setItem('nabrasa_client_bairro', customerState.bairro);
}

// Hero Slides Definition
const HERO_SLIDES = [
  {
    id: 'picanha-espetos',
    image: resolveImgUrl('/images/espeto-picanha.jpeg'),
    badge: 'Destaque da Casa',
    title: 'Espetos & Jantares Completos',
    subtitle: 'Picanha, Contra Filé, Linguiça, Coração, Cupim e mais',
    altText: 'Espetos suculentos na brasa',
  },
  {
    id: 'picanha-pedra',
    image: resolveImgUrl('/images/picanhanapedra.png'),
    badge: 'Para Compartilhar',
    title: 'Picanha na Pedra com Tropeiro',
    subtitle: 'Acompanha arroz, feijão tropeiro e mandioca na manteiga',
    altText: 'Picanha na pedra borbulhante',
  },
  {
    id: 'monte-prato',
    image: resolveImgUrl('/images/monteseuprato1.png'),
    badge: 'Exclusividade NaBrasa',
    title: 'Monte Seu Prato Artesanal',
    subtitle: 'Massas frescas, molhos especiais e diversos adicionais',
    altText: 'Prato de macarrão sob medida',
  },
  {
    id: 'tilapia',
    image: resolveImgUrl('/images/tilapia.png'),
    badge: 'Porção Especial',
    title: 'Tilápia com Batata Sautê',
    subtitle: 'Iscas suculentas de peixe frito com molho tártaro',
    altText: 'Tilápia frita dourada',
  },
];

// --- Core Helper Functions ---
function getCartTotalCount() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function getCartSubtotal() {
  return cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
}

function getDeliveryFee() {
  if (customerState.orderType !== 'entregar') return 0;
  return customerState.isRainyDay
    ? RESTAURANT_INFO.rainDeliveryFee
    : RESTAURANT_INFO.deliveryFee;
}

function getPaymentFee(subtotal) {
  if (customerState.paymentMethod === 'vale_alimentacao') {
    return subtotal * RESTAURANT_INFO.mealVoucherFeePercentage;
  }
  return 0;
}

function getGrandTotal() {
  const subtotal = getCartSubtotal();
  const delivery = getDeliveryFee();
  const paymentFee = getPaymentFee(subtotal);
  return subtotal + delivery + paymentFee;
}

// Add item to cart
function addToCart(newItem) {
  const existingIdx = cart.findIndex((item) => item.id === newItem.id);
  if (existingIdx > -1) {
    cart[existingIdx].quantity += newItem.quantity;
  } else {
    cart.push(newItem);
  }
  saveCart();
  renderHeaderNav();
  renderCartDrawer();
}

function updateCartItemQty(id, delta) {
  const idx = cart.findIndex((i) => i.id === id);
  if (idx > -1) {
    cart[idx].quantity += delta;
    if (cart[idx].quantity <= 0) {
      cart.splice(idx, 1);
    }
    saveCart();
    renderHeaderNav();
    renderCartDrawer();
  }
}

function removeCartItem(id) {
  cart = cart.filter((i) => i.id !== id);
  saveCart();
  renderHeaderNav();
  renderCartDrawer();
}

function clearCart() {
  cart = [];
  saveCart();
  renderHeaderNav();
  renderCartDrawer();
}

// --- Render Functions ---

function initApp() {
  const app = document.getElementById('root') || document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <!-- Top Announcement Bar -->
    <div class="bg-stone-900 border-b border-stone-800 text-xs text-stone-300 py-2 px-4 sticky top-0 z-40">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span class="font-medium text-stone-200">Aberto Hoje: 18:00 às 00:00 • Delivery & Retirada</span>
        </div>
        <div class="flex items-center gap-4 text-stone-400">
          <a href="https://wa.me/${RESTAURANT_INFO.whatsappNumber}" target="_blank" rel="noopener noreferrer" class="hover:text-amber-400 transition-colors flex items-center gap-1.5">
            ${getIcon('phone', 'w-3.5 h-3.5 text-amber-500')}
            <span>${RESTAURANT_INFO.whatsappFormatted}</span>
          </a>
          <span class="hidden md:inline">•</span>
          <span class="hidden md:inline">${RESTAURANT_INFO.address}</span>
        </div>
      </div>
    </div>

    <!-- Main Navigation Header -->
    <header class="bg-stone-950/90 backdrop-blur-md border-b border-stone-800/80 sticky top-[33px] sm:top-[33px] z-30 transition-all">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        <!-- Logo & Title -->
        <a href="#hero" class="flex items-center gap-3 group">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-600 via-red-600 to-amber-800 p-0.5 shadow-lg shadow-amber-950/50 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <div class="w-full h-full bg-stone-950 rounded-[10px] flex items-center justify-center overflow-hidden relative">
              <img
                src="${resolveImgUrl('/images/logo2026.png')}"
                alt="NaBrasa"
                class="w-full h-full object-contain p-1"
                onerror="this.onerror=null; this.src='${resolveImgUrl('/images/churrasco.jpg')}';"
              />
            </div>
          </div>
          <div>
            <div class="flex items-center gap-1.5">
              <span class="text-2xl font-extrabold tracking-wider font-display uppercase bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                ${RESTAURANT_INFO.name}
              </span>
              <span class="text-amber-500 animate-pulse">${getIcon('flame', 'w-4 h-4')}</span>
            </div>
            <p class="text-xs text-stone-400 font-medium tracking-wide">${RESTAURANT_INFO.tagline}</p>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-stone-300">
          <a href="#cardapio" class="hover:text-amber-400 transition-colors flex items-center gap-1.5">
            ${getIcon('utensils', 'w-4 h-4 text-stone-400')}
            <span>Cardápio</span>
          </a>
          <button id="nav-btn-monte-prato" type="button" class="hover:text-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer">
            ${getIcon('sliders', 'w-4 h-4 text-amber-500')}
            <span class="text-amber-400 font-semibold">Monte seu Prato</span>
          </button>
          <a href="#info-section" class="hover:text-amber-400 transition-colors flex items-center gap-1.5">
            ${getIcon('clock', 'w-4 h-4 text-stone-400')}
            <span>Horários & Local</span>
          </a>
        </nav>

        <!-- Cart Button -->
        <div id="header-cart-container"></div>
      </div>
    </header>

    <!-- Main Content Sections -->
    <main>
      <!-- Hero Section -->
      <section id="hero" class="relative overflow-hidden bg-stone-950 py-8 lg:py-14 border-b border-stone-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <!-- Hero Text -->
            <div class="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-800/60 text-amber-300 text-xs font-semibold uppercase tracking-wider">
                ${getIcon('flame', 'w-3.5 h-3.5 text-amber-400')}
                <span>Churrasco Artesanal na Brasa</span>
              </div>
              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-100 tracking-tight leading-tight uppercase font-display">
                O Ponto Supremo da <span class="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">Picanha & Espetos</span>
              </h1>
              <p class="text-stone-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Espetos suculentos, jantares completos com feijão tropeiro e mandioca na manteiga, porções e o exclusivo <strong class="text-amber-400 font-semibold">Monte Seu Prato</strong>. Tudo feito com carnes nobres e entregue rápido na sua casa.
              </p>
              <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <a href="#cardapio" class="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-amber-950/50 transition-all duration-200 active:scale-95 text-sm">
                  ${getIcon('utensils', 'w-4 h-4')}
                  <span>Ver Cardápio Completo</span>
                </a>
                <button id="hero-btn-monte-prato" type="button" class="w-full sm:w-auto flex items-center justify-center gap-2 bg-stone-900/90 hover:bg-stone-800 text-amber-400 border border-amber-500/40 hover:border-amber-400 font-bold py-3.5 px-6 rounded-xl transition-all duration-200 active:scale-95 text-sm cursor-pointer">
                  ${getIcon('sliders', 'w-4 h-4')}
                  <span>Monte Seu Prato</span>
                </button>
              </div>
              <!-- Pills -->
              <div class="grid grid-cols-3 gap-3 pt-4 border-t border-stone-800/80">
                <div class="flex items-center gap-2 text-stone-300 text-xs">
                  <div class="w-7 h-7 rounded-lg bg-amber-950/80 border border-amber-800/40 flex items-center justify-center shrink-0">
                    ${getIcon('flame', 'w-3.5 h-3.5 text-amber-400')}
                  </div>
                  <span class="font-medium">100% na Brasa</span>
                </div>
                <div class="flex items-center gap-2 text-stone-300 text-xs">
                  <div class="w-7 h-7 rounded-lg bg-amber-950/80 border border-amber-800/40 flex items-center justify-center shrink-0">
                    ${getIcon('chef-hat', 'w-3.5 h-3.5 text-amber-400')}
                  </div>
                  <span class="font-medium">Feito na Hora</span>
                </div>
                <div class="flex items-center gap-2 text-stone-300 text-xs">
                  <div class="w-7 h-7 rounded-lg bg-amber-950/80 border border-amber-800/40 flex items-center justify-center shrink-0">
                    ${getIcon('shield-check', 'w-3.5 h-3.5 text-amber-400')}
                  </div>
                  <span class="font-medium">Pedido Fácil</span>
                </div>
              </div>
            </div>

            <!-- Hero Carousel Slide Container -->
            <div class="lg:col-span-6 relative select-none" id="hero-carousel-container">
              <!-- Rendered dynamically -->
            </div>
          </div>
        </div>
      </section>

      <!-- Menu Section with Search, Categories & Cards -->
      <section id="cardapio" class="py-12 bg-stone-950">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <!-- Section Header & Search -->
          <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-stone-800/80 pb-6">
            <div>
              <div class="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                ${getIcon('utensils', 'w-3.5 h-3.5')}
                <span>Sabores Incomparáveis</span>
              </div>
              <h2 class="text-3xl sm:text-4xl font-extrabold text-stone-100 uppercase tracking-tight font-display">
                Cardápio NaBrasa
              </h2>
            </div>
            <!-- Search Bar -->
            <div class="w-full md:w-80 relative">
              <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                ${getIcon('search', 'w-4 h-4')}
              </div>
              <input
                id="search-input"
                type="text"
                value="${searchQuery}"
                placeholder="Buscar por prato ou ingrediente..."
                class="w-full bg-stone-900 border border-stone-800 rounded-xl pl-10 pr-10 py-2.5 text-sm text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              />
              ${
                searchQuery
                  ? `<button id="search-clear-btn" type="button" class="absolute inset-y-0 right-0 pr-3 flex items-center text-stone-400 hover:text-stone-200">
                      ${getIcon('x', 'w-4 h-4')}
                    </button>`
                  : ''
              }
            </div>
          </div>

          <!-- Category Navigation Pills -->
          <div class="overflow-x-auto scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            <div id="category-pills-container" class="flex items-center gap-2 min-w-max pb-2">
              <!-- Rendered dynamically -->
            </div>
          </div>

          <!-- Dishes Grid Container -->
          <div id="dishes-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Rendered dynamically -->
          </div>
        </div>
      </section>

      <!-- Barbecue Quality Tips Section -->
      <section class="py-12 bg-stone-900/60 border-t border-stone-800/80">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div class="text-center max-w-2xl mx-auto space-y-2">
            <div class="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider">
              ${getIcon('flame', 'w-4 h-4')}
              <span>Tradição & Qualidade</span>
            </div>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-stone-100 uppercase tracking-tight font-display">
              Segredos da Nossa Brasa
            </h3>
            <p class="text-stone-400 text-sm">
              Cada detalhe do nosso preparo é planejado para entregar a carne no ponto perfeito, suculenta e com aroma inconfundível de carvão de eucalipto.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div class="bg-stone-900/80 border border-stone-800 p-6 rounded-2xl space-y-3">
              <div class="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-800/50 flex items-center justify-center text-amber-400">
                ${getIcon('flame', 'w-5 h-5')}
              </div>
              <h4 class="text-lg font-bold text-stone-200 font-display uppercase">Ponto e Selagem</h4>
              <p class="text-xs text-stone-400 leading-relaxed">
                Trabalhamos com fogo alto inicial para selar as fibras da carne e manter toda a suculência interna, garantindo maciez extraordinária.
              </p>
            </div>
            <div class="bg-stone-900/80 border border-stone-800 p-6 rounded-2xl space-y-3">
              <div class="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-800/50 flex items-center justify-center text-amber-400">
                ${getIcon('chef-hat', 'w-5 h-5')}
              </div>
              <h4 class="text-lg font-bold text-stone-200 font-display uppercase">Tempero Secreto</h4>
              <p class="text-xs text-stone-400 leading-relaxed">
                Sal grosso especial combinado com especiarias sutis que realçam o sabor autêntico de cada corte sem mascarar o sabor da carne nobre.
              </p>
            </div>
            <div class="bg-stone-900/80 border border-stone-800 p-6 rounded-2xl space-y-3">
              <div class="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-800/50 flex items-center justify-center text-amber-400">
                ${getIcon('shield-check', 'w-5 h-5')}
              </div>
              <h4 class="text-lg font-bold text-stone-200 font-display uppercase">Acompanhamentos Frescos</h4>
              <p class="text-xs text-stone-400 leading-relaxed">
                Feijão tropeiro preparado diariamente, mandioca derretendo na manteiga de garrafa e molho verde artesanal da casa.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer id="info-section" class="bg-stone-950 border-t border-stone-800/80 py-12 text-stone-400 text-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-stone-800">
          <div class="space-y-3">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center text-stone-950 font-black">
                NB
              </div>
              <span class="text-xl font-bold font-display uppercase text-stone-200">${RESTAURANT_INFO.name}</span>
            </div>
            <p class="text-xs text-stone-400 leading-relaxed">${RESTAURANT_INFO.tagline}. O melhor churrasco e delivery da região.</p>
            <p class="text-xs text-stone-500">CNPJ: 00.000.000/0001-00</p>
          </div>
          <div class="space-y-2">
            <h4 class="text-xs font-bold uppercase tracking-wider text-stone-200 mb-3 font-display">Horário & Atendimento</h4>
            <p class="text-xs text-stone-300 flex items-center gap-2">
              ${getIcon('clock', 'w-4 h-4 text-amber-500 shrink-0')}
              <span>${RESTAURANT_INFO.hours}</span>
            </p>
            <p class="text-xs text-stone-300 flex items-center gap-2 pt-1">
              ${getIcon('map-pin', 'w-4 h-4 text-amber-500 shrink-0')}
              <span>${RESTAURANT_INFO.address}</span>
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="text-xs font-bold uppercase tracking-wider text-stone-200 mb-3 font-display">Formas de Pagamento</h4>
            <div class="flex flex-wrap gap-2 text-[11px] text-stone-300">
              <span class="bg-stone-900 border border-stone-800 px-2.5 py-1 rounded-md">Pix Instantâneo</span>
              <span class="bg-stone-900 border border-stone-800 px-2.5 py-1 rounded-md">Cartão de Crédito</span>
              <span class="bg-stone-900 border border-stone-800 px-2.5 py-1 rounded-md">Cartão de Débito</span>
              <span class="bg-stone-900 border border-stone-800 px-2.5 py-1 rounded-md">Dinheiro</span>
              <span class="bg-stone-900 border border-stone-800 px-2.5 py-1 rounded-md">Vale Refeição</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 text-center sm:text-left">
          <p>© ${new Date().getFullYear()} ${RESTAURANT_INFO.name}. Todos os direitos reservados.</p>
          <div class="flex items-center gap-4">
            <a href="https://wa.me/${RESTAURANT_INFO.whatsappNumber}" target="_blank" rel="noopener noreferrer" class="hover:text-amber-400 transition-colors flex items-center gap-1">
              ${getIcon('phone', 'w-3 h-3')} WhatsApp do Restaurante
            </a>
          </div>
        </div>
      </div>
    </footer>

    <!-- Modals and Drawer Container -->
    <div id="modals-root"></div>
  `;

  // Initialize components
  renderHeaderNav();
  renderHeroCarousel();
  renderCategories();
  renderDishesGrid();
  renderModals();

  // Search input binding
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase();
      renderDishesGrid();
      const clearBtn = document.getElementById('search-clear-btn');
      if (clearBtn) {
        clearBtn.style.display = searchQuery ? 'flex' : 'none';
      }
    });
  }

  // Buttons to open Monte seu prato
  const navMontePrato = document.getElementById('nav-btn-monte-prato');
  if (navMontePrato) {
    navMontePrato.addEventListener('click', () => {
      openCustomDishModal();
    });
  }
  const heroMontePrato = document.getElementById('hero-btn-monte-prato');
  if (heroMontePrato) {
    heroMontePrato.addEventListener('click', () => {
      openCustomDishModal();
    });
  }
}

// --- Header Cart Button Component ---
function renderHeaderNav() {
  const container = document.getElementById('header-cart-container');
  if (!container) return;

  const count = getCartTotalCount();
  const subtotal = getCartSubtotal();

  container.innerHTML = `
    <button
      id="open-cart-btn"
      type="button"
      class="relative flex items-center gap-2.5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-bold px-4 py-2.5 rounded-xl shadow-md shadow-amber-950/40 transition-all duration-200 active:scale-95 cursor-pointer text-sm"
    >
      ${getIcon('shopping-bag', 'w-5 h-5')}
      <span class="hidden sm:inline">Ver Pedido</span>
      <span class="bg-stone-950 text-amber-400 font-extrabold text-xs px-2 py-0.5 rounded-full">
        ${count}
      </span>
      ${
        count > 0
          ? `<span class="hidden lg:inline font-mono font-bold text-stone-950 border-l border-amber-700/60 pl-2">
              ${formatCurrency(subtotal)}
            </span>`
          : ''
      }
    </button>
  `;

  document.getElementById('open-cart-btn')?.addEventListener('click', () => {
    isCartOpen = true;
    renderCartDrawer();
  });
}

// --- Hero Carousel Component ---
function renderHeroCarousel() {
  const container = document.getElementById('hero-carousel-container');
  if (!container) return;

  const currentSlide = HERO_SLIDES[activeSlideIndex];

  container.innerHTML = `
    <div class="relative rounded-3xl overflow-hidden border border-stone-800 bg-stone-900 shadow-2xl shadow-stone-950 aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] group">
      <img
        id="hero-slide-img"
        src="${resolveImgUrl(currentSlide.image)}"
        alt="${currentSlide.altText}"
        class="w-full h-full object-cover object-center transition-all duration-500"
        onerror="this.onerror=null; this.src='${resolveImgUrl('/images/churrasco.jpg')}';"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>

      <!-- Slide Information Overlay -->
      <div class="absolute bottom-0 inset-x-0 p-5 sm:p-7 space-y-2">
        <span class="inline-block px-3 py-1 rounded-full bg-amber-500 text-stone-950 text-xs font-extrabold uppercase tracking-wider">
          ${currentSlide.badge}
        </span>
        <h3 class="text-xl sm:text-2xl lg:text-3xl font-black text-stone-100 uppercase tracking-tight font-display drop-shadow">
          ${currentSlide.title}
        </h3>
        <p class="text-xs sm:text-sm text-stone-300 max-w-md drop-shadow line-clamp-2">
          ${currentSlide.subtitle}
        </p>
      </div>

      <!-- Navigation Arrows -->
      <button
        id="hero-prev-btn"
        type="button"
        class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-stone-950/80 hover:bg-stone-900 text-stone-200 border border-stone-700/80 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-all cursor-pointer"
        aria-label="Slide anterior"
      >
        ${getIcon('chevron-left', 'w-5 h-5')}
      </button>
      <button
        id="hero-next-btn"
        type="button"
        class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-stone-950/80 hover:bg-stone-900 text-stone-200 border border-stone-700/80 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-all cursor-pointer"
        aria-label="Próximo slide"
      >
        ${getIcon('chevron-right', 'w-5 h-5')}
      </button>

      <!-- Indicator Dots -->
      <div class="absolute top-4 right-4 flex items-center gap-1.5 bg-stone-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-800">
        ${HERO_SLIDES.map(
          (_, idx) => `
          <button
            type="button"
            data-slide-index="${idx}"
            class="hero-dot w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
              idx === activeSlideIndex ? 'bg-amber-500 w-6' : 'bg-stone-600 hover:bg-stone-400'
            }"
            aria-label="Ir para slide ${idx + 1}"
          ></button>
        `
        ).join('')}
      </div>
    </div>
  `;

  // Attach slide navigation events
  document.getElementById('hero-prev-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    activeSlideIndex = (activeSlideIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
    renderHeroCarousel();
  });
  document.getElementById('hero-next-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    activeSlideIndex = (activeSlideIndex + 1) % HERO_SLIDES.length;
    renderHeroCarousel();
  });

  document.querySelectorAll('.hero-dot').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const idx = parseInt(e.currentTarget.getAttribute('data-slide-index'), 10);
      activeSlideIndex = idx;
      renderHeroCarousel();
    });
  });

  // Touch Swipe Support
  let touchStartX = 0;
  let touchEndX = 0;
  const carouselEl = container.firstElementChild;
  if (carouselEl) {
    carouselEl.addEventListener(
      'touchstart',
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true }
    );
    carouselEl.addEventListener(
      'touchend',
      (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 40) {
          if (diff > 0) {
            // swipe left -> next
            activeSlideIndex = (activeSlideIndex + 1) % HERO_SLIDES.length;
          } else {
            // swipe right -> prev
            activeSlideIndex = (activeSlideIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
          }
          renderHeroCarousel();
        }
      },
      { passive: true }
    );
  }

  // Restart autoplay
  if (slideInterval) clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    activeSlideIndex = (activeSlideIndex + 1) % HERO_SLIDES.length;
    renderHeroCarousel();
  }, 5000);
}

// --- Categories Pills Component ---
function renderCategories() {
  const container = document.getElementById('category-pills-container');
  if (!container) return;

  container.innerHTML = CATEGORIES.map((cat) => {
    const isActive = activeCategory === cat.id;
    return `
      <button
        type="button"
        data-cat-id="${cat.id}"
        class="category-pill flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${
          isActive
            ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-950/40'
            : 'bg-stone-900/90 text-stone-300 hover:bg-stone-800 hover:text-stone-100 border border-stone-800'
        }"
      >
        ${getIcon(cat.id === 'espetos' ? 'flame' : cat.id === 'bebidas' ? 'wine' : cat.id === 'jantar' ? 'chef-hat' : cat.id === 'monte_seu_prato' ? 'sliders' : 'utensils', 'w-4 h-4')}
        <span>${cat.label}</span>
      </button>
    `;
  }).join('');

  document.querySelectorAll('.category-pill').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const catId = e.currentTarget.getAttribute('data-cat-id');
      activeCategory = catId;
      renderCategories();
      renderDishesGrid();
    });
  });
}

// --- Dishes Grid Component ---
function renderDishesGrid() {
  const container = document.getElementById('dishes-grid');
  if (!container) return;

  // Filter items
  let filtered = MENU_ITEMS.filter((item) => {
    if (activeCategory !== 'todos' && item.categoryId !== activeCategory) {
      return false;
    }
    if (searchQuery) {
      const matchTitle = item.title.toLowerCase().includes(searchQuery);
      const matchDesc = item.defaultDescription.toLowerCase().includes(searchQuery);
      const matchVariants = item.variants.some((v) =>
        v.name.toLowerCase().includes(searchQuery) || v.description.toLowerCase().includes(searchQuery)
      );
      if (!matchTitle && !matchDesc && !matchVariants) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-16 bg-stone-900/40 rounded-3xl border border-stone-800/80 space-y-3">
        <div class="w-14 h-14 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center mx-auto text-stone-500">
          ${getIcon('search', 'w-6 h-6')}
        </div>
        <h4 class="text-lg font-bold text-stone-300">Nenhum prato encontrado</h4>
        <p class="text-xs text-stone-400">Tente buscar por outro termo ou selecione a categoria "Todos os Pratos".</p>
      </div>
    `;
    return;
  }

  let cardsHtml = '';

  // Promotional Banner for "Monte Seu Prato" if in 'todos' or 'monte_seu_prato'
  if (activeCategory === 'todos' || activeCategory === 'monte_seu_prato') {
    cardsHtml += `
      <div class="relative bg-gradient-to-br from-amber-950/40 via-stone-900 to-stone-950 rounded-2xl border-2 border-dashed border-amber-600/40 p-6 flex flex-col justify-between overflow-hidden group hover:border-amber-500/70 transition-all">
        <div class="space-y-3">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-stone-950 text-xs font-black uppercase tracking-wider">
            ${getIcon('sliders', 'w-3.5 h-3.5')}
            <span>Exclusivo NaBrasa</span>
          </div>
          <h3 class="text-2xl font-black text-stone-100 font-display uppercase tracking-tight">
            Monte Seu Prato Artesanal
          </h3>
          <p class="text-xs text-stone-300 leading-relaxed">
            Monte a sua combinação ideal: escolha a massa (Espaguete ou Penne), o molho artesanal da casa e selecione adicionais como Bacon crocante, Calabresa, Cheddar, Queijo e mais!
          </p>
        </div>
        <div class="pt-6">
          <button
            id="card-btn-open-monte-prato"
            type="button"
            class="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-bold py-3 px-4 rounded-xl shadow-lg shadow-amber-950/50 transition-all active:scale-95 cursor-pointer text-sm"
          >
            ${getIcon('sliders', 'w-4 h-4')}
            <span>Começar a Montar</span>
          </button>
        </div>
      </div>
    `;
  }

  // Promotional Banner for "Catálogo de Bebidas" if in 'todos' or 'bebidas'
  if (activeCategory === 'todos' || activeCategory === 'bebidas') {
    cardsHtml += `
      <div class="relative bg-gradient-to-br from-stone-900 via-stone-900/90 to-stone-950 rounded-2xl border border-stone-800 p-6 flex flex-col justify-between overflow-hidden group hover:border-amber-600/50 transition-all">
        <div class="space-y-3">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-bold uppercase tracking-wider">
            ${getIcon('wine', 'w-3.5 h-3.5')}
            <span>Bebidas Geladíssimas</span>
          </div>
          <h3 class="text-2xl font-black text-stone-100 font-display uppercase tracking-tight">
            Cervejas, Refris & Sucos
          </h3>
          <p class="text-xs text-stone-300 leading-relaxed">
            Temos Heineken, Amstel, Budweiser, Litrões de Brahma e Skol, Coca-Cola original, Guaraná Antarctica, Sucos e Água Mineral.
          </p>
        </div>
        <div class="pt-6">
          <button
            id="card-btn-open-drinks-catalog"
            type="button"
            class="w-full flex items-center justify-center gap-2 bg-stone-800 hover:bg-stone-700 text-stone-100 border border-stone-700 font-bold py-3 px-4 rounded-xl transition-all active:scale-95 cursor-pointer text-sm"
          >
            ${getIcon('wine', 'w-4 h-4 text-amber-400')}
            <span>Ver Todas as Bebidas</span>
          </button>
        </div>
      </div>
    `;
  }

  // Helper to scroll horizontal track without moving window vertical scroll
  function scrollTrackToActive(track, activeBtn, smooth = true) {
    if (!track || !activeBtn) return;
    const targetLeft = activeBtn.offsetLeft - (track.clientWidth - activeBtn.clientWidth) / 2;
    track.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: smooth ? 'smooth' : 'auto',
    });
  }

  // Generate HTML for a single dish card
  function renderDishCardHtml(dish) {
    const selectedVariantIdx = dishVariantsState[dish.id] || 0;
    const currentVariant = dish.variants[selectedVariantIdx] || dish.variants[0];
    const notesValue = dishNotesState[dish.id] || '';

    return `
      <div class="dish-card bg-stone-900/90 rounded-2xl border border-stone-800/80 overflow-hidden flex flex-col justify-between group hover:border-stone-700 transition-all duration-300" data-dish-id="${dish.id}">
        <div>
          <!-- Image Container with Carousel Navigation -->
          <div class="dish-img-container relative aspect-[16/10] overflow-hidden bg-stone-950 select-none group/img" data-dish-id="${dish.id}">
            <img
              src="${resolveImgUrl(currentVariant.image || dish.defaultImage)}"
              alt="${dish.title} - ${currentVariant.name}"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onerror="this.onerror=null; this.src='${resolveImgUrl('/images/churrasco.jpg')}';"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-stone-950/20 pointer-events-none"></div>

            <!-- Badges -->
            ${
              dish.badge || currentVariant.badge
                ? `<span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-amber-500 text-stone-950 text-[10px] font-black uppercase tracking-wider shadow">
                    ${currentVariant.badge || dish.badge}
                  </span>`
                : ''
            }

            ${
              dish.variants.length > 1
                ? `
                <!-- Slide Counter Badge -->
                <span class="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-stone-950/85 backdrop-blur-sm border border-stone-700/70 text-amber-300 text-[10px] font-bold font-mono tracking-wider shadow">
                  ${selectedVariantIdx + 1}/${dish.variants.length}
                </span>

                <!-- Image Carousel Navigation Arrows -->
                <button
                  type="button"
                  class="dish-img-prev-btn absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-stone-950/85 hover:bg-amber-600 text-stone-200 hover:text-white border border-stone-700/70 flex items-center justify-center transition-all opacity-85 group-hover/img:opacity-100 hover:scale-110 active:scale-95 cursor-pointer shadow-lg z-10"
                  data-dish-id="${dish.id}"
                  aria-label="Opção anterior"
                  title="Opção anterior"
                >
                  ${getIcon('chevron-left', 'w-4 h-4')}
                </button>
                <button
                  type="button"
                  class="dish-img-next-btn absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-stone-950/85 hover:bg-amber-600 text-stone-200 hover:text-white border border-stone-700/70 flex items-center justify-center transition-all opacity-85 group-hover/img:opacity-100 hover:scale-110 active:scale-95 cursor-pointer shadow-lg z-10"
                  data-dish-id="${dish.id}"
                  aria-label="Próxima opção"
                  title="Próxima opção"
                >
                  ${getIcon('chevron-right', 'w-4 h-4')}
                </button>
              `
                : ''
            }
          </div>

          <!-- Content -->
          <div class="p-5 space-y-3">
            <div>
              <h3 class="text-xl font-black text-stone-100 font-display uppercase tracking-tight">
                ${dish.title}
              </h3>
              <p class="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                ${currentVariant.description || dish.defaultDescription}
              </p>
            </div>

            <!-- Options Carousel (when dish has more than 1 option) -->
            ${
              dish.variants.length > 1
                ? `
                <div class="space-y-2 pt-1">
                  <!-- Carousel Controls Header -->
                  <div class="flex items-center justify-between">
                    <span class="text-[11px] font-extrabold text-stone-300 uppercase tracking-wider flex items-center gap-1.5">
                      <span class="text-amber-500">${getIcon('sliders', 'w-3.5 h-3.5')}</span>
                      Opções disponíveis (${dish.variants.length})
                    </span>
                    <div class="flex items-center gap-1.5">
                      <button
                        type="button"
                        class="dish-track-prev-btn w-6 h-6 rounded-md bg-stone-800 hover:bg-amber-600 text-stone-300 hover:text-white border border-stone-700/60 flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-90"
                        data-dish-id="${dish.id}"
                        title="Opção anterior"
                        aria-label="Opção anterior"
                      >
                        ${getIcon('chevron-left', 'w-3.5 h-3.5')}
                      </button>
                      <span class="text-[10px] font-mono font-bold text-amber-400 bg-stone-950/90 px-1.5 py-0.5 rounded border border-stone-800">
                        ${selectedVariantIdx + 1}/${dish.variants.length}
                      </span>
                      <button
                        type="button"
                        class="dish-track-next-btn w-6 h-6 rounded-md bg-stone-800 hover:bg-amber-600 text-stone-300 hover:text-white border border-stone-700/60 flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-90"
                        data-dish-id="${dish.id}"
                        title="Próxima opção"
                        aria-label="Próxima opção"
                      >
                        ${getIcon('chevron-right', 'w-3.5 h-3.5')}
                      </button>
                    </div>
                  </div>

                  <!-- Horizontal Options Carousel Track -->
                  <div
                    id="variant-carousel-${dish.id}"
                    class="variant-carousel-track relative flex items-stretch gap-2 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-1 px-0.5"
                    data-dish-id="${dish.id}"
                  >
                    ${dish.variants
                      .map((v, vIdx) => {
                        const isVarActive = vIdx === selectedVariantIdx;
                        return `
                        <button
                          type="button"
                          class="variant-btn flex-shrink-0 w-[130px] sm:w-[138px] snap-center text-left p-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer flex flex-col justify-between group/opt ${
                            isVarActive
                              ? 'bg-gradient-to-b from-amber-950/80 to-stone-900 border-amber-500 text-amber-200 shadow-md shadow-amber-950/50 ring-1 ring-amber-500/40'
                              : 'bg-stone-950/70 border-stone-800/90 text-stone-400 hover:border-stone-700 hover:text-stone-200 hover:bg-stone-900/60'
                          }"
                          data-dish-id="${dish.id}"
                          data-variant-idx="${vIdx}"
                          title="${v.name}"
                        >
                          <div class="flex items-start justify-between gap-1 w-full">
                            <span class="truncate font-bold text-[11px] ${isVarActive ? 'text-amber-300' : 'text-stone-300 group-hover/opt:text-stone-100'}">
                              ${v.name}
                            </span>
                            ${isVarActive ? `<span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1 shadow-sm shadow-amber-400"></span>` : ''}
                          </div>
                          <div class="mt-2 flex items-baseline justify-between w-full pt-1 border-t ${isVarActive ? 'border-amber-500/30' : 'border-stone-800/40'}">
                            <span class="text-[9px] text-stone-500 uppercase">Preço</span>
                            <span class="text-xs font-black font-display ${isVarActive ? 'text-amber-400' : 'text-stone-300'}">
                              ${formatCurrency(v.price)}
                            </span>
                          </div>
                        </button>
                      `;
                      })
                      .join('')}
                  </div>

                  <!-- Dot Indicators -->
                  <div class="flex items-center justify-center gap-1 pt-0.5">
                    ${dish.variants
                      .map(
                        (_, dotIdx) => `
                      <button
                        type="button"
                        class="variant-dot-btn h-1 rounded-full transition-all duration-300 cursor-pointer ${
                          dotIdx === selectedVariantIdx ? 'w-5 bg-amber-500' : 'w-1 bg-stone-700 hover:bg-stone-500'
                        }"
                        data-dish-id="${dish.id}"
                        data-variant-idx="${dotIdx}"
                        aria-label="Ir para opção ${dotIdx + 1}"
                      ></button>
                    `
                      )
                      .join('')}
                  </div>
                </div>
              `
                : ''
            }

            <!-- Notes input (Kitchen instructions) -->
            <div class="pt-1">
              <input
                type="text"
                class="dish-notes-input w-full bg-stone-950/80 border border-stone-800/80 rounded-lg px-3 py-1.5 text-xs text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-amber-500"
                placeholder="Observação (ex: carne bem passada, sem farinha...)"
                data-dish-id="${dish.id}"
                value="${notesValue}"
              />
            </div>
          </div>
        </div>

        <!-- Footer / Action -->
        <div class="p-5 pt-0 border-t border-stone-800/60 mt-3 flex items-center justify-between gap-4">
          <div>
            <span class="text-[10px] text-stone-500 uppercase block font-medium">Valor Unitário</span>
            <span class="text-2xl font-black text-amber-400 font-display">
              ${formatCurrency(currentVariant.price)}
            </span>
          </div>
          <button
            type="button"
            class="add-dish-btn flex items-center gap-1.5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-bold py-2.5 px-4 rounded-xl shadow-md shadow-amber-950/40 transition-all active:scale-95 cursor-pointer text-xs uppercase tracking-wider"
            data-dish-id="${dish.id}"
          >
            ${getIcon('plus', 'w-4 h-4')}
            <span>Adicionar</span>
          </button>
        </div>
      </div>
    `;
  }

  // Bind all interactive events for a single dish card
  function bindDishCardEvents(cardEl) {
    const dishId = cardEl.getAttribute('data-dish-id');
    const dish = MENU_ITEMS.find((d) => d.id === dishId);
    if (!dish) return;

    // Image Prev/Next buttons
    cardEl.querySelectorAll('.dish-img-prev-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const current = dishVariantsState[dishId] || 0;
        selectDishVariant(dishId, current - 1);
      });
    });

    cardEl.querySelectorAll('.dish-img-next-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const current = dishVariantsState[dishId] || 0;
        selectDishVariant(dishId, current + 1);
      });
    });

    // Track Prev/Next buttons
    cardEl.querySelectorAll('.dish-track-prev-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const current = dishVariantsState[dishId] || 0;
        selectDishVariant(dishId, current - 1);
      });
    });

    cardEl.querySelectorAll('.dish-track-next-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const current = dishVariantsState[dishId] || 0;
        selectDishVariant(dishId, current + 1);
      });
    });

    // Variant options buttons
    cardEl.querySelectorAll('.variant-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const varIdx = parseInt(e.currentTarget.getAttribute('data-variant-idx'), 10);
        selectDishVariant(dishId, varIdx);
      });
    });

    // Dot indicators
    cardEl.querySelectorAll('.variant-dot-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const varIdx = parseInt(e.currentTarget.getAttribute('data-variant-idx'), 10);
        selectDishVariant(dishId, varIdx);
      });
    });

    // Touch swipe on card image
    const imgEl = cardEl.querySelector('.dish-img-container');
    if (imgEl && dish.variants.length > 1) {
      let touchStartX = 0;
      imgEl.addEventListener(
        'touchstart',
        (e) => {
          touchStartX = e.changedTouches[0].screenX;
        },
        { passive: true }
      );
      imgEl.addEventListener(
        'touchend',
        (e) => {
          const touchEndX = e.changedTouches[0].screenX;
          const diff = touchEndX - touchStartX;
          if (Math.abs(diff) > 40) {
            const current = dishVariantsState[dishId] || 0;
            if (diff < 0) {
              selectDishVariant(dishId, current + 1);
            } else {
              selectDishVariant(dishId, current - 1);
            }
          }
        },
        { passive: true }
      );
    }

    // Notes input
    const notesInput = cardEl.querySelector('.dish-notes-input');
    if (notesInput) {
      notesInput.addEventListener('input', (e) => {
        dishNotesState[dishId] = e.currentTarget.value;
      });
    }

    // Add to cart button
    const addBtn = cardEl.querySelector('.add-dish-btn');
    if (addBtn) {
      addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const varIdx = dishVariantsState[dish.id] || 0;
        const variant = dish.variants[varIdx] || dish.variants[0];
        const notes = dishNotesState[dish.id] || '';

        const cartItem = {
          id: `${dish.id}-${variant.id}-${Date.now()}`,
          menuItemId: dish.id,
          variantId: variant.id,
          title: dish.title,
          variantName: variant.name,
          unitPrice: variant.price,
          quantity: 1,
          imageUrl: resolveImgUrl(variant.image || dish.defaultImage),
          notes: notes.trim() || undefined,
        };

        addToCart(cartItem);

        // Visual feedback on button
        const originalHtml = addBtn.innerHTML;
        addBtn.innerHTML = `${getIcon('check', 'w-4 h-4')} <span>Adicionado!</span>`;
        addBtn.classList.add('bg-emerald-500', 'text-white');
        setTimeout(() => {
          if (addBtn) {
            addBtn.innerHTML = originalHtml;
            addBtn.classList.remove('bg-emerald-500', 'text-white');
          }
        }, 1000);
      });
    }
  }

  // Update a single dish card in-place without touching page scroll or other cards
  function selectDishVariant(dishId, newIdx) {
    const dish = MENU_ITEMS.find((d) => d.id === dishId);
    if (!dish || !dish.variants.length) return;
    const count = dish.variants.length;
    dishVariantsState[dishId] = (newIdx + count) % count;

    const currentCard = container.querySelector(`.dish-card[data-dish-id="${dishId}"]`);
    if (!currentCard) return;

    const temp = document.createElement('div');
    temp.innerHTML = renderDishCardHtml(dish).trim();
    const newCard = temp.firstElementChild;
    if (!newCard) return;

    currentCard.replaceWith(newCard);
    bindDishCardEvents(newCard);

    const track = newCard.querySelector('.variant-carousel-track');
    if (track) {
      const activeBtn = track.querySelector(`[data-variant-idx="${dishVariantsState[dishId]}"]`);
      if (activeBtn) {
        scrollTrackToActive(track, activeBtn, true);
      }
    }
  }

  // Render individual dish cards into container
  filtered.forEach((dish) => {
    cardsHtml += renderDishCardHtml(dish);
  });

  container.innerHTML = cardsHtml;

  // Bind events for all rendered cards
  container.querySelectorAll('.dish-card').forEach((card) => {
    bindDishCardEvents(card);
  });

  // Initial horizontal alignment of active variant cards inside their local track (without window scroll)
  container.querySelectorAll('.variant-carousel-track').forEach((track) => {
    const dishId = track.getAttribute('data-dish-id');
    const activeIdx = dishVariantsState[dishId] || 0;
    const activeBtn = track.querySelector(`[data-variant-idx="${activeIdx}"]`);
    if (activeBtn) {
      scrollTrackToActive(track, activeBtn, false);
    }
  });

  // Bind Banner Buttons
  document.getElementById('card-btn-open-monte-prato')?.addEventListener('click', () => {
    openCustomDishModal();
  });
  document.getElementById('card-btn-open-drinks-catalog')?.addEventListener('click', () => {
    openDrinksCatalogModal();
  });
}

// --- Custom Dish Modal ---
function openCustomDishModal() {
  isCustomDishOpen = true;
  customPlateState = {
    massa: CUSTOM_PLATE_OPTIONS.massas[0],
    molho: CUSTOM_PLATE_OPTIONS.molhos[0],
    adicionais: [],
    quantity: 1,
    notes: '',
  };
  renderCustomDishModal();
}

function renderCustomDishModal() {
  const container = document.getElementById('modals-root');
  if (!container) return;

  if (!isCustomDishOpen) {
    const existing = document.getElementById('custom-dish-modal');
    if (existing) existing.remove();
    return;
  }

  // Calculate price
  const basePrice = customPlateState.massa.price + customPlateState.molho.price;
  const adicionaisPrice = customPlateState.adicionais.reduce((sum, item) => sum + item.price, 0);
  const unitPrice = basePrice + adicionaisPrice;
  const totalPrice = unitPrice * customPlateState.quantity;

  const modalHtml = `
    <div id="custom-dish-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div class="bg-stone-900 border border-stone-800 rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
        <!-- Header -->
        <div class="p-5 border-b border-stone-800 flex items-center justify-between bg-stone-950">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              ${getIcon('sliders', 'w-5 h-5')}
            </div>
            <div>
              <h3 class="text-xl font-bold text-stone-100 font-display uppercase">Monte Seu Prato</h3>
              <p class="text-xs text-stone-400">Escolha a massa, o molho artesanal e seus adicionais preferidos</p>
            </div>
          </div>
          <button id="close-custom-dish-btn" type="button" class="text-stone-400 hover:text-stone-200 p-2 rounded-lg cursor-pointer">
            ${getIcon('x', 'w-5 h-5')}
          </button>
        </div>

        <!-- Scrollable Options Body -->
        <div class="p-6 overflow-y-auto space-y-6">
          <!-- Step 1: Massa -->
          <div class="space-y-3">
            <label class="text-xs font-bold text-stone-300 uppercase tracking-wider block">
              1. Escolha a Massa:
            </label>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              ${CUSTOM_PLATE_OPTIONS.massas
                .map((m) => {
                  const isSelected = customPlateState.massa.id === m.id;
                  return `
                  <button
                    type="button"
                    class="massa-select-btn flex items-center justify-between p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-950/60 border-amber-500 text-amber-300'
                        : 'bg-stone-950/60 border-stone-800 text-stone-400 hover:border-stone-700 hover:text-stone-200'
                    }"
                    data-massa-id="${m.id}"
                  >
                    <span>${m.name}</span>
                    <span class="text-amber-400 font-bold">${formatCurrency(m.price)}</span>
                  </button>
                `;
                })
                .join('')}
            </div>
          </div>

          <!-- Step 2: Molho -->
          <div class="space-y-3">
            <label class="text-xs font-bold text-stone-300 uppercase tracking-wider block">
              2. Escolha o Molho:
            </label>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              ${CUSTOM_PLATE_OPTIONS.molhos
                .map((molho) => {
                  const isSelected = customPlateState.molho.id === molho.id;
                  return `
                  <button
                    type="button"
                    class="molho-select-btn flex items-center justify-between p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-950/60 border-amber-500 text-amber-300'
                        : 'bg-stone-950/60 border-stone-800 text-stone-400 hover:border-stone-700 hover:text-stone-200'
                    }"
                    data-molho-id="${molho.id}"
                  >
                    <span>${molho.name}</span>
                    <span class="text-amber-400 font-bold">${formatCurrency(molho.price)}</span>
                  </button>
                `;
                })
                .join('')}
            </div>
          </div>

          <!-- Step 3: Adicionais -->
          <div class="space-y-3">
            <label class="text-xs font-bold text-stone-300 uppercase tracking-wider block">
              3. Adicionais Opcionais:
            </label>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
              ${CUSTOM_PLATE_OPTIONS.adicionais
                .map((add) => {
                  const isChecked = customPlateState.adicionais.some((a) => a.id === add.id);
                  return `
                  <button
                    type="button"
                    class="add-select-btn flex items-center justify-between p-2.5 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer ${
                      isChecked
                        ? 'bg-amber-950/60 border-amber-500/80 text-amber-300'
                        : 'bg-stone-950/60 border-stone-800 text-stone-400 hover:border-stone-700 hover:text-stone-200'
                    }"
                    data-add-id="${add.id}"
                  >
                    <span class="truncate">${add.name}</span>
                    <span class="text-[10px] text-amber-400 font-bold shrink-0 ml-1">+${formatCurrency(add.price)}</span>
                  </button>
                `;
                })
                .join('')}
            </div>
          </div>

          <!-- Step 4: Quantidade e Observação -->
          <div class="space-y-3 pt-2 border-t border-stone-800">
            <div class="flex items-center justify-between">
              <label class="text-xs font-bold text-stone-300 uppercase tracking-wider">Quantidade:</label>
              <div class="flex items-center gap-3 bg-stone-950 px-3 py-1.5 rounded-xl border border-stone-800">
                <button id="custom-qty-minus" type="button" class="text-stone-400 hover:text-stone-200 cursor-pointer">
                  ${getIcon('minus', 'w-3.5 h-3.5')}
                </button>
                <span class="font-bold text-stone-100 text-sm w-5 text-center">${customPlateState.quantity}</span>
                <button id="custom-qty-plus" type="button" class="text-stone-400 hover:text-stone-200 cursor-pointer">
                  ${getIcon('plus', 'w-3.5 h-3.5')}
                </button>
              </div>
            </div>
            <div>
              <input
                id="custom-notes-input"
                type="text"
                placeholder="Observações do prato (ex: molho bem quente, pouco sal...)"
                class="w-full bg-stone-950 border border-stone-800 text-xs rounded-xl px-3 py-2 text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-amber-500"
                value="${customPlateState.notes}"
              />
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="p-5 bg-stone-950 border-t border-stone-800 flex items-center justify-between gap-4">
          <div>
            <span class="text-[10px] text-stone-500 uppercase block font-medium">Valor Total</span>
            <span class="text-2xl font-black text-amber-400 font-display">
              ${formatCurrency(totalPrice)}
            </span>
          </div>
          <button
            id="add-custom-dish-to-cart-btn"
            type="button"
            class="flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-bold py-3 px-6 rounded-xl shadow-lg shadow-amber-950/50 transition-all active:scale-95 cursor-pointer text-sm"
          >
            ${getIcon('shopping-bag', 'w-4 h-4')}
            <span>Adicionar ao Pedido</span>
          </button>
        </div>
      </div>
    </div>
  `;

  let modalEl = document.getElementById('custom-dish-modal');
  if (!modalEl) {
    container.insertAdjacentHTML('beforeend', modalHtml);
    modalEl = document.getElementById('custom-dish-modal');
  } else {
    modalEl.outerHTML = modalHtml;
  }

  // Bindings
  document.getElementById('close-custom-dish-btn')?.addEventListener('click', () => {
    isCustomDishOpen = false;
    document.getElementById('custom-dish-modal')?.remove();
  });

  // Massa
  document.querySelectorAll('.massa-select-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-massa-id');
      const found = CUSTOM_PLATE_OPTIONS.massas.find((m) => m.id === id);
      if (found) customPlateState.massa = found;
      renderCustomDishModal();
    });
  });

  // Molho
  document.querySelectorAll('.molho-select-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-molho-id');
      const found = CUSTOM_PLATE_OPTIONS.molhos.find((m) => m.id === id);
      if (found) customPlateState.molho = found;
      renderCustomDishModal();
    });
  });

  // Adicionais
  document.querySelectorAll('.add-select-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-add-id');
      const exists = customPlateState.adicionais.some((a) => a.id === id);
      if (exists) {
        customPlateState.adicionais = customPlateState.adicionais.filter((a) => a.id !== id);
      } else {
        const found = CUSTOM_PLATE_OPTIONS.adicionais.find((a) => a.id === id);
        if (found) customPlateState.adicionais.push(found);
      }
      renderCustomDishModal();
    });
  });

  // Quantity
  document.getElementById('custom-qty-minus')?.addEventListener('click', () => {
    if (customPlateState.quantity > 1) {
      customPlateState.quantity -= 1;
      renderCustomDishModal();
    }
  });
  document.getElementById('custom-qty-plus')?.addEventListener('click', () => {
    customPlateState.quantity += 1;
    renderCustomDishModal();
  });

  // Notes
  document.getElementById('custom-notes-input')?.addEventListener('input', (e) => {
    customPlateState.notes = e.target.value;
  });

  // Add to cart
  document.getElementById('add-custom-dish-to-cart-btn')?.addEventListener('click', () => {
    const adicionaisNames = customPlateState.adicionais.map((a) => a.name);
    const cartItem = {
      id: `custom-plate-${Date.now()}`,
      menuItemId: 'monte_seu_prato',
      variantId: 'custom-plate',
      title: 'Monte Seu Prato',
      variantName: `${customPlateState.massa.name} com ${customPlateState.molho.name}`,
      unitPrice,
      quantity: customPlateState.quantity,
      imageUrl: resolveImgUrl('/images/monteseuprato1.png'),
      notes: customPlateState.notes.trim() || undefined,
      customDetails: {
        massa: customPlateState.massa.name,
        molho: customPlateState.molho.name,
        adicionais: adicionaisNames.length > 0 ? adicionaisNames : undefined,
      },
    };

    addToCart(cartItem);
    isCustomDishOpen = false;
    document.getElementById('custom-dish-modal')?.remove();
  });
}

// --- Drinks Catalog Modal ---
function openDrinksCatalogModal() {
  isDrinksModalOpen = true;
  activeDrinkCategory = 'todos';
  renderDrinksCatalogModal();
}

function renderDrinksCatalogModal() {
  const container = document.getElementById('modals-root');
  if (!container) return;

  if (!isDrinksModalOpen) {
    document.getElementById('drinks-catalog-modal')?.remove();
    return;
  }

  const DRINK_CATS = [
    { id: 'todos', label: 'Todas as Bebidas' },
    { id: 'cerveja-lata', label: 'Cervejas Lata' },
    { id: 'litrao', label: 'Litrão / 600ml' },
    { id: 'long-neck', label: 'Long Neck' },
    { id: 'refrigerante', label: 'Refrigerantes' },
    { id: 'agua-suco', label: 'Águas & Sucos' },
  ];

  const filteredDrinks = DRINKS_CATALOG.filter((d) => {
    if (activeDrinkCategory === 'todos') return true;
    return d.category === activeDrinkCategory;
  });

  const modalHtml = `
    <div id="drinks-catalog-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div class="bg-stone-900 border border-stone-800 rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
        <!-- Header -->
        <div class="p-5 border-b border-stone-800 flex items-center justify-between bg-stone-950">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
              ${getIcon('wine', 'w-5 h-5')}
            </div>
            <div>
              <h3 class="text-xl font-bold text-stone-100 font-display uppercase">Catálogo de Bebidas Geladas</h3>
              <p class="text-xs text-stone-400">Cervejas trincando, refrigerantes e opções sem álcool</p>
            </div>
          </div>
          <button id="close-drinks-catalog-btn" type="button" class="text-stone-400 hover:text-stone-200 p-2 rounded-lg cursor-pointer">
            ${getIcon('x', 'w-5 h-5')}
          </button>
        </div>

        <!-- Filter tabs -->
        <div class="p-4 border-b border-stone-800 bg-stone-950/60 overflow-x-auto scrollbar-none">
          <div class="flex items-center gap-2 min-w-max">
            ${DRINK_CATS.map(
              (cat) => `
              <button
                type="button"
                class="drink-cat-tab px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeDrinkCategory === cat.id
                    ? 'bg-amber-500 text-stone-950'
                    : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
                }"
                data-drink-cat="${cat.id}"
              >
                ${cat.label}
              </button>
            `
            ).join('')}
          </div>
        </div>

        <!-- Drink Cards Grid -->
        <div class="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          ${filteredDrinks
            .map(
              (drink) => `
            <div class="bg-stone-950/60 border border-stone-800/80 rounded-2xl p-4 flex flex-col justify-between group hover:border-stone-700 transition-all">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center p-1 shrink-0 overflow-hidden">
                  <img
                    src="${resolveImgUrl(drink.image)}"
                    alt="${drink.name}"
                    class="w-full h-full object-contain"
                    onerror="this.onerror=null; this.src='${resolveImgUrl('/images/bebidas.png')}';"
                  />
                </div>
                <div>
                  <h4 class="text-xs font-bold text-stone-200 line-clamp-1">${drink.name}</h4>
                  <p class="text-[10px] text-stone-500">${drink.volume}</p>
                  <span class="text-sm font-black text-amber-400 font-display mt-1 block">
                    ${formatCurrency(drink.price)}
                  </span>
                </div>
              </div>
              <button
                type="button"
                class="add-drink-btn mt-3 w-full flex items-center justify-center gap-1.5 bg-stone-900 hover:bg-stone-800 text-amber-400 border border-stone-700 hover:border-amber-500 py-1.5 px-3 rounded-lg text-xs font-bold transition-all active:scale-95 cursor-pointer"
                data-drink-id="${drink.id}"
              >
                ${getIcon('plus', 'w-3.5 h-3.5')}
                <span>Adicionar</span>
              </button>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    </div>
  `;

  let modalEl = document.getElementById('drinks-catalog-modal');
  if (!modalEl) {
    container.insertAdjacentHTML('beforeend', modalHtml);
  } else {
    modalEl.outerHTML = modalHtml;
  }

  // Bindings
  document.getElementById('close-drinks-catalog-btn')?.addEventListener('click', () => {
    isDrinksModalOpen = false;
    document.getElementById('drinks-catalog-modal')?.remove();
  });

  document.querySelectorAll('.drink-cat-tab').forEach((tab) => {
    tab.addEventListener('click', (e) => {
      activeDrinkCategory = e.currentTarget.getAttribute('data-drink-cat');
      renderDrinksCatalogModal();
    });
  });

  document.querySelectorAll('.add-drink-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-drink-id');
      const drink = DRINKS_CATALOG.find((d) => d.id === id);
      if (!drink) return;

      const cartItem = {
        id: `drink-${drink.id}-${Date.now()}`,
        menuItemId: 'bebidas',
        variantId: drink.id,
        title: drink.name,
        variantName: drink.volume,
        unitPrice: drink.price,
        quantity: 1,
        imageUrl: resolveImgUrl(drink.image),
      };

      addToCart(cartItem);

      // Visual feedback
      const original = e.currentTarget.innerHTML;
      e.currentTarget.innerHTML = `${getIcon('check', 'w-3.5 h-3.5')} <span>Adicionado!</span>`;
      setTimeout(() => {
        if (e.currentTarget) e.currentTarget.innerHTML = original;
      }, 1000);
    });
  });
}

// --- Cart Drawer Component ---
function renderCartDrawer() {
  const container = document.getElementById('modals-root');
  if (!container) return;

  if (!isCartOpen) {
    document.getElementById('cart-drawer-container')?.remove();
    return;
  }

  const subtotal = getCartSubtotal();
  const deliveryFee = getDeliveryFee();
  const paymentFee = getPaymentFee(subtotal);
  const total = getGrandTotal();

  const drawerHtml = `
    <div id="cart-drawer-container" class="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      <!-- Backdrop -->
      <div id="cart-backdrop" class="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"></div>

      <!-- Drawer Content -->
      <div class="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div class="w-screen max-w-md bg-stone-900 border-l border-stone-800 shadow-2xl flex flex-col justify-between">
          <!-- Drawer Header -->
          <div class="p-5 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
            <div class="flex items-center gap-2.5">
              <div class="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                ${getIcon('shopping-bag', 'w-5 h-5')}
              </div>
              <div>
                <h3 class="text-lg font-black text-stone-100 font-display uppercase tracking-tight">
                  Seu Pedido
                </h3>
                <p class="text-xs text-stone-400">
                  ${cart.length === 0 ? 'Carrinho vazio' : `${cart.length} itens no pedido`}
                </p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              ${
                cart.length > 0
                  ? `<button id="clear-cart-btn" type="button" class="text-stone-500 hover:text-red-400 text-xs flex items-center gap-1 p-1.5 rounded cursor-pointer">
                      ${getIcon('trash', 'w-3.5 h-3.5')} Limpar
                    </button>`
                  : ''
              }
              <button id="close-cart-btn" type="button" class="text-stone-400 hover:text-stone-200 p-2 rounded-lg cursor-pointer">
                ${getIcon('x', 'w-5 h-5')}
              </button>
            </div>
          </div>

          <!-- Drawer Body -->
          <div class="flex-1 overflow-y-auto p-5 space-y-6">
            <!-- Items List -->
            ${
              cart.length === 0
                ? `
                <div class="text-center py-16 space-y-4">
                  <div class="w-16 h-16 rounded-2xl bg-stone-950 border border-stone-800 flex items-center justify-center mx-auto text-stone-600">
                    ${getIcon('shopping-bag', 'w-8 h-8')}
                  </div>
                  <h4 class="text-base font-bold text-stone-300">Nenhum item adicionado ainda</h4>
                  <p class="text-xs text-stone-500 max-w-xs mx-auto">
                    Navegue pelo cardápio, monte seu prato ou escolha seus espetos favoritos para fazer o pedido!
                  </p>
                </div>
              `
                : `
                <div class="space-y-3">
                  ${cart
                    .map(
                      (item) => `
                    <div class="bg-stone-950/80 border border-stone-800 rounded-xl p-3.5 space-y-2">
                      <div class="flex items-start justify-between gap-3">
                        <div class="flex items-center gap-3">
                          <img
                            src="${resolveImgUrl(item.imageUrl)}"
                            alt="${item.title}"
                            class="w-12 h-12 rounded-lg object-cover bg-stone-900 shrink-0"
                            onerror="this.onerror=null; this.src='${resolveImgUrl('/images/churrasco.jpg')}';"
                          />
                          <div>
                            <h4 class="text-xs font-bold text-stone-100">${item.title}</h4>
                            <p class="text-[11px] text-stone-400">${item.variantName}</p>
                            ${
                              item.customDetails?.adicionais?.length
                                ? `<p class="text-[10px] text-stone-500 line-clamp-1">+ ${item.customDetails.adicionais.join(', ')}</p>`
                                : ''
                            }
                            ${item.notes ? `<p class="text-[10px] text-amber-400/80 italic mt-0.5">Obs: ${item.notes}</p>` : ''}
                          </div>
                        </div>
                        <span class="text-xs font-bold text-amber-400 font-mono shrink-0">
                          ${formatCurrency(item.unitPrice * item.quantity)}
                        </span>
                      </div>

                      <div class="flex items-center justify-between pt-2 border-t border-stone-800/60">
                        <span class="text-[10px] text-stone-500">${formatCurrency(item.unitPrice)} un.</span>
                        <div class="flex items-center gap-2">
                          <button
                            type="button"
                            class="cart-qty-minus w-6 h-6 rounded-md bg-stone-900 border border-stone-800 hover:border-stone-700 flex items-center justify-center text-stone-300 cursor-pointer"
                            data-item-id="${item.id}"
                          >
                            ${getIcon('minus', 'w-3 h-3')}
                          </button>
                          <span class="text-xs font-bold text-stone-200 w-5 text-center">${item.quantity}</span>
                          <button
                            type="button"
                            class="cart-qty-plus w-6 h-6 rounded-md bg-stone-900 border border-stone-800 hover:border-stone-700 flex items-center justify-center text-stone-300 cursor-pointer"
                            data-item-id="${item.id}"
                          >
                            ${getIcon('plus', 'w-3 h-3')}
                          </button>
                          <button
                            type="button"
                            class="cart-item-remove text-stone-500 hover:text-red-400 ml-2 cursor-pointer"
                            data-item-id="${item.id}"
                            title="Remover"
                          >
                            ${getIcon('trash', 'w-3.5 h-3.5')}
                          </button>
                        </div>
                      </div>
                    </div>
                  `
                    )
                    .join('')}
                </div>

                <!-- Customer Details Form -->
                <div class="pt-4 border-t border-stone-800 space-y-4">
                  <!-- Order Type Toggle -->
                  <div class="space-y-1.5">
                    <label class="text-xs font-bold text-stone-300 uppercase tracking-wider block">Como deseja receber?</label>
                    <div class="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        id="order-type-delivery"
                        class="p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          customerState.orderType === 'entregar'
                            ? 'bg-amber-950/60 border-amber-500 text-amber-300'
                            : 'bg-stone-950/60 border-stone-800 text-stone-400'
                        }"
                      >
                        🛵 Entrega (Delivery)
                      </button>
                      <button
                        type="button"
                        id="order-type-retirar"
                        class="p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          customerState.orderType === 'retirar'
                            ? 'bg-amber-950/60 border-amber-500 text-amber-300'
                            : 'bg-stone-950/60 border-stone-800 text-stone-400'
                        }"
                      >
                        🏪 Retirar no Local
                      </button>
                    </div>
                  </div>

                  <!-- Customer Name & Phone -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label class="text-[11px] font-medium text-stone-400 block mb-1">Seu Nome *</label>
                      <input
                        id="client-name-input"
                        type="text"
                        placeholder="Ex: Carlos Silva"
                        class="w-full bg-stone-950 border border-stone-800 text-xs rounded-xl px-3 py-2 text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-amber-500"
                        value="${customerState.name}"
                      />
                    </div>
                    <div>
                      <label class="text-[11px] font-medium text-stone-400 block mb-1">Telefone WhatsApp</label>
                      <input
                        id="client-phone-input"
                        type="tel"
                        placeholder="Ex: (38) 99999-9999"
                        class="w-full bg-stone-950 border border-stone-800 text-xs rounded-xl px-3 py-2 text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-amber-500"
                        value="${customerState.phone}"
                      />
                    </div>
                  </div>

                  <!-- Delivery Address Fields -->
                  ${
                    customerState.orderType === 'entregar'
                      ? `
                      <div class="space-y-2.5 pt-2 border-t border-stone-800/60">
                        <div class="flex items-center justify-between">
                          <label class="text-xs font-bold text-stone-300 uppercase tracking-wider block">Endereço de Entrega</label>
                          <span class="text-[10px] text-amber-400 font-medium">Taxa: ${formatCurrency(deliveryFee)}</span>
                        </div>
                        <div class="grid grid-cols-3 gap-2">
                          <div class="col-span-2">
                            <input
                              id="client-rua-input"
                              type="text"
                              placeholder="Rua / Avenida *"
                              class="w-full bg-stone-950 border border-stone-800 text-xs rounded-xl px-3 py-2 text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-amber-500"
                              value="${customerState.rua}"
                            />
                          </div>
                          <div>
                            <input
                              id="client-num-input"
                              type="text"
                              placeholder="Nº *"
                              class="w-full bg-stone-950 border border-stone-800 text-xs rounded-xl px-3 py-2 text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-amber-500"
                              value="${customerState.num}"
                            />
                          </div>
                        </div>
                        <div class="grid grid-cols-2 gap-2">
                          <div>
                            <input
                              id="client-bairro-input"
                              type="text"
                              placeholder="Bairro"
                              class="w-full bg-stone-950 border border-stone-800 text-xs rounded-xl px-3 py-2 text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-amber-500"
                              value="${customerState.bairro}"
                            />
                          </div>
                          <div>
                            <input
                              id="client-comp-input"
                              type="text"
                              placeholder="Compl. / Referência"
                              class="w-full bg-stone-950 border border-stone-800 text-xs rounded-xl px-3 py-2 text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-amber-500"
                              value="${customerState.comp}"
                            />
                          </div>
                        </div>

                        <!-- Rainy day toggle -->
                        <div class="pt-1">
                          <label class="flex items-center gap-2 cursor-pointer bg-stone-950 p-2 rounded-xl border border-stone-800/80">
                            <input
                              type="checkbox"
                              id="rainy-day-checkbox"
                              class="rounded border-stone-700 text-amber-500 focus:ring-amber-500"
                              ${customerState.isRainyDay ? 'checked' : ''}
                            />
                            <div class="flex items-center gap-1.5 text-xs text-stone-300">
                              ${getIcon('cloud-rain', 'w-3.5 h-3.5 text-blue-400')}
                              <span>Aplicar Taxa de Chuva (+ R$ 2,00)</span>
                            </div>
                          </label>
                        </div>
                      </div>
                    `
                      : ''
                  }

                  <!-- Payment Method -->
                  <div class="space-y-2 pt-2 border-t border-stone-800/60">
                    <label class="text-xs font-bold text-stone-300 uppercase tracking-wider block">Forma de Pagamento</label>
                    <select
                      id="payment-method-select"
                      class="w-full bg-stone-950 border border-stone-800 text-xs rounded-xl px-3 py-2.5 text-stone-200 focus:outline-none focus:border-amber-500 cursor-pointer"
                    >
                      <option value="pix" ${customerState.paymentMethod === 'pix' ? 'selected' : ''}>Pix (Chave / QR Code)</option>
                      <option value="pix_maquininha" ${customerState.paymentMethod === 'pix_maquininha' ? 'selected' : ''}>Pix na Maquininha do Motoboy</option>
                      <option value="cartao_credito" ${customerState.paymentMethod === 'cartao_credito' ? 'selected' : ''}>Cartão de Crédito</option>
                      <option value="cartao_debito" ${customerState.paymentMethod === 'cartao_debito' ? 'selected' : ''}>Cartão de Débito</option>
                      <option value="dinheiro" ${customerState.paymentMethod === 'dinheiro' ? 'selected' : ''}>Dinheiro</option>
                      <option value="vale_alimentacao" ${customerState.paymentMethod === 'vale_alimentacao' ? 'selected' : ''}>Vale Alimentação / Refeição (+10% taxa)</option>
                    </select>

                    ${
                      customerState.paymentMethod === 'dinheiro'
                        ? `
                        <div class="pt-1">
                          <input
                            id="troco-para-input"
                            type="text"
                            placeholder="Troco para quanto? (Ex: 50,00)"
                            class="w-full bg-stone-950 border border-stone-800 text-xs rounded-xl px-3 py-2 text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-amber-500"
                            value="${customerState.trocoPara}"
                          />
                        </div>
                      `
                        : ''
                    }

                    ${
                      customerState.paymentMethod === 'pix'
                        ? `
                        <div class="p-3 rounded-xl bg-stone-950 border border-stone-800 space-y-2 text-xs">
                          <div class="flex items-center justify-between text-stone-400">
                            <span>Chave Pix:</span>
                            <button
                              id="copy-pix-btn"
                              type="button"
                              class="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 cursor-pointer"
                            >
                              ${getIcon(customerState.copiedPix ? 'check' : 'copy', 'w-3.5 h-3.5')}
                              <span>${customerState.copiedPix ? 'Copiado!' : 'Copiar Chave'}</span>
                            </button>
                          </div>
                          <p class="font-mono text-stone-200 bg-stone-900/90 p-2 rounded border border-stone-800 select-all">
                            ${RESTAURANT_INFO.pixKey}
                          </p>
                          <p class="text-[10px] text-stone-400">
                            Beneficiário: ${RESTAURANT_INFO.pixBeneficiary}
                          </p>
                        </div>
                      `
                        : ''
                    }
                  </div>

                  <!-- General Notes -->
                  <div class="space-y-1.5 pt-2 border-t border-stone-800/60">
                    <label class="text-xs font-bold text-stone-300 uppercase tracking-wider block">Observações do Pedido</label>
                    <input
                      id="order-notes-input"
                      type="text"
                      placeholder="Ex: Tocar interfone, talher descartável..."
                      class="w-full bg-stone-950 border border-stone-800 text-xs rounded-xl px-3 py-2 text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-amber-500"
                      value="${customerState.orderNotes}"
                    />
                  </div>

                  <!-- Error message display -->
                  ${
                    customerState.errorMsg
                      ? `
                      <div class="p-3 bg-red-950/60 border border-red-800/80 rounded-xl text-red-200 text-xs flex items-center gap-2">
                        ${getIcon('alert-circle', 'w-4 h-4 text-red-400 shrink-0')}
                        <span>${customerState.errorMsg}</span>
                      </div>
                    `
                      : ''
                  }
                </div>
              `
            }
          </div>

          <!-- Drawer Footer with Totals & Checkout -->
          ${
            cart.length > 0
              ? `
              <div class="p-5 bg-stone-950 border-t border-stone-800 space-y-4">
                <div class="space-y-1.5 text-xs text-stone-400">
                  <div class="flex justify-between">
                    <span>Subtotal (${cart.length} itens):</span>
                    <span class="text-stone-200 font-medium">${formatCurrency(subtotal)}</span>
                  </div>
                  ${
                    customerState.orderType === 'entregar'
                      ? `<div class="flex justify-between">
                          <span>Taxa de Entrega ${customerState.isRainyDay ? '(Chuva)' : ''}:</span>
                          <span class="text-stone-200 font-medium">${formatCurrency(deliveryFee)}</span>
                        </div>`
                      : ''
                  }
                  ${
                    paymentFee > 0
                      ? `<div class="flex justify-between text-amber-400">
                          <span>Taxa Vale (10%):</span>
                          <span>+${formatCurrency(paymentFee)}</span>
                        </div>`
                      : ''
                  }
                  <div class="flex justify-between items-baseline pt-2 border-t border-stone-800 text-stone-100">
                    <span class="text-sm font-bold uppercase">Total do Pedido:</span>
                    <span class="text-2xl font-black text-amber-400 font-display">
                      ${formatCurrency(total)}
                    </span>
                  </div>
                </div>

                <button
                  id="checkout-whatsapp-btn"
                  type="button"
                  class="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-emerald-950/50 transition-all duration-200 active:scale-95 cursor-pointer text-sm"
                >
                  ${getIcon('send', 'w-4 h-4')}
                  <span>Enviar Pedido pelo WhatsApp</span>
                </button>
              </div>
            `
              : ''
          }
        </div>
      </div>
    </div>
  `;

  let drawerEl = document.getElementById('cart-drawer-container');
  if (!drawerEl) {
    container.insertAdjacentHTML('beforeend', drawerHtml);
  } else {
    drawerEl.outerHTML = drawerHtml;
  }

  // Bind Drawer Events
  const closeDrawer = () => {
    isCartOpen = false;
    document.getElementById('cart-drawer-container')?.remove();
  };

  document.getElementById('close-cart-btn')?.addEventListener('click', closeDrawer);
  document.getElementById('cart-backdrop')?.addEventListener('click', closeDrawer);
  document.getElementById('clear-cart-btn')?.addEventListener('click', () => {
    if (confirm('Deseja realmente esvaziar o carrinho?')) {
      clearCart();
    }
  });

  // Quantity adjustments
  document.querySelectorAll('.cart-qty-minus').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-item-id');
      updateCartItemQty(id, -1);
    });
  });
  document.querySelectorAll('.cart-qty-plus').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-item-id');
      updateCartItemQty(id, 1);
    });
  });
  document.querySelectorAll('.cart-item-remove').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-item-id');
      removeCartItem(id);
    });
  });

  // Order type
  document.getElementById('order-type-delivery')?.addEventListener('click', () => {
    customerState.orderType = 'entregar';
    renderCartDrawer();
  });
  document.getElementById('order-type-retirar')?.addEventListener('click', () => {
    customerState.orderType = 'retirar';
    renderCartDrawer();
  });

  // Inputs
  document.getElementById('client-name-input')?.addEventListener('input', (e) => {
    customerState.name = e.target.value;
    saveCustomerInfo();
  });
  document.getElementById('client-phone-input')?.addEventListener('input', (e) => {
    customerState.phone = e.target.value;
    saveCustomerInfo();
  });
  document.getElementById('client-rua-input')?.addEventListener('input', (e) => {
    customerState.rua = e.target.value;
    saveCustomerInfo();
  });
  document.getElementById('client-num-input')?.addEventListener('input', (e) => {
    customerState.num = e.target.value;
    saveCustomerInfo();
  });
  document.getElementById('client-bairro-input')?.addEventListener('input', (e) => {
    customerState.bairro = e.target.value;
    saveCustomerInfo();
  });
  document.getElementById('client-comp-input')?.addEventListener('input', (e) => {
    customerState.comp = e.target.value;
  });
  document.getElementById('rainy-day-checkbox')?.addEventListener('change', (e) => {
    customerState.isRainyDay = e.target.checked;
    renderCartDrawer();
  });
  document.getElementById('payment-method-select')?.addEventListener('change', (e) => {
    customerState.paymentMethod = e.target.value;
    renderCartDrawer();
  });
  document.getElementById('troco-para-input')?.addEventListener('input', (e) => {
    customerState.trocoPara = e.target.value;
  });
  document.getElementById('order-notes-input')?.addEventListener('input', (e) => {
    customerState.orderNotes = e.target.value;
  });

  // Copy PIX
  document.getElementById('copy-pix-btn')?.addEventListener('click', () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.pixKey);
    customerState.copiedPix = true;
    renderCartDrawer();
    setTimeout(() => {
      customerState.copiedPix = false;
      renderCartDrawer();
    }, 2000);
  });

  // Checkout WhatsApp button
  document.getElementById('checkout-whatsapp-btn')?.addEventListener('click', () => {
    customerState.errorMsg = '';

    if (cart.length === 0) {
      customerState.errorMsg = 'Seu carrinho está vazio.';
      renderCartDrawer();
      return;
    }

    if (!customerState.name.trim()) {
      customerState.errorMsg = 'Por favor, informe seu nome para identificação do pedido.';
      renderCartDrawer();
      return;
    }

    if (customerState.orderType === 'entregar') {
      if (!customerState.rua.trim() || !customerState.num.trim()) {
        customerState.errorMsg = 'Por favor, informe a Rua e o Número de entrega.';
        renderCartDrawer();
        return;
      }
    }

    if (customerState.paymentMethod === 'dinheiro' && customerState.trocoPara) {
      const trocoNum = parseFloat(customerState.trocoPara.replace(',', '.'));
      if (trocoNum < total) {
        customerState.errorMsg = `O valor para troco (${formatCurrency(trocoNum)}) deve ser maior que o total (${formatCurrency(total)}).`;
        renderCartDrawer();
        return;
      }
    }

    const orderInfo = {
      nome: customerState.name,
      telefone: customerState.phone,
      tipoPedido: customerState.orderType,
      endereco: {
        rua: customerState.rua,
        numero: customerState.num,
        bairro: customerState.bairro,
        complemento: customerState.comp,
      },
      formaPagamento: customerState.paymentMethod,
      trocoPara: customerState.trocoPara ? parseFloat(customerState.trocoPara.replace(',', '.')) : undefined,
      isRainyDay: customerState.isRainyDay && customerState.orderType === 'entregar',
      observacoesGerais: customerState.orderNotes.trim() || undefined,
    };

    const { text, url } = buildWhatsAppOrderMessage(
      cart,
      orderInfo,
      subtotal,
      deliveryFee,
      paymentFee,
      total
    );

    // Open WhatsApp in new tab
    window.open(url, '_blank');

    // Show Success Modal
    isCartOpen = false;
    successOrderData = { message: text, url };
    renderModals();
  });
}

// --- Order Success Modal ---
function renderOrderSuccessModal() {
  const container = document.getElementById('modals-root');
  if (!container) return;

  if (!successOrderData) {
    document.getElementById('order-success-modal')?.remove();
    return;
  }

  const modalHtml = `
    <div id="order-success-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
      <div class="bg-stone-900 border border-stone-800 rounded-3xl max-w-md w-full p-6 text-center space-y-4 shadow-2xl">
        <div class="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
          ${getIcon('check', 'w-8 h-8')}
        </div>
        <h3 class="text-2xl font-black text-stone-100 font-display uppercase">
          Pedido Enviado com Sucesso!
        </h3>
        <p class="text-xs text-stone-400 leading-relaxed">
          Seu pedido foi formatado e o WhatsApp foi aberto. Caso o aplicativo não tenha aberto automaticamente, clique no botão abaixo para conversar com o atendente.
        </p>

        <div class="pt-2 space-y-2">
          <a
            href="${successOrderData.url}"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold py-3 px-4 rounded-xl text-sm cursor-pointer shadow-lg shadow-emerald-950/50"
          >
            ${getIcon('send', 'w-4 h-4')}
            <span>Abrir WhatsApp Novamente</span>
          </a>
          <button
            id="close-success-modal-btn"
            type="button"
            class="w-full bg-stone-950 hover:bg-stone-800 text-stone-300 font-medium py-2.5 px-4 rounded-xl text-xs transition-colors cursor-pointer border border-stone-800"
          >
            Fechar e Voltar ao Cardápio
          </button>
        </div>
      </div>
    </div>
  `;

  let el = document.getElementById('order-success-modal');
  if (!el) {
    container.insertAdjacentHTML('beforeend', modalHtml);
  } else {
    el.outerHTML = modalHtml;
  }

  document.getElementById('close-success-modal-btn')?.addEventListener('click', () => {
    successOrderData = null;
    document.getElementById('order-success-modal')?.remove();
  });
}

function renderModals() {
  renderCustomDishModal();
  renderDrinksCatalogModal();
  renderCartDrawer();
  renderOrderSuccessModal();
}

// Auto start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

})();
