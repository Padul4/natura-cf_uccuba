/*! Natura-Ucuuba - v0.1.0 - 2015-08-17 */var __BACKEND__  	= 	"http://107.23.145.68:81/backend/" // QA
var __BASE_URL__ 	= 	__BACKEND__ + "api/";
var __ASSETS_URL__ 	= 	"static/natura-ucuuba/assets/v3";
var estados = [{
	"ID": "1",
	"Sigla": "AC",
	"Nome": "Acre"
},
     {
	"ID": "2",
	"Sigla": "AL",
	"Nome": "Alagoas"
},
     {
	"ID": "3",
	"Sigla": "AM",
	"Nome": "Amazonas"
},
     {
	"ID": "4",
	"Sigla": "AP",
	"Nome": "Amapá"
},
     {
	"ID": "5",
	"Sigla": "BA",
	"Nome": "Bahia"
},
     {
	"ID": "6",
	"Sigla": "CE",
	"Nome": "Ceará"
},
     {
	"ID": "7",
	"Sigla": "DF",
	"Nome": "Distrito Federal"
},
     {
	"ID": "8",
	"Sigla": "ES",
	"Nome": "Espírito Santo"
},
     {
	"ID": "9",
	"Sigla": "GO",
	"Nome": "Goiás"
},
     {
	"ID": "10",
	"Sigla": "MA",
	"Nome": "Maranhão"
},
     {
	"ID": "11",
	"Sigla": "MG",
	"Nome": "Minas Gerais"
},
     {
	"ID": "12",
	"Sigla": "MS",
	"Nome": "Mato Grosso do Sul"
},
     {
	"ID": "13",
	"Sigla": "MT",
	"Nome": "Mato Grosso"
},
     {
	"ID": "14",
	"Sigla": "PA",
	"Nome": "Pará"
},
     {
	"ID": "15",
	"Sigla": "PB",
	"Nome": "Paraíba"
},
     {
	"ID": "16",
	"Sigla": "PE",
	"Nome": "Pernambuco"
},
     {
	"ID": "17",
	"Sigla": "PI",
	"Nome": "Piauí"
},
     {
	"ID": "18",
	"Sigla": "PR",
	"Nome": "Paraná"
},
     {
	"ID": "19",
	"Sigla": "RJ",
	"Nome": "Rio de Janeiro"
},
     {
	"ID": "20",
	"Sigla": "RN",
	"Nome": "Rio Grande do Norte"
},
     {
	"ID": "21",
	"Sigla": "RO",
	"Nome": "Rondônia"
},
     {
	"ID": "22",
	"Sigla": "RR",
	"Nome": "Roraima"
},
     {
	"ID": "23",
	"Sigla": "RS",
	"Nome": "Rio Grande do Sul"
},
     {
	"ID": "24",
	"Sigla": "SC",
	"Nome": "Santa Catarina"
},
     {
	"ID": "25",
	"Sigla": "SE",
	"Nome": "Sergipe"
},
     {
	"ID": "26",
	"Sigla": "SP",
	"Nome": "São Paulo"
},
     {
	"ID": "27",
	"Sigla": "TO",
	"Nome": "Tocantins"
}]
var cidades = [{
	"ID": "1",
	"Nome": "Afonso Cláudio",
	"Estado": "8"
},
     {
	"ID": "2",
	"Nome": "Água Doce do Norte",
	"Estado": "8"
},
     {
	"ID": "3",
	"Nome": "Águia Branca",
	"Estado": "8"
},
     {
	"ID": "4",
	"Nome": "Alegre",
	"Estado": "8"
},
     {
	"ID": "5",
	"Nome": "Alfredo Chaves",
	"Estado": "8"
},
     {
	"ID": "6",
	"Nome": "Alto Rio Novo",
	"Estado": "8"
},
     {
	"ID": "7",
	"Nome": "Anchieta",
	"Estado": "8"
},
     {
	"ID": "8",
	"Nome": "Apiacá",
	"Estado": "8"
},
     {
	"ID": "9",
	"Nome": "Aracruz",
	"Estado": "8"
},
     {
	"ID": "10",
	"Nome": "Atilio Vivacqua",
	"Estado": "8"
},
     {
	"ID": "11",
	"Nome": "Baixo Guandu",
	"Estado": "8"
},
     {
	"ID": "12",
	"Nome": "Barra de São Francisco",
	"Estado": "8"
},
     {
	"ID": "13",
	"Nome": "Boa Esperança",
	"Estado": "8"
},
     {
	"ID": "14",
	"Nome": "Bom Jesus do Norte",
	"Estado": "8"
},
     {
	"ID": "15",
	"Nome": "Brejetuba",
	"Estado": "8"
},
     {
	"ID": "16",
	"Nome": "Cachoeiro de Itapemirim",
	"Estado": "8"
},
     {
	"ID": "17",
	"Nome": "Cariacica",
	"Estado": "8"
},
     {
	"ID": "18",
	"Nome": "Castelo",
	"Estado": "8"
},
     {
	"ID": "19",
	"Nome": "Colatina",
	"Estado": "8"
},
     {
	"ID": "20",
	"Nome": "Conceição da Barra",
	"Estado": "8"
},
     {
	"ID": "21",
	"Nome": "Conceição do Castelo",
	"Estado": "8"
},
     {
	"ID": "22",
	"Nome": "Divino de São Lourenço",
	"Estado": "8"
},
     {
	"ID": "23",
	"Nome": "Domingos Martins",
	"Estado": "8"
},
     {
	"ID": "24",
	"Nome": "Dores do Rio Preto",
	"Estado": "8"
},
     {
	"ID": "25",
	"Nome": "Ecoporanga",
	"Estado": "8"
},
     {
	"ID": "26",
	"Nome": "Fundão",
	"Estado": "8"
},
     {
	"ID": "27",
	"Nome": "Governador Lindenberg",
	"Estado": "8"
},
     {
	"ID": "28",
	"Nome": "Guaçuí",
	"Estado": "8"
},
     {
	"ID": "29",
	"Nome": "Guarapari",
	"Estado": "8"
},
     {
	"ID": "30",
	"Nome": "Ibatiba",
	"Estado": "8"
},
     {
	"ID": "31",
	"Nome": "Ibiraçu",
	"Estado": "8"
},
     {
	"ID": "32",
	"Nome": "Ibitirama",
	"Estado": "8"
},
     {
	"ID": "33",
	"Nome": "Iconha",
	"Estado": "8"
},
     {
	"ID": "34",
	"Nome": "Irupi",
	"Estado": "8"
},
     {
	"ID": "35",
	"Nome": "Itaguaçu",
	"Estado": "8"
},
     {
	"ID": "36",
	"Nome": "Itapemirim",
	"Estado": "8"
},
     {
	"ID": "37",
	"Nome": "Itarana",
	"Estado": "8"
},
     {
	"ID": "38",
	"Nome": "Iúna",
	"Estado": "8"
},
     {
	"ID": "39",
	"Nome": "Jaguaré",
	"Estado": "8"
},
     {
	"ID": "40",
	"Nome": "Jerônimo Monteiro",
	"Estado": "8"
},
     {
	"ID": "41",
	"Nome": "João Neiva",
	"Estado": "8"
},
     {
	"ID": "42",
	"Nome": "Laranja da Terra",
	"Estado": "8"
},
     {
	"ID": "43",
	"Nome": "Linhares",
	"Estado": "8"
},
     {
	"ID": "44",
	"Nome": "Mantenópolis",
	"Estado": "8"
},
     {
	"ID": "45",
	"Nome": "Marataízes",
	"Estado": "8"
},
     {
	"ID": "46",
	"Nome": "Marechal Floriano",
	"Estado": "8"
},
     {
	"ID": "47",
	"Nome": "Marilândia",
	"Estado": "8"
},
     {
	"ID": "48",
	"Nome": "Mimoso do Sul",
	"Estado": "8"
},
     {
	"ID": "49",
	"Nome": "Montanha",
	"Estado": "8"
},
     {
	"ID": "50",
	"Nome": "Mucurici",
	"Estado": "8"
},
     {
	"ID": "51",
	"Nome": "Muniz Freire",
	"Estado": "8"
},
     {
	"ID": "52",
	"Nome": "Muqui",
	"Estado": "8"
},
     {
	"ID": "53",
	"Nome": "Nova Venécia",
	"Estado": "8"
},
     {
	"ID": "54",
	"Nome": "Pancas",
	"Estado": "8"
},
     {
	"ID": "55",
	"Nome": "Pedro Canário",
	"Estado": "8"
},
     {
	"ID": "56",
	"Nome": "Pinheiros",
	"Estado": "8"
},
     {
	"ID": "57",
	"Nome": "Piúma",
	"Estado": "8"
},
     {
	"ID": "58",
	"Nome": "Ponto Belo",
	"Estado": "8"
},
     {
	"ID": "59",
	"Nome": "Presidente Kennedy",
	"Estado": "8"
},
     {
	"ID": "60",
	"Nome": "Rio Bananal",
	"Estado": "8"
},
     {
	"ID": "61",
	"Nome": "Rio Novo do Sul",
	"Estado": "8"
},
     {
	"ID": "62",
	"Nome": "Santa Leopoldina",
	"Estado": "8"
},
     {
	"ID": "63",
	"Nome": "Santa Maria de Jetibá",
	"Estado": "8"
},
     {
	"ID": "64",
	"Nome": "Santa Teresa",
	"Estado": "8"
},
     {
	"ID": "65",
	"Nome": "São Domingos do Norte",
	"Estado": "8"
},
     {
	"ID": "66",
	"Nome": "São Gabriel da Palha",
	"Estado": "8"
},
     {
	"ID": "67",
	"Nome": "São José do Calçado",
	"Estado": "8"
},
     {
	"ID": "68",
	"Nome": "São Mateus",
	"Estado": "8"
},
     {
	"ID": "69",
	"Nome": "São Roque do Canaã",
	"Estado": "8"
},
     {
	"ID": "70",
	"Nome": "Serra",
	"Estado": "8"
},
     {
	"ID": "71",
	"Nome": "Sooretama",
	"Estado": "8"
},
     {
	"ID": "72",
	"Nome": "Vargem Alta",
	"Estado": "8"
},
     {
	"ID": "73",
	"Nome": "Venda Nova do Imigrante",
	"Estado": "8"
},
     {
	"ID": "74",
	"Nome": "Viana",
	"Estado": "8"
},
     {
	"ID": "75",
	"Nome": "Vila Pavão",
	"Estado": "8"
},
     {
	"ID": "76",
	"Nome": "Vila Valério",
	"Estado": "8"
},
     {
	"ID": "77",
	"Nome": "Vila Velha",
	"Estado": "8"
},
     {
	"ID": "78",
	"Nome": "Vitória",
	"Estado": "8"
},
     {
	"ID": "79",
	"Nome": "Acrelândia",
	"Estado": "1"
},
     {
	"ID": "80",
	"Nome": "Assis Brasil",
	"Estado": "1"
},
     {
	"ID": "81",
	"Nome": "Brasiléia",
	"Estado": "1"
},
     {
	"ID": "82",
	"Nome": "Bujari",
	"Estado": "1"
},
     {
	"ID": "83",
	"Nome": "Capixaba",
	"Estado": "1"
},
     {
	"ID": "84",
	"Nome": "Cruzeiro do Sul",
	"Estado": "1"
},
     {
	"ID": "85",
	"Nome": "Epitaciolândia",
	"Estado": "1"
},
     {
	"ID": "86",
	"Nome": "Feijó",
	"Estado": "1"
},
     {
	"ID": "87",
	"Nome": "Jordão",
	"Estado": "1"
},
     {
	"ID": "88",
	"Nome": "Mâncio Lima",
	"Estado": "1"
},
     {
	"ID": "89",
	"Nome": "Manoel Urbano",
	"Estado": "1"
},
     {
	"ID": "90",
	"Nome": "Marechal Thaumaturgo",
	"Estado": "1"
},
     {
	"ID": "91",
	"Nome": "Plácido de Castro",
	"Estado": "1"
},
     {
	"ID": "92",
	"Nome": "Porto Acre",
	"Estado": "1"
},
     {
	"ID": "93",
	"Nome": "Porto Walter",
	"Estado": "1"
},
     {
	"ID": "94",
	"Nome": "Rio Branco",
	"Estado": "1"
},
     {
	"ID": "95",
	"Nome": "Rodrigues Alves",
	"Estado": "1"
},
     {
	"ID": "96",
	"Nome": "Santa Rosa do Purus",
	"Estado": "1"
},
     {
	"ID": "97",
	"Nome": "Sena Madureira",
	"Estado": "1"
},
     {
	"ID": "98",
	"Nome": "Senador Guiomard",
	"Estado": "1"
},
     {
	"ID": "99",
	"Nome": "Tarauacá",
	"Estado": "1"
},
     {
	"ID": "100",
	"Nome": "Xapuri",
	"Estado": "1"
},
     {
	"ID": "101",
	"Nome": "Água Branca",
	"Estado": "2"
},
     {
	"ID": "102",
	"Nome": "Anadia",
	"Estado": "2"
},
     {
	"ID": "103",
	"Nome": "Arapiraca",
	"Estado": "2"
},
     {
	"ID": "104",
	"Nome": "Atalaia",
	"Estado": "2"
},
     {
	"ID": "105",
	"Nome": "Barra de Santo Antônio",
	"Estado": "2"
},
     {
	"ID": "106",
	"Nome": "Barra de São Miguel",
	"Estado": "2"
},
     {
	"ID": "107",
	"Nome": "Batalha",
	"Estado": "2"
},
     {
	"ID": "108",
	"Nome": "Belém",
	"Estado": "2"
},
     {
	"ID": "109",
	"Nome": "Belo Monte",
	"Estado": "2"
},
     {
	"ID": "110",
	"Nome": "Boca da Mata",
	"Estado": "2"
},
     {
	"ID": "111",
	"Nome": "Branquinha",
	"Estado": "2"
},
     {
	"ID": "112",
	"Nome": "Cacimbinhas",
	"Estado": "2"
},
     {
	"ID": "113",
	"Nome": "Cajueiro",
	"Estado": "2"
},
     {
	"ID": "114",
	"Nome": "Campestre",
	"Estado": "2"
},
     {
	"ID": "115",
	"Nome": "Campo Alegre",
	"Estado": "2"
},
     {
	"ID": "116",
	"Nome": "Campo Grande",
	"Estado": "2"
},
     {
	"ID": "117",
	"Nome": "Canapi",
	"Estado": "2"
},
     {
	"ID": "118",
	"Nome": "Capela",
	"Estado": "2"
},
     {
	"ID": "119",
	"Nome": "Carneiros",
	"Estado": "2"
},
     {
	"ID": "120",
	"Nome": "Chã Preta",
	"Estado": "2"
},
     {
	"ID": "121",
	"Nome": "Coité do Nóia",
	"Estado": "2"
},
     {
	"ID": "122",
	"Nome": "Colônia Leopoldina",
	"Estado": "2"
},
     {
	"ID": "123",
	"Nome": "Coqueiro Seco",
	"Estado": "2"
},
     {
	"ID": "124",
	"Nome": "Coruripe",
	"Estado": "2"
},
     {
	"ID": "125",
	"Nome": "Craíbas",
	"Estado": "2"
},
     {
	"ID": "126",
	"Nome": "Delmiro Gouveia",
	"Estado": "2"
},
     {
	"ID": "127",
	"Nome": "Dois Riachos",
	"Estado": "2"
},
     {
	"ID": "128",
	"Nome": "Estrela de Alagoas",
	"Estado": "2"
},
     {
	"ID": "129",
	"Nome": "Feira Grande",
	"Estado": "2"
},
     {
	"ID": "130",
	"Nome": "Feliz Deserto",
	"Estado": "2"
},
     {
	"ID": "131",
	"Nome": "Flexeiras",
	"Estado": "2"
},
     {
	"ID": "132",
	"Nome": "Girau do Ponciano",
	"Estado": "2"
},
     {
	"ID": "133",
	"Nome": "Ibateguara",
	"Estado": "2"
},
     {
	"ID": "134",
	"Nome": "Igaci",
	"Estado": "2"
},
     {
	"ID": "135",
	"Nome": "Igreja Nova",
	"Estado": "2"
},
     {
	"ID": "136",
	"Nome": "Inhapi",
	"Estado": "2"
},
     {
	"ID": "137",
	"Nome": "Jacaré dos Homens",
	"Estado": "2"
},
     {
	"ID": "138",
	"Nome": "Jacuípe",
	"Estado": "2"
},
     {
	"ID": "139",
	"Nome": "Japaratinga",
	"Estado": "2"
},
     {
	"ID": "140",
	"Nome": "Jaramataia",
	"Estado": "2"
},
     {
	"ID": "141",
	"Nome": "Jequiá da Praia",
	"Estado": "2"
},
     {
	"ID": "142",
	"Nome": "Joaquim Gomes",
	"Estado": "2"
},
     {
	"ID": "143",
	"Nome": "Jundiá",
	"Estado": "2"
},
     {
	"ID": "144",
	"Nome": "Junqueiro",
	"Estado": "2"
},
     {
	"ID": "145",
	"Nome": "Lagoa da Canoa",
	"Estado": "2"
},
     {
	"ID": "146",
	"Nome": "Limoeiro de Anadia",
	"Estado": "2"
},
     {
	"ID": "147",
	"Nome": "Maceió",
	"Estado": "2"
},
     {
	"ID": "148",
	"Nome": "Major Isidoro",
	"Estado": "2"
},
     {
	"ID": "149",
	"Nome": "Mar Vermelho",
	"Estado": "2"
},
     {
	"ID": "150",
	"Nome": "Maragogi",
	"Estado": "2"
},
     {
	"ID": "151",
	"Nome": "Maravilha",
	"Estado": "2"
},
     {
	"ID": "152",
	"Nome": "Marechal Deodoro",
	"Estado": "2"
},
     {
	"ID": "153",
	"Nome": "Maribondo",
	"Estado": "2"
},
     {
	"ID": "154",
	"Nome": "Mata Grande",
	"Estado": "2"
},
     {
	"ID": "155",
	"Nome": "Matriz de Camaragibe",
	"Estado": "2"
},
     {
	"ID": "156",
	"Nome": "Messias",
	"Estado": "2"
},
     {
	"ID": "157",
	"Nome": "Minador do Negrão",
	"Estado": "2"
},
     {
	"ID": "158",
	"Nome": "Monteirópolis",
	"Estado": "2"
},
     {
	"ID": "159",
	"Nome": "Murici",
	"Estado": "2"
},
     {
	"ID": "160",
	"Nome": "Novo Lino",
	"Estado": "2"
},
     {
	"ID": "161",
	"Nome": "Olho d`Água das Flores",
	"Estado": "2"
},
     {
	"ID": "162",
	"Nome": "Olho d`Água do Casado",
	"Estado": "2"
},
     {
	"ID": "163",
	"Nome": "Olho d`Água Grande",
	"Estado": "2"
},
     {
	"ID": "164",
	"Nome": "Olivença",
	"Estado": "2"
},
     {
	"ID": "165",
	"Nome": "Ouro Branco",
	"Estado": "2"
},
     {
	"ID": "166",
	"Nome": "Palestina",
	"Estado": "2"
},
     {
	"ID": "167",
	"Nome": "Palmeira dos Índios",
	"Estado": "2"
},
     {
	"ID": "168",
	"Nome": "Pão de Açúcar",
	"Estado": "2"
},
     {
	"ID": "169",
	"Nome": "Pariconha",
	"Estado": "2"
},
     {
	"ID": "170",
	"Nome": "Paripueira",
	"Estado": "2"
},
     {
	"ID": "171",
	"Nome": "Passo de Camaragibe",
	"Estado": "2"
},
     {
	"ID": "172",
	"Nome": "Paulo Jacinto",
	"Estado": "2"
},
     {
	"ID": "173",
	"Nome": "Penedo",
	"Estado": "2"
},
     {
	"ID": "174",
	"Nome": "Piaçabuçu",
	"Estado": "2"
},
     {
	"ID": "175",
	"Nome": "Pilar",
	"Estado": "2"
},
     {
	"ID": "176",
	"Nome": "Pindoba",
	"Estado": "2"
},
     {
	"ID": "177",
	"Nome": "Piranhas",
	"Estado": "2"
},
     {
	"ID": "178",
	"Nome": "Poço das Trincheiras",
	"Estado": "2"
},
     {
	"ID": "179",
	"Nome": "Porto Calvo",
	"Estado": "2"
},
     {
	"ID": "180",
	"Nome": "Porto de Pedras",
	"Estado": "2"
},
     {
	"ID": "181",
	"Nome": "Porto Real do Colégio",
	"Estado": "2"
},
     {
	"ID": "182",
	"Nome": "Quebrangulo",
	"Estado": "2"
},
     {
	"ID": "183",
	"Nome": "Rio Largo",
	"Estado": "2"
},
     {
	"ID": "184",
	"Nome": "Roteiro",
	"Estado": "2"
},
     {
	"ID": "185",
	"Nome": "Santa Luzia do Norte",
	"Estado": "2"
},
     {
	"ID": "186",
	"Nome": "Santana do Ipanema",
	"Estado": "2"
},
     {
	"ID": "187",
	"Nome": "Santana do Mundaú",
	"Estado": "2"
},
     {
	"ID": "188",
	"Nome": "São Brás",
	"Estado": "2"
},
     {
	"ID": "189",
	"Nome": "São José da Laje",
	"Estado": "2"
},
     {
	"ID": "190",
	"Nome": "São José da Tapera",
	"Estado": "2"
},
     {
	"ID": "191",
	"Nome": "São Luís do Quitunde",
	"Estado": "2"
},
     {
	"ID": "192",
	"Nome": "São Miguel dos Campos",
	"Estado": "2"
},
     {
	"ID": "193",
	"Nome": "São Miguel dos Milagres",
	"Estado": "2"
},
     {
	"ID": "194",
	"Nome": "São Sebastião",
	"Estado": "2"
},
     {
	"ID": "195",
	"Nome": "Satuba",
	"Estado": "2"
},
     {
	"ID": "196",
	"Nome": "Senador Rui Palmeira",
	"Estado": "2"
},
     {
	"ID": "197",
	"Nome": "Tanque d`Arca",
	"Estado": "2"
},
     {
	"ID": "198",
	"Nome": "Taquarana",
	"Estado": "2"
},
     {
	"ID": "199",
	"Nome": "Teotônio Vilela",
	"Estado": "2"
},
     {
	"ID": "200",
	"Nome": "Traipu",
	"Estado": "2"
},
     {
	"ID": "201",
	"Nome": "União dos Palmares",
	"Estado": "2"
},
     {
	"ID": "202",
	"Nome": "Viçosa",
	"Estado": "2"
},
     {
	"ID": "203",
	"Nome": "Amapá",
	"Estado": "4"
},
     {
	"ID": "204",
	"Nome": "Calçoene",
	"Estado": "4"
},
     {
	"ID": "205",
	"Nome": "Cutias",
	"Estado": "4"
},
     {
	"ID": "206",
	"Nome": "Ferreira Gomes",
	"Estado": "4"
},
     {
	"ID": "207",
	"Nome": "Itaubal",
	"Estado": "4"
},
     {
	"ID": "208",
	"Nome": "Laranjal do Jari",
	"Estado": "4"
},
     {
	"ID": "209",
	"Nome": "Macapá",
	"Estado": "4"
},
     {
	"ID": "210",
	"Nome": "Mazagão",
	"Estado": "4"
},
     {
	"ID": "211",
	"Nome": "Oiapoque",
	"Estado": "4"
},
     {
	"ID": "212",
	"Nome": "Pedra Branca do Amaparí",
	"Estado": "4"
},
     {
	"ID": "213",
	"Nome": "Porto Grande",
	"Estado": "4"
},
     {
	"ID": "214",
	"Nome": "Pracuúba",
	"Estado": "4"
},
     {
	"ID": "215",
	"Nome": "Santana",
	"Estado": "4"
},
     {
	"ID": "216",
	"Nome": "Serra do Navio",
	"Estado": "4"
},
     {
	"ID": "217",
	"Nome": "Tartarugalzinho",
	"Estado": "4"
},
     {
	"ID": "218",
	"Nome": "Vitória do Jari",
	"Estado": "4"
},
     {
	"ID": "219",
	"Nome": "Alvarães",
	"Estado": "3"
},
     {
	"ID": "220",
	"Nome": "Amaturá",
	"Estado": "3"
},
     {
	"ID": "221",
	"Nome": "Anamã",
	"Estado": "3"
},
     {
	"ID": "222",
	"Nome": "Anori",
	"Estado": "3"
},
     {
	"ID": "223",
	"Nome": "Apuí",
	"Estado": "3"
},
     {
	"ID": "224",
	"Nome": "Atalaia do Norte",
	"Estado": "3"
},
     {
	"ID": "225",
	"Nome": "Autazes",
	"Estado": "3"
},
     {
	"ID": "226",
	"Nome": "Barcelos",
	"Estado": "3"
},
     {
	"ID": "227",
	"Nome": "Barreirinha",
	"Estado": "3"
},
     {
	"ID": "228",
	"Nome": "Benjamin Constant",
	"Estado": "3"
},
     {
	"ID": "229",
	"Nome": "Beruri",
	"Estado": "3"
},
     {
	"ID": "230",
	"Nome": "Boa Vista do Ramos",
	"Estado": "3"
},
     {
	"ID": "231",
	"Nome": "Boca do Acre",
	"Estado": "3"
},
     {
	"ID": "232",
	"Nome": "Borba",
	"Estado": "3"
},
     {
	"ID": "233",
	"Nome": "Caapiranga",
	"Estado": "3"
},
     {
	"ID": "234",
	"Nome": "Canutama",
	"Estado": "3"
},
     {
	"ID": "235",
	"Nome": "Carauari",
	"Estado": "3"
},
     {
	"ID": "236",
	"Nome": "Careiro",
	"Estado": "3"
},
     {
	"ID": "237",
	"Nome": "Careiro da Várzea",
	"Estado": "3"
},
     {
	"ID": "238",
	"Nome": "Coari",
	"Estado": "3"
},
     {
	"ID": "239",
	"Nome": "Codajás",
	"Estado": "3"
},
     {
	"ID": "240",
	"Nome": "Eirunepé",
	"Estado": "3"
},
     {
	"ID": "241",
	"Nome": "Envira",
	"Estado": "3"
},
     {
	"ID": "242",
	"Nome": "Fonte Boa",
	"Estado": "3"
},
     {
	"ID": "243",
	"Nome": "Guajará",
	"Estado": "3"
},
     {
	"ID": "244",
	"Nome": "Humaitá",
	"Estado": "3"
},
     {
	"ID": "245",
	"Nome": "Ipixuna",
	"Estado": "3"
},
     {
	"ID": "246",
	"Nome": "Iranduba",
	"Estado": "3"
},
     {
	"ID": "247",
	"Nome": "Itacoatiara",
	"Estado": "3"
},
     {
	"ID": "248",
	"Nome": "Itamarati",
	"Estado": "3"
},
     {
	"ID": "249",
	"Nome": "Itapiranga",
	"Estado": "3"
},
     {
	"ID": "250",
	"Nome": "Japurá",
	"Estado": "3"
},
     {
	"ID": "251",
	"Nome": "Juruá",
	"Estado": "3"
},
     {
	"ID": "252",
	"Nome": "Jutaí",
	"Estado": "3"
},
     {
	"ID": "253",
	"Nome": "Lábrea",
	"Estado": "3"
},
     {
	"ID": "254",
	"Nome": "Manacapuru",
	"Estado": "3"
},
     {
	"ID": "255",
	"Nome": "Manaquiri",
	"Estado": "3"
},
     {
	"ID": "256",
	"Nome": "Manaus",
	"Estado": "3"
},
     {
	"ID": "257",
	"Nome": "Manicoré",
	"Estado": "3"
},
     {
	"ID": "258",
	"Nome": "Maraã",
	"Estado": "3"
},
     {
	"ID": "259",
	"Nome": "Maués",
	"Estado": "3"
},
     {
	"ID": "260",
	"Nome": "Nhamundá",
	"Estado": "3"
},
     {
	"ID": "261",
	"Nome": "Nova Olinda do Norte",
	"Estado": "3"
},
     {
	"ID": "262",
	"Nome": "Novo Airão",
	"Estado": "3"
},
     {
	"ID": "263",
	"Nome": "Novo Aripuanã",
	"Estado": "3"
},
     {
	"ID": "264",
	"Nome": "Parintins",
	"Estado": "3"
},
     {
	"ID": "265",
	"Nome": "Pauini",
	"Estado": "3"
},
     {
	"ID": "266",
	"Nome": "Presidente Figueiredo",
	"Estado": "3"
},
     {
	"ID": "267",
	"Nome": "Rio Preto da Eva",
	"Estado": "3"
},
     {
	"ID": "268",
	"Nome": "Santa Isabel do Rio Negro",
	"Estado": "3"
},
     {
	"ID": "269",
	"Nome": "Santo Antônio do Içá",
	"Estado": "3"
},
     {
	"ID": "270",
	"Nome": "São Gabriel da Cachoeira",
	"Estado": "3"
},
     {
	"ID": "271",
	"Nome": "São Paulo de Olivença",
	"Estado": "3"
},
     {
	"ID": "272",
	"Nome": "São Sebastião do Uatumã",
	"Estado": "3"
},
     {
	"ID": "273",
	"Nome": "Silves",
	"Estado": "3"
},
     {
	"ID": "274",
	"Nome": "Tabatinga",
	"Estado": "3"
},
     {
	"ID": "275",
	"Nome": "Tapauá",
	"Estado": "3"
},
     {
	"ID": "276",
	"Nome": "Tefé",
	"Estado": "3"
},
     {
	"ID": "277",
	"Nome": "Tonantins",
	"Estado": "3"
},
     {
	"ID": "278",
	"Nome": "Uarini",
	"Estado": "3"
},
     {
	"ID": "279",
	"Nome": "Urucará",
	"Estado": "3"
},
     {
	"ID": "280",
	"Nome": "Urucurituba",
	"Estado": "3"
},
     {
	"ID": "281",
	"Nome": "Abaíra",
	"Estado": "5"
},
     {
	"ID": "282",
	"Nome": "Abaré",
	"Estado": "5"
},
     {
	"ID": "283",
	"Nome": "Acajutiba",
	"Estado": "5"
},
     {
	"ID": "284",
	"Nome": "Adustina",
	"Estado": "5"
},
     {
	"ID": "285",
	"Nome": "Água Fria",
	"Estado": "5"
},
     {
	"ID": "286",
	"Nome": "Aiquara",
	"Estado": "5"
},
     {
	"ID": "287",
	"Nome": "Alagoinhas",
	"Estado": "5"
},
     {
	"ID": "288",
	"Nome": "Alcobaça",
	"Estado": "5"
},
     {
	"ID": "289",
	"Nome": "Almadina",
	"Estado": "5"
},
     {
	"ID": "290",
	"Nome": "Amargosa",
	"Estado": "5"
},
     {
	"ID": "291",
	"Nome": "Amélia Rodrigues",
	"Estado": "5"
},
     {
	"ID": "292",
	"Nome": "América Dourada",
	"Estado": "5"
},
     {
	"ID": "293",
	"Nome": "Anagé",
	"Estado": "5"
},
     {
	"ID": "294",
	"Nome": "Andaraí",
	"Estado": "5"
},
     {
	"ID": "295",
	"Nome": "Andorinha",
	"Estado": "5"
},
     {
	"ID": "296",
	"Nome": "Angical",
	"Estado": "5"
},
     {
	"ID": "297",
	"Nome": "Anguera",
	"Estado": "5"
},
     {
	"ID": "298",
	"Nome": "Antas",
	"Estado": "5"
},
     {
	"ID": "299",
	"Nome": "Antônio Cardoso",
	"Estado": "5"
},
     {
	"ID": "300",
	"Nome": "Antônio Gonçalves",
	"Estado": "5"
},
     {
	"ID": "301",
	"Nome": "Aporá",
	"Estado": "5"
},
     {
	"ID": "302",
	"Nome": "Apuarema",
	"Estado": "5"
},
     {
	"ID": "303",
	"Nome": "Araças",
	"Estado": "5"
},
     {
	"ID": "304",
	"Nome": "Aracatu",
	"Estado": "5"
},
     {
	"ID": "305",
	"Nome": "Araci",
	"Estado": "5"
},
     {
	"ID": "306",
	"Nome": "Aramari",
	"Estado": "5"
},
     {
	"ID": "307",
	"Nome": "Arataca",
	"Estado": "5"
},
     {
	"ID": "308",
	"Nome": "Aratuípe",
	"Estado": "5"
},
     {
	"ID": "309",
	"Nome": "Aurelino Leal",
	"Estado": "5"
},
     {
	"ID": "310",
	"Nome": "Baianópolis",
	"Estado": "5"
},
     {
	"ID": "311",
	"Nome": "Baixa Grande",
	"Estado": "5"
},
     {
	"ID": "312",
	"Nome": "Banzaê",
	"Estado": "5"
},
     {
	"ID": "313",
	"Nome": "Barra",
	"Estado": "5"
},
     {
	"ID": "314",
	"Nome": "Barra da Estiva",
	"Estado": "5"
},
     {
	"ID": "315",
	"Nome": "Barra do Choça",
	"Estado": "5"
},
     {
	"ID": "316",
	"Nome": "Barra do Mendes",
	"Estado": "5"
},
     {
	"ID": "317",
	"Nome": "Barra do Rocha",
	"Estado": "5"
},
     {
	"ID": "318",
	"Nome": "Barreiras",
	"Estado": "5"
},
     {
	"ID": "319",
	"Nome": "Barro Alto",
	"Estado": "5"
},
     {
	"ID": "320",
	"Nome": "Barro Preto (antigo Gov. Lomanto Jr.)",
	"Estado": "5"
},
     {
	"ID": "321",
	"Nome": "Barrocas",
	"Estado": "5"
},
     {
	"ID": "322",
	"Nome": "Belmonte",
	"Estado": "5"
},
     {
	"ID": "323",
	"Nome": "Belo Campo",
	"Estado": "5"
},
     {
	"ID": "324",
	"Nome": "Biritinga",
	"Estado": "5"
},
     {
	"ID": "325",
	"Nome": "Boa Nova",
	"Estado": "5"
},
     {
	"ID": "326",
	"Nome": "Boa Vista do Tupim",
	"Estado": "5"
},
     {
	"ID": "327",
	"Nome": "Bom Jesus da Lapa",
	"Estado": "5"
},
     {
	"ID": "328",
	"Nome": "Bom Jesus da Serra",
	"Estado": "5"
},
     {
	"ID": "329",
	"Nome": "Boninal",
	"Estado": "5"
},
     {
	"ID": "330",
	"Nome": "Bonito",
	"Estado": "5"
},
     {
	"ID": "331",
	"Nome": "Boquira",
	"Estado": "5"
},
     {
	"ID": "332",
	"Nome": "Botuporã",
	"Estado": "5"
},
     {
	"ID": "333",
	"Nome": "Brejões",
	"Estado": "5"
},
     {
	"ID": "334",
	"Nome": "Brejolândia",
	"Estado": "5"
},
     {
	"ID": "335",
	"Nome": "Brotas de Macaúbas",
	"Estado": "5"
},
     {
	"ID": "336",
	"Nome": "Brumado",
	"Estado": "5"
},
     {
	"ID": "337",
	"Nome": "Buerarema",
	"Estado": "5"
},
     {
	"ID": "338",
	"Nome": "Buritirama",
	"Estado": "5"
},
     {
	"ID": "339",
	"Nome": "Caatiba",
	"Estado": "5"
},
     {
	"ID": "340",
	"Nome": "Cabaceiras do Paraguaçu",
	"Estado": "5"
},
     {
	"ID": "341",
	"Nome": "Cachoeira",
	"Estado": "5"
},
     {
	"ID": "342",
	"Nome": "Caculé",
	"Estado": "5"
},
     {
	"ID": "343",
	"Nome": "Caém",
	"Estado": "5"
},
     {
	"ID": "344",
	"Nome": "Caetanos",
	"Estado": "5"
},
     {
	"ID": "345",
	"Nome": "Caetité",
	"Estado": "5"
},
     {
	"ID": "346",
	"Nome": "Cafarnaum",
	"Estado": "5"
},
     {
	"ID": "347",
	"Nome": "Cairu",
	"Estado": "5"
},
     {
	"ID": "348",
	"Nome": "Caldeirão Grande",
	"Estado": "5"
},
     {
	"ID": "349",
	"Nome": "Camacan",
	"Estado": "5"
},
     {
	"ID": "350",
	"Nome": "Camaçari",
	"Estado": "5"
},
     {
	"ID": "351",
	"Nome": "Camamu",
	"Estado": "5"
},
     {
	"ID": "352",
	"Nome": "Campo Alegre de Lourdes",
	"Estado": "5"
},
     {
	"ID": "353",
	"Nome": "Campo Formoso",
	"Estado": "5"
},
     {
	"ID": "354",
	"Nome": "Canápolis",
	"Estado": "5"
},
     {
	"ID": "355",
	"Nome": "Canarana",
	"Estado": "5"
},
     {
	"ID": "356",
	"Nome": "Canavieiras",
	"Estado": "5"
},
     {
	"ID": "357",
	"Nome": "Candeal",
	"Estado": "5"
},
     {
	"ID": "358",
	"Nome": "Candeias",
	"Estado": "5"
},
     {
	"ID": "359",
	"Nome": "Candiba",
	"Estado": "5"
},
     {
	"ID": "360",
	"Nome": "Cândido Sales",
	"Estado": "5"
},
     {
	"ID": "361",
	"Nome": "Cansanção",
	"Estado": "5"
},
     {
	"ID": "362",
	"Nome": "Canudos",
	"Estado": "5"
},
     {
	"ID": "363",
	"Nome": "Capela do Alto Alegre",
	"Estado": "5"
},
     {
	"ID": "364",
	"Nome": "Capim Grosso",
	"Estado": "5"
},
     {
	"ID": "365",
	"Nome": "Caraíbas",
	"Estado": "5"
},
     {
	"ID": "366",
	"Nome": "Caravelas",
	"Estado": "5"
},
     {
	"ID": "367",
	"Nome": "Cardeal da Silva",
	"Estado": "5"
},
     {
	"ID": "368",
	"Nome": "Carinhanha",
	"Estado": "5"
},
     {
	"ID": "369",
	"Nome": "Casa Nova",
	"Estado": "5"
},
     {
	"ID": "370",
	"Nome": "Castro Alves",
	"Estado": "5"
},
     {
	"ID": "371",
	"Nome": "Catolândia",
	"Estado": "5"
},
     {
	"ID": "372",
	"Nome": "Catu",
	"Estado": "5"
},
     {
	"ID": "373",
	"Nome": "Caturama",
	"Estado": "5"
},
     {
	"ID": "374",
	"Nome": "Central",
	"Estado": "5"
},
     {
	"ID": "375",
	"Nome": "Chorrochó",
	"Estado": "5"
},
     {
	"ID": "376",
	"Nome": "Cícero Dantas",
	"Estado": "5"
},
     {
	"ID": "377",
	"Nome": "Cipó",
	"Estado": "5"
},
     {
	"ID": "378",
	"Nome": "Coaraci",
	"Estado": "5"
},
     {
	"ID": "379",
	"Nome": "Cocos",
	"Estado": "5"
},
     {
	"ID": "380",
	"Nome": "Conceição da Feira",
	"Estado": "5"
},
     {
	"ID": "381",
	"Nome": "Conceição do Almeida",
	"Estado": "5"
},
     {
	"ID": "382",
	"Nome": "Conceição do Coité",
	"Estado": "5"
},
     {
	"ID": "383",
	"Nome": "Conceição do Jacuípe",
	"Estado": "5"
},
     {
	"ID": "384",
	"Nome": "Conde",
	"Estado": "5"
},
     {
	"ID": "385",
	"Nome": "Condeúba",
	"Estado": "5"
},
     {
	"ID": "386",
	"Nome": "Contendas do Sincorá",
	"Estado": "5"
},
     {
	"ID": "387",
	"Nome": "Coração de Maria",
	"Estado": "5"
},
     {
	"ID": "388",
	"Nome": "Cordeiros",
	"Estado": "5"
},
     {
	"ID": "389",
	"Nome": "Coribe",
	"Estado": "5"
},
     {
	"ID": "390",
	"Nome": "Coronel João Sá",
	"Estado": "5"
},
     {
	"ID": "391",
	"Nome": "Correntina",
	"Estado": "5"
},
     {
	"ID": "392",
	"Nome": "Cotegipe",
	"Estado": "5"
},
     {
	"ID": "393",
	"Nome": "Cravolândia",
	"Estado": "5"
},
     {
	"ID": "394",
	"Nome": "Crisópolis",
	"Estado": "5"
},
     {
	"ID": "395",
	"Nome": "Cristópolis",
	"Estado": "5"
},
     {
	"ID": "396",
	"Nome": "Cruz das Almas",
	"Estado": "5"
},
     {
	"ID": "397",
	"Nome": "Curaçá",
	"Estado": "5"
},
     {
	"ID": "398",
	"Nome": "Dário Meira",
	"Estado": "5"
},
     {
	"ID": "399",
	"Nome": "Dias d`Ávila",
	"Estado": "5"
},
     {
	"ID": "400",
	"Nome": "Dom Basílio",
	"Estado": "5"
},
     {
	"ID": "401",
	"Nome": "Dom Macedo Costa",
	"Estado": "5"
},
     {
	"ID": "402",
	"Nome": "Elísio Medrado",
	"Estado": "5"
},
     {
	"ID": "403",
	"Nome": "Encruzilhada",
	"Estado": "5"
},
     {
	"ID": "404",
	"Nome": "Entre Rios",
	"Estado": "5"
},
     {
	"ID": "405",
	"Nome": "Érico Cardoso",
	"Estado": "5"
},
     {
	"ID": "406",
	"Nome": "Esplanada",
	"Estado": "5"
},
     {
	"ID": "407",
	"Nome": "Euclides da Cunha",
	"Estado": "5"
},
     {
	"ID": "408",
	"Nome": "Eunápolis",
	"Estado": "5"
},
     {
	"ID": "409",
	"Nome": "Fátima",
	"Estado": "5"
},
     {
	"ID": "410",
	"Nome": "Feira da Mata",
	"Estado": "5"
},
     {
	"ID": "411",
	"Nome": "Feira de Santana",
	"Estado": "5"
},
     {
	"ID": "412",
	"Nome": "Filadélfia",
	"Estado": "5"
},
     {
	"ID": "413",
	"Nome": "Firmino Alves",
	"Estado": "5"
},
     {
	"ID": "414",
	"Nome": "Floresta Azul",
	"Estado": "5"
},
     {
	"ID": "415",
	"Nome": "Formosa do Rio Preto",
	"Estado": "5"
},
     {
	"ID": "416",
	"Nome": "Gandu",
	"Estado": "5"
},
     {
	"ID": "417",
	"Nome": "Gavião",
	"Estado": "5"
},
     {
	"ID": "418",
	"Nome": "Gentio do Ouro",
	"Estado": "5"
},
     {
	"ID": "419",
	"Nome": "Glória",
	"Estado": "5"
},
     {
	"ID": "420",
	"Nome": "Gongogi",
	"Estado": "5"
},
     {
	"ID": "421",
	"Nome": "Governador Mangabeira",
	"Estado": "5"
},
     {
	"ID": "422",
	"Nome": "Guajeru",
	"Estado": "5"
},
     {
	"ID": "423",
	"Nome": "Guanambi",
	"Estado": "5"
},
     {
	"ID": "424",
	"Nome": "Guaratinga",
	"Estado": "5"
},
     {
	"ID": "425",
	"Nome": "Heliópolis",
	"Estado": "5"
},
     {
	"ID": "426",
	"Nome": "Iaçu",
	"Estado": "5"
},
     {
	"ID": "427",
	"Nome": "Ibiassucê",
	"Estado": "5"
},
     {
	"ID": "428",
	"Nome": "Ibicaraí",
	"Estado": "5"
},
     {
	"ID": "429",
	"Nome": "Ibicoara",
	"Estado": "5"
},
     {
	"ID": "430",
	"Nome": "Ibicuí",
	"Estado": "5"
},
     {
	"ID": "431",
	"Nome": "Ibipeba",
	"Estado": "5"
},
     {
	"ID": "432",
	"Nome": "Ibipitanga",
	"Estado": "5"
},
     {
	"ID": "433",
	"Nome": "Ibiquera",
	"Estado": "5"
},
     {
	"ID": "434",
	"Nome": "Ibirapitanga",
	"Estado": "5"
},
     {
	"ID": "435",
	"Nome": "Ibirapuã",
	"Estado": "5"
},
     {
	"ID": "436",
	"Nome": "Ibirataia",
	"Estado": "5"
},
     {
	"ID": "437",
	"Nome": "Ibitiara",
	"Estado": "5"
},
     {
	"ID": "438",
	"Nome": "Ibititá",
	"Estado": "5"
},
     {
	"ID": "439",
	"Nome": "Ibotirama",
	"Estado": "5"
},
     {
	"ID": "440",
	"Nome": "Ichu",
	"Estado": "5"
},
     {
	"ID": "441",
	"Nome": "Igaporã",
	"Estado": "5"
},
     {
	"ID": "442",
	"Nome": "Igrapiúna",
	"Estado": "5"
},
     {
	"ID": "443",
	"Nome": "Iguaí",
	"Estado": "5"
},
     {
	"ID": "444",
	"Nome": "Ilhéus",
	"Estado": "5"
},
     {
	"ID": "445",
	"Nome": "Inhambupe",
	"Estado": "5"
},
     {
	"ID": "446",
	"Nome": "Ipecaetá",
	"Estado": "5"
},
     {
	"ID": "447",
	"Nome": "Ipiaú",
	"Estado": "5"
},
     {
	"ID": "448",
	"Nome": "Ipirá",
	"Estado": "5"
},
     {
	"ID": "449",
	"Nome": "Ipupiara",
	"Estado": "5"
},
     {
	"ID": "450",
	"Nome": "Irajuba",
	"Estado": "5"
},
     {
	"ID": "451",
	"Nome": "Iramaia",
	"Estado": "5"
},
     {
	"ID": "452",
	"Nome": "Iraquara",
	"Estado": "5"
},
     {
	"ID": "453",
	"Nome": "Irará",
	"Estado": "5"
},
     {
	"ID": "454",
	"Nome": "Irecê",
	"Estado": "5"
},
     {
	"ID": "455",
	"Nome": "Itabela",
	"Estado": "5"
},
     {
	"ID": "456",
	"Nome": "Itaberaba",
	"Estado": "5"
},
     {
	"ID": "457",
	"Nome": "Itabuna",
	"Estado": "5"
},
     {
	"ID": "458",
	"Nome": "Itacaré",
	"Estado": "5"
},
     {
	"ID": "459",
	"Nome": "Itaeté",
	"Estado": "5"
},
     {
	"ID": "460",
	"Nome": "Itagi",
	"Estado": "5"
},
     {
	"ID": "461",
	"Nome": "Itagibá",
	"Estado": "5"
},
     {
	"ID": "462",
	"Nome": "Itagimirim",
	"Estado": "5"
},
     {
	"ID": "463",
	"Nome": "Itaguaçu da Bahia",
	"Estado": "5"
},
     {
	"ID": "464",
	"Nome": "Itaju do Colônia",
	"Estado": "5"
},
     {
	"ID": "465",
	"Nome": "Itajuípe",
	"Estado": "5"
},
     {
	"ID": "466",
	"Nome": "Itamaraju",
	"Estado": "5"
},
     {
	"ID": "467",
	"Nome": "Itamari",
	"Estado": "5"
},
     {
	"ID": "468",
	"Nome": "Itambé",
	"Estado": "5"
},
     {
	"ID": "469",
	"Nome": "Itanagra",
	"Estado": "5"
},
     {
	"ID": "470",
	"Nome": "Itanhém",
	"Estado": "5"
},
     {
	"ID": "471",
	"Nome": "Itaparica",
	"Estado": "5"
},
     {
	"ID": "472",
	"Nome": "Itapé",
	"Estado": "5"
},
     {
	"ID": "473",
	"Nome": "Itapebi",
	"Estado": "5"
},
     {
	"ID": "474",
	"Nome": "Itapetinga",
	"Estado": "5"
},
     {
	"ID": "475",
	"Nome": "Itapicuru",
	"Estado": "5"
},
     {
	"ID": "476",
	"Nome": "Itapitanga",
	"Estado": "5"
},
     {
	"ID": "477",
	"Nome": "Itaquara",
	"Estado": "5"
},
     {
	"ID": "478",
	"Nome": "Itarantim",
	"Estado": "5"
},
     {
	"ID": "479",
	"Nome": "Itatim",
	"Estado": "5"
},
     {
	"ID": "480",
	"Nome": "Itiruçu",
	"Estado": "5"
},
     {
	"ID": "481",
	"Nome": "Itiúba",
	"Estado": "5"
},
     {
	"ID": "482",
	"Nome": "Itororó",
	"Estado": "5"
},
     {
	"ID": "483",
	"Nome": "Ituaçu",
	"Estado": "5"
},
     {
	"ID": "484",
	"Nome": "Ituberá",
	"Estado": "5"
},
     {
	"ID": "485",
	"Nome": "Iuiú",
	"Estado": "5"
},
     {
	"ID": "486",
	"Nome": "Jaborandi",
	"Estado": "5"
},
     {
	"ID": "487",
	"Nome": "Jacaraci",
	"Estado": "5"
},
     {
	"ID": "488",
	"Nome": "Jacobina",
	"Estado": "5"
},
     {
	"ID": "489",
	"Nome": "Jaguaquara",
	"Estado": "5"
},
     {
	"ID": "490",
	"Nome": "Jaguarari",
	"Estado": "5"
},
     {
	"ID": "491",
	"Nome": "Jaguaripe",
	"Estado": "5"
},
     {
	"ID": "492",
	"Nome": "Jandaíra",
	"Estado": "5"
},
     {
	"ID": "493",
	"Nome": "Jequié",
	"Estado": "5"
},
     {
	"ID": "494",
	"Nome": "Jeremoabo",
	"Estado": "5"
},
     {
	"ID": "495",
	"Nome": "Jiquiriçá",
	"Estado": "5"
},
     {
	"ID": "496",
	"Nome": "Jitaúna",
	"Estado": "5"
},
     {
	"ID": "497",
	"Nome": "João Dourado",
	"Estado": "5"
},
     {
	"ID": "498",
	"Nome": "Juazeiro",
	"Estado": "5"
},
     {
	"ID": "499",
	"Nome": "Jucuruçu",
	"Estado": "5"
},
     {
	"ID": "500",
	"Nome": "Jussara",
	"Estado": "5"
},
     {
	"ID": "501",
	"Nome": "Jussari",
	"Estado": "5"
},
     {
	"ID": "502",
	"Nome": "Jussiape",
	"Estado": "5"
},
     {
	"ID": "503",
	"Nome": "Lafaiete Coutinho",
	"Estado": "5"
},
     {
	"ID": "504",
	"Nome": "Lagoa Real",
	"Estado": "5"
},
     {
	"ID": "505",
	"Nome": "Laje",
	"Estado": "5"
},
     {
	"ID": "506",
	"Nome": "Lajedão",
	"Estado": "5"
},
     {
	"ID": "507",
	"Nome": "Lajedinho",
	"Estado": "5"
},
     {
	"ID": "508",
	"Nome": "Lajedo do Tabocal",
	"Estado": "5"
},
     {
	"ID": "509",
	"Nome": "Lamarão",
	"Estado": "5"
},
     {
	"ID": "510",
	"Nome": "Lapão",
	"Estado": "5"
},
     {
	"ID": "511",
	"Nome": "Lauro de Freitas",
	"Estado": "5"
},
     {
	"ID": "512",
	"Nome": "Lençóis",
	"Estado": "5"
},
     {
	"ID": "513",
	"Nome": "Licínio de Almeida",
	"Estado": "5"
},
     {
	"ID": "514",
	"Nome": "Livramento de Nossa Senhora",
	"Estado": "5"
},
     {
	"ID": "515",
	"Nome": "Luís Eduardo Magalhães",
	"Estado": "5"
},
     {
	"ID": "516",
	"Nome": "Macajuba",
	"Estado": "5"
},
     {
	"ID": "517",
	"Nome": "Macarani",
	"Estado": "5"
},
     {
	"ID": "518",
	"Nome": "Macaúbas",
	"Estado": "5"
},
     {
	"ID": "519",
	"Nome": "Macururé",
	"Estado": "5"
},
     {
	"ID": "520",
	"Nome": "Madre de Deus",
	"Estado": "5"
},
     {
	"ID": "521",
	"Nome": "Maetinga",
	"Estado": "5"
},
     {
	"ID": "522",
	"Nome": "Maiquinique",
	"Estado": "5"
},
     {
	"ID": "523",
	"Nome": "Mairi",
	"Estado": "5"
},
     {
	"ID": "524",
	"Nome": "Malhada",
	"Estado": "5"
},
     {
	"ID": "525",
	"Nome": "Malhada de Pedras",
	"Estado": "5"
},
     {
	"ID": "526",
	"Nome": "Manoel Vitorino",
	"Estado": "5"
},
     {
	"ID": "527",
	"Nome": "Mansidão",
	"Estado": "5"
},
     {
	"ID": "528",
	"Nome": "Maracás",
	"Estado": "5"
},
     {
	"ID": "529",
	"Nome": "Maragogipe",
	"Estado": "5"
},
     {
	"ID": "530",
	"Nome": "Maraú",
	"Estado": "5"
},
     {
	"ID": "531",
	"Nome": "Marcionílio Souza",
	"Estado": "5"
},
     {
	"ID": "532",
	"Nome": "Mascote",
	"Estado": "5"
},
     {
	"ID": "533",
	"Nome": "Mata de São João",
	"Estado": "5"
},
     {
	"ID": "534",
	"Nome": "Matina",
	"Estado": "5"
},
     {
	"ID": "535",
	"Nome": "Medeiros Neto",
	"Estado": "5"
},
     {
	"ID": "536",
	"Nome": "Miguel Calmon",
	"Estado": "5"
},
     {
	"ID": "537",
	"Nome": "Milagres",
	"Estado": "5"
},
     {
	"ID": "538",
	"Nome": "Mirangaba",
	"Estado": "5"
},
     {
	"ID": "539",
	"Nome": "Mirante",
	"Estado": "5"
},
     {
	"ID": "540",
	"Nome": "Monte Santo",
	"Estado": "5"
},
     {
	"ID": "541",
	"Nome": "Morpará",
	"Estado": "5"
},
     {
	"ID": "542",
	"Nome": "Morro do Chapéu",
	"Estado": "5"
},
     {
	"ID": "543",
	"Nome": "Mortugaba",
	"Estado": "5"
},
     {
	"ID": "544",
	"Nome": "Mucugê",
	"Estado": "5"
},
     {
	"ID": "545",
	"Nome": "Mucuri",
	"Estado": "5"
},
     {
	"ID": "546",
	"Nome": "Mulungu do Morro",
	"Estado": "5"
},
     {
	"ID": "547",
	"Nome": "Mundo Novo",
	"Estado": "5"
},
     {
	"ID": "548",
	"Nome": "Muniz Ferreira",
	"Estado": "5"
},
     {
	"ID": "549",
	"Nome": "Muquém de São Francisco",
	"Estado": "5"
},
     {
	"ID": "550",
	"Nome": "Muritiba",
	"Estado": "5"
},
     {
	"ID": "551",
	"Nome": "Mutuípe",
	"Estado": "5"
},
     {
	"ID": "552",
	"Nome": "Nazaré",
	"Estado": "5"
},
     {
	"ID": "553",
	"Nome": "Nilo Peçanha",
	"Estado": "5"
},
     {
	"ID": "554",
	"Nome": "Nordestina",
	"Estado": "5"
},
     {
	"ID": "555",
	"Nome": "Nova Canaã",
	"Estado": "5"
},
     {
	"ID": "556",
	"Nome": "Nova Fátima",
	"Estado": "5"
},
     {
	"ID": "557",
	"Nome": "Nova Ibiá",
	"Estado": "5"
},
     {
	"ID": "558",
	"Nome": "Nova Itarana",
	"Estado": "5"
},
     {
	"ID": "559",
	"Nome": "Nova Redenção",
	"Estado": "5"
},
     {
	"ID": "560",
	"Nome": "Nova Soure",
	"Estado": "5"
},
     {
	"ID": "561",
	"Nome": "Nova Viçosa",
	"Estado": "5"
},
     {
	"ID": "562",
	"Nome": "Novo Horizonte",
	"Estado": "5"
},
     {
	"ID": "563",
	"Nome": "Novo Triunfo",
	"Estado": "5"
},
     {
	"ID": "564",
	"Nome": "Olindina",
	"Estado": "5"
},
     {
	"ID": "565",
	"Nome": "Oliveira dos Brejinhos",
	"Estado": "5"
},
     {
	"ID": "566",
	"Nome": "Ouriçangas",
	"Estado": "5"
},
     {
	"ID": "567",
	"Nome": "Ourolândia",
	"Estado": "5"
},
     {
	"ID": "568",
	"Nome": "Palmas de Monte Alto",
	"Estado": "5"
},
     {
	"ID": "569",
	"Nome": "Palmeiras",
	"Estado": "5"
},
     {
	"ID": "570",
	"Nome": "Paramirim",
	"Estado": "5"
},
     {
	"ID": "571",
	"Nome": "Paratinga",
	"Estado": "5"
},
     {
	"ID": "572",
	"Nome": "Paripiranga",
	"Estado": "5"
},
     {
	"ID": "573",
	"Nome": "Pau Brasil",
	"Estado": "5"
},
     {
	"ID": "574",
	"Nome": "Paulo Afonso",
	"Estado": "5"
},
     {
	"ID": "575",
	"Nome": "Pé de Serra",
	"Estado": "5"
},
     {
	"ID": "576",
	"Nome": "Pedrão",
	"Estado": "5"
},
     {
	"ID": "577",
	"Nome": "Pedro Alexandre",
	"Estado": "5"
},
     {
	"ID": "578",
	"Nome": "Piatã",
	"Estado": "5"
},
     {
	"ID": "579",
	"Nome": "Pilão Arcado",
	"Estado": "5"
},
     {
	"ID": "580",
	"Nome": "Pindaí",
	"Estado": "5"
},
     {
	"ID": "581",
	"Nome": "Pindobaçu",
	"Estado": "5"
},
     {
	"ID": "582",
	"Nome": "Pintadas",
	"Estado": "5"
},
     {
	"ID": "583",
	"Nome": "Piraí do Norte",
	"Estado": "5"
},
     {
	"ID": "584",
	"Nome": "Piripá",
	"Estado": "5"
},
     {
	"ID": "585",
	"Nome": "Piritiba",
	"Estado": "5"
},
     {
	"ID": "586",
	"Nome": "Planaltino",
	"Estado": "5"
},
     {
	"ID": "587",
	"Nome": "Planalto",
	"Estado": "5"
},
     {
	"ID": "588",
	"Nome": "Poções",
	"Estado": "5"
},
     {
	"ID": "589",
	"Nome": "Pojuca",
	"Estado": "5"
},
     {
	"ID": "590",
	"Nome": "Ponto Novo",
	"Estado": "5"
},
     {
	"ID": "591",
	"Nome": "Porto Seguro",
	"Estado": "5"
},
     {
	"ID": "592",
	"Nome": "Potiraguá",
	"Estado": "5"
},
     {
	"ID": "593",
	"Nome": "Prado",
	"Estado": "5"
},
     {
	"ID": "594",
	"Nome": "Presidente Dutra",
	"Estado": "5"
},
     {
	"ID": "595",
	"Nome": "Presidente Jânio Quadros",
	"Estado": "5"
},
     {
	"ID": "596",
	"Nome": "Presidente Tancredo Neves",
	"Estado": "5"
},
     {
	"ID": "597",
	"Nome": "Queimadas",
	"Estado": "5"
},
     {
	"ID": "598",
	"Nome": "Quijingue",
	"Estado": "5"
},
     {
	"ID": "599",
	"Nome": "Quixabeira",
	"Estado": "5"
},
     {
	"ID": "600",
	"Nome": "Rafael Jambeiro",
	"Estado": "5"
},
     {
	"ID": "601",
	"Nome": "Remanso",
	"Estado": "5"
},
     {
	"ID": "602",
	"Nome": "Retirolândia",
	"Estado": "5"
},
     {
	"ID": "603",
	"Nome": "Riachão das Neves",
	"Estado": "5"
},
     {
	"ID": "604",
	"Nome": "Riachão do Jacuípe",
	"Estado": "5"
},
     {
	"ID": "605",
	"Nome": "Riacho de Santana",
	"Estado": "5"
},
     {
	"ID": "606",
	"Nome": "Ribeira do Amparo",
	"Estado": "5"
},
     {
	"ID": "607",
	"Nome": "Ribeira do Pombal",
	"Estado": "5"
},
     {
	"ID": "608",
	"Nome": "Ribeirão do Largo",
	"Estado": "5"
},
     {
	"ID": "609",
	"Nome": "Rio de Contas",
	"Estado": "5"
},
     {
	"ID": "610",
	"Nome": "Rio do Antônio",
	"Estado": "5"
},
     {
	"ID": "611",
	"Nome": "Rio do Pires",
	"Estado": "5"
},
     {
	"ID": "612",
	"Nome": "Rio Real",
	"Estado": "5"
},
     {
	"ID": "613",
	"Nome": "Rodelas",
	"Estado": "5"
},
     {
	"ID": "614",
	"Nome": "Ruy Barbosa",
	"Estado": "5"
},
     {
	"ID": "615",
	"Nome": "Salinas da Margarida",
	"Estado": "5"
},
     {
	"ID": "616",
	"Nome": "Salvador",
	"Estado": "5"
},
     {
	"ID": "617",
	"Nome": "Santa Bárbara",
	"Estado": "5"
},
     {
	"ID": "618",
	"Nome": "Santa Brígida",
	"Estado": "5"
},
     {
	"ID": "619",
	"Nome": "Santa Cruz Cabrália",
	"Estado": "5"
},
     {
	"ID": "620",
	"Nome": "Santa Cruz da Vitória",
	"Estado": "5"
},
     {
	"ID": "621",
	"Nome": "Santa Inês",
	"Estado": "5"
},
     {
	"ID": "622",
	"Nome": "Santa Luzia",
	"Estado": "5"
},
     {
	"ID": "623",
	"Nome": "Santa Maria da Vitória",
	"Estado": "5"
},
     {
	"ID": "624",
	"Nome": "Santa Rita de Cássia",
	"Estado": "5"
},
     {
	"ID": "625",
	"Nome": "Santa Teresinha",
	"Estado": "5"
},
     {
	"ID": "626",
	"Nome": "Santaluz",
	"Estado": "5"
},
     {
	"ID": "627",
	"Nome": "Santana",
	"Estado": "5"
},
     {
	"ID": "628",
	"Nome": "Santanópolis",
	"Estado": "5"
},
     {
	"ID": "629",
	"Nome": "Santo Amaro",
	"Estado": "5"
},
     {
	"ID": "630",
	"Nome": "Santo Antônio de Jesus",
	"Estado": "5"
},
     {
	"ID": "631",
	"Nome": "Santo Estêvão",
	"Estado": "5"
},
     {
	"ID": "632",
	"Nome": "São Desidério",
	"Estado": "5"
},
     {
	"ID": "633",
	"Nome": "São Domingos",
	"Estado": "5"
},
     {
	"ID": "634",
	"Nome": "São Felipe",
	"Estado": "5"
},
     {
	"ID": "635",
	"Nome": "São Félix",
	"Estado": "5"
},
     {
	"ID": "636",
	"Nome": "São Félix do Coribe",
	"Estado": "5"
},
     {
	"ID": "637",
	"Nome": "São Francisco do Conde",
	"Estado": "5"
},
     {
	"ID": "638",
	"Nome": "São Gabriel",
	"Estado": "5"
},
     {
	"ID": "639",
	"Nome": "São Gonçalo dos Campos",
	"Estado": "5"
},
     {
	"ID": "640",
	"Nome": "São José da Vitória",
	"Estado": "5"
},
     {
	"ID": "641",
	"Nome": "São José do Jacuípe",
	"Estado": "5"
},
     {
	"ID": "642",
	"Nome": "São Miguel das Matas",
	"Estado": "5"
},
     {
	"ID": "643",
	"Nome": "São Sebastião do Passé",
	"Estado": "5"
},
     {
	"ID": "644",
	"Nome": "Sapeaçu",
	"Estado": "5"
},
     {
	"ID": "645",
	"Nome": "Sátiro Dias",
	"Estado": "5"
},
     {
	"ID": "646",
	"Nome": "Saubara",
	"Estado": "5"
},
     {
	"ID": "647",
	"Nome": "Saúde",
	"Estado": "5"
},
     {
	"ID": "648",
	"Nome": "Seabra",
	"Estado": "5"
},
     {
	"ID": "649",
	"Nome": "Sebastião Laranjeiras",
	"Estado": "5"
},
     {
	"ID": "650",
	"Nome": "Senhor do Bonfim",
	"Estado": "5"
},
     {
	"ID": "651",
	"Nome": "Sento Sé",
	"Estado": "5"
},
     {
	"ID": "652",
	"Nome": "Serra do Ramalho",
	"Estado": "5"
},
     {
	"ID": "653",
	"Nome": "Serra Dourada",
	"Estado": "5"
},
     {
	"ID": "654",
	"Nome": "Serra Preta",
	"Estado": "5"
},
     {
	"ID": "655",
	"Nome": "Serrinha",
	"Estado": "5"
},
     {
	"ID": "656",
	"Nome": "Serrolândia",
	"Estado": "5"
},
     {
	"ID": "657",
	"Nome": "Simões Filho",
	"Estado": "5"
},
     {
	"ID": "658",
	"Nome": "Sítio do Mato",
	"Estado": "5"
},
     {
	"ID": "659",
	"Nome": "Sítio do Quinto",
	"Estado": "5"
},
     {
	"ID": "660",
	"Nome": "Sobradinho",
	"Estado": "5"
},
     {
	"ID": "661",
	"Nome": "Souto Soares",
	"Estado": "5"
},
     {
	"ID": "662",
	"Nome": "Tabocas do Brejo Velho",
	"Estado": "5"
},
     {
	"ID": "663",
	"Nome": "Tanhaçu",
	"Estado": "5"
},
     {
	"ID": "664",
	"Nome": "Tanque Novo",
	"Estado": "5"
},
     {
	"ID": "665",
	"Nome": "Tanquinho",
	"Estado": "5"
},
     {
	"ID": "666",
	"Nome": "Taperoá",
	"Estado": "5"
},
     {
	"ID": "667",
	"Nome": "Tapiramutá",
	"Estado": "5"
},
     {
	"ID": "668",
	"Nome": "Teixeira de Freitas",
	"Estado": "5"
},
     {
	"ID": "669",
	"Nome": "Teodoro Sampaio",
	"Estado": "5"
},
     {
	"ID": "670",
	"Nome": "Teofilândia",
	"Estado": "5"
},
     {
	"ID": "671",
	"Nome": "Teolândia",
	"Estado": "5"
},
     {
	"ID": "672",
	"Nome": "Terra Nova",
	"Estado": "5"
},
     {
	"ID": "673",
	"Nome": "Tremedal",
	"Estado": "5"
},
     {
	"ID": "674",
	"Nome": "Tucano",
	"Estado": "5"
},
     {
	"ID": "675",
	"Nome": "Uauá",
	"Estado": "5"
},
     {
	"ID": "676",
	"Nome": "Ubaíra",
	"Estado": "5"
},
     {
	"ID": "677",
	"Nome": "Ubaitaba",
	"Estado": "5"
},
     {
	"ID": "678",
	"Nome": "Ubatã",
	"Estado": "5"
},
     {
	"ID": "679",
	"Nome": "Uibaí",
	"Estado": "5"
},
     {
	"ID": "680",
	"Nome": "Umburanas",
	"Estado": "5"
},
     {
	"ID": "681",
	"Nome": "Una",
	"Estado": "5"
},
     {
	"ID": "682",
	"Nome": "Urandi",
	"Estado": "5"
},
     {
	"ID": "683",
	"Nome": "Uruçuca",
	"Estado": "5"
},
     {
	"ID": "684",
	"Nome": "Utinga",
	"Estado": "5"
},
     {
	"ID": "685",
	"Nome": "Valença",
	"Estado": "5"
},
     {
	"ID": "686",
	"Nome": "Valente",
	"Estado": "5"
},
     {
	"ID": "687",
	"Nome": "Várzea da Roça",
	"Estado": "5"
},
     {
	"ID": "688",
	"Nome": "Várzea do Poço",
	"Estado": "5"
},
     {
	"ID": "689",
	"Nome": "Várzea Nova",
	"Estado": "5"
},
     {
	"ID": "690",
	"Nome": "Varzedo",
	"Estado": "5"
},
     {
	"ID": "691",
	"Nome": "Vera Cruz",
	"Estado": "5"
},
     {
	"ID": "692",
	"Nome": "Vereda",
	"Estado": "5"
},
     {
	"ID": "693",
	"Nome": "Vitória da Conquista",
	"Estado": "5"
},
     {
	"ID": "694",
	"Nome": "Wagner",
	"Estado": "5"
},
     {
	"ID": "695",
	"Nome": "Wanderley",
	"Estado": "5"
},
     {
	"ID": "696",
	"Nome": "Wenceslau Guimarães",
	"Estado": "5"
},
     {
	"ID": "697",
	"Nome": "Xique-Xique",
	"Estado": "5"
},
     {
	"ID": "698",
	"Nome": "Abaiara",
	"Estado": "6"
},
     {
	"ID": "699",
	"Nome": "Acarape",
	"Estado": "6"
},
     {
	"ID": "700",
	"Nome": "Acaraú",
	"Estado": "6"
},
     {
	"ID": "701",
	"Nome": "Acopiara",
	"Estado": "6"
},
     {
	"ID": "702",
	"Nome": "Aiuaba",
	"Estado": "6"
},
     {
	"ID": "703",
	"Nome": "Alcântaras",
	"Estado": "6"
},
     {
	"ID": "704",
	"Nome": "Altaneira",
	"Estado": "6"
},
     {
	"ID": "705",
	"Nome": "Alto Santo",
	"Estado": "6"
},
     {
	"ID": "706",
	"Nome": "Amontada",
	"Estado": "6"
},
     {
	"ID": "707",
	"Nome": "Antonina do Norte",
	"Estado": "6"
},
     {
	"ID": "708",
	"Nome": "Apuiarés",
	"Estado": "6"
},
     {
	"ID": "709",
	"Nome": "Aquiraz",
	"Estado": "6"
},
     {
	"ID": "710",
	"Nome": "Aracati",
	"Estado": "6"
},
     {
	"ID": "711",
	"Nome": "Aracoiaba",
	"Estado": "6"
},
     {
	"ID": "712",
	"Nome": "Ararendá",
	"Estado": "6"
},
     {
	"ID": "713",
	"Nome": "Araripe",
	"Estado": "6"
},
     {
	"ID": "714",
	"Nome": "Aratuba",
	"Estado": "6"
},
     {
	"ID": "715",
	"Nome": "Arneiroz",
	"Estado": "6"
},
     {
	"ID": "716",
	"Nome": "Assaré",
	"Estado": "6"
},
     {
	"ID": "717",
	"Nome": "Aurora",
	"Estado": "6"
},
     {
	"ID": "718",
	"Nome": "Baixio",
	"Estado": "6"
},
     {
	"ID": "719",
	"Nome": "Banabuiú",
	"Estado": "6"
},
     {
	"ID": "720",
	"Nome": "Barbalha",
	"Estado": "6"
},
     {
	"ID": "721",
	"Nome": "Barreira",
	"Estado": "6"
},
     {
	"ID": "722",
	"Nome": "Barro",
	"Estado": "6"
},
     {
	"ID": "723",
	"Nome": "Barroquinha",
	"Estado": "6"
},
     {
	"ID": "724",
	"Nome": "Baturité",
	"Estado": "6"
},
     {
	"ID": "725",
	"Nome": "Beberibe",
	"Estado": "6"
},
     {
	"ID": "726",
	"Nome": "Bela Cruz",
	"Estado": "6"
},
     {
	"ID": "727",
	"Nome": "Boa Viagem",
	"Estado": "6"
},
     {
	"ID": "728",
	"Nome": "Brejo Santo",
	"Estado": "6"
},
     {
	"ID": "729",
	"Nome": "Camocim",
	"Estado": "6"
},
     {
	"ID": "730",
	"Nome": "Campos Sales",
	"Estado": "6"
},
     {
	"ID": "731",
	"Nome": "Canindé",
	"Estado": "6"
},
     {
	"ID": "732",
	"Nome": "Capistrano",
	"Estado": "6"
},
     {
	"ID": "733",
	"Nome": "Caridade",
	"Estado": "6"
},
     {
	"ID": "734",
	"Nome": "Cariré",
	"Estado": "6"
},
     {
	"ID": "735",
	"Nome": "Caririaçu",
	"Estado": "6"
},
     {
	"ID": "736",
	"Nome": "Cariús",
	"Estado": "6"
},
     {
	"ID": "737",
	"Nome": "Carnaubal",
	"Estado": "6"
},
     {
	"ID": "738",
	"Nome": "Cascavel",
	"Estado": "6"
},
     {
	"ID": "739",
	"Nome": "Catarina",
	"Estado": "6"
},
     {
	"ID": "740",
	"Nome": "Catunda",
	"Estado": "6"
},
     {
	"ID": "741",
	"Nome": "Caucaia",
	"Estado": "6"
},
     {
	"ID": "742",
	"Nome": "Cedro",
	"Estado": "6"
},
     {
	"ID": "743",
	"Nome": "Chaval",
	"Estado": "6"
},
     {
	"ID": "744",
	"Nome": "Choró",
	"Estado": "6"
},
     {
	"ID": "745",
	"Nome": "Chorozinho",
	"Estado": "6"
},
     {
	"ID": "746",
	"Nome": "Coreaú",
	"Estado": "6"
},
     {
	"ID": "747",
	"Nome": "Crateús",
	"Estado": "6"
},
     {
	"ID": "748",
	"Nome": "Crato",
	"Estado": "6"
},
     {
	"ID": "749",
	"Nome": "Croatá",
	"Estado": "6"
},
     {
	"ID": "750",
	"Nome": "Cruz",
	"Estado": "6"
},
     {
	"ID": "751",
	"Nome": "Deputado Irapuan Pinheiro",
	"Estado": "6"
},
     {
	"ID": "752",
	"Nome": "Ererê",
	"Estado": "6"
},
     {
	"ID": "753",
	"Nome": "Eusébio",
	"Estado": "6"
},
     {
	"ID": "754",
	"Nome": "Farias Brito",
	"Estado": "6"
},
     {
	"ID": "755",
	"Nome": "Forquilha",
	"Estado": "6"
},
     {
	"ID": "756",
	"Nome": "Fortaleza",
	"Estado": "6"
},
     {
	"ID": "757",
	"Nome": "Fortim",
	"Estado": "6"
},
     {
	"ID": "758",
	"Nome": "Frecheirinha",
	"Estado": "6"
},
     {
	"ID": "759",
	"Nome": "General Sampaio",
	"Estado": "6"
},
     {
	"ID": "760",
	"Nome": "Graça",
	"Estado": "6"
},
     {
	"ID": "761",
	"Nome": "Granja",
	"Estado": "6"
},
     {
	"ID": "762",
	"Nome": "Granjeiro",
	"Estado": "6"
},
     {
	"ID": "763",
	"Nome": "Groaíras",
	"Estado": "6"
},
     {
	"ID": "764",
	"Nome": "Guaiúba",
	"Estado": "6"
},
     {
	"ID": "765",
	"Nome": "Guaraciaba do Norte",
	"Estado": "6"
},
     {
	"ID": "766",
	"Nome": "Guaramiranga",
	"Estado": "6"
},
     {
	"ID": "767",
	"Nome": "Hidrolândia",
	"Estado": "6"
},
     {
	"ID": "768",
	"Nome": "Horizonte",
	"Estado": "6"
},
     {
	"ID": "769",
	"Nome": "Ibaretama",
	"Estado": "6"
},
     {
	"ID": "770",
	"Nome": "Ibiapina",
	"Estado": "6"
},
     {
	"ID": "771",
	"Nome": "Ibicuitinga",
	"Estado": "6"
},
     {
	"ID": "772",
	"Nome": "Icapuí",
	"Estado": "6"
},
     {
	"ID": "773",
	"Nome": "Icó",
	"Estado": "6"
},
     {
	"ID": "774",
	"Nome": "Iguatu",
	"Estado": "6"
},
     {
	"ID": "775",
	"Nome": "Independência",
	"Estado": "6"
},
     {
	"ID": "776",
	"Nome": "Ipaporanga",
	"Estado": "6"
},
     {
	"ID": "777",
	"Nome": "Ipaumirim",
	"Estado": "6"
},
     {
	"ID": "778",
	"Nome": "Ipu",
	"Estado": "6"
},
     {
	"ID": "779",
	"Nome": "Ipueiras",
	"Estado": "6"
},
     {
	"ID": "780",
	"Nome": "Iracema",
	"Estado": "6"
},
     {
	"ID": "781",
	"Nome": "Irauçuba",
	"Estado": "6"
},
     {
	"ID": "782",
	"Nome": "Itaiçaba",
	"Estado": "6"
},
     {
	"ID": "783",
	"Nome": "Itaitinga",
	"Estado": "6"
},
     {
	"ID": "784",
	"Nome": "Itapagé",
	"Estado": "6"
},
     {
	"ID": "785",
	"Nome": "Itapipoca",
	"Estado": "6"
},
     {
	"ID": "786",
	"Nome": "Itapiúna",
	"Estado": "6"
},
     {
	"ID": "787",
	"Nome": "Itarema",
	"Estado": "6"
},
     {
	"ID": "788",
	"Nome": "Itatira",
	"Estado": "6"
},
     {
	"ID": "789",
	"Nome": "Jaguaretama",
	"Estado": "6"
},
     {
	"ID": "790",
	"Nome": "Jaguaribara",
	"Estado": "6"
},
     {
	"ID": "791",
	"Nome": "Jaguaribe",
	"Estado": "6"
},
     {
	"ID": "792",
	"Nome": "Jaguaruana",
	"Estado": "6"
},
     {
	"ID": "793",
	"Nome": "Jardim",
	"Estado": "6"
},
     {
	"ID": "794",
	"Nome": "Jati",
	"Estado": "6"
},
     {
	"ID": "795",
	"Nome": "Jijoca de Jericoacoara",
	"Estado": "6"
},
     {
	"ID": "796",
	"Nome": "Juazeiro do Norte",
	"Estado": "6"
},
     {
	"ID": "797",
	"Nome": "Jucás",
	"Estado": "6"
},
     {
	"ID": "798",
	"Nome": "Lavras da Mangabeira",
	"Estado": "6"
},
     {
	"ID": "799",
	"Nome": "Limoeiro do Norte",
	"Estado": "6"
},
     {
	"ID": "800",
	"Nome": "Madalena",
	"Estado": "6"
},
     {
	"ID": "801",
	"Nome": "Maracanaú",
	"Estado": "6"
},
     {
	"ID": "802",
	"Nome": "Maranguape",
	"Estado": "6"
},
     {
	"ID": "803",
	"Nome": "Marco",
	"Estado": "6"
},
     {
	"ID": "804",
	"Nome": "Martinópole",
	"Estado": "6"
},
     {
	"ID": "805",
	"Nome": "Massapê",
	"Estado": "6"
},
     {
	"ID": "806",
	"Nome": "Mauriti",
	"Estado": "6"
},
     {
	"ID": "807",
	"Nome": "Meruoca",
	"Estado": "6"
},
     {
	"ID": "808",
	"Nome": "Milagres",
	"Estado": "6"
},
     {
	"ID": "809",
	"Nome": "Milhã",
	"Estado": "6"
},
     {
	"ID": "810",
	"Nome": "Miraíma",
	"Estado": "6"
},
     {
	"ID": "811",
	"Nome": "Missão Velha",
	"Estado": "6"
},
     {
	"ID": "812",
	"Nome": "Mombaça",
	"Estado": "6"
},
     {
	"ID": "813",
	"Nome": "Monsenhor Tabosa",
	"Estado": "6"
},
     {
	"ID": "814",
	"Nome": "Morada Nova",
	"Estado": "6"
},
     {
	"ID": "815",
	"Nome": "Moraújo",
	"Estado": "6"
},
     {
	"ID": "816",
	"Nome": "Morrinhos",
	"Estado": "6"
},
     {
	"ID": "817",
	"Nome": "Mucambo",
	"Estado": "6"
},
     {
	"ID": "818",
	"Nome": "Mulungu",
	"Estado": "6"
},
     {
	"ID": "819",
	"Nome": "Nova Olinda",
	"Estado": "6"
},
     {
	"ID": "820",
	"Nome": "Nova Russas",
	"Estado": "6"
},
     {
	"ID": "821",
	"Nome": "Novo Oriente",
	"Estado": "6"
},
     {
	"ID": "822",
	"Nome": "Ocara",
	"Estado": "6"
},
     {
	"ID": "823",
	"Nome": "Orós",
	"Estado": "6"
},
     {
	"ID": "824",
	"Nome": "Pacajus",
	"Estado": "6"
},
     {
	"ID": "825",
	"Nome": "Pacatuba",
	"Estado": "6"
},
     {
	"ID": "826",
	"Nome": "Pacoti",
	"Estado": "6"
},
     {
	"ID": "827",
	"Nome": "Pacujá",
	"Estado": "6"
},
     {
	"ID": "828",
	"Nome": "Palhano",
	"Estado": "6"
},
     {
	"ID": "829",
	"Nome": "Palmácia",
	"Estado": "6"
},
     {
	"ID": "830",
	"Nome": "Paracuru",
	"Estado": "6"
},
     {
	"ID": "831",
	"Nome": "Paraipaba",
	"Estado": "6"
},
     {
	"ID": "832",
	"Nome": "Parambu",
	"Estado": "6"
},
     {
	"ID": "833",
	"Nome": "Paramoti",
	"Estado": "6"
},
     {
	"ID": "834",
	"Nome": "Pedra Branca",
	"Estado": "6"
},
     {
	"ID": "835",
	"Nome": "Penaforte",
	"Estado": "6"
},
     {
	"ID": "836",
	"Nome": "Pentecoste",
	"Estado": "6"
},
     {
	"ID": "837",
	"Nome": "Pereiro",
	"Estado": "6"
},
     {
	"ID": "838",
	"Nome": "Pindoretama",
	"Estado": "6"
},
     {
	"ID": "839",
	"Nome": "Piquet Carneiro",
	"Estado": "6"
},
     {
	"ID": "840",
	"Nome": "Pires Ferreira",
	"Estado": "6"
},
     {
	"ID": "841",
	"Nome": "Poranga",
	"Estado": "6"
},
     {
	"ID": "842",
	"Nome": "Porteiras",
	"Estado": "6"
},
     {
	"ID": "843",
	"Nome": "Potengi",
	"Estado": "6"
},
     {
	"ID": "844",
	"Nome": "Potiretama",
	"Estado": "6"
},
     {
	"ID": "845",
	"Nome": "Quiterianópolis",
	"Estado": "6"
},
     {
	"ID": "846",
	"Nome": "Quixadá",
	"Estado": "6"
},
     {
	"ID": "847",
	"Nome": "Quixelô",
	"Estado": "6"
},
     {
	"ID": "848",
	"Nome": "Quixeramobim",
	"Estado": "6"
},
     {
	"ID": "849",
	"Nome": "Quixeré",
	"Estado": "6"
},
     {
	"ID": "850",
	"Nome": "Redenção",
	"Estado": "6"
},
     {
	"ID": "851",
	"Nome": "Reriutaba",
	"Estado": "6"
},
     {
	"ID": "852",
	"Nome": "Russas",
	"Estado": "6"
},
     {
	"ID": "853",
	"Nome": "Saboeiro",
	"Estado": "6"
},
     {
	"ID": "854",
	"Nome": "Salitre",
	"Estado": "6"
},
     {
	"ID": "855",
	"Nome": "Santa Quitéria",
	"Estado": "6"
},
     {
	"ID": "856",
	"Nome": "Santana do Acaraú",
	"Estado": "6"
},
     {
	"ID": "857",
	"Nome": "Santana do Cariri",
	"Estado": "6"
},
     {
	"ID": "858",
	"Nome": "São Benedito",
	"Estado": "6"
},
     {
	"ID": "859",
	"Nome": "São Gonçalo do Amarante",
	"Estado": "6"
},
     {
	"ID": "860",
	"Nome": "São João do Jaguaribe",
	"Estado": "6"
},
     {
	"ID": "861",
	"Nome": "São Luís do Curu",
	"Estado": "6"
},
     {
	"ID": "862",
	"Nome": "Senador Pompeu",
	"Estado": "6"
},
     {
	"ID": "863",
	"Nome": "Senador Sá",
	"Estado": "6"
},
     {
	"ID": "864",
	"Nome": "Sobral",
	"Estado": "6"
},
     {
	"ID": "865",
	"Nome": "Solonópole",
	"Estado": "6"
},
     {
	"ID": "866",
	"Nome": "Tabuleiro do Norte",
	"Estado": "6"
},
     {
	"ID": "867",
	"Nome": "Tamboril",
	"Estado": "6"
},
     {
	"ID": "868",
	"Nome": "Tarrafas",
	"Estado": "6"
},
     {
	"ID": "869",
	"Nome": "Tauá",
	"Estado": "6"
},
     {
	"ID": "870",
	"Nome": "Tejuçuoca",
	"Estado": "6"
},
     {
	"ID": "871",
	"Nome": "Tianguá",
	"Estado": "6"
},
     {
	"ID": "872",
	"Nome": "Trairi",
	"Estado": "6"
},
     {
	"ID": "873",
	"Nome": "Tururu",
	"Estado": "6"
},
     {
	"ID": "874",
	"Nome": "Ubajara",
	"Estado": "6"
},
     {
	"ID": "875",
	"Nome": "Umari",
	"Estado": "6"
},
     {
	"ID": "876",
	"Nome": "Umirim",
	"Estado": "6"
},
     {
	"ID": "877",
	"Nome": "Uruburetama",
	"Estado": "6"
},
     {
	"ID": "878",
	"Nome": "Uruoca",
	"Estado": "6"
},
     {
	"ID": "879",
	"Nome": "Varjota",
	"Estado": "6"
},
     {
	"ID": "880",
	"Nome": "Várzea Alegre",
	"Estado": "6"
},
     {
	"ID": "881",
	"Nome": "Viçosa do Ceará",
	"Estado": "6"
},
     {
	"ID": "882",
	"Nome": "Brasília",
	"Estado": "7"
},
     {
	"ID": "883",
	"Nome": "Abadia de Goiás",
	"Estado": "9"
},
     {
	"ID": "884",
	"Nome": "Abadiânia",
	"Estado": "9"
},
     {
	"ID": "885",
	"Nome": "Acreúna",
	"Estado": "9"
},
     {
	"ID": "886",
	"Nome": "Adelândia",
	"Estado": "9"
},
     {
	"ID": "887",
	"Nome": "Água Fria de Goiás",
	"Estado": "9"
},
     {
	"ID": "888",
	"Nome": "Água Limpa",
	"Estado": "9"
},
     {
	"ID": "889",
	"Nome": "Águas Lindas de Goiás",
	"Estado": "9"
},
     {
	"ID": "890",
	"Nome": "Alexânia",
	"Estado": "9"
},
     {
	"ID": "891",
	"Nome": "Aloândia",
	"Estado": "9"
},
     {
	"ID": "892",
	"Nome": "Alto Horizonte",
	"Estado": "9"
},
     {
	"ID": "893",
	"Nome": "Alto Paraíso de Goiás",
	"Estado": "9"
},
     {
	"ID": "894",
	"Nome": "Alvorada do Norte",
	"Estado": "9"
},
     {
	"ID": "895",
	"Nome": "Amaralina",
	"Estado": "9"
},
     {
	"ID": "896",
	"Nome": "Americano do Brasil",
	"Estado": "9"
},
     {
	"ID": "897",
	"Nome": "Amorinópolis",
	"Estado": "9"
},
     {
	"ID": "898",
	"Nome": "Anápolis",
	"Estado": "9"
},
     {
	"ID": "899",
	"Nome": "Anhanguera",
	"Estado": "9"
},
     {
	"ID": "900",
	"Nome": "Anicuns",
	"Estado": "9"
},
     {
	"ID": "901",
	"Nome": "Aparecida de Goiânia",
	"Estado": "9"
},
     {
	"ID": "902",
	"Nome": "Aparecida do Rio Doce",
	"Estado": "9"
},
     {
	"ID": "903",
	"Nome": "Aporé",
	"Estado": "9"
},
     {
	"ID": "904",
	"Nome": "Araçu",
	"Estado": "9"
},
     {
	"ID": "905",
	"Nome": "Aragarças",
	"Estado": "9"
},
     {
	"ID": "906",
	"Nome": "Aragoiânia",
	"Estado": "9"
},
     {
	"ID": "907",
	"Nome": "Araguapaz",
	"Estado": "9"
},
     {
	"ID": "908",
	"Nome": "Arenópolis",
	"Estado": "9"
},
     {
	"ID": "909",
	"Nome": "Aruanã",
	"Estado": "9"
},
     {
	"ID": "910",
	"Nome": "Aurilândia",
	"Estado": "9"
},
     {
	"ID": "911",
	"Nome": "Avelinópolis",
	"Estado": "9"
},
     {
	"ID": "912",
	"Nome": "Baliza",
	"Estado": "9"
},
     {
	"ID": "913",
	"Nome": "Barro Alto",
	"Estado": "9"
},
     {
	"ID": "914",
	"Nome": "Bela Vista de Goiás",
	"Estado": "9"
},
     {
	"ID": "915",
	"Nome": "Bom Jardim de Goiás",
	"Estado": "9"
},
     {
	"ID": "916",
	"Nome": "Bom Jesus de Goiás",
	"Estado": "9"
},
     {
	"ID": "917",
	"Nome": "Bonfinópolis",
	"Estado": "9"
},
     {
	"ID": "918",
	"Nome": "Bonópolis",
	"Estado": "9"
},
     {
	"ID": "919",
	"Nome": "Brazabrantes",
	"Estado": "9"
},
     {
	"ID": "920",
	"Nome": "Britânia",
	"Estado": "9"
},
     {
	"ID": "921",
	"Nome": "Buriti Alegre",
	"Estado": "9"
},
     {
	"ID": "922",
	"Nome": "Buriti de Goiás",
	"Estado": "9"
},
     {
	"ID": "923",
	"Nome": "Buritinópolis",
	"Estado": "9"
},
     {
	"ID": "924",
	"Nome": "Cabeceiras",
	"Estado": "9"
},
     {
	"ID": "925",
	"Nome": "Cachoeira Alta",
	"Estado": "9"
},
     {
	"ID": "926",
	"Nome": "Cachoeira de Goiás",
	"Estado": "9"
},
     {
	"ID": "927",
	"Nome": "Cachoeira Dourada",
	"Estado": "9"
},
     {
	"ID": "928",
	"Nome": "Caçu",
	"Estado": "9"
},
     {
	"ID": "929",
	"Nome": "Caiapônia",
	"Estado": "9"
},
     {
	"ID": "930",
	"Nome": "Caldas Novas",
	"Estado": "9"
},
     {
	"ID": "931",
	"Nome": "Caldazinha",
	"Estado": "9"
},
     {
	"ID": "932",
	"Nome": "Campestre de Goiás",
	"Estado": "9"
},
     {
	"ID": "933",
	"Nome": "Campinaçu",
	"Estado": "9"
},
     {
	"ID": "934",
	"Nome": "Campinorte",
	"Estado": "9"
},
     {
	"ID": "935",
	"Nome": "Campo Alegre de Goiás",
	"Estado": "9"
},
     {
	"ID": "936",
	"Nome": "Campo Limpo de Goiás",
	"Estado": "9"
},
     {
	"ID": "937",
	"Nome": "Campos Belos",
	"Estado": "9"
},
     {
	"ID": "938",
	"Nome": "Campos Verdes",
	"Estado": "9"
},
     {
	"ID": "939",
	"Nome": "Carmo do Rio Verde",
	"Estado": "9"
},
     {
	"ID": "940",
	"Nome": "Castelândia",
	"Estado": "9"
},
     {
	"ID": "941",
	"Nome": "Catalão",
	"Estado": "9"
},
     {
	"ID": "942",
	"Nome": "Caturaí",
	"Estado": "9"
},
     {
	"ID": "943",
	"Nome": "Cavalcante",
	"Estado": "9"
},
     {
	"ID": "944",
	"Nome": "Ceres",
	"Estado": "9"
},
     {
	"ID": "945",
	"Nome": "Cezarina",
	"Estado": "9"
},
     {
	"ID": "946",
	"Nome": "Chapadão do Céu",
	"Estado": "9"
},
     {
	"ID": "947",
	"Nome": "Cidade Ocidental",
	"Estado": "9"
},
     {
	"ID": "948",
	"Nome": "Cocalzinho de Goiás",
	"Estado": "9"
},
     {
	"ID": "949",
	"Nome": "Colinas do Sul",
	"Estado": "9"
},
     {
	"ID": "950",
	"Nome": "Córrego do Ouro",
	"Estado": "9"
},
     {
	"ID": "951",
	"Nome": "Corumbá de Goiás",
	"Estado": "9"
},
     {
	"ID": "952",
	"Nome": "Corumbaíba",
	"Estado": "9"
},
     {
	"ID": "953",
	"Nome": "Cristalina",
	"Estado": "9"
},
     {
	"ID": "954",
	"Nome": "Cristianópolis",
	"Estado": "9"
},
     {
	"ID": "955",
	"Nome": "Crixás",
	"Estado": "9"
},
     {
	"ID": "956",
	"Nome": "Cromínia",
	"Estado": "9"
},
     {
	"ID": "957",
	"Nome": "Cumari",
	"Estado": "9"
},
     {
	"ID": "958",
	"Nome": "Damianópolis",
	"Estado": "9"
},
     {
	"ID": "959",
	"Nome": "Damolândia",
	"Estado": "9"
},
     {
	"ID": "960",
	"Nome": "Davinópolis",
	"Estado": "9"
},
     {
	"ID": "961",
	"Nome": "Diorama",
	"Estado": "9"
},
     {
	"ID": "962",
	"Nome": "Divinópolis de Goiás",
	"Estado": "9"
},
     {
	"ID": "963",
	"Nome": "Doverlândia",
	"Estado": "9"
},
     {
	"ID": "964",
	"Nome": "Edealina",
	"Estado": "9"
},
     {
	"ID": "965",
	"Nome": "Edéia",
	"Estado": "9"
},
     {
	"ID": "966",
	"Nome": "Estrela do Norte",
	"Estado": "9"
},
     {
	"ID": "967",
	"Nome": "Faina",
	"Estado": "9"
},
     {
	"ID": "968",
	"Nome": "Fazenda Nova",
	"Estado": "9"
},
     {
	"ID": "969",
	"Nome": "Firminópolis",
	"Estado": "9"
},
     {
	"ID": "970",
	"Nome": "Flores de Goiás",
	"Estado": "9"
},
     {
	"ID": "971",
	"Nome": "Formosa",
	"Estado": "9"
},
     {
	"ID": "972",
	"Nome": "Formoso",
	"Estado": "9"
},
     {
	"ID": "973",
	"Nome": "Gameleira de Goiás",
	"Estado": "9"
},
     {
	"ID": "974",
	"Nome": "Goianápolis",
	"Estado": "9"
},
     {
	"ID": "975",
	"Nome": "Goiandira",
	"Estado": "9"
},
     {
	"ID": "976",
	"Nome": "Goianésia",
	"Estado": "9"
},
     {
	"ID": "977",
	"Nome": "Goiânia",
	"Estado": "9"
},
     {
	"ID": "978",
	"Nome": "Goianira",
	"Estado": "9"
},
     {
	"ID": "979",
	"Nome": "Goiás",
	"Estado": "9"
},
     {
	"ID": "980",
	"Nome": "Goiatuba",
	"Estado": "9"
},
     {
	"ID": "981",
	"Nome": "Gouvelândia",
	"Estado": "9"
},
     {
	"ID": "982",
	"Nome": "Guapó",
	"Estado": "9"
},
     {
	"ID": "983",
	"Nome": "Guaraíta",
	"Estado": "9"
},
     {
	"ID": "984",
	"Nome": "Guarani de Goiás",
	"Estado": "9"
},
     {
	"ID": "985",
	"Nome": "Guarinos",
	"Estado": "9"
},
     {
	"ID": "986",
	"Nome": "Heitoraí",
	"Estado": "9"
},
     {
	"ID": "987",
	"Nome": "Hidrolândia",
	"Estado": "9"
},
     {
	"ID": "988",
	"Nome": "Hidrolina",
	"Estado": "9"
},
     {
	"ID": "989",
	"Nome": "Iaciara",
	"Estado": "9"
},
     {
	"ID": "990",
	"Nome": "Inaciolândia",
	"Estado": "9"
},
     {
	"ID": "991",
	"Nome": "Indiara",
	"Estado": "9"
},
     {
	"ID": "992",
	"Nome": "Inhumas",
	"Estado": "9"
},
     {
	"ID": "993",
	"Nome": "Ipameri",
	"Estado": "9"
},
     {
	"ID": "994",
	"Nome": "Ipiranga de Goiás",
	"Estado": "9"
},
     {
	"ID": "995",
	"Nome": "Iporá",
	"Estado": "9"
},
     {
	"ID": "996",
	"Nome": "Israelândia",
	"Estado": "9"
},
     {
	"ID": "997",
	"Nome": "Itaberaí",
	"Estado": "9"
},
     {
	"ID": "998",
	"Nome": "Itaguari",
	"Estado": "9"
},
     {
	"ID": "999",
	"Nome": "Itaguaru",
	"Estado": "9"
},
     {
	"ID": "1000",
	"Nome": "Itajá",
	"Estado": "9"
},
     {
	"ID": "1001",
	"Nome": "Itapaci",
	"Estado": "9"
},
     {
	"ID": "1002",
	"Nome": "Itapirapuã",
	"Estado": "9"
},
     {
	"ID": "1003",
	"Nome": "Itapuranga",
	"Estado": "9"
},
     {
	"ID": "1004",
	"Nome": "Itarumã",
	"Estado": "9"
},
     {
	"ID": "1005",
	"Nome": "Itauçu",
	"Estado": "9"
},
     {
	"ID": "1006",
	"Nome": "Itumbiara",
	"Estado": "9"
},
     {
	"ID": "1007",
	"Nome": "Ivolândia",
	"Estado": "9"
},
     {
	"ID": "1008",
	"Nome": "Jandaia",
	"Estado": "9"
},
     {
	"ID": "1009",
	"Nome": "Jaraguá",
	"Estado": "9"
},
     {
	"ID": "1010",
	"Nome": "Jataí",
	"Estado": "9"
},
     {
	"ID": "1011",
	"Nome": "Jaupaci",
	"Estado": "9"
},
     {
	"ID": "1012",
	"Nome": "Jesúpolis",
	"Estado": "9"
},
     {
	"ID": "1013",
	"Nome": "Joviânia",
	"Estado": "9"
},
     {
	"ID": "1014",
	"Nome": "Jussara",
	"Estado": "9"
},
     {
	"ID": "1015",
	"Nome": "Lagoa Santa",
	"Estado": "9"
},
     {
	"ID": "1016",
	"Nome": "Leopoldo de Bulhões",
	"Estado": "9"
},
     {
	"ID": "1017",
	"Nome": "Luziânia",
	"Estado": "9"
},
     {
	"ID": "1018",
	"Nome": "Mairipotaba",
	"Estado": "9"
},
     {
	"ID": "1019",
	"Nome": "Mambaí",
	"Estado": "9"
},
     {
	"ID": "1020",
	"Nome": "Mara Rosa",
	"Estado": "9"
},
     {
	"ID": "1021",
	"Nome": "Marzagão",
	"Estado": "9"
},
     {
	"ID": "1022",
	"Nome": "Matrinchã",
	"Estado": "9"
},
     {
	"ID": "1023",
	"Nome": "Maurilândia",
	"Estado": "9"
},
     {
	"ID": "1024",
	"Nome": "Mimoso de Goiás",
	"Estado": "9"
},
     {
	"ID": "1025",
	"Nome": "Minaçu",
	"Estado": "9"
},
     {
	"ID": "1026",
	"Nome": "Mineiros",
	"Estado": "9"
},
     {
	"ID": "1027",
	"Nome": "Moiporá",
	"Estado": "9"
},
     {
	"ID": "1028",
	"Nome": "Monte Alegre de Goiás",
	"Estado": "9"
},
     {
	"ID": "1029",
	"Nome": "Montes Claros de Goiás",
	"Estado": "9"
},
     {
	"ID": "1030",
	"Nome": "Montividiu",
	"Estado": "9"
},
     {
	"ID": "1031",
	"Nome": "Montividiu do Norte",
	"Estado": "9"
},
     {
	"ID": "1032",
	"Nome": "Morrinhos",
	"Estado": "9"
},
     {
	"ID": "1033",
	"Nome": "Morro Agudo de Goiás",
	"Estado": "9"
},
     {
	"ID": "1034",
	"Nome": "Mossâmedes",
	"Estado": "9"
},
     {
	"ID": "1035",
	"Nome": "Mozarlândia",
	"Estado": "9"
},
     {
	"ID": "1036",
	"Nome": "Mundo Novo",
	"Estado": "9"
},
     {
	"ID": "1037",
	"Nome": "Mutunópolis",
	"Estado": "9"
},
     {
	"ID": "1038",
	"Nome": "Nazário",
	"Estado": "9"
},
     {
	"ID": "1039",
	"Nome": "Nerópolis",
	"Estado": "9"
},
     {
	"ID": "1040",
	"Nome": "Niquelândia",
	"Estado": "9"
},
     {
	"ID": "1041",
	"Nome": "Nova América",
	"Estado": "9"
},
     {
	"ID": "1042",
	"Nome": "Nova Aurora",
	"Estado": "9"
},
     {
	"ID": "1043",
	"Nome": "Nova Crixás",
	"Estado": "9"
},
     {
	"ID": "1044",
	"Nome": "Nova Glória",
	"Estado": "9"
},
     {
	"ID": "1045",
	"Nome": "Nova Iguaçu de Goiás",
	"Estado": "9"
},
     {
	"ID": "1046",
	"Nome": "Nova Roma",
	"Estado": "9"
},
     {
	"ID": "1047",
	"Nome": "Nova Veneza",
	"Estado": "9"
},
     {
	"ID": "1048",
	"Nome": "Novo Brasil",
	"Estado": "9"
},
     {
	"ID": "1049",
	"Nome": "Novo Gama",
	"Estado": "9"
},
     {
	"ID": "1050",
	"Nome": "Novo Planalto",
	"Estado": "9"
},
     {
	"ID": "1051",
	"Nome": "Orizona",
	"Estado": "9"
},
     {
	"ID": "1052",
	"Nome": "Ouro Verde de Goiás",
	"Estado": "9"
},
     {
	"ID": "1053",
	"Nome": "Ouvidor",
	"Estado": "9"
},
     {
	"ID": "1054",
	"Nome": "Padre Bernardo",
	"Estado": "9"
},
     {
	"ID": "1055",
	"Nome": "Palestina de Goiás",
	"Estado": "9"
},
     {
	"ID": "1056",
	"Nome": "Palmeiras de Goiás",
	"Estado": "9"
},
     {
	"ID": "1057",
	"Nome": "Palmelo",
	"Estado": "9"
},
     {
	"ID": "1058",
	"Nome": "Palminópolis",
	"Estado": "9"
},
     {
	"ID": "1059",
	"Nome": "Panamá",
	"Estado": "9"
},
     {
	"ID": "1060",
	"Nome": "Paranaiguara",
	"Estado": "9"
},
     {
	"ID": "1061",
	"Nome": "Paraúna",
	"Estado": "9"
},
     {
	"ID": "1062",
	"Nome": "Perolândia",
	"Estado": "9"
},
     {
	"ID": "1063",
	"Nome": "Petrolina de Goiás",
	"Estado": "9"
},
     {
	"ID": "1064",
	"Nome": "Pilar de Goiás",
	"Estado": "9"
},
     {
	"ID": "1065",
	"Nome": "Piracanjuba",
	"Estado": "9"
},
     {
	"ID": "1066",
	"Nome": "Piranhas",
	"Estado": "9"
},
     {
	"ID": "1067",
	"Nome": "Pirenópolis",
	"Estado": "9"
},
     {
	"ID": "1068",
	"Nome": "Pires do Rio",
	"Estado": "9"
},
     {
	"ID": "1069",
	"Nome": "Planaltina",
	"Estado": "9"
},
     {
	"ID": "1070",
	"Nome": "Pontalina",
	"Estado": "9"
},
     {
	"ID": "1071",
	"Nome": "Porangatu",
	"Estado": "9"
},
     {
	"ID": "1072",
	"Nome": "Porteirão",
	"Estado": "9"
},
     {
	"ID": "1073",
	"Nome": "Portelândia",
	"Estado": "9"
},
     {
	"ID": "1074",
	"Nome": "Posse",
	"Estado": "9"
},
     {
	"ID": "1075",
	"Nome": "Professor Jamil",
	"Estado": "9"
},
     {
	"ID": "1076",
	"Nome": "Quirinópolis",
	"Estado": "9"
},
     {
	"ID": "1077",
	"Nome": "Rialma",
	"Estado": "9"
},
     {
	"ID": "1078",
	"Nome": "Rianápolis",
	"Estado": "9"
},
     {
	"ID": "1079",
	"Nome": "Rio Quente",
	"Estado": "9"
},
     {
	"ID": "1080",
	"Nome": "Rio Verde",
	"Estado": "9"
},
     {
	"ID": "1081",
	"Nome": "Rubiataba",
	"Estado": "9"
},
     {
	"ID": "1082",
	"Nome": "Sanclerlândia",
	"Estado": "9"
},
     {
	"ID": "1083",
	"Nome": "Santa Bárbara de Goiás",
	"Estado": "9"
},
     {
	"ID": "1084",
	"Nome": "Santa Cruz de Goiás",
	"Estado": "9"
},
     {
	"ID": "1085",
	"Nome": "Santa Fé de Goiás",
	"Estado": "9"
},
     {
	"ID": "1086",
	"Nome": "Santa Helena de Goiás",
	"Estado": "9"
},
     {
	"ID": "1087",
	"Nome": "Santa Isabel",
	"Estado": "9"
},
     {
	"ID": "1088",
	"Nome": "Santa Rita do Araguaia",
	"Estado": "9"
},
     {
	"ID": "1089",
	"Nome": "Santa Rita do Novo Destino",
	"Estado": "9"
},
     {
	"ID": "1090",
	"Nome": "Santa Rosa de Goiás",
	"Estado": "9"
},
     {
	"ID": "1091",
	"Nome": "Santa Tereza de Goiás",
	"Estado": "9"
},
     {
	"ID": "1092",
	"Nome": "Santa Terezinha de Goiás",
	"Estado": "9"
},
     {
	"ID": "1093",
	"Nome": "Santo Antônio da Barra",
	"Estado": "9"
},
     {
	"ID": "1094",
	"Nome": "Santo Antônio de Goiás",
	"Estado": "9"
},
     {
	"ID": "1095",
	"Nome": "Santo Antônio do Descoberto",
	"Estado": "9"
},
     {
	"ID": "1096",
	"Nome": "São Domingos",
	"Estado": "9"
},
     {
	"ID": "1097",
	"Nome": "São Francisco de Goiás",
	"Estado": "9"
},
     {
	"ID": "1098",
	"Nome": "São João d`Aliança",
	"Estado": "9"
},
     {
	"ID": "1099",
	"Nome": "São João da Paraúna",
	"Estado": "9"
},
     {
	"ID": "1100",
	"Nome": "São Luís de Montes Belos",
	"Estado": "9"
},
     {
	"ID": "1101",
	"Nome": "São Luíz do Norte",
	"Estado": "9"
},
     {
	"ID": "1102",
	"Nome": "São Miguel do Araguaia",
	"Estado": "9"
},
     {
	"ID": "1103",
	"Nome": "São Miguel do Passa Quatro",
	"Estado": "9"
},
     {
	"ID": "1104",
	"Nome": "São Patrício",
	"Estado": "9"
},
     {
	"ID": "1105",
	"Nome": "São Simão",
	"Estado": "9"
},
     {
	"ID": "1106",
	"Nome": "Senador Canedo",
	"Estado": "9"
},
     {
	"ID": "1107",
	"Nome": "Serranópolis",
	"Estado": "9"
},
     {
	"ID": "1108",
	"Nome": "Silvânia",
	"Estado": "9"
},
     {
	"ID": "1109",
	"Nome": "Simolândia",
	"Estado": "9"
},
     {
	"ID": "1110",
	"Nome": "Sítio d`Abadia",
	"Estado": "9"
},
     {
	"ID": "1111",
	"Nome": "Taquaral de Goiás",
	"Estado": "9"
},
     {
	"ID": "1112",
	"Nome": "Teresina de Goiás",
	"Estado": "9"
},
     {
	"ID": "1113",
	"Nome": "Terezópolis de Goiás",
	"Estado": "9"
},
     {
	"ID": "1114",
	"Nome": "Três Ranchos",
	"Estado": "9"
},
     {
	"ID": "1115",
	"Nome": "Trindade",
	"Estado": "9"
},
     {
	"ID": "1116",
	"Nome": "Trombas",
	"Estado": "9"
},
     {
	"ID": "1117",
	"Nome": "Turvânia",
	"Estado": "9"
},
     {
	"ID": "1118",
	"Nome": "Turvelândia",
	"Estado": "9"
},
     {
	"ID": "1119",
	"Nome": "Uirapuru",
	"Estado": "9"
},
     {
	"ID": "1120",
	"Nome": "Uruaçu",
	"Estado": "9"
},
     {
	"ID": "1121",
	"Nome": "Uruana",
	"Estado": "9"
},
     {
	"ID": "1122",
	"Nome": "Urutaí",
	"Estado": "9"
},
     {
	"ID": "1123",
	"Nome": "Valparaíso de Goiás",
	"Estado": "9"
},
     {
	"ID": "1124",
	"Nome": "Varjão",
	"Estado": "9"
},
     {
	"ID": "1125",
	"Nome": "Vianópolis",
	"Estado": "9"
},
     {
	"ID": "1126",
	"Nome": "Vicentinópolis",
	"Estado": "9"
},
     {
	"ID": "1127",
	"Nome": "Vila Boa",
	"Estado": "9"
},
     {
	"ID": "1128",
	"Nome": "Vila Propício",
	"Estado": "9"
},
     {
	"ID": "1129",
	"Nome": "Açailândia",
	"Estado": "10"
},
     {
	"ID": "1130",
	"Nome": "Afonso Cunha",
	"Estado": "10"
},
     {
	"ID": "1131",
	"Nome": "Água Doce do Maranhão",
	"Estado": "10"
},
     {
	"ID": "1132",
	"Nome": "Alcântara",
	"Estado": "10"
},
     {
	"ID": "1133",
	"Nome": "Aldeias Altas",
	"Estado": "10"
},
     {
	"ID": "1134",
	"Nome": "Altamira do Maranhão",
	"Estado": "10"
},
     {
	"ID": "1135",
	"Nome": "Alto Alegre do Maranhão",
	"Estado": "10"
},
     {
	"ID": "1136",
	"Nome": "Alto Alegre do Pindaré",
	"Estado": "10"
},
     {
	"ID": "1137",
	"Nome": "Alto Parnaíba",
	"Estado": "10"
},
     {
	"ID": "1138",
	"Nome": "Amapá do Maranhão",
	"Estado": "10"
},
     {
	"ID": "1139",
	"Nome": "Amarante do Maranhão",
	"Estado": "10"
},
     {
	"ID": "1140",
	"Nome": "Anajatuba",
	"Estado": "10"
},
     {
	"ID": "1141",
	"Nome": "Anapurus",
	"Estado": "10"
},
     {
	"ID": "1142",
	"Nome": "Apicum-Açu",
	"Estado": "10"
},
     {
	"ID": "1143",
	"Nome": "Araguanã",
	"Estado": "10"
},
     {
	"ID": "1144",
	"Nome": "Araioses",
	"Estado": "10"
},
     {
	"ID": "1145",
	"Nome": "Arame",
	"Estado": "10"
},
     {
	"ID": "1146",
	"Nome": "Arari",
	"Estado": "10"
},
     {
	"ID": "1147",
	"Nome": "Axixá",
	"Estado": "10"
},
     {
	"ID": "1148",
	"Nome": "Bacabal",
	"Estado": "10"
},
     {
	"ID": "1149",
	"Nome": "Bacabeira",
	"Estado": "10"
},
     {
	"ID": "1150",
	"Nome": "Bacuri",
	"Estado": "10"
},
     {
	"ID": "1151",
	"Nome": "Bacurituba",
	"Estado": "10"
},
     {
	"ID": "1152",
	"Nome": "Balsas",
	"Estado": "10"
},
     {
	"ID": "1153",
	"Nome": "Barão de Grajaú",
	"Estado": "10"
},
     {
	"ID": "1154",
	"Nome": "Barra do Corda",
	"Estado": "10"
},
     {
	"ID": "1155",
	"Nome": "Barreirinhas",
	"Estado": "10"
},
     {
	"ID": "1156",
	"Nome": "Bela Vista do Maranhão",
	"Estado": "10"
},
     {
	"ID": "1157",
	"Nome": "Belágua",
	"Estado": "10"
},
     {
	"ID": "1158",
	"Nome": "Benedito Leite",
	"Estado": "10"
},
     {
	"ID": "1159",
	"Nome": "Bequimão",
	"Estado": "10"
},
     {
	"ID": "1160",
	"Nome": "Bernardo do Mearim",
	"Estado": "10"
},
     {
	"ID": "1161",
	"Nome": "Boa Vista do Gurupi",
	"Estado": "10"
},
     {
	"ID": "1162",
	"Nome": "Bom Jardim",
	"Estado": "10"
},
     {
	"ID": "1163",
	"Nome": "Bom Jesus das Selvas",
	"Estado": "10"
},
     {
	"ID": "1164",
	"Nome": "Bom Lugar",
	"Estado": "10"
},
     {
	"ID": "1165",
	"Nome": "Brejo",
	"Estado": "10"
},
     {
	"ID": "1166",
	"Nome": "Brejo de Areia",
	"Estado": "10"
},
     {
	"ID": "1167",
	"Nome": "Buriti",
	"Estado": "10"
},
     {
	"ID": "1168",
	"Nome": "Buriti Bravo",
	"Estado": "10"
},
     {
	"ID": "1169",
	"Nome": "Buriticupu",
	"Estado": "10"
},
     {
	"ID": "1170",
	"Nome": "Buritirana",
	"Estado": "10"
},
     {
	"ID": "1171",
	"Nome": "Cachoeira Grande",
	"Estado": "10"
},
     {
	"ID": "1172",
	"Nome": "Cajapió",
	"Estado": "10"
},
     {
	"ID": "1173",
	"Nome": "Cajari",
	"Estado": "10"
},
     {
	"ID": "1174",
	"Nome": "Campestre do Maranhão",
	"Estado": "10"
},
     {
	"ID": "1175",
	"Nome": "Cândido Mendes",
	"Estado": "10"
},
     {
	"ID": "1176",
	"Nome": "Cantanhede",
	"Estado": "10"
},
     {
	"ID": "1177",
	"Nome": "Capinzal do Norte",
	"Estado": "10"
},
     {
	"ID": "1178",
	"Nome": "Carolina",
	"Estado": "10"
},
     {
	"ID": "1179",
	"Nome": "Carutapera",
	"Estado": "10"
},
     {
	"ID": "1180",
	"Nome": "Caxias",
	"Estado": "10"
},
     {
	"ID": "1181",
	"Nome": "Cedral",
	"Estado": "10"
},
     {
	"ID": "1182",
	"Nome": "Central do Maranhão",
	"Estado": "10"
},
     {
	"ID": "1183",
	"Nome": "Centro do Guilherme",
	"Estado": "10"
},
     {
	"ID": "1184",
	"Nome": "Centro Novo do Maranhão",
	"Estado": "10"
},
     {
	"ID": "1185",
	"Nome": "Chapadinha",
	"Estado": "10"
},
     {
	"ID": "1186",
	"Nome": "Cidelândia",
	"Estado": "10"
},
     {
	"ID": "1187",
	"Nome": "Codó",
	"Estado": "10"
},
     {
	"ID": "1188",
	"Nome": "Coelho Neto",
	"Estado": "10"
},
     {
	"ID": "1189",
	"Nome": "Colinas",
	"Estado": "10"
},
     {
	"ID": "1190",
	"Nome": "Conceição do Lago-Açu",
	"Estado": "10"
},
     {
	"ID": "1191",
	"Nome": "Coroatá",
	"Estado": "10"
},
     {
	"ID": "1192",
	"Nome": "Cururupu",
	"Estado": "10"
},
     {
	"ID": "1193",
	"Nome": "Davinópolis",
	"Estado": "10"
},
     {
	"ID": "1194",
	"Nome": "Dom Pedro",
	"Estado": "10"
},
     {
	"ID": "1195",
	"Nome": "Duque Bacelar",
	"Estado": "10"
},
     {
	"ID": "1196",
	"Nome": "Esperantinópolis",
	"Estado": "10"
},
     {
	"ID": "1197",
	"Nome": "Estreito",
	"Estado": "10"
},
     {
	"ID": "1198",
	"Nome": "Feira Nova do Maranhão",
	"Estado": "10"
},
     {
	"ID": "1199",
	"Nome": "Fernando Falcão",
	"Estado": "10"
},
     {
	"ID": "1200",
	"Nome": "Formosa da Serra Negra",
	"Estado": "10"
},
     {
	"ID": "1201",
	"Nome": "Fortaleza dos Nogueiras",
	"Estado": "10"
},
     {
	"ID": "1202",
	"Nome": "Fortuna",
	"Estado": "10"
},
     {
	"ID": "1203",
	"Nome": "Godofredo Viana",
	"Estado": "10"
},
     {
	"ID": "1204",
	"Nome": "Gonçalves Dias",
	"Estado": "10"
},
     {
	"ID": "1205",
	"Nome": "Governador Archer",
	"Estado": "10"
},
     {
	"ID": "1206",
	"Nome": "Governador Edison Lobão",
	"Estado": "10"
},
     {
	"ID": "1207",
	"Nome": "Governador Eugênio Barros",
	"Estado": "10"
},
     {
	"ID": "1208",
	"Nome": "Governador Luiz Rocha",
	"Estado": "10"
},
     {
	"ID": "1209",
	"Nome": "Governador Newton Bello",
	"Estado": "10"
},
     {
	"ID": "1210",
	"Nome": "Governador Nunes Freire",
	"Estado": "10"
},
     {
	"ID": "1211",
	"Nome": "Graça Aranha",
	"Estado": "10"
},
     {
	"ID": "1212",
	"Nome": "Grajaú",
	"Estado": "10"
},
     {
	"ID": "1213",
	"Nome": "Guimarães",
	"Estado": "10"
},
     {
	"ID": "1214",
	"Nome": "Humberto de Campos",
	"Estado": "10"
},
     {
	"ID": "1215",
	"Nome": "Icatu",
	"Estado": "10"
},
     {
	"ID": "1216",
	"Nome": "Igarapé do Meio",
	"Estado": "10"
},
     {
	"ID": "1217",
	"Nome": "Igarapé Grande",
	"Estado": "10"
},
     {
	"ID": "1218",
	"Nome": "Imperatriz",
	"Estado": "10"
},
     {
	"ID": "1219",
	"Nome": "Itaipava do Grajaú",
	"Estado": "10"
},
     {
	"ID": "1220",
	"Nome": "Itapecuru Mirim",
	"Estado": "10"
},
     {
	"ID": "1221",
	"Nome": "Itinga do Maranhão",
	"Estado": "10"
},
     {
	"ID": "1222",
	"Nome": "Jatobá",
	"Estado": "10"
},
     {
	"ID": "1223",
	"Nome": "Jenipapo dos Vieiras",
	"Estado": "10"
},
     {
	"ID": "1224",
	"Nome": "João Lisboa",
	"Estado": "10"
},
     {
	"ID": "1225",
	"Nome": "Joselândia",
	"Estado": "10"
},
     {
	"ID": "1226",
	"Nome": "Junco do Maranhão",
	"Estado": "10"
},
     {
	"ID": "1227",
	"Nome": "Lago da Pedra",
	"Estado": "10"
},
     {
	"ID": "1228",
	"Nome": "Lago do Junco",
	"Estado": "10"
},
     {
	"ID": "1229",
	"Nome": "Lago dos Rodrigues",
	"Estado": "10"
},
     {
	"ID": "1230",
	"Nome": "Lago Verde",
	"Estado": "10"
},
     {
	"ID": "1231",
	"Nome": "Lagoa do Mato",
	"Estado": "10"
},
     {
	"ID": "1232",
	"Nome": "Lagoa Grande do Maranhão",
	"Estado": "10"
},
     {
	"ID": "1233",
	"Nome": "Lajeado Novo",
	"Estado": "10"
},
     {
	"ID": "1234",
	"Nome": "Lima Campos",
	"Estado": "10"
},
     {
	"ID": "1235",
	"Nome": "Loreto",
	"Estado": "10"
},
     {
	"ID": "1236",
	"Nome": "Luís Domingues",
	"Estado": "10"
},
     {
	"ID": "1237",
	"Nome": "Magalhães de Almeida",
	"Estado": "10"
},
     {
	"ID": "1238",
	"Nome": "Maracaçumé",
	"Estado": "10"
},
     {
	"ID": "1239",
	"Nome": "Marajá do Sena",
	"Estado": "10"
},
     {
	"ID": "1240",
	"Nome": "Maranhãozinho",
	"Estado": "10"
},
     {
	"ID": "1241",
	"Nome": "Mata Roma",
	"Estado": "10"
},
     {
	"ID": "1242",
	"Nome": "Matinha",
	"Estado": "10"
},
     {
	"ID": "1243",
	"Nome": "Matões",
	"Estado": "10"
},
     {
	"ID": "1244",
	"Nome": "Matões do Norte",
	"Estado": "10"
},
     {
	"ID": "1245",
	"Nome": "Milagres do Maranhão",
	"Estado": "10"
},
     {
	"ID": "1246",
	"Nome": "Mirador",
	"Estado": "10"
},
     {
	"ID": "1247",
	"Nome": "Miranda do Norte",
	"Estado": "10"
},
     {
	"ID": "1248",
	"Nome": "Mirinzal",
	"Estado": "10"
},
     {
	"ID": "1249",
	"Nome": "Monção",
	"Estado": "10"
},
     {
	"ID": "1250",
	"Nome": "Montes Altos",
	"Estado": "10"
},
     {
	"ID": "1251",
	"Nome": "Morros",
	"Estado": "10"
},
     {
	"ID": "1252",
	"Nome": "Nina Rodrigues",
	"Estado": "10"
},
     {
	"ID": "1253",
	"Nome": "Nova Colinas",
	"Estado": "10"
},
     {
	"ID": "1254",
	"Nome": "Nova Iorque",
	"Estado": "10"
},
     {
	"ID": "1255",
	"Nome": "Nova Olinda do Maranhão",
	"Estado": "10"
},
     {
	"ID": "1256",
	"Nome": "Olho d`Água das Cunhãs",
	"Estado": "10"
},
     {
	"ID": "1257",
	"Nome": "Olinda Nova do Maranhão",
	"Estado": "10"
},
     {
	"ID": "1258",
	"Nome": "Paço do Lumiar",
	"Estado": "10"
},
     {
	"ID": "1259",
	"Nome": "Palmeirândia",
	"Estado": "10"
},
     {
	"ID": "1260",
	"Nome": "Paraibano",
	"Estado": "10"
},
     {
	"ID": "1261",
	"Nome": "Parnarama",
	"Estado": "10"
},
     {
	"ID": "1262",
	"Nome": "Passagem Franca",
	"Estado": "10"
},
     {
	"ID": "1263",
	"Nome": "Pastos Bons",
	"Estado": "10"
},
     {
	"ID": "1264",
	"Nome": "Paulino Neves",
	"Estado": "10"
},
     {
	"ID": "1265",
	"Nome": "Paulo Ramos",
	"Estado": "10"
},
     {
	"ID": "1266",
	"Nome": "Pedreiras",
	"Estado": "10"
},
     {
	"ID": "1267",
	"Nome": "Pedro do Rosário",
	"Estado": "10"
},
     {
	"ID": "1268",
	"Nome": "Penalva",
	"Estado": "10"
},
     {
	"ID": "1269",
	"Nome": "Peri Mirim",
	"Estado": "10"
},
     {
	"ID": "1270",
	"Nome": "Peritoró",
	"Estado": "10"
},
     {
	"ID": "1271",
	"Nome": "Pindaré-Mirim",
	"Estado": "10"
},
     {
	"ID": "1272",
	"Nome": "Pinheiro",
	"Estado": "10"
},
     {
	"ID": "1273",
	"Nome": "Pio XII",
	"Estado": "10"
},
     {
	"ID": "1274",
	"Nome": "Pirapemas",
	"Estado": "10"
},
     {
	"ID": "1275",
	"Nome": "Poção de Pedras",
	"Estado": "10"
},
     {
	"ID": "1276",
	"Nome": "Porto Franco",
	"Estado": "10"
},
     {
	"ID": "1277",
	"Nome": "Porto Rico do Maranhão",
	"Estado": "10"
},
     {
	"ID": "1278",
	"Nome": "Presidente Dutra",
	"Estado": "10"
},
     {
	"ID": "1279",
	"Nome": "Presidente Juscelino",
	"Estado": "10"
},
     {
	"ID": "1280",
	"Nome": "Presidente Médici",
	"Estado": "10"
},
     {
	"ID": "1281",
	"Nome": "Presidente Sarney",
	"Estado": "10"
},
     {
	"ID": "1282",
	"Nome": "Presidente Vargas",
	"Estado": "10"
},
     {
	"ID": "1283",
	"Nome": "Primeira Cruz",
	"Estado": "10"
},
     {
	"ID": "1284",
	"Nome": "Raposa",
	"Estado": "10"
},
     {
	"ID": "1285",
	"Nome": "Riachão",
	"Estado": "10"
},
     {
	"ID": "1286",
	"Nome": "Ribamar Fiquene",
	"Estado": "10"
},
     {
	"ID": "1287",
	"Nome": "Rosário",
	"Estado": "10"
},
     {
	"ID": "1288",
	"Nome": "Sambaíba",
	"Estado": "10"
},
     {
	"ID": "1289",
	"Nome": "Santa Filomena do Maranhão",
	"Estado": "10"
},
     {
	"ID": "1290",
	"Nome": "Santa Helena",
	"Estado": "10"
},
     {
	"ID": "1291",
	"Nome": "Santa Inês",
	"Estado": "10"
},
     {
	"ID": "1292",
	"Nome": "Santa Luzia",
	"Estado": "10"
},
     {
	"ID": "1293",
	"Nome": "Santa Luzia do Paruá",
	"Estado": "10"
},
     {
	"ID": "1294",
	"Nome": "Santa Quitéria do Maranhão",
	"Estado": "10"
},
     {
	"ID": "1295",
	"Nome": "Santa Rita",
	"Estado": "10"
},
     {
	"ID": "1296",
	"Nome": "Santana do Maranhão",
	"Estado": "10"
},
     {
	"ID": "1297",
	"Nome": "Santo Amaro do Maranhão",
	"Estado": "10"
},
     {
	"ID": "1298",
	"Nome": "Santo Antônio dos Lopes",
	"Estado": "10"
},
     {
	"ID": "1299",
	"Nome": "São Benedito do Rio Preto",
	"Estado": "10"
},
     {
	"ID": "1300",
	"Nome": "São Bento",
	"Estado": "10"
},
     {
	"ID": "1301",
	"Nome": "São Bernardo",
	"Estado": "10"
},
     {
	"ID": "1302",
	"Nome": "São Domingos do Azeitão",
	"Estado": "10"
},
     {
	"ID": "1303",
	"Nome": "São Domingos do Maranhão",
	"Estado": "10"
},
     {
	"ID": "1304",
	"Nome": "São Félix de Balsas",
	"Estado": "10"
},
     {
	"ID": "1305",
	"Nome": "São Francisco do Brejão",
	"Estado": "10"
},
     {
	"ID": "1306",
	"Nome": "São Francisco do Maranhão",
	"Estado": "10"
},
     {
	"ID": "1307",
	"Nome": "São João Batista",
	"Estado": "10"
},
     {
	"ID": "1308",
	"Nome": "São João do Carú",
	"Estado": "10"
},
     {
	"ID": "1309",
	"Nome": "São João do Paraíso",
	"Estado": "10"
},
     {
	"ID": "1310",
	"Nome": "São João do Soter",
	"Estado": "10"
},
     {
	"ID": "1311",
	"Nome": "São João dos Patos",
	"Estado": "10"
},
     {
	"ID": "1312",
	"Nome": "São José de Ribamar",
	"Estado": "10"
},
     {
	"ID": "1313",
	"Nome": "São José dos Basílios",
	"Estado": "10"
},
     {
	"ID": "1314",
	"Nome": "São Luís",
	"Estado": "10"
},
     {
	"ID": "1315",
	"Nome": "São Luís Gonzaga do Maranhão",
	"Estado": "10"
},
     {
	"ID": "1316",
	"Nome": "São Mateus do Maranhão",
	"Estado": "10"
},
     {
	"ID": "1317",
	"Nome": "São Pedro da Água Branca",
	"Estado": "10"
},
     {
	"ID": "1318",
	"Nome": "São Pedro dos Crentes",
	"Estado": "10"
},
     {
	"ID": "1319",
	"Nome": "São Raimundo das Mangabeiras",
	"Estado": "10"
},
     {
	"ID": "1320",
	"Nome": "São Raimundo do Doca Bezerra",
	"Estado": "10"
},
     {
	"ID": "1321",
	"Nome": "São Roberto",
	"Estado": "10"
},
     {
	"ID": "1322",
	"Nome": "São Vicente Ferrer",
	"Estado": "10"
},
     {
	"ID": "1323",
	"Nome": "Satubinha",
	"Estado": "10"
},
     {
	"ID": "1324",
	"Nome": "Senador Alexandre Costa",
	"Estado": "10"
},
     {
	"ID": "1325",
	"Nome": "Senador La Rocque",
	"Estado": "10"
},
     {
	"ID": "1326",
	"Nome": "Serrano do Maranhão",
	"Estado": "10"
},
     {
	"ID": "1327",
	"Nome": "Sítio Novo",
	"Estado": "10"
},
     {
	"ID": "1328",
	"Nome": "Sucupira do Norte",
	"Estado": "10"
},
     {
	"ID": "1329",
	"Nome": "Sucupira do Riachão",
	"Estado": "10"
},
     {
	"ID": "1330",
	"Nome": "Tasso Fragoso",
	"Estado": "10"
},
     {
	"ID": "1331",
	"Nome": "Timbiras",
	"Estado": "10"
},
     {
	"ID": "1332",
	"Nome": "Timon",
	"Estado": "10"
},
     {
	"ID": "1333",
	"Nome": "Trizidela do Vale",
	"Estado": "10"
},
     {
	"ID": "1334",
	"Nome": "Tufilândia",
	"Estado": "10"
},
     {
	"ID": "1335",
	"Nome": "Tuntum",
	"Estado": "10"
},
     {
	"ID": "1336",
	"Nome": "Turiaçu",
	"Estado": "10"
},
     {
	"ID": "1337",
	"Nome": "Turilândia",
	"Estado": "10"
},
     {
	"ID": "1338",
	"Nome": "Tutóia",
	"Estado": "10"
},
     {
	"ID": "1339",
	"Nome": "Urbano Santos",
	"Estado": "10"
},
     {
	"ID": "1340",
	"Nome": "Vargem Grande",
	"Estado": "10"
},
     {
	"ID": "1341",
	"Nome": "Viana",
	"Estado": "10"
},
     {
	"ID": "1342",
	"Nome": "Vila Nova dos Martírios",
	"Estado": "10"
},
     {
	"ID": "1343",
	"Nome": "Vitória do Mearim",
	"Estado": "10"
},
     {
	"ID": "1344",
	"Nome": "Vitorino Freire",
	"Estado": "10"
},
     {
	"ID": "1345",
	"Nome": "Zé Doca",
	"Estado": "10"
},
     {
	"ID": "1346",
	"Nome": "Acorizal",
	"Estado": "13"
},
     {
	"ID": "1347",
	"Nome": "Água Boa",
	"Estado": "13"
},
     {
	"ID": "1348",
	"Nome": "Alta Floresta",
	"Estado": "13"
},
     {
	"ID": "1349",
	"Nome": "Alto Araguaia",
	"Estado": "13"
},
     {
	"ID": "1350",
	"Nome": "Alto Boa Vista",
	"Estado": "13"
},
     {
	"ID": "1351",
	"Nome": "Alto Garças",
	"Estado": "13"
},
     {
	"ID": "1352",
	"Nome": "Alto Paraguai",
	"Estado": "13"
},
     {
	"ID": "1353",
	"Nome": "Alto Taquari",
	"Estado": "13"
},
     {
	"ID": "1354",
	"Nome": "Apiacás",
	"Estado": "13"
},
     {
	"ID": "1355",
	"Nome": "Araguaiana",
	"Estado": "13"
},
     {
	"ID": "1356",
	"Nome": "Araguainha",
	"Estado": "13"
},
     {
	"ID": "1357",
	"Nome": "Araputanga",
	"Estado": "13"
},
     {
	"ID": "1358",
	"Nome": "Arenápolis",
	"Estado": "13"
},
     {
	"ID": "1359",
	"Nome": "Aripuanã",
	"Estado": "13"
},
     {
	"ID": "1360",
	"Nome": "Barão de Melgaço",
	"Estado": "13"
},
     {
	"ID": "1361",
	"Nome": "Barra do Bugres",
	"Estado": "13"
},
     {
	"ID": "1362",
	"Nome": "Barra do Garças",
	"Estado": "13"
},
     {
	"ID": "1363",
	"Nome": "Bom Jesus do Araguaia",
	"Estado": "13"
},
     {
	"ID": "1364",
	"Nome": "Brasnorte",
	"Estado": "13"
},
     {
	"ID": "1365",
	"Nome": "Cáceres",
	"Estado": "13"
},
     {
	"ID": "1366",
	"Nome": "Campinápolis",
	"Estado": "13"
},
     {
	"ID": "1367",
	"Nome": "Campo Novo do Parecis",
	"Estado": "13"
},
     {
	"ID": "1368",
	"Nome": "Campo Verde",
	"Estado": "13"
},
     {
	"ID": "1369",
	"Nome": "Campos de Júlio",
	"Estado": "13"
},
     {
	"ID": "1370",
	"Nome": "Canabrava do Norte",
	"Estado": "13"
},
     {
	"ID": "1371",
	"Nome": "Canarana",
	"Estado": "13"
},
     {
	"ID": "1372",
	"Nome": "Carlinda",
	"Estado": "13"
},
     {
	"ID": "1373",
	"Nome": "Castanheira",
	"Estado": "13"
},
     {
	"ID": "1374",
	"Nome": "Chapada dos Guimarães",
	"Estado": "13"
},
     {
	"ID": "1375",
	"Nome": "Cláudia",
	"Estado": "13"
},
     {
	"ID": "1376",
	"Nome": "Cocalinho",
	"Estado": "13"
},
     {
	"ID": "1377",
	"Nome": "Colíder",
	"Estado": "13"
},
     {
	"ID": "1378",
	"Nome": "Colniza",
	"Estado": "13"
},
     {
	"ID": "1379",
	"Nome": "Comodoro",
	"Estado": "13"
},
     {
	"ID": "1380",
	"Nome": "Confresa",
	"Estado": "13"
},
     {
	"ID": "1381",
	"Nome": "Conquista d`Oeste",
	"Estado": "13"
},
     {
	"ID": "1382",
	"Nome": "Cotriguaçu",
	"Estado": "13"
},
     {
	"ID": "1383",
	"Nome": "Cuiabá",
	"Estado": "13"
},
     {
	"ID": "1384",
	"Nome": "Curvelândia",
	"Estado": "13"
},
     {
	"ID": "1385",
	"Nome": "Curvelândia",
	"Estado": "13"
},
     {
	"ID": "1386",
	"Nome": "Denise",
	"Estado": "13"
},
     {
	"ID": "1387",
	"Nome": "Diamantino",
	"Estado": "13"
},
     {
	"ID": "1388",
	"Nome": "Dom Aquino",
	"Estado": "13"
},
     {
	"ID": "1389",
	"Nome": "Feliz Natal",
	"Estado": "13"
},
     {
	"ID": "1390",
	"Nome": "Figueirópolis d`Oeste",
	"Estado": "13"
},
     {
	"ID": "1391",
	"Nome": "Gaúcha do Norte",
	"Estado": "13"
},
     {
	"ID": "1392",
	"Nome": "General Carneiro",
	"Estado": "13"
},
     {
	"ID": "1393",
	"Nome": "Glória d`Oeste",
	"Estado": "13"
},
     {
	"ID": "1394",
	"Nome": "Guarantã do Norte",
	"Estado": "13"
},
     {
	"ID": "1395",
	"Nome": "Guiratinga",
	"Estado": "13"
},
     {
	"ID": "1396",
	"Nome": "Indiavaí",
	"Estado": "13"
},
     {
	"ID": "1397",
	"Nome": "Ipiranga do Norte",
	"Estado": "13"
},
     {
	"ID": "1398",
	"Nome": "Itanhangá",
	"Estado": "13"
},
     {
	"ID": "1399",
	"Nome": "Itaúba",
	"Estado": "13"
},
     {
	"ID": "1400",
	"Nome": "Itiquira",
	"Estado": "13"
},
     {
	"ID": "1401",
	"Nome": "Jaciara",
	"Estado": "13"
},
     {
	"ID": "1402",
	"Nome": "Jangada",
	"Estado": "13"
},
     {
	"ID": "1403",
	"Nome": "Jauru",
	"Estado": "13"
},
     {
	"ID": "1404",
	"Nome": "Juara",
	"Estado": "13"
},
     {
	"ID": "1405",
	"Nome": "Juína",
	"Estado": "13"
},
     {
	"ID": "1406",
	"Nome": "Juruena",
	"Estado": "13"
},
     {
	"ID": "1407",
	"Nome": "Juscimeira",
	"Estado": "13"
},
     {
	"ID": "1408",
	"Nome": "Lambari d`Oeste",
	"Estado": "13"
},
     {
	"ID": "1409",
	"Nome": "Lucas do Rio Verde",
	"Estado": "13"
},
     {
	"ID": "1410",
	"Nome": "Luciára",
	"Estado": "13"
},
     {
	"ID": "1411",
	"Nome": "Marcelândia",
	"Estado": "13"
},
     {
	"ID": "1412",
	"Nome": "Matupá",
	"Estado": "13"
},
     {
	"ID": "1413",
	"Nome": "Mirassol d`Oeste",
	"Estado": "13"
},
     {
	"ID": "1414",
	"Nome": "Nobres",
	"Estado": "13"
},
     {
	"ID": "1415",
	"Nome": "Nortelândia",
	"Estado": "13"
},
     {
	"ID": "1416",
	"Nome": "Nossa Senhora do Livramento",
	"Estado": "13"
},
     {
	"ID": "1417",
	"Nome": "Nova Bandeirantes",
	"Estado": "13"
},
     {
	"ID": "1418",
	"Nome": "Nova Brasilândia",
	"Estado": "13"
},
     {
	"ID": "1419",
	"Nome": "Nova Canaã do Norte",
	"Estado": "13"
},
     {
	"ID": "1420",
	"Nome": "Nova Guarita",
	"Estado": "13"
},
     {
	"ID": "1421",
	"Nome": "Nova Lacerda",
	"Estado": "13"
},
     {
	"ID": "1422",
	"Nome": "Nova Marilândia",
	"Estado": "13"
},
     {
	"ID": "1423",
	"Nome": "Nova Maringá",
	"Estado": "13"
},
     {
	"ID": "1424",
	"Nome": "Nova Monte verde",
	"Estado": "13"
},
     {
	"ID": "1425",
	"Nome": "Nova Mutum",
	"Estado": "13"
},
     {
	"ID": "1426",
	"Nome": "Nova Olímpia",
	"Estado": "13"
},
     {
	"ID": "1427",
	"Nome": "Nova Santa Helena",
	"Estado": "13"
},
     {
	"ID": "1428",
	"Nome": "Nova Ubiratã",
	"Estado": "13"
},
     {
	"ID": "1429",
	"Nome": "Nova Xavantina",
	"Estado": "13"
},
     {
	"ID": "1430",
	"Nome": "Novo Horizonte do Norte",
	"Estado": "13"
},
     {
	"ID": "1431",
	"Nome": "Novo Mundo",
	"Estado": "13"
},
     {
	"ID": "1432",
	"Nome": "Novo Santo Antônio",
	"Estado": "13"
},
     {
	"ID": "1433",
	"Nome": "Novo São Joaquim",
	"Estado": "13"
},
     {
	"ID": "1434",
	"Nome": "Paranaíta",
	"Estado": "13"
},
     {
	"ID": "1435",
	"Nome": "Paranatinga",
	"Estado": "13"
},
     {
	"ID": "1436",
	"Nome": "Pedra Preta",
	"Estado": "13"
},
     {
	"ID": "1437",
	"Nome": "Peixoto de Azevedo",
	"Estado": "13"
},
     {
	"ID": "1438",
	"Nome": "Planalto da Serra",
	"Estado": "13"
},
     {
	"ID": "1439",
	"Nome": "Poconé",
	"Estado": "13"
},
     {
	"ID": "1440",
	"Nome": "Pontal do Araguaia",
	"Estado": "13"
},
     {
	"ID": "1441",
	"Nome": "Ponte Branca",
	"Estado": "13"
},
     {
	"ID": "1442",
	"Nome": "Pontes e Lacerda",
	"Estado": "13"
},
     {
	"ID": "1443",
	"Nome": "Porto Alegre do Norte",
	"Estado": "13"
},
     {
	"ID": "1444",
	"Nome": "Porto dos Gaúchos",
	"Estado": "13"
},
     {
	"ID": "1445",
	"Nome": "Porto Esperidião",
	"Estado": "13"
},
     {
	"ID": "1446",
	"Nome": "Porto Estrela",
	"Estado": "13"
},
     {
	"ID": "1447",
	"Nome": "Poxoréo",
	"Estado": "13"
},
     {
	"ID": "1448",
	"Nome": "Primavera do Leste",
	"Estado": "13"
},
     {
	"ID": "1449",
	"Nome": "Querência",
	"Estado": "13"
},
     {
	"ID": "1450",
	"Nome": "Reserva do Cabaçal",
	"Estado": "13"
},
     {
	"ID": "1451",
	"Nome": "Ribeirão Cascalheira",
	"Estado": "13"
},
     {
	"ID": "1452",
	"Nome": "Ribeirãozinho",
	"Estado": "13"
},
     {
	"ID": "1453",
	"Nome": "Rio Branco",
	"Estado": "13"
},
     {
	"ID": "1454",
	"Nome": "Rondolândia",
	"Estado": "13"
},
     {
	"ID": "1455",
	"Nome": "Rondonópolis",
	"Estado": "13"
},
     {
	"ID": "1456",
	"Nome": "Rosário Oeste",
	"Estado": "13"
},
     {
	"ID": "1457",
	"Nome": "Salto do Céu",
	"Estado": "13"
},
     {
	"ID": "1458",
	"Nome": "Santa Carmem",
	"Estado": "13"
},
     {
	"ID": "1459",
	"Nome": "Santa Cruz do Xingu",
	"Estado": "13"
},
     {
	"ID": "1460",
	"Nome": "Santa Rita do Trivelato",
	"Estado": "13"
},
     {
	"ID": "1461",
	"Nome": "Santa Terezinha",
	"Estado": "13"
},
     {
	"ID": "1462",
	"Nome": "Santo Afonso",
	"Estado": "13"
},
     {
	"ID": "1463",
	"Nome": "Santo Antônio do Leste",
	"Estado": "13"
},
     {
	"ID": "1464",
	"Nome": "Santo Antônio do Leverger",
	"Estado": "13"
},
     {
	"ID": "1465",
	"Nome": "São Félix do Araguaia",
	"Estado": "13"
},
     {
	"ID": "1466",
	"Nome": "São José do Povo",
	"Estado": "13"
},
     {
	"ID": "1467",
	"Nome": "São José do Rio Claro",
	"Estado": "13"
},
     {
	"ID": "1468",
	"Nome": "São José do Xingu",
	"Estado": "13"
},
     {
	"ID": "1469",
	"Nome": "São José dos Quatro Marcos",
	"Estado": "13"
},
     {
	"ID": "1470",
	"Nome": "São Pedro da Cipa",
	"Estado": "13"
},
     {
	"ID": "1471",
	"Nome": "Sapezal",
	"Estado": "13"
},
     {
	"ID": "1472",
	"Nome": "Serra Nova Dourada",
	"Estado": "13"
},
     {
	"ID": "1473",
	"Nome": "Sinop",
	"Estado": "13"
},
     {
	"ID": "1474",
	"Nome": "Sorriso",
	"Estado": "13"
},
     {
	"ID": "1475",
	"Nome": "Tabaporã",
	"Estado": "13"
},
     {
	"ID": "1476",
	"Nome": "Tangará da Serra",
	"Estado": "13"
},
     {
	"ID": "1477",
	"Nome": "Tapurah",
	"Estado": "13"
},
     {
	"ID": "1478",
	"Nome": "Terra Nova do Norte",
	"Estado": "13"
},
     {
	"ID": "1479",
	"Nome": "Tesouro",
	"Estado": "13"
},
     {
	"ID": "1480",
	"Nome": "Torixoréu",
	"Estado": "13"
},
     {
	"ID": "1481",
	"Nome": "União do Sul",
	"Estado": "13"
},
     {
	"ID": "1482",
	"Nome": "Vale de São Domingos",
	"Estado": "13"
},
     {
	"ID": "1483",
	"Nome": "Várzea Grande",
	"Estado": "13"
},
     {
	"ID": "1484",
	"Nome": "Vera",
	"Estado": "13"
},
     {
	"ID": "1485",
	"Nome": "Vila Bela da Santíssima Trindade",
	"Estado": "13"
},
     {
	"ID": "1486",
	"Nome": "Vila Rica",
	"Estado": "13"
},
     {
	"ID": "1487",
	"Nome": "Água Clara",
	"Estado": "12"
},
     {
	"ID": "1488",
	"Nome": "Alcinópolis",
	"Estado": "12"
},
     {
	"ID": "1489",
	"Nome": "Amambaí",
	"Estado": "12"
},
     {
	"ID": "1490",
	"Nome": "Anastácio",
	"Estado": "12"
},
     {
	"ID": "1491",
	"Nome": "Anaurilândia",
	"Estado": "12"
},
     {
	"ID": "1492",
	"Nome": "Angélica",
	"Estado": "12"
},
     {
	"ID": "1493",
	"Nome": "Antônio João",
	"Estado": "12"
},
     {
	"ID": "1494",
	"Nome": "Aparecida do Taboado",
	"Estado": "12"
},
     {
	"ID": "1495",
	"Nome": "Aquidauana",
	"Estado": "12"
},
     {
	"ID": "1496",
	"Nome": "Aral Moreira",
	"Estado": "12"
},
     {
	"ID": "1497",
	"Nome": "Bandeirantes",
	"Estado": "12"
},
     {
	"ID": "1498",
	"Nome": "Bataguassu",
	"Estado": "12"
},
     {
	"ID": "1499",
	"Nome": "Bataiporã",
	"Estado": "12"
},
     {
	"ID": "1500",
	"Nome": "Bela Vista",
	"Estado": "12"
},
     {
	"ID": "1501",
	"Nome": "Bodoquena",
	"Estado": "12"
},
     {
	"ID": "1502",
	"Nome": "Bonito",
	"Estado": "12"
},
     {
	"ID": "1503",
	"Nome": "Brasilândia",
	"Estado": "12"
},
     {
	"ID": "1504",
	"Nome": "Caarapó",
	"Estado": "12"
},
     {
	"ID": "1505",
	"Nome": "Camapuã",
	"Estado": "12"
},
     {
	"ID": "1506",
	"Nome": "Campo Grande",
	"Estado": "12"
},
     {
	"ID": "1507",
	"Nome": "Caracol",
	"Estado": "12"
},
     {
	"ID": "1508",
	"Nome": "Cassilândia",
	"Estado": "12"
},
     {
	"ID": "1509",
	"Nome": "Chapadão do Sul",
	"Estado": "12"
},
     {
	"ID": "1510",
	"Nome": "Corguinho",
	"Estado": "12"
},
     {
	"ID": "1511",
	"Nome": "Coronel Sapucaia",
	"Estado": "12"
},
     {
	"ID": "1512",
	"Nome": "Corumbá",
	"Estado": "12"
},
     {
	"ID": "1513",
	"Nome": "Costa Rica",
	"Estado": "12"
},
     {
	"ID": "1514",
	"Nome": "Coxim",
	"Estado": "12"
},
     {
	"ID": "1515",
	"Nome": "Deodápolis",
	"Estado": "12"
},
     {
	"ID": "1516",
	"Nome": "Dois Irmãos do Buriti",
	"Estado": "12"
},
     {
	"ID": "1517",
	"Nome": "Douradina",
	"Estado": "12"
},
     {
	"ID": "1518",
	"Nome": "Dourados",
	"Estado": "12"
},
     {
	"ID": "1519",
	"Nome": "Eldorado",
	"Estado": "12"
},
     {
	"ID": "1520",
	"Nome": "Fátima do Sul",
	"Estado": "12"
},
     {
	"ID": "1521",
	"Nome": "Figueirão",
	"Estado": "12"
},
     {
	"ID": "1522",
	"Nome": "Glória de Dourados",
	"Estado": "12"
},
     {
	"ID": "1523",
	"Nome": "Guia Lopes da Laguna",
	"Estado": "12"
},
     {
	"ID": "1524",
	"Nome": "Iguatemi",
	"Estado": "12"
},
     {
	"ID": "1525",
	"Nome": "Inocência",
	"Estado": "12"
},
     {
	"ID": "1526",
	"Nome": "Itaporã",
	"Estado": "12"
},
     {
	"ID": "1527",
	"Nome": "Itaquiraí",
	"Estado": "12"
},
     {
	"ID": "1528",
	"Nome": "Ivinhema",
	"Estado": "12"
},
     {
	"ID": "1529",
	"Nome": "Japorã",
	"Estado": "12"
},
     {
	"ID": "1530",
	"Nome": "Jaraguari",
	"Estado": "12"
},
     {
	"ID": "1531",
	"Nome": "Jardim",
	"Estado": "12"
},
     {
	"ID": "1532",
	"Nome": "Jateí",
	"Estado": "12"
},
     {
	"ID": "1533",
	"Nome": "Juti",
	"Estado": "12"
},
     {
	"ID": "1534",
	"Nome": "Ladário",
	"Estado": "12"
},
     {
	"ID": "1535",
	"Nome": "Laguna Carapã",
	"Estado": "12"
},
     {
	"ID": "1536",
	"Nome": "Maracaju",
	"Estado": "12"
},
     {
	"ID": "1537",
	"Nome": "Miranda",
	"Estado": "12"
},
     {
	"ID": "1538",
	"Nome": "Mundo Novo",
	"Estado": "12"
},
     {
	"ID": "1539",
	"Nome": "Naviraí",
	"Estado": "12"
},
     {
	"ID": "1540",
	"Nome": "Nioaque",
	"Estado": "12"
},
     {
	"ID": "1541",
	"Nome": "Nova Alvorada do Sul",
	"Estado": "12"
},
     {
	"ID": "1542",
	"Nome": "Nova Andradina",
	"Estado": "12"
},
     {
	"ID": "1543",
	"Nome": "Novo Horizonte do Sul",
	"Estado": "12"
},
     {
	"ID": "1544",
	"Nome": "Paranaíba",
	"Estado": "12"
},
     {
	"ID": "1545",
	"Nome": "Paranhos",
	"Estado": "12"
},
     {
	"ID": "1546",
	"Nome": "Pedro Gomes",
	"Estado": "12"
},
     {
	"ID": "1547",
	"Nome": "Ponta Porã",
	"Estado": "12"
},
     {
	"ID": "1548",
	"Nome": "Porto Murtinho",
	"Estado": "12"
},
     {
	"ID": "1549",
	"Nome": "Ribas do Rio Pardo",
	"Estado": "12"
},
     {
	"ID": "1550",
	"Nome": "Rio Brilhante",
	"Estado": "12"
},
     {
	"ID": "1551",
	"Nome": "Rio Negro",
	"Estado": "12"
},
     {
	"ID": "1552",
	"Nome": "Rio Verde de Mato Grosso",
	"Estado": "12"
},
     {
	"ID": "1553",
	"Nome": "Rochedo",
	"Estado": "12"
},
     {
	"ID": "1554",
	"Nome": "Santa Rita do Pardo",
	"Estado": "12"
},
     {
	"ID": "1555",
	"Nome": "São Gabriel do Oeste",
	"Estado": "12"
},
     {
	"ID": "1556",
	"Nome": "Selvíria",
	"Estado": "12"
},
     {
	"ID": "1557",
	"Nome": "Sete Quedas",
	"Estado": "12"
},
     {
	"ID": "1558",
	"Nome": "Sidrolândia",
	"Estado": "12"
},
     {
	"ID": "1559",
	"Nome": "Sonora",
	"Estado": "12"
},
     {
	"ID": "1560",
	"Nome": "Tacuru",
	"Estado": "12"
},
     {
	"ID": "1561",
	"Nome": "Taquarussu",
	"Estado": "12"
},
     {
	"ID": "1562",
	"Nome": "Terenos",
	"Estado": "12"
},
     {
	"ID": "1563",
	"Nome": "Três Lagoas",
	"Estado": "12"
},
     {
	"ID": "1564",
	"Nome": "Vicentina",
	"Estado": "12"
},
     {
	"ID": "1565",
	"Nome": "Abadia dos Dourados",
	"Estado": "11"
},
     {
	"ID": "1566",
	"Nome": "Abaeté",
	"Estado": "11"
},
     {
	"ID": "1567",
	"Nome": "Abre Campo",
	"Estado": "11"
},
     {
	"ID": "1568",
	"Nome": "Acaiaca",
	"Estado": "11"
},
     {
	"ID": "1569",
	"Nome": "Açucena",
	"Estado": "11"
},
     {
	"ID": "1570",
	"Nome": "Água Boa",
	"Estado": "11"
},
     {
	"ID": "1571",
	"Nome": "Água Comprida",
	"Estado": "11"
},
     {
	"ID": "1572",
	"Nome": "Aguanil",
	"Estado": "11"
},
     {
	"ID": "1573",
	"Nome": "Águas Formosas",
	"Estado": "11"
},
     {
	"ID": "1574",
	"Nome": "Águas Vermelhas",
	"Estado": "11"
},
     {
	"ID": "1575",
	"Nome": "Aimorés",
	"Estado": "11"
},
     {
	"ID": "1576",
	"Nome": "Aiuruoca",
	"Estado": "11"
},
     {
	"ID": "1577",
	"Nome": "Alagoa",
	"Estado": "11"
},
     {
	"ID": "1578",
	"Nome": "Albertina",
	"Estado": "11"
},
     {
	"ID": "1579",
	"Nome": "Além Paraíba",
	"Estado": "11"
},
     {
	"ID": "1580",
	"Nome": "Alfenas",
	"Estado": "11"
},
     {
	"ID": "1581",
	"Nome": "Alfredo Vasconcelos",
	"Estado": "11"
},
     {
	"ID": "1582",
	"Nome": "Almenara",
	"Estado": "11"
},
     {
	"ID": "1583",
	"Nome": "Alpercata",
	"Estado": "11"
},
     {
	"ID": "1584",
	"Nome": "Alpinópolis",
	"Estado": "11"
},
     {
	"ID": "1585",
	"Nome": "Alterosa",
	"Estado": "11"
},
     {
	"ID": "1586",
	"Nome": "Alto Caparaó",
	"Estado": "11"
},
     {
	"ID": "1587",
	"Nome": "Alto Jequitibá",
	"Estado": "11"
},
     {
	"ID": "1588",
	"Nome": "Alto Rio Doce",
	"Estado": "11"
},
     {
	"ID": "1589",
	"Nome": "Alvarenga",
	"Estado": "11"
},
     {
	"ID": "1590",
	"Nome": "Alvinópolis",
	"Estado": "11"
},
     {
	"ID": "1591",
	"Nome": "Alvorada de Minas",
	"Estado": "11"
},
     {
	"ID": "1592",
	"Nome": "Amparo do Serra",
	"Estado": "11"
},
     {
	"ID": "1593",
	"Nome": "Andradas",
	"Estado": "11"
},
     {
	"ID": "1594",
	"Nome": "Andrelândia",
	"Estado": "11"
},
     {
	"ID": "1595",
	"Nome": "Angelândia",
	"Estado": "11"
},
     {
	"ID": "1596",
	"Nome": "Antônio Carlos",
	"Estado": "11"
},
     {
	"ID": "1597",
	"Nome": "Antônio Dias",
	"Estado": "11"
},
     {
	"ID": "1598",
	"Nome": "Antônio Prado de Minas",
	"Estado": "11"
},
     {
	"ID": "1599",
	"Nome": "Araçaí",
	"Estado": "11"
},
     {
	"ID": "1600",
	"Nome": "Aracitaba",
	"Estado": "11"
},
     {
	"ID": "1601",
	"Nome": "Araçuaí",
	"Estado": "11"
},
     {
	"ID": "1602",
	"Nome": "Araguari",
	"Estado": "11"
},
     {
	"ID": "1603",
	"Nome": "Arantina",
	"Estado": "11"
},
     {
	"ID": "1604",
	"Nome": "Araponga",
	"Estado": "11"
},
     {
	"ID": "1605",
	"Nome": "Araporã",
	"Estado": "11"
},
     {
	"ID": "1606",
	"Nome": "Arapuá",
	"Estado": "11"
},
     {
	"ID": "1607",
	"Nome": "Araújos",
	"Estado": "11"
},
     {
	"ID": "1608",
	"Nome": "Araxá",
	"Estado": "11"
},
     {
	"ID": "1609",
	"Nome": "Arceburgo",
	"Estado": "11"
},
     {
	"ID": "1610",
	"Nome": "Arcos",
	"Estado": "11"
},
     {
	"ID": "1611",
	"Nome": "Areado",
	"Estado": "11"
},
     {
	"ID": "1612",
	"Nome": "Argirita",
	"Estado": "11"
},
     {
	"ID": "1613",
	"Nome": "Aricanduva",
	"Estado": "11"
},
     {
	"ID": "1614",
	"Nome": "Arinos",
	"Estado": "11"
},
     {
	"ID": "1615",
	"Nome": "Astolfo Dutra",
	"Estado": "11"
},
     {
	"ID": "1616",
	"Nome": "Ataléia",
	"Estado": "11"
},
     {
	"ID": "1617",
	"Nome": "Augusto de Lima",
	"Estado": "11"
},
     {
	"ID": "1618",
	"Nome": "Baependi",
	"Estado": "11"
},
     {
	"ID": "1619",
	"Nome": "Baldim",
	"Estado": "11"
},
     {
	"ID": "1620",
	"Nome": "Bambuí",
	"Estado": "11"
},
     {
	"ID": "1621",
	"Nome": "Bandeira",
	"Estado": "11"
},
     {
	"ID": "1622",
	"Nome": "Bandeira do Sul",
	"Estado": "11"
},
     {
	"ID": "1623",
	"Nome": "Barão de Cocais",
	"Estado": "11"
},
     {
	"ID": "1624",
	"Nome": "Barão de Monte Alto",
	"Estado": "11"
},
     {
	"ID": "1625",
	"Nome": "Barbacena",
	"Estado": "11"
},
     {
	"ID": "1626",
	"Nome": "Barra Longa",
	"Estado": "11"
},
     {
	"ID": "1627",
	"Nome": "Barroso",
	"Estado": "11"
},
     {
	"ID": "1628",
	"Nome": "Bela Vista de Minas",
	"Estado": "11"
},
     {
	"ID": "1629",
	"Nome": "Belmiro Braga",
	"Estado": "11"
},
     {
	"ID": "1630",
	"Nome": "Belo Horizonte",
	"Estado": "11"
},
     {
	"ID": "1631",
	"Nome": "Belo Oriente",
	"Estado": "11"
},
     {
	"ID": "1632",
	"Nome": "Belo Vale",
	"Estado": "11"
},
     {
	"ID": "1633",
	"Nome": "Berilo",
	"Estado": "11"
},
     {
	"ID": "1634",
	"Nome": "Berizal",
	"Estado": "11"
},
     {
	"ID": "1635",
	"Nome": "Bertópolis",
	"Estado": "11"
},
     {
	"ID": "1636",
	"Nome": "Betim",
	"Estado": "11"
},
     {
	"ID": "1637",
	"Nome": "Bias Fortes",
	"Estado": "11"
},
     {
	"ID": "1638",
	"Nome": "Bicas",
	"Estado": "11"
},
     {
	"ID": "1639",
	"Nome": "Biquinhas",
	"Estado": "11"
},
     {
	"ID": "1640",
	"Nome": "Boa Esperança",
	"Estado": "11"
},
     {
	"ID": "1641",
	"Nome": "Bocaina de Minas",
	"Estado": "11"
},
     {
	"ID": "1642",
	"Nome": "Bocaiúva",
	"Estado": "11"
},
     {
	"ID": "1643",
	"Nome": "Bom Despacho",
	"Estado": "11"
},
     {
	"ID": "1644",
	"Nome": "Bom Jardim de Minas",
	"Estado": "11"
},
     {
	"ID": "1645",
	"Nome": "Bom Jesus da Penha",
	"Estado": "11"
},
     {
	"ID": "1646",
	"Nome": "Bom Jesus do Amparo",
	"Estado": "11"
},
     {
	"ID": "1647",
	"Nome": "Bom Jesus do Galho",
	"Estado": "11"
},
     {
	"ID": "1648",
	"Nome": "Bom Repouso",
	"Estado": "11"
},
     {
	"ID": "1649",
	"Nome": "Bom Sucesso",
	"Estado": "11"
},
     {
	"ID": "1650",
	"Nome": "Bonfim",
	"Estado": "11"
},
     {
	"ID": "1651",
	"Nome": "Bonfinópolis de Minas",
	"Estado": "11"
},
     {
	"ID": "1652",
	"Nome": "Bonito de Minas",
	"Estado": "11"
},
     {
	"ID": "1653",
	"Nome": "Borda da Mata",
	"Estado": "11"
},
     {
	"ID": "1654",
	"Nome": "Botelhos",
	"Estado": "11"
},
     {
	"ID": "1655",
	"Nome": "Botumirim",
	"Estado": "11"
},
     {
	"ID": "1656",
	"Nome": "Brás Pires",
	"Estado": "11"
},
     {
	"ID": "1657",
	"Nome": "Brasilândia de Minas",
	"Estado": "11"
},
     {
	"ID": "1658",
	"Nome": "Brasília de Minas",
	"Estado": "11"
},
     {
	"ID": "1659",
	"Nome": "Brasópolis",
	"Estado": "11"
},
     {
	"ID": "1660",
	"Nome": "Braúnas",
	"Estado": "11"
},
     {
	"ID": "1661",
	"Nome": "Brumadinho",
	"Estado": "11"
},
     {
	"ID": "1662",
	"Nome": "Bueno Brandão",
	"Estado": "11"
},
     {
	"ID": "1663",
	"Nome": "Buenópolis",
	"Estado": "11"
},
     {
	"ID": "1664",
	"Nome": "Bugre",
	"Estado": "11"
},
     {
	"ID": "1665",
	"Nome": "Buritis",
	"Estado": "11"
},
     {
	"ID": "1666",
	"Nome": "Buritizeiro",
	"Estado": "11"
},
     {
	"ID": "1667",
	"Nome": "Cabeceira Grande",
	"Estado": "11"
},
     {
	"ID": "1668",
	"Nome": "Cabo Verde",
	"Estado": "11"
},
     {
	"ID": "1669",
	"Nome": "Cachoeira da Prata",
	"Estado": "11"
},
     {
	"ID": "1670",
	"Nome": "Cachoeira de Minas",
	"Estado": "11"
},
     {
	"ID": "1671",
	"Nome": "Cachoeira de Pajeú",
	"Estado": "11"
},
     {
	"ID": "1672",
	"Nome": "Cachoeira Dourada",
	"Estado": "11"
},
     {
	"ID": "1673",
	"Nome": "Caetanópolis",
	"Estado": "11"
},
     {
	"ID": "1674",
	"Nome": "Caeté",
	"Estado": "11"
},
     {
	"ID": "1675",
	"Nome": "Caiana",
	"Estado": "11"
},
     {
	"ID": "1676",
	"Nome": "Cajuri",
	"Estado": "11"
},
     {
	"ID": "1677",
	"Nome": "Caldas",
	"Estado": "11"
},
     {
	"ID": "1678",
	"Nome": "Camacho",
	"Estado": "11"
},
     {
	"ID": "1679",
	"Nome": "Camanducaia",
	"Estado": "11"
},
     {
	"ID": "1680",
	"Nome": "Cambuí",
	"Estado": "11"
},
     {
	"ID": "1681",
	"Nome": "Cambuquira",
	"Estado": "11"
},
     {
	"ID": "1682",
	"Nome": "Campanário",
	"Estado": "11"
},
     {
	"ID": "1683",
	"Nome": "Campanha",
	"Estado": "11"
},
     {
	"ID": "1684",
	"Nome": "Campestre",
	"Estado": "11"
},
     {
	"ID": "1685",
	"Nome": "Campina Verde",
	"Estado": "11"
},
     {
	"ID": "1686",
	"Nome": "Campo Azul",
	"Estado": "11"
},
     {
	"ID": "1687",
	"Nome": "Campo Belo",
	"Estado": "11"
},
     {
	"ID": "1688",
	"Nome": "Campo do Meio",
	"Estado": "11"
},
     {
	"ID": "1689",
	"Nome": "Campo Florido",
	"Estado": "11"
},
     {
	"ID": "1690",
	"Nome": "Campos Altos",
	"Estado": "11"
},
     {
	"ID": "1691",
	"Nome": "Campos Gerais",
	"Estado": "11"
},
     {
	"ID": "1692",
	"Nome": "Cana Verde",
	"Estado": "11"
},
     {
	"ID": "1693",
	"Nome": "Canaã",
	"Estado": "11"
},
     {
	"ID": "1694",
	"Nome": "Canápolis",
	"Estado": "11"
},
     {
	"ID": "1695",
	"Nome": "Candeias",
	"Estado": "11"
},
     {
	"ID": "1696",
	"Nome": "Cantagalo",
	"Estado": "11"
},
     {
	"ID": "1697",
	"Nome": "Caparaó",
	"Estado": "11"
},
     {
	"ID": "1698",
	"Nome": "Capela Nova",
	"Estado": "11"
},
     {
	"ID": "1699",
	"Nome": "Capelinha",
	"Estado": "11"
},
     {
	"ID": "1700",
	"Nome": "Capetinga",
	"Estado": "11"
},
     {
	"ID": "1701",
	"Nome": "Capim Branco",
	"Estado": "11"
},
     {
	"ID": "1702",
	"Nome": "Capinópolis",
	"Estado": "11"
},
     {
	"ID": "1703",
	"Nome": "Capitão Andrade",
	"Estado": "11"
},
     {
	"ID": "1704",
	"Nome": "Capitão Enéas",
	"Estado": "11"
},
     {
	"ID": "1705",
	"Nome": "Capitólio",
	"Estado": "11"
},
     {
	"ID": "1706",
	"Nome": "Caputira",
	"Estado": "11"
},
     {
	"ID": "1707",
	"Nome": "Caraí",
	"Estado": "11"
},
     {
	"ID": "1708",
	"Nome": "Caranaíba",
	"Estado": "11"
},
     {
	"ID": "1709",
	"Nome": "Carandaí",
	"Estado": "11"
},
     {
	"ID": "1710",
	"Nome": "Carangola",
	"Estado": "11"
},
     {
	"ID": "1711",
	"Nome": "Caratinga",
	"Estado": "11"
},
     {
	"ID": "1712",
	"Nome": "Carbonita",
	"Estado": "11"
},
     {
	"ID": "1713",
	"Nome": "Careaçu",
	"Estado": "11"
},
     {
	"ID": "1714",
	"Nome": "Carlos Chagas",
	"Estado": "11"
},
     {
	"ID": "1715",
	"Nome": "Carmésia",
	"Estado": "11"
},
     {
	"ID": "1716",
	"Nome": "Carmo da Cachoeira",
	"Estado": "11"
},
     {
	"ID": "1717",
	"Nome": "Carmo da Mata",
	"Estado": "11"
},
     {
	"ID": "1718",
	"Nome": "Carmo de Minas",
	"Estado": "11"
},
     {
	"ID": "1719",
	"Nome": "Carmo do Cajuru",
	"Estado": "11"
},
     {
	"ID": "1720",
	"Nome": "Carmo do Paranaíba",
	"Estado": "11"
},
     {
	"ID": "1721",
	"Nome": "Carmo do Rio Claro",
	"Estado": "11"
},
     {
	"ID": "1722",
	"Nome": "Carmópolis de Minas",
	"Estado": "11"
},
     {
	"ID": "1723",
	"Nome": "Carneirinho",
	"Estado": "11"
},
     {
	"ID": "1724",
	"Nome": "Carrancas",
	"Estado": "11"
},
     {
	"ID": "1725",
	"Nome": "Carvalhópolis",
	"Estado": "11"
},
     {
	"ID": "1726",
	"Nome": "Carvalhos",
	"Estado": "11"
},
     {
	"ID": "1727",
	"Nome": "Casa Grande",
	"Estado": "11"
},
     {
	"ID": "1728",
	"Nome": "Cascalho Rico",
	"Estado": "11"
},
     {
	"ID": "1729",
	"Nome": "Cássia",
	"Estado": "11"
},
     {
	"ID": "1730",
	"Nome": "Cataguases",
	"Estado": "11"
},
     {
	"ID": "1731",
	"Nome": "Catas Altas",
	"Estado": "11"
},
     {
	"ID": "1732",
	"Nome": "Catas Altas da Noruega",
	"Estado": "11"
},
     {
	"ID": "1733",
	"Nome": "Catuji",
	"Estado": "11"
},
     {
	"ID": "1734",
	"Nome": "Catuti",
	"Estado": "11"
},
     {
	"ID": "1735",
	"Nome": "Caxambu",
	"Estado": "11"
},
     {
	"ID": "1736",
	"Nome": "Cedro do Abaeté",
	"Estado": "11"
},
     {
	"ID": "1737",
	"Nome": "Central de Minas",
	"Estado": "11"
},
     {
	"ID": "1738",
	"Nome": "Centralina",
	"Estado": "11"
},
     {
	"ID": "1739",
	"Nome": "Chácara",
	"Estado": "11"
},
     {
	"ID": "1740",
	"Nome": "Chalé",
	"Estado": "11"
},
     {
	"ID": "1741",
	"Nome": "Chapada do Norte",
	"Estado": "11"
},
     {
	"ID": "1742",
	"Nome": "Chapada Gaúcha",
	"Estado": "11"
},
     {
	"ID": "1743",
	"Nome": "Chiador",
	"Estado": "11"
},
     {
	"ID": "1744",
	"Nome": "Cipotânea",
	"Estado": "11"
},
     {
	"ID": "1745",
	"Nome": "Claraval",
	"Estado": "11"
},
     {
	"ID": "1746",
	"Nome": "Claro dos Poções",
	"Estado": "11"
},
     {
	"ID": "1747",
	"Nome": "Cláudio",
	"Estado": "11"
},
     {
	"ID": "1748",
	"Nome": "Coimbra",
	"Estado": "11"
},
     {
	"ID": "1749",
	"Nome": "Coluna",
	"Estado": "11"
},
     {
	"ID": "1750",
	"Nome": "Comendador Gomes",
	"Estado": "11"
},
     {
	"ID": "1751",
	"Nome": "Comercinho",
	"Estado": "11"
},
     {
	"ID": "1752",
	"Nome": "Conceição da Aparecida",
	"Estado": "11"
},
     {
	"ID": "1753",
	"Nome": "Conceição da Barra de Minas",
	"Estado": "11"
},
     {
	"ID": "1754",
	"Nome": "Conceição das Alagoas",
	"Estado": "11"
},
     {
	"ID": "1755",
	"Nome": "Conceição das Pedras",
	"Estado": "11"
},
     {
	"ID": "1756",
	"Nome": "Conceição de Ipanema",
	"Estado": "11"
},
     {
	"ID": "1757",
	"Nome": "Conceição do Mato Dentro",
	"Estado": "11"
},
     {
	"ID": "1758",
	"Nome": "Conceição do Pará",
	"Estado": "11"
},
     {
	"ID": "1759",
	"Nome": "Conceição do Rio Verde",
	"Estado": "11"
},
     {
	"ID": "1760",
	"Nome": "Conceição dos Ouros",
	"Estado": "11"
},
     {
	"ID": "1761",
	"Nome": "Cônego Marinho",
	"Estado": "11"
},
     {
	"ID": "1762",
	"Nome": "Confins",
	"Estado": "11"
},
     {
	"ID": "1763",
	"Nome": "Congonhal",
	"Estado": "11"
},
     {
	"ID": "1764",
	"Nome": "Congonhas",
	"Estado": "11"
},
     {
	"ID": "1765",
	"Nome": "Congonhas do Norte",
	"Estado": "11"
},
     {
	"ID": "1766",
	"Nome": "Conquista",
	"Estado": "11"
},
     {
	"ID": "1767",
	"Nome": "Conselheiro Lafaiete",
	"Estado": "11"
},
     {
	"ID": "1768",
	"Nome": "Conselheiro Pena",
	"Estado": "11"
},
     {
	"ID": "1769",
	"Nome": "Consolação",
	"Estado": "11"
},
     {
	"ID": "1770",
	"Nome": "Contagem",
	"Estado": "11"
},
     {
	"ID": "1771",
	"Nome": "Coqueiral",
	"Estado": "11"
},
     {
	"ID": "1772",
	"Nome": "Coração de Jesus",
	"Estado": "11"
},
     {
	"ID": "1773",
	"Nome": "Cordisburgo",
	"Estado": "11"
},
     {
	"ID": "1774",
	"Nome": "Cordislândia",
	"Estado": "11"
},
     {
	"ID": "1775",
	"Nome": "Corinto",
	"Estado": "11"
},
     {
	"ID": "1776",
	"Nome": "Coroaci",
	"Estado": "11"
},
     {
	"ID": "1777",
	"Nome": "Coromandel",
	"Estado": "11"
},
     {
	"ID": "1778",
	"Nome": "Coronel Fabriciano",
	"Estado": "11"
},
     {
	"ID": "1779",
	"Nome": "Coronel Murta",
	"Estado": "11"
},
     {
	"ID": "1780",
	"Nome": "Coronel Pacheco",
	"Estado": "11"
},
     {
	"ID": "1781",
	"Nome": "Coronel Xavier Chaves",
	"Estado": "11"
},
     {
	"ID": "1782",
	"Nome": "Córrego Danta",
	"Estado": "11"
},
     {
	"ID": "1783",
	"Nome": "Córrego do Bom Jesus",
	"Estado": "11"
},
     {
	"ID": "1784",
	"Nome": "Córrego Fundo",
	"Estado": "11"
},
     {
	"ID": "1785",
	"Nome": "Córrego Novo",
	"Estado": "11"
},
     {
	"ID": "1786",
	"Nome": "Couto de Magalhães de Minas",
	"Estado": "11"
},
     {
	"ID": "1787",
	"Nome": "Crisólita",
	"Estado": "11"
},
     {
	"ID": "1788",
	"Nome": "Cristais",
	"Estado": "11"
},
     {
	"ID": "1789",
	"Nome": "Cristália",
	"Estado": "11"
},
     {
	"ID": "1790",
	"Nome": "Cristiano Otoni",
	"Estado": "11"
},
     {
	"ID": "1791",
	"Nome": "Cristina",
	"Estado": "11"
},
     {
	"ID": "1792",
	"Nome": "Crucilândia",
	"Estado": "11"
},
     {
	"ID": "1793",
	"Nome": "Cruzeiro da Fortaleza",
	"Estado": "11"
},
     {
	"ID": "1794",
	"Nome": "Cruzília",
	"Estado": "11"
},
     {
	"ID": "1795",
	"Nome": "Cuparaque",
	"Estado": "11"
},
     {
	"ID": "1796",
	"Nome": "Curral de Dentro",
	"Estado": "11"
},
     {
	"ID": "1797",
	"Nome": "Curvelo",
	"Estado": "11"
},
     {
	"ID": "1798",
	"Nome": "Datas",
	"Estado": "11"
},
     {
	"ID": "1799",
	"Nome": "Delfim Moreira",
	"Estado": "11"
},
     {
	"ID": "1800",
	"Nome": "Delfinópolis",
	"Estado": "11"
},
     {
	"ID": "1801",
	"Nome": "Delta",
	"Estado": "11"
},
     {
	"ID": "1802",
	"Nome": "Descoberto",
	"Estado": "11"
},
     {
	"ID": "1803",
	"Nome": "Desterro de Entre Rios",
	"Estado": "11"
},
     {
	"ID": "1804",
	"Nome": "Desterro do Melo",
	"Estado": "11"
},
     {
	"ID": "1805",
	"Nome": "Diamantina",
	"Estado": "11"
},
     {
	"ID": "1806",
	"Nome": "Diogo de Vasconcelos",
	"Estado": "11"
},
     {
	"ID": "1807",
	"Nome": "Dionísio",
	"Estado": "11"
},
     {
	"ID": "1808",
	"Nome": "Divinésia",
	"Estado": "11"
},
     {
	"ID": "1809",
	"Nome": "Divino",
	"Estado": "11"
},
     {
	"ID": "1810",
	"Nome": "Divino das Laranjeiras",
	"Estado": "11"
},
     {
	"ID": "1811",
	"Nome": "Divinolândia de Minas",
	"Estado": "11"
},
     {
	"ID": "1812",
	"Nome": "Divinópolis",
	"Estado": "11"
},
     {
	"ID": "1813",
	"Nome": "Divisa Alegre",
	"Estado": "11"
},
     {
	"ID": "1814",
	"Nome": "Divisa Nova",
	"Estado": "11"
},
     {
	"ID": "1815",
	"Nome": "Divisópolis",
	"Estado": "11"
},
     {
	"ID": "1816",
	"Nome": "Dom Bosco",
	"Estado": "11"
},
     {
	"ID": "1817",
	"Nome": "Dom Cavati",
	"Estado": "11"
},
     {
	"ID": "1818",
	"Nome": "Dom Joaquim",
	"Estado": "11"
},
     {
	"ID": "1819",
	"Nome": "Dom Silvério",
	"Estado": "11"
},
     {
	"ID": "1820",
	"Nome": "Dom Viçoso",
	"Estado": "11"
},
     {
	"ID": "1821",
	"Nome": "Dona Eusébia",
	"Estado": "11"
},
     {
	"ID": "1822",
	"Nome": "Dores de Campos",
	"Estado": "11"
},
     {
	"ID": "1823",
	"Nome": "Dores de Guanhães",
	"Estado": "11"
},
     {
	"ID": "1824",
	"Nome": "Dores do Indaiá",
	"Estado": "11"
},
     {
	"ID": "1825",
	"Nome": "Dores do Turvo",
	"Estado": "11"
},
     {
	"ID": "1826",
	"Nome": "Doresópolis",
	"Estado": "11"
},
     {
	"ID": "1827",
	"Nome": "Douradoquara",
	"Estado": "11"
},
     {
	"ID": "1828",
	"Nome": "Durandé",
	"Estado": "11"
},
     {
	"ID": "1829",
	"Nome": "Elói Mendes",
	"Estado": "11"
},
     {
	"ID": "1830",
	"Nome": "Engenheiro Caldas",
	"Estado": "11"
},
     {
	"ID": "1831",
	"Nome": "Engenheiro Navarro",
	"Estado": "11"
},
     {
	"ID": "1832",
	"Nome": "Entre Folhas",
	"Estado": "11"
},
     {
	"ID": "1833",
	"Nome": "Entre Rios de Minas",
	"Estado": "11"
},
     {
	"ID": "1834",
	"Nome": "Ervália",
	"Estado": "11"
},
     {
	"ID": "1835",
	"Nome": "Esmeraldas",
	"Estado": "11"
},
     {
	"ID": "1836",
	"Nome": "Espera Feliz",
	"Estado": "11"
},
     {
	"ID": "1837",
	"Nome": "Espinosa",
	"Estado": "11"
},
     {
	"ID": "1838",
	"Nome": "Espírito Santo do Dourado",
	"Estado": "11"
},
     {
	"ID": "1839",
	"Nome": "Estiva",
	"Estado": "11"
},
     {
	"ID": "1840",
	"Nome": "Estrela Dalva",
	"Estado": "11"
},
     {
	"ID": "1841",
	"Nome": "Estrela do Indaiá",
	"Estado": "11"
},
     {
	"ID": "1842",
	"Nome": "Estrela do Sul",
	"Estado": "11"
},
     {
	"ID": "1843",
	"Nome": "Eugenópolis",
	"Estado": "11"
},
     {
	"ID": "1844",
	"Nome": "Ewbank da Câmara",
	"Estado": "11"
},
     {
	"ID": "1845",
	"Nome": "Extrema",
	"Estado": "11"
},
     {
	"ID": "1846",
	"Nome": "Fama",
	"Estado": "11"
},
     {
	"ID": "1847",
	"Nome": "Faria Lemos",
	"Estado": "11"
},
     {
	"ID": "1848",
	"Nome": "Felício dos Santos",
	"Estado": "11"
},
     {
	"ID": "1849",
	"Nome": "Felisburgo",
	"Estado": "11"
},
     {
	"ID": "1850",
	"Nome": "Felixlândia",
	"Estado": "11"
},
     {
	"ID": "1851",
	"Nome": "Fernandes Tourinho",
	"Estado": "11"
},
     {
	"ID": "1852",
	"Nome": "Ferros",
	"Estado": "11"
},
     {
	"ID": "1853",
	"Nome": "Fervedouro",
	"Estado": "11"
},
     {
	"ID": "1854",
	"Nome": "Florestal",
	"Estado": "11"
},
     {
	"ID": "1855",
	"Nome": "Formiga",
	"Estado": "11"
},
     {
	"ID": "1856",
	"Nome": "Formoso",
	"Estado": "11"
},
     {
	"ID": "1857",
	"Nome": "Fortaleza de Minas",
	"Estado": "11"
},
     {
	"ID": "1858",
	"Nome": "Fortuna de Minas",
	"Estado": "11"
},
     {
	"ID": "1859",
	"Nome": "Francisco Badaró",
	"Estado": "11"
},
     {
	"ID": "1860",
	"Nome": "Francisco Dumont",
	"Estado": "11"
},
     {
	"ID": "1861",
	"Nome": "Francisco Sá",
	"Estado": "11"
},
     {
	"ID": "1862",
	"Nome": "Franciscópolis",
	"Estado": "11"
},
     {
	"ID": "1863",
	"Nome": "Frei Gaspar",
	"Estado": "11"
},
     {
	"ID": "1864",
	"Nome": "Frei Inocêncio",
	"Estado": "11"
},
     {
	"ID": "1865",
	"Nome": "Frei Lagonegro",
	"Estado": "11"
},
     {
	"ID": "1866",
	"Nome": "Fronteira",
	"Estado": "11"
},
     {
	"ID": "1867",
	"Nome": "Fronteira dos Vales",
	"Estado": "11"
},
     {
	"ID": "1868",
	"Nome": "Fruta de Leite",
	"Estado": "11"
},
     {
	"ID": "1869",
	"Nome": "Frutal",
	"Estado": "11"
},
     {
	"ID": "1870",
	"Nome": "Funilândia",
	"Estado": "11"
},
     {
	"ID": "1871",
	"Nome": "Galiléia",
	"Estado": "11"
},
     {
	"ID": "1872",
	"Nome": "Gameleiras",
	"Estado": "11"
},
     {
	"ID": "1873",
	"Nome": "Glaucilândia",
	"Estado": "11"
},
     {
	"ID": "1874",
	"Nome": "Goiabeira",
	"Estado": "11"
},
     {
	"ID": "1875",
	"Nome": "Goianá",
	"Estado": "11"
},
     {
	"ID": "1876",
	"Nome": "Gonçalves",
	"Estado": "11"
},
     {
	"ID": "1877",
	"Nome": "Gonzaga",
	"Estado": "11"
},
     {
	"ID": "1878",
	"Nome": "Gouveia",
	"Estado": "11"
},
     {
	"ID": "1879",
	"Nome": "Governador Valadares",
	"Estado": "11"
},
     {
	"ID": "1880",
	"Nome": "Grão Mogol",
	"Estado": "11"
},
     {
	"ID": "1881",
	"Nome": "Grupiara",
	"Estado": "11"
},
     {
	"ID": "1882",
	"Nome": "Guanhães",
	"Estado": "11"
},
     {
	"ID": "1883",
	"Nome": "Guapé",
	"Estado": "11"
},
     {
	"ID": "1884",
	"Nome": "Guaraciaba",
	"Estado": "11"
},
     {
	"ID": "1885",
	"Nome": "Guaraciama",
	"Estado": "11"
},
     {
	"ID": "1886",
	"Nome": "Guaranésia",
	"Estado": "11"
},
     {
	"ID": "1887",
	"Nome": "Guarani",
	"Estado": "11"
},
     {
	"ID": "1888",
	"Nome": "Guarará",
	"Estado": "11"
},
     {
	"ID": "1889",
	"Nome": "Guarda-Mor",
	"Estado": "11"
},
     {
	"ID": "1890",
	"Nome": "Guaxupé",
	"Estado": "11"
},
     {
	"ID": "1891",
	"Nome": "Guidoval",
	"Estado": "11"
},
     {
	"ID": "1892",
	"Nome": "Guimarânia",
	"Estado": "11"
},
     {
	"ID": "1893",
	"Nome": "Guiricema",
	"Estado": "11"
},
     {
	"ID": "1894",
	"Nome": "Gurinhatã",
	"Estado": "11"
},
     {
	"ID": "1895",
	"Nome": "Heliodora",
	"Estado": "11"
},
     {
	"ID": "1896",
	"Nome": "Iapu",
	"Estado": "11"
},
     {
	"ID": "1897",
	"Nome": "Ibertioga",
	"Estado": "11"
},
     {
	"ID": "1898",
	"Nome": "Ibiá",
	"Estado": "11"
},
     {
	"ID": "1899",
	"Nome": "Ibiaí",
	"Estado": "11"
},
     {
	"ID": "1900",
	"Nome": "Ibiracatu",
	"Estado": "11"
},
     {
	"ID": "1901",
	"Nome": "Ibiraci",
	"Estado": "11"
},
     {
	"ID": "1902",
	"Nome": "Ibirité",
	"Estado": "11"
},
     {
	"ID": "1903",
	"Nome": "Ibitiúra de Minas",
	"Estado": "11"
},
     {
	"ID": "1904",
	"Nome": "Ibituruna",
	"Estado": "11"
},
     {
	"ID": "1905",
	"Nome": "Icaraí de Minas",
	"Estado": "11"
},
     {
	"ID": "1906",
	"Nome": "Igarapé",
	"Estado": "11"
},
     {
	"ID": "1907",
	"Nome": "Igaratinga",
	"Estado": "11"
},
     {
	"ID": "1908",
	"Nome": "Iguatama",
	"Estado": "11"
},
     {
	"ID": "1909",
	"Nome": "Ijaci",
	"Estado": "11"
},
     {
	"ID": "1910",
	"Nome": "Ilicínea",
	"Estado": "11"
},
     {
	"ID": "1911",
	"Nome": "Imbé de Minas",
	"Estado": "11"
},
     {
	"ID": "1912",
	"Nome": "Inconfidentes",
	"Estado": "11"
},
     {
	"ID": "1913",
	"Nome": "Indaiabira",
	"Estado": "11"
},
     {
	"ID": "1914",
	"Nome": "Indianópolis",
	"Estado": "11"
},
     {
	"ID": "1915",
	"Nome": "Ingaí",
	"Estado": "11"
},
     {
	"ID": "1916",
	"Nome": "Inhapim",
	"Estado": "11"
},
     {
	"ID": "1917",
	"Nome": "Inhaúma",
	"Estado": "11"
},
     {
	"ID": "1918",
	"Nome": "Inimutaba",
	"Estado": "11"
},
     {
	"ID": "1919",
	"Nome": "Ipaba",
	"Estado": "11"
},
     {
	"ID": "1920",
	"Nome": "Ipanema",
	"Estado": "11"
},
     {
	"ID": "1921",
	"Nome": "Ipatinga",
	"Estado": "11"
},
     {
	"ID": "1922",
	"Nome": "Ipiaçu",
	"Estado": "11"
},
     {
	"ID": "1923",
	"Nome": "Ipuiúna",
	"Estado": "11"
},
     {
	"ID": "1924",
	"Nome": "Iraí de Minas",
	"Estado": "11"
},
     {
	"ID": "1925",
	"Nome": "Itabira",
	"Estado": "11"
},
     {
	"ID": "1926",
	"Nome": "Itabirinha de Mantena",
	"Estado": "11"
},
     {
	"ID": "1927",
	"Nome": "Itabirito",
	"Estado": "11"
},
     {
	"ID": "1928",
	"Nome": "Itacambira",
	"Estado": "11"
},
     {
	"ID": "1929",
	"Nome": "Itacarambi",
	"Estado": "11"
},
     {
	"ID": "1930",
	"Nome": "Itaguara",
	"Estado": "11"
},
     {
	"ID": "1931",
	"Nome": "Itaipé",
	"Estado": "11"
},
     {
	"ID": "1932",
	"Nome": "Itajubá",
	"Estado": "11"
},
     {
	"ID": "1933",
	"Nome": "Itamarandiba",
	"Estado": "11"
},
     {
	"ID": "1934",
	"Nome": "Itamarati de Minas",
	"Estado": "11"
},
     {
	"ID": "1935",
	"Nome": "Itambacuri",
	"Estado": "11"
},
     {
	"ID": "1936",
	"Nome": "Itambé do Mato Dentro",
	"Estado": "11"
},
     {
	"ID": "1937",
	"Nome": "Itamogi",
	"Estado": "11"
},
     {
	"ID": "1938",
	"Nome": "Itamonte",
	"Estado": "11"
},
     {
	"ID": "1939",
	"Nome": "Itanhandu",
	"Estado": "11"
},
     {
	"ID": "1940",
	"Nome": "Itanhomi",
	"Estado": "11"
},
     {
	"ID": "1941",
	"Nome": "Itaobim",
	"Estado": "11"
},
     {
	"ID": "1942",
	"Nome": "Itapagipe",
	"Estado": "11"
},
     {
	"ID": "1943",
	"Nome": "Itapecerica",
	"Estado": "11"
},
     {
	"ID": "1944",
	"Nome": "Itapeva",
	"Estado": "11"
},
     {
	"ID": "1945",
	"Nome": "Itatiaiuçu",
	"Estado": "11"
},
     {
	"ID": "1946",
	"Nome": "Itaú de Minas",
	"Estado": "11"
},
     {
	"ID": "1947",
	"Nome": "Itaúna",
	"Estado": "11"
},
     {
	"ID": "1948",
	"Nome": "Itaverava",
	"Estado": "11"
},
     {
	"ID": "1949",
	"Nome": "Itinga",
	"Estado": "11"
},
     {
	"ID": "1950",
	"Nome": "Itueta",
	"Estado": "11"
},
     {
	"ID": "1951",
	"Nome": "Ituiutaba",
	"Estado": "11"
},
     {
	"ID": "1952",
	"Nome": "Itumirim",
	"Estado": "11"
},
     {
	"ID": "1953",
	"Nome": "Iturama",
	"Estado": "11"
},
     {
	"ID": "1954",
	"Nome": "Itutinga",
	"Estado": "11"
},
     {
	"ID": "1955",
	"Nome": "Jaboticatubas",
	"Estado": "11"
},
     {
	"ID": "1956",
	"Nome": "Jacinto",
	"Estado": "11"
},
     {
	"ID": "1957",
	"Nome": "Jacuí",
	"Estado": "11"
},
     {
	"ID": "1958",
	"Nome": "Jacutinga",
	"Estado": "11"
},
     {
	"ID": "1959",
	"Nome": "Jaguaraçu",
	"Estado": "11"
},
     {
	"ID": "1960",
	"Nome": "Jaíba",
	"Estado": "11"
},
     {
	"ID": "1961",
	"Nome": "Jampruca",
	"Estado": "11"
},
     {
	"ID": "1962",
	"Nome": "Janaúba",
	"Estado": "11"
},
     {
	"ID": "1963",
	"Nome": "Januária",
	"Estado": "11"
},
     {
	"ID": "1964",
	"Nome": "Japaraíba",
	"Estado": "11"
},
     {
	"ID": "1965",
	"Nome": "Japonvar",
	"Estado": "11"
},
     {
	"ID": "1966",
	"Nome": "Jeceaba",
	"Estado": "11"
},
     {
	"ID": "1967",
	"Nome": "Jenipapo de Minas",
	"Estado": "11"
},
     {
	"ID": "1968",
	"Nome": "Jequeri",
	"Estado": "11"
},
     {
	"ID": "1969",
	"Nome": "Jequitaí",
	"Estado": "11"
},
     {
	"ID": "1970",
	"Nome": "Jequitibá",
	"Estado": "11"
},
     {
	"ID": "1971",
	"Nome": "Jequitinhonha",
	"Estado": "11"
},
     {
	"ID": "1972",
	"Nome": "Jesuânia",
	"Estado": "11"
},
     {
	"ID": "1973",
	"Nome": "Joaíma",
	"Estado": "11"
},
     {
	"ID": "1974",
	"Nome": "Joanésia",
	"Estado": "11"
},
     {
	"ID": "1975",
	"Nome": "João Monlevade",
	"Estado": "11"
},
     {
	"ID": "1976",
	"Nome": "João Pinheiro",
	"Estado": "11"
},
     {
	"ID": "1977",
	"Nome": "Joaquim Felício",
	"Estado": "11"
},
     {
	"ID": "1978",
	"Nome": "Jordânia",
	"Estado": "11"
},
     {
	"ID": "1979",
	"Nome": "José Gonçalves de Minas",
	"Estado": "11"
},
     {
	"ID": "1980",
	"Nome": "José Raydan",
	"Estado": "11"
},
     {
	"ID": "1981",
	"Nome": "Josenópolis",
	"Estado": "11"
},
     {
	"ID": "1982",
	"Nome": "Juatuba",
	"Estado": "11"
},
     {
	"ID": "1983",
	"Nome": "Juiz de Fora",
	"Estado": "11"
},
     {
	"ID": "1984",
	"Nome": "Juramento",
	"Estado": "11"
},
     {
	"ID": "1985",
	"Nome": "Juruaia",
	"Estado": "11"
},
     {
	"ID": "1986",
	"Nome": "Juvenília",
	"Estado": "11"
},
     {
	"ID": "1987",
	"Nome": "Ladainha",
	"Estado": "11"
},
     {
	"ID": "1988",
	"Nome": "Lagamar",
	"Estado": "11"
},
     {
	"ID": "1989",
	"Nome": "Lagoa da Prata",
	"Estado": "11"
},
     {
	"ID": "1990",
	"Nome": "Lagoa dos Patos",
	"Estado": "11"
},
     {
	"ID": "1991",
	"Nome": "Lagoa Dourada",
	"Estado": "11"
},
     {
	"ID": "1992",
	"Nome": "Lagoa Formosa",
	"Estado": "11"
},
     {
	"ID": "1993",
	"Nome": "Lagoa Grande",
	"Estado": "11"
},
     {
	"ID": "1994",
	"Nome": "Lagoa Santa",
	"Estado": "11"
},
     {
	"ID": "1995",
	"Nome": "Lajinha",
	"Estado": "11"
},
     {
	"ID": "1996",
	"Nome": "Lambari",
	"Estado": "11"
},
     {
	"ID": "1997",
	"Nome": "Lamim",
	"Estado": "11"
},
     {
	"ID": "1998",
	"Nome": "Laranjal",
	"Estado": "11"
},
     {
	"ID": "1999",
	"Nome": "Lassance",
	"Estado": "11"
},
     {
	"ID": "2000",
	"Nome": "Lavras",
	"Estado": "11"
},
     {
	"ID": "2001",
	"Nome": "Leandro Ferreira",
	"Estado": "11"
},
     {
	"ID": "2002",
	"Nome": "Leme do Prado",
	"Estado": "11"
},
     {
	"ID": "2003",
	"Nome": "Leopoldina",
	"Estado": "11"
},
     {
	"ID": "2004",
	"Nome": "Liberdade",
	"Estado": "11"
},
     {
	"ID": "2005",
	"Nome": "Lima Duarte",
	"Estado": "11"
},
     {
	"ID": "2006",
	"Nome": "Limeira do Oeste",
	"Estado": "11"
},
     {
	"ID": "2007",
	"Nome": "Lontra",
	"Estado": "11"
},
     {
	"ID": "2008",
	"Nome": "Luisburgo",
	"Estado": "11"
},
     {
	"ID": "2009",
	"Nome": "Luislândia",
	"Estado": "11"
},
     {
	"ID": "2010",
	"Nome": "Luminárias",
	"Estado": "11"
},
     {
	"ID": "2011",
	"Nome": "Luz",
	"Estado": "11"
},
     {
	"ID": "2012",
	"Nome": "Machacalis",
	"Estado": "11"
},
     {
	"ID": "2013",
	"Nome": "Machado",
	"Estado": "11"
},
     {
	"ID": "2014",
	"Nome": "Madre de Deus de Minas",
	"Estado": "11"
},
     {
	"ID": "2015",
	"Nome": "Malacacheta",
	"Estado": "11"
},
     {
	"ID": "2016",
	"Nome": "Mamonas",
	"Estado": "11"
},
     {
	"ID": "2017",
	"Nome": "Manga",
	"Estado": "11"
},
     {
	"ID": "2018",
	"Nome": "Manhuaçu",
	"Estado": "11"
},
     {
	"ID": "2019",
	"Nome": "Manhumirim",
	"Estado": "11"
},
     {
	"ID": "2020",
	"Nome": "Mantena",
	"Estado": "11"
},
     {
	"ID": "2021",
	"Nome": "Mar de Espanha",
	"Estado": "11"
},
     {
	"ID": "2022",
	"Nome": "Maravilhas",
	"Estado": "11"
},
     {
	"ID": "2023",
	"Nome": "Maria da Fé",
	"Estado": "11"
},
     {
	"ID": "2024",
	"Nome": "Mariana",
	"Estado": "11"
},
     {
	"ID": "2025",
	"Nome": "Marilac",
	"Estado": "11"
},
     {
	"ID": "2026",
	"Nome": "Mário Campos",
	"Estado": "11"
},
     {
	"ID": "2027",
	"Nome": "Maripá de Minas",
	"Estado": "11"
},
     {
	"ID": "2028",
	"Nome": "Marliéria",
	"Estado": "11"
},
     {
	"ID": "2029",
	"Nome": "Marmelópolis",
	"Estado": "11"
},
     {
	"ID": "2030",
	"Nome": "Martinho Campos",
	"Estado": "11"
},
     {
	"ID": "2031",
	"Nome": "Martins Soares",
	"Estado": "11"
},
     {
	"ID": "2032",
	"Nome": "Mata Verde",
	"Estado": "11"
},
     {
	"ID": "2033",
	"Nome": "Materlândia",
	"Estado": "11"
},
     {
	"ID": "2034",
	"Nome": "Mateus Leme",
	"Estado": "11"
},
     {
	"ID": "2035",
	"Nome": "Mathias Lobato",
	"Estado": "11"
},
     {
	"ID": "2036",
	"Nome": "Matias Barbosa",
	"Estado": "11"
},
     {
	"ID": "2037",
	"Nome": "Matias Cardoso",
	"Estado": "11"
},
     {
	"ID": "2038",
	"Nome": "Matipó",
	"Estado": "11"
},
     {
	"ID": "2039",
	"Nome": "Mato Verde",
	"Estado": "11"
},
     {
	"ID": "2040",
	"Nome": "Matozinhos",
	"Estado": "11"
},
     {
	"ID": "2041",
	"Nome": "Matutina",
	"Estado": "11"
},
     {
	"ID": "2042",
	"Nome": "Medeiros",
	"Estado": "11"
},
     {
	"ID": "2043",
	"Nome": "Medina",
	"Estado": "11"
},
     {
	"ID": "2044",
	"Nome": "Mendes Pimentel",
	"Estado": "11"
},
     {
	"ID": "2045",
	"Nome": "Mercês",
	"Estado": "11"
},
     {
	"ID": "2046",
	"Nome": "Mesquita",
	"Estado": "11"
},
     {
	"ID": "2047",
	"Nome": "Minas Novas",
	"Estado": "11"
},
     {
	"ID": "2048",
	"Nome": "Minduri",
	"Estado": "11"
},
     {
	"ID": "2049",
	"Nome": "Mirabela",
	"Estado": "11"
},
     {
	"ID": "2050",
	"Nome": "Miradouro",
	"Estado": "11"
},
     {
	"ID": "2051",
	"Nome": "Miraí",
	"Estado": "11"
},
     {
	"ID": "2052",
	"Nome": "Miravânia",
	"Estado": "11"
},
     {
	"ID": "2053",
	"Nome": "Moeda",
	"Estado": "11"
},
     {
	"ID": "2054",
	"Nome": "Moema",
	"Estado": "11"
},
     {
	"ID": "2055",
	"Nome": "Monjolos",
	"Estado": "11"
},
     {
	"ID": "2056",
	"Nome": "Monsenhor Paulo",
	"Estado": "11"
},
     {
	"ID": "2057",
	"Nome": "Montalvânia",
	"Estado": "11"
},
     {
	"ID": "2058",
	"Nome": "Monte Alegre de Minas",
	"Estado": "11"
},
     {
	"ID": "2059",
	"Nome": "Monte Azul",
	"Estado": "11"
},
     {
	"ID": "2060",
	"Nome": "Monte Belo",
	"Estado": "11"
},
     {
	"ID": "2061",
	"Nome": "Monte Carmelo",
	"Estado": "11"
},
     {
	"ID": "2062",
	"Nome": "Monte Formoso",
	"Estado": "11"
},
     {
	"ID": "2063",
	"Nome": "Monte Santo de Minas",
	"Estado": "11"
},
     {
	"ID": "2064",
	"Nome": "Monte Sião",
	"Estado": "11"
},
     {
	"ID": "2065",
	"Nome": "Montes Claros",
	"Estado": "11"
},
     {
	"ID": "2066",
	"Nome": "Montezuma",
	"Estado": "11"
},
     {
	"ID": "2067",
	"Nome": "Morada Nova de Minas",
	"Estado": "11"
},
     {
	"ID": "2068",
	"Nome": "Morro da Garça",
	"Estado": "11"
},
     {
	"ID": "2069",
	"Nome": "Morro do Pilar",
	"Estado": "11"
},
     {
	"ID": "2070",
	"Nome": "Munhoz",
	"Estado": "11"
},
     {
	"ID": "2071",
	"Nome": "Muriaé",
	"Estado": "11"
},
     {
	"ID": "2072",
	"Nome": "Mutum",
	"Estado": "11"
},
     {
	"ID": "2073",
	"Nome": "Muzambinho",
	"Estado": "11"
},
     {
	"ID": "2074",
	"Nome": "Nacip Raydan",
	"Estado": "11"
},
     {
	"ID": "2075",
	"Nome": "Nanuque",
	"Estado": "11"
},
     {
	"ID": "2076",
	"Nome": "Naque",
	"Estado": "11"
},
     {
	"ID": "2077",
	"Nome": "Natalândia",
	"Estado": "11"
},
     {
	"ID": "2078",
	"Nome": "Natércia",
	"Estado": "11"
},
     {
	"ID": "2079",
	"Nome": "Nazareno",
	"Estado": "11"
},
     {
	"ID": "2080",
	"Nome": "Nepomuceno",
	"Estado": "11"
},
     {
	"ID": "2081",
	"Nome": "Ninheira",
	"Estado": "11"
},
     {
	"ID": "2082",
	"Nome": "Nova Belém",
	"Estado": "11"
},
     {
	"ID": "2083",
	"Nome": "Nova Era",
	"Estado": "11"
},
     {
	"ID": "2084",
	"Nome": "Nova Lima",
	"Estado": "11"
},
     {
	"ID": "2085",
	"Nome": "Nova Módica",
	"Estado": "11"
},
     {
	"ID": "2086",
	"Nome": "Nova Ponte",
	"Estado": "11"
},
     {
	"ID": "2087",
	"Nome": "Nova Porteirinha",
	"Estado": "11"
},
     {
	"ID": "2088",
	"Nome": "Nova Resende",
	"Estado": "11"
},
     {
	"ID": "2089",
	"Nome": "Nova Serrana",
	"Estado": "11"
},
     {
	"ID": "2090",
	"Nome": "Nova União",
	"Estado": "11"
},
     {
	"ID": "2091",
	"Nome": "Novo Cruzeiro",
	"Estado": "11"
},
     {
	"ID": "2092",
	"Nome": "Novo Oriente de Minas",
	"Estado": "11"
},
     {
	"ID": "2093",
	"Nome": "Novorizonte",
	"Estado": "11"
},
     {
	"ID": "2094",
	"Nome": "Olaria",
	"Estado": "11"
},
     {
	"ID": "2095",
	"Nome": "Olhos-d`Água",
	"Estado": "11"
},
     {
	"ID": "2096",
	"Nome": "Olímpio Noronha",
	"Estado": "11"
},
     {
	"ID": "2097",
	"Nome": "Oliveira",
	"Estado": "11"
},
     {
	"ID": "2098",
	"Nome": "Oliveira Fortes",
	"Estado": "11"
},
     {
	"ID": "2099",
	"Nome": "Onça de Pitangui",
	"Estado": "11"
},
     {
	"ID": "2100",
	"Nome": "Oratórios",
	"Estado": "11"
},
     {
	"ID": "2101",
	"Nome": "Orizânia",
	"Estado": "11"
},
     {
	"ID": "2102",
	"Nome": "Ouro Branco",
	"Estado": "11"
},
     {
	"ID": "2103",
	"Nome": "Ouro Fino",
	"Estado": "11"
},
     {
	"ID": "2104",
	"Nome": "Ouro Preto",
	"Estado": "11"
},
     {
	"ID": "2105",
	"Nome": "Ouro Verde de Minas",
	"Estado": "11"
},
     {
	"ID": "2106",
	"Nome": "Padre Carvalho",
	"Estado": "11"
},
     {
	"ID": "2107",
	"Nome": "Padre Paraíso",
	"Estado": "11"
},
     {
	"ID": "2108",
	"Nome": "Pai Pedro",
	"Estado": "11"
},
     {
	"ID": "2109",
	"Nome": "Paineiras",
	"Estado": "11"
},
     {
	"ID": "2110",
	"Nome": "Pains",
	"Estado": "11"
},
     {
	"ID": "2111",
	"Nome": "Paiva",
	"Estado": "11"
},
     {
	"ID": "2112",
	"Nome": "Palma",
	"Estado": "11"
},
     {
	"ID": "2113",
	"Nome": "Palmópolis",
	"Estado": "11"
},
     {
	"ID": "2114",
	"Nome": "Papagaios",
	"Estado": "11"
},
     {
	"ID": "2115",
	"Nome": "Pará de Minas",
	"Estado": "11"
},
     {
	"ID": "2116",
	"Nome": "Paracatu",
	"Estado": "11"
},
     {
	"ID": "2117",
	"Nome": "Paraguaçu",
	"Estado": "11"
},
     {
	"ID": "2118",
	"Nome": "Paraisópolis",
	"Estado": "11"
},
     {
	"ID": "2119",
	"Nome": "Paraopeba",
	"Estado": "11"
},
     {
	"ID": "2120",
	"Nome": "Passa Quatro",
	"Estado": "11"
},
     {
	"ID": "2121",
	"Nome": "Passa Tempo",
	"Estado": "11"
},
     {
	"ID": "2122",
	"Nome": "Passabém",
	"Estado": "11"
},
     {
	"ID": "2123",
	"Nome": "Passa-Vinte",
	"Estado": "11"
},
     {
	"ID": "2124",
	"Nome": "Passos",
	"Estado": "11"
},
     {
	"ID": "2125",
	"Nome": "Patis",
	"Estado": "11"
},
     {
	"ID": "2126",
	"Nome": "Patos de Minas",
	"Estado": "11"
},
     {
	"ID": "2127",
	"Nome": "Patrocínio",
	"Estado": "11"
},
     {
	"ID": "2128",
	"Nome": "Patrocínio do Muriaé",
	"Estado": "11"
},
     {
	"ID": "2129",
	"Nome": "Paula Cândido",
	"Estado": "11"
},
     {
	"ID": "2130",
	"Nome": "Paulistas",
	"Estado": "11"
},
     {
	"ID": "2131",
	"Nome": "Pavão",
	"Estado": "11"
},
     {
	"ID": "2132",
	"Nome": "Peçanha",
	"Estado": "11"
},
     {
	"ID": "2133",
	"Nome": "Pedra Azul",
	"Estado": "11"
},
     {
	"ID": "2134",
	"Nome": "Pedra Bonita",
	"Estado": "11"
},
     {
	"ID": "2135",
	"Nome": "Pedra do Anta",
	"Estado": "11"
},
     {
	"ID": "2136",
	"Nome": "Pedra do Indaiá",
	"Estado": "11"
},
     {
	"ID": "2137",
	"Nome": "Pedra Dourada",
	"Estado": "11"
},
     {
	"ID": "2138",
	"Nome": "Pedralva",
	"Estado": "11"
},
     {
	"ID": "2139",
	"Nome": "Pedras de Maria da Cruz",
	"Estado": "11"
},
     {
	"ID": "2140",
	"Nome": "Pedrinópolis",
	"Estado": "11"
},
     {
	"ID": "2141",
	"Nome": "Pedro Leopoldo",
	"Estado": "11"
},
     {
	"ID": "2142",
	"Nome": "Pedro Teixeira",
	"Estado": "11"
},
     {
	"ID": "2143",
	"Nome": "Pequeri",
	"Estado": "11"
},
     {
	"ID": "2144",
	"Nome": "Pequi",
	"Estado": "11"
},
     {
	"ID": "2145",
	"Nome": "Perdigão",
	"Estado": "11"
},
     {
	"ID": "2146",
	"Nome": "Perdizes",
	"Estado": "11"
},
     {
	"ID": "2147",
	"Nome": "Perdões",
	"Estado": "11"
},
     {
	"ID": "2148",
	"Nome": "Periquito",
	"Estado": "11"
},
     {
	"ID": "2149",
	"Nome": "Pescador",
	"Estado": "11"
},
     {
	"ID": "2150",
	"Nome": "Piau",
	"Estado": "11"
},
     {
	"ID": "2151",
	"Nome": "Piedade de Caratinga",
	"Estado": "11"
},
     {
	"ID": "2152",
	"Nome": "Piedade de Ponte Nova",
	"Estado": "11"
},
     {
	"ID": "2153",
	"Nome": "Piedade do Rio Grande",
	"Estado": "11"
},
     {
	"ID": "2154",
	"Nome": "Piedade dos Gerais",
	"Estado": "11"
},
     {
	"ID": "2155",
	"Nome": "Pimenta",
	"Estado": "11"
},
     {
	"ID": "2156",
	"Nome": "Pingo-d`Água",
	"Estado": "11"
},
     {
	"ID": "2157",
	"Nome": "Pintópolis",
	"Estado": "11"
},
     {
	"ID": "2158",
	"Nome": "Piracema",
	"Estado": "11"
},
     {
	"ID": "2159",
	"Nome": "Pirajuba",
	"Estado": "11"
},
     {
	"ID": "2160",
	"Nome": "Piranga",
	"Estado": "11"
},
     {
	"ID": "2161",
	"Nome": "Piranguçu",
	"Estado": "11"
},
     {
	"ID": "2162",
	"Nome": "Piranguinho",
	"Estado": "11"
},
     {
	"ID": "2163",
	"Nome": "Pirapetinga",
	"Estado": "11"
},
     {
	"ID": "2164",
	"Nome": "Pirapora",
	"Estado": "11"
},
     {
	"ID": "2165",
	"Nome": "Piraúba",
	"Estado": "11"
},
     {
	"ID": "2166",
	"Nome": "Pitangui",
	"Estado": "11"
},
     {
	"ID": "2167",
	"Nome": "Piumhi",
	"Estado": "11"
},
     {
	"ID": "2168",
	"Nome": "Planura",
	"Estado": "11"
},
     {
	"ID": "2169",
	"Nome": "Poço Fundo",
	"Estado": "11"
},
     {
	"ID": "2170",
	"Nome": "Poços de Caldas",
	"Estado": "11"
},
     {
	"ID": "2171",
	"Nome": "Pocrane",
	"Estado": "11"
},
     {
	"ID": "2172",
	"Nome": "Pompéu",
	"Estado": "11"
},
     {
	"ID": "2173",
	"Nome": "Ponte Nova",
	"Estado": "11"
},
     {
	"ID": "2174",
	"Nome": "Ponto Chique",
	"Estado": "11"
},
     {
	"ID": "2175",
	"Nome": "Ponto dos Volantes",
	"Estado": "11"
},
     {
	"ID": "2176",
	"Nome": "Porteirinha",
	"Estado": "11"
},
     {
	"ID": "2177",
	"Nome": "Porto Firme",
	"Estado": "11"
},
     {
	"ID": "2178",
	"Nome": "Poté",
	"Estado": "11"
},
     {
	"ID": "2179",
	"Nome": "Pouso Alegre",
	"Estado": "11"
},
     {
	"ID": "2180",
	"Nome": "Pouso Alto",
	"Estado": "11"
},
     {
	"ID": "2181",
	"Nome": "Prados",
	"Estado": "11"
},
     {
	"ID": "2182",
	"Nome": "Prata",
	"Estado": "11"
},
     {
	"ID": "2183",
	"Nome": "Pratápolis",
	"Estado": "11"
},
     {
	"ID": "2184",
	"Nome": "Pratinha",
	"Estado": "11"
},
     {
	"ID": "2185",
	"Nome": "Presidente Bernardes",
	"Estado": "11"
},
     {
	"ID": "2186",
	"Nome": "Presidente Juscelino",
	"Estado": "11"
},
     {
	"ID": "2187",
	"Nome": "Presidente Kubitschek",
	"Estado": "11"
},
     {
	"ID": "2188",
	"Nome": "Presidente Olegário",
	"Estado": "11"
},
     {
	"ID": "2189",
	"Nome": "Prudente de Morais",
	"Estado": "11"
},
     {
	"ID": "2190",
	"Nome": "Quartel Geral",
	"Estado": "11"
},
     {
	"ID": "2191",
	"Nome": "Queluzito",
	"Estado": "11"
},
     {
	"ID": "2192",
	"Nome": "Raposos",
	"Estado": "11"
},
     {
	"ID": "2193",
	"Nome": "Raul Soares",
	"Estado": "11"
},
     {
	"ID": "2194",
	"Nome": "Recreio",
	"Estado": "11"
},
     {
	"ID": "2195",
	"Nome": "Reduto",
	"Estado": "11"
},
     {
	"ID": "2196",
	"Nome": "Resende Costa",
	"Estado": "11"
},
     {
	"ID": "2197",
	"Nome": "Resplendor",
	"Estado": "11"
},
     {
	"ID": "2198",
	"Nome": "Ressaquinha",
	"Estado": "11"
},
     {
	"ID": "2199",
	"Nome": "Riachinho",
	"Estado": "11"
},
     {
	"ID": "2200",
	"Nome": "Riacho dos Machados",
	"Estado": "11"
},
     {
	"ID": "2201",
	"Nome": "Ribeirão das Neves",
	"Estado": "11"
},
     {
	"ID": "2202",
	"Nome": "Ribeirão Vermelho",
	"Estado": "11"
},
     {
	"ID": "2203",
	"Nome": "Rio Acima",
	"Estado": "11"
},
     {
	"ID": "2204",
	"Nome": "Rio Casca",
	"Estado": "11"
},
     {
	"ID": "2205",
	"Nome": "Rio do Prado",
	"Estado": "11"
},
     {
	"ID": "2206",
	"Nome": "Rio Doce",
	"Estado": "11"
},
     {
	"ID": "2207",
	"Nome": "Rio Espera",
	"Estado": "11"
},
     {
	"ID": "2208",
	"Nome": "Rio Manso",
	"Estado": "11"
},
     {
	"ID": "2209",
	"Nome": "Rio Novo",
	"Estado": "11"
},
     {
	"ID": "2210",
	"Nome": "Rio Paranaíba",
	"Estado": "11"
},
     {
	"ID": "2211",
	"Nome": "Rio Pardo de Minas",
	"Estado": "11"
},
     {
	"ID": "2212",
	"Nome": "Rio Piracicaba",
	"Estado": "11"
},
     {
	"ID": "2213",
	"Nome": "Rio Pomba",
	"Estado": "11"
},
     {
	"ID": "2214",
	"Nome": "Rio Preto",
	"Estado": "11"
},
     {
	"ID": "2215",
	"Nome": "Rio Vermelho",
	"Estado": "11"
},
     {
	"ID": "2216",
	"Nome": "Ritápolis",
	"Estado": "11"
},
     {
	"ID": "2217",
	"Nome": "Rochedo de Minas",
	"Estado": "11"
},
     {
	"ID": "2218",
	"Nome": "Rodeiro",
	"Estado": "11"
},
     {
	"ID": "2219",
	"Nome": "Romaria",
	"Estado": "11"
},
     {
	"ID": "2220",
	"Nome": "Rosário da Limeira",
	"Estado": "11"
},
     {
	"ID": "2221",
	"Nome": "Rubelita",
	"Estado": "11"
},
     {
	"ID": "2222",
	"Nome": "Rubim",
	"Estado": "11"
},
     {
	"ID": "2223",
	"Nome": "Sabará",
	"Estado": "11"
},
     {
	"ID": "2224",
	"Nome": "Sabinópolis",
	"Estado": "11"
},
     {
	"ID": "2225",
	"Nome": "Sacramento",
	"Estado": "11"
},
     {
	"ID": "2226",
	"Nome": "Salinas",
	"Estado": "11"
},
     {
	"ID": "2227",
	"Nome": "Salto da Divisa",
	"Estado": "11"
},
     {
	"ID": "2228",
	"Nome": "Santa Bárbara",
	"Estado": "11"
},
     {
	"ID": "2229",
	"Nome": "Santa Bárbara do Leste",
	"Estado": "11"
},
     {
	"ID": "2230",
	"Nome": "Santa Bárbara do Monte Verde",
	"Estado": "11"
},
     {
	"ID": "2231",
	"Nome": "Santa Bárbara do Tugúrio",
	"Estado": "11"
},
     {
	"ID": "2232",
	"Nome": "Santa Cruz de Minas",
	"Estado": "11"
},
     {
	"ID": "2233",
	"Nome": "Santa Cruz de Salinas",
	"Estado": "11"
},
     {
	"ID": "2234",
	"Nome": "Santa Cruz do Escalvado",
	"Estado": "11"
},
     {
	"ID": "2235",
	"Nome": "Santa Efigênia de Minas",
	"Estado": "11"
},
     {
	"ID": "2236",
	"Nome": "Santa Fé de Minas",
	"Estado": "11"
},
     {
	"ID": "2237",
	"Nome": "Santa Helena de Minas",
	"Estado": "11"
},
     {
	"ID": "2238",
	"Nome": "Santa Juliana",
	"Estado": "11"
},
     {
	"ID": "2239",
	"Nome": "Santa Luzia",
	"Estado": "11"
},
     {
	"ID": "2240",
	"Nome": "Santa Margarida",
	"Estado": "11"
},
     {
	"ID": "2241",
	"Nome": "Santa Maria de Itabira",
	"Estado": "11"
},
     {
	"ID": "2242",
	"Nome": "Santa Maria do Salto",
	"Estado": "11"
},
     {
	"ID": "2243",
	"Nome": "Santa Maria do Suaçuí",
	"Estado": "11"
},
     {
	"ID": "2244",
	"Nome": "Santa Rita de Caldas",
	"Estado": "11"
},
     {
	"ID": "2245",
	"Nome": "Santa Rita de Ibitipoca",
	"Estado": "11"
},
     {
	"ID": "2246",
	"Nome": "Santa Rita de Jacutinga",
	"Estado": "11"
},
     {
	"ID": "2247",
	"Nome": "Santa Rita de Minas",
	"Estado": "11"
},
     {
	"ID": "2248",
	"Nome": "Santa Rita do Itueto",
	"Estado": "11"
},
     {
	"ID": "2249",
	"Nome": "Santa Rita do Sapucaí",
	"Estado": "11"
},
     {
	"ID": "2250",
	"Nome": "Santa Rosa da Serra",
	"Estado": "11"
},
     {
	"ID": "2251",
	"Nome": "Santa Vitória",
	"Estado": "11"
},
     {
	"ID": "2252",
	"Nome": "Santana da Vargem",
	"Estado": "11"
},
     {
	"ID": "2253",
	"Nome": "Santana de Cataguases",
	"Estado": "11"
},
     {
	"ID": "2254",
	"Nome": "Santana de Pirapama",
	"Estado": "11"
},
     {
	"ID": "2255",
	"Nome": "Santana do Deserto",
	"Estado": "11"
},
     {
	"ID": "2256",
	"Nome": "Santana do Garambéu",
	"Estado": "11"
},
     {
	"ID": "2257",
	"Nome": "Santana do Jacaré",
	"Estado": "11"
},
     {
	"ID": "2258",
	"Nome": "Santana do Manhuaçu",
	"Estado": "11"
},
     {
	"ID": "2259",
	"Nome": "Santana do Paraíso",
	"Estado": "11"
},
     {
	"ID": "2260",
	"Nome": "Santana do Riacho",
	"Estado": "11"
},
     {
	"ID": "2261",
	"Nome": "Santana dos Montes",
	"Estado": "11"
},
     {
	"ID": "2262",
	"Nome": "Santo Antônio do Amparo",
	"Estado": "11"
},
     {
	"ID": "2263",
	"Nome": "Santo Antônio do Aventureiro",
	"Estado": "11"
},
     {
	"ID": "2264",
	"Nome": "Santo Antônio do Grama",
	"Estado": "11"
},
     {
	"ID": "2265",
	"Nome": "Santo Antônio do Itambé",
	"Estado": "11"
},
     {
	"ID": "2266",
	"Nome": "Santo Antônio do Jacinto",
	"Estado": "11"
},
     {
	"ID": "2267",
	"Nome": "Santo Antônio do Monte",
	"Estado": "11"
},
     {
	"ID": "2268",
	"Nome": "Santo Antônio do Retiro",
	"Estado": "11"
},
     {
	"ID": "2269",
	"Nome": "Santo Antônio do Rio Abaixo",
	"Estado": "11"
},
     {
	"ID": "2270",
	"Nome": "Santo Hipólito",
	"Estado": "11"
},
     {
	"ID": "2271",
	"Nome": "Santos Dumont",
	"Estado": "11"
},
     {
	"ID": "2272",
	"Nome": "São Bento Abade",
	"Estado": "11"
},
     {
	"ID": "2273",
	"Nome": "São Brás do Suaçuí",
	"Estado": "11"
},
     {
	"ID": "2274",
	"Nome": "São Domingos das Dores",
	"Estado": "11"
},
     {
	"ID": "2275",
	"Nome": "São Domingos do Prata",
	"Estado": "11"
},
     {
	"ID": "2276",
	"Nome": "São Félix de Minas",
	"Estado": "11"
},
     {
	"ID": "2277",
	"Nome": "São Francisco",
	"Estado": "11"
},
     {
	"ID": "2278",
	"Nome": "São Francisco de Paula",
	"Estado": "11"
},
     {
	"ID": "2279",
	"Nome": "São Francisco de Sales",
	"Estado": "11"
},
     {
	"ID": "2280",
	"Nome": "São Francisco do Glória",
	"Estado": "11"
},
     {
	"ID": "2281",
	"Nome": "São Geraldo",
	"Estado": "11"
},
     {
	"ID": "2282",
	"Nome": "São Geraldo da Piedade",
	"Estado": "11"
},
     {
	"ID": "2283",
	"Nome": "São Geraldo do Baixio",
	"Estado": "11"
},
     {
	"ID": "2284",
	"Nome": "São Gonçalo do Abaeté",
	"Estado": "11"
},
     {
	"ID": "2285",
	"Nome": "São Gonçalo do Pará",
	"Estado": "11"
},
     {
	"ID": "2286",
	"Nome": "São Gonçalo do Rio Abaixo",
	"Estado": "11"
},
     {
	"ID": "2287",
	"Nome": "São Gonçalo do Rio Preto",
	"Estado": "11"
},
     {
	"ID": "2288",
	"Nome": "São Gonçalo do Sapucaí",
	"Estado": "11"
},
     {
	"ID": "2289",
	"Nome": "São Gotardo",
	"Estado": "11"
},
     {
	"ID": "2290",
	"Nome": "São João Batista do Glória",
	"Estado": "11"
},
     {
	"ID": "2291",
	"Nome": "São João da Lagoa",
	"Estado": "11"
},
     {
	"ID": "2292",
	"Nome": "São João da Mata",
	"Estado": "11"
},
     {
	"ID": "2293",
	"Nome": "São João da Ponte",
	"Estado": "11"
},
     {
	"ID": "2294",
	"Nome": "São João das Missões",
	"Estado": "11"
},
     {
	"ID": "2295",
	"Nome": "São João del Rei",
	"Estado": "11"
},
     {
	"ID": "2296",
	"Nome": "São João do Manhuaçu",
	"Estado": "11"
},
     {
	"ID": "2297",
	"Nome": "São João do Manteninha",
	"Estado": "11"
},
     {
	"ID": "2298",
	"Nome": "São João do Oriente",
	"Estado": "11"
},
     {
	"ID": "2299",
	"Nome": "São João do Pacuí",
	"Estado": "11"
},
     {
	"ID": "2300",
	"Nome": "São João do Paraíso",
	"Estado": "11"
},
     {
	"ID": "2301",
	"Nome": "São João Evangelista",
	"Estado": "11"
},
     {
	"ID": "2302",
	"Nome": "São João Nepomuceno",
	"Estado": "11"
},
     {
	"ID": "2303",
	"Nome": "São Joaquim de Bicas",
	"Estado": "11"
},
     {
	"ID": "2304",
	"Nome": "São José da Barra",
	"Estado": "11"
},
     {
	"ID": "2305",
	"Nome": "São José da Lapa",
	"Estado": "11"
},
     {
	"ID": "2306",
	"Nome": "São José da Safira",
	"Estado": "11"
},
     {
	"ID": "2307",
	"Nome": "São José da Varginha",
	"Estado": "11"
},
     {
	"ID": "2308",
	"Nome": "São José do Alegre",
	"Estado": "11"
},
     {
	"ID": "2309",
	"Nome": "São José do Divino",
	"Estado": "11"
},
     {
	"ID": "2310",
	"Nome": "São José do Goiabal",
	"Estado": "11"
},
     {
	"ID": "2311",
	"Nome": "São José do Jacuri",
	"Estado": "11"
},
     {
	"ID": "2312",
	"Nome": "São José do Mantimento",
	"Estado": "11"
},
     {
	"ID": "2313",
	"Nome": "São Lourenço",
	"Estado": "11"
},
     {
	"ID": "2314",
	"Nome": "São Miguel do Anta",
	"Estado": "11"
},
     {
	"ID": "2315",
	"Nome": "São Pedro da União",
	"Estado": "11"
},
     {
	"ID": "2316",
	"Nome": "São Pedro do Suaçuí",
	"Estado": "11"
},
     {
	"ID": "2317",
	"Nome": "São Pedro dos Ferros",
	"Estado": "11"
},
     {
	"ID": "2318",
	"Nome": "São Romão",
	"Estado": "11"
},
     {
	"ID": "2319",
	"Nome": "São Roque de Minas",
	"Estado": "11"
},
     {
	"ID": "2320",
	"Nome": "São Sebastião da Bela Vista",
	"Estado": "11"
},
     {
	"ID": "2321",
	"Nome": "São Sebastião da Vargem Alegre",
	"Estado": "11"
},
     {
	"ID": "2322",
	"Nome": "São Sebastião do Anta",
	"Estado": "11"
},
     {
	"ID": "2323",
	"Nome": "São Sebastião do Maranhão",
	"Estado": "11"
},
     {
	"ID": "2324",
	"Nome": "São Sebastião do Oeste",
	"Estado": "11"
},
     {
	"ID": "2325",
	"Nome": "São Sebastião do Paraíso",
	"Estado": "11"
},
     {
	"ID": "2326",
	"Nome": "São Sebastião do Rio Preto",
	"Estado": "11"
},
     {
	"ID": "2327",
	"Nome": "São Sebastião do Rio Verde",
	"Estado": "11"
},
     {
	"ID": "2328",
	"Nome": "São Thomé das Letras",
	"Estado": "11"
},
     {
	"ID": "2329",
	"Nome": "São Tiago",
	"Estado": "11"
},
     {
	"ID": "2330",
	"Nome": "São Tomás de Aquino",
	"Estado": "11"
},
     {
	"ID": "2331",
	"Nome": "São Vicente de Minas",
	"Estado": "11"
},
     {
	"ID": "2332",
	"Nome": "Sapucaí-Mirim",
	"Estado": "11"
},
     {
	"ID": "2333",
	"Nome": "Sardoá",
	"Estado": "11"
},
     {
	"ID": "2334",
	"Nome": "Sarzedo",
	"Estado": "11"
},
     {
	"ID": "2335",
	"Nome": "Sem-Peixe",
	"Estado": "11"
},
     {
	"ID": "2336",
	"Nome": "Senador Amaral",
	"Estado": "11"
},
     {
	"ID": "2337",
	"Nome": "Senador Cortes",
	"Estado": "11"
},
     {
	"ID": "2338",
	"Nome": "Senador Firmino",
	"Estado": "11"
},
     {
	"ID": "2339",
	"Nome": "Senador José Bento",
	"Estado": "11"
},
     {
	"ID": "2340",
	"Nome": "Senador Modestino Gonçalves",
	"Estado": "11"
},
     {
	"ID": "2341",
	"Nome": "Senhora de Oliveira",
	"Estado": "11"
},
     {
	"ID": "2342",
	"Nome": "Senhora do Porto",
	"Estado": "11"
},
     {
	"ID": "2343",
	"Nome": "Senhora dos Remédios",
	"Estado": "11"
},
     {
	"ID": "2344",
	"Nome": "Sericita",
	"Estado": "11"
},
     {
	"ID": "2345",
	"Nome": "Seritinga",
	"Estado": "11"
},
     {
	"ID": "2346",
	"Nome": "Serra Azul de Minas",
	"Estado": "11"
},
     {
	"ID": "2347",
	"Nome": "Serra da Saudade",
	"Estado": "11"
},
     {
	"ID": "2348",
	"Nome": "Serra do Salitre",
	"Estado": "11"
},
     {
	"ID": "2349",
	"Nome": "Serra dos Aimorés",
	"Estado": "11"
},
     {
	"ID": "2350",
	"Nome": "Serrania",
	"Estado": "11"
},
     {
	"ID": "2351",
	"Nome": "Serranópolis de Minas",
	"Estado": "11"
},
     {
	"ID": "2352",
	"Nome": "Serranos",
	"Estado": "11"
},
     {
	"ID": "2353",
	"Nome": "Serro",
	"Estado": "11"
},
     {
	"ID": "2354",
	"Nome": "Sete Lagoas",
	"Estado": "11"
},
     {
	"ID": "2355",
	"Nome": "Setubinha",
	"Estado": "11"
},
     {
	"ID": "2356",
	"Nome": "Silveirânia",
	"Estado": "11"
},
     {
	"ID": "2357",
	"Nome": "Silvianópolis",
	"Estado": "11"
},
     {
	"ID": "2358",
	"Nome": "Simão Pereira",
	"Estado": "11"
},
     {
	"ID": "2359",
	"Nome": "Simonésia",
	"Estado": "11"
},
     {
	"ID": "2360",
	"Nome": "Sobrália",
	"Estado": "11"
},
     {
	"ID": "2361",
	"Nome": "Soledade de Minas",
	"Estado": "11"
},
     {
	"ID": "2362",
	"Nome": "Tabuleiro",
	"Estado": "11"
},
     {
	"ID": "2363",
	"Nome": "Taiobeiras",
	"Estado": "11"
},
     {
	"ID": "2364",
	"Nome": "Taparuba",
	"Estado": "11"
},
     {
	"ID": "2365",
	"Nome": "Tapira",
	"Estado": "11"
},
     {
	"ID": "2366",
	"Nome": "Tapiraí",
	"Estado": "11"
},
     {
	"ID": "2367",
	"Nome": "Taquaraçu de Minas",
	"Estado": "11"
},
     {
	"ID": "2368",
	"Nome": "Tarumirim",
	"Estado": "11"
},
     {
	"ID": "2369",
	"Nome": "Teixeiras",
	"Estado": "11"
},
     {
	"ID": "2370",
	"Nome": "Teófilo Otoni",
	"Estado": "11"
},
     {
	"ID": "2371",
	"Nome": "Timóteo",
	"Estado": "11"
},
     {
	"ID": "2372",
	"Nome": "Tiradentes",
	"Estado": "11"
},
     {
	"ID": "2373",
	"Nome": "Tiros",
	"Estado": "11"
},
     {
	"ID": "2374",
	"Nome": "Tocantins",
	"Estado": "11"
},
     {
	"ID": "2375",
	"Nome": "Tocos do Moji",
	"Estado": "11"
},
     {
	"ID": "2376",
	"Nome": "Toledo",
	"Estado": "11"
},
     {
	"ID": "2377",
	"Nome": "Tombos",
	"Estado": "11"
},
     {
	"ID": "2378",
	"Nome": "Três Corações",
	"Estado": "11"
},
     {
	"ID": "2379",
	"Nome": "Três Marias",
	"Estado": "11"
},
     {
	"ID": "2380",
	"Nome": "Três Pontas",
	"Estado": "11"
},
     {
	"ID": "2381",
	"Nome": "Tumiritinga",
	"Estado": "11"
},
     {
	"ID": "2382",
	"Nome": "Tupaciguara",
	"Estado": "11"
},
     {
	"ID": "2383",
	"Nome": "Turmalina",
	"Estado": "11"
},
     {
	"ID": "2384",
	"Nome": "Turvolândia",
	"Estado": "11"
},
     {
	"ID": "2385",
	"Nome": "Ubá",
	"Estado": "11"
},
     {
	"ID": "2386",
	"Nome": "Ubaí",
	"Estado": "11"
},
     {
	"ID": "2387",
	"Nome": "Ubaporanga",
	"Estado": "11"
},
     {
	"ID": "2388",
	"Nome": "Uberaba",
	"Estado": "11"
},
     {
	"ID": "2389",
	"Nome": "Uberlândia",
	"Estado": "11"
},
     {
	"ID": "2390",
	"Nome": "Umburatiba",
	"Estado": "11"
},
     {
	"ID": "2391",
	"Nome": "Unaí",
	"Estado": "11"
},
     {
	"ID": "2392",
	"Nome": "União de Minas",
	"Estado": "11"
},
     {
	"ID": "2393",
	"Nome": "Uruana de Minas",
	"Estado": "11"
},
     {
	"ID": "2394",
	"Nome": "Urucânia",
	"Estado": "11"
},
     {
	"ID": "2395",
	"Nome": "Urucuia",
	"Estado": "11"
},
     {
	"ID": "2396",
	"Nome": "Vargem Alegre",
	"Estado": "11"
},
     {
	"ID": "2397",
	"Nome": "Vargem Bonita",
	"Estado": "11"
},
     {
	"ID": "2398",
	"Nome": "Vargem Grande do Rio Pardo",
	"Estado": "11"
},
     {
	"ID": "2399",
	"Nome": "Varginha",
	"Estado": "11"
},
     {
	"ID": "2400",
	"Nome": "Varjão de Minas",
	"Estado": "11"
},
     {
	"ID": "2401",
	"Nome": "Várzea da Palma",
	"Estado": "11"
},
     {
	"ID": "2402",
	"Nome": "Varzelândia",
	"Estado": "11"
},
     {
	"ID": "2403",
	"Nome": "Vazante",
	"Estado": "11"
},
     {
	"ID": "2404",
	"Nome": "Verdelândia",
	"Estado": "11"
},
     {
	"ID": "2405",
	"Nome": "Veredinha",
	"Estado": "11"
},
     {
	"ID": "2406",
	"Nome": "Veríssimo",
	"Estado": "11"
},
     {
	"ID": "2407",
	"Nome": "Vermelho Novo",
	"Estado": "11"
},
     {
	"ID": "2408",
	"Nome": "Vespasiano",
	"Estado": "11"
},
     {
	"ID": "2409",
	"Nome": "Viçosa",
	"Estado": "11"
},
     {
	"ID": "2410",
	"Nome": "Vieiras",
	"Estado": "11"
},
     {
	"ID": "2411",
	"Nome": "Virgem da Lapa",
	"Estado": "11"
},
     {
	"ID": "2412",
	"Nome": "Virgínia",
	"Estado": "11"
},
     {
	"ID": "2413",
	"Nome": "Virginópolis",
	"Estado": "11"
},
     {
	"ID": "2414",
	"Nome": "Virgolândia",
	"Estado": "11"
},
     {
	"ID": "2415",
	"Nome": "Visconde do Rio Branco",
	"Estado": "11"
},
     {
	"ID": "2416",
	"Nome": "Volta Grande",
	"Estado": "11"
},
     {
	"ID": "2417",
	"Nome": "Wenceslau Braz",
	"Estado": "11"
},
     {
	"ID": "2418",
	"Nome": "Abaetetuba",
	"Estado": "14"
},
     {
	"ID": "2419",
	"Nome": "Abel Figueiredo",
	"Estado": "14"
},
     {
	"ID": "2420",
	"Nome": "Acará",
	"Estado": "14"
},
     {
	"ID": "2421",
	"Nome": "Afuá",
	"Estado": "14"
},
     {
	"ID": "2422",
	"Nome": "Água Azul do Norte",
	"Estado": "14"
},
     {
	"ID": "2423",
	"Nome": "Alenquer",
	"Estado": "14"
},
     {
	"ID": "2424",
	"Nome": "Almeirim",
	"Estado": "14"
},
     {
	"ID": "2425",
	"Nome": "Altamira",
	"Estado": "14"
},
     {
	"ID": "2426",
	"Nome": "Anajás",
	"Estado": "14"
},
     {
	"ID": "2427",
	"Nome": "Ananindeua",
	"Estado": "14"
},
     {
	"ID": "2428",
	"Nome": "Anapu",
	"Estado": "14"
},
     {
	"ID": "2429",
	"Nome": "Augusto Corrêa",
	"Estado": "14"
},
     {
	"ID": "2430",
	"Nome": "Aurora do Pará",
	"Estado": "14"
},
     {
	"ID": "2431",
	"Nome": "Aveiro",
	"Estado": "14"
},
     {
	"ID": "2432",
	"Nome": "Bagre",
	"Estado": "14"
},
     {
	"ID": "2433",
	"Nome": "Baião",
	"Estado": "14"
},
     {
	"ID": "2434",
	"Nome": "Bannach",
	"Estado": "14"
},
     {
	"ID": "2435",
	"Nome": "Barcarena",
	"Estado": "14"
},
     {
	"ID": "2436",
	"Nome": "Belém",
	"Estado": "14"
},
     {
	"ID": "2437",
	"Nome": "Belterra",
	"Estado": "14"
},
     {
	"ID": "2438",
	"Nome": "Benevides",
	"Estado": "14"
},
     {
	"ID": "2439",
	"Nome": "Bom Jesus do Tocantins",
	"Estado": "14"
},
     {
	"ID": "2440",
	"Nome": "Bonito",
	"Estado": "14"
},
     {
	"ID": "2441",
	"Nome": "Bragança",
	"Estado": "14"
},
     {
	"ID": "2442",
	"Nome": "Brasil Novo",
	"Estado": "14"
},
     {
	"ID": "2443",
	"Nome": "Brejo Grande do Araguaia",
	"Estado": "14"
},
     {
	"ID": "2444",
	"Nome": "Breu Branco",
	"Estado": "14"
},
     {
	"ID": "2445",
	"Nome": "Breves",
	"Estado": "14"
},
     {
	"ID": "2446",
	"Nome": "Bujaru",
	"Estado": "14"
},
     {
	"ID": "2447",
	"Nome": "Cachoeira do Arari",
	"Estado": "14"
},
     {
	"ID": "2448",
	"Nome": "Cachoeira do Piriá",
	"Estado": "14"
},
     {
	"ID": "2449",
	"Nome": "Cametá",
	"Estado": "14"
},
     {
	"ID": "2450",
	"Nome": "Canaã dos Carajás",
	"Estado": "14"
},
     {
	"ID": "2451",
	"Nome": "Capanema",
	"Estado": "14"
},
     {
	"ID": "2452",
	"Nome": "Capitão Poço",
	"Estado": "14"
},
     {
	"ID": "2453",
	"Nome": "Castanhal",
	"Estado": "14"
},
     {
	"ID": "2454",
	"Nome": "Chaves",
	"Estado": "14"
},
     {
	"ID": "2455",
	"Nome": "Colares",
	"Estado": "14"
},
     {
	"ID": "2456",
	"Nome": "Conceição do Araguaia",
	"Estado": "14"
},
     {
	"ID": "2457",
	"Nome": "Concórdia do Pará",
	"Estado": "14"
},
     {
	"ID": "2458",
	"Nome": "Cumaru do Norte",
	"Estado": "14"
},
     {
	"ID": "2459",
	"Nome": "Curionópolis",
	"Estado": "14"
},
     {
	"ID": "2460",
	"Nome": "Curralinho",
	"Estado": "14"
},
     {
	"ID": "2461",
	"Nome": "Curuá",
	"Estado": "14"
},
     {
	"ID": "2462",
	"Nome": "Curuçá",
	"Estado": "14"
},
     {
	"ID": "2463",
	"Nome": "Dom Eliseu",
	"Estado": "14"
},
     {
	"ID": "2464",
	"Nome": "Eldorado dos Carajás",
	"Estado": "14"
},
     {
	"ID": "2465",
	"Nome": "Faro",
	"Estado": "14"
},
     {
	"ID": "2466",
	"Nome": "Floresta do Araguaia",
	"Estado": "14"
},
     {
	"ID": "2467",
	"Nome": "Garrafão do Norte",
	"Estado": "14"
},
     {
	"ID": "2468",
	"Nome": "Goianésia do Pará",
	"Estado": "14"
},
     {
	"ID": "2469",
	"Nome": "Gurupá",
	"Estado": "14"
},
     {
	"ID": "2470",
	"Nome": "Igarapé-Açu",
	"Estado": "14"
},
     {
	"ID": "2471",
	"Nome": "Igarapé-Miri",
	"Estado": "14"
},
     {
	"ID": "2472",
	"Nome": "Inhangapi",
	"Estado": "14"
},
     {
	"ID": "2473",
	"Nome": "Ipixuna do Pará",
	"Estado": "14"
},
     {
	"ID": "2474",
	"Nome": "Irituia",
	"Estado": "14"
},
     {
	"ID": "2475",
	"Nome": "Itaituba",
	"Estado": "14"
},
     {
	"ID": "2476",
	"Nome": "Itupiranga",
	"Estado": "14"
},
     {
	"ID": "2477",
	"Nome": "Jacareacanga",
	"Estado": "14"
},
     {
	"ID": "2478",
	"Nome": "Jacundá",
	"Estado": "14"
},
     {
	"ID": "2479",
	"Nome": "Juruti",
	"Estado": "14"
},
     {
	"ID": "2480",
	"Nome": "Limoeiro do Ajuru",
	"Estado": "14"
},
     {
	"ID": "2481",
	"Nome": "Mãe do Rio",
	"Estado": "14"
},
     {
	"ID": "2482",
	"Nome": "Magalhães Barata",
	"Estado": "14"
},
     {
	"ID": "2483",
	"Nome": "Marabá",
	"Estado": "14"
},
     {
	"ID": "2484",
	"Nome": "Maracanã",
	"Estado": "14"
},
     {
	"ID": "2485",
	"Nome": "Marapanim",
	"Estado": "14"
},
     {
	"ID": "2486",
	"Nome": "Marituba",
	"Estado": "14"
},
     {
	"ID": "2487",
	"Nome": "Medicilândia",
	"Estado": "14"
},
     {
	"ID": "2488",
	"Nome": "Melgaço",
	"Estado": "14"
},
     {
	"ID": "2489",
	"Nome": "Mocajuba",
	"Estado": "14"
},
     {
	"ID": "2490",
	"Nome": "Moju",
	"Estado": "14"
},
     {
	"ID": "2491",
	"Nome": "Monte Alegre",
	"Estado": "14"
},
     {
	"ID": "2492",
	"Nome": "Muaná",
	"Estado": "14"
},
     {
	"ID": "2493",
	"Nome": "Nova Esperança do Piriá",
	"Estado": "14"
},
     {
	"ID": "2494",
	"Nome": "Nova Ipixuna",
	"Estado": "14"
},
     {
	"ID": "2495",
	"Nome": "Nova Timboteua",
	"Estado": "14"
},
     {
	"ID": "2496",
	"Nome": "Novo Progresso",
	"Estado": "14"
},
     {
	"ID": "2497",
	"Nome": "Novo Repartimento",
	"Estado": "14"
},
     {
	"ID": "2498",
	"Nome": "Óbidos",
	"Estado": "14"
},
     {
	"ID": "2499",
	"Nome": "Oeiras do Pará",
	"Estado": "14"
},
     {
	"ID": "2500",
	"Nome": "Oriximiná",
	"Estado": "14"
},
     {
	"ID": "2501",
	"Nome": "Ourém",
	"Estado": "14"
},
     {
	"ID": "2502",
	"Nome": "Ourilândia do Norte",
	"Estado": "14"
},
     {
	"ID": "2503",
	"Nome": "Pacajá",
	"Estado": "14"
},
     {
	"ID": "2504",
	"Nome": "Palestina do Pará",
	"Estado": "14"
},
     {
	"ID": "2505",
	"Nome": "Paragominas",
	"Estado": "14"
},
     {
	"ID": "2506",
	"Nome": "Parauapebas",
	"Estado": "14"
},
     {
	"ID": "2507",
	"Nome": "Pau d`Arco",
	"Estado": "14"
},
     {
	"ID": "2508",
	"Nome": "Peixe-Boi",
	"Estado": "14"
},
     {
	"ID": "2509",
	"Nome": "Piçarra",
	"Estado": "14"
},
     {
	"ID": "2510",
	"Nome": "Placas",
	"Estado": "14"
},
     {
	"ID": "2511",
	"Nome": "Ponta de Pedras",
	"Estado": "14"
},
     {
	"ID": "2512",
	"Nome": "Portel",
	"Estado": "14"
},
     {
	"ID": "2513",
	"Nome": "Porto de Moz",
	"Estado": "14"
},
     {
	"ID": "2514",
	"Nome": "Prainha",
	"Estado": "14"
},
     {
	"ID": "2515",
	"Nome": "Primavera",
	"Estado": "14"
},
     {
	"ID": "2516",
	"Nome": "Quatipuru",
	"Estado": "14"
},
     {
	"ID": "2517",
	"Nome": "Redenção",
	"Estado": "14"
},
     {
	"ID": "2518",
	"Nome": "Rio Maria",
	"Estado": "14"
},
     {
	"ID": "2519",
	"Nome": "Rondon do Pará",
	"Estado": "14"
},
     {
	"ID": "2520",
	"Nome": "Rurópolis",
	"Estado": "14"
},
     {
	"ID": "2521",
	"Nome": "Salinópolis",
	"Estado": "14"
},
     {
	"ID": "2522",
	"Nome": "Salvaterra",
	"Estado": "14"
},
     {
	"ID": "2523",
	"Nome": "Santa Bárbara do Pará",
	"Estado": "14"
},
     {
	"ID": "2524",
	"Nome": "Santa Cruz do Arari",
	"Estado": "14"
},
     {
	"ID": "2525",
	"Nome": "Santa Isabel do Pará",
	"Estado": "14"
},
     {
	"ID": "2526",
	"Nome": "Santa Luzia do Pará",
	"Estado": "14"
},
     {
	"ID": "2527",
	"Nome": "Santa Maria das Barreiras",
	"Estado": "14"
},
     {
	"ID": "2528",
	"Nome": "Santa Maria do Pará",
	"Estado": "14"
},
     {
	"ID": "2529",
	"Nome": "Santana do Araguaia",
	"Estado": "14"
},
     {
	"ID": "2530",
	"Nome": "Santarém",
	"Estado": "14"
},
     {
	"ID": "2531",
	"Nome": "Santarém Novo",
	"Estado": "14"
},
     {
	"ID": "2532",
	"Nome": "Santo Antônio do Tauá",
	"Estado": "14"
},
     {
	"ID": "2533",
	"Nome": "São Caetano de Odivelas",
	"Estado": "14"
},
     {
	"ID": "2534",
	"Nome": "São Domingos do Araguaia",
	"Estado": "14"
},
     {
	"ID": "2535",
	"Nome": "São Domingos do Capim",
	"Estado": "14"
},
     {
	"ID": "2536",
	"Nome": "São Félix do Xingu",
	"Estado": "14"
},
     {
	"ID": "2537",
	"Nome": "São Francisco do Pará",
	"Estado": "14"
},
     {
	"ID": "2538",
	"Nome": "São Geraldo do Araguaia",
	"Estado": "14"
},
     {
	"ID": "2539",
	"Nome": "São João da Ponta",
	"Estado": "14"
},
     {
	"ID": "2540",
	"Nome": "São João de Pirabas",
	"Estado": "14"
},
     {
	"ID": "2541",
	"Nome": "São João do Araguaia",
	"Estado": "14"
},
     {
	"ID": "2542",
	"Nome": "São Miguel do Guamá",
	"Estado": "14"
},
     {
	"ID": "2543",
	"Nome": "São Sebastião da Boa Vista",
	"Estado": "14"
},
     {
	"ID": "2544",
	"Nome": "Sapucaia",
	"Estado": "14"
},
     {
	"ID": "2545",
	"Nome": "Senador José Porfírio",
	"Estado": "14"
},
     {
	"ID": "2546",
	"Nome": "Soure",
	"Estado": "14"
},
     {
	"ID": "2547",
	"Nome": "Tailândia",
	"Estado": "14"
},
     {
	"ID": "2548",
	"Nome": "Terra Alta",
	"Estado": "14"
},
     {
	"ID": "2549",
	"Nome": "Terra Santa",
	"Estado": "14"
},
     {
	"ID": "2550",
	"Nome": "Tomé-Açu",
	"Estado": "14"
},
     {
	"ID": "2551",
	"Nome": "Tracuateua",
	"Estado": "14"
},
     {
	"ID": "2552",
	"Nome": "Trairão",
	"Estado": "14"
},
     {
	"ID": "2553",
	"Nome": "Tucumã",
	"Estado": "14"
},
     {
	"ID": "2554",
	"Nome": "Tucuruí",
	"Estado": "14"
},
     {
	"ID": "2555",
	"Nome": "Ulianópolis",
	"Estado": "14"
},
     {
	"ID": "2556",
	"Nome": "Uruará",
	"Estado": "14"
},
     {
	"ID": "2557",
	"Nome": "Vigia",
	"Estado": "14"
},
     {
	"ID": "2558",
	"Nome": "Viseu",
	"Estado": "14"
},
     {
	"ID": "2559",
	"Nome": "Vitória do Xingu",
	"Estado": "14"
},
     {
	"ID": "2560",
	"Nome": "Xinguara",
	"Estado": "14"
},
     {
	"ID": "2561",
	"Nome": "Água Branca",
	"Estado": "15"
},
     {
	"ID": "2562",
	"Nome": "Aguiar",
	"Estado": "15"
},
     {
	"ID": "2563",
	"Nome": "Alagoa Grande",
	"Estado": "15"
},
     {
	"ID": "2564",
	"Nome": "Alagoa Nova",
	"Estado": "15"
},
     {
	"ID": "2565",
	"Nome": "Alagoinha",
	"Estado": "15"
},
     {
	"ID": "2566",
	"Nome": "Alcantil",
	"Estado": "15"
},
     {
	"ID": "2567",
	"Nome": "Algodão de Jandaíra",
	"Estado": "15"
},
     {
	"ID": "2568",
	"Nome": "Alhandra",
	"Estado": "15"
},
     {
	"ID": "2569",
	"Nome": "Amparo",
	"Estado": "15"
},
     {
	"ID": "2570",
	"Nome": "Aparecida",
	"Estado": "15"
},
     {
	"ID": "2571",
	"Nome": "Araçagi",
	"Estado": "15"
},
     {
	"ID": "2572",
	"Nome": "Arara",
	"Estado": "15"
},
     {
	"ID": "2573",
	"Nome": "Araruna",
	"Estado": "15"
},
     {
	"ID": "2574",
	"Nome": "Areia",
	"Estado": "15"
},
     {
	"ID": "2575",
	"Nome": "Areia de Baraúnas",
	"Estado": "15"
},
     {
	"ID": "2576",
	"Nome": "Areial",
	"Estado": "15"
},
     {
	"ID": "2577",
	"Nome": "Aroeiras",
	"Estado": "15"
},
     {
	"ID": "2578",
	"Nome": "Assunção",
	"Estado": "15"
},
     {
	"ID": "2579",
	"Nome": "Baía da Traição",
	"Estado": "15"
},
     {
	"ID": "2580",
	"Nome": "Bananeiras",
	"Estado": "15"
},
     {
	"ID": "2581",
	"Nome": "Baraúna",
	"Estado": "15"
},
     {
	"ID": "2582",
	"Nome": "Barra de Santa Rosa",
	"Estado": "15"
},
     {
	"ID": "2583",
	"Nome": "Barra de Santana",
	"Estado": "15"
},
     {
	"ID": "2584",
	"Nome": "Barra de São Miguel",
	"Estado": "15"
},
     {
	"ID": "2585",
	"Nome": "Bayeux",
	"Estado": "15"
},
     {
	"ID": "2586",
	"Nome": "Belém",
	"Estado": "15"
},
     {
	"ID": "2587",
	"Nome": "Belém do Brejo do Cruz",
	"Estado": "15"
},
     {
	"ID": "2588",
	"Nome": "Bernardino Batista",
	"Estado": "15"
},
     {
	"ID": "2589",
	"Nome": "Boa Ventura",
	"Estado": "15"
},
     {
	"ID": "2590",
	"Nome": "Boa Vista",
	"Estado": "15"
},
     {
	"ID": "2591",
	"Nome": "Bom Jesus",
	"Estado": "15"
},
     {
	"ID": "2592",
	"Nome": "Bom Sucesso",
	"Estado": "15"
},
     {
	"ID": "2593",
	"Nome": "Bonito de Santa Fé",
	"Estado": "15"
},
     {
	"ID": "2594",
	"Nome": "Boqueirão",
	"Estado": "15"
},
     {
	"ID": "2595",
	"Nome": "Borborema",
	"Estado": "15"
},
     {
	"ID": "2596",
	"Nome": "Brejo do Cruz",
	"Estado": "15"
},
     {
	"ID": "2597",
	"Nome": "Brejo dos Santos",
	"Estado": "15"
},
     {
	"ID": "2598",
	"Nome": "Caaporã",
	"Estado": "15"
},
     {
	"ID": "2599",
	"Nome": "Cabaceiras",
	"Estado": "15"
},
     {
	"ID": "2600",
	"Nome": "Cabedelo",
	"Estado": "15"
},
     {
	"ID": "2601",
	"Nome": "Cachoeira dos Índios",
	"Estado": "15"
},
     {
	"ID": "2602",
	"Nome": "Cacimba de Areia",
	"Estado": "15"
},
     {
	"ID": "2603",
	"Nome": "Cacimba de Dentro",
	"Estado": "15"
},
     {
	"ID": "2604",
	"Nome": "Cacimbas",
	"Estado": "15"
},
     {
	"ID": "2605",
	"Nome": "Caiçara",
	"Estado": "15"
},
     {
	"ID": "2606",
	"Nome": "Cajazeiras",
	"Estado": "15"
},
     {
	"ID": "2607",
	"Nome": "Cajazeirinhas",
	"Estado": "15"
},
     {
	"ID": "2608",
	"Nome": "Caldas Brandão",
	"Estado": "15"
},
     {
	"ID": "2609",
	"Nome": "Camalaú",
	"Estado": "15"
},
     {
	"ID": "2610",
	"Nome": "Campina Grande",
	"Estado": "15"
},
     {
	"ID": "2611",
	"Nome": "Campo de Santana",
	"Estado": "15"
},
     {
	"ID": "2612",
	"Nome": "Capim",
	"Estado": "15"
},
     {
	"ID": "2613",
	"Nome": "Caraúbas",
	"Estado": "15"
},
     {
	"ID": "2614",
	"Nome": "Carrapateira",
	"Estado": "15"
},
     {
	"ID": "2615",
	"Nome": "Casserengue",
	"Estado": "15"
},
     {
	"ID": "2616",
	"Nome": "Catingueira",
	"Estado": "15"
},
     {
	"ID": "2617",
	"Nome": "Catolé do Rocha",
	"Estado": "15"
},
     {
	"ID": "2618",
	"Nome": "Caturité",
	"Estado": "15"
},
     {
	"ID": "2619",
	"Nome": "Conceição",
	"Estado": "15"
},
     {
	"ID": "2620",
	"Nome": "Condado",
	"Estado": "15"
},
     {
	"ID": "2621",
	"Nome": "Conde",
	"Estado": "15"
},
     {
	"ID": "2622",
	"Nome": "Congo",
	"Estado": "15"
},
     {
	"ID": "2623",
	"Nome": "Coremas",
	"Estado": "15"
},
     {
	"ID": "2624",
	"Nome": "Coxixola",
	"Estado": "15"
},
     {
	"ID": "2625",
	"Nome": "Cruz do Espírito Santo",
	"Estado": "15"
},
     {
	"ID": "2626",
	"Nome": "Cubati",
	"Estado": "15"
},
     {
	"ID": "2627",
	"Nome": "Cuité",
	"Estado": "15"
},
     {
	"ID": "2628",
	"Nome": "Cuité de Mamanguape",
	"Estado": "15"
},
     {
	"ID": "2629",
	"Nome": "Cuitegi",
	"Estado": "15"
},
     {
	"ID": "2630",
	"Nome": "Curral de Cima",
	"Estado": "15"
},
     {
	"ID": "2631",
	"Nome": "Curral Velho",
	"Estado": "15"
},
     {
	"ID": "2632",
	"Nome": "Damião",
	"Estado": "15"
},
     {
	"ID": "2633",
	"Nome": "Desterro",
	"Estado": "15"
},
     {
	"ID": "2634",
	"Nome": "Diamante",
	"Estado": "15"
},
     {
	"ID": "2635",
	"Nome": "Dona Inês",
	"Estado": "15"
},
     {
	"ID": "2636",
	"Nome": "Duas Estradas",
	"Estado": "15"
},
     {
	"ID": "2637",
	"Nome": "Emas",
	"Estado": "15"
},
     {
	"ID": "2638",
	"Nome": "Esperança",
	"Estado": "15"
},
     {
	"ID": "2639",
	"Nome": "Fagundes",
	"Estado": "15"
},
     {
	"ID": "2640",
	"Nome": "Frei Martinho",
	"Estado": "15"
},
     {
	"ID": "2641",
	"Nome": "Gado Bravo",
	"Estado": "15"
},
     {
	"ID": "2642",
	"Nome": "Guarabira",
	"Estado": "15"
},
     {
	"ID": "2643",
	"Nome": "Gurinhém",
	"Estado": "15"
},
     {
	"ID": "2644",
	"Nome": "Gurjão",
	"Estado": "15"
},
     {
	"ID": "2645",
	"Nome": "Ibiara",
	"Estado": "15"
},
     {
	"ID": "2646",
	"Nome": "Igaracy",
	"Estado": "15"
},
     {
	"ID": "2647",
	"Nome": "Imaculada",
	"Estado": "15"
},
     {
	"ID": "2648",
	"Nome": "Ingá",
	"Estado": "15"
},
     {
	"ID": "2649",
	"Nome": "Itabaiana",
	"Estado": "15"
},
     {
	"ID": "2650",
	"Nome": "Itaporanga",
	"Estado": "15"
},
     {
	"ID": "2651",
	"Nome": "Itapororoca",
	"Estado": "15"
},
     {
	"ID": "2652",
	"Nome": "Itatuba",
	"Estado": "15"
},
     {
	"ID": "2653",
	"Nome": "Jacaraú",
	"Estado": "15"
},
     {
	"ID": "2654",
	"Nome": "Jericó",
	"Estado": "15"
},
     {
	"ID": "2655",
	"Nome": "João Pessoa",
	"Estado": "15"
},
     {
	"ID": "2656",
	"Nome": "Juarez Távora",
	"Estado": "15"
},
     {
	"ID": "2657",
	"Nome": "Juazeirinho",
	"Estado": "15"
},
     {
	"ID": "2658",
	"Nome": "Junco do Seridó",
	"Estado": "15"
},
     {
	"ID": "2659",
	"Nome": "Juripiranga",
	"Estado": "15"
},
     {
	"ID": "2660",
	"Nome": "Juru",
	"Estado": "15"
},
     {
	"ID": "2661",
	"Nome": "Lagoa",
	"Estado": "15"
},
     {
	"ID": "2662",
	"Nome": "Lagoa de Dentro",
	"Estado": "15"
},
     {
	"ID": "2663",
	"Nome": "Lagoa Seca",
	"Estado": "15"
},
     {
	"ID": "2664",
	"Nome": "Lastro",
	"Estado": "15"
},
     {
	"ID": "2665",
	"Nome": "Livramento",
	"Estado": "15"
},
     {
	"ID": "2666",
	"Nome": "Logradouro",
	"Estado": "15"
},
     {
	"ID": "2667",
	"Nome": "Lucena",
	"Estado": "15"
},
     {
	"ID": "2668",
	"Nome": "Mãe d`Água",
	"Estado": "15"
},
     {
	"ID": "2669",
	"Nome": "Malta",
	"Estado": "15"
},
     {
	"ID": "2670",
	"Nome": "Mamanguape",
	"Estado": "15"
},
     {
	"ID": "2671",
	"Nome": "Manaíra",
	"Estado": "15"
},
     {
	"ID": "2672",
	"Nome": "Marcação",
	"Estado": "15"
},
     {
	"ID": "2673",
	"Nome": "Mari",
	"Estado": "15"
},
     {
	"ID": "2674",
	"Nome": "Marizópolis",
	"Estado": "15"
},
     {
	"ID": "2675",
	"Nome": "Massaranduba",
	"Estado": "15"
},
     {
	"ID": "2676",
	"Nome": "Mataraca",
	"Estado": "15"
},
     {
	"ID": "2677",
	"Nome": "Matinhas",
	"Estado": "15"
},
     {
	"ID": "2678",
	"Nome": "Mato Grosso",
	"Estado": "15"
},
     {
	"ID": "2679",
	"Nome": "Maturéia",
	"Estado": "15"
},
     {
	"ID": "2680",
	"Nome": "Mogeiro",
	"Estado": "15"
},
     {
	"ID": "2681",
	"Nome": "Montadas",
	"Estado": "15"
},
     {
	"ID": "2682",
	"Nome": "Monte Horebe",
	"Estado": "15"
},
     {
	"ID": "2683",
	"Nome": "Monteiro",
	"Estado": "15"
},
     {
	"ID": "2684",
	"Nome": "Mulungu",
	"Estado": "15"
},
     {
	"ID": "2685",
	"Nome": "Natuba",
	"Estado": "15"
},
     {
	"ID": "2686",
	"Nome": "Nazarezinho",
	"Estado": "15"
},
     {
	"ID": "2687",
	"Nome": "Nova Floresta",
	"Estado": "15"
},
     {
	"ID": "2688",
	"Nome": "Nova Olinda",
	"Estado": "15"
},
     {
	"ID": "2689",
	"Nome": "Nova Palmeira",
	"Estado": "15"
},
     {
	"ID": "2690",
	"Nome": "Olho d`Água",
	"Estado": "15"
},
     {
	"ID": "2691",
	"Nome": "Olivedos",
	"Estado": "15"
},
     {
	"ID": "2692",
	"Nome": "Ouro Velho",
	"Estado": "15"
},
     {
	"ID": "2693",
	"Nome": "Parari",
	"Estado": "15"
},
     {
	"ID": "2694",
	"Nome": "Passagem",
	"Estado": "15"
},
     {
	"ID": "2695",
	"Nome": "Patos",
	"Estado": "15"
},
     {
	"ID": "2696",
	"Nome": "Paulista",
	"Estado": "15"
},
     {
	"ID": "2697",
	"Nome": "Pedra Branca",
	"Estado": "15"
},
     {
	"ID": "2698",
	"Nome": "Pedra Lavrada",
	"Estado": "15"
},
     {
	"ID": "2699",
	"Nome": "Pedras de Fogo",
	"Estado": "15"
},
     {
	"ID": "2700",
	"Nome": "Pedro Régis",
	"Estado": "15"
},
     {
	"ID": "2701",
	"Nome": "Piancó",
	"Estado": "15"
},
     {
	"ID": "2702",
	"Nome": "Picuí",
	"Estado": "15"
},
     {
	"ID": "2703",
	"Nome": "Pilar",
	"Estado": "15"
},
     {
	"ID": "2704",
	"Nome": "Pilões",
	"Estado": "15"
},
     {
	"ID": "2705",
	"Nome": "Pilõezinhos",
	"Estado": "15"
},
     {
	"ID": "2706",
	"Nome": "Pirpirituba",
	"Estado": "15"
},
     {
	"ID": "2707",
	"Nome": "Pitimbu",
	"Estado": "15"
},
     {
	"ID": "2708",
	"Nome": "Pocinhos",
	"Estado": "15"
},
     {
	"ID": "2709",
	"Nome": "Poço Dantas",
	"Estado": "15"
},
     {
	"ID": "2710",
	"Nome": "Poço de José de Moura",
	"Estado": "15"
},
     {
	"ID": "2711",
	"Nome": "Pombal",
	"Estado": "15"
},
     {
	"ID": "2712",
	"Nome": "Prata",
	"Estado": "15"
},
     {
	"ID": "2713",
	"Nome": "Princesa Isabel",
	"Estado": "15"
},
     {
	"ID": "2714",
	"Nome": "Puxinanã",
	"Estado": "15"
},
     {
	"ID": "2715",
	"Nome": "Queimadas",
	"Estado": "15"
},
     {
	"ID": "2716",
	"Nome": "Quixabá",
	"Estado": "15"
},
     {
	"ID": "2717",
	"Nome": "Remígio",
	"Estado": "15"
},
     {
	"ID": "2718",
	"Nome": "Riachão",
	"Estado": "15"
},
     {
	"ID": "2719",
	"Nome": "Riachão do Bacamarte",
	"Estado": "15"
},
     {
	"ID": "2720",
	"Nome": "Riachão do Poço",
	"Estado": "15"
},
     {
	"ID": "2721",
	"Nome": "Riacho de Santo Antônio",
	"Estado": "15"
},
     {
	"ID": "2722",
	"Nome": "Riacho dos Cavalos",
	"Estado": "15"
},
     {
	"ID": "2723",
	"Nome": "Rio Tinto",
	"Estado": "15"
},
     {
	"ID": "2724",
	"Nome": "Salgadinho",
	"Estado": "15"
},
     {
	"ID": "2725",
	"Nome": "Salgado de São Félix",
	"Estado": "15"
},
     {
	"ID": "2726",
	"Nome": "Santa Cecília",
	"Estado": "15"
},
     {
	"ID": "2727",
	"Nome": "Santa Cruz",
	"Estado": "15"
},
     {
	"ID": "2728",
	"Nome": "Santa Helena",
	"Estado": "15"
},
     {
	"ID": "2729",
	"Nome": "Santa Inês",
	"Estado": "15"
},
     {
	"ID": "2730",
	"Nome": "Santa Luzia",
	"Estado": "15"
},
     {
	"ID": "2731",
	"Nome": "Santa Rita",
	"Estado": "15"
},
     {
	"ID": "2732",
	"Nome": "Santa Teresinha",
	"Estado": "15"
},
     {
	"ID": "2733",
	"Nome": "Santana de Mangueira",
	"Estado": "15"
},
     {
	"ID": "2734",
	"Nome": "Santana dos Garrotes",
	"Estado": "15"
},
     {
	"ID": "2735",
	"Nome": "Santarém",
	"Estado": "15"
},
     {
	"ID": "2736",
	"Nome": "Santo André",
	"Estado": "15"
},
     {
	"ID": "2737",
	"Nome": "São Bentinho",
	"Estado": "15"
},
     {
	"ID": "2738",
	"Nome": "São Bento",
	"Estado": "15"
},
     {
	"ID": "2739",
	"Nome": "São Domingos de Pombal",
	"Estado": "15"
},
     {
	"ID": "2740",
	"Nome": "São Domingos do Cariri",
	"Estado": "15"
},
     {
	"ID": "2741",
	"Nome": "São Francisco",
	"Estado": "15"
},
     {
	"ID": "2742",
	"Nome": "São João do Cariri",
	"Estado": "15"
},
     {
	"ID": "2743",
	"Nome": "São João do Rio do Peixe",
	"Estado": "15"
},
     {
	"ID": "2744",
	"Nome": "São João do Tigre",
	"Estado": "15"
},
     {
	"ID": "2745",
	"Nome": "São José da Lagoa Tapada",
	"Estado": "15"
},
     {
	"ID": "2746",
	"Nome": "São José de Caiana",
	"Estado": "15"
},
     {
	"ID": "2747",
	"Nome": "São José de Espinharas",
	"Estado": "15"
},
     {
	"ID": "2748",
	"Nome": "São José de Piranhas",
	"Estado": "15"
},
     {
	"ID": "2749",
	"Nome": "São José de Princesa",
	"Estado": "15"
},
     {
	"ID": "2750",
	"Nome": "São José do Bonfim",
	"Estado": "15"
},
     {
	"ID": "2751",
	"Nome": "São José do Brejo do Cruz",
	"Estado": "15"
},
     {
	"ID": "2752",
	"Nome": "São José do Sabugi",
	"Estado": "15"
},
     {
	"ID": "2753",
	"Nome": "São José dos Cordeiros",
	"Estado": "15"
},
     {
	"ID": "2754",
	"Nome": "São José dos Ramos",
	"Estado": "15"
},
     {
	"ID": "2755",
	"Nome": "São Mamede",
	"Estado": "15"
},
     {
	"ID": "2756",
	"Nome": "São Miguel de Taipu",
	"Estado": "15"
},
     {
	"ID": "2757",
	"Nome": "São Sebastião de Lagoa de Roça",
	"Estado": "15"
},
     {
	"ID": "2758",
	"Nome": "São Sebastião do Umbuzeiro",
	"Estado": "15"
},
     {
	"ID": "2759",
	"Nome": "Sapé",
	"Estado": "15"
},
     {
	"ID": "2760",
	"Nome": "Seridó",
	"Estado": "15"
},
     {
	"ID": "2761",
	"Nome": "Serra Branca",
	"Estado": "15"
},
     {
	"ID": "2762",
	"Nome": "Serra da Raiz",
	"Estado": "15"
},
     {
	"ID": "2763",
	"Nome": "Serra Grande",
	"Estado": "15"
},
     {
	"ID": "2764",
	"Nome": "Serra Redonda",
	"Estado": "15"
},
     {
	"ID": "2765",
	"Nome": "Serraria",
	"Estado": "15"
},
     {
	"ID": "2766",
	"Nome": "Sertãozinho",
	"Estado": "15"
},
     {
	"ID": "2767",
	"Nome": "Sobrado",
	"Estado": "15"
},
     {
	"ID": "2768",
	"Nome": "Solânea",
	"Estado": "15"
},
     {
	"ID": "2769",
	"Nome": "Soledade",
	"Estado": "15"
},
     {
	"ID": "2770",
	"Nome": "Sossêgo",
	"Estado": "15"
},
     {
	"ID": "2771",
	"Nome": "Sousa",
	"Estado": "15"
},
     {
	"ID": "2772",
	"Nome": "Sumé",
	"Estado": "15"
},
     {
	"ID": "2773",
	"Nome": "Taperoá",
	"Estado": "15"
},
     {
	"ID": "2774",
	"Nome": "Tavares",
	"Estado": "15"
},
     {
	"ID": "2775",
	"Nome": "Teixeira",
	"Estado": "15"
},
     {
	"ID": "2776",
	"Nome": "Tenório",
	"Estado": "15"
},
     {
	"ID": "2777",
	"Nome": "Triunfo",
	"Estado": "15"
},
     {
	"ID": "2778",
	"Nome": "Uiraúna",
	"Estado": "15"
},
     {
	"ID": "2779",
	"Nome": "Umbuzeiro",
	"Estado": "15"
},
     {
	"ID": "2780",
	"Nome": "Várzea",
	"Estado": "15"
},
     {
	"ID": "2781",
	"Nome": "Vieirópolis",
	"Estado": "15"
},
     {
	"ID": "2782",
	"Nome": "Vista Serrana",
	"Estado": "15"
},
     {
	"ID": "2783",
	"Nome": "Zabelê",
	"Estado": "15"
},
     {
	"ID": "2784",
	"Nome": "Abatiá",
	"Estado": "18"
},
     {
	"ID": "2785",
	"Nome": "Adrianópolis",
	"Estado": "18"
},
     {
	"ID": "2786",
	"Nome": "Agudos do Sul",
	"Estado": "18"
},
     {
	"ID": "2787",
	"Nome": "Almirante Tamandaré",
	"Estado": "18"
},
     {
	"ID": "2788",
	"Nome": "Altamira do Paraná",
	"Estado": "18"
},
     {
	"ID": "2789",
	"Nome": "Alto Paraíso",
	"Estado": "18"
},
     {
	"ID": "2790",
	"Nome": "Alto Paraná",
	"Estado": "18"
},
     {
	"ID": "2791",
	"Nome": "Alto Piquiri",
	"Estado": "18"
},
     {
	"ID": "2792",
	"Nome": "Altônia",
	"Estado": "18"
},
     {
	"ID": "2793",
	"Nome": "Alvorada do Sul",
	"Estado": "18"
},
     {
	"ID": "2794",
	"Nome": "Amaporã",
	"Estado": "18"
},
     {
	"ID": "2795",
	"Nome": "Ampére",
	"Estado": "18"
},
     {
	"ID": "2796",
	"Nome": "Anahy",
	"Estado": "18"
},
     {
	"ID": "2797",
	"Nome": "Andirá",
	"Estado": "18"
},
     {
	"ID": "2798",
	"Nome": "Ângulo",
	"Estado": "18"
},
     {
	"ID": "2799",
	"Nome": "Antonina",
	"Estado": "18"
},
     {
	"ID": "2800",
	"Nome": "Antônio Olinto",
	"Estado": "18"
},
     {
	"ID": "2801",
	"Nome": "Apucarana",
	"Estado": "18"
},
     {
	"ID": "2802",
	"Nome": "Arapongas",
	"Estado": "18"
},
     {
	"ID": "2803",
	"Nome": "Arapoti",
	"Estado": "18"
},
     {
	"ID": "2804",
	"Nome": "Arapuã",
	"Estado": "18"
},
     {
	"ID": "2805",
	"Nome": "Araruna",
	"Estado": "18"
},
     {
	"ID": "2806",
	"Nome": "Araucária",
	"Estado": "18"
},
     {
	"ID": "2807",
	"Nome": "Ariranha do Ivaí",
	"Estado": "18"
},
     {
	"ID": "2808",
	"Nome": "Assaí",
	"Estado": "18"
},
     {
	"ID": "2809",
	"Nome": "Assis Chateaubriand",
	"Estado": "18"
},
     {
	"ID": "2810",
	"Nome": "Astorga",
	"Estado": "18"
},
     {
	"ID": "2811",
	"Nome": "Atalaia",
	"Estado": "18"
},
     {
	"ID": "2812",
	"Nome": "Balsa Nova",
	"Estado": "18"
},
     {
	"ID": "2813",
	"Nome": "Bandeirantes",
	"Estado": "18"
},
     {
	"ID": "2814",
	"Nome": "Barbosa Ferraz",
	"Estado": "18"
},
     {
	"ID": "2815",
	"Nome": "Barra do Jacaré",
	"Estado": "18"
},
     {
	"ID": "2816",
	"Nome": "Barracão",
	"Estado": "18"
},
     {
	"ID": "2817",
	"Nome": "Bela Vista da Caroba",
	"Estado": "18"
},
     {
	"ID": "2818",
	"Nome": "Bela Vista do Paraíso",
	"Estado": "18"
},
     {
	"ID": "2819",
	"Nome": "Bituruna",
	"Estado": "18"
},
     {
	"ID": "2820",
	"Nome": "Boa Esperança",
	"Estado": "18"
},
     {
	"ID": "2821",
	"Nome": "Boa Esperança do Iguaçu",
	"Estado": "18"
},
     {
	"ID": "2822",
	"Nome": "Boa Ventura de São Roque",
	"Estado": "18"
},
     {
	"ID": "2823",
	"Nome": "Boa Vista da Aparecida",
	"Estado": "18"
},
     {
	"ID": "2824",
	"Nome": "Bocaiúva do Sul",
	"Estado": "18"
},
     {
	"ID": "2825",
	"Nome": "Bom Jesus do Sul",
	"Estado": "18"
},
     {
	"ID": "2826",
	"Nome": "Bom Sucesso",
	"Estado": "18"
},
     {
	"ID": "2827",
	"Nome": "Bom Sucesso do Sul",
	"Estado": "18"
},
     {
	"ID": "2828",
	"Nome": "Borrazópolis",
	"Estado": "18"
},
     {
	"ID": "2829",
	"Nome": "Braganey",
	"Estado": "18"
},
     {
	"ID": "2830",
	"Nome": "Brasilândia do Sul",
	"Estado": "18"
},
     {
	"ID": "2831",
	"Nome": "Cafeara",
	"Estado": "18"
},
     {
	"ID": "2832",
	"Nome": "Cafelândia",
	"Estado": "18"
},
     {
	"ID": "2833",
	"Nome": "Cafezal do Sul",
	"Estado": "18"
},
     {
	"ID": "2834",
	"Nome": "Califórnia",
	"Estado": "18"
},
     {
	"ID": "2835",
	"Nome": "Cambará",
	"Estado": "18"
},
     {
	"ID": "2836",
	"Nome": "Cambé",
	"Estado": "18"
},
     {
	"ID": "2837",
	"Nome": "Cambira",
	"Estado": "18"
},
     {
	"ID": "2838",
	"Nome": "Campina da Lagoa",
	"Estado": "18"
},
     {
	"ID": "2839",
	"Nome": "Campina do Simão",
	"Estado": "18"
},
     {
	"ID": "2840",
	"Nome": "Campina Grande do Sul",
	"Estado": "18"
},
     {
	"ID": "2841",
	"Nome": "Campo Bonito",
	"Estado": "18"
},
     {
	"ID": "2842",
	"Nome": "Campo do Tenente",
	"Estado": "18"
},
     {
	"ID": "2843",
	"Nome": "Campo Largo",
	"Estado": "18"
},
     {
	"ID": "2844",
	"Nome": "Campo Magro",
	"Estado": "18"
},
     {
	"ID": "2845",
	"Nome": "Campo Mourão",
	"Estado": "18"
},
     {
	"ID": "2846",
	"Nome": "Cândido de Abreu",
	"Estado": "18"
},
     {
	"ID": "2847",
	"Nome": "Candói",
	"Estado": "18"
},
     {
	"ID": "2848",
	"Nome": "Cantagalo",
	"Estado": "18"
},
     {
	"ID": "2849",
	"Nome": "Capanema",
	"Estado": "18"
},
     {
	"ID": "2850",
	"Nome": "Capitão Leônidas Marques",
	"Estado": "18"
},
     {
	"ID": "2851",
	"Nome": "Carambeí",
	"Estado": "18"
},
     {
	"ID": "2852",
	"Nome": "Carlópolis",
	"Estado": "18"
},
     {
	"ID": "2853",
	"Nome": "Cascavel",
	"Estado": "18"
},
     {
	"ID": "2854",
	"Nome": "Castro",
	"Estado": "18"
},
     {
	"ID": "2855",
	"Nome": "Catanduvas",
	"Estado": "18"
},
     {
	"ID": "2856",
	"Nome": "Centenário do Sul",
	"Estado": "18"
},
     {
	"ID": "2857",
	"Nome": "Cerro Azul",
	"Estado": "18"
},
     {
	"ID": "2858",
	"Nome": "Céu Azul",
	"Estado": "18"
},
     {
	"ID": "2859",
	"Nome": "Chopinzinho",
	"Estado": "18"
},
     {
	"ID": "2860",
	"Nome": "Cianorte",
	"Estado": "18"
},
     {
	"ID": "2861",
	"Nome": "Cidade Gaúcha",
	"Estado": "18"
},
     {
	"ID": "2862",
	"Nome": "Clevelândia",
	"Estado": "18"
},
     {
	"ID": "2863",
	"Nome": "Colombo",
	"Estado": "18"
},
     {
	"ID": "2864",
	"Nome": "Colorado",
	"Estado": "18"
},
     {
	"ID": "2865",
	"Nome": "Congonhinhas",
	"Estado": "18"
},
     {
	"ID": "2866",
	"Nome": "Conselheiro Mairinck",
	"Estado": "18"
},
     {
	"ID": "2867",
	"Nome": "Contenda",
	"Estado": "18"
},
     {
	"ID": "2868",
	"Nome": "Corbélia",
	"Estado": "18"
},
     {
	"ID": "2869",
	"Nome": "Cornélio Procópio",
	"Estado": "18"
},
     {
	"ID": "2870",
	"Nome": "Coronel Domingos Soares",
	"Estado": "18"
},
     {
	"ID": "2871",
	"Nome": "Coronel Vivida",
	"Estado": "18"
},
     {
	"ID": "2872",
	"Nome": "Corumbataí do Sul",
	"Estado": "18"
},
     {
	"ID": "2873",
	"Nome": "Cruz Machado",
	"Estado": "18"
},
     {
	"ID": "2874",
	"Nome": "Cruzeiro do Iguaçu",
	"Estado": "18"
},
     {
	"ID": "2875",
	"Nome": "Cruzeiro do Oeste",
	"Estado": "18"
},
     {
	"ID": "2876",
	"Nome": "Cruzeiro do Sul",
	"Estado": "18"
},
     {
	"ID": "2877",
	"Nome": "Cruzmaltina",
	"Estado": "18"
},
     {
	"ID": "2878",
	"Nome": "Curitiba",
	"Estado": "18"
},
     {
	"ID": "2879",
	"Nome": "Curiúva",
	"Estado": "18"
},
     {
	"ID": "2880",
	"Nome": "Diamante d`Oeste",
	"Estado": "18"
},
     {
	"ID": "2881",
	"Nome": "Diamante do Norte",
	"Estado": "18"
},
     {
	"ID": "2882",
	"Nome": "Diamante do Sul",
	"Estado": "18"
},
     {
	"ID": "2883",
	"Nome": "Dois Vizinhos",
	"Estado": "18"
},
     {
	"ID": "2884",
	"Nome": "Douradina",
	"Estado": "18"
},
     {
	"ID": "2885",
	"Nome": "Doutor Camargo",
	"Estado": "18"
},
     {
	"ID": "2886",
	"Nome": "Doutor Ulysses",
	"Estado": "18"
},
     {
	"ID": "2887",
	"Nome": "Enéas Marques",
	"Estado": "18"
},
     {
	"ID": "2888",
	"Nome": "Engenheiro Beltrão",
	"Estado": "18"
},
     {
	"ID": "2889",
	"Nome": "Entre Rios do Oeste",
	"Estado": "18"
},
     {
	"ID": "2890",
	"Nome": "Esperança Nova",
	"Estado": "18"
},
     {
	"ID": "2891",
	"Nome": "Espigão Alto do Iguaçu",
	"Estado": "18"
},
     {
	"ID": "2892",
	"Nome": "Farol",
	"Estado": "18"
},
     {
	"ID": "2893",
	"Nome": "Faxinal",
	"Estado": "18"
},
     {
	"ID": "2894",
	"Nome": "Fazenda Rio Grande",
	"Estado": "18"
},
     {
	"ID": "2895",
	"Nome": "Fênix",
	"Estado": "18"
},
     {
	"ID": "2896",
	"Nome": "Fernandes Pinheiro",
	"Estado": "18"
},
     {
	"ID": "2897",
	"Nome": "Figueira",
	"Estado": "18"
},
     {
	"ID": "2898",
	"Nome": "Flor da Serra do Sul",
	"Estado": "18"
},
     {
	"ID": "2899",
	"Nome": "Floraí",
	"Estado": "18"
},
     {
	"ID": "2900",
	"Nome": "Floresta",
	"Estado": "18"
},
     {
	"ID": "2901",
	"Nome": "Florestópolis",
	"Estado": "18"
},
     {
	"ID": "2902",
	"Nome": "Flórida",
	"Estado": "18"
},
     {
	"ID": "2903",
	"Nome": "Formosa do Oeste",
	"Estado": "18"
},
     {
	"ID": "2904",
	"Nome": "Foz do Iguaçu",
	"Estado": "18"
},
     {
	"ID": "2905",
	"Nome": "Foz do Jordão",
	"Estado": "18"
},
     {
	"ID": "2906",
	"Nome": "Francisco Alves",
	"Estado": "18"
},
     {
	"ID": "2907",
	"Nome": "Francisco Beltrão",
	"Estado": "18"
},
     {
	"ID": "2908",
	"Nome": "General Carneiro",
	"Estado": "18"
},
     {
	"ID": "2909",
	"Nome": "Godoy Moreira",
	"Estado": "18"
},
     {
	"ID": "2910",
	"Nome": "Goioerê",
	"Estado": "18"
},
     {
	"ID": "2911",
	"Nome": "Goioxim",
	"Estado": "18"
},
     {
	"ID": "2912",
	"Nome": "Grandes Rios",
	"Estado": "18"
},
     {
	"ID": "2913",
	"Nome": "Guaíra",
	"Estado": "18"
},
     {
	"ID": "2914",
	"Nome": "Guairaçá",
	"Estado": "18"
},
     {
	"ID": "2915",
	"Nome": "Guamiranga",
	"Estado": "18"
},
     {
	"ID": "2916",
	"Nome": "Guapirama",
	"Estado": "18"
},
     {
	"ID": "2917",
	"Nome": "Guaporema",
	"Estado": "18"
},
     {
	"ID": "2918",
	"Nome": "Guaraci",
	"Estado": "18"
},
     {
	"ID": "2919",
	"Nome": "Guaraniaçu",
	"Estado": "18"
},
     {
	"ID": "2920",
	"Nome": "Guarapuava",
	"Estado": "18"
},
     {
	"ID": "2921",
	"Nome": "Guaraqueçaba",
	"Estado": "18"
},
     {
	"ID": "2922",
	"Nome": "Guaratuba",
	"Estado": "18"
},
     {
	"ID": "2923",
	"Nome": "Honório Serpa",
	"Estado": "18"
},
     {
	"ID": "2924",
	"Nome": "Ibaiti",
	"Estado": "18"
},
     {
	"ID": "2925",
	"Nome": "Ibema",
	"Estado": "18"
},
     {
	"ID": "2926",
	"Nome": "Ibiporã",
	"Estado": "18"
},
     {
	"ID": "2927",
	"Nome": "Icaraíma",
	"Estado": "18"
},
     {
	"ID": "2928",
	"Nome": "Iguaraçu",
	"Estado": "18"
},
     {
	"ID": "2929",
	"Nome": "Iguatu",
	"Estado": "18"
},
     {
	"ID": "2930",
	"Nome": "Imbaú",
	"Estado": "18"
},
     {
	"ID": "2931",
	"Nome": "Imbituva",
	"Estado": "18"
},
     {
	"ID": "2932",
	"Nome": "Inácio Martins",
	"Estado": "18"
},
     {
	"ID": "2933",
	"Nome": "Inajá",
	"Estado": "18"
},
     {
	"ID": "2934",
	"Nome": "Indianópolis",
	"Estado": "18"
},
     {
	"ID": "2935",
	"Nome": "Ipiranga",
	"Estado": "18"
},
     {
	"ID": "2936",
	"Nome": "Iporã",
	"Estado": "18"
},
     {
	"ID": "2937",
	"Nome": "Iracema do Oeste",
	"Estado": "18"
},
     {
	"ID": "2938",
	"Nome": "Irati",
	"Estado": "18"
},
     {
	"ID": "2939",
	"Nome": "Iretama",
	"Estado": "18"
},
     {
	"ID": "2940",
	"Nome": "Itaguajé",
	"Estado": "18"
},
     {
	"ID": "2941",
	"Nome": "Itaipulândia",
	"Estado": "18"
},
     {
	"ID": "2942",
	"Nome": "Itambaracá",
	"Estado": "18"
},
     {
	"ID": "2943",
	"Nome": "Itambé",
	"Estado": "18"
},
     {
	"ID": "2944",
	"Nome": "Itapejara d`Oeste",
	"Estado": "18"
},
     {
	"ID": "2945",
	"Nome": "Itaperuçu",
	"Estado": "18"
},
     {
	"ID": "2946",
	"Nome": "Itaúna do Sul",
	"Estado": "18"
},
     {
	"ID": "2947",
	"Nome": "Ivaí",
	"Estado": "18"
},
     {
	"ID": "2948",
	"Nome": "Ivaiporã",
	"Estado": "18"
},
     {
	"ID": "2949",
	"Nome": "Ivaté",
	"Estado": "18"
},
     {
	"ID": "2950",
	"Nome": "Ivatuba",
	"Estado": "18"
},
     {
	"ID": "2951",
	"Nome": "Jaboti",
	"Estado": "18"
},
     {
	"ID": "2952",
	"Nome": "Jacarezinho",
	"Estado": "18"
},
     {
	"ID": "2953",
	"Nome": "Jaguapitã",
	"Estado": "18"
},
     {
	"ID": "2954",
	"Nome": "Jaguariaíva",
	"Estado": "18"
},
     {
	"ID": "2955",
	"Nome": "Jandaia do Sul",
	"Estado": "18"
},
     {
	"ID": "2956",
	"Nome": "Janiópolis",
	"Estado": "18"
},
     {
	"ID": "2957",
	"Nome": "Japira",
	"Estado": "18"
},
     {
	"ID": "2958",
	"Nome": "Japurá",
	"Estado": "18"
},
     {
	"ID": "2959",
	"Nome": "Jardim Alegre",
	"Estado": "18"
},
     {
	"ID": "2960",
	"Nome": "Jardim Olinda",
	"Estado": "18"
},
     {
	"ID": "2961",
	"Nome": "Jataizinho",
	"Estado": "18"
},
     {
	"ID": "2962",
	"Nome": "Jesuítas",
	"Estado": "18"
},
     {
	"ID": "2963",
	"Nome": "Joaquim Távora",
	"Estado": "18"
},
     {
	"ID": "2964",
	"Nome": "Jundiaí do Sul",
	"Estado": "18"
},
     {
	"ID": "2965",
	"Nome": "Juranda",
	"Estado": "18"
},
     {
	"ID": "2966",
	"Nome": "Jussara",
	"Estado": "18"
},
     {
	"ID": "2967",
	"Nome": "Kaloré",
	"Estado": "18"
},
     {
	"ID": "2968",
	"Nome": "Lapa",
	"Estado": "18"
},
     {
	"ID": "2969",
	"Nome": "Laranjal",
	"Estado": "18"
},
     {
	"ID": "2970",
	"Nome": "Laranjeiras do Sul",
	"Estado": "18"
},
     {
	"ID": "2971",
	"Nome": "Leópolis",
	"Estado": "18"
},
     {
	"ID": "2972",
	"Nome": "Lidianópolis",
	"Estado": "18"
},
     {
	"ID": "2973",
	"Nome": "Lindoeste",
	"Estado": "18"
},
     {
	"ID": "2974",
	"Nome": "Loanda",
	"Estado": "18"
},
     {
	"ID": "2975",
	"Nome": "Lobato",
	"Estado": "18"
},
     {
	"ID": "2976",
	"Nome": "Londrina",
	"Estado": "18"
},
     {
	"ID": "2977",
	"Nome": "Luiziana",
	"Estado": "18"
},
     {
	"ID": "2978",
	"Nome": "Lunardelli",
	"Estado": "18"
},
     {
	"ID": "2979",
	"Nome": "Lupionópolis",
	"Estado": "18"
},
     {
	"ID": "2980",
	"Nome": "Mallet",
	"Estado": "18"
},
     {
	"ID": "2981",
	"Nome": "Mamborê",
	"Estado": "18"
},
     {
	"ID": "2982",
	"Nome": "Mandaguaçu",
	"Estado": "18"
},
     {
	"ID": "2983",
	"Nome": "Mandaguari",
	"Estado": "18"
},
     {
	"ID": "2984",
	"Nome": "Mandirituba",
	"Estado": "18"
},
     {
	"ID": "2985",
	"Nome": "Manfrinópolis",
	"Estado": "18"
},
     {
	"ID": "2986",
	"Nome": "Mangueirinha",
	"Estado": "18"
},
     {
	"ID": "2987",
	"Nome": "Manoel Ribas",
	"Estado": "18"
},
     {
	"ID": "2988",
	"Nome": "Marechal Cândido Rondon",
	"Estado": "18"
},
     {
	"ID": "2989",
	"Nome": "Maria Helena",
	"Estado": "18"
},
     {
	"ID": "2990",
	"Nome": "Marialva",
	"Estado": "18"
},
     {
	"ID": "2991",
	"Nome": "Marilândia do Sul",
	"Estado": "18"
},
     {
	"ID": "2992",
	"Nome": "Marilena",
	"Estado": "18"
},
     {
	"ID": "2993",
	"Nome": "Mariluz",
	"Estado": "18"
},
     {
	"ID": "2994",
	"Nome": "Maringá",
	"Estado": "18"
},
     {
	"ID": "2995",
	"Nome": "Mariópolis",
	"Estado": "18"
},
     {
	"ID": "2996",
	"Nome": "Maripá",
	"Estado": "18"
},
     {
	"ID": "2997",
	"Nome": "Marmeleiro",
	"Estado": "18"
},
     {
	"ID": "2998",
	"Nome": "Marquinho",
	"Estado": "18"
},
     {
	"ID": "2999",
	"Nome": "Marumbi",
	"Estado": "18"
},
     {
	"ID": "3000",
	"Nome": "Matelândia",
	"Estado": "18"
},
     {
	"ID": "3001",
	"Nome": "Matinhos",
	"Estado": "18"
},
     {
	"ID": "3002",
	"Nome": "Mato Rico",
	"Estado": "18"
},
     {
	"ID": "3003",
	"Nome": "Mauá da Serra",
	"Estado": "18"
},
     {
	"ID": "3004",
	"Nome": "Medianeira",
	"Estado": "18"
},
     {
	"ID": "3005",
	"Nome": "Mercedes",
	"Estado": "18"
},
     {
	"ID": "3006",
	"Nome": "Mirador",
	"Estado": "18"
},
     {
	"ID": "3007",
	"Nome": "Miraselva",
	"Estado": "18"
},
     {
	"ID": "3008",
	"Nome": "Missal",
	"Estado": "18"
},
     {
	"ID": "3009",
	"Nome": "Moreira Sales",
	"Estado": "18"
},
     {
	"ID": "3010",
	"Nome": "Morretes",
	"Estado": "18"
},
     {
	"ID": "3011",
	"Nome": "Munhoz de Melo",
	"Estado": "18"
},
     {
	"ID": "3012",
	"Nome": "Nossa Senhora das Graças",
	"Estado": "18"
},
     {
	"ID": "3013",
	"Nome": "Nova Aliança do Ivaí",
	"Estado": "18"
},
     {
	"ID": "3014",
	"Nome": "Nova América da Colina",
	"Estado": "18"
},
     {
	"ID": "3015",
	"Nome": "Nova Aurora",
	"Estado": "18"
},
     {
	"ID": "3016",
	"Nome": "Nova Cantu",
	"Estado": "18"
},
     {
	"ID": "3017",
	"Nome": "Nova Esperança",
	"Estado": "18"
},
     {
	"ID": "3018",
	"Nome": "Nova Esperança do Sudoeste",
	"Estado": "18"
},
     {
	"ID": "3019",
	"Nome": "Nova Fátima",
	"Estado": "18"
},
     {
	"ID": "3020",
	"Nome": "Nova Laranjeiras",
	"Estado": "18"
},
     {
	"ID": "3021",
	"Nome": "Nova Londrina",
	"Estado": "18"
},
     {
	"ID": "3022",
	"Nome": "Nova Olímpia",
	"Estado": "18"
},
     {
	"ID": "3023",
	"Nome": "Nova Prata do Iguaçu",
	"Estado": "18"
},
     {
	"ID": "3024",
	"Nome": "Nova Santa Bárbara",
	"Estado": "18"
},
     {
	"ID": "3025",
	"Nome": "Nova Santa Rosa",
	"Estado": "18"
},
     {
	"ID": "3026",
	"Nome": "Nova Tebas",
	"Estado": "18"
},
     {
	"ID": "3027",
	"Nome": "Novo Itacolomi",
	"Estado": "18"
},
     {
	"ID": "3028",
	"Nome": "Ortigueira",
	"Estado": "18"
},
     {
	"ID": "3029",
	"Nome": "Ourizona",
	"Estado": "18"
},
     {
	"ID": "3030",
	"Nome": "Ouro Verde do Oeste",
	"Estado": "18"
},
     {
	"ID": "3031",
	"Nome": "Paiçandu",
	"Estado": "18"
},
     {
	"ID": "3032",
	"Nome": "Palmas",
	"Estado": "18"
},
     {
	"ID": "3033",
	"Nome": "Palmeira",
	"Estado": "18"
},
     {
	"ID": "3034",
	"Nome": "Palmital",
	"Estado": "18"
},
     {
	"ID": "3035",
	"Nome": "Palotina",
	"Estado": "18"
},
     {
	"ID": "3036",
	"Nome": "Paraíso do Norte",
	"Estado": "18"
},
     {
	"ID": "3037",
	"Nome": "Paranacity",
	"Estado": "18"
},
     {
	"ID": "3038",
	"Nome": "Paranaguá",
	"Estado": "18"
},
     {
	"ID": "3039",
	"Nome": "Paranapoema",
	"Estado": "18"
},
     {
	"ID": "3040",
	"Nome": "Paranavaí",
	"Estado": "18"
},
     {
	"ID": "3041",
	"Nome": "Pato Bragado",
	"Estado": "18"
},
     {
	"ID": "3042",
	"Nome": "Pato Branco",
	"Estado": "18"
},
     {
	"ID": "3043",
	"Nome": "Paula Freitas",
	"Estado": "18"
},
     {
	"ID": "3044",
	"Nome": "Paulo Frontin",
	"Estado": "18"
},
     {
	"ID": "3045",
	"Nome": "Peabiru",
	"Estado": "18"
},
     {
	"ID": "3046",
	"Nome": "Perobal",
	"Estado": "18"
},
     {
	"ID": "3047",
	"Nome": "Pérola",
	"Estado": "18"
},
     {
	"ID": "3048",
	"Nome": "Pérola d`Oeste",
	"Estado": "18"
},
     {
	"ID": "3049",
	"Nome": "Piên",
	"Estado": "18"
},
     {
	"ID": "3050",
	"Nome": "Pinhais",
	"Estado": "18"
},
     {
	"ID": "3051",
	"Nome": "Pinhal de São Bento",
	"Estado": "18"
},
     {
	"ID": "3052",
	"Nome": "Pinhalão",
	"Estado": "18"
},
     {
	"ID": "3053",
	"Nome": "Pinhão",
	"Estado": "18"
},
     {
	"ID": "3054",
	"Nome": "Piraí do Sul",
	"Estado": "18"
},
     {
	"ID": "3055",
	"Nome": "Piraquara",
	"Estado": "18"
},
     {
	"ID": "3056",
	"Nome": "Pitanga",
	"Estado": "18"
},
     {
	"ID": "3057",
	"Nome": "Pitangueiras",
	"Estado": "18"
},
     {
	"ID": "3058",
	"Nome": "Planaltina do Paraná",
	"Estado": "18"
},
     {
	"ID": "3059",
	"Nome": "Planalto",
	"Estado": "18"
},
     {
	"ID": "3060",
	"Nome": "Ponta Grossa",
	"Estado": "18"
},
     {
	"ID": "3061",
	"Nome": "Pontal do Paraná",
	"Estado": "18"
},
     {
	"ID": "3062",
	"Nome": "Porecatu",
	"Estado": "18"
},
     {
	"ID": "3063",
	"Nome": "Porto Amazonas",
	"Estado": "18"
},
     {
	"ID": "3064",
	"Nome": "Porto Barreiro",
	"Estado": "18"
},
     {
	"ID": "3065",
	"Nome": "Porto Rico",
	"Estado": "18"
},
     {
	"ID": "3066",
	"Nome": "Porto Vitória",
	"Estado": "18"
},
     {
	"ID": "3067",
	"Nome": "Prado Ferreira",
	"Estado": "18"
},
     {
	"ID": "3068",
	"Nome": "Pranchita",
	"Estado": "18"
},
     {
	"ID": "3069",
	"Nome": "Presidente Castelo Branco",
	"Estado": "18"
},
     {
	"ID": "3070",
	"Nome": "Primeiro de Maio",
	"Estado": "18"
},
     {
	"ID": "3071",
	"Nome": "Prudentópolis",
	"Estado": "18"
},
     {
	"ID": "3072",
	"Nome": "Quarto Centenário",
	"Estado": "18"
},
     {
	"ID": "3073",
	"Nome": "Quatiguá",
	"Estado": "18"
},
     {
	"ID": "3074",
	"Nome": "Quatro Barras",
	"Estado": "18"
},
     {
	"ID": "3075",
	"Nome": "Quatro Pontes",
	"Estado": "18"
},
     {
	"ID": "3076",
	"Nome": "Quedas do Iguaçu",
	"Estado": "18"
},
     {
	"ID": "3077",
	"Nome": "Querência do Norte",
	"Estado": "18"
},
     {
	"ID": "3078",
	"Nome": "Quinta do Sol",
	"Estado": "18"
},
     {
	"ID": "3079",
	"Nome": "Quitandinha",
	"Estado": "18"
},
     {
	"ID": "3080",
	"Nome": "Ramilândia",
	"Estado": "18"
},
     {
	"ID": "3081",
	"Nome": "Rancho Alegre",
	"Estado": "18"
},
     {
	"ID": "3082",
	"Nome": "Rancho Alegre d`Oeste",
	"Estado": "18"
},
     {
	"ID": "3083",
	"Nome": "Realeza",
	"Estado": "18"
},
     {
	"ID": "3084",
	"Nome": "Rebouças",
	"Estado": "18"
},
     {
	"ID": "3085",
	"Nome": "Renascença",
	"Estado": "18"
},
     {
	"ID": "3086",
	"Nome": "Reserva",
	"Estado": "18"
},
     {
	"ID": "3087",
	"Nome": "Reserva do Iguaçu",
	"Estado": "18"
},
     {
	"ID": "3088",
	"Nome": "Ribeirão Claro",
	"Estado": "18"
},
     {
	"ID": "3089",
	"Nome": "Ribeirão do Pinhal",
	"Estado": "18"
},
     {
	"ID": "3090",
	"Nome": "Rio Azul",
	"Estado": "18"
},
     {
	"ID": "3091",
	"Nome": "Rio Bom",
	"Estado": "18"
},
     {
	"ID": "3092",
	"Nome": "Rio Bonito do Iguaçu",
	"Estado": "18"
},
     {
	"ID": "3093",
	"Nome": "Rio Branco do Ivaí",
	"Estado": "18"
},
     {
	"ID": "3094",
	"Nome": "Rio Branco do Sul",
	"Estado": "18"
},
     {
	"ID": "3095",
	"Nome": "Rio Negro",
	"Estado": "18"
},
     {
	"ID": "3096",
	"Nome": "Rolândia",
	"Estado": "18"
},
     {
	"ID": "3097",
	"Nome": "Roncador",
	"Estado": "18"
},
     {
	"ID": "3098",
	"Nome": "Rondon",
	"Estado": "18"
},
     {
	"ID": "3099",
	"Nome": "Rosário do Ivaí",
	"Estado": "18"
},
     {
	"ID": "3100",
	"Nome": "Sabáudia",
	"Estado": "18"
},
     {
	"ID": "3101",
	"Nome": "Salgado Filho",
	"Estado": "18"
},
     {
	"ID": "3102",
	"Nome": "Salto do Itararé",
	"Estado": "18"
},
     {
	"ID": "3103",
	"Nome": "Salto do Lontra",
	"Estado": "18"
},
     {
	"ID": "3104",
	"Nome": "Santa Amélia",
	"Estado": "18"
},
     {
	"ID": "3105",
	"Nome": "Santa Cecília do Pavão",
	"Estado": "18"
},
     {
	"ID": "3106",
	"Nome": "Santa Cruz de Monte Castelo",
	"Estado": "18"
},
     {
	"ID": "3107",
	"Nome": "Santa Fé",
	"Estado": "18"
},
     {
	"ID": "3108",
	"Nome": "Santa Helena",
	"Estado": "18"
},
     {
	"ID": "3109",
	"Nome": "Santa Inês",
	"Estado": "18"
},
     {
	"ID": "3110",
	"Nome": "Santa Isabel do Ivaí",
	"Estado": "18"
},
     {
	"ID": "3111",
	"Nome": "Santa Izabel do Oeste",
	"Estado": "18"
},
     {
	"ID": "3112",
	"Nome": "Santa Lúcia",
	"Estado": "18"
},
     {
	"ID": "3113",
	"Nome": "Santa Maria do Oeste",
	"Estado": "18"
},
     {
	"ID": "3114",
	"Nome": "Santa Mariana",
	"Estado": "18"
},
     {
	"ID": "3115",
	"Nome": "Santa Mônica",
	"Estado": "18"
},
     {
	"ID": "3116",
	"Nome": "Santa Tereza do Oeste",
	"Estado": "18"
},
     {
	"ID": "3117",
	"Nome": "Santa Terezinha de Itaipu",
	"Estado": "18"
},
     {
	"ID": "3118",
	"Nome": "Santana do Itararé",
	"Estado": "18"
},
     {
	"ID": "3119",
	"Nome": "Santo Antônio da Platina",
	"Estado": "18"
},
     {
	"ID": "3120",
	"Nome": "Santo Antônio do Caiuá",
	"Estado": "18"
},
     {
	"ID": "3121",
	"Nome": "Santo Antônio do Paraíso",
	"Estado": "18"
},
     {
	"ID": "3122",
	"Nome": "Santo Antônio do Sudoeste",
	"Estado": "18"
},
     {
	"ID": "3123",
	"Nome": "Santo Inácio",
	"Estado": "18"
},
     {
	"ID": "3124",
	"Nome": "São Carlos do Ivaí",
	"Estado": "18"
},
     {
	"ID": "3125",
	"Nome": "São Jerônimo da Serra",
	"Estado": "18"
},
     {
	"ID": "3126",
	"Nome": "São João",
	"Estado": "18"
},
     {
	"ID": "3127",
	"Nome": "São João do Caiuá",
	"Estado": "18"
},
     {
	"ID": "3128",
	"Nome": "São João do Ivaí",
	"Estado": "18"
},
     {
	"ID": "3129",
	"Nome": "São João do Triunfo",
	"Estado": "18"
},
     {
	"ID": "3130",
	"Nome": "São Jorge d`Oeste",
	"Estado": "18"
},
     {
	"ID": "3131",
	"Nome": "São Jorge do Ivaí",
	"Estado": "18"
},
     {
	"ID": "3132",
	"Nome": "São Jorge do Patrocínio",
	"Estado": "18"
},
     {
	"ID": "3133",
	"Nome": "São José da Boa Vista",
	"Estado": "18"
},
     {
	"ID": "3134",
	"Nome": "São José das Palmeiras",
	"Estado": "18"
},
     {
	"ID": "3135",
	"Nome": "São José dos Pinhais",
	"Estado": "18"
},
     {
	"ID": "3136",
	"Nome": "São Manoel do Paraná",
	"Estado": "18"
},
     {
	"ID": "3137",
	"Nome": "São Mateus do Sul",
	"Estado": "18"
},
     {
	"ID": "3138",
	"Nome": "São Miguel do Iguaçu",
	"Estado": "18"
},
     {
	"ID": "3139",
	"Nome": "São Pedro do Iguaçu",
	"Estado": "18"
},
     {
	"ID": "3140",
	"Nome": "São Pedro do Ivaí",
	"Estado": "18"
},
     {
	"ID": "3141",
	"Nome": "São Pedro do Paraná",
	"Estado": "18"
},
     {
	"ID": "3142",
	"Nome": "São Sebastião da Amoreira",
	"Estado": "18"
},
     {
	"ID": "3143",
	"Nome": "São Tomé",
	"Estado": "18"
},
     {
	"ID": "3144",
	"Nome": "Sapopema",
	"Estado": "18"
},
     {
	"ID": "3145",
	"Nome": "Sarandi",
	"Estado": "18"
},
     {
	"ID": "3146",
	"Nome": "Saudade do Iguaçu",
	"Estado": "18"
},
     {
	"ID": "3147",
	"Nome": "Sengés",
	"Estado": "18"
},
     {
	"ID": "3148",
	"Nome": "Serranópolis do Iguaçu",
	"Estado": "18"
},
     {
	"ID": "3149",
	"Nome": "Sertaneja",
	"Estado": "18"
},
     {
	"ID": "3150",
	"Nome": "Sertanópolis",
	"Estado": "18"
},
     {
	"ID": "3151",
	"Nome": "Siqueira Campos",
	"Estado": "18"
},
     {
	"ID": "3152",
	"Nome": "Sulina",
	"Estado": "18"
},
     {
	"ID": "3153",
	"Nome": "Tamarana",
	"Estado": "18"
},
     {
	"ID": "3154",
	"Nome": "Tamboara",
	"Estado": "18"
},
     {
	"ID": "3155",
	"Nome": "Tapejara",
	"Estado": "18"
},
     {
	"ID": "3156",
	"Nome": "Tapira",
	"Estado": "18"
},
     {
	"ID": "3157",
	"Nome": "Teixeira Soares",
	"Estado": "18"
},
     {
	"ID": "3158",
	"Nome": "Telêmaco Borba",
	"Estado": "18"
},
     {
	"ID": "3159",
	"Nome": "Terra Boa",
	"Estado": "18"
},
     {
	"ID": "3160",
	"Nome": "Terra Rica",
	"Estado": "18"
},
     {
	"ID": "3161",
	"Nome": "Terra Roxa",
	"Estado": "18"
},
     {
	"ID": "3162",
	"Nome": "Tibagi",
	"Estado": "18"
},
     {
	"ID": "3163",
	"Nome": "Tijucas do Sul",
	"Estado": "18"
},
     {
	"ID": "3164",
	"Nome": "Toledo",
	"Estado": "18"
},
     {
	"ID": "3165",
	"Nome": "Tomazina",
	"Estado": "18"
},
     {
	"ID": "3166",
	"Nome": "Três Barras do Paraná",
	"Estado": "18"
},
     {
	"ID": "3167",
	"Nome": "Tunas do Paraná",
	"Estado": "18"
},
     {
	"ID": "3168",
	"Nome": "Tuneiras do Oeste",
	"Estado": "18"
},
     {
	"ID": "3169",
	"Nome": "Tupãssi",
	"Estado": "18"
},
     {
	"ID": "3170",
	"Nome": "Turvo",
	"Estado": "18"
},
     {
	"ID": "3171",
	"Nome": "Ubiratã",
	"Estado": "18"
},
     {
	"ID": "3172",
	"Nome": "Umuarama",
	"Estado": "18"
},
     {
	"ID": "3173",
	"Nome": "União da Vitória",
	"Estado": "18"
},
     {
	"ID": "3174",
	"Nome": "Uniflor",
	"Estado": "18"
},
     {
	"ID": "3175",
	"Nome": "Uraí",
	"Estado": "18"
},
     {
	"ID": "3176",
	"Nome": "Ventania",
	"Estado": "18"
},
     {
	"ID": "3177",
	"Nome": "Vera Cruz do Oeste",
	"Estado": "18"
},
     {
	"ID": "3178",
	"Nome": "Verê",
	"Estado": "18"
},
     {
	"ID": "3179",
	"Nome": "Virmond",
	"Estado": "18"
},
     {
	"ID": "3180",
	"Nome": "Vitorino",
	"Estado": "18"
},
     {
	"ID": "3181",
	"Nome": "Wenceslau Braz",
	"Estado": "18"
},
     {
	"ID": "3182",
	"Nome": "Xambrê",
	"Estado": "18"
},
     {
	"ID": "3183",
	"Nome": "Abreu e Lima",
	"Estado": "16"
},
     {
	"ID": "3184",
	"Nome": "Afogados da Ingazeira",
	"Estado": "16"
},
     {
	"ID": "3185",
	"Nome": "Afrânio",
	"Estado": "16"
},
     {
	"ID": "3186",
	"Nome": "Agrestina",
	"Estado": "16"
},
     {
	"ID": "3187",
	"Nome": "Água Preta",
	"Estado": "16"
},
     {
	"ID": "3188",
	"Nome": "Águas Belas",
	"Estado": "16"
},
     {
	"ID": "3189",
	"Nome": "Alagoinha",
	"Estado": "16"
},
     {
	"ID": "3190",
	"Nome": "Aliança",
	"Estado": "16"
},
     {
	"ID": "3191",
	"Nome": "Altinho",
	"Estado": "16"
},
     {
	"ID": "3192",
	"Nome": "Amaraji",
	"Estado": "16"
},
     {
	"ID": "3193",
	"Nome": "Angelim",
	"Estado": "16"
},
     {
	"ID": "3194",
	"Nome": "Araçoiaba",
	"Estado": "16"
},
     {
	"ID": "3195",
	"Nome": "Araripina",
	"Estado": "16"
},
     {
	"ID": "3196",
	"Nome": "Arcoverde",
	"Estado": "16"
},
     {
	"ID": "3197",
	"Nome": "Barra de Guabiraba",
	"Estado": "16"
},
     {
	"ID": "3198",
	"Nome": "Barreiros",
	"Estado": "16"
},
     {
	"ID": "3199",
	"Nome": "Belém de Maria",
	"Estado": "16"
},
     {
	"ID": "3200",
	"Nome": "Belém de São Francisco",
	"Estado": "16"
},
     {
	"ID": "3201",
	"Nome": "Belo Jardim",
	"Estado": "16"
},
     {
	"ID": "3202",
	"Nome": "Betânia",
	"Estado": "16"
},
     {
	"ID": "3203",
	"Nome": "Bezerros",
	"Estado": "16"
},
     {
	"ID": "3204",
	"Nome": "Bodocó",
	"Estado": "16"
},
     {
	"ID": "3205",
	"Nome": "Bom Conselho",
	"Estado": "16"
},
     {
	"ID": "3206",
	"Nome": "Bom Jardim",
	"Estado": "16"
},
     {
	"ID": "3207",
	"Nome": "Bonito",
	"Estado": "16"
},
     {
	"ID": "3208",
	"Nome": "Brejão",
	"Estado": "16"
},
     {
	"ID": "3209",
	"Nome": "Brejinho",
	"Estado": "16"
},
     {
	"ID": "3210",
	"Nome": "Brejo da Madre de Deus",
	"Estado": "16"
},
     {
	"ID": "3211",
	"Nome": "Buenos Aires",
	"Estado": "16"
},
     {
	"ID": "3212",
	"Nome": "Buíque",
	"Estado": "16"
},
     {
	"ID": "3213",
	"Nome": "Cabo de Santo Agostinho",
	"Estado": "16"
},
     {
	"ID": "3214",
	"Nome": "Cabrobó",
	"Estado": "16"
},
     {
	"ID": "3215",
	"Nome": "Cachoeirinha",
	"Estado": "16"
},
     {
	"ID": "3216",
	"Nome": "Caetés",
	"Estado": "16"
},
     {
	"ID": "3217",
	"Nome": "Calçado",
	"Estado": "16"
},
     {
	"ID": "3218",
	"Nome": "Calumbi",
	"Estado": "16"
},
     {
	"ID": "3219",
	"Nome": "Camaragibe",
	"Estado": "16"
},
     {
	"ID": "3220",
	"Nome": "Camocim de São Félix",
	"Estado": "16"
},
     {
	"ID": "3221",
	"Nome": "Camutanga",
	"Estado": "16"
},
     {
	"ID": "3222",
	"Nome": "Canhotinho",
	"Estado": "16"
},
     {
	"ID": "3223",
	"Nome": "Capoeiras",
	"Estado": "16"
},
     {
	"ID": "3224",
	"Nome": "Carnaíba",
	"Estado": "16"
},
     {
	"ID": "3225",
	"Nome": "Carnaubeira da Penha",
	"Estado": "16"
},
     {
	"ID": "3226",
	"Nome": "Carpina",
	"Estado": "16"
},
     {
	"ID": "3227",
	"Nome": "Caruaru",
	"Estado": "16"
},
     {
	"ID": "3228",
	"Nome": "Casinhas",
	"Estado": "16"
},
     {
	"ID": "3229",
	"Nome": "Catende",
	"Estado": "16"
},
     {
	"ID": "3230",
	"Nome": "Cedro",
	"Estado": "16"
},
     {
	"ID": "3231",
	"Nome": "Chã de Alegria",
	"Estado": "16"
},
     {
	"ID": "3232",
	"Nome": "Chã Grande",
	"Estado": "16"
},
     {
	"ID": "3233",
	"Nome": "Condado",
	"Estado": "16"
},
     {
	"ID": "3234",
	"Nome": "Correntes",
	"Estado": "16"
},
     {
	"ID": "3235",
	"Nome": "Cortês",
	"Estado": "16"
},
     {
	"ID": "3236",
	"Nome": "Cumaru",
	"Estado": "16"
},
     {
	"ID": "3237",
	"Nome": "Cupira",
	"Estado": "16"
},
     {
	"ID": "3238",
	"Nome": "Custódia",
	"Estado": "16"
},
     {
	"ID": "3239",
	"Nome": "Dormentes",
	"Estado": "16"
},
     {
	"ID": "3240",
	"Nome": "Escada",
	"Estado": "16"
},
     {
	"ID": "3241",
	"Nome": "Exu",
	"Estado": "16"
},
     {
	"ID": "3242",
	"Nome": "Feira Nova",
	"Estado": "16"
},
     {
	"ID": "3243",
	"Nome": "Fernando de Noronha",
	"Estado": "16"
},
     {
	"ID": "3244",
	"Nome": "Ferreiros",
	"Estado": "16"
},
     {
	"ID": "3245",
	"Nome": "Flores",
	"Estado": "16"
},
     {
	"ID": "3246",
	"Nome": "Floresta",
	"Estado": "16"
},
     {
	"ID": "3247",
	"Nome": "Frei Miguelinho",
	"Estado": "16"
},
     {
	"ID": "3248",
	"Nome": "Gameleira",
	"Estado": "16"
},
     {
	"ID": "3249",
	"Nome": "Garanhuns",
	"Estado": "16"
},
     {
	"ID": "3250",
	"Nome": "Glória do Goitá",
	"Estado": "16"
},
     {
	"ID": "3251",
	"Nome": "Goiana",
	"Estado": "16"
},
     {
	"ID": "3252",
	"Nome": "Granito",
	"Estado": "16"
},
     {
	"ID": "3253",
	"Nome": "Gravatá",
	"Estado": "16"
},
     {
	"ID": "3254",
	"Nome": "Iati",
	"Estado": "16"
},
     {
	"ID": "3255",
	"Nome": "Ibimirim",
	"Estado": "16"
},
     {
	"ID": "3256",
	"Nome": "Ibirajuba",
	"Estado": "16"
},
     {
	"ID": "3257",
	"Nome": "Igarassu",
	"Estado": "16"
},
     {
	"ID": "3258",
	"Nome": "Iguaraci",
	"Estado": "16"
},
     {
	"ID": "3259",
	"Nome": "Ilha de Itamaracá",
	"Estado": "16"
},
     {
	"ID": "3260",
	"Nome": "Inajá",
	"Estado": "16"
},
     {
	"ID": "3261",
	"Nome": "Ingazeira",
	"Estado": "16"
},
     {
	"ID": "3262",
	"Nome": "Ipojuca",
	"Estado": "16"
},
     {
	"ID": "3263",
	"Nome": "Ipubi",
	"Estado": "16"
},
     {
	"ID": "3264",
	"Nome": "Itacuruba",
	"Estado": "16"
},
     {
	"ID": "3265",
	"Nome": "Itaíba",
	"Estado": "16"
},
     {
	"ID": "3266",
	"Nome": "Itambé",
	"Estado": "16"
},
     {
	"ID": "3267",
	"Nome": "Itapetim",
	"Estado": "16"
},
     {
	"ID": "3268",
	"Nome": "Itapissuma",
	"Estado": "16"
},
     {
	"ID": "3269",
	"Nome": "Itaquitinga",
	"Estado": "16"
},
     {
	"ID": "3270",
	"Nome": "Jaboatão dos Guararapes",
	"Estado": "16"
},
     {
	"ID": "3271",
	"Nome": "Jaqueira",
	"Estado": "16"
},
     {
	"ID": "3272",
	"Nome": "Jataúba",
	"Estado": "16"
},
     {
	"ID": "3273",
	"Nome": "Jatobá",
	"Estado": "16"
},
     {
	"ID": "3274",
	"Nome": "João Alfredo",
	"Estado": "16"
},
     {
	"ID": "3275",
	"Nome": "Joaquim Nabuco",
	"Estado": "16"
},
     {
	"ID": "3276",
	"Nome": "Jucati",
	"Estado": "16"
},
     {
	"ID": "3277",
	"Nome": "Jupi",
	"Estado": "16"
},
     {
	"ID": "3278",
	"Nome": "Jurema",
	"Estado": "16"
},
     {
	"ID": "3279",
	"Nome": "Lagoa do Carro",
	"Estado": "16"
},
     {
	"ID": "3280",
	"Nome": "Lagoa do Itaenga",
	"Estado": "16"
},
     {
	"ID": "3281",
	"Nome": "Lagoa do Ouro",
	"Estado": "16"
},
     {
	"ID": "3282",
	"Nome": "Lagoa dos Gatos",
	"Estado": "16"
},
     {
	"ID": "3283",
	"Nome": "Lagoa Grande",
	"Estado": "16"
},
     {
	"ID": "3284",
	"Nome": "Lajedo",
	"Estado": "16"
},
     {
	"ID": "3285",
	"Nome": "Limoeiro",
	"Estado": "16"
},
     {
	"ID": "3286",
	"Nome": "Macaparana",
	"Estado": "16"
},
     {
	"ID": "3287",
	"Nome": "Machados",
	"Estado": "16"
},
     {
	"ID": "3288",
	"Nome": "Manari",
	"Estado": "16"
},
     {
	"ID": "3289",
	"Nome": "Maraial",
	"Estado": "16"
},
     {
	"ID": "3290",
	"Nome": "Mirandiba",
	"Estado": "16"
},
     {
	"ID": "3291",
	"Nome": "Moreilândia",
	"Estado": "16"
},
     {
	"ID": "3292",
	"Nome": "Moreno",
	"Estado": "16"
},
     {
	"ID": "3293",
	"Nome": "Nazaré da Mata",
	"Estado": "16"
},
     {
	"ID": "3294",
	"Nome": "Olinda",
	"Estado": "16"
},
     {
	"ID": "3295",
	"Nome": "Orobó",
	"Estado": "16"
},
     {
	"ID": "3296",
	"Nome": "Orocó",
	"Estado": "16"
},
     {
	"ID": "3297",
	"Nome": "Ouricuri",
	"Estado": "16"
},
     {
	"ID": "3298",
	"Nome": "Palmares",
	"Estado": "16"
},
     {
	"ID": "3299",
	"Nome": "Palmeirina",
	"Estado": "16"
},
     {
	"ID": "3300",
	"Nome": "Panelas",
	"Estado": "16"
},
     {
	"ID": "3301",
	"Nome": "Paranatama",
	"Estado": "16"
},
     {
	"ID": "3302",
	"Nome": "Parnamirim",
	"Estado": "16"
},
     {
	"ID": "3303",
	"Nome": "Passira",
	"Estado": "16"
},
     {
	"ID": "3304",
	"Nome": "Paudalho",
	"Estado": "16"
},
     {
	"ID": "3305",
	"Nome": "Paulista",
	"Estado": "16"
},
     {
	"ID": "3306",
	"Nome": "Pedra",
	"Estado": "16"
},
     {
	"ID": "3307",
	"Nome": "Pesqueira",
	"Estado": "16"
},
     {
	"ID": "3308",
	"Nome": "Petrolândia",
	"Estado": "16"
},
     {
	"ID": "3309",
	"Nome": "Petrolina",
	"Estado": "16"
},
     {
	"ID": "3310",
	"Nome": "Poção",
	"Estado": "16"
},
     {
	"ID": "3311",
	"Nome": "Pombos",
	"Estado": "16"
},
     {
	"ID": "3312",
	"Nome": "Primavera",
	"Estado": "16"
},
     {
	"ID": "3313",
	"Nome": "Quipapá",
	"Estado": "16"
},
     {
	"ID": "3314",
	"Nome": "Quixaba",
	"Estado": "16"
},
     {
	"ID": "3315",
	"Nome": "Recife",
	"Estado": "16"
},
     {
	"ID": "3316",
	"Nome": "Riacho das Almas",
	"Estado": "16"
},
     {
	"ID": "3317",
	"Nome": "Ribeirão",
	"Estado": "16"
},
     {
	"ID": "3318",
	"Nome": "Rio Formoso",
	"Estado": "16"
},
     {
	"ID": "3319",
	"Nome": "Sairé",
	"Estado": "16"
},
     {
	"ID": "3320",
	"Nome": "Salgadinho",
	"Estado": "16"
},
     {
	"ID": "3321",
	"Nome": "Salgueiro",
	"Estado": "16"
},
     {
	"ID": "3322",
	"Nome": "Saloá",
	"Estado": "16"
},
     {
	"ID": "3323",
	"Nome": "Sanharó",
	"Estado": "16"
},
     {
	"ID": "3324",
	"Nome": "Santa Cruz",
	"Estado": "16"
},
     {
	"ID": "3325",
	"Nome": "Santa Cruz da Baixa Verde",
	"Estado": "16"
},
     {
	"ID": "3326",
	"Nome": "Santa Cruz do Capibaribe",
	"Estado": "16"
},
     {
	"ID": "3327",
	"Nome": "Santa Filomena",
	"Estado": "16"
},
     {
	"ID": "3328",
	"Nome": "Santa Maria da Boa Vista",
	"Estado": "16"
},
     {
	"ID": "3329",
	"Nome": "Santa Maria do Cambucá",
	"Estado": "16"
},
     {
	"ID": "3330",
	"Nome": "Santa Terezinha",
	"Estado": "16"
},
     {
	"ID": "3331",
	"Nome": "São Benedito do Sul",
	"Estado": "16"
},
     {
	"ID": "3332",
	"Nome": "São Bento do Una",
	"Estado": "16"
},
     {
	"ID": "3333",
	"Nome": "São Caitano",
	"Estado": "16"
},
     {
	"ID": "3334",
	"Nome": "São João",
	"Estado": "16"
},
     {
	"ID": "3335",
	"Nome": "São Joaquim do Monte",
	"Estado": "16"
},
     {
	"ID": "3336",
	"Nome": "São José da Coroa Grande",
	"Estado": "16"
},
     {
	"ID": "3337",
	"Nome": "São José do Belmonte",
	"Estado": "16"
},
     {
	"ID": "3338",
	"Nome": "São José do Egito",
	"Estado": "16"
},
     {
	"ID": "3339",
	"Nome": "São Lourenço da Mata",
	"Estado": "16"
},
     {
	"ID": "3340",
	"Nome": "São Vicente Ferrer",
	"Estado": "16"
},
     {
	"ID": "3341",
	"Nome": "Serra Talhada",
	"Estado": "16"
},
     {
	"ID": "3342",
	"Nome": "Serrita",
	"Estado": "16"
},
     {
	"ID": "3343",
	"Nome": "Sertânia",
	"Estado": "16"
},
     {
	"ID": "3344",
	"Nome": "Sirinhaém",
	"Estado": "16"
},
     {
	"ID": "3345",
	"Nome": "Solidão",
	"Estado": "16"
},
     {
	"ID": "3346",
	"Nome": "Surubim",
	"Estado": "16"
},
     {
	"ID": "3347",
	"Nome": "Tabira",
	"Estado": "16"
},
     {
	"ID": "3348",
	"Nome": "Tacaimbó",
	"Estado": "16"
},
     {
	"ID": "3349",
	"Nome": "Tacaratu",
	"Estado": "16"
},
     {
	"ID": "3350",
	"Nome": "Tamandaré",
	"Estado": "16"
},
     {
	"ID": "3351",
	"Nome": "Taquaritinga do Norte",
	"Estado": "16"
},
     {
	"ID": "3352",
	"Nome": "Terezinha",
	"Estado": "16"
},
     {
	"ID": "3353",
	"Nome": "Terra Nova",
	"Estado": "16"
},
     {
	"ID": "3354",
	"Nome": "Timbaúba",
	"Estado": "16"
},
     {
	"ID": "3355",
	"Nome": "Toritama",
	"Estado": "16"
},
     {
	"ID": "3356",
	"Nome": "Tracunhaém",
	"Estado": "16"
},
     {
	"ID": "3357",
	"Nome": "Trindade",
	"Estado": "16"
},
     {
	"ID": "3358",
	"Nome": "Triunfo",
	"Estado": "16"
},
     {
	"ID": "3359",
	"Nome": "Tupanatinga",
	"Estado": "16"
},
     {
	"ID": "3360",
	"Nome": "Tuparetama",
	"Estado": "16"
},
     {
	"ID": "3361",
	"Nome": "Venturosa",
	"Estado": "16"
},
     {
	"ID": "3362",
	"Nome": "Verdejante",
	"Estado": "16"
},
     {
	"ID": "3363",
	"Nome": "Vertente do Lério",
	"Estado": "16"
},
     {
	"ID": "3364",
	"Nome": "Vertentes",
	"Estado": "16"
},
     {
	"ID": "3365",
	"Nome": "Vicência",
	"Estado": "16"
},
     {
	"ID": "3366",
	"Nome": "Vitória de Santo Antão",
	"Estado": "16"
},
     {
	"ID": "3367",
	"Nome": "Xexéu",
	"Estado": "16"
},
     {
	"ID": "3368",
	"Nome": "Acauã",
	"Estado": "17"
},
     {
	"ID": "3369",
	"Nome": "Agricolândia",
	"Estado": "17"
},
     {
	"ID": "3370",
	"Nome": "Água Branca",
	"Estado": "17"
},
     {
	"ID": "3371",
	"Nome": "Alagoinha do Piauí",
	"Estado": "17"
},
     {
	"ID": "3372",
	"Nome": "Alegrete do Piauí",
	"Estado": "17"
},
     {
	"ID": "3373",
	"Nome": "Alto Longá",
	"Estado": "17"
},
     {
	"ID": "3374",
	"Nome": "Altos",
	"Estado": "17"
},
     {
	"ID": "3375",
	"Nome": "Alvorada do Gurguéia",
	"Estado": "17"
},
     {
	"ID": "3376",
	"Nome": "Amarante",
	"Estado": "17"
},
     {
	"ID": "3377",
	"Nome": "Angical do Piauí",
	"Estado": "17"
},
     {
	"ID": "3378",
	"Nome": "Anísio de Abreu",
	"Estado": "17"
},
     {
	"ID": "3379",
	"Nome": "Antônio Almeida",
	"Estado": "17"
},
     {
	"ID": "3380",
	"Nome": "Aroazes",
	"Estado": "17"
},
     {
	"ID": "3381",
	"Nome": "Aroeiras do Itaim",
	"Estado": "17"
},
     {
	"ID": "3382",
	"Nome": "Arraial",
	"Estado": "17"
},
     {
	"ID": "3383",
	"Nome": "Assunção do Piauí",
	"Estado": "17"
},
     {
	"ID": "3384",
	"Nome": "Avelino Lopes",
	"Estado": "17"
},
     {
	"ID": "3385",
	"Nome": "Baixa Grande do Ribeiro",
	"Estado": "17"
},
     {
	"ID": "3386",
	"Nome": "Barra d`Alcântara",
	"Estado": "17"
},
     {
	"ID": "3387",
	"Nome": "Barras",
	"Estado": "17"
},
     {
	"ID": "3388",
	"Nome": "Barreiras do Piauí",
	"Estado": "17"
},
     {
	"ID": "3389",
	"Nome": "Barro Duro",
	"Estado": "17"
},
     {
	"ID": "3390",
	"Nome": "Batalha",
	"Estado": "17"
},
     {
	"ID": "3391",
	"Nome": "Bela Vista do Piauí",
	"Estado": "17"
},
     {
	"ID": "3392",
	"Nome": "Belém do Piauí",
	"Estado": "17"
},
     {
	"ID": "3393",
	"Nome": "Beneditinos",
	"Estado": "17"
},
     {
	"ID": "3394",
	"Nome": "Bertolínia",
	"Estado": "17"
},
     {
	"ID": "3395",
	"Nome": "Betânia do Piauí",
	"Estado": "17"
},
     {
	"ID": "3396",
	"Nome": "Boa Hora",
	"Estado": "17"
},
     {
	"ID": "3397",
	"Nome": "Bocaina",
	"Estado": "17"
},
     {
	"ID": "3398",
	"Nome": "Bom Jesus",
	"Estado": "17"
},
     {
	"ID": "3399",
	"Nome": "Bom Princípio do Piauí",
	"Estado": "17"
},
     {
	"ID": "3400",
	"Nome": "Bonfim do Piauí",
	"Estado": "17"
},
     {
	"ID": "3401",
	"Nome": "Boqueirão do Piauí",
	"Estado": "17"
},
     {
	"ID": "3402",
	"Nome": "Brasileira",
	"Estado": "17"
},
     {
	"ID": "3403",
	"Nome": "Brejo do Piauí",
	"Estado": "17"
},
     {
	"ID": "3404",
	"Nome": "Buriti dos Lopes",
	"Estado": "17"
},
     {
	"ID": "3405",
	"Nome": "Buriti dos Montes",
	"Estado": "17"
},
     {
	"ID": "3406",
	"Nome": "Cabeceiras do Piauí",
	"Estado": "17"
},
     {
	"ID": "3407",
	"Nome": "Cajazeiras do Piauí",
	"Estado": "17"
},
     {
	"ID": "3408",
	"Nome": "Cajueiro da Praia",
	"Estado": "17"
},
     {
	"ID": "3409",
	"Nome": "Caldeirão Grande do Piauí",
	"Estado": "17"
},
     {
	"ID": "3410",
	"Nome": "Campinas do Piauí",
	"Estado": "17"
},
     {
	"ID": "3411",
	"Nome": "Campo Alegre do Fidalgo",
	"Estado": "17"
},
     {
	"ID": "3412",
	"Nome": "Campo Grande do Piauí",
	"Estado": "17"
},
     {
	"ID": "3413",
	"Nome": "Campo Largo do Piauí",
	"Estado": "17"
},
     {
	"ID": "3414",
	"Nome": "Campo Maior",
	"Estado": "17"
},
     {
	"ID": "3415",
	"Nome": "Canavieira",
	"Estado": "17"
},
     {
	"ID": "3416",
	"Nome": "Canto do Buriti",
	"Estado": "17"
},
     {
	"ID": "3417",
	"Nome": "Capitão de Campos",
	"Estado": "17"
},
     {
	"ID": "3418",
	"Nome": "Capitão Gervásio Oliveira",
	"Estado": "17"
},
     {
	"ID": "3419",
	"Nome": "Caracol",
	"Estado": "17"
},
     {
	"ID": "3420",
	"Nome": "Caraúbas do Piauí",
	"Estado": "17"
},
     {
	"ID": "3421",
	"Nome": "Caridade do Piauí",
	"Estado": "17"
},
     {
	"ID": "3422",
	"Nome": "Castelo do Piauí",
	"Estado": "17"
},
     {
	"ID": "3423",
	"Nome": "Caxingó",
	"Estado": "17"
},
     {
	"ID": "3424",
	"Nome": "Cocal",
	"Estado": "17"
},
     {
	"ID": "3425",
	"Nome": "Cocal de Telha",
	"Estado": "17"
},
     {
	"ID": "3426",
	"Nome": "Cocal dos Alves",
	"Estado": "17"
},
     {
	"ID": "3427",
	"Nome": "Coivaras",
	"Estado": "17"
},
     {
	"ID": "3428",
	"Nome": "Colônia do Gurguéia",
	"Estado": "17"
},
     {
	"ID": "3429",
	"Nome": "Colônia do Piauí",
	"Estado": "17"
},
     {
	"ID": "3430",
	"Nome": "Conceição do Canindé",
	"Estado": "17"
},
     {
	"ID": "3431",
	"Nome": "Coronel José Dias",
	"Estado": "17"
},
     {
	"ID": "3432",
	"Nome": "Corrente",
	"Estado": "17"
},
     {
	"ID": "3433",
	"Nome": "Cristalândia do Piauí",
	"Estado": "17"
},
     {
	"ID": "3434",
	"Nome": "Cristino Castro",
	"Estado": "17"
},
     {
	"ID": "3435",
	"Nome": "Curimatá",
	"Estado": "17"
},
     {
	"ID": "3436",
	"Nome": "Currais",
	"Estado": "17"
},
     {
	"ID": "3437",
	"Nome": "Curral Novo do Piauí",
	"Estado": "17"
},
     {
	"ID": "3438",
	"Nome": "Curralinhos",
	"Estado": "17"
},
     {
	"ID": "3439",
	"Nome": "Demerval Lobão",
	"Estado": "17"
},
     {
	"ID": "3440",
	"Nome": "Dirceu Arcoverde",
	"Estado": "17"
},
     {
	"ID": "3441",
	"Nome": "Dom Expedito Lopes",
	"Estado": "17"
},
     {
	"ID": "3442",
	"Nome": "Dom Inocêncio",
	"Estado": "17"
},
     {
	"ID": "3443",
	"Nome": "Domingos Mourão",
	"Estado": "17"
},
     {
	"ID": "3444",
	"Nome": "Elesbão Veloso",
	"Estado": "17"
},
     {
	"ID": "3445",
	"Nome": "Eliseu Martins",
	"Estado": "17"
},
     {
	"ID": "3446",
	"Nome": "Esperantina",
	"Estado": "17"
},
     {
	"ID": "3447",
	"Nome": "Fartura do Piauí",
	"Estado": "17"
},
     {
	"ID": "3448",
	"Nome": "Flores do Piauí",
	"Estado": "17"
},
     {
	"ID": "3449",
	"Nome": "Floresta do Piauí",
	"Estado": "17"
},
     {
	"ID": "3450",
	"Nome": "Floriano",
	"Estado": "17"
},
     {
	"ID": "3451",
	"Nome": "Francinópolis",
	"Estado": "17"
},
     {
	"ID": "3452",
	"Nome": "Francisco Ayres",
	"Estado": "17"
},
     {
	"ID": "3453",
	"Nome": "Francisco Macedo",
	"Estado": "17"
},
     {
	"ID": "3454",
	"Nome": "Francisco Santos",
	"Estado": "17"
},
     {
	"ID": "3455",
	"Nome": "Fronteiras",
	"Estado": "17"
},
     {
	"ID": "3456",
	"Nome": "Geminiano",
	"Estado": "17"
},
     {
	"ID": "3457",
	"Nome": "Gilbués",
	"Estado": "17"
},
     {
	"ID": "3458",
	"Nome": "Guadalupe",
	"Estado": "17"
},
     {
	"ID": "3459",
	"Nome": "Guaribas",
	"Estado": "17"
},
     {
	"ID": "3460",
	"Nome": "Hugo Napoleão",
	"Estado": "17"
},
     {
	"ID": "3461",
	"Nome": "Ilha Grande",
	"Estado": "17"
},
     {
	"ID": "3462",
	"Nome": "Inhuma",
	"Estado": "17"
},
     {
	"ID": "3463",
	"Nome": "Ipiranga do Piauí",
	"Estado": "17"
},
     {
	"ID": "3464",
	"Nome": "Isaías Coelho",
	"Estado": "17"
},
     {
	"ID": "3465",
	"Nome": "Itainópolis",
	"Estado": "17"
},
     {
	"ID": "3466",
	"Nome": "Itaueira",
	"Estado": "17"
},
     {
	"ID": "3467",
	"Nome": "Jacobina do Piauí",
	"Estado": "17"
},
     {
	"ID": "3468",
	"Nome": "Jaicós",
	"Estado": "17"
},
     {
	"ID": "3469",
	"Nome": "Jardim do Mulato",
	"Estado": "17"
},
     {
	"ID": "3470",
	"Nome": "Jatobá do Piauí",
	"Estado": "17"
},
     {
	"ID": "3471",
	"Nome": "Jerumenha",
	"Estado": "17"
},
     {
	"ID": "3472",
	"Nome": "João Costa",
	"Estado": "17"
},
     {
	"ID": "3473",
	"Nome": "Joaquim Pires",
	"Estado": "17"
},
     {
	"ID": "3474",
	"Nome": "Joca Marques",
	"Estado": "17"
},
     {
	"ID": "3475",
	"Nome": "José de Freitas",
	"Estado": "17"
},
     {
	"ID": "3476",
	"Nome": "Juazeiro do Piauí",
	"Estado": "17"
},
     {
	"ID": "3477",
	"Nome": "Júlio Borges",
	"Estado": "17"
},
     {
	"ID": "3478",
	"Nome": "Jurema",
	"Estado": "17"
},
     {
	"ID": "3479",
	"Nome": "Lagoa Alegre",
	"Estado": "17"
},
     {
	"ID": "3480",
	"Nome": "Lagoa de São Francisco",
	"Estado": "17"
},
     {
	"ID": "3481",
	"Nome": "Lagoa do Barro do Piauí",
	"Estado": "17"
},
     {
	"ID": "3482",
	"Nome": "Lagoa do Piauí",
	"Estado": "17"
},
     {
	"ID": "3483",
	"Nome": "Lagoa do Sítio",
	"Estado": "17"
},
     {
	"ID": "3484",
	"Nome": "Lagoinha do Piauí",
	"Estado": "17"
},
     {
	"ID": "3485",
	"Nome": "Landri Sales",
	"Estado": "17"
},
     {
	"ID": "3486",
	"Nome": "Luís Correia",
	"Estado": "17"
},
     {
	"ID": "3487",
	"Nome": "Luzilândia",
	"Estado": "17"
},
     {
	"ID": "3488",
	"Nome": "Madeiro",
	"Estado": "17"
},
     {
	"ID": "3489",
	"Nome": "Manoel Emídio",
	"Estado": "17"
},
     {
	"ID": "3490",
	"Nome": "Marcolândia",
	"Estado": "17"
},
     {
	"ID": "3491",
	"Nome": "Marcos Parente",
	"Estado": "17"
},
     {
	"ID": "3492",
	"Nome": "Massapê do Piauí",
	"Estado": "17"
},
     {
	"ID": "3493",
	"Nome": "Matias Olímpio",
	"Estado": "17"
},
     {
	"ID": "3494",
	"Nome": "Miguel Alves",
	"Estado": "17"
},
     {
	"ID": "3495",
	"Nome": "Miguel Leão",
	"Estado": "17"
},
     {
	"ID": "3496",
	"Nome": "Milton Brandão",
	"Estado": "17"
},
     {
	"ID": "3497",
	"Nome": "Monsenhor Gil",
	"Estado": "17"
},
     {
	"ID": "3498",
	"Nome": "Monsenhor Hipólito",
	"Estado": "17"
},
     {
	"ID": "3499",
	"Nome": "Monte Alegre do Piauí",
	"Estado": "17"
},
     {
	"ID": "3500",
	"Nome": "Morro Cabeça no Tempo",
	"Estado": "17"
},
     {
	"ID": "3501",
	"Nome": "Morro do Chapéu do Piauí",
	"Estado": "17"
},
     {
	"ID": "3502",
	"Nome": "Murici dos Portelas",
	"Estado": "17"
},
     {
	"ID": "3503",
	"Nome": "Nazaré do Piauí",
	"Estado": "17"
},
     {
	"ID": "3504",
	"Nome": "Nossa Senhora de Nazaré",
	"Estado": "17"
},
     {
	"ID": "3505",
	"Nome": "Nossa Senhora dos Remédios",
	"Estado": "17"
},
     {
	"ID": "3506",
	"Nome": "Nova Santa Rita",
	"Estado": "17"
},
     {
	"ID": "3507",
	"Nome": "Novo Oriente do Piauí",
	"Estado": "17"
},
     {
	"ID": "3508",
	"Nome": "Novo Santo Antônio",
	"Estado": "17"
},
     {
	"ID": "3509",
	"Nome": "Oeiras",
	"Estado": "17"
},
     {
	"ID": "3510",
	"Nome": "Olho d`Água do Piauí",
	"Estado": "17"
},
     {
	"ID": "3511",
	"Nome": "Padre Marcos",
	"Estado": "17"
},
     {
	"ID": "3512",
	"Nome": "Paes Landim",
	"Estado": "17"
},
     {
	"ID": "3513",
	"Nome": "Pajeú do Piauí",
	"Estado": "17"
},
     {
	"ID": "3514",
	"Nome": "Palmeira do Piauí",
	"Estado": "17"
},
     {
	"ID": "3515",
	"Nome": "Palmeirais",
	"Estado": "17"
},
     {
	"ID": "3516",
	"Nome": "Paquetá",
	"Estado": "17"
},
     {
	"ID": "3517",
	"Nome": "Parnaguá",
	"Estado": "17"
},
     {
	"ID": "3518",
	"Nome": "Parnaíba",
	"Estado": "17"
},
     {
	"ID": "3519",
	"Nome": "Passagem Franca do Piauí",
	"Estado": "17"
},
     {
	"ID": "3520",
	"Nome": "Patos do Piauí",
	"Estado": "17"
},
     {
	"ID": "3521",
	"Nome": "Pau d`Arco do Piauí",
	"Estado": "17"
},
     {
	"ID": "3522",
	"Nome": "Paulistana",
	"Estado": "17"
},
     {
	"ID": "3523",
	"Nome": "Pavussu",
	"Estado": "17"
},
     {
	"ID": "3524",
	"Nome": "Pedro II",
	"Estado": "17"
},
     {
	"ID": "3525",
	"Nome": "Pedro Laurentino",
	"Estado": "17"
},
     {
	"ID": "3526",
	"Nome": "Picos",
	"Estado": "17"
},
     {
	"ID": "3527",
	"Nome": "Pimenteiras",
	"Estado": "17"
},
     {
	"ID": "3528",
	"Nome": "Pio IX",
	"Estado": "17"
},
     {
	"ID": "3529",
	"Nome": "Piracuruca",
	"Estado": "17"
},
     {
	"ID": "3530",
	"Nome": "Piripiri",
	"Estado": "17"
},
     {
	"ID": "3531",
	"Nome": "Porto",
	"Estado": "17"
},
     {
	"ID": "3532",
	"Nome": "Porto Alegre do Piauí",
	"Estado": "17"
},
     {
	"ID": "3533",
	"Nome": "Prata do Piauí",
	"Estado": "17"
},
     {
	"ID": "3534",
	"Nome": "Queimada Nova",
	"Estado": "17"
},
     {
	"ID": "3535",
	"Nome": "Redenção do Gurguéia",
	"Estado": "17"
},
     {
	"ID": "3536",
	"Nome": "Regeneração",
	"Estado": "17"
},
     {
	"ID": "3537",
	"Nome": "Riacho Frio",
	"Estado": "17"
},
     {
	"ID": "3538",
	"Nome": "Ribeira do Piauí",
	"Estado": "17"
},
     {
	"ID": "3539",
	"Nome": "Ribeiro Gonçalves",
	"Estado": "17"
},
     {
	"ID": "3540",
	"Nome": "Rio Grande do Piauí",
	"Estado": "17"
},
     {
	"ID": "3541",
	"Nome": "Santa Cruz do Piauí",
	"Estado": "17"
},
     {
	"ID": "3542",
	"Nome": "Santa Cruz dos Milagres",
	"Estado": "17"
},
     {
	"ID": "3543",
	"Nome": "Santa Filomena",
	"Estado": "17"
},
     {
	"ID": "3544",
	"Nome": "Santa Luz",
	"Estado": "17"
},
     {
	"ID": "3545",
	"Nome": "Santa Rosa do Piauí",
	"Estado": "17"
},
     {
	"ID": "3546",
	"Nome": "Santana do Piauí",
	"Estado": "17"
},
     {
	"ID": "3547",
	"Nome": "Santo Antônio de Lisboa",
	"Estado": "17"
},
     {
	"ID": "3548",
	"Nome": "Santo Antônio dos Milagres",
	"Estado": "17"
},
     {
	"ID": "3549",
	"Nome": "Santo Inácio do Piauí",
	"Estado": "17"
},
     {
	"ID": "3550",
	"Nome": "São Braz do Piauí",
	"Estado": "17"
},
     {
	"ID": "3551",
	"Nome": "São Félix do Piauí",
	"Estado": "17"
},
     {
	"ID": "3552",
	"Nome": "São Francisco de Assis do Piauí",
	"Estado": "17"
},
     {
	"ID": "3553",
	"Nome": "São Francisco do Piauí",
	"Estado": "17"
},
     {
	"ID": "3554",
	"Nome": "São Gonçalo do Gurguéia",
	"Estado": "17"
},
     {
	"ID": "3555",
	"Nome": "São Gonçalo do Piauí",
	"Estado": "17"
},
     {
	"ID": "3556",
	"Nome": "São João da Canabrava",
	"Estado": "17"
},
     {
	"ID": "3557",
	"Nome": "São João da Fronteira",
	"Estado": "17"
},
     {
	"ID": "3558",
	"Nome": "São João da Serra",
	"Estado": "17"
},
     {
	"ID": "3559",
	"Nome": "São João da Varjota",
	"Estado": "17"
},
     {
	"ID": "3560",
	"Nome": "São João do Arraial",
	"Estado": "17"
},
     {
	"ID": "3561",
	"Nome": "São João do Piauí",
	"Estado": "17"
},
     {
	"ID": "3562",
	"Nome": "São José do Divino",
	"Estado": "17"
},
     {
	"ID": "3563",
	"Nome": "São José do Peixe",
	"Estado": "17"
},
     {
	"ID": "3564",
	"Nome": "São José do Piauí",
	"Estado": "17"
},
     {
	"ID": "3565",
	"Nome": "São Julião",
	"Estado": "17"
},
     {
	"ID": "3566",
	"Nome": "São Lourenço do Piauí",
	"Estado": "17"
},
     {
	"ID": "3567",
	"Nome": "São Luis do Piauí",
	"Estado": "17"
},
     {
	"ID": "3568",
	"Nome": "São Miguel da Baixa Grande",
	"Estado": "17"
},
     {
	"ID": "3569",
	"Nome": "São Miguel do Fidalgo",
	"Estado": "17"
},
     {
	"ID": "3570",
	"Nome": "São Miguel do Tapuio",
	"Estado": "17"
},
     {
	"ID": "3571",
	"Nome": "São Pedro do Piauí",
	"Estado": "17"
},
     {
	"ID": "3572",
	"Nome": "São Raimundo Nonato",
	"Estado": "17"
},
     {
	"ID": "3573",
	"Nome": "Sebastião Barros",
	"Estado": "17"
},
     {
	"ID": "3574",
	"Nome": "Sebastião Leal",
	"Estado": "17"
},
     {
	"ID": "3575",
	"Nome": "Sigefredo Pacheco",
	"Estado": "17"
},
     {
	"ID": "3576",
	"Nome": "Simões",
	"Estado": "17"
},
     {
	"ID": "3577",
	"Nome": "Simplício Mendes",
	"Estado": "17"
},
     {
	"ID": "3578",
	"Nome": "Socorro do Piauí",
	"Estado": "17"
},
     {
	"ID": "3579",
	"Nome": "Sussuapara",
	"Estado": "17"
},
     {
	"ID": "3580",
	"Nome": "Tamboril do Piauí",
	"Estado": "17"
},
     {
	"ID": "3581",
	"Nome": "Tanque do Piauí",
	"Estado": "17"
},
     {
	"ID": "3582",
	"Nome": "Teresina",
	"Estado": "17"
},
     {
	"ID": "3583",
	"Nome": "União",
	"Estado": "17"
},
     {
	"ID": "3584",
	"Nome": "Uruçuí",
	"Estado": "17"
},
     {
	"ID": "3585",
	"Nome": "Valença do Piauí",
	"Estado": "17"
},
     {
	"ID": "3586",
	"Nome": "Várzea Branca",
	"Estado": "17"
},
     {
	"ID": "3587",
	"Nome": "Várzea Grande",
	"Estado": "17"
},
     {
	"ID": "3588",
	"Nome": "Vera Mendes",
	"Estado": "17"
},
     {
	"ID": "3589",
	"Nome": "Vila Nova do Piauí",
	"Estado": "17"
},
     {
	"ID": "3590",
	"Nome": "Wall Ferraz",
	"Estado": "17"
},
     {
	"ID": "3591",
	"Nome": "Angra dos Reis",
	"Estado": "19"
},
     {
	"ID": "3592",
	"Nome": "Aperibé",
	"Estado": "19"
},
     {
	"ID": "3593",
	"Nome": "Araruama",
	"Estado": "19"
},
     {
	"ID": "3594",
	"Nome": "Areal",
	"Estado": "19"
},
     {
	"ID": "3595",
	"Nome": "Armação dos Búzios",
	"Estado": "19"
},
     {
	"ID": "3596",
	"Nome": "Arraial do Cabo",
	"Estado": "19"
},
     {
	"ID": "3597",
	"Nome": "Barra do Piraí",
	"Estado": "19"
},
     {
	"ID": "3598",
	"Nome": "Barra Mansa",
	"Estado": "19"
},
     {
	"ID": "3599",
	"Nome": "Belford Roxo",
	"Estado": "19"
},
     {
	"ID": "3600",
	"Nome": "Bom Jardim",
	"Estado": "19"
},
     {
	"ID": "3601",
	"Nome": "Bom Jesus do Itabapoana",
	"Estado": "19"
},
     {
	"ID": "3602",
	"Nome": "Cabo Frio",
	"Estado": "19"
},
     {
	"ID": "3603",
	"Nome": "Cachoeiras de Macacu",
	"Estado": "19"
},
     {
	"ID": "3604",
	"Nome": "Cambuci",
	"Estado": "19"
},
     {
	"ID": "3605",
	"Nome": "Campos dos Goytacazes",
	"Estado": "19"
},
     {
	"ID": "3606",
	"Nome": "Cantagalo",
	"Estado": "19"
},
     {
	"ID": "3607",
	"Nome": "Carapebus",
	"Estado": "19"
},
     {
	"ID": "3608",
	"Nome": "Cardoso Moreira",
	"Estado": "19"
},
     {
	"ID": "3609",
	"Nome": "Carmo",
	"Estado": "19"
},
     {
	"ID": "3610",
	"Nome": "Casimiro de Abreu",
	"Estado": "19"
},
     {
	"ID": "3611",
	"Nome": "Comendador Levy Gasparian",
	"Estado": "19"
},
     {
	"ID": "3612",
	"Nome": "Conceição de Macabu",
	"Estado": "19"
},
     {
	"ID": "3613",
	"Nome": "Cordeiro",
	"Estado": "19"
},
     {
	"ID": "3614",
	"Nome": "Duas Barras",
	"Estado": "19"
},
     {
	"ID": "3615",
	"Nome": "Duque de Caxias",
	"Estado": "19"
},
     {
	"ID": "3616",
	"Nome": "Engenheiro Paulo de Frontin",
	"Estado": "19"
},
     {
	"ID": "3617",
	"Nome": "Guapimirim",
	"Estado": "19"
},
     {
	"ID": "3618",
	"Nome": "Iguaba Grande",
	"Estado": "19"
},
     {
	"ID": "3619",
	"Nome": "Itaboraí",
	"Estado": "19"
},
     {
	"ID": "3620",
	"Nome": "Itaguaí",
	"Estado": "19"
},
     {
	"ID": "3621",
	"Nome": "Italva",
	"Estado": "19"
},
     {
	"ID": "3622",
	"Nome": "Itaocara",
	"Estado": "19"
},
     {
	"ID": "3623",
	"Nome": "Itaperuna",
	"Estado": "19"
},
     {
	"ID": "3624",
	"Nome": "Itatiaia",
	"Estado": "19"
},
     {
	"ID": "3625",
	"Nome": "Japeri",
	"Estado": "19"
},
     {
	"ID": "3626",
	"Nome": "Laje do Muriaé",
	"Estado": "19"
},
     {
	"ID": "3627",
	"Nome": "Macaé",
	"Estado": "19"
},
     {
	"ID": "3628",
	"Nome": "Macuco",
	"Estado": "19"
},
     {
	"ID": "3629",
	"Nome": "Magé",
	"Estado": "19"
},
     {
	"ID": "3630",
	"Nome": "Mangaratiba",
	"Estado": "19"
},
     {
	"ID": "3631",
	"Nome": "Maricá",
	"Estado": "19"
},
     {
	"ID": "3632",
	"Nome": "Mendes",
	"Estado": "19"
},
     {
	"ID": "3633",
	"Nome": "Mesquita",
	"Estado": "19"
},
     {
	"ID": "3634",
	"Nome": "Miguel Pereira",
	"Estado": "19"
},
     {
	"ID": "3635",
	"Nome": "Miracema",
	"Estado": "19"
},
     {
	"ID": "3636",
	"Nome": "Natividade",
	"Estado": "19"
},
     {
	"ID": "3637",
	"Nome": "Nilópolis",
	"Estado": "19"
},
     {
	"ID": "3638",
	"Nome": "Niterói",
	"Estado": "19"
},
     {
	"ID": "3639",
	"Nome": "Nova Friburgo",
	"Estado": "19"
},
     {
	"ID": "3640",
	"Nome": "Nova Iguaçu",
	"Estado": "19"
},
     {
	"ID": "3641",
	"Nome": "Paracambi",
	"Estado": "19"
},
     {
	"ID": "3642",
	"Nome": "Paraíba do Sul",
	"Estado": "19"
},
     {
	"ID": "3643",
	"Nome": "Parati",
	"Estado": "19"
},
     {
	"ID": "3644",
	"Nome": "Paty do Alferes",
	"Estado": "19"
},
     {
	"ID": "3645",
	"Nome": "Petrópolis",
	"Estado": "19"
},
     {
	"ID": "3646",
	"Nome": "Pinheiral",
	"Estado": "19"
},
     {
	"ID": "3647",
	"Nome": "Piraí",
	"Estado": "19"
},
     {
	"ID": "3648",
	"Nome": "Porciúncula",
	"Estado": "19"
},
     {
	"ID": "3649",
	"Nome": "Porto Real",
	"Estado": "19"
},
     {
	"ID": "3650",
	"Nome": "Quatis",
	"Estado": "19"
},
     {
	"ID": "3651",
	"Nome": "Queimados",
	"Estado": "19"
},
     {
	"ID": "3652",
	"Nome": "Quissamã",
	"Estado": "19"
},
     {
	"ID": "3653",
	"Nome": "Resende",
	"Estado": "19"
},
     {
	"ID": "3654",
	"Nome": "Rio Bonito",
	"Estado": "19"
},
     {
	"ID": "3655",
	"Nome": "Rio Claro",
	"Estado": "19"
},
     {
	"ID": "3656",
	"Nome": "Rio das Flores",
	"Estado": "19"
},
     {
	"ID": "3657",
	"Nome": "Rio das Ostras",
	"Estado": "19"
},
     {
	"ID": "3658",
	"Nome": "Rio de Janeiro",
	"Estado": "19"
},
     {
	"ID": "3659",
	"Nome": "Santa Maria Madalena",
	"Estado": "19"
},
     {
	"ID": "3660",
	"Nome": "Santo Antônio de Pádua",
	"Estado": "19"
},
     {
	"ID": "3661",
	"Nome": "São Fidélis",
	"Estado": "19"
},
     {
	"ID": "3662",
	"Nome": "São Francisco de Itabapoana",
	"Estado": "19"
},
     {
	"ID": "3663",
	"Nome": "São Gonçalo",
	"Estado": "19"
},
     {
	"ID": "3664",
	"Nome": "São João da Barra",
	"Estado": "19"
},
     {
	"ID": "3665",
	"Nome": "São João de Meriti",
	"Estado": "19"
},
     {
	"ID": "3666",
	"Nome": "São José de Ubá",
	"Estado": "19"
},
     {
	"ID": "3667",
	"Nome": "São José do Vale do Rio Pret",
	"Estado": "19"
},
     {
	"ID": "3668",
	"Nome": "São Pedro da Aldeia",
	"Estado": "19"
},
     {
	"ID": "3669",
	"Nome": "São Sebastião do Alto",
	"Estado": "19"
},
     {
	"ID": "3670",
	"Nome": "Sapucaia",
	"Estado": "19"
},
     {
	"ID": "3671",
	"Nome": "Saquarema",
	"Estado": "19"
},
     {
	"ID": "3672",
	"Nome": "Seropédica",
	"Estado": "19"
},
     {
	"ID": "3673",
	"Nome": "Silva Jardim",
	"Estado": "19"
},
     {
	"ID": "3674",
	"Nome": "Sumidouro",
	"Estado": "19"
},
     {
	"ID": "3675",
	"Nome": "Tanguá",
	"Estado": "19"
},
     {
	"ID": "3676",
	"Nome": "Teresópolis",
	"Estado": "19"
},
     {
	"ID": "3677",
	"Nome": "Trajano de Morais",
	"Estado": "19"
},
     {
	"ID": "3678",
	"Nome": "Três Rios",
	"Estado": "19"
},
     {
	"ID": "3679",
	"Nome": "Valença",
	"Estado": "19"
},
     {
	"ID": "3680",
	"Nome": "Varre-Sai",
	"Estado": "19"
},
     {
	"ID": "3681",
	"Nome": "Vassouras",
	"Estado": "19"
},
     {
	"ID": "3682",
	"Nome": "Volta Redonda",
	"Estado": "19"
},
     {
	"ID": "3683",
	"Nome": "Acari",
	"Estado": "20"
},
     {
	"ID": "3684",
	"Nome": "Açu",
	"Estado": "20"
},
     {
	"ID": "3685",
	"Nome": "Afonso Bezerra",
	"Estado": "20"
},
     {
	"ID": "3686",
	"Nome": "Água Nova",
	"Estado": "20"
},
     {
	"ID": "3687",
	"Nome": "Alexandria",
	"Estado": "20"
},
     {
	"ID": "3688",
	"Nome": "Almino Afonso",
	"Estado": "20"
},
     {
	"ID": "3689",
	"Nome": "Alto do Rodrigues",
	"Estado": "20"
},
     {
	"ID": "3690",
	"Nome": "Angicos",
	"Estado": "20"
},
     {
	"ID": "3691",
	"Nome": "Antônio Martins",
	"Estado": "20"
},
     {
	"ID": "3692",
	"Nome": "Apodi",
	"Estado": "20"
},
     {
	"ID": "3693",
	"Nome": "Areia Branca",
	"Estado": "20"
},
     {
	"ID": "3694",
	"Nome": "Arês",
	"Estado": "20"
},
     {
	"ID": "3695",
	"Nome": "Augusto Severo",
	"Estado": "20"
},
     {
	"ID": "3696",
	"Nome": "Baía Formosa",
	"Estado": "20"
},
     {
	"ID": "3697",
	"Nome": "Baraúna",
	"Estado": "20"
},
     {
	"ID": "3698",
	"Nome": "Barcelona",
	"Estado": "20"
},
     {
	"ID": "3699",
	"Nome": "Bento Fernandes",
	"Estado": "20"
},
     {
	"ID": "3700",
	"Nome": "Bodó",
	"Estado": "20"
},
     {
	"ID": "3701",
	"Nome": "Bom Jesus",
	"Estado": "20"
},
     {
	"ID": "3702",
	"Nome": "Brejinho",
	"Estado": "20"
},
     {
	"ID": "3703",
	"Nome": "Caiçara do Norte",
	"Estado": "20"
},
     {
	"ID": "3704",
	"Nome": "Caiçara do Rio do Vento",
	"Estado": "20"
},
     {
	"ID": "3705",
	"Nome": "Caicó",
	"Estado": "20"
},
     {
	"ID": "3706",
	"Nome": "Campo Redondo",
	"Estado": "20"
},
     {
	"ID": "3707",
	"Nome": "Canguaretama",
	"Estado": "20"
},
     {
	"ID": "3708",
	"Nome": "Caraúbas",
	"Estado": "20"
},
     {
	"ID": "3709",
	"Nome": "Carnaúba dos Dantas",
	"Estado": "20"
},
     {
	"ID": "3710",
	"Nome": "Carnaubais",
	"Estado": "20"
},
     {
	"ID": "3711",
	"Nome": "Ceará-Mirim",
	"Estado": "20"
},
     {
	"ID": "3712",
	"Nome": "Cerro Corá",
	"Estado": "20"
},
     {
	"ID": "3713",
	"Nome": "Coronel Ezequiel",
	"Estado": "20"
},
     {
	"ID": "3714",
	"Nome": "Coronel João Pessoa",
	"Estado": "20"
},
     {
	"ID": "3715",
	"Nome": "Cruzeta",
	"Estado": "20"
},
     {
	"ID": "3716",
	"Nome": "Currais Novos",
	"Estado": "20"
},
     {
	"ID": "3717",
	"Nome": "Doutor Severiano",
	"Estado": "20"
},
     {
	"ID": "3718",
	"Nome": "Encanto",
	"Estado": "20"
},
     {
	"ID": "3719",
	"Nome": "Equador",
	"Estado": "20"
},
     {
	"ID": "3720",
	"Nome": "Espírito Santo",
	"Estado": "20"
},
     {
	"ID": "3721",
	"Nome": "Extremoz",
	"Estado": "20"
},
     {
	"ID": "3722",
	"Nome": "Felipe Guerra",
	"Estado": "20"
},
     {
	"ID": "3723",
	"Nome": "Fernando Pedroza",
	"Estado": "20"
},
     {
	"ID": "3724",
	"Nome": "Florânia",
	"Estado": "20"
},
     {
	"ID": "3725",
	"Nome": "Francisco Dantas",
	"Estado": "20"
},
     {
	"ID": "3726",
	"Nome": "Frutuoso Gomes",
	"Estado": "20"
},
     {
	"ID": "3727",
	"Nome": "Galinhos",
	"Estado": "20"
},
     {
	"ID": "3728",
	"Nome": "Goianinha",
	"Estado": "20"
},
     {
	"ID": "3729",
	"Nome": "Governador Dix-Sept Rosado",
	"Estado": "20"
},
     {
	"ID": "3730",
	"Nome": "Grossos",
	"Estado": "20"
},
     {
	"ID": "3731",
	"Nome": "Guamaré",
	"Estado": "20"
},
     {
	"ID": "3732",
	"Nome": "Ielmo Marinho",
	"Estado": "20"
},
     {
	"ID": "3733",
	"Nome": "Ipanguaçu",
	"Estado": "20"
},
     {
	"ID": "3734",
	"Nome": "Ipueira",
	"Estado": "20"
},
     {
	"ID": "3735",
	"Nome": "Itajá",
	"Estado": "20"
},
     {
	"ID": "3736",
	"Nome": "Itaú",
	"Estado": "20"
},
     {
	"ID": "3737",
	"Nome": "Jaçanã",
	"Estado": "20"
},
     {
	"ID": "3738",
	"Nome": "Jandaíra",
	"Estado": "20"
},
     {
	"ID": "3739",
	"Nome": "Janduís",
	"Estado": "20"
},
     {
	"ID": "3740",
	"Nome": "Januário Cicco",
	"Estado": "20"
},
     {
	"ID": "3741",
	"Nome": "Japi",
	"Estado": "20"
},
     {
	"ID": "3742",
	"Nome": "Jardim de Angicos",
	"Estado": "20"
},
     {
	"ID": "3743",
	"Nome": "Jardim de Piranhas",
	"Estado": "20"
},
     {
	"ID": "3744",
	"Nome": "Jardim do Seridó",
	"Estado": "20"
},
     {
	"ID": "3745",
	"Nome": "João Câmara",
	"Estado": "20"
},
     {
	"ID": "3746",
	"Nome": "João Dias",
	"Estado": "20"
},
     {
	"ID": "3747",
	"Nome": "José da Penha",
	"Estado": "20"
},
     {
	"ID": "3748",
	"Nome": "Jucurutu",
	"Estado": "20"
},
     {
	"ID": "3749",
	"Nome": "Jundiá",
	"Estado": "20"
},
     {
	"ID": "3750",
	"Nome": "Lagoa d`Anta",
	"Estado": "20"
},
     {
	"ID": "3751",
	"Nome": "Lagoa de Pedras",
	"Estado": "20"
},
     {
	"ID": "3752",
	"Nome": "Lagoa de Velhos",
	"Estado": "20"
},
     {
	"ID": "3753",
	"Nome": "Lagoa Nova",
	"Estado": "20"
},
     {
	"ID": "3754",
	"Nome": "Lagoa Salgada",
	"Estado": "20"
},
     {
	"ID": "3755",
	"Nome": "Lajes",
	"Estado": "20"
},
     {
	"ID": "3756",
	"Nome": "Lajes Pintadas",
	"Estado": "20"
},
     {
	"ID": "3757",
	"Nome": "Lucrécia",
	"Estado": "20"
},
     {
	"ID": "3758",
	"Nome": "Luís Gomes",
	"Estado": "20"
},
     {
	"ID": "3759",
	"Nome": "Macaíba",
	"Estado": "20"
},
     {
	"ID": "3760",
	"Nome": "Macau",
	"Estado": "20"
},
     {
	"ID": "3761",
	"Nome": "Major Sales",
	"Estado": "20"
},
     {
	"ID": "3762",
	"Nome": "Marcelino Vieira",
	"Estado": "20"
},
     {
	"ID": "3763",
	"Nome": "Martins",
	"Estado": "20"
},
     {
	"ID": "3764",
	"Nome": "Maxaranguape",
	"Estado": "20"
},
     {
	"ID": "3765",
	"Nome": "Messias Targino",
	"Estado": "20"
},
     {
	"ID": "3766",
	"Nome": "Montanhas",
	"Estado": "20"
},
     {
	"ID": "3767",
	"Nome": "Monte Alegre",
	"Estado": "20"
},
     {
	"ID": "3768",
	"Nome": "Monte das Gameleiras",
	"Estado": "20"
},
     {
	"ID": "3769",
	"Nome": "Mossoró",
	"Estado": "20"
},
     {
	"ID": "3770",
	"Nome": "Natal",
	"Estado": "20"
},
     {
	"ID": "3771",
	"Nome": "Nísia Floresta",
	"Estado": "20"
},
     {
	"ID": "3772",
	"Nome": "Nova Cruz",
	"Estado": "20"
},
     {
	"ID": "3773",
	"Nome": "Olho-d`Água do Borges",
	"Estado": "20"
},
     {
	"ID": "3774",
	"Nome": "Ouro Branco",
	"Estado": "20"
},
     {
	"ID": "3775",
	"Nome": "Paraná",
	"Estado": "20"
},
     {
	"ID": "3776",
	"Nome": "Paraú",
	"Estado": "20"
},
     {
	"ID": "3777",
	"Nome": "Parazinho",
	"Estado": "20"
},
     {
	"ID": "3778",
	"Nome": "Parelhas",
	"Estado": "20"
},
     {
	"ID": "3779",
	"Nome": "Parnamirim",
	"Estado": "20"
},
     {
	"ID": "3780",
	"Nome": "Passa e Fica",
	"Estado": "20"
},
     {
	"ID": "3781",
	"Nome": "Passagem",
	"Estado": "20"
},
     {
	"ID": "3782",
	"Nome": "Patu",
	"Estado": "20"
},
     {
	"ID": "3783",
	"Nome": "Pau dos Ferros",
	"Estado": "20"
},
     {
	"ID": "3784",
	"Nome": "Pedra Grande",
	"Estado": "20"
},
     {
	"ID": "3785",
	"Nome": "Pedra Preta",
	"Estado": "20"
},
     {
	"ID": "3786",
	"Nome": "Pedro Avelino",
	"Estado": "20"
},
     {
	"ID": "3787",
	"Nome": "Pedro Velho",
	"Estado": "20"
},
     {
	"ID": "3788",
	"Nome": "Pendências",
	"Estado": "20"
},
     {
	"ID": "3789",
	"Nome": "Pilões",
	"Estado": "20"
},
     {
	"ID": "3790",
	"Nome": "Poço Branco",
	"Estado": "20"
},
     {
	"ID": "3791",
	"Nome": "Portalegre",
	"Estado": "20"
},
     {
	"ID": "3792",
	"Nome": "Porto do Mangue",
	"Estado": "20"
},
     {
	"ID": "3793",
	"Nome": "Presidente Juscelino",
	"Estado": "20"
},
     {
	"ID": "3794",
	"Nome": "Pureza",
	"Estado": "20"
},
     {
	"ID": "3795",
	"Nome": "Rafael Fernandes",
	"Estado": "20"
},
     {
	"ID": "3796",
	"Nome": "Rafael Godeiro",
	"Estado": "20"
},
     {
	"ID": "3797",
	"Nome": "Riacho da Cruz",
	"Estado": "20"
},
     {
	"ID": "3798",
	"Nome": "Riacho de Santana",
	"Estado": "20"
},
     {
	"ID": "3799",
	"Nome": "Riachuelo",
	"Estado": "20"
},
     {
	"ID": "3800",
	"Nome": "Rio do Fogo",
	"Estado": "20"
},
     {
	"ID": "3801",
	"Nome": "Rodolfo Fernandes",
	"Estado": "20"
},
     {
	"ID": "3802",
	"Nome": "Ruy Barbosa",
	"Estado": "20"
},
     {
	"ID": "3803",
	"Nome": "Santa Cruz",
	"Estado": "20"
},
     {
	"ID": "3804",
	"Nome": "Santa Maria",
	"Estado": "20"
},
     {
	"ID": "3805",
	"Nome": "Santana do Matos",
	"Estado": "20"
},
     {
	"ID": "3806",
	"Nome": "Santana do Seridó",
	"Estado": "20"
},
     {
	"ID": "3807",
	"Nome": "Santo Antônio",
	"Estado": "20"
},
     {
	"ID": "3808",
	"Nome": "São Bento do Norte",
	"Estado": "20"
},
     {
	"ID": "3809",
	"Nome": "São Bento do Trairí",
	"Estado": "20"
},
     {
	"ID": "3810",
	"Nome": "São Fernando",
	"Estado": "20"
},
     {
	"ID": "3811",
	"Nome": "São Francisco do Oeste",
	"Estado": "20"
},
     {
	"ID": "3812",
	"Nome": "São Gonçalo do Amarante",
	"Estado": "20"
},
     {
	"ID": "3813",
	"Nome": "São João do Sabugi",
	"Estado": "20"
},
     {
	"ID": "3814",
	"Nome": "São José de Mipibu",
	"Estado": "20"
},
     {
	"ID": "3815",
	"Nome": "São José do Campestre",
	"Estado": "20"
},
     {
	"ID": "3816",
	"Nome": "São José do Seridó",
	"Estado": "20"
},
     {
	"ID": "3817",
	"Nome": "São Miguel",
	"Estado": "20"
},
     {
	"ID": "3818",
	"Nome": "São Miguel do Gostoso",
	"Estado": "20"
},
     {
	"ID": "3819",
	"Nome": "São Paulo do Potengi",
	"Estado": "20"
},
     {
	"ID": "3820",
	"Nome": "São Pedro",
	"Estado": "20"
},
     {
	"ID": "3821",
	"Nome": "São Rafael",
	"Estado": "20"
},
     {
	"ID": "3822",
	"Nome": "São Tomé",
	"Estado": "20"
},
     {
	"ID": "3823",
	"Nome": "São Vicente",
	"Estado": "20"
},
     {
	"ID": "3824",
	"Nome": "Senador Elói de Souza",
	"Estado": "20"
},
     {
	"ID": "3825",
	"Nome": "Senador Georgino Avelino",
	"Estado": "20"
},
     {
	"ID": "3826",
	"Nome": "Serra de São Bento",
	"Estado": "20"
},
     {
	"ID": "3827",
	"Nome": "Serra do Mel",
	"Estado": "20"
},
     {
	"ID": "3828",
	"Nome": "Serra Negra do Norte",
	"Estado": "20"
},
     {
	"ID": "3829",
	"Nome": "Serrinha",
	"Estado": "20"
},
     {
	"ID": "3830",
	"Nome": "Serrinha dos Pintos",
	"Estado": "20"
},
     {
	"ID": "3831",
	"Nome": "Severiano Melo",
	"Estado": "20"
},
     {
	"ID": "3832",
	"Nome": "Sítio Novo",
	"Estado": "20"
},
     {
	"ID": "3833",
	"Nome": "Taboleiro Grande",
	"Estado": "20"
},
     {
	"ID": "3834",
	"Nome": "Taipu",
	"Estado": "20"
},
     {
	"ID": "3835",
	"Nome": "Tangará",
	"Estado": "20"
},
     {
	"ID": "3836",
	"Nome": "Tenente Ananias",
	"Estado": "20"
},
     {
	"ID": "3837",
	"Nome": "Tenente Laurentino Cruz",
	"Estado": "20"
},
     {
	"ID": "3838",
	"Nome": "Tibau",
	"Estado": "20"
},
     {
	"ID": "3839",
	"Nome": "Tibau do Sul",
	"Estado": "20"
},
     {
	"ID": "3840",
	"Nome": "Timbaúba dos Batistas",
	"Estado": "20"
},
     {
	"ID": "3841",
	"Nome": "Touros",
	"Estado": "20"
},
     {
	"ID": "3842",
	"Nome": "Triunfo Potiguar",
	"Estado": "20"
},
     {
	"ID": "3843",
	"Nome": "Umarizal",
	"Estado": "20"
},
     {
	"ID": "3844",
	"Nome": "Upanema",
	"Estado": "20"
},
     {
	"ID": "3845",
	"Nome": "Várzea",
	"Estado": "20"
},
     {
	"ID": "3846",
	"Nome": "Venha-Ver",
	"Estado": "20"
},
     {
	"ID": "3847",
	"Nome": "Vera Cruz",
	"Estado": "20"
},
     {
	"ID": "3848",
	"Nome": "Viçosa",
	"Estado": "20"
},
     {
	"ID": "3849",
	"Nome": "Vila Flor",
	"Estado": "20"
},
     {
	"ID": "3850",
	"Nome": "Aceguá",
	"Estado": "23"
},
     {
	"ID": "3851",
	"Nome": "Água Santa",
	"Estado": "23"
},
     {
	"ID": "3852",
	"Nome": "Agudo",
	"Estado": "23"
},
     {
	"ID": "3853",
	"Nome": "Ajuricaba",
	"Estado": "23"
},
     {
	"ID": "3854",
	"Nome": "Alecrim",
	"Estado": "23"
},
     {
	"ID": "3855",
	"Nome": "Alegrete",
	"Estado": "23"
},
     {
	"ID": "3856",
	"Nome": "Alegria",
	"Estado": "23"
},
     {
	"ID": "3857",
	"Nome": "Almirante Tamandaré do Sul",
	"Estado": "23"
},
     {
	"ID": "3858",
	"Nome": "Alpestre",
	"Estado": "23"
},
     {
	"ID": "3859",
	"Nome": "Alto Alegre",
	"Estado": "23"
},
     {
	"ID": "3860",
	"Nome": "Alto Feliz",
	"Estado": "23"
},
     {
	"ID": "3861",
	"Nome": "Alvorada",
	"Estado": "23"
},
     {
	"ID": "3862",
	"Nome": "Amaral Ferrador",
	"Estado": "23"
},
     {
	"ID": "3863",
	"Nome": "Ametista do Sul",
	"Estado": "23"
},
     {
	"ID": "3864",
	"Nome": "André da Rocha",
	"Estado": "23"
},
     {
	"ID": "3865",
	"Nome": "Anta Gorda",
	"Estado": "23"
},
     {
	"ID": "3866",
	"Nome": "Antônio Prado",
	"Estado": "23"
},
     {
	"ID": "3867",
	"Nome": "Arambaré",
	"Estado": "23"
},
     {
	"ID": "3868",
	"Nome": "Araricá",
	"Estado": "23"
},
     {
	"ID": "3869",
	"Nome": "Aratiba",
	"Estado": "23"
},
     {
	"ID": "3870",
	"Nome": "Arroio do Meio",
	"Estado": "23"
},
     {
	"ID": "3871",
	"Nome": "Arroio do Padre",
	"Estado": "23"
},
     {
	"ID": "3872",
	"Nome": "Arroio do Sal",
	"Estado": "23"
},
     {
	"ID": "3873",
	"Nome": "Arroio do Tigre",
	"Estado": "23"
},
     {
	"ID": "3874",
	"Nome": "Arroio dos Ratos",
	"Estado": "23"
},
     {
	"ID": "3875",
	"Nome": "Arroio Grande",
	"Estado": "23"
},
     {
	"ID": "3876",
	"Nome": "Arvorezinha",
	"Estado": "23"
},
     {
	"ID": "3877",
	"Nome": "Augusto Pestana",
	"Estado": "23"
},
     {
	"ID": "3878",
	"Nome": "Áurea",
	"Estado": "23"
},
     {
	"ID": "3879",
	"Nome": "Bagé",
	"Estado": "23"
},
     {
	"ID": "3880",
	"Nome": "Balneário Pinhal",
	"Estado": "23"
},
     {
	"ID": "3881",
	"Nome": "Barão",
	"Estado": "23"
},
     {
	"ID": "3882",
	"Nome": "Barão de Cotegipe",
	"Estado": "23"
},
     {
	"ID": "3883",
	"Nome": "Barão do Triunfo",
	"Estado": "23"
},
     {
	"ID": "3884",
	"Nome": "Barra do Guarita",
	"Estado": "23"
},
     {
	"ID": "3885",
	"Nome": "Barra do Quaraí",
	"Estado": "23"
},
     {
	"ID": "3886",
	"Nome": "Barra do Ribeiro",
	"Estado": "23"
},
     {
	"ID": "3887",
	"Nome": "Barra do Rio Azul",
	"Estado": "23"
},
     {
	"ID": "3888",
	"Nome": "Barra Funda",
	"Estado": "23"
},
     {
	"ID": "3889",
	"Nome": "Barracão",
	"Estado": "23"
},
     {
	"ID": "3890",
	"Nome": "Barros Cassal",
	"Estado": "23"
},
     {
	"ID": "3891",
	"Nome": "Benjamin Constant do Sul",
	"Estado": "23"
},
     {
	"ID": "3892",
	"Nome": "Bento Gonçalves",
	"Estado": "23"
},
     {
	"ID": "3893",
	"Nome": "Boa Vista das Missões",
	"Estado": "23"
},
     {
	"ID": "3894",
	"Nome": "Boa Vista do Buricá",
	"Estado": "23"
},
     {
	"ID": "3895",
	"Nome": "Boa Vista do Cadeado",
	"Estado": "23"
},
     {
	"ID": "3896",
	"Nome": "Boa Vista do Incra",
	"Estado": "23"
},
     {
	"ID": "3897",
	"Nome": "Boa Vista do Sul",
	"Estado": "23"
},
     {
	"ID": "3898",
	"Nome": "Bom Jesus",
	"Estado": "23"
},
     {
	"ID": "3899",
	"Nome": "Bom Princípio",
	"Estado": "23"
},
     {
	"ID": "3900",
	"Nome": "Bom Progresso",
	"Estado": "23"
},
     {
	"ID": "3901",
	"Nome": "Bom Retiro do Sul",
	"Estado": "23"
},
     {
	"ID": "3902",
	"Nome": "Boqueirão do Leão",
	"Estado": "23"
},
     {
	"ID": "3903",
	"Nome": "Bossoroca",
	"Estado": "23"
},
     {
	"ID": "3904",
	"Nome": "Bozano",
	"Estado": "23"
},
     {
	"ID": "3905",
	"Nome": "Braga",
	"Estado": "23"
},
     {
	"ID": "3906",
	"Nome": "Brochier",
	"Estado": "23"
},
     {
	"ID": "3907",
	"Nome": "Butiá",
	"Estado": "23"
},
     {
	"ID": "3908",
	"Nome": "Caçapava do Sul",
	"Estado": "23"
},
     {
	"ID": "3909",
	"Nome": "Cacequi",
	"Estado": "23"
},
     {
	"ID": "3910",
	"Nome": "Cachoeira do Sul",
	"Estado": "23"
},
     {
	"ID": "3911",
	"Nome": "Cachoeirinha",
	"Estado": "23"
},
     {
	"ID": "3912",
	"Nome": "Cacique Doble",
	"Estado": "23"
},
     {
	"ID": "3913",
	"Nome": "Caibaté",
	"Estado": "23"
},
     {
	"ID": "3914",
	"Nome": "Caiçara",
	"Estado": "23"
},
     {
	"ID": "3915",
	"Nome": "Camaquã",
	"Estado": "23"
},
     {
	"ID": "3916",
	"Nome": "Camargo",
	"Estado": "23"
},
     {
	"ID": "3917",
	"Nome": "Cambará do Sul",
	"Estado": "23"
},
     {
	"ID": "3918",
	"Nome": "Campestre da Serra",
	"Estado": "23"
},
     {
	"ID": "3919",
	"Nome": "Campina das Missões",
	"Estado": "23"
},
     {
	"ID": "3920",
	"Nome": "Campinas do Sul",
	"Estado": "23"
},
     {
	"ID": "3921",
	"Nome": "Campo Bom",
	"Estado": "23"
},
     {
	"ID": "3922",
	"Nome": "Campo Novo",
	"Estado": "23"
},
     {
	"ID": "3923",
	"Nome": "Campos Borges",
	"Estado": "23"
},
     {
	"ID": "3924",
	"Nome": "Candelária",
	"Estado": "23"
},
     {
	"ID": "3925",
	"Nome": "Cândido Godói",
	"Estado": "23"
},
     {
	"ID": "3926",
	"Nome": "Candiota",
	"Estado": "23"
},
     {
	"ID": "3927",
	"Nome": "Canela",
	"Estado": "23"
},
     {
	"ID": "3928",
	"Nome": "Canguçu",
	"Estado": "23"
},
     {
	"ID": "3929",
	"Nome": "Canoas",
	"Estado": "23"
},
     {
	"ID": "3930",
	"Nome": "Canudos do Vale",
	"Estado": "23"
},
     {
	"ID": "3931",
	"Nome": "Capão Bonito do Sul",
	"Estado": "23"
},
     {
	"ID": "3932",
	"Nome": "Capão da Canoa",
	"Estado": "23"
},
     {
	"ID": "3933",
	"Nome": "Capão do Cipó",
	"Estado": "23"
},
     {
	"ID": "3934",
	"Nome": "Capão do Leão",
	"Estado": "23"
},
     {
	"ID": "3935",
	"Nome": "Capela de Santana",
	"Estado": "23"
},
     {
	"ID": "3936",
	"Nome": "Capitão",
	"Estado": "23"
},
     {
	"ID": "3937",
	"Nome": "Capivari do Sul",
	"Estado": "23"
},
     {
	"ID": "3938",
	"Nome": "Caraá",
	"Estado": "23"
},
     {
	"ID": "3939",
	"Nome": "Carazinho",
	"Estado": "23"
},
     {
	"ID": "3940",
	"Nome": "Carlos Barbosa",
	"Estado": "23"
},
     {
	"ID": "3941",
	"Nome": "Carlos Gomes",
	"Estado": "23"
},
     {
	"ID": "3942",
	"Nome": "Casca",
	"Estado": "23"
},
     {
	"ID": "3943",
	"Nome": "Caseiros",
	"Estado": "23"
},
     {
	"ID": "3944",
	"Nome": "Catuípe",
	"Estado": "23"
},
     {
	"ID": "3945",
	"Nome": "Caxias do Sul",
	"Estado": "23"
},
     {
	"ID": "3946",
	"Nome": "Centenário",
	"Estado": "23"
},
     {
	"ID": "3947",
	"Nome": "Cerrito",
	"Estado": "23"
},
     {
	"ID": "3948",
	"Nome": "Cerro Branco",
	"Estado": "23"
},
     {
	"ID": "3949",
	"Nome": "Cerro Grande",
	"Estado": "23"
},
     {
	"ID": "3950",
	"Nome": "Cerro Grande do Sul",
	"Estado": "23"
},
     {
	"ID": "3951",
	"Nome": "Cerro Largo",
	"Estado": "23"
},
     {
	"ID": "3952",
	"Nome": "Chapada",
	"Estado": "23"
},
     {
	"ID": "3953",
	"Nome": "Charqueadas",
	"Estado": "23"
},
     {
	"ID": "3954",
	"Nome": "Charrua",
	"Estado": "23"
},
     {
	"ID": "3955",
	"Nome": "Chiapeta",
	"Estado": "23"
},
     {
	"ID": "3956",
	"Nome": "Chuí",
	"Estado": "23"
},
     {
	"ID": "3957",
	"Nome": "Chuvisca",
	"Estado": "23"
},
     {
	"ID": "3958",
	"Nome": "Cidreira",
	"Estado": "23"
},
     {
	"ID": "3959",
	"Nome": "Ciríaco",
	"Estado": "23"
},
     {
	"ID": "3960",
	"Nome": "Colinas",
	"Estado": "23"
},
     {
	"ID": "3961",
	"Nome": "Colorado",
	"Estado": "23"
},
     {
	"ID": "3962",
	"Nome": "Condor",
	"Estado": "23"
},
     {
	"ID": "3963",
	"Nome": "Constantina",
	"Estado": "23"
},
     {
	"ID": "3964",
	"Nome": "Coqueiro Baixo",
	"Estado": "23"
},
     {
	"ID": "3965",
	"Nome": "Coqueiros do Sul",
	"Estado": "23"
},
     {
	"ID": "3966",
	"Nome": "Coronel Barros",
	"Estado": "23"
},
     {
	"ID": "3967",
	"Nome": "Coronel Bicaco",
	"Estado": "23"
},
     {
	"ID": "3968",
	"Nome": "Coronel Pilar",
	"Estado": "23"
},
     {
	"ID": "3969",
	"Nome": "Cotiporã",
	"Estado": "23"
},
     {
	"ID": "3970",
	"Nome": "Coxilha",
	"Estado": "23"
},
     {
	"ID": "3971",
	"Nome": "Crissiumal",
	"Estado": "23"
},
     {
	"ID": "3972",
	"Nome": "Cristal",
	"Estado": "23"
},
     {
	"ID": "3973",
	"Nome": "Cristal do Sul",
	"Estado": "23"
},
     {
	"ID": "3974",
	"Nome": "Cruz Alta",
	"Estado": "23"
},
     {
	"ID": "3975",
	"Nome": "Cruzaltense",
	"Estado": "23"
},
     {
	"ID": "3976",
	"Nome": "Cruzeiro do Sul",
	"Estado": "23"
},
     {
	"ID": "3977",
	"Nome": "David Canabarro",
	"Estado": "23"
},
     {
	"ID": "3978",
	"Nome": "Derrubadas",
	"Estado": "23"
},
     {
	"ID": "3979",
	"Nome": "Dezesseis de Novembro",
	"Estado": "23"
},
     {
	"ID": "3980",
	"Nome": "Dilermando de Aguiar",
	"Estado": "23"
},
     {
	"ID": "3981",
	"Nome": "Dois Irmãos",
	"Estado": "23"
},
     {
	"ID": "3982",
	"Nome": "Dois Irmãos das Missões",
	"Estado": "23"
},
     {
	"ID": "3983",
	"Nome": "Dois Lajeados",
	"Estado": "23"
},
     {
	"ID": "3984",
	"Nome": "Dom Feliciano",
	"Estado": "23"
},
     {
	"ID": "3985",
	"Nome": "Dom Pedrito",
	"Estado": "23"
},
     {
	"ID": "3986",
	"Nome": "Dom Pedro de Alcântara",
	"Estado": "23"
},
     {
	"ID": "3987",
	"Nome": "Dona Francisca",
	"Estado": "23"
},
     {
	"ID": "3988",
	"Nome": "Doutor Maurício Cardoso",
	"Estado": "23"
},
     {
	"ID": "3989",
	"Nome": "Doutor Ricardo",
	"Estado": "23"
},
     {
	"ID": "3990",
	"Nome": "Eldorado do Sul",
	"Estado": "23"
},
     {
	"ID": "3991",
	"Nome": "Encantado",
	"Estado": "23"
},
     {
	"ID": "3992",
	"Nome": "Encruzilhada do Sul",
	"Estado": "23"
},
     {
	"ID": "3993",
	"Nome": "Engenho Velho",
	"Estado": "23"
},
     {
	"ID": "3994",
	"Nome": "Entre Rios do Sul",
	"Estado": "23"
},
     {
	"ID": "3995",
	"Nome": "Entre-Ijuís",
	"Estado": "23"
},
     {
	"ID": "3996",
	"Nome": "Erebango",
	"Estado": "23"
},
     {
	"ID": "3997",
	"Nome": "Erechim",
	"Estado": "23"
},
     {
	"ID": "3998",
	"Nome": "Ernestina",
	"Estado": "23"
},
     {
	"ID": "3999",
	"Nome": "Erval Grande",
	"Estado": "23"
},
     {
	"ID": "4000",
	"Nome": "Erval Seco",
	"Estado": "23"
},
     {
	"ID": "4001",
	"Nome": "Esmeralda",
	"Estado": "23"
},
     {
	"ID": "4002",
	"Nome": "Esperança do Sul",
	"Estado": "23"
},
     {
	"ID": "4003",
	"Nome": "Espumoso",
	"Estado": "23"
},
     {
	"ID": "4004",
	"Nome": "Estação",
	"Estado": "23"
},
     {
	"ID": "4005",
	"Nome": "Estância Velha",
	"Estado": "23"
},
     {
	"ID": "4006",
	"Nome": "Esteio",
	"Estado": "23"
},
     {
	"ID": "4007",
	"Nome": "Estrela",
	"Estado": "23"
},
     {
	"ID": "4008",
	"Nome": "Estrela Velha",
	"Estado": "23"
},
     {
	"ID": "4009",
	"Nome": "Eugênio de Castro",
	"Estado": "23"
},
     {
	"ID": "4010",
	"Nome": "Fagundes Varela",
	"Estado": "23"
},
     {
	"ID": "4011",
	"Nome": "Farroupilha",
	"Estado": "23"
},
     {
	"ID": "4012",
	"Nome": "Faxinal do Soturno",
	"Estado": "23"
},
     {
	"ID": "4013",
	"Nome": "Faxinalzinho",
	"Estado": "23"
},
     {
	"ID": "4014",
	"Nome": "Fazenda Vilanova",
	"Estado": "23"
},
     {
	"ID": "4015",
	"Nome": "Feliz",
	"Estado": "23"
},
     {
	"ID": "4016",
	"Nome": "Flores da Cunha",
	"Estado": "23"
},
     {
	"ID": "4017",
	"Nome": "Floriano Peixoto",
	"Estado": "23"
},
     {
	"ID": "4018",
	"Nome": "Fontoura Xavier",
	"Estado": "23"
},
     {
	"ID": "4019",
	"Nome": "Formigueiro",
	"Estado": "23"
},
     {
	"ID": "4020",
	"Nome": "Forquetinha",
	"Estado": "23"
},
     {
	"ID": "4021",
	"Nome": "Fortaleza dos Valos",
	"Estado": "23"
},
     {
	"ID": "4022",
	"Nome": "Frederico Westphalen",
	"Estado": "23"
},
     {
	"ID": "4023",
	"Nome": "Garibaldi",
	"Estado": "23"
},
     {
	"ID": "4024",
	"Nome": "Garruchos",
	"Estado": "23"
},
     {
	"ID": "4025",
	"Nome": "Gaurama",
	"Estado": "23"
},
     {
	"ID": "4026",
	"Nome": "General Câmara",
	"Estado": "23"
},
     {
	"ID": "4027",
	"Nome": "Gentil",
	"Estado": "23"
},
     {
	"ID": "4028",
	"Nome": "Getúlio Vargas",
	"Estado": "23"
},
     {
	"ID": "4029",
	"Nome": "Giruá",
	"Estado": "23"
},
     {
	"ID": "4030",
	"Nome": "Glorinha",
	"Estado": "23"
},
     {
	"ID": "4031",
	"Nome": "Gramado",
	"Estado": "23"
},
     {
	"ID": "4032",
	"Nome": "Gramado dos Loureiros",
	"Estado": "23"
},
     {
	"ID": "4033",
	"Nome": "Gramado Xavier",
	"Estado": "23"
},
     {
	"ID": "4034",
	"Nome": "Gravataí",
	"Estado": "23"
},
     {
	"ID": "4035",
	"Nome": "Guabiju",
	"Estado": "23"
},
     {
	"ID": "4036",
	"Nome": "Guaíba",
	"Estado": "23"
},
     {
	"ID": "4037",
	"Nome": "Guaporé",
	"Estado": "23"
},
     {
	"ID": "4038",
	"Nome": "Guarani das Missões",
	"Estado": "23"
},
     {
	"ID": "4039",
	"Nome": "Harmonia",
	"Estado": "23"
},
     {
	"ID": "4040",
	"Nome": "Herval",
	"Estado": "23"
},
     {
	"ID": "4041",
	"Nome": "Herveiras",
	"Estado": "23"
},
     {
	"ID": "4042",
	"Nome": "Horizontina",
	"Estado": "23"
},
     {
	"ID": "4043",
	"Nome": "Hulha Negra",
	"Estado": "23"
},
     {
	"ID": "4044",
	"Nome": "Humaitá",
	"Estado": "23"
},
     {
	"ID": "4045",
	"Nome": "Ibarama",
	"Estado": "23"
},
     {
	"ID": "4046",
	"Nome": "Ibiaçá",
	"Estado": "23"
},
     {
	"ID": "4047",
	"Nome": "Ibiraiaras",
	"Estado": "23"
},
     {
	"ID": "4048",
	"Nome": "Ibirapuitã",
	"Estado": "23"
},
     {
	"ID": "4049",
	"Nome": "Ibirubá",
	"Estado": "23"
},
     {
	"ID": "4050",
	"Nome": "Igrejinha",
	"Estado": "23"
},
     {
	"ID": "4051",
	"Nome": "Ijuí",
	"Estado": "23"
},
     {
	"ID": "4052",
	"Nome": "Ilópolis",
	"Estado": "23"
},
     {
	"ID": "4053",
	"Nome": "Imbé",
	"Estado": "23"
},
     {
	"ID": "4054",
	"Nome": "Imigrante",
	"Estado": "23"
},
     {
	"ID": "4055",
	"Nome": "Independência",
	"Estado": "23"
},
     {
	"ID": "4056",
	"Nome": "Inhacorá",
	"Estado": "23"
},
     {
	"ID": "4057",
	"Nome": "Ipê",
	"Estado": "23"
},
     {
	"ID": "4058",
	"Nome": "Ipiranga do Sul",
	"Estado": "23"
},
     {
	"ID": "4059",
	"Nome": "Iraí",
	"Estado": "23"
},
     {
	"ID": "4060",
	"Nome": "Itaara",
	"Estado": "23"
},
     {
	"ID": "4061",
	"Nome": "Itacurubi",
	"Estado": "23"
},
     {
	"ID": "4062",
	"Nome": "Itapuca",
	"Estado": "23"
},
     {
	"ID": "4063",
	"Nome": "Itaqui",
	"Estado": "23"
},
     {
	"ID": "4064",
	"Nome": "Itati",
	"Estado": "23"
},
     {
	"ID": "4065",
	"Nome": "Itatiba do Sul",
	"Estado": "23"
},
     {
	"ID": "4066",
	"Nome": "Ivorá",
	"Estado": "23"
},
     {
	"ID": "4067",
	"Nome": "Ivoti",
	"Estado": "23"
},
     {
	"ID": "4068",
	"Nome": "Jaboticaba",
	"Estado": "23"
},
     {
	"ID": "4069",
	"Nome": "Jacuizinho",
	"Estado": "23"
},
     {
	"ID": "4070",
	"Nome": "Jacutinga",
	"Estado": "23"
},
     {
	"ID": "4071",
	"Nome": "Jaguarão",
	"Estado": "23"
},
     {
	"ID": "4072",
	"Nome": "Jaguari",
	"Estado": "23"
},
     {
	"ID": "4073",
	"Nome": "Jaquirana",
	"Estado": "23"
},
     {
	"ID": "4074",
	"Nome": "Jari",
	"Estado": "23"
},
     {
	"ID": "4075",
	"Nome": "Jóia",
	"Estado": "23"
},
     {
	"ID": "4076",
	"Nome": "Júlio de Castilhos",
	"Estado": "23"
},
     {
	"ID": "4077",
	"Nome": "Lagoa Bonita do Sul",
	"Estado": "23"
},
     {
	"ID": "4078",
	"Nome": "Lagoa dos Três Cantos",
	"Estado": "23"
},
     {
	"ID": "4079",
	"Nome": "Lagoa Vermelha",
	"Estado": "23"
},
     {
	"ID": "4080",
	"Nome": "Lagoão",
	"Estado": "23"
},
     {
	"ID": "4081",
	"Nome": "Lajeado",
	"Estado": "23"
},
     {
	"ID": "4082",
	"Nome": "Lajeado do Bugre",
	"Estado": "23"
},
     {
	"ID": "4083",
	"Nome": "Lavras do Sul",
	"Estado": "23"
},
     {
	"ID": "4084",
	"Nome": "Liberato Salzano",
	"Estado": "23"
},
     {
	"ID": "4085",
	"Nome": "Lindolfo Collor",
	"Estado": "23"
},
     {
	"ID": "4086",
	"Nome": "Linha Nova",
	"Estado": "23"
},
     {
	"ID": "4087",
	"Nome": "Maçambara",
	"Estado": "23"
},
     {
	"ID": "4088",
	"Nome": "Machadinho",
	"Estado": "23"
},
     {
	"ID": "4089",
	"Nome": "Mampituba",
	"Estado": "23"
},
     {
	"ID": "4090",
	"Nome": "Manoel Viana",
	"Estado": "23"
},
     {
	"ID": "4091",
	"Nome": "Maquiné",
	"Estado": "23"
},
     {
	"ID": "4092",
	"Nome": "Maratá",
	"Estado": "23"
},
     {
	"ID": "4093",
	"Nome": "Marau",
	"Estado": "23"
},
     {
	"ID": "4094",
	"Nome": "Marcelino Ramos",
	"Estado": "23"
},
     {
	"ID": "4095",
	"Nome": "Mariana Pimentel",
	"Estado": "23"
},
     {
	"ID": "4096",
	"Nome": "Mariano Moro",
	"Estado": "23"
},
     {
	"ID": "4097",
	"Nome": "Marques de Souza",
	"Estado": "23"
},
     {
	"ID": "4098",
	"Nome": "Mata",
	"Estado": "23"
},
     {
	"ID": "4099",
	"Nome": "Mato Castelhano",
	"Estado": "23"
},
     {
	"ID": "4100",
	"Nome": "Mato Leitão",
	"Estado": "23"
},
     {
	"ID": "4101",
	"Nome": "Mato Queimado",
	"Estado": "23"
},
     {
	"ID": "4102",
	"Nome": "Maximiliano de Almeida",
	"Estado": "23"
},
     {
	"ID": "4103",
	"Nome": "Minas do Leão",
	"Estado": "23"
},
     {
	"ID": "4104",
	"Nome": "Miraguaí",
	"Estado": "23"
},
     {
	"ID": "4105",
	"Nome": "Montauri",
	"Estado": "23"
},
     {
	"ID": "4106",
	"Nome": "Monte Alegre dos Campos",
	"Estado": "23"
},
     {
	"ID": "4107",
	"Nome": "Monte Belo do Sul",
	"Estado": "23"
},
     {
	"ID": "4108",
	"Nome": "Montenegro",
	"Estado": "23"
},
     {
	"ID": "4109",
	"Nome": "Mormaço",
	"Estado": "23"
},
     {
	"ID": "4110",
	"Nome": "Morrinhos do Sul",
	"Estado": "23"
},
     {
	"ID": "4111",
	"Nome": "Morro Redondo",
	"Estado": "23"
},
     {
	"ID": "4112",
	"Nome": "Morro Reuter",
	"Estado": "23"
},
     {
	"ID": "4113",
	"Nome": "Mostardas",
	"Estado": "23"
},
     {
	"ID": "4114",
	"Nome": "Muçum",
	"Estado": "23"
},
     {
	"ID": "4115",
	"Nome": "Muitos Capões",
	"Estado": "23"
},
     {
	"ID": "4116",
	"Nome": "Muliterno",
	"Estado": "23"
},
     {
	"ID": "4117",
	"Nome": "Não-Me-Toque",
	"Estado": "23"
},
     {
	"ID": "4118",
	"Nome": "Nicolau Vergueiro",
	"Estado": "23"
},
     {
	"ID": "4119",
	"Nome": "Nonoai",
	"Estado": "23"
},
     {
	"ID": "4120",
	"Nome": "Nova Alvorada",
	"Estado": "23"
},
     {
	"ID": "4121",
	"Nome": "Nova Araçá",
	"Estado": "23"
},
     {
	"ID": "4122",
	"Nome": "Nova Bassano",
	"Estado": "23"
},
     {
	"ID": "4123",
	"Nome": "Nova Boa Vista",
	"Estado": "23"
},
     {
	"ID": "4124",
	"Nome": "Nova Bréscia",
	"Estado": "23"
},
     {
	"ID": "4125",
	"Nome": "Nova Candelária",
	"Estado": "23"
},
     {
	"ID": "4126",
	"Nome": "Nova Esperança do Sul",
	"Estado": "23"
},
     {
	"ID": "4127",
	"Nome": "Nova Hartz",
	"Estado": "23"
},
     {
	"ID": "4128",
	"Nome": "Nova Pádua",
	"Estado": "23"
},
     {
	"ID": "4129",
	"Nome": "Nova Palma",
	"Estado": "23"
},
     {
	"ID": "4130",
	"Nome": "Nova Petrópolis",
	"Estado": "23"
},
     {
	"ID": "4131",
	"Nome": "Nova Prata",
	"Estado": "23"
},
     {
	"ID": "4132",
	"Nome": "Nova Ramada",
	"Estado": "23"
},
     {
	"ID": "4133",
	"Nome": "Nova Roma do Sul",
	"Estado": "23"
},
     {
	"ID": "4134",
	"Nome": "Nova Santa Rita",
	"Estado": "23"
},
     {
	"ID": "4135",
	"Nome": "Novo Barreiro",
	"Estado": "23"
},
     {
	"ID": "4136",
	"Nome": "Novo Cabrais",
	"Estado": "23"
},
     {
	"ID": "4137",
	"Nome": "Novo Hamburgo",
	"Estado": "23"
},
     {
	"ID": "4138",
	"Nome": "Novo Machado",
	"Estado": "23"
},
     {
	"ID": "4139",
	"Nome": "Novo Tiradentes",
	"Estado": "23"
},
     {
	"ID": "4140",
	"Nome": "Novo Xingu",
	"Estado": "23"
},
     {
	"ID": "4141",
	"Nome": "Osório",
	"Estado": "23"
},
     {
	"ID": "4142",
	"Nome": "Paim Filho",
	"Estado": "23"
},
     {
	"ID": "4143",
	"Nome": "Palmares do Sul",
	"Estado": "23"
},
     {
	"ID": "4144",
	"Nome": "Palmeira das Missões",
	"Estado": "23"
},
     {
	"ID": "4145",
	"Nome": "Palmitinho",
	"Estado": "23"
},
     {
	"ID": "4146",
	"Nome": "Panambi",
	"Estado": "23"
},
     {
	"ID": "4147",
	"Nome": "Pantano Grande",
	"Estado": "23"
},
     {
	"ID": "4148",
	"Nome": "Paraí",
	"Estado": "23"
},
     {
	"ID": "4149",
	"Nome": "Paraíso do Sul",
	"Estado": "23"
},
     {
	"ID": "4150",
	"Nome": "Pareci Novo",
	"Estado": "23"
},
     {
	"ID": "4151",
	"Nome": "Parobé",
	"Estado": "23"
},
     {
	"ID": "4152",
	"Nome": "Passa Sete",
	"Estado": "23"
},
     {
	"ID": "4153",
	"Nome": "Passo do Sobrado",
	"Estado": "23"
},
     {
	"ID": "4154",
	"Nome": "Passo Fundo",
	"Estado": "23"
},
     {
	"ID": "4155",
	"Nome": "Paulo Bento",
	"Estado": "23"
},
     {
	"ID": "4156",
	"Nome": "Paverama",
	"Estado": "23"
},
     {
	"ID": "4157",
	"Nome": "Pedras Altas",
	"Estado": "23"
},
     {
	"ID": "4158",
	"Nome": "Pedro Osório",
	"Estado": "23"
},
     {
	"ID": "4159",
	"Nome": "Pejuçara",
	"Estado": "23"
},
     {
	"ID": "4160",
	"Nome": "Pelotas",
	"Estado": "23"
},
     {
	"ID": "4161",
	"Nome": "Picada Café",
	"Estado": "23"
},
     {
	"ID": "4162",
	"Nome": "Pinhal",
	"Estado": "23"
},
     {
	"ID": "4163",
	"Nome": "Pinhal da Serra",
	"Estado": "23"
},
     {
	"ID": "4164",
	"Nome": "Pinhal Grande",
	"Estado": "23"
},
     {
	"ID": "4165",
	"Nome": "Pinheirinho do Vale",
	"Estado": "23"
},
     {
	"ID": "4166",
	"Nome": "Pinheiro Machado",
	"Estado": "23"
},
     {
	"ID": "4167",
	"Nome": "Pirapó",
	"Estado": "23"
},
     {
	"ID": "4168",
	"Nome": "Piratini",
	"Estado": "23"
},
     {
	"ID": "4169",
	"Nome": "Planalto",
	"Estado": "23"
},
     {
	"ID": "4170",
	"Nome": "Poço das Antas",
	"Estado": "23"
},
     {
	"ID": "4171",
	"Nome": "Pontão",
	"Estado": "23"
},
     {
	"ID": "4172",
	"Nome": "Ponte Preta",
	"Estado": "23"
},
     {
	"ID": "4173",
	"Nome": "Portão",
	"Estado": "23"
},
     {
	"ID": "4174",
	"Nome": "Porto Alegre",
	"Estado": "23"
},
     {
	"ID": "4175",
	"Nome": "Porto Lucena",
	"Estado": "23"
},
     {
	"ID": "4176",
	"Nome": "Porto Mauá",
	"Estado": "23"
},
     {
	"ID": "4177",
	"Nome": "Porto Vera Cruz",
	"Estado": "23"
},
     {
	"ID": "4178",
	"Nome": "Porto Xavier",
	"Estado": "23"
},
     {
	"ID": "4179",
	"Nome": "Pouso Novo",
	"Estado": "23"
},
     {
	"ID": "4180",
	"Nome": "Presidente Lucena",
	"Estado": "23"
},
     {
	"ID": "4181",
	"Nome": "Progresso",
	"Estado": "23"
},
     {
	"ID": "4182",
	"Nome": "Protásio Alves",
	"Estado": "23"
},
     {
	"ID": "4183",
	"Nome": "Putinga",
	"Estado": "23"
},
     {
	"ID": "4184",
	"Nome": "Quaraí",
	"Estado": "23"
},
     {
	"ID": "4185",
	"Nome": "Quatro Irmãos",
	"Estado": "23"
},
     {
	"ID": "4186",
	"Nome": "Quevedos",
	"Estado": "23"
},
     {
	"ID": "4187",
	"Nome": "Quinze de Novembro",
	"Estado": "23"
},
     {
	"ID": "4188",
	"Nome": "Redentora",
	"Estado": "23"
},
     {
	"ID": "4189",
	"Nome": "Relvado",
	"Estado": "23"
},
     {
	"ID": "4190",
	"Nome": "Restinga Seca",
	"Estado": "23"
},
     {
	"ID": "4191",
	"Nome": "Rio dos Índios",
	"Estado": "23"
},
     {
	"ID": "4192",
	"Nome": "Rio Grande",
	"Estado": "23"
},
     {
	"ID": "4193",
	"Nome": "Rio Pardo",
	"Estado": "23"
},
     {
	"ID": "4194",
	"Nome": "Riozinho",
	"Estado": "23"
},
     {
	"ID": "4195",
	"Nome": "Roca Sales",
	"Estado": "23"
},
     {
	"ID": "4196",
	"Nome": "Rodeio Bonito",
	"Estado": "23"
},
     {
	"ID": "4197",
	"Nome": "Rolador",
	"Estado": "23"
},
     {
	"ID": "4198",
	"Nome": "Rolante",
	"Estado": "23"
},
     {
	"ID": "4199",
	"Nome": "Ronda Alta",
	"Estado": "23"
},
     {
	"ID": "4200",
	"Nome": "Rondinha",
	"Estado": "23"
},
     {
	"ID": "4201",
	"Nome": "Roque Gonzales",
	"Estado": "23"
},
     {
	"ID": "4202",
	"Nome": "Rosário do Sul",
	"Estado": "23"
},
     {
	"ID": "4203",
	"Nome": "Sagrada Família",
	"Estado": "23"
},
     {
	"ID": "4204",
	"Nome": "Saldanha Marinho",
	"Estado": "23"
},
     {
	"ID": "4205",
	"Nome": "Salto do Jacuí",
	"Estado": "23"
},
     {
	"ID": "4206",
	"Nome": "Salvador das Missões",
	"Estado": "23"
},
     {
	"ID": "4207",
	"Nome": "Salvador do Sul",
	"Estado": "23"
},
     {
	"ID": "4208",
	"Nome": "Sananduva",
	"Estado": "23"
},
     {
	"ID": "4209",
	"Nome": "Santa Bárbara do Sul",
	"Estado": "23"
},
     {
	"ID": "4210",
	"Nome": "Santa Cecília do Sul",
	"Estado": "23"
},
     {
	"ID": "4211",
	"Nome": "Santa Clara do Sul",
	"Estado": "23"
},
     {
	"ID": "4212",
	"Nome": "Santa Cruz do Sul",
	"Estado": "23"
},
     {
	"ID": "4213",
	"Nome": "Santa Margarida do Sul",
	"Estado": "23"
},
     {
	"ID": "4214",
	"Nome": "Santa Maria",
	"Estado": "23"
},
     {
	"ID": "4215",
	"Nome": "Santa Maria do Herval",
	"Estado": "23"
},
     {
	"ID": "4216",
	"Nome": "Santa Rosa",
	"Estado": "23"
},
     {
	"ID": "4217",
	"Nome": "Santa Tereza",
	"Estado": "23"
},
     {
	"ID": "4218",
	"Nome": "Santa Vitória do Palmar",
	"Estado": "23"
},
     {
	"ID": "4219",
	"Nome": "Santana da Boa Vista",
	"Estado": "23"
},
     {
	"ID": "4220",
	"Nome": "Santana do Livramento",
	"Estado": "23"
},
     {
	"ID": "4221",
	"Nome": "Santiago",
	"Estado": "23"
},
     {
	"ID": "4222",
	"Nome": "Santo Ângelo",
	"Estado": "23"
},
     {
	"ID": "4223",
	"Nome": "Santo Antônio da Patrulha",
	"Estado": "23"
},
     {
	"ID": "4224",
	"Nome": "Santo Antônio das Missões",
	"Estado": "23"
},
     {
	"ID": "4225",
	"Nome": "Santo Antônio do Palma",
	"Estado": "23"
},
     {
	"ID": "4226",
	"Nome": "Santo Antônio do Planalto",
	"Estado": "23"
},
     {
	"ID": "4227",
	"Nome": "Santo Augusto",
	"Estado": "23"
},
     {
	"ID": "4228",
	"Nome": "Santo Cristo",
	"Estado": "23"
},
     {
	"ID": "4229",
	"Nome": "Santo Expedito do Sul",
	"Estado": "23"
},
     {
	"ID": "4230",
	"Nome": "São Borja",
	"Estado": "23"
},
     {
	"ID": "4231",
	"Nome": "São Domingos do Sul",
	"Estado": "23"
},
     {
	"ID": "4232",
	"Nome": "São Francisco de Assis",
	"Estado": "23"
},
     {
	"ID": "4233",
	"Nome": "São Francisco de Paula",
	"Estado": "23"
},
     {
	"ID": "4234",
	"Nome": "São Gabriel",
	"Estado": "23"
},
     {
	"ID": "4235",
	"Nome": "São Jerônimo",
	"Estado": "23"
},
     {
	"ID": "4236",
	"Nome": "São João da Urtiga",
	"Estado": "23"
},
     {
	"ID": "4237",
	"Nome": "São João do Polêsine",
	"Estado": "23"
},
     {
	"ID": "4238",
	"Nome": "São Jorge",
	"Estado": "23"
},
     {
	"ID": "4239",
	"Nome": "São José das Missões",
	"Estado": "23"
},
     {
	"ID": "4240",
	"Nome": "São José do Herval",
	"Estado": "23"
},
     {
	"ID": "4241",
	"Nome": "São José do Hortêncio",
	"Estado": "23"
},
     {
	"ID": "4242",
	"Nome": "São José do Inhacorá",
	"Estado": "23"
},
     {
	"ID": "4243",
	"Nome": "São José do Norte",
	"Estado": "23"
},
     {
	"ID": "4244",
	"Nome": "São José do Ouro",
	"Estado": "23"
},
     {
	"ID": "4245",
	"Nome": "São José do Sul",
	"Estado": "23"
},
     {
	"ID": "4246",
	"Nome": "São José dos Ausentes",
	"Estado": "23"
},
     {
	"ID": "4247",
	"Nome": "São Leopoldo",
	"Estado": "23"
},
     {
	"ID": "4248",
	"Nome": "São Lourenço do Sul",
	"Estado": "23"
},
     {
	"ID": "4249",
	"Nome": "São Luiz Gonzaga",
	"Estado": "23"
},
     {
	"ID": "4250",
	"Nome": "São Marcos",
	"Estado": "23"
},
     {
	"ID": "4251",
	"Nome": "São Martinho",
	"Estado": "23"
},
     {
	"ID": "4252",
	"Nome": "São Martinho da Serra",
	"Estado": "23"
},
     {
	"ID": "4253",
	"Nome": "São Miguel das Missões",
	"Estado": "23"
},
     {
	"ID": "4254",
	"Nome": "São Nicolau",
	"Estado": "23"
},
     {
	"ID": "4255",
	"Nome": "São Paulo das Missões",
	"Estado": "23"
},
     {
	"ID": "4256",
	"Nome": "São Pedro da Serra",
	"Estado": "23"
},
     {
	"ID": "4257",
	"Nome": "São Pedro das Missões",
	"Estado": "23"
},
     {
	"ID": "4258",
	"Nome": "São Pedro do Butiá",
	"Estado": "23"
},
     {
	"ID": "4259",
	"Nome": "São Pedro do Sul",
	"Estado": "23"
},
     {
	"ID": "4260",
	"Nome": "São Sebastião do Caí",
	"Estado": "23"
},
     {
	"ID": "4261",
	"Nome": "São Sepé",
	"Estado": "23"
},
     {
	"ID": "4262",
	"Nome": "São Valentim",
	"Estado": "23"
},
     {
	"ID": "4263",
	"Nome": "São Valentim do Sul",
	"Estado": "23"
},
     {
	"ID": "4264",
	"Nome": "São Valério do Sul",
	"Estado": "23"
},
     {
	"ID": "4265",
	"Nome": "São Vendelino",
	"Estado": "23"
},
     {
	"ID": "4266",
	"Nome": "São Vicente do Sul",
	"Estado": "23"
},
     {
	"ID": "4267",
	"Nome": "Sapiranga",
	"Estado": "23"
},
     {
	"ID": "4268",
	"Nome": "Sapucaia do Sul",
	"Estado": "23"
},
     {
	"ID": "4269",
	"Nome": "Sarandi",
	"Estado": "23"
},
     {
	"ID": "4270",
	"Nome": "Seberi",
	"Estado": "23"
},
     {
	"ID": "4271",
	"Nome": "Sede Nova",
	"Estado": "23"
},
     {
	"ID": "4272",
	"Nome": "Segredo",
	"Estado": "23"
},
     {
	"ID": "4273",
	"Nome": "Selbach",
	"Estado": "23"
},
     {
	"ID": "4274",
	"Nome": "Senador Salgado Filho",
	"Estado": "23"
},
     {
	"ID": "4275",
	"Nome": "Sentinela do Sul",
	"Estado": "23"
},
     {
	"ID": "4276",
	"Nome": "Serafina Corrêa",
	"Estado": "23"
},
     {
	"ID": "4277",
	"Nome": "Sério",
	"Estado": "23"
},
     {
	"ID": "4278",
	"Nome": "Sertão",
	"Estado": "23"
},
     {
	"ID": "4279",
	"Nome": "Sertão Santana",
	"Estado": "23"
},
     {
	"ID": "4280",
	"Nome": "Sete de Setembro",
	"Estado": "23"
},
     {
	"ID": "4281",
	"Nome": "Severiano de Almeida",
	"Estado": "23"
},
     {
	"ID": "4282",
	"Nome": "Silveira Martins",
	"Estado": "23"
},
     {
	"ID": "4283",
	"Nome": "Sinimbu",
	"Estado": "23"
},
     {
	"ID": "4284",
	"Nome": "Sobradinho",
	"Estado": "23"
},
     {
	"ID": "4285",
	"Nome": "Soledade",
	"Estado": "23"
},
     {
	"ID": "4286",
	"Nome": "Tabaí",
	"Estado": "23"
},
     {
	"ID": "4287",
	"Nome": "Tapejara",
	"Estado": "23"
},
     {
	"ID": "4288",
	"Nome": "Tapera",
	"Estado": "23"
},
     {
	"ID": "4289",
	"Nome": "Tapes",
	"Estado": "23"
},
     {
	"ID": "4290",
	"Nome": "Taquara",
	"Estado": "23"
},
     {
	"ID": "4291",
	"Nome": "Taquari",
	"Estado": "23"
},
     {
	"ID": "4292",
	"Nome": "Taquaruçu do Sul",
	"Estado": "23"
},
     {
	"ID": "4293",
	"Nome": "Tavares",
	"Estado": "23"
},
     {
	"ID": "4294",
	"Nome": "Tenente Portela",
	"Estado": "23"
},
     {
	"ID": "4295",
	"Nome": "Terra de Areia",
	"Estado": "23"
},
     {
	"ID": "4296",
	"Nome": "Teutônia",
	"Estado": "23"
},
     {
	"ID": "4297",
	"Nome": "Tio Hugo",
	"Estado": "23"
},
     {
	"ID": "4298",
	"Nome": "Tiradentes do Sul",
	"Estado": "23"
},
     {
	"ID": "4299",
	"Nome": "Toropi",
	"Estado": "23"
},
     {
	"ID": "4300",
	"Nome": "Torres",
	"Estado": "23"
},
     {
	"ID": "4301",
	"Nome": "Tramandaí",
	"Estado": "23"
},
     {
	"ID": "4302",
	"Nome": "Travesseiro",
	"Estado": "23"
},
     {
	"ID": "4303",
	"Nome": "Três Arroios",
	"Estado": "23"
},
     {
	"ID": "4304",
	"Nome": "Três Cachoeiras",
	"Estado": "23"
},
     {
	"ID": "4305",
	"Nome": "Três Coroas",
	"Estado": "23"
},
     {
	"ID": "4306",
	"Nome": "Três de Maio",
	"Estado": "23"
},
     {
	"ID": "4307",
	"Nome": "Três Forquilhas",
	"Estado": "23"
},
     {
	"ID": "4308",
	"Nome": "Três Palmeiras",
	"Estado": "23"
},
     {
	"ID": "4309",
	"Nome": "Três Passos",
	"Estado": "23"
},
     {
	"ID": "4310",
	"Nome": "Trindade do Sul",
	"Estado": "23"
},
     {
	"ID": "4311",
	"Nome": "Triunfo",
	"Estado": "23"
},
     {
	"ID": "4312",
	"Nome": "Tucunduva",
	"Estado": "23"
},
     {
	"ID": "4313",
	"Nome": "Tunas",
	"Estado": "23"
},
     {
	"ID": "4314",
	"Nome": "Tupanci do Sul",
	"Estado": "23"
},
     {
	"ID": "4315",
	"Nome": "Tupanciretã",
	"Estado": "23"
},
     {
	"ID": "4316",
	"Nome": "Tupandi",
	"Estado": "23"
},
     {
	"ID": "4317",
	"Nome": "Tuparendi",
	"Estado": "23"
},
     {
	"ID": "4318",
	"Nome": "Turuçu",
	"Estado": "23"
},
     {
	"ID": "4319",
	"Nome": "Ubiretama",
	"Estado": "23"
},
     {
	"ID": "4320",
	"Nome": "União da Serra",
	"Estado": "23"
},
     {
	"ID": "4321",
	"Nome": "Unistalda",
	"Estado": "23"
},
     {
	"ID": "4322",
	"Nome": "Uruguaiana",
	"Estado": "23"
},
     {
	"ID": "4323",
	"Nome": "Vacaria",
	"Estado": "23"
},
     {
	"ID": "4324",
	"Nome": "Vale do Sol",
	"Estado": "23"
},
     {
	"ID": "4325",
	"Nome": "Vale Real",
	"Estado": "23"
},
     {
	"ID": "4326",
	"Nome": "Vale Verde",
	"Estado": "23"
},
     {
	"ID": "4327",
	"Nome": "Vanini",
	"Estado": "23"
},
     {
	"ID": "4328",
	"Nome": "Venâncio Aires",
	"Estado": "23"
},
     {
	"ID": "4329",
	"Nome": "Vera Cruz",
	"Estado": "23"
},
     {
	"ID": "4330",
	"Nome": "Veranópolis",
	"Estado": "23"
},
     {
	"ID": "4331",
	"Nome": "Vespasiano Correa",
	"Estado": "23"
},
     {
	"ID": "4332",
	"Nome": "Viadutos",
	"Estado": "23"
},
     {
	"ID": "4333",
	"Nome": "Viamão",
	"Estado": "23"
},
     {
	"ID": "4334",
	"Nome": "Vicente Dutra",
	"Estado": "23"
},
     {
	"ID": "4335",
	"Nome": "Victor Graeff",
	"Estado": "23"
},
     {
	"ID": "4336",
	"Nome": "Vila Flores",
	"Estado": "23"
},
     {
	"ID": "4337",
	"Nome": "Vila Lângaro",
	"Estado": "23"
},
     {
	"ID": "4338",
	"Nome": "Vila Maria",
	"Estado": "23"
},
     {
	"ID": "4339",
	"Nome": "Vila Nova do Sul",
	"Estado": "23"
},
     {
	"ID": "4340",
	"Nome": "Vista Alegre",
	"Estado": "23"
},
     {
	"ID": "4341",
	"Nome": "Vista Alegre do Prata",
	"Estado": "23"
},
     {
	"ID": "4342",
	"Nome": "Vista Gaúcha",
	"Estado": "23"
},
     {
	"ID": "4343",
	"Nome": "Vitória das Missões",
	"Estado": "23"
},
     {
	"ID": "4344",
	"Nome": "Westfália",
	"Estado": "23"
},
     {
	"ID": "4345",
	"Nome": "Xangri-lá",
	"Estado": "23"
},
     {
	"ID": "4346",
	"Nome": "Alta Floresta d`Oeste",
	"Estado": "21"
},
     {
	"ID": "4347",
	"Nome": "Alto Alegre dos Parecis",
	"Estado": "21"
},
     {
	"ID": "4348",
	"Nome": "Alto Paraíso",
	"Estado": "21"
},
     {
	"ID": "4349",
	"Nome": "Alvorada d`Oeste",
	"Estado": "21"
},
     {
	"ID": "4350",
	"Nome": "Ariquemes",
	"Estado": "21"
},
     {
	"ID": "4351",
	"Nome": "Buritis",
	"Estado": "21"
},
     {
	"ID": "4352",
	"Nome": "Cabixi",
	"Estado": "21"
},
     {
	"ID": "4353",
	"Nome": "Cacaulândia",
	"Estado": "21"
},
     {
	"ID": "4354",
	"Nome": "Cacoal",
	"Estado": "21"
},
     {
	"ID": "4355",
	"Nome": "Campo Novo de Rondônia",
	"Estado": "21"
},
     {
	"ID": "4356",
	"Nome": "Candeias do Jamari",
	"Estado": "21"
},
     {
	"ID": "4357",
	"Nome": "Castanheiras",
	"Estado": "21"
},
     {
	"ID": "4358",
	"Nome": "Cerejeiras",
	"Estado": "21"
},
     {
	"ID": "4359",
	"Nome": "Chupinguaia",
	"Estado": "21"
},
     {
	"ID": "4360",
	"Nome": "Colorado do Oeste",
	"Estado": "21"
},
     {
	"ID": "4361",
	"Nome": "Corumbiara",
	"Estado": "21"
},
     {
	"ID": "4362",
	"Nome": "Costa Marques",
	"Estado": "21"
},
     {
	"ID": "4363",
	"Nome": "Cujubim",
	"Estado": "21"
},
     {
	"ID": "4364",
	"Nome": "Espigão d`Oeste",
	"Estado": "21"
},
     {
	"ID": "4365",
	"Nome": "Governador Jorge Teixeira",
	"Estado": "21"
},
     {
	"ID": "4366",
	"Nome": "Guajará-Mirim",
	"Estado": "21"
},
     {
	"ID": "4367",
	"Nome": "Itapuã do Oeste",
	"Estado": "21"
},
     {
	"ID": "4368",
	"Nome": "Jaru",
	"Estado": "21"
},
     {
	"ID": "4369",
	"Nome": "Ji-Paraná",
	"Estado": "21"
},
     {
	"ID": "4370",
	"Nome": "Machadinho d`Oeste",
	"Estado": "21"
},
     {
	"ID": "4371",
	"Nome": "Ministro Andreazza",
	"Estado": "21"
},
     {
	"ID": "4372",
	"Nome": "Mirante da Serra",
	"Estado": "21"
},
     {
	"ID": "4373",
	"Nome": "Monte Negro",
	"Estado": "21"
},
     {
	"ID": "4374",
	"Nome": "Nova Brasilândia d`Oeste",
	"Estado": "21"
},
     {
	"ID": "4375",
	"Nome": "Nova Mamoré",
	"Estado": "21"
},
     {
	"ID": "4376",
	"Nome": "Nova União",
	"Estado": "21"
},
     {
	"ID": "4377",
	"Nome": "Novo Horizonte do Oeste",
	"Estado": "21"
},
     {
	"ID": "4378",
	"Nome": "Ouro Preto do Oeste",
	"Estado": "21"
},
     {
	"ID": "4379",
	"Nome": "Parecis",
	"Estado": "21"
},
     {
	"ID": "4380",
	"Nome": "Pimenta Bueno",
	"Estado": "21"
},
     {
	"ID": "4381",
	"Nome": "Pimenteiras do Oeste",
	"Estado": "21"
},
     {
	"ID": "4382",
	"Nome": "Porto Velho",
	"Estado": "21"
},
     {
	"ID": "4383",
	"Nome": "Presidente Médici",
	"Estado": "21"
},
     {
	"ID": "4384",
	"Nome": "Primavera de Rondônia",
	"Estado": "21"
},
     {
	"ID": "4385",
	"Nome": "Rio Crespo",
	"Estado": "21"
},
     {
	"ID": "4386",
	"Nome": "Rolim de Moura",
	"Estado": "21"
},
     {
	"ID": "4387",
	"Nome": "Santa Luzia d`Oeste",
	"Estado": "21"
},
     {
	"ID": "4388",
	"Nome": "São Felipe d`Oeste",
	"Estado": "21"
},
     {
	"ID": "4389",
	"Nome": "São Francisco do Guaporé",
	"Estado": "21"
},
     {
	"ID": "4390",
	"Nome": "São Miguel do Guaporé",
	"Estado": "21"
},
     {
	"ID": "4391",
	"Nome": "Seringueiras",
	"Estado": "21"
},
     {
	"ID": "4392",
	"Nome": "Teixeirópolis",
	"Estado": "21"
},
     {
	"ID": "4393",
	"Nome": "Theobroma",
	"Estado": "21"
},
     {
	"ID": "4394",
	"Nome": "Urupá",
	"Estado": "21"
},
     {
	"ID": "4395",
	"Nome": "Vale do Anari",
	"Estado": "21"
},
     {
	"ID": "4396",
	"Nome": "Vale do Paraíso",
	"Estado": "21"
},
     {
	"ID": "4397",
	"Nome": "Vilhena",
	"Estado": "21"
},
     {
	"ID": "4398",
	"Nome": "Alto Alegre",
	"Estado": "22"
},
     {
	"ID": "4399",
	"Nome": "Amajari",
	"Estado": "22"
},
     {
	"ID": "4400",
	"Nome": "Boa Vista",
	"Estado": "22"
},
     {
	"ID": "4401",
	"Nome": "Bonfim",
	"Estado": "22"
},
     {
	"ID": "4402",
	"Nome": "Cantá",
	"Estado": "22"
},
     {
	"ID": "4403",
	"Nome": "Caracaraí",
	"Estado": "22"
},
     {
	"ID": "4404",
	"Nome": "Caroebe",
	"Estado": "22"
},
     {
	"ID": "4405",
	"Nome": "Iracema",
	"Estado": "22"
},
     {
	"ID": "4406",
	"Nome": "Mucajaí",
	"Estado": "22"
},
     {
	"ID": "4407",
	"Nome": "Normandia",
	"Estado": "22"
},
     {
	"ID": "4408",
	"Nome": "Pacaraima",
	"Estado": "22"
},
     {
	"ID": "4409",
	"Nome": "Rorainópolis",
	"Estado": "22"
},
     {
	"ID": "4410",
	"Nome": "São João da Baliza",
	"Estado": "22"
},
     {
	"ID": "4411",
	"Nome": "São Luiz",
	"Estado": "22"
},
     {
	"ID": "4412",
	"Nome": "Uiramutã",
	"Estado": "22"
},
     {
	"ID": "4413",
	"Nome": "Abdon Batista",
	"Estado": "24"
},
     {
	"ID": "4414",
	"Nome": "Abelardo Luz",
	"Estado": "24"
},
     {
	"ID": "4415",
	"Nome": "Agrolândia",
	"Estado": "24"
},
     {
	"ID": "4416",
	"Nome": "Agronômica",
	"Estado": "24"
},
     {
	"ID": "4417",
	"Nome": "Água Doce",
	"Estado": "24"
},
     {
	"ID": "4418",
	"Nome": "Águas de Chapecó",
	"Estado": "24"
},
     {
	"ID": "4419",
	"Nome": "Águas Frias",
	"Estado": "24"
},
     {
	"ID": "4420",
	"Nome": "Águas Mornas",
	"Estado": "24"
},
     {
	"ID": "4421",
	"Nome": "Alfredo Wagner",
	"Estado": "24"
},
     {
	"ID": "4422",
	"Nome": "Alto Bela Vista",
	"Estado": "24"
},
     {
	"ID": "4423",
	"Nome": "Anchieta",
	"Estado": "24"
},
     {
	"ID": "4424",
	"Nome": "Angelina",
	"Estado": "24"
},
     {
	"ID": "4425",
	"Nome": "Anita Garibaldi",
	"Estado": "24"
},
     {
	"ID": "4426",
	"Nome": "Anitápolis",
	"Estado": "24"
},
     {
	"ID": "4427",
	"Nome": "Antônio Carlos",
	"Estado": "24"
},
     {
	"ID": "4428",
	"Nome": "Apiúna",
	"Estado": "24"
},
     {
	"ID": "4429",
	"Nome": "Arabutã",
	"Estado": "24"
},
     {
	"ID": "4430",
	"Nome": "Araquari",
	"Estado": "24"
},
     {
	"ID": "4431",
	"Nome": "Araranguá",
	"Estado": "24"
},
     {
	"ID": "4432",
	"Nome": "Armazém",
	"Estado": "24"
},
     {
	"ID": "4433",
	"Nome": "Arroio Trinta",
	"Estado": "24"
},
     {
	"ID": "4434",
	"Nome": "Arvoredo",
	"Estado": "24"
},
     {
	"ID": "4435",
	"Nome": "Ascurra",
	"Estado": "24"
},
     {
	"ID": "4436",
	"Nome": "Atalanta",
	"Estado": "24"
},
     {
	"ID": "4437",
	"Nome": "Aurora",
	"Estado": "24"
},
     {
	"ID": "4438",
	"Nome": "Balneário Arroio do Silva",
	"Estado": "24"
},
     {
	"ID": "4439",
	"Nome": "Balneário Barra do Sul",
	"Estado": "24"
},
     {
	"ID": "4440",
	"Nome": "Balneário Camboriú",
	"Estado": "24"
},
     {
	"ID": "4441",
	"Nome": "Balneário Gaivota",
	"Estado": "24"
},
     {
	"ID": "4442",
	"Nome": "Bandeirante",
	"Estado": "24"
},
     {
	"ID": "4443",
	"Nome": "Barra Bonita",
	"Estado": "24"
},
     {
	"ID": "4444",
	"Nome": "Barra Velha",
	"Estado": "24"
},
     {
	"ID": "4445",
	"Nome": "Bela Vista do Toldo",
	"Estado": "24"
},
     {
	"ID": "4446",
	"Nome": "Belmonte",
	"Estado": "24"
},
     {
	"ID": "4447",
	"Nome": "Benedito Novo",
	"Estado": "24"
},
     {
	"ID": "4448",
	"Nome": "Biguaçu",
	"Estado": "24"
},
     {
	"ID": "4449",
	"Nome": "Blumenau",
	"Estado": "24"
},
     {
	"ID": "4450",
	"Nome": "Bocaina do Sul",
	"Estado": "24"
},
     {
	"ID": "4451",
	"Nome": "Bom Jardim da Serra",
	"Estado": "24"
},
     {
	"ID": "4452",
	"Nome": "Bom Jesus",
	"Estado": "24"
},
     {
	"ID": "4453",
	"Nome": "Bom Jesus do Oeste",
	"Estado": "24"
},
     {
	"ID": "4454",
	"Nome": "Bom Retiro",
	"Estado": "24"
},
     {
	"ID": "4455",
	"Nome": "Bombinhas",
	"Estado": "24"
},
     {
	"ID": "4456",
	"Nome": "Botuverá",
	"Estado": "24"
},
     {
	"ID": "4457",
	"Nome": "Braço do Norte",
	"Estado": "24"
},
     {
	"ID": "4458",
	"Nome": "Braço do Trombudo",
	"Estado": "24"
},
     {
	"ID": "4459",
	"Nome": "Brunópolis",
	"Estado": "24"
},
     {
	"ID": "4460",
	"Nome": "Brusque",
	"Estado": "24"
},
     {
	"ID": "4461",
	"Nome": "Caçador",
	"Estado": "24"
},
     {
	"ID": "4462",
	"Nome": "Caibi",
	"Estado": "24"
},
     {
	"ID": "4463",
	"Nome": "Calmon",
	"Estado": "24"
},
     {
	"ID": "4464",
	"Nome": "Camboriú",
	"Estado": "24"
},
     {
	"ID": "4465",
	"Nome": "Campo Alegre",
	"Estado": "24"
},
     {
	"ID": "4466",
	"Nome": "Campo Belo do Sul",
	"Estado": "24"
},
     {
	"ID": "4467",
	"Nome": "Campo Erê",
	"Estado": "24"
},
     {
	"ID": "4468",
	"Nome": "Campos Novos",
	"Estado": "24"
},
     {
	"ID": "4469",
	"Nome": "Canelinha",
	"Estado": "24"
},
     {
	"ID": "4470",
	"Nome": "Canoinhas",
	"Estado": "24"
},
     {
	"ID": "4471",
	"Nome": "Capão Alto",
	"Estado": "24"
},
     {
	"ID": "4472",
	"Nome": "Capinzal",
	"Estado": "24"
},
     {
	"ID": "4473",
	"Nome": "Capivari de Baixo",
	"Estado": "24"
},
     {
	"ID": "4474",
	"Nome": "Catanduvas",
	"Estado": "24"
},
     {
	"ID": "4475",
	"Nome": "Caxambu do Sul",
	"Estado": "24"
},
     {
	"ID": "4476",
	"Nome": "Celso Ramos",
	"Estado": "24"
},
     {
	"ID": "4477",
	"Nome": "Cerro Negro",
	"Estado": "24"
},
     {
	"ID": "4478",
	"Nome": "Chapadão do Lageado",
	"Estado": "24"
},
     {
	"ID": "4479",
	"Nome": "Chapecó",
	"Estado": "24"
},
     {
	"ID": "4480",
	"Nome": "Cocal do Sul",
	"Estado": "24"
},
     {
	"ID": "4481",
	"Nome": "Concórdia",
	"Estado": "24"
},
     {
	"ID": "4482",
	"Nome": "Cordilheira Alta",
	"Estado": "24"
},
     {
	"ID": "4483",
	"Nome": "Coronel Freitas",
	"Estado": "24"
},
     {
	"ID": "4484",
	"Nome": "Coronel Martins",
	"Estado": "24"
},
     {
	"ID": "4485",
	"Nome": "Correia Pinto",
	"Estado": "24"
},
     {
	"ID": "4486",
	"Nome": "Corupá",
	"Estado": "24"
},
     {
	"ID": "4487",
	"Nome": "Criciúma",
	"Estado": "24"
},
     {
	"ID": "4488",
	"Nome": "Cunha Porã",
	"Estado": "24"
},
     {
	"ID": "4489",
	"Nome": "Cunhataí",
	"Estado": "24"
},
     {
	"ID": "4490",
	"Nome": "Curitibanos",
	"Estado": "24"
},
     {
	"ID": "4491",
	"Nome": "Descanso",
	"Estado": "24"
},
     {
	"ID": "4492",
	"Nome": "Dionísio Cerqueira",
	"Estado": "24"
},
     {
	"ID": "4493",
	"Nome": "Dona Emma",
	"Estado": "24"
},
     {
	"ID": "4494",
	"Nome": "Doutor Pedrinho",
	"Estado": "24"
},
     {
	"ID": "4495",
	"Nome": "Entre Rios",
	"Estado": "24"
},
     {
	"ID": "4496",
	"Nome": "Ermo",
	"Estado": "24"
},
     {
	"ID": "4497",
	"Nome": "Erval Velho",
	"Estado": "24"
},
     {
	"ID": "4498",
	"Nome": "Faxinal dos Guedes",
	"Estado": "24"
},
     {
	"ID": "4499",
	"Nome": "Flor do Sertão",
	"Estado": "24"
},
     {
	"ID": "4500",
	"Nome": "Florianópolis",
	"Estado": "24"
},
     {
	"ID": "4501",
	"Nome": "Formosa do Sul",
	"Estado": "24"
},
     {
	"ID": "4502",
	"Nome": "Forquilhinha",
	"Estado": "24"
},
     {
	"ID": "4503",
	"Nome": "Fraiburgo",
	"Estado": "24"
},
     {
	"ID": "4504",
	"Nome": "Frei Rogério",
	"Estado": "24"
},
     {
	"ID": "4505",
	"Nome": "Galvão",
	"Estado": "24"
},
     {
	"ID": "4506",
	"Nome": "Garopaba",
	"Estado": "24"
},
     {
	"ID": "4507",
	"Nome": "Garuva",
	"Estado": "24"
},
     {
	"ID": "4508",
	"Nome": "Gaspar",
	"Estado": "24"
},
     {
	"ID": "4509",
	"Nome": "Governador Celso Ramos",
	"Estado": "24"
},
     {
	"ID": "4510",
	"Nome": "Grão Pará",
	"Estado": "24"
},
     {
	"ID": "4511",
	"Nome": "Gravatal",
	"Estado": "24"
},
     {
	"ID": "4512",
	"Nome": "Guabiruba",
	"Estado": "24"
},
     {
	"ID": "4513",
	"Nome": "Guaraciaba",
	"Estado": "24"
},
     {
	"ID": "4514",
	"Nome": "Guaramirim",
	"Estado": "24"
},
     {
	"ID": "4515",
	"Nome": "Guarujá do Sul",
	"Estado": "24"
},
     {
	"ID": "4516",
	"Nome": "Guatambú",
	"Estado": "24"
},
     {
	"ID": "4517",
	"Nome": "Herval d`Oeste",
	"Estado": "24"
},
     {
	"ID": "4518",
	"Nome": "Ibiam",
	"Estado": "24"
},
     {
	"ID": "4519",
	"Nome": "Ibicaré",
	"Estado": "24"
},
     {
	"ID": "4520",
	"Nome": "Ibirama",
	"Estado": "24"
},
     {
	"ID": "4521",
	"Nome": "Içara",
	"Estado": "24"
},
     {
	"ID": "4522",
	"Nome": "Ilhota",
	"Estado": "24"
},
     {
	"ID": "4523",
	"Nome": "Imaruí",
	"Estado": "24"
},
     {
	"ID": "4524",
	"Nome": "Imbituba",
	"Estado": "24"
},
     {
	"ID": "4525",
	"Nome": "Imbuia",
	"Estado": "24"
},
     {
	"ID": "4526",
	"Nome": "Indaial",
	"Estado": "24"
},
     {
	"ID": "4527",
	"Nome": "Iomerê",
	"Estado": "24"
},
     {
	"ID": "4528",
	"Nome": "Ipira",
	"Estado": "24"
},
     {
	"ID": "4529",
	"Nome": "Iporã do Oeste",
	"Estado": "24"
},
     {
	"ID": "4530",
	"Nome": "Ipuaçu",
	"Estado": "24"
},
     {
	"ID": "4531",
	"Nome": "Ipumirim",
	"Estado": "24"
},
     {
	"ID": "4532",
	"Nome": "Iraceminha",
	"Estado": "24"
},
     {
	"ID": "4533",
	"Nome": "Irani",
	"Estado": "24"
},
     {
	"ID": "4534",
	"Nome": "Irati",
	"Estado": "24"
},
     {
	"ID": "4535",
	"Nome": "Irineópolis",
	"Estado": "24"
},
     {
	"ID": "4536",
	"Nome": "Itá",
	"Estado": "24"
},
     {
	"ID": "4537",
	"Nome": "Itaiópolis",
	"Estado": "24"
},
     {
	"ID": "4538",
	"Nome": "Itajaí",
	"Estado": "24"
},
     {
	"ID": "4539",
	"Nome": "Itapema",
	"Estado": "24"
},
     {
	"ID": "4540",
	"Nome": "Itapiranga",
	"Estado": "24"
},
     {
	"ID": "4541",
	"Nome": "Itapoá",
	"Estado": "24"
},
     {
	"ID": "4542",
	"Nome": "Ituporanga",
	"Estado": "24"
},
     {
	"ID": "4543",
	"Nome": "Jaborá",
	"Estado": "24"
},
     {
	"ID": "4544",
	"Nome": "Jacinto Machado",
	"Estado": "24"
},
     {
	"ID": "4545",
	"Nome": "Jaguaruna",
	"Estado": "24"
},
     {
	"ID": "4546",
	"Nome": "Jaraguá do Sul",
	"Estado": "24"
},
     {
	"ID": "4547",
	"Nome": "Jardinópolis",
	"Estado": "24"
},
     {
	"ID": "4548",
	"Nome": "Joaçaba",
	"Estado": "24"
},
     {
	"ID": "4549",
	"Nome": "Joinville",
	"Estado": "24"
},
     {
	"ID": "4550",
	"Nome": "José Boiteux",
	"Estado": "24"
},
     {
	"ID": "4551",
	"Nome": "Jupiá",
	"Estado": "24"
},
     {
	"ID": "4552",
	"Nome": "Lacerdópolis",
	"Estado": "24"
},
     {
	"ID": "4553",
	"Nome": "Lages",
	"Estado": "24"
},
     {
	"ID": "4554",
	"Nome": "Laguna",
	"Estado": "24"
},
     {
	"ID": "4555",
	"Nome": "Lajeado Grande",
	"Estado": "24"
},
     {
	"ID": "4556",
	"Nome": "Laurentino",
	"Estado": "24"
},
     {
	"ID": "4557",
	"Nome": "Lauro Muller",
	"Estado": "24"
},
     {
	"ID": "4558",
	"Nome": "Lebon Régis",
	"Estado": "24"
},
     {
	"ID": "4559",
	"Nome": "Leoberto Leal",
	"Estado": "24"
},
     {
	"ID": "4560",
	"Nome": "Lindóia do Sul",
	"Estado": "24"
},
     {
	"ID": "4561",
	"Nome": "Lontras",
	"Estado": "24"
},
     {
	"ID": "4562",
	"Nome": "Luiz Alves",
	"Estado": "24"
},
     {
	"ID": "4563",
	"Nome": "Luzerna",
	"Estado": "24"
},
     {
	"ID": "4564",
	"Nome": "Macieira",
	"Estado": "24"
},
     {
	"ID": "4565",
	"Nome": "Mafra",
	"Estado": "24"
},
     {
	"ID": "4566",
	"Nome": "Major Gercino",
	"Estado": "24"
},
     {
	"ID": "4567",
	"Nome": "Major Vieira",
	"Estado": "24"
},
     {
	"ID": "4568",
	"Nome": "Maracajá",
	"Estado": "24"
},
     {
	"ID": "4569",
	"Nome": "Maravilha",
	"Estado": "24"
},
     {
	"ID": "4570",
	"Nome": "Marema",
	"Estado": "24"
},
     {
	"ID": "4571",
	"Nome": "Massaranduba",
	"Estado": "24"
},
     {
	"ID": "4572",
	"Nome": "Matos Costa",
	"Estado": "24"
},
     {
	"ID": "4573",
	"Nome": "Meleiro",
	"Estado": "24"
},
     {
	"ID": "4574",
	"Nome": "Mirim Doce",
	"Estado": "24"
},
     {
	"ID": "4575",
	"Nome": "Modelo",
	"Estado": "24"
},
     {
	"ID": "4576",
	"Nome": "Mondaí",
	"Estado": "24"
},
     {
	"ID": "4577",
	"Nome": "Monte Carlo",
	"Estado": "24"
},
     {
	"ID": "4578",
	"Nome": "Monte Castelo",
	"Estado": "24"
},
     {
	"ID": "4579",
	"Nome": "Morro da Fumaça",
	"Estado": "24"
},
     {
	"ID": "4580",
	"Nome": "Morro Grande",
	"Estado": "24"
},
     {
	"ID": "4581",
	"Nome": "Navegantes",
	"Estado": "24"
},
     {
	"ID": "4582",
	"Nome": "Nova Erechim",
	"Estado": "24"
},
     {
	"ID": "4583",
	"Nome": "Nova Itaberaba",
	"Estado": "24"
},
     {
	"ID": "4584",
	"Nome": "Nova Trento",
	"Estado": "24"
},
     {
	"ID": "4585",
	"Nome": "Nova Veneza",
	"Estado": "24"
},
     {
	"ID": "4586",
	"Nome": "Novo Horizonte",
	"Estado": "24"
},
     {
	"ID": "4587",
	"Nome": "Orleans",
	"Estado": "24"
},
     {
	"ID": "4588",
	"Nome": "Otacílio Costa",
	"Estado": "24"
},
     {
	"ID": "4589",
	"Nome": "Ouro",
	"Estado": "24"
},
     {
	"ID": "4590",
	"Nome": "Ouro Verde",
	"Estado": "24"
},
     {
	"ID": "4591",
	"Nome": "Paial",
	"Estado": "24"
},
     {
	"ID": "4592",
	"Nome": "Painel",
	"Estado": "24"
},
     {
	"ID": "4593",
	"Nome": "Palhoça",
	"Estado": "24"
},
     {
	"ID": "4594",
	"Nome": "Palma Sola",
	"Estado": "24"
},
     {
	"ID": "4595",
	"Nome": "Palmeira",
	"Estado": "24"
},
     {
	"ID": "4596",
	"Nome": "Palmitos",
	"Estado": "24"
},
     {
	"ID": "4597",
	"Nome": "Papanduva",
	"Estado": "24"
},
     {
	"ID": "4598",
	"Nome": "Paraíso",
	"Estado": "24"
},
     {
	"ID": "4599",
	"Nome": "Passo de Torres",
	"Estado": "24"
},
     {
	"ID": "4600",
	"Nome": "Passos Maia",
	"Estado": "24"
},
     {
	"ID": "4601",
	"Nome": "Paulo Lopes",
	"Estado": "24"
},
     {
	"ID": "4602",
	"Nome": "Pedras Grandes",
	"Estado": "24"
},
     {
	"ID": "4603",
	"Nome": "Penha",
	"Estado": "24"
},
     {
	"ID": "4604",
	"Nome": "Peritiba",
	"Estado": "24"
},
     {
	"ID": "4605",
	"Nome": "Petrolândia",
	"Estado": "24"
},
     {
	"ID": "4606",
	"Nome": "Piçarras",
	"Estado": "24"
},
     {
	"ID": "4607",
	"Nome": "Pinhalzinho",
	"Estado": "24"
},
     {
	"ID": "4608",
	"Nome": "Pinheiro Preto",
	"Estado": "24"
},
     {
	"ID": "4609",
	"Nome": "Piratuba",
	"Estado": "24"
},
     {
	"ID": "4610",
	"Nome": "Planalto Alegre",
	"Estado": "24"
},
     {
	"ID": "4611",
	"Nome": "Pomerode",
	"Estado": "24"
},
     {
	"ID": "4612",
	"Nome": "Ponte Alta",
	"Estado": "24"
},
     {
	"ID": "4613",
	"Nome": "Ponte Alta do Norte",
	"Estado": "24"
},
     {
	"ID": "4614",
	"Nome": "Ponte Serrada",
	"Estado": "24"
},
     {
	"ID": "4615",
	"Nome": "Porto Belo",
	"Estado": "24"
},
     {
	"ID": "4616",
	"Nome": "Porto União",
	"Estado": "24"
},
     {
	"ID": "4617",
	"Nome": "Pouso Redondo",
	"Estado": "24"
},
     {
	"ID": "4618",
	"Nome": "Praia Grande",
	"Estado": "24"
},
     {
	"ID": "4619",
	"Nome": "Presidente Castelo Branco",
	"Estado": "24"
},
     {
	"ID": "4620",
	"Nome": "Presidente Getúlio",
	"Estado": "24"
},
     {
	"ID": "4621",
	"Nome": "Presidente Nereu",
	"Estado": "24"
},
     {
	"ID": "4622",
	"Nome": "Princesa",
	"Estado": "24"
},
     {
	"ID": "4623",
	"Nome": "Quilombo",
	"Estado": "24"
},
     {
	"ID": "4624",
	"Nome": "Rancho Queimado",
	"Estado": "24"
},
     {
	"ID": "4625",
	"Nome": "Rio das Antas",
	"Estado": "24"
},
     {
	"ID": "4626",
	"Nome": "Rio do Campo",
	"Estado": "24"
},
     {
	"ID": "4627",
	"Nome": "Rio do Oeste",
	"Estado": "24"
},
     {
	"ID": "4628",
	"Nome": "Rio do Sul",
	"Estado": "24"
},
     {
	"ID": "4629",
	"Nome": "Rio dos Cedros",
	"Estado": "24"
},
     {
	"ID": "4630",
	"Nome": "Rio Fortuna",
	"Estado": "24"
},
     {
	"ID": "4631",
	"Nome": "Rio Negrinho",
	"Estado": "24"
},
     {
	"ID": "4632",
	"Nome": "Rio Rufino",
	"Estado": "24"
},
     {
	"ID": "4633",
	"Nome": "Riqueza",
	"Estado": "24"
},
     {
	"ID": "4634",
	"Nome": "Rodeio",
	"Estado": "24"
},
     {
	"ID": "4635",
	"Nome": "Romelândia",
	"Estado": "24"
},
     {
	"ID": "4636",
	"Nome": "Salete",
	"Estado": "24"
},
     {
	"ID": "4637",
	"Nome": "Saltinho",
	"Estado": "24"
},
     {
	"ID": "4638",
	"Nome": "Salto Veloso",
	"Estado": "24"
},
     {
	"ID": "4639",
	"Nome": "Sangão",
	"Estado": "24"
},
     {
	"ID": "4640",
	"Nome": "Santa Cecília",
	"Estado": "24"
},
     {
	"ID": "4641",
	"Nome": "Santa Helena",
	"Estado": "24"
},
     {
	"ID": "4642",
	"Nome": "Santa Rosa de Lima",
	"Estado": "24"
},
     {
	"ID": "4643",
	"Nome": "Santa Rosa do Sul",
	"Estado": "24"
},
     {
	"ID": "4644",
	"Nome": "Santa Terezinha",
	"Estado": "24"
},
     {
	"ID": "4645",
	"Nome": "Santa Terezinha do Progresso",
	"Estado": "24"
},
     {
	"ID": "4646",
	"Nome": "Santiago do Sul",
	"Estado": "24"
},
     {
	"ID": "4647",
	"Nome": "Santo Amaro da Imperatriz",
	"Estado": "24"
},
     {
	"ID": "4648",
	"Nome": "São Bento do Sul",
	"Estado": "24"
},
     {
	"ID": "4649",
	"Nome": "São Bernardino",
	"Estado": "24"
},
     {
	"ID": "4650",
	"Nome": "São Bonifácio",
	"Estado": "24"
},
     {
	"ID": "4651",
	"Nome": "São Carlos",
	"Estado": "24"
},
     {
	"ID": "4652",
	"Nome": "São Cristovão do Sul",
	"Estado": "24"
},
     {
	"ID": "4653",
	"Nome": "São Domingos",
	"Estado": "24"
},
     {
	"ID": "4654",
	"Nome": "São Francisco do Sul",
	"Estado": "24"
},
     {
	"ID": "4655",
	"Nome": "São João Batista",
	"Estado": "24"
},
     {
	"ID": "4656",
	"Nome": "São João do Itaperiú",
	"Estado": "24"
},
     {
	"ID": "4657",
	"Nome": "São João do Oeste",
	"Estado": "24"
},
     {
	"ID": "4658",
	"Nome": "São João do Sul",
	"Estado": "24"
},
     {
	"ID": "4659",
	"Nome": "São Joaquim",
	"Estado": "24"
},
     {
	"ID": "4660",
	"Nome": "São José",
	"Estado": "24"
},
     {
	"ID": "4661",
	"Nome": "São José do Cedro",
	"Estado": "24"
},
     {
	"ID": "4662",
	"Nome": "São José do Cerrito",
	"Estado": "24"
},
     {
	"ID": "4663",
	"Nome": "São Lourenço do Oeste",
	"Estado": "24"
},
     {
	"ID": "4664",
	"Nome": "São Ludgero",
	"Estado": "24"
},
     {
	"ID": "4665",
	"Nome": "São Martinho",
	"Estado": "24"
},
     {
	"ID": "4666",
	"Nome": "São Miguel da Boa Vista",
	"Estado": "24"
},
     {
	"ID": "4667",
	"Nome": "São Miguel do Oeste",
	"Estado": "24"
},
     {
	"ID": "4668",
	"Nome": "São Pedro de Alcântara",
	"Estado": "24"
},
     {
	"ID": "4669",
	"Nome": "Saudades",
	"Estado": "24"
},
     {
	"ID": "4670",
	"Nome": "Schroeder",
	"Estado": "24"
},
     {
	"ID": "4671",
	"Nome": "Seara",
	"Estado": "24"
},
     {
	"ID": "4672",
	"Nome": "Serra Alta",
	"Estado": "24"
},
     {
	"ID": "4673",
	"Nome": "Siderópolis",
	"Estado": "24"
},
     {
	"ID": "4674",
	"Nome": "Sombrio",
	"Estado": "24"
},
     {
	"ID": "4675",
	"Nome": "Sul Brasil",
	"Estado": "24"
},
     {
	"ID": "4676",
	"Nome": "Taió",
	"Estado": "24"
},
     {
	"ID": "4677",
	"Nome": "Tangará",
	"Estado": "24"
},
     {
	"ID": "4678",
	"Nome": "Tigrinhos",
	"Estado": "24"
},
     {
	"ID": "4679",
	"Nome": "Tijucas",
	"Estado": "24"
},
     {
	"ID": "4680",
	"Nome": "Timbé do Sul",
	"Estado": "24"
},
     {
	"ID": "4681",
	"Nome": "Timbó",
	"Estado": "24"
},
     {
	"ID": "4682",
	"Nome": "Timbó Grande",
	"Estado": "24"
},
     {
	"ID": "4683",
	"Nome": "Três Barras",
	"Estado": "24"
},
     {
	"ID": "4684",
	"Nome": "Treviso",
	"Estado": "24"
},
     {
	"ID": "4685",
	"Nome": "Treze de Maio",
	"Estado": "24"
},
     {
	"ID": "4686",
	"Nome": "Treze Tílias",
	"Estado": "24"
},
     {
	"ID": "4687",
	"Nome": "Trombudo Central",
	"Estado": "24"
},
     {
	"ID": "4688",
	"Nome": "Tubarão",
	"Estado": "24"
},
     {
	"ID": "4689",
	"Nome": "Tunápolis",
	"Estado": "24"
},
     {
	"ID": "4690",
	"Nome": "Turvo",
	"Estado": "24"
},
     {
	"ID": "4691",
	"Nome": "União do Oeste",
	"Estado": "24"
},
     {
	"ID": "4692",
	"Nome": "Urubici",
	"Estado": "24"
},
     {
	"ID": "4693",
	"Nome": "Urupema",
	"Estado": "24"
},
     {
	"ID": "4694",
	"Nome": "Urussanga",
	"Estado": "24"
},
     {
	"ID": "4695",
	"Nome": "Vargeão",
	"Estado": "24"
},
     {
	"ID": "4696",
	"Nome": "Vargem",
	"Estado": "24"
},
     {
	"ID": "4697",
	"Nome": "Vargem Bonita",
	"Estado": "24"
},
     {
	"ID": "4698",
	"Nome": "Vidal Ramos",
	"Estado": "24"
},
     {
	"ID": "4699",
	"Nome": "Videira",
	"Estado": "24"
},
     {
	"ID": "4700",
	"Nome": "Vitor Meireles",
	"Estado": "24"
},
     {
	"ID": "4701",
	"Nome": "Witmarsum",
	"Estado": "24"
},
     {
	"ID": "4702",
	"Nome": "Xanxerê",
	"Estado": "24"
},
     {
	"ID": "4703",
	"Nome": "Xavantina",
	"Estado": "24"
},
     {
	"ID": "4704",
	"Nome": "Xaxim",
	"Estado": "24"
},
     {
	"ID": "4705",
	"Nome": "Zortéa",
	"Estado": "24"
},
     {
	"ID": "4706",
	"Nome": "Adamantina",
	"Estado": "26"
},
     {
	"ID": "4707",
	"Nome": "Adolfo",
	"Estado": "26"
},
     {
	"ID": "4708",
	"Nome": "Aguaí",
	"Estado": "26"
},
     {
	"ID": "4709",
	"Nome": "Águas da Prata",
	"Estado": "26"
},
     {
	"ID": "4710",
	"Nome": "Águas de Lindóia",
	"Estado": "26"
},
     {
	"ID": "4711",
	"Nome": "Águas de Santa Bárbara",
	"Estado": "26"
},
     {
	"ID": "4712",
	"Nome": "Águas de São Pedro",
	"Estado": "26"
},
     {
	"ID": "4713",
	"Nome": "Agudos",
	"Estado": "26"
},
     {
	"ID": "4714",
	"Nome": "Alambari",
	"Estado": "26"
},
     {
	"ID": "4715",
	"Nome": "Alfredo Marcondes",
	"Estado": "26"
},
     {
	"ID": "4716",
	"Nome": "Altair",
	"Estado": "26"
},
     {
	"ID": "4717",
	"Nome": "Altinópolis",
	"Estado": "26"
},
     {
	"ID": "4718",
	"Nome": "Alto Alegre",
	"Estado": "26"
},
     {
	"ID": "4719",
	"Nome": "Alumínio",
	"Estado": "26"
},
     {
	"ID": "4720",
	"Nome": "Álvares Florence",
	"Estado": "26"
},
     {
	"ID": "4721",
	"Nome": "Álvares Machado",
	"Estado": "26"
},
     {
	"ID": "4722",
	"Nome": "Álvaro de Carvalho",
	"Estado": "26"
},
     {
	"ID": "4723",
	"Nome": "Alvinlândia",
	"Estado": "26"
},
     {
	"ID": "4724",
	"Nome": "Americana",
	"Estado": "26"
},
     {
	"ID": "4725",
	"Nome": "Américo Brasiliense",
	"Estado": "26"
},
     {
	"ID": "4726",
	"Nome": "Américo de Campos",
	"Estado": "26"
},
     {
	"ID": "4727",
	"Nome": "Amparo",
	"Estado": "26"
},
     {
	"ID": "4728",
	"Nome": "Analândia",
	"Estado": "26"
},
     {
	"ID": "4729",
	"Nome": "Andradina",
	"Estado": "26"
},
     {
	"ID": "4730",
	"Nome": "Angatuba",
	"Estado": "26"
},
     {
	"ID": "4731",
	"Nome": "Anhembi",
	"Estado": "26"
},
     {
	"ID": "4732",
	"Nome": "Anhumas",
	"Estado": "26"
},
     {
	"ID": "4733",
	"Nome": "Aparecida",
	"Estado": "26"
},
     {
	"ID": "4734",
	"Nome": "Aparecida d`Oeste",
	"Estado": "26"
},
     {
	"ID": "4735",
	"Nome": "Apiaí",
	"Estado": "26"
},
     {
	"ID": "4736",
	"Nome": "Araçariguama",
	"Estado": "26"
},
     {
	"ID": "4737",
	"Nome": "Araçatuba",
	"Estado": "26"
},
     {
	"ID": "4738",
	"Nome": "Araçoiaba da Serra",
	"Estado": "26"
},
     {
	"ID": "4739",
	"Nome": "Aramina",
	"Estado": "26"
},
     {
	"ID": "4740",
	"Nome": "Arandu",
	"Estado": "26"
},
     {
	"ID": "4741",
	"Nome": "Arapeí",
	"Estado": "26"
},
     {
	"ID": "4742",
	"Nome": "Araraquara",
	"Estado": "26"
},
     {
	"ID": "4743",
	"Nome": "Araras",
	"Estado": "26"
},
     {
	"ID": "4744",
	"Nome": "Arco-Íris",
	"Estado": "26"
},
     {
	"ID": "4745",
	"Nome": "Arealva",
	"Estado": "26"
},
     {
	"ID": "4746",
	"Nome": "Areias",
	"Estado": "26"
},
     {
	"ID": "4747",
	"Nome": "Areiópolis",
	"Estado": "26"
},
     {
	"ID": "4748",
	"Nome": "Ariranha",
	"Estado": "26"
},
     {
	"ID": "4749",
	"Nome": "Artur Nogueira",
	"Estado": "26"
},
     {
	"ID": "4750",
	"Nome": "Arujá",
	"Estado": "26"
},
     {
	"ID": "4751",
	"Nome": "Aspásia",
	"Estado": "26"
},
     {
	"ID": "4752",
	"Nome": "Assis",
	"Estado": "26"
},
     {
	"ID": "4753",
	"Nome": "Atibaia",
	"Estado": "26"
},
     {
	"ID": "4754",
	"Nome": "Auriflama",
	"Estado": "26"
},
     {
	"ID": "4755",
	"Nome": "Avaí",
	"Estado": "26"
},
     {
	"ID": "4756",
	"Nome": "Avanhandava",
	"Estado": "26"
},
     {
	"ID": "4757",
	"Nome": "Avaré",
	"Estado": "26"
},
     {
	"ID": "4758",
	"Nome": "Bady Bassitt",
	"Estado": "26"
},
     {
	"ID": "4759",
	"Nome": "Balbinos",
	"Estado": "26"
},
     {
	"ID": "4760",
	"Nome": "Bálsamo",
	"Estado": "26"
},
     {
	"ID": "4761",
	"Nome": "Bananal",
	"Estado": "26"
},
     {
	"ID": "4762",
	"Nome": "Barão de Antonina",
	"Estado": "26"
},
     {
	"ID": "4763",
	"Nome": "Barbosa",
	"Estado": "26"
},
     {
	"ID": "4764",
	"Nome": "Bariri",
	"Estado": "26"
},
     {
	"ID": "4765",
	"Nome": "Barra Bonita",
	"Estado": "26"
},
     {
	"ID": "4766",
	"Nome": "Barra do Chapéu",
	"Estado": "26"
},
     {
	"ID": "4767",
	"Nome": "Barra do Turvo",
	"Estado": "26"
},
     {
	"ID": "4768",
	"Nome": "Barretos",
	"Estado": "26"
},
     {
	"ID": "4769",
	"Nome": "Barrinha",
	"Estado": "26"
},
     {
	"ID": "4770",
	"Nome": "Barueri",
	"Estado": "26"
},
     {
	"ID": "4771",
	"Nome": "Bastos",
	"Estado": "26"
},
     {
	"ID": "4772",
	"Nome": "Batatais",
	"Estado": "26"
},
     {
	"ID": "4773",
	"Nome": "Bauru",
	"Estado": "26"
},
     {
	"ID": "4774",
	"Nome": "Bebedouro",
	"Estado": "26"
},
     {
	"ID": "4775",
	"Nome": "Bento de Abreu",
	"Estado": "26"
},
     {
	"ID": "4776",
	"Nome": "Bernardino de Campos",
	"Estado": "26"
},
     {
	"ID": "4777",
	"Nome": "Bertioga",
	"Estado": "26"
},
     {
	"ID": "4778",
	"Nome": "Bilac",
	"Estado": "26"
},
     {
	"ID": "4779",
	"Nome": "Birigui",
	"Estado": "26"
},
     {
	"ID": "4780",
	"Nome": "Biritiba-Mirim",
	"Estado": "26"
},
     {
	"ID": "4781",
	"Nome": "Boa Esperança do Sul",
	"Estado": "26"
},
     {
	"ID": "4782",
	"Nome": "Bocaina",
	"Estado": "26"
},
     {
	"ID": "4783",
	"Nome": "Bofete",
	"Estado": "26"
},
     {
	"ID": "4784",
	"Nome": "Boituva",
	"Estado": "26"
},
     {
	"ID": "4785",
	"Nome": "Bom Jesus dos Perdões",
	"Estado": "26"
},
     {
	"ID": "4786",
	"Nome": "Bom Sucesso de Itararé",
	"Estado": "26"
},
     {
	"ID": "4787",
	"Nome": "Borá",
	"Estado": "26"
},
     {
	"ID": "4788",
	"Nome": "Boracéia",
	"Estado": "26"
},
     {
	"ID": "4789",
	"Nome": "Borborema",
	"Estado": "26"
},
     {
	"ID": "4790",
	"Nome": "Borebi",
	"Estado": "26"
},
     {
	"ID": "4791",
	"Nome": "Botucatu",
	"Estado": "26"
},
     {
	"ID": "4792",
	"Nome": "Bragança Paulista",
	"Estado": "26"
},
     {
	"ID": "4793",
	"Nome": "Braúna",
	"Estado": "26"
},
     {
	"ID": "4794",
	"Nome": "Brejo Alegre",
	"Estado": "26"
},
     {
	"ID": "4795",
	"Nome": "Brodowski",
	"Estado": "26"
},
     {
	"ID": "4796",
	"Nome": "Brotas",
	"Estado": "26"
},
     {
	"ID": "4797",
	"Nome": "Buri",
	"Estado": "26"
},
     {
	"ID": "4798",
	"Nome": "Buritama",
	"Estado": "26"
},
     {
	"ID": "4799",
	"Nome": "Buritizal",
	"Estado": "26"
},
     {
	"ID": "4800",
	"Nome": "Cabrália Paulista",
	"Estado": "26"
},
     {
	"ID": "4801",
	"Nome": "Cabreúva",
	"Estado": "26"
},
     {
	"ID": "4802",
	"Nome": "Caçapava",
	"Estado": "26"
},
     {
	"ID": "4803",
	"Nome": "Cachoeira Paulista",
	"Estado": "26"
},
     {
	"ID": "4804",
	"Nome": "Caconde",
	"Estado": "26"
},
     {
	"ID": "4805",
	"Nome": "Cafelândia",
	"Estado": "26"
},
     {
	"ID": "4806",
	"Nome": "Caiabu",
	"Estado": "26"
},
     {
	"ID": "4807",
	"Nome": "Caieiras",
	"Estado": "26"
},
     {
	"ID": "4808",
	"Nome": "Caiuá",
	"Estado": "26"
},
     {
	"ID": "4809",
	"Nome": "Cajamar",
	"Estado": "26"
},
     {
	"ID": "4810",
	"Nome": "Cajati",
	"Estado": "26"
},
     {
	"ID": "4811",
	"Nome": "Cajobi",
	"Estado": "26"
},
     {
	"ID": "4812",
	"Nome": "Cajuru",
	"Estado": "26"
},
     {
	"ID": "4813",
	"Nome": "Campina do Monte Alegre",
	"Estado": "26"
},
     {
	"ID": "4814",
	"Nome": "Campinas",
	"Estado": "26"
},
     {
	"ID": "4815",
	"Nome": "Campo Limpo Paulista",
	"Estado": "26"
},
     {
	"ID": "4816",
	"Nome": "Campos do Jordão",
	"Estado": "26"
},
     {
	"ID": "4817",
	"Nome": "Campos Novos Paulista",
	"Estado": "26"
},
     {
	"ID": "4818",
	"Nome": "Cananéia",
	"Estado": "26"
},
     {
	"ID": "4819",
	"Nome": "Canas",
	"Estado": "26"
},
     {
	"ID": "4820",
	"Nome": "Cândido Mota",
	"Estado": "26"
},
     {
	"ID": "4821",
	"Nome": "Cândido Rodrigues",
	"Estado": "26"
},
     {
	"ID": "4822",
	"Nome": "Canitar",
	"Estado": "26"
},
     {
	"ID": "4823",
	"Nome": "Capão Bonito",
	"Estado": "26"
},
     {
	"ID": "4824",
	"Nome": "Capela do Alto",
	"Estado": "26"
},
     {
	"ID": "4825",
	"Nome": "Capivari",
	"Estado": "26"
},
     {
	"ID": "4826",
	"Nome": "Caraguatatuba",
	"Estado": "26"
},
     {
	"ID": "4827",
	"Nome": "Carapicuíba",
	"Estado": "26"
},
     {
	"ID": "4828",
	"Nome": "Cardoso",
	"Estado": "26"
},
     {
	"ID": "4829",
	"Nome": "Casa Branca",
	"Estado": "26"
},
     {
	"ID": "4830",
	"Nome": "Cássia dos Coqueiros",
	"Estado": "26"
},
     {
	"ID": "4831",
	"Nome": "Castilho",
	"Estado": "26"
},
     {
	"ID": "4832",
	"Nome": "Catanduva",
	"Estado": "26"
},
     {
	"ID": "4833",
	"Nome": "Catiguá",
	"Estado": "26"
},
     {
	"ID": "4834",
	"Nome": "Cedral",
	"Estado": "26"
},
     {
	"ID": "4835",
	"Nome": "Cerqueira César",
	"Estado": "26"
},
     {
	"ID": "4836",
	"Nome": "Cerquilho",
	"Estado": "26"
},
     {
	"ID": "4837",
	"Nome": "Cesário Lange",
	"Estado": "26"
},
     {
	"ID": "4838",
	"Nome": "Charqueada",
	"Estado": "26"
},
     {
	"ID": "4839",
	"Nome": "Chavantes",
	"Estado": "26"
},
     {
	"ID": "4840",
	"Nome": "Clementina",
	"Estado": "26"
},
     {
	"ID": "4841",
	"Nome": "Colina",
	"Estado": "26"
},
     {
	"ID": "4842",
	"Nome": "Colômbia",
	"Estado": "26"
},
     {
	"ID": "4843",
	"Nome": "Conchal",
	"Estado": "26"
},
     {
	"ID": "4844",
	"Nome": "Conchas",
	"Estado": "26"
},
     {
	"ID": "4845",
	"Nome": "Cordeirópolis",
	"Estado": "26"
},
     {
	"ID": "4846",
	"Nome": "Coroados",
	"Estado": "26"
},
     {
	"ID": "4847",
	"Nome": "Coronel Macedo",
	"Estado": "26"
},
     {
	"ID": "4848",
	"Nome": "Corumbataí",
	"Estado": "26"
},
     {
	"ID": "4849",
	"Nome": "Cosmópolis",
	"Estado": "26"
},
     {
	"ID": "4850",
	"Nome": "Cosmorama",
	"Estado": "26"
},
     {
	"ID": "4851",
	"Nome": "Cotia",
	"Estado": "26"
},
     {
	"ID": "4852",
	"Nome": "Cravinhos",
	"Estado": "26"
},
     {
	"ID": "4853",
	"Nome": "Cristais Paulista",
	"Estado": "26"
},
     {
	"ID": "4854",
	"Nome": "Cruzália",
	"Estado": "26"
},
     {
	"ID": "4855",
	"Nome": "Cruzeiro",
	"Estado": "26"
},
     {
	"ID": "4856",
	"Nome": "Cubatão",
	"Estado": "26"
},
     {
	"ID": "4857",
	"Nome": "Cunha",
	"Estado": "26"
},
     {
	"ID": "4858",
	"Nome": "Descalvado",
	"Estado": "26"
},
     {
	"ID": "4859",
	"Nome": "Diadema",
	"Estado": "26"
},
     {
	"ID": "4860",
	"Nome": "Dirce Reis",
	"Estado": "26"
},
     {
	"ID": "4861",
	"Nome": "Divinolândia",
	"Estado": "26"
},
     {
	"ID": "4862",
	"Nome": "Dobrada",
	"Estado": "26"
},
     {
	"ID": "4863",
	"Nome": "Dois Córregos",
	"Estado": "26"
},
     {
	"ID": "4864",
	"Nome": "Dolcinópolis",
	"Estado": "26"
},
     {
	"ID": "4865",
	"Nome": "Dourado",
	"Estado": "26"
},
     {
	"ID": "4866",
	"Nome": "Dracena",
	"Estado": "26"
},
     {
	"ID": "4867",
	"Nome": "Duartina",
	"Estado": "26"
},
     {
	"ID": "4868",
	"Nome": "Dumont",
	"Estado": "26"
},
     {
	"ID": "4869",
	"Nome": "Echaporã",
	"Estado": "26"
},
     {
	"ID": "4870",
	"Nome": "Eldorado",
	"Estado": "26"
},
     {
	"ID": "4871",
	"Nome": "Elias Fausto",
	"Estado": "26"
},
     {
	"ID": "4872",
	"Nome": "Elisiário",
	"Estado": "26"
},
     {
	"ID": "4873",
	"Nome": "Embaúba",
	"Estado": "26"
},
     {
	"ID": "4874",
	"Nome": "Embu",
	"Estado": "26"
},
     {
	"ID": "4875",
	"Nome": "Embu-Guaçu",
	"Estado": "26"
},
     {
	"ID": "4876",
	"Nome": "Emilianópolis",
	"Estado": "26"
},
     {
	"ID": "4877",
	"Nome": "Engenheiro Coelho",
	"Estado": "26"
},
     {
	"ID": "4878",
	"Nome": "Espírito Santo do Pinhal",
	"Estado": "26"
},
     {
	"ID": "4879",
	"Nome": "Espírito Santo do Turvo",
	"Estado": "26"
},
     {
	"ID": "4880",
	"Nome": "Estiva Gerbi",
	"Estado": "26"
},
     {
	"ID": "4881",
	"Nome": "Estrela d`Oeste",
	"Estado": "26"
},
     {
	"ID": "4882",
	"Nome": "Estrela do Norte",
	"Estado": "26"
},
     {
	"ID": "4883",
	"Nome": "Euclides da Cunha Paulista",
	"Estado": "26"
},
     {
	"ID": "4884",
	"Nome": "Fartura",
	"Estado": "26"
},
     {
	"ID": "4885",
	"Nome": "Fernando Prestes",
	"Estado": "26"
},
     {
	"ID": "4886",
	"Nome": "Fernandópolis",
	"Estado": "26"
},
     {
	"ID": "4887",
	"Nome": "Fernão",
	"Estado": "26"
},
     {
	"ID": "4888",
	"Nome": "Ferraz de Vasconcelos",
	"Estado": "26"
},
     {
	"ID": "4889",
	"Nome": "Flora Rica",
	"Estado": "26"
},
     {
	"ID": "4890",
	"Nome": "Floreal",
	"Estado": "26"
},
     {
	"ID": "4891",
	"Nome": "Flórida Paulista",
	"Estado": "26"
},
     {
	"ID": "4892",
	"Nome": "Florínia",
	"Estado": "26"
},
     {
	"ID": "4893",
	"Nome": "Franca",
	"Estado": "26"
},
     {
	"ID": "4894",
	"Nome": "Francisco Morato",
	"Estado": "26"
},
     {
	"ID": "4895",
	"Nome": "Franco da Rocha",
	"Estado": "26"
},
     {
	"ID": "4896",
	"Nome": "Gabriel Monteiro",
	"Estado": "26"
},
     {
	"ID": "4897",
	"Nome": "Gália",
	"Estado": "26"
},
     {
	"ID": "4898",
	"Nome": "Garça",
	"Estado": "26"
},
     {
	"ID": "4899",
	"Nome": "Gastão Vidigal",
	"Estado": "26"
},
     {
	"ID": "4900",
	"Nome": "Gavião Peixoto",
	"Estado": "26"
},
     {
	"ID": "4901",
	"Nome": "General Salgado",
	"Estado": "26"
},
     {
	"ID": "4902",
	"Nome": "Getulina",
	"Estado": "26"
},
     {
	"ID": "4903",
	"Nome": "Glicério",
	"Estado": "26"
},
     {
	"ID": "4904",
	"Nome": "Guaiçara",
	"Estado": "26"
},
     {
	"ID": "4905",
	"Nome": "Guaimbê",
	"Estado": "26"
},
     {
	"ID": "4906",
	"Nome": "Guaíra",
	"Estado": "26"
},
     {
	"ID": "4907",
	"Nome": "Guapiaçu",
	"Estado": "26"
},
     {
	"ID": "4908",
	"Nome": "Guapiara",
	"Estado": "26"
},
     {
	"ID": "4909",
	"Nome": "Guará",
	"Estado": "26"
},
     {
	"ID": "4910",
	"Nome": "Guaraçaí",
	"Estado": "26"
},
     {
	"ID": "4911",
	"Nome": "Guaraci",
	"Estado": "26"
},
     {
	"ID": "4912",
	"Nome": "Guarani d`Oeste",
	"Estado": "26"
},
     {
	"ID": "4913",
	"Nome": "Guarantã",
	"Estado": "26"
},
     {
	"ID": "4914",
	"Nome": "Guararapes",
	"Estado": "26"
},
     {
	"ID": "4915",
	"Nome": "Guararema",
	"Estado": "26"
},
     {
	"ID": "4916",
	"Nome": "Guaratinguetá",
	"Estado": "26"
},
     {
	"ID": "4917",
	"Nome": "Guareí",
	"Estado": "26"
},
     {
	"ID": "4918",
	"Nome": "Guariba",
	"Estado": "26"
},
     {
	"ID": "4919",
	"Nome": "Guarujá",
	"Estado": "26"
},
     {
	"ID": "4920",
	"Nome": "Guarulhos",
	"Estado": "26"
},
     {
	"ID": "4921",
	"Nome": "Guatapará",
	"Estado": "26"
},
     {
	"ID": "4922",
	"Nome": "Guzolândia",
	"Estado": "26"
},
     {
	"ID": "4923",
	"Nome": "Herculândia",
	"Estado": "26"
},
     {
	"ID": "4924",
	"Nome": "Holambra",
	"Estado": "26"
},
     {
	"ID": "4925",
	"Nome": "Hortolândia",
	"Estado": "26"
},
     {
	"ID": "4926",
	"Nome": "Iacanga",
	"Estado": "26"
},
     {
	"ID": "4927",
	"Nome": "Iacri",
	"Estado": "26"
},
     {
	"ID": "4928",
	"Nome": "Iaras",
	"Estado": "26"
},
     {
	"ID": "4929",
	"Nome": "Ibaté",
	"Estado": "26"
},
     {
	"ID": "4930",
	"Nome": "Ibirá",
	"Estado": "26"
},
     {
	"ID": "4931",
	"Nome": "Ibirarema",
	"Estado": "26"
},
     {
	"ID": "4932",
	"Nome": "Ibitinga",
	"Estado": "26"
},
     {
	"ID": "4933",
	"Nome": "Ibiúna",
	"Estado": "26"
},
     {
	"ID": "4934",
	"Nome": "Icém",
	"Estado": "26"
},
     {
	"ID": "4935",
	"Nome": "Iepê",
	"Estado": "26"
},
     {
	"ID": "4936",
	"Nome": "Igaraçu do Tietê",
	"Estado": "26"
},
     {
	"ID": "4937",
	"Nome": "Igarapava",
	"Estado": "26"
},
     {
	"ID": "4938",
	"Nome": "Igaratá",
	"Estado": "26"
},
     {
	"ID": "4939",
	"Nome": "Iguape",
	"Estado": "26"
},
     {
	"ID": "4940",
	"Nome": "Ilha Comprida",
	"Estado": "26"
},
     {
	"ID": "4941",
	"Nome": "Ilha Solteira",
	"Estado": "26"
},
     {
	"ID": "4942",
	"Nome": "Ilhabela",
	"Estado": "26"
},
     {
	"ID": "4943",
	"Nome": "Indaiatuba",
	"Estado": "26"
},
     {
	"ID": "4944",
	"Nome": "Indiana",
	"Estado": "26"
},
     {
	"ID": "4945",
	"Nome": "Indiaporã",
	"Estado": "26"
},
     {
	"ID": "4946",
	"Nome": "Inúbia Paulista",
	"Estado": "26"
},
     {
	"ID": "4947",
	"Nome": "Ipaussu",
	"Estado": "26"
},
     {
	"ID": "4948",
	"Nome": "Iperó",
	"Estado": "26"
},
     {
	"ID": "4949",
	"Nome": "Ipeúna",
	"Estado": "26"
},
     {
	"ID": "4950",
	"Nome": "Ipiguá",
	"Estado": "26"
},
     {
	"ID": "4951",
	"Nome": "Iporanga",
	"Estado": "26"
},
     {
	"ID": "4952",
	"Nome": "Ipuã",
	"Estado": "26"
},
     {
	"ID": "4953",
	"Nome": "Iracemápolis",
	"Estado": "26"
},
     {
	"ID": "4954",
	"Nome": "Irapuã",
	"Estado": "26"
},
     {
	"ID": "4955",
	"Nome": "Irapuru",
	"Estado": "26"
},
     {
	"ID": "4956",
	"Nome": "Itaberá",
	"Estado": "26"
},
     {
	"ID": "4957",
	"Nome": "Itaí",
	"Estado": "26"
},
     {
	"ID": "4958",
	"Nome": "Itajobi",
	"Estado": "26"
},
     {
	"ID": "4959",
	"Nome": "Itaju",
	"Estado": "26"
},
     {
	"ID": "4960",
	"Nome": "Itanhaém",
	"Estado": "26"
},
     {
	"ID": "4961",
	"Nome": "Itaóca",
	"Estado": "26"
},
     {
	"ID": "4962",
	"Nome": "Itapecerica da Serra",
	"Estado": "26"
},
     {
	"ID": "4963",
	"Nome": "Itapetininga",
	"Estado": "26"
},
     {
	"ID": "4964",
	"Nome": "Itapeva",
	"Estado": "26"
},
     {
	"ID": "4965",
	"Nome": "Itapevi",
	"Estado": "26"
},
     {
	"ID": "4966",
	"Nome": "Itapira",
	"Estado": "26"
},
     {
	"ID": "4967",
	"Nome": "Itapirapuã Paulista",
	"Estado": "26"
},
     {
	"ID": "4968",
	"Nome": "Itápolis",
	"Estado": "26"
},
     {
	"ID": "4969",
	"Nome": "Itaporanga",
	"Estado": "26"
},
     {
	"ID": "4970",
	"Nome": "Itapuí",
	"Estado": "26"
},
     {
	"ID": "4971",
	"Nome": "Itapura",
	"Estado": "26"
},
     {
	"ID": "4972",
	"Nome": "Itaquaquecetuba",
	"Estado": "26"
},
     {
	"ID": "4973",
	"Nome": "Itararé",
	"Estado": "26"
},
     {
	"ID": "4974",
	"Nome": "Itariri",
	"Estado": "26"
},
     {
	"ID": "4975",
	"Nome": "Itatiba",
	"Estado": "26"
},
     {
	"ID": "4976",
	"Nome": "Itatinga",
	"Estado": "26"
},
     {
	"ID": "4977",
	"Nome": "Itirapina",
	"Estado": "26"
},
     {
	"ID": "4978",
	"Nome": "Itirapuã",
	"Estado": "26"
},
     {
	"ID": "4979",
	"Nome": "Itobi",
	"Estado": "26"
},
     {
	"ID": "4980",
	"Nome": "Itu",
	"Estado": "26"
},
     {
	"ID": "4981",
	"Nome": "Itupeva",
	"Estado": "26"
},
     {
	"ID": "4982",
	"Nome": "Ituverava",
	"Estado": "26"
},
     {
	"ID": "4983",
	"Nome": "Jaborandi",
	"Estado": "26"
},
     {
	"ID": "4984",
	"Nome": "Jaboticabal",
	"Estado": "26"
},
     {
	"ID": "4985",
	"Nome": "Jacareí",
	"Estado": "26"
},
     {
	"ID": "4986",
	"Nome": "Jaci",
	"Estado": "26"
},
     {
	"ID": "4987",
	"Nome": "Jacupiranga",
	"Estado": "26"
},
     {
	"ID": "4988",
	"Nome": "Jaguariúna",
	"Estado": "26"
},
     {
	"ID": "4989",
	"Nome": "Jales",
	"Estado": "26"
},
     {
	"ID": "4990",
	"Nome": "Jambeiro",
	"Estado": "26"
},
     {
	"ID": "4991",
	"Nome": "Jandira",
	"Estado": "26"
},
     {
	"ID": "4992",
	"Nome": "Jardinópolis",
	"Estado": "26"
},
     {
	"ID": "4993",
	"Nome": "Jarinu",
	"Estado": "26"
},
     {
	"ID": "4994",
	"Nome": "Jaú",
	"Estado": "26"
},
     {
	"ID": "4995",
	"Nome": "Jeriquara",
	"Estado": "26"
},
     {
	"ID": "4996",
	"Nome": "Joanópolis",
	"Estado": "26"
},
     {
	"ID": "4997",
	"Nome": "João Ramalho",
	"Estado": "26"
},
     {
	"ID": "4998",
	"Nome": "José Bonifácio",
	"Estado": "26"
},
     {
	"ID": "4999",
	"Nome": "Júlio Mesquita",
	"Estado": "26"
},
     {
	"ID": "5000",
	"Nome": "Jumirim",
	"Estado": "26"
},
     {
	"ID": "5001",
	"Nome": "Jundiaí",
	"Estado": "26"
},
     {
	"ID": "5002",
	"Nome": "Junqueirópolis",
	"Estado": "26"
},
     {
	"ID": "5003",
	"Nome": "Juquiá",
	"Estado": "26"
},
     {
	"ID": "5004",
	"Nome": "Juquitiba",
	"Estado": "26"
},
     {
	"ID": "5005",
	"Nome": "Lagoinha",
	"Estado": "26"
},
     {
	"ID": "5006",
	"Nome": "Laranjal Paulista",
	"Estado": "26"
},
     {
	"ID": "5007",
	"Nome": "Lavínia",
	"Estado": "26"
},
     {
	"ID": "5008",
	"Nome": "Lavrinhas",
	"Estado": "26"
},
     {
	"ID": "5009",
	"Nome": "Leme",
	"Estado": "26"
},
     {
	"ID": "5010",
	"Nome": "Lençóis Paulista",
	"Estado": "26"
},
     {
	"ID": "5011",
	"Nome": "Limeira",
	"Estado": "26"
},
     {
	"ID": "5012",
	"Nome": "Lindóia",
	"Estado": "26"
},
     {
	"ID": "5013",
	"Nome": "Lins",
	"Estado": "26"
},
     {
	"ID": "5014",
	"Nome": "Lorena",
	"Estado": "26"
},
     {
	"ID": "5015",
	"Nome": "Lourdes",
	"Estado": "26"
},
     {
	"ID": "5016",
	"Nome": "Louveira",
	"Estado": "26"
},
     {
	"ID": "5017",
	"Nome": "Lucélia",
	"Estado": "26"
},
     {
	"ID": "5018",
	"Nome": "Lucianópolis",
	"Estado": "26"
},
     {
	"ID": "5019",
	"Nome": "Luís Antônio",
	"Estado": "26"
},
     {
	"ID": "5020",
	"Nome": "Luiziânia",
	"Estado": "26"
},
     {
	"ID": "5021",
	"Nome": "Lupércio",
	"Estado": "26"
},
     {
	"ID": "5022",
	"Nome": "Lutécia",
	"Estado": "26"
},
     {
	"ID": "5023",
	"Nome": "Macatuba",
	"Estado": "26"
},
     {
	"ID": "5024",
	"Nome": "Macaubal",
	"Estado": "26"
},
     {
	"ID": "5025",
	"Nome": "Macedônia",
	"Estado": "26"
},
     {
	"ID": "5026",
	"Nome": "Magda",
	"Estado": "26"
},
     {
	"ID": "5027",
	"Nome": "Mairinque",
	"Estado": "26"
},
     {
	"ID": "5028",
	"Nome": "Mairiporã",
	"Estado": "26"
},
     {
	"ID": "5029",
	"Nome": "Manduri",
	"Estado": "26"
},
     {
	"ID": "5030",
	"Nome": "Marabá Paulista",
	"Estado": "26"
},
     {
	"ID": "5031",
	"Nome": "Maracaí",
	"Estado": "26"
},
     {
	"ID": "5032",
	"Nome": "Marapoama",
	"Estado": "26"
},
     {
	"ID": "5033",
	"Nome": "Mariápolis",
	"Estado": "26"
},
     {
	"ID": "5034",
	"Nome": "Marília",
	"Estado": "26"
},
     {
	"ID": "5035",
	"Nome": "Marinópolis",
	"Estado": "26"
},
     {
	"ID": "5036",
	"Nome": "Martinópolis",
	"Estado": "26"
},
     {
	"ID": "5037",
	"Nome": "Matão",
	"Estado": "26"
},
     {
	"ID": "5038",
	"Nome": "Mauá",
	"Estado": "26"
},
     {
	"ID": "5039",
	"Nome": "Mendonça",
	"Estado": "26"
},
     {
	"ID": "5040",
	"Nome": "Meridiano",
	"Estado": "26"
},
     {
	"ID": "5041",
	"Nome": "Mesópolis",
	"Estado": "26"
},
     {
	"ID": "5042",
	"Nome": "Miguelópolis",
	"Estado": "26"
},
     {
	"ID": "5043",
	"Nome": "Mineiros do Tietê",
	"Estado": "26"
},
     {
	"ID": "5044",
	"Nome": "Mira Estrela",
	"Estado": "26"
},
     {
	"ID": "5045",
	"Nome": "Miracatu",
	"Estado": "26"
},
     {
	"ID": "5046",
	"Nome": "Mirandópolis",
	"Estado": "26"
},
     {
	"ID": "5047",
	"Nome": "Mirante do Paranapanema",
	"Estado": "26"
},
     {
	"ID": "5048",
	"Nome": "Mirassol",
	"Estado": "26"
},
     {
	"ID": "5049",
	"Nome": "Mirassolândia",
	"Estado": "26"
},
     {
	"ID": "5050",
	"Nome": "Mococa",
	"Estado": "26"
},
     {
	"ID": "5051",
	"Nome": "Mogi das Cruzes",
	"Estado": "26"
},
     {
	"ID": "5052",
	"Nome": "Mogi Guaçu",
	"Estado": "26"
},
     {
	"ID": "5053",
	"Nome": "Moji Mirim",
	"Estado": "26"
},
     {
	"ID": "5054",
	"Nome": "Mombuca",
	"Estado": "26"
},
     {
	"ID": "5055",
	"Nome": "Monções",
	"Estado": "26"
},
     {
	"ID": "5056",
	"Nome": "Mongaguá",
	"Estado": "26"
},
     {
	"ID": "5057",
	"Nome": "Monte Alegre do Sul",
	"Estado": "26"
},
     {
	"ID": "5058",
	"Nome": "Monte Alto",
	"Estado": "26"
},
     {
	"ID": "5059",
	"Nome": "Monte Aprazível",
	"Estado": "26"
},
     {
	"ID": "5060",
	"Nome": "Monte Azul Paulista",
	"Estado": "26"
},
     {
	"ID": "5061",
	"Nome": "Monte Castelo",
	"Estado": "26"
},
     {
	"ID": "5062",
	"Nome": "Monte Mor",
	"Estado": "26"
},
     {
	"ID": "5063",
	"Nome": "Monteiro Lobato",
	"Estado": "26"
},
     {
	"ID": "5064",
	"Nome": "Morro Agudo",
	"Estado": "26"
},
     {
	"ID": "5065",
	"Nome": "Morungaba",
	"Estado": "26"
},
     {
	"ID": "5066",
	"Nome": "Motuca",
	"Estado": "26"
},
     {
	"ID": "5067",
	"Nome": "Murutinga do Sul",
	"Estado": "26"
},
     {
	"ID": "5068",
	"Nome": "Nantes",
	"Estado": "26"
},
     {
	"ID": "5069",
	"Nome": "Narandiba",
	"Estado": "26"
},
     {
	"ID": "5070",
	"Nome": "Natividade da Serra",
	"Estado": "26"
},
     {
	"ID": "5071",
	"Nome": "Nazaré Paulista",
	"Estado": "26"
},
     {
	"ID": "5072",
	"Nome": "Neves Paulista",
	"Estado": "26"
},
     {
	"ID": "5073",
	"Nome": "Nhandeara",
	"Estado": "26"
},
     {
	"ID": "5074",
	"Nome": "Nipoã",
	"Estado": "26"
},
     {
	"ID": "5075",
	"Nome": "Nova Aliança",
	"Estado": "26"
},
     {
	"ID": "5076",
	"Nome": "Nova Campina",
	"Estado": "26"
},
     {
	"ID": "5077",
	"Nome": "Nova Canaã Paulista",
	"Estado": "26"
},
     {
	"ID": "5078",
	"Nome": "Nova Castilho",
	"Estado": "26"
},
     {
	"ID": "5079",
	"Nome": "Nova Europa",
	"Estado": "26"
},
     {
	"ID": "5080",
	"Nome": "Nova Granada",
	"Estado": "26"
},
     {
	"ID": "5081",
	"Nome": "Nova Guataporanga",
	"Estado": "26"
},
     {
	"ID": "5082",
	"Nome": "Nova Independência",
	"Estado": "26"
},
     {
	"ID": "5083",
	"Nome": "Nova Luzitânia",
	"Estado": "26"
},
     {
	"ID": "5084",
	"Nome": "Nova Odessa",
	"Estado": "26"
},
     {
	"ID": "5085",
	"Nome": "Novais",
	"Estado": "26"
},
     {
	"ID": "5086",
	"Nome": "Novo Horizonte",
	"Estado": "26"
},
     {
	"ID": "5087",
	"Nome": "Nuporanga",
	"Estado": "26"
},
     {
	"ID": "5088",
	"Nome": "Ocauçu",
	"Estado": "26"
},
     {
	"ID": "5089",
	"Nome": "Óleo",
	"Estado": "26"
},
     {
	"ID": "5090",
	"Nome": "Olímpia",
	"Estado": "26"
},
     {
	"ID": "5091",
	"Nome": "Onda Verde",
	"Estado": "26"
},
     {
	"ID": "5092",
	"Nome": "Oriente",
	"Estado": "26"
},
     {
	"ID": "5093",
	"Nome": "Orindiúva",
	"Estado": "26"
},
     {
	"ID": "5094",
	"Nome": "Orlândia",
	"Estado": "26"
},
     {
	"ID": "5095",
	"Nome": "Osasco",
	"Estado": "26"
},
     {
	"ID": "5096",
	"Nome": "Oscar Bressane",
	"Estado": "26"
},
     {
	"ID": "5097",
	"Nome": "Osvaldo Cruz",
	"Estado": "26"
},
     {
	"ID": "5098",
	"Nome": "Ourinhos",
	"Estado": "26"
},
     {
	"ID": "5099",
	"Nome": "Ouro Verde",
	"Estado": "26"
},
     {
	"ID": "5100",
	"Nome": "Ouroeste",
	"Estado": "26"
},
     {
	"ID": "5101",
	"Nome": "Pacaembu",
	"Estado": "26"
},
     {
	"ID": "5102",
	"Nome": "Palestina",
	"Estado": "26"
},
     {
	"ID": "5103",
	"Nome": "Palmares Paulista",
	"Estado": "26"
},
     {
	"ID": "5104",
	"Nome": "Palmeira d`Oeste",
	"Estado": "26"
},
     {
	"ID": "5105",
	"Nome": "Palmital",
	"Estado": "26"
},
     {
	"ID": "5106",
	"Nome": "Panorama",
	"Estado": "26"
},
     {
	"ID": "5107",
	"Nome": "Paraguaçu Paulista",
	"Estado": "26"
},
     {
	"ID": "5108",
	"Nome": "Paraibuna",
	"Estado": "26"
},
     {
	"ID": "5109",
	"Nome": "Paraíso",
	"Estado": "26"
},
     {
	"ID": "5110",
	"Nome": "Paranapanema",
	"Estado": "26"
},
     {
	"ID": "5111",
	"Nome": "Paranapuã",
	"Estado": "26"
},
     {
	"ID": "5112",
	"Nome": "Parapuã",
	"Estado": "26"
},
     {
	"ID": "5113",
	"Nome": "Pardinho",
	"Estado": "26"
},
     {
	"ID": "5114",
	"Nome": "Pariquera-Açu",
	"Estado": "26"
},
     {
	"ID": "5115",
	"Nome": "Parisi",
	"Estado": "26"
},
     {
	"ID": "5116",
	"Nome": "Patrocínio Paulista",
	"Estado": "26"
},
     {
	"ID": "5117",
	"Nome": "Paulicéia",
	"Estado": "26"
},
     {
	"ID": "5118",
	"Nome": "Paulínia",
	"Estado": "26"
},
     {
	"ID": "5119",
	"Nome": "Paulistânia",
	"Estado": "26"
},
     {
	"ID": "5120",
	"Nome": "Paulo de Faria",
	"Estado": "26"
},
     {
	"ID": "5121",
	"Nome": "Pederneiras",
	"Estado": "26"
},
     {
	"ID": "5122",
	"Nome": "Pedra Bela",
	"Estado": "26"
},
     {
	"ID": "5123",
	"Nome": "Pedranópolis",
	"Estado": "26"
},
     {
	"ID": "5124",
	"Nome": "Pedregulho",
	"Estado": "26"
},
     {
	"ID": "5125",
	"Nome": "Pedreira",
	"Estado": "26"
},
     {
	"ID": "5126",
	"Nome": "Pedrinhas Paulista",
	"Estado": "26"
},
     {
	"ID": "5127",
	"Nome": "Pedro de Toledo",
	"Estado": "26"
},
     {
	"ID": "5128",
	"Nome": "Penápolis",
	"Estado": "26"
},
     {
	"ID": "5129",
	"Nome": "Pereira Barreto",
	"Estado": "26"
},
     {
	"ID": "5130",
	"Nome": "Pereiras",
	"Estado": "26"
},
     {
	"ID": "5131",
	"Nome": "Peruíbe",
	"Estado": "26"
},
     {
	"ID": "5132",
	"Nome": "Piacatu",
	"Estado": "26"
},
     {
	"ID": "5133",
	"Nome": "Piedade",
	"Estado": "26"
},
     {
	"ID": "5134",
	"Nome": "Pilar do Sul",
	"Estado": "26"
},
     {
	"ID": "5135",
	"Nome": "Pindamonhangaba",
	"Estado": "26"
},
     {
	"ID": "5136",
	"Nome": "Pindorama",
	"Estado": "26"
},
     {
	"ID": "5137",
	"Nome": "Pinhalzinho",
	"Estado": "26"
},
     {
	"ID": "5138",
	"Nome": "Piquerobi",
	"Estado": "26"
},
     {
	"ID": "5139",
	"Nome": "Piquete",
	"Estado": "26"
},
     {
	"ID": "5140",
	"Nome": "Piracaia",
	"Estado": "26"
},
     {
	"ID": "5141",
	"Nome": "Piracicaba",
	"Estado": "26"
},
     {
	"ID": "5142",
	"Nome": "Piraju",
	"Estado": "26"
},
     {
	"ID": "5143",
	"Nome": "Pirajuí",
	"Estado": "26"
},
     {
	"ID": "5144",
	"Nome": "Pirangi",
	"Estado": "26"
},
     {
	"ID": "5145",
	"Nome": "Pirapora do Bom Jesus",
	"Estado": "26"
},
     {
	"ID": "5146",
	"Nome": "Pirapozinho",
	"Estado": "26"
},
     {
	"ID": "5147",
	"Nome": "Pirassununga",
	"Estado": "26"
},
     {
	"ID": "5148",
	"Nome": "Piratininga",
	"Estado": "26"
},
     {
	"ID": "5149",
	"Nome": "Pitangueiras",
	"Estado": "26"
},
     {
	"ID": "5150",
	"Nome": "Planalto",
	"Estado": "26"
},
     {
	"ID": "5151",
	"Nome": "Platina",
	"Estado": "26"
},
     {
	"ID": "5152",
	"Nome": "Poá",
	"Estado": "26"
},
     {
	"ID": "5153",
	"Nome": "Poloni",
	"Estado": "26"
},
     {
	"ID": "5154",
	"Nome": "Pompéia",
	"Estado": "26"
},
     {
	"ID": "5155",
	"Nome": "Pongaí",
	"Estado": "26"
},
     {
	"ID": "5156",
	"Nome": "Pontal",
	"Estado": "26"
},
     {
	"ID": "5157",
	"Nome": "Pontalinda",
	"Estado": "26"
},
     {
	"ID": "5158",
	"Nome": "Pontes Gestal",
	"Estado": "26"
},
     {
	"ID": "5159",
	"Nome": "Populina",
	"Estado": "26"
},
     {
	"ID": "5160",
	"Nome": "Porangaba",
	"Estado": "26"
},
     {
	"ID": "5161",
	"Nome": "Porto Feliz",
	"Estado": "26"
},
     {
	"ID": "5162",
	"Nome": "Porto Ferreira",
	"Estado": "26"
},
     {
	"ID": "5163",
	"Nome": "Potim",
	"Estado": "26"
},
     {
	"ID": "5164",
	"Nome": "Potirendaba",
	"Estado": "26"
},
     {
	"ID": "5165",
	"Nome": "Pracinha",
	"Estado": "26"
},
     {
	"ID": "5166",
	"Nome": "Pradópolis",
	"Estado": "26"
},
     {
	"ID": "5167",
	"Nome": "Praia Grande",
	"Estado": "26"
},
     {
	"ID": "5168",
	"Nome": "Pratânia",
	"Estado": "26"
},
     {
	"ID": "5169",
	"Nome": "Presidente Alves",
	"Estado": "26"
},
     {
	"ID": "5170",
	"Nome": "Presidente Bernardes",
	"Estado": "26"
},
     {
	"ID": "5171",
	"Nome": "Presidente Epitácio",
	"Estado": "26"
},
     {
	"ID": "5172",
	"Nome": "Presidente Prudente",
	"Estado": "26"
},
     {
	"ID": "5173",
	"Nome": "Presidente Venceslau",
	"Estado": "26"
},
     {
	"ID": "5174",
	"Nome": "Promissão",
	"Estado": "26"
},
     {
	"ID": "5175",
	"Nome": "Quadra",
	"Estado": "26"
},
     {
	"ID": "5176",
	"Nome": "Quatá",
	"Estado": "26"
},
     {
	"ID": "5177",
	"Nome": "Queiroz",
	"Estado": "26"
},
     {
	"ID": "5178",
	"Nome": "Queluz",
	"Estado": "26"
},
     {
	"ID": "5179",
	"Nome": "Quintana",
	"Estado": "26"
},
     {
	"ID": "5180",
	"Nome": "Rafard",
	"Estado": "26"
},
     {
	"ID": "5181",
	"Nome": "Rancharia",
	"Estado": "26"
},
     {
	"ID": "5182",
	"Nome": "Redenção da Serra",
	"Estado": "26"
},
     {
	"ID": "5183",
	"Nome": "Regente Feijó",
	"Estado": "26"
},
     {
	"ID": "5184",
	"Nome": "Reginópolis",
	"Estado": "26"
},
     {
	"ID": "5185",
	"Nome": "Registro",
	"Estado": "26"
},
     {
	"ID": "5186",
	"Nome": "Restinga",
	"Estado": "26"
},
     {
	"ID": "5187",
	"Nome": "Ribeira",
	"Estado": "26"
},
     {
	"ID": "5188",
	"Nome": "Ribeirão Bonito",
	"Estado": "26"
},
     {
	"ID": "5189",
	"Nome": "Ribeirão Branco",
	"Estado": "26"
},
     {
	"ID": "5190",
	"Nome": "Ribeirão Corrente",
	"Estado": "26"
},
     {
	"ID": "5191",
	"Nome": "Ribeirão do Sul",
	"Estado": "26"
},
     {
	"ID": "5192",
	"Nome": "Ribeirão dos Índios",
	"Estado": "26"
},
     {
	"ID": "5193",
	"Nome": "Ribeirão Grande",
	"Estado": "26"
},
     {
	"ID": "5194",
	"Nome": "Ribeirão Pires",
	"Estado": "26"
},
     {
	"ID": "5195",
	"Nome": "Ribeirão Preto",
	"Estado": "26"
},
     {
	"ID": "5196",
	"Nome": "Rifaina",
	"Estado": "26"
},
     {
	"ID": "5197",
	"Nome": "Rincão",
	"Estado": "26"
},
     {
	"ID": "5198",
	"Nome": "Rinópolis",
	"Estado": "26"
},
     {
	"ID": "5199",
	"Nome": "Rio Claro",
	"Estado": "26"
},
     {
	"ID": "5200",
	"Nome": "Rio das Pedras",
	"Estado": "26"
},
     {
	"ID": "5201",
	"Nome": "Rio Grande da Serra",
	"Estado": "26"
},
     {
	"ID": "5202",
	"Nome": "Riolândia",
	"Estado": "26"
},
     {
	"ID": "5203",
	"Nome": "Riversul",
	"Estado": "26"
},
     {
	"ID": "5204",
	"Nome": "Rosana",
	"Estado": "26"
},
     {
	"ID": "5205",
	"Nome": "Roseira",
	"Estado": "26"
},
     {
	"ID": "5206",
	"Nome": "Rubiácea",
	"Estado": "26"
},
     {
	"ID": "5207",
	"Nome": "Rubinéia",
	"Estado": "26"
},
     {
	"ID": "5208",
	"Nome": "Sabino",
	"Estado": "26"
},
     {
	"ID": "5209",
	"Nome": "Sagres",
	"Estado": "26"
},
     {
	"ID": "5210",
	"Nome": "Sales",
	"Estado": "26"
},
     {
	"ID": "5211",
	"Nome": "Sales Oliveira",
	"Estado": "26"
},
     {
	"ID": "5212",
	"Nome": "Salesópolis",
	"Estado": "26"
},
     {
	"ID": "5213",
	"Nome": "Salmourão",
	"Estado": "26"
},
     {
	"ID": "5214",
	"Nome": "Saltinho",
	"Estado": "26"
},
     {
	"ID": "5215",
	"Nome": "Salto",
	"Estado": "26"
},
     {
	"ID": "5216",
	"Nome": "Salto de Pirapora",
	"Estado": "26"
},
     {
	"ID": "5217",
	"Nome": "Salto Grande",
	"Estado": "26"
},
     {
	"ID": "5218",
	"Nome": "Sandovalina",
	"Estado": "26"
},
     {
	"ID": "5219",
	"Nome": "Santa Adélia",
	"Estado": "26"
},
     {
	"ID": "5220",
	"Nome": "Santa Albertina",
	"Estado": "26"
},
     {
	"ID": "5221",
	"Nome": "Santa Bárbara d`Oeste",
	"Estado": "26"
},
     {
	"ID": "5222",
	"Nome": "Santa Branca",
	"Estado": "26"
},
     {
	"ID": "5223",
	"Nome": "Santa Clara d`Oeste",
	"Estado": "26"
},
     {
	"ID": "5224",
	"Nome": "Santa Cruz da Conceição",
	"Estado": "26"
},
     {
	"ID": "5225",
	"Nome": "Santa Cruz da Esperança",
	"Estado": "26"
},
     {
	"ID": "5226",
	"Nome": "Santa Cruz das Palmeiras",
	"Estado": "26"
},
     {
	"ID": "5227",
	"Nome": "Santa Cruz do Rio Pardo",
	"Estado": "26"
},
     {
	"ID": "5228",
	"Nome": "Santa Ernestina",
	"Estado": "26"
},
     {
	"ID": "5229",
	"Nome": "Santa Fé do Sul",
	"Estado": "26"
},
     {
	"ID": "5230",
	"Nome": "Santa Gertrudes",
	"Estado": "26"
},
     {
	"ID": "5231",
	"Nome": "Santa Isabel",
	"Estado": "26"
},
     {
	"ID": "5232",
	"Nome": "Santa Lúcia",
	"Estado": "26"
},
     {
	"ID": "5233",
	"Nome": "Santa Maria da Serra",
	"Estado": "26"
},
     {
	"ID": "5234",
	"Nome": "Santa Mercedes",
	"Estado": "26"
},
     {
	"ID": "5235",
	"Nome": "Santa Rita d`Oeste",
	"Estado": "26"
},
     {
	"ID": "5236",
	"Nome": "Santa Rita do Passa Quatro",
	"Estado": "26"
},
     {
	"ID": "5237",
	"Nome": "Santa Rosa de Viterbo",
	"Estado": "26"
},
     {
	"ID": "5238",
	"Nome": "Santa Salete",
	"Estado": "26"
},
     {
	"ID": "5239",
	"Nome": "Santana da Ponte Pensa",
	"Estado": "26"
},
     {
	"ID": "5240",
	"Nome": "Santana de Parnaíba",
	"Estado": "26"
},
     {
	"ID": "5241",
	"Nome": "Santo Anastácio",
	"Estado": "26"
},
     {
	"ID": "5242",
	"Nome": "Santo André",
	"Estado": "26"
},
     {
	"ID": "5243",
	"Nome": "Santo Antônio da Alegria",
	"Estado": "26"
},
     {
	"ID": "5244",
	"Nome": "Santo Antônio de Posse",
	"Estado": "26"
},
     {
	"ID": "5245",
	"Nome": "Santo Antônio do Aracanguá",
	"Estado": "26"
},
     {
	"ID": "5246",
	"Nome": "Santo Antônio do Jardim",
	"Estado": "26"
},
     {
	"ID": "5247",
	"Nome": "Santo Antônio do Pinhal",
	"Estado": "26"
},
     {
	"ID": "5248",
	"Nome": "Santo Expedito",
	"Estado": "26"
},
     {
	"ID": "5249",
	"Nome": "Santópolis do Aguapeí",
	"Estado": "26"
},
     {
	"ID": "5250",
	"Nome": "Santos",
	"Estado": "26"
},
     {
	"ID": "5251",
	"Nome": "São Bento do Sapucaí",
	"Estado": "26"
},
     {
	"ID": "5252",
	"Nome": "São Bernardo do Campo",
	"Estado": "26"
},
     {
	"ID": "5253",
	"Nome": "São Caetano do Sul",
	"Estado": "26"
},
     {
	"ID": "5254",
	"Nome": "São Carlos",
	"Estado": "26"
},
     {
	"ID": "5255",
	"Nome": "São Francisco",
	"Estado": "26"
},
     {
	"ID": "5256",
	"Nome": "São João da Boa Vista",
	"Estado": "26"
},
     {
	"ID": "5257",
	"Nome": "São João das Duas Pontes",
	"Estado": "26"
},
     {
	"ID": "5258",
	"Nome": "São João de Iracema",
	"Estado": "26"
},
     {
	"ID": "5259",
	"Nome": "São João do Pau d`Alho",
	"Estado": "26"
},
     {
	"ID": "5260",
	"Nome": "São Joaquim da Barra",
	"Estado": "26"
},
     {
	"ID": "5261",
	"Nome": "São José da Bela Vista",
	"Estado": "26"
},
     {
	"ID": "5262",
	"Nome": "São José do Barreiro",
	"Estado": "26"
},
     {
	"ID": "5263",
	"Nome": "São José do Rio Pardo",
	"Estado": "26"
},
     {
	"ID": "5264",
	"Nome": "São José do Rio Preto",
	"Estado": "26"
},
     {
	"ID": "5265",
	"Nome": "São José dos Campos",
	"Estado": "26"
},
     {
	"ID": "5266",
	"Nome": "São Lourenço da Serra",
	"Estado": "26"
},
     {
	"ID": "5267",
	"Nome": "São Luís do Paraitinga",
	"Estado": "26"
},
     {
	"ID": "5268",
	"Nome": "São Manuel",
	"Estado": "26"
},
     {
	"ID": "5269",
	"Nome": "São Miguel Arcanjo",
	"Estado": "26"
},
     {
	"ID": "5270",
	"Nome": "São Paulo",
	"Estado": "26"
},
     {
	"ID": "5271",
	"Nome": "São Pedro",
	"Estado": "26"
},
     {
	"ID": "5272",
	"Nome": "São Pedro do Turvo",
	"Estado": "26"
},
     {
	"ID": "5273",
	"Nome": "São Roque",
	"Estado": "26"
},
     {
	"ID": "5274",
	"Nome": "São Sebastião",
	"Estado": "26"
},
     {
	"ID": "5275",
	"Nome": "São Sebastião da Grama",
	"Estado": "26"
},
     {
	"ID": "5276",
	"Nome": "São Simão",
	"Estado": "26"
},
     {
	"ID": "5277",
	"Nome": "São Vicente",
	"Estado": "26"
},
     {
	"ID": "5278",
	"Nome": "Sarapuí",
	"Estado": "26"
},
     {
	"ID": "5279",
	"Nome": "Sarutaiá",
	"Estado": "26"
},
     {
	"ID": "5280",
	"Nome": "Sebastianópolis do Sul",
	"Estado": "26"
},
     {
	"ID": "5281",
	"Nome": "Serra Azul",
	"Estado": "26"
},
     {
	"ID": "5282",
	"Nome": "Serra Negra",
	"Estado": "26"
},
     {
	"ID": "5283",
	"Nome": "Serrana",
	"Estado": "26"
},
     {
	"ID": "5284",
	"Nome": "Sertãozinho",
	"Estado": "26"
},
     {
	"ID": "5285",
	"Nome": "Sete Barras",
	"Estado": "26"
},
     {
	"ID": "5286",
	"Nome": "Severínia",
	"Estado": "26"
},
     {
	"ID": "5287",
	"Nome": "Silveiras",
	"Estado": "26"
},
     {
	"ID": "5288",
	"Nome": "Socorro",
	"Estado": "26"
},
     {
	"ID": "5289",
	"Nome": "Sorocaba",
	"Estado": "26"
},
     {
	"ID": "5290",
	"Nome": "Sud Mennucci",
	"Estado": "26"
},
     {
	"ID": "5291",
	"Nome": "Sumaré",
	"Estado": "26"
},
     {
	"ID": "5292",
	"Nome": "Suzanápolis",
	"Estado": "26"
},
     {
	"ID": "5293",
	"Nome": "Suzano",
	"Estado": "26"
},
     {
	"ID": "5294",
	"Nome": "Tabapuã",
	"Estado": "26"
},
     {
	"ID": "5295",
	"Nome": "Tabatinga",
	"Estado": "26"
},
     {
	"ID": "5296",
	"Nome": "Taboão da Serra",
	"Estado": "26"
},
     {
	"ID": "5297",
	"Nome": "Taciba",
	"Estado": "26"
},
     {
	"ID": "5298",
	"Nome": "Taguaí",
	"Estado": "26"
},
     {
	"ID": "5299",
	"Nome": "Taiaçu",
	"Estado": "26"
},
     {
	"ID": "5300",
	"Nome": "Taiúva",
	"Estado": "26"
},
     {
	"ID": "5301",
	"Nome": "Tambaú",
	"Estado": "26"
},
     {
	"ID": "5302",
	"Nome": "Tanabi",
	"Estado": "26"
},
     {
	"ID": "5303",
	"Nome": "Tapiraí",
	"Estado": "26"
},
     {
	"ID": "5304",
	"Nome": "Tapiratiba",
	"Estado": "26"
},
     {
	"ID": "5305",
	"Nome": "Taquaral",
	"Estado": "26"
},
     {
	"ID": "5306",
	"Nome": "Taquaritinga",
	"Estado": "26"
},
     {
	"ID": "5307",
	"Nome": "Taquarituba",
	"Estado": "26"
},
     {
	"ID": "5308",
	"Nome": "Taquarivaí",
	"Estado": "26"
},
     {
	"ID": "5309",
	"Nome": "Tarabai",
	"Estado": "26"
},
     {
	"ID": "5310",
	"Nome": "Tarumã",
	"Estado": "26"
},
     {
	"ID": "5311",
	"Nome": "Tatuí",
	"Estado": "26"
},
     {
	"ID": "5312",
	"Nome": "Taubaté",
	"Estado": "26"
},
     {
	"ID": "5313",
	"Nome": "Tejupá",
	"Estado": "26"
},
     {
	"ID": "5314",
	"Nome": "Teodoro Sampaio",
	"Estado": "26"
},
     {
	"ID": "5315",
	"Nome": "Terra Roxa",
	"Estado": "26"
},
     {
	"ID": "5316",
	"Nome": "Tietê",
	"Estado": "26"
},
     {
	"ID": "5317",
	"Nome": "Timburi",
	"Estado": "26"
},
     {
	"ID": "5318",
	"Nome": "Torre de Pedra",
	"Estado": "26"
},
     {
	"ID": "5319",
	"Nome": "Torrinha",
	"Estado": "26"
},
     {
	"ID": "5320",
	"Nome": "Trabiju",
	"Estado": "26"
},
     {
	"ID": "5321",
	"Nome": "Tremembé",
	"Estado": "26"
},
     {
	"ID": "5322",
	"Nome": "Três Fronteiras",
	"Estado": "26"
},
     {
	"ID": "5323",
	"Nome": "Tuiuti",
	"Estado": "26"
},
     {
	"ID": "5324",
	"Nome": "Tupã",
	"Estado": "26"
},
     {
	"ID": "5325",
	"Nome": "Tupi Paulista",
	"Estado": "26"
},
     {
	"ID": "5326",
	"Nome": "Turiúba",
	"Estado": "26"
},
     {
	"ID": "5327",
	"Nome": "Turmalina",
	"Estado": "26"
},
     {
	"ID": "5328",
	"Nome": "Ubarana",
	"Estado": "26"
},
     {
	"ID": "5329",
	"Nome": "Ubatuba",
	"Estado": "26"
},
     {
	"ID": "5330",
	"Nome": "Ubirajara",
	"Estado": "26"
},
     {
	"ID": "5331",
	"Nome": "Uchoa",
	"Estado": "26"
},
     {
	"ID": "5332",
	"Nome": "União Paulista",
	"Estado": "26"
},
     {
	"ID": "5333",
	"Nome": "Urânia",
	"Estado": "26"
},
     {
	"ID": "5334",
	"Nome": "Uru",
	"Estado": "26"
},
     {
	"ID": "5335",
	"Nome": "Urupês",
	"Estado": "26"
},
     {
	"ID": "5336",
	"Nome": "Valentim Gentil",
	"Estado": "26"
},
     {
	"ID": "5337",
	"Nome": "Valinhos",
	"Estado": "26"
},
     {
	"ID": "5338",
	"Nome": "Valparaíso",
	"Estado": "26"
},
     {
	"ID": "5339",
	"Nome": "Vargem",
	"Estado": "26"
},
     {
	"ID": "5340",
	"Nome": "Vargem Grande do Sul",
	"Estado": "26"
},
     {
	"ID": "5341",
	"Nome": "Vargem Grande Paulista",
	"Estado": "26"
},
     {
	"ID": "5342",
	"Nome": "Várzea Paulista",
	"Estado": "26"
},
     {
	"ID": "5343",
	"Nome": "Vera Cruz",
	"Estado": "26"
},
     {
	"ID": "5344",
	"Nome": "Vinhedo",
	"Estado": "26"
},
     {
	"ID": "5345",
	"Nome": "Viradouro",
	"Estado": "26"
},
     {
	"ID": "5346",
	"Nome": "Vista Alegre do Alto",
	"Estado": "26"
},
     {
	"ID": "5347",
	"Nome": "Vitória Brasil",
	"Estado": "26"
},
     {
	"ID": "5348",
	"Nome": "Votorantim",
	"Estado": "26"
},
     {
	"ID": "5349",
	"Nome": "Votuporanga",
	"Estado": "26"
},
     {
	"ID": "5350",
	"Nome": "Zacarias",
	"Estado": "26"
},
     {
	"ID": "5351",
	"Nome": "Amparo de São Francisco",
	"Estado": "25"
},
     {
	"ID": "5352",
	"Nome": "Aquidabã",
	"Estado": "25"
},
     {
	"ID": "5353",
	"Nome": "Aracaju",
	"Estado": "25"
},
     {
	"ID": "5354",
	"Nome": "Arauá",
	"Estado": "25"
},
     {
	"ID": "5355",
	"Nome": "Areia Branca",
	"Estado": "25"
},
     {
	"ID": "5356",
	"Nome": "Barra dos Coqueiros",
	"Estado": "25"
},
     {
	"ID": "5357",
	"Nome": "Boquim",
	"Estado": "25"
},
     {
	"ID": "5358",
	"Nome": "Brejo Grande",
	"Estado": "25"
},
     {
	"ID": "5359",
	"Nome": "Campo do Brito",
	"Estado": "25"
},
     {
	"ID": "5360",
	"Nome": "Canhoba",
	"Estado": "25"
},
     {
	"ID": "5361",
	"Nome": "Canindé de São Francisco",
	"Estado": "25"
},
     {
	"ID": "5362",
	"Nome": "Capela",
	"Estado": "25"
},
     {
	"ID": "5363",
	"Nome": "Carira",
	"Estado": "25"
},
     {
	"ID": "5364",
	"Nome": "Carmópolis",
	"Estado": "25"
},
     {
	"ID": "5365",
	"Nome": "Cedro de São João",
	"Estado": "25"
},
     {
	"ID": "5366",
	"Nome": "Cristinápolis",
	"Estado": "25"
},
     {
	"ID": "5367",
	"Nome": "Cumbe",
	"Estado": "25"
},
     {
	"ID": "5368",
	"Nome": "Divina Pastora",
	"Estado": "25"
},
     {
	"ID": "5369",
	"Nome": "Estância",
	"Estado": "25"
},
     {
	"ID": "5370",
	"Nome": "Feira Nova",
	"Estado": "25"
},
     {
	"ID": "5371",
	"Nome": "Frei Paulo",
	"Estado": "25"
},
     {
	"ID": "5372",
	"Nome": "Gararu",
	"Estado": "25"
},
     {
	"ID": "5373",
	"Nome": "General Maynard",
	"Estado": "25"
},
     {
	"ID": "5374",
	"Nome": "Gracho Cardoso",
	"Estado": "25"
},
     {
	"ID": "5375",
	"Nome": "Ilha das Flores",
	"Estado": "25"
},
     {
	"ID": "5376",
	"Nome": "Indiaroba",
	"Estado": "25"
},
     {
	"ID": "5377",
	"Nome": "Itabaiana",
	"Estado": "25"
},
     {
	"ID": "5378",
	"Nome": "Itabaianinha",
	"Estado": "25"
},
     {
	"ID": "5379",
	"Nome": "Itabi",
	"Estado": "25"
},
     {
	"ID": "5380",
	"Nome": "Itaporanga d`Ajuda",
	"Estado": "25"
},
     {
	"ID": "5381",
	"Nome": "Japaratuba",
	"Estado": "25"
},
     {
	"ID": "5382",
	"Nome": "Japoatã",
	"Estado": "25"
},
     {
	"ID": "5383",
	"Nome": "Lagarto",
	"Estado": "25"
},
     {
	"ID": "5384",
	"Nome": "Laranjeiras",
	"Estado": "25"
},
     {
	"ID": "5385",
	"Nome": "Macambira",
	"Estado": "25"
},
     {
	"ID": "5386",
	"Nome": "Malhada dos Bois",
	"Estado": "25"
},
     {
	"ID": "5387",
	"Nome": "Malhador",
	"Estado": "25"
},
     {
	"ID": "5388",
	"Nome": "Maruim",
	"Estado": "25"
},
     {
	"ID": "5389",
	"Nome": "Moita Bonita",
	"Estado": "25"
},
     {
	"ID": "5390",
	"Nome": "Monte Alegre de Sergipe",
	"Estado": "25"
},
     {
	"ID": "5391",
	"Nome": "Muribeca",
	"Estado": "25"
},
     {
	"ID": "5392",
	"Nome": "Neópolis",
	"Estado": "25"
},
     {
	"ID": "5393",
	"Nome": "Nossa Senhora Aparecida",
	"Estado": "25"
},
     {
	"ID": "5394",
	"Nome": "Nossa Senhora da Glória",
	"Estado": "25"
},
     {
	"ID": "5395",
	"Nome": "Nossa Senhora das Dores",
	"Estado": "25"
},
     {
	"ID": "5396",
	"Nome": "Nossa Senhora de Lourdes",
	"Estado": "25"
},
     {
	"ID": "5397",
	"Nome": "Nossa Senhora do Socorro",
	"Estado": "25"
},
     {
	"ID": "5398",
	"Nome": "Pacatuba",
	"Estado": "25"
},
     {
	"ID": "5399",
	"Nome": "Pedra Mole",
	"Estado": "25"
},
     {
	"ID": "5400",
	"Nome": "Pedrinhas",
	"Estado": "25"
},
     {
	"ID": "5401",
	"Nome": "Pinhão",
	"Estado": "25"
},
     {
	"ID": "5402",
	"Nome": "Pirambu",
	"Estado": "25"
},
     {
	"ID": "5403",
	"Nome": "Poço Redondo",
	"Estado": "25"
},
     {
	"ID": "5404",
	"Nome": "Poço Verde",
	"Estado": "25"
},
     {
	"ID": "5405",
	"Nome": "Porto da Folha",
	"Estado": "25"
},
     {
	"ID": "5406",
	"Nome": "Propriá",
	"Estado": "25"
},
     {
	"ID": "5407",
	"Nome": "Riachão do Dantas",
	"Estado": "25"
},
     {
	"ID": "5408",
	"Nome": "Riachuelo",
	"Estado": "25"
},
     {
	"ID": "5409",
	"Nome": "Ribeirópolis",
	"Estado": "25"
},
     {
	"ID": "5410",
	"Nome": "Rosário do Catete",
	"Estado": "25"
},
     {
	"ID": "5411",
	"Nome": "Salgado",
	"Estado": "25"
},
     {
	"ID": "5412",
	"Nome": "Santa Luzia do Itanhy",
	"Estado": "25"
},
     {
	"ID": "5413",
	"Nome": "Santa Rosa de Lima",
	"Estado": "25"
},
     {
	"ID": "5414",
	"Nome": "Santana do São Francisco",
	"Estado": "25"
},
     {
	"ID": "5415",
	"Nome": "Santo Amaro das Brotas",
	"Estado": "25"
},
     {
	"ID": "5416",
	"Nome": "São Cristóvão",
	"Estado": "25"
},
     {
	"ID": "5417",
	"Nome": "São Domingos",
	"Estado": "25"
},
     {
	"ID": "5418",
	"Nome": "São Francisco",
	"Estado": "25"
},
     {
	"ID": "5419",
	"Nome": "São Miguel do Aleixo",
	"Estado": "25"
},
     {
	"ID": "5420",
	"Nome": "Simão Dias",
	"Estado": "25"
},
     {
	"ID": "5421",
	"Nome": "Siriri",
	"Estado": "25"
},
     {
	"ID": "5422",
	"Nome": "Telha",
	"Estado": "25"
},
     {
	"ID": "5423",
	"Nome": "Tobias Barreto",
	"Estado": "25"
},
     {
	"ID": "5424",
	"Nome": "Tomar do Geru",
	"Estado": "25"
},
     {
	"ID": "5425",
	"Nome": "Umbaúba",
	"Estado": "25"
},
     {
	"ID": "5426",
	"Nome": "Abreulândia",
	"Estado": "27"
},
     {
	"ID": "5427",
	"Nome": "Aguiarnópolis",
	"Estado": "27"
},
     {
	"ID": "5428",
	"Nome": "Aliança do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5429",
	"Nome": "Almas",
	"Estado": "27"
},
     {
	"ID": "5430",
	"Nome": "Alvorada",
	"Estado": "27"
},
     {
	"ID": "5431",
	"Nome": "Ananás",
	"Estado": "27"
},
     {
	"ID": "5432",
	"Nome": "Angico",
	"Estado": "27"
},
     {
	"ID": "5433",
	"Nome": "Aparecida do Rio Negro",
	"Estado": "27"
},
     {
	"ID": "5434",
	"Nome": "Aragominas",
	"Estado": "27"
},
     {
	"ID": "5435",
	"Nome": "Araguacema",
	"Estado": "27"
},
     {
	"ID": "5436",
	"Nome": "Araguaçu",
	"Estado": "27"
},
     {
	"ID": "5437",
	"Nome": "Araguaína",
	"Estado": "27"
},
     {
	"ID": "5438",
	"Nome": "Araguanã",
	"Estado": "27"
},
     {
	"ID": "5439",
	"Nome": "Araguatins",
	"Estado": "27"
},
     {
	"ID": "5440",
	"Nome": "Arapoema",
	"Estado": "27"
},
     {
	"ID": "5441",
	"Nome": "Arraias",
	"Estado": "27"
},
     {
	"ID": "5442",
	"Nome": "Augustinópolis",
	"Estado": "27"
},
     {
	"ID": "5443",
	"Nome": "Aurora do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5444",
	"Nome": "Axixá do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5445",
	"Nome": "Babaçulândia",
	"Estado": "27"
},
     {
	"ID": "5446",
	"Nome": "Bandeirantes do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5447",
	"Nome": "Barra do Ouro",
	"Estado": "27"
},
     {
	"ID": "5448",
	"Nome": "Barrolândia",
	"Estado": "27"
},
     {
	"ID": "5449",
	"Nome": "Bernardo Sayão",
	"Estado": "27"
},
     {
	"ID": "5450",
	"Nome": "Bom Jesus do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5451",
	"Nome": "Brasilândia do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5452",
	"Nome": "Brejinho de Nazaré",
	"Estado": "27"
},
     {
	"ID": "5453",
	"Nome": "Buriti do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5454",
	"Nome": "Cachoeirinha",
	"Estado": "27"
},
     {
	"ID": "5455",
	"Nome": "Campos Lindos",
	"Estado": "27"
},
     {
	"ID": "5456",
	"Nome": "Cariri do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5457",
	"Nome": "Carmolândia",
	"Estado": "27"
},
     {
	"ID": "5458",
	"Nome": "Carrasco Bonito",
	"Estado": "27"
},
     {
	"ID": "5459",
	"Nome": "Caseara",
	"Estado": "27"
},
     {
	"ID": "5460",
	"Nome": "Centenário",
	"Estado": "27"
},
     {
	"ID": "5461",
	"Nome": "Chapada da Natividade",
	"Estado": "27"
},
     {
	"ID": "5462",
	"Nome": "Chapada de Areia",
	"Estado": "27"
},
     {
	"ID": "5463",
	"Nome": "Colinas do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5464",
	"Nome": "Colméia",
	"Estado": "27"
},
     {
	"ID": "5465",
	"Nome": "Combinado",
	"Estado": "27"
},
     {
	"ID": "5466",
	"Nome": "Conceição do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5467",
	"Nome": "Couto de Magalhães",
	"Estado": "27"
},
     {
	"ID": "5468",
	"Nome": "Cristalândia",
	"Estado": "27"
},
     {
	"ID": "5469",
	"Nome": "Crixás do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5470",
	"Nome": "Darcinópolis",
	"Estado": "27"
},
     {
	"ID": "5471",
	"Nome": "Dianópolis",
	"Estado": "27"
},
     {
	"ID": "5472",
	"Nome": "Divinópolis do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5473",
	"Nome": "Dois Irmãos do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5474",
	"Nome": "Dueré",
	"Estado": "27"
},
     {
	"ID": "5475",
	"Nome": "Esperantina",
	"Estado": "27"
},
     {
	"ID": "5476",
	"Nome": "Fátima",
	"Estado": "27"
},
     {
	"ID": "5477",
	"Nome": "Figueirópolis",
	"Estado": "27"
},
     {
	"ID": "5478",
	"Nome": "Filadélfia",
	"Estado": "27"
},
     {
	"ID": "5479",
	"Nome": "Formoso do Araguaia",
	"Estado": "27"
},
     {
	"ID": "5480",
	"Nome": "Fortaleza do Tabocão",
	"Estado": "27"
},
     {
	"ID": "5481",
	"Nome": "Goianorte",
	"Estado": "27"
},
     {
	"ID": "5482",
	"Nome": "Goiatins",
	"Estado": "27"
},
     {
	"ID": "5483",
	"Nome": "Guaraí",
	"Estado": "27"
},
     {
	"ID": "5484",
	"Nome": "Gurupi",
	"Estado": "27"
},
     {
	"ID": "5485",
	"Nome": "Ipueiras",
	"Estado": "27"
},
     {
	"ID": "5486",
	"Nome": "Itacajá",
	"Estado": "27"
},
     {
	"ID": "5487",
	"Nome": "Itaguatins",
	"Estado": "27"
},
     {
	"ID": "5488",
	"Nome": "Itapiratins",
	"Estado": "27"
},
     {
	"ID": "5489",
	"Nome": "Itaporã do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5490",
	"Nome": "Jaú do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5491",
	"Nome": "Juarina",
	"Estado": "27"
},
     {
	"ID": "5492",
	"Nome": "Lagoa da Confusão",
	"Estado": "27"
},
     {
	"ID": "5493",
	"Nome": "Lagoa do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5494",
	"Nome": "Lajeado",
	"Estado": "27"
},
     {
	"ID": "5495",
	"Nome": "Lavandeira",
	"Estado": "27"
},
     {
	"ID": "5496",
	"Nome": "Lizarda",
	"Estado": "27"
},
     {
	"ID": "5497",
	"Nome": "Luzinópolis",
	"Estado": "27"
},
     {
	"ID": "5498",
	"Nome": "Marianópolis do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5499",
	"Nome": "Mateiros",
	"Estado": "27"
},
     {
	"ID": "5500",
	"Nome": "Maurilândia do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5501",
	"Nome": "Miracema do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5502",
	"Nome": "Miranorte",
	"Estado": "27"
},
     {
	"ID": "5503",
	"Nome": "Monte do Carmo",
	"Estado": "27"
},
     {
	"ID": "5504",
	"Nome": "Monte Santo do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5505",
	"Nome": "Muricilândia",
	"Estado": "27"
},
     {
	"ID": "5506",
	"Nome": "Natividade",
	"Estado": "27"
},
     {
	"ID": "5507",
	"Nome": "Nazaré",
	"Estado": "27"
},
     {
	"ID": "5508",
	"Nome": "Nova Olinda",
	"Estado": "27"
},
     {
	"ID": "5509",
	"Nome": "Nova Rosalândia",
	"Estado": "27"
},
     {
	"ID": "5510",
	"Nome": "Novo Acordo",
	"Estado": "27"
},
     {
	"ID": "5511",
	"Nome": "Novo Alegre",
	"Estado": "27"
},
     {
	"ID": "5512",
	"Nome": "Novo Jardim",
	"Estado": "27"
},
     {
	"ID": "5513",
	"Nome": "Oliveira de Fátima",
	"Estado": "27"
},
     {
	"ID": "5514",
	"Nome": "Palmas",
	"Estado": "27"
},
     {
	"ID": "5515",
	"Nome": "Palmeirante",
	"Estado": "27"
},
     {
	"ID": "5516",
	"Nome": "Palmeiras do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5517",
	"Nome": "Palmeirópolis",
	"Estado": "27"
},
     {
	"ID": "5518",
	"Nome": "Paraíso do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5519",
	"Nome": "Paranã",
	"Estado": "27"
},
     {
	"ID": "5520",
	"Nome": "Pau d`Arco",
	"Estado": "27"
},
     {
	"ID": "5521",
	"Nome": "Pedro Afonso",
	"Estado": "27"
},
     {
	"ID": "5522",
	"Nome": "Peixe",
	"Estado": "27"
},
     {
	"ID": "5523",
	"Nome": "Pequizeiro",
	"Estado": "27"
},
     {
	"ID": "5524",
	"Nome": "Pindorama do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5525",
	"Nome": "Piraquê",
	"Estado": "27"
},
     {
	"ID": "5526",
	"Nome": "Pium",
	"Estado": "27"
},
     {
	"ID": "5527",
	"Nome": "Ponte Alta do Bom Jesus",
	"Estado": "27"
},
     {
	"ID": "5528",
	"Nome": "Ponte Alta do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5529",
	"Nome": "Porto Alegre do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5530",
	"Nome": "Porto Nacional",
	"Estado": "27"
},
     {
	"ID": "5531",
	"Nome": "Praia Norte",
	"Estado": "27"
},
     {
	"ID": "5532",
	"Nome": "Presidente Kennedy",
	"Estado": "27"
},
     {
	"ID": "5533",
	"Nome": "Pugmil",
	"Estado": "27"
},
     {
	"ID": "5534",
	"Nome": "Recursolândia",
	"Estado": "27"
},
     {
	"ID": "5535",
	"Nome": "Riachinho",
	"Estado": "27"
},
     {
	"ID": "5536",
	"Nome": "Rio da Conceição",
	"Estado": "27"
},
     {
	"ID": "5537",
	"Nome": "Rio dos Bois",
	"Estado": "27"
},
     {
	"ID": "5538",
	"Nome": "Rio Sono",
	"Estado": "27"
},
     {
	"ID": "5539",
	"Nome": "Sampaio",
	"Estado": "27"
},
     {
	"ID": "5540",
	"Nome": "Sandolândia",
	"Estado": "27"
},
     {
	"ID": "5541",
	"Nome": "Santa Fé do Araguaia",
	"Estado": "27"
},
     {
	"ID": "5542",
	"Nome": "Santa Maria do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5543",
	"Nome": "Santa Rita do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5544",
	"Nome": "Santa Rosa do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5545",
	"Nome": "Santa Tereza do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5546",
	"Nome": "Santa Terezinha do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5547",
	"Nome": "São Bento do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5548",
	"Nome": "São Félix do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5549",
	"Nome": "São Miguel do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5550",
	"Nome": "São Salvador do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5551",
	"Nome": "São Sebastião do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5552",
	"Nome": "São Valério da Natividade",
	"Estado": "27"
},
     {
	"ID": "5553",
	"Nome": "Silvanópolis",
	"Estado": "27"
},
     {
	"ID": "5554",
	"Nome": "Sítio Novo do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5555",
	"Nome": "Sucupira",
	"Estado": "27"
},
     {
	"ID": "5556",
	"Nome": "Taguatinga",
	"Estado": "27"
},
     {
	"ID": "5557",
	"Nome": "Taipas do Tocantins",
	"Estado": "27"
},
     {
	"ID": "5558",
	"Nome": "Talismã",
	"Estado": "27"
},
     {
	"ID": "5559",
	"Nome": "Tocantínia",
	"Estado": "27"
},
     {
	"ID": "5560",
	"Nome": "Tocantinópolis",
	"Estado": "27"
},
     {
	"ID": "5561",
	"Nome": "Tupirama",
	"Estado": "27"
},
     {
	"ID": "5562",
	"Nome": "Tupiratins",
	"Estado": "27"
},
     {
	"ID": "5563",
	"Nome": "Wanderlândia",
	"Estado": "27"
},
     {
	"ID": "5564",
	"Nome": "Xambioá",
	"Estado": "27"
}]
var tinyscrollbar = (function($) {
    "use strict";

    var pluginName = "tinyscrollbar"
    ,   defaults = {
            axis : 'y'
        ,   wheel : true
        ,   wheelSpeed : 40
        ,   wheelLock : true
        ,   touchLock : true
        ,   trackSize : false
        ,   thumbSize : false
        ,   thumbSizeMin : 20
        }
    ;

    function Plugin($container, options) {
        /**
         * The options of the carousel extend with the defaults.
         *
         * @property options
         * @type Object
         */
        this.options = $.extend({}, defaults, options);

        /**
         * @property _defaults
         * @type Object
         * @private
         * @default defaults
         */
        this._defaults = defaults;

        /**
         * @property _name
         * @type String
         * @private
         * @final
         * @default 'tinyscrollbar'
         */
        this._name = pluginName;

        var self = this
        ,   $viewport = $container.find(".viewport")
        ,   $overview = $container.find(".overview")
        ,   $scrollbar = $container.find(".scrollbar")
        ,   $track = $scrollbar.find(".track")
        ,   $thumb = $scrollbar.find(".thumb")

        ,   hasTouchEvents = ("ontouchstart" in document.documentElement)
        ,   wheelEvent = "onwheel" in document.createElement("div") ? "wheel" : // Modern browsers support "wheel"
                         document.onmousewheel !== undefined ? "mousewheel" : // Webkit and IE support at least "mousewheel"
                         "DOMMouseScroll" // let's assume that remaining browsers are older Firefox
        ,   isHorizontal = this.options.axis === 'x'
        ,   sizeLabel = isHorizontal ? "width" : "height"
        ,   posiLabel = isHorizontal ? "left" : "top"

        ,   mousePosition = 0
        ;

        /**
         * The position of the content relative to the viewport.
         *
         * @property contentPosition
         * @type Number
         */
        this.contentPosition = 0;

        /**
         * The height or width of the viewport.
         *
         * @property viewportSize
         * @type Number
         */
        this.viewportSize = 0;

        /**
         * The height or width of the content.
         *
         * @property contentSize
         * @type Number
         */
        this.contentSize = 0;

        /**
         * The ratio of the content size relative to the viewport size.
         *
         * @property contentRatio
         * @type Number
         */
        this.contentRatio = 0;

        /**
         * The height or width of the content.
         *
         * @property trackSize
         * @type Number
         */
        this.trackSize = 0;

        /**
         * The size of the track relative to the size of the content.
         *
         * @property trackRatio
         * @type Number
         */
        this.trackRatio = 0;

        /**
         * The height or width of the thumb.
         *
         * @property thumbSize
         * @type Number
         */
        this.thumbSize = 0;

        /**
         * The position of the thumb relative to the track.
         *
         * @property thumbPosition
         * @type Number
         */
        this.thumbPosition = 0;

        /**
         * Will be true if there is content to scroll.
         *
         * @property hasContentToSroll
         * @type Boolean
         */
        this.hasContentToSroll = false;

        /**
         * @method _initialize
         * @private
         */
        function _initialize() {
            self.update();
            _setEvents();

            return self;
        }

        /**
         * You can use the update method to adjust the scrollbar to new content or to move the scrollbar to a certain point.
         *
         * @method update
         * @chainable
         * @param {Number|String} [scrollTo] Number in pixels or the values "relative" or "bottom". If you dont specify a parameter it will default to top
         */
        this.update = function(scrollTo) {
            var sizeLabelCap = sizeLabel.charAt(0).toUpperCase() + sizeLabel.slice(1).toLowerCase();
            this.viewportSize = $viewport[0]['offset'+ sizeLabelCap];
            this.contentSize = $overview[0]['scroll'+ sizeLabelCap];
            this.contentRatio = this.viewportSize / this.contentSize;
            this.trackSize = this.options.trackSize || this.viewportSize;
            this.thumbSize = Math.min(this.trackSize, Math.max(this.options.thumbSizeMin, (this.options.thumbSize || (this.trackSize * this.contentRatio))));
            this.trackRatio = (this.contentSize - this.viewportSize) / (this.trackSize - this.thumbSize);
            this.hasContentToSroll = this.contentRatio < 1;

            $scrollbar.toggleClass("disable", !this.hasContentToSroll);

            switch (scrollTo) {
                case "bottom":
                    this.contentPosition = Math.max(this.contentSize - this.viewportSize, 0);
                    break;

                case "relative":
                    this.contentPosition = Math.min(Math.max(this.contentSize - this.viewportSize, 0), Math.max(0, this.contentPosition));
                    break;

                default:
                    this.contentPosition = parseInt(scrollTo, 10) || 0;
            }

            this.thumbPosition = this.contentPosition / this.trackRatio;

            _setCss();

            return self;
        };

        /**
         * @method _setCss
         * @private
         */
        function _setCss() {
            $thumb.css(posiLabel, self.thumbPosition);
            $overview.css(posiLabel, -self.contentPosition);
            $scrollbar.css(sizeLabel, self.trackSize);
            $track.css(sizeLabel, self.trackSize);
            $thumb.css(sizeLabel, self.thumbSize);
        }

        /**
         * @method _setEvents
         * @private
         */
        function _setEvents() {
            if(hasTouchEvents) {
                $viewport[0].ontouchstart = function(event) {
                    if(1 === event.touches.length) {
                        event.stopPropagation();

                        _start(event.touches[0]);
                    }
                };
            }
            else {
                $thumb.bind("mousedown", function(event){
                    event.stopPropagation();
                    _start(event);
                });
                $track.bind("mousedown", function(event){
                    _start(event, true);
                });
            }

            $(window).resize(function() {
                self.update("relative");
            });

            if(self.options.wheel && window.addEventListener) {
                $container[0].addEventListener(wheelEvent, _wheel, false);
            }
            else if(self.options.wheel) {
                $container[0].onmousewheel = _wheel;
            }
        }

        /**
         * @method _isAtBegin
         * @private
         */
        function _isAtBegin() {
            return self.contentPosition > 0;
        }

        /**
         * @method _isAtEnd
         * @private
         */
        function _isAtEnd() {
            return self.contentPosition <= (self.contentSize - self.viewportSize) - 5;
        }

        /**
         * @method _start
         * @private
         */
        function _start(event, gotoMouse) {
            if(self.hasContentToSroll) {
                $("body").addClass("noSelect");

                mousePosition = gotoMouse ? $thumb.offset()[posiLabel] : (isHorizontal ? event.pageX : event.pageY);

                if(hasTouchEvents) {
                    document.ontouchmove = function(event) {
                        if(self.options.touchLock || _isAtBegin() && _isAtEnd()) {
                            event.preventDefault();
                        }
                        drag(event.touches[0]);
                    };
                    document.ontouchend = _end;
                }
                else {
                    $(document).bind("mousemove", _drag);
                    $(document).bind("mouseup", _end);
                    $thumb.bind("mouseup", _end);
                    $track.bind("mouseup", _end);
                }

                _drag(event);
            }
        }

        /**
         * @method _wheel
         * @private
         */
        function _wheel(event) {
            if(self.hasContentToSroll) {
                // Trying to make sense of all the different wheel event implementations..
                //
                var evntObj = event || window.event
                ,   wheelDelta = -(evntObj.deltaY || evntObj.detail || (-1 / 3 * evntObj.wheelDelta)) / 40
                ,   multiply = (evntObj.deltaMode === 1) ? self.options.wheelSpeed : 1
                ;

                self.contentPosition -= wheelDelta * multiply * self.options.wheelSpeed;
                self.contentPosition = Math.min((self.contentSize - self.viewportSize), Math.max(0, self.contentPosition));
                self.thumbPosition = self.contentPosition / self.trackRatio;

                /**
                 * The move event will trigger when the carousel slides to a new slide.
                 *
                 * @event move
                 */
                $container.trigger("move");

                $thumb.css(posiLabel, self.thumbPosition);
                $overview.css(posiLabel, -self.contentPosition);

                if(self.options.wheelLock || _isAtBegin() && _isAtEnd()) {
                    evntObj = $.event.fix(evntObj);
                    evntObj.preventDefault();
                }
            }
        }

        /**
         * @method _drag
         * @private
         */
        function _drag(event) {
            if(self.hasContentToSroll) {
                var mousePositionNew = isHorizontal ? event.pageX : event.pageY
                ,   thumbPositionDelta = hasTouchEvents ? (mousePosition - mousePositionNew) : (mousePositionNew - mousePosition)
                ,   thumbPositionNew = Math.min((self.trackSize - self.thumbSize), Math.max(0, self.thumbPosition + thumbPositionDelta))
                ;

                self.contentPosition = thumbPositionNew * self.trackRatio;

                $container.trigger("move");

                $thumb.css(posiLabel, thumbPositionNew);
                $overview.css(posiLabel, -self.contentPosition);
            }
        }

        /**
         * @method _end
         * @private
         */
        function _end() {
            self.thumbPosition = parseInt($thumb.css(posiLabel), 10) || 0;

            $("body").removeClass("noSelect");
            $(document).unbind("mousemove", _drag);
            $(document).unbind("mouseup", _end);
            $thumb.unbind("mouseup", _end);
            $track.unbind("mouseup", _end);
            document.ontouchmove = document.ontouchend = null;
        }

        return _initialize();
    }

    /**
    * @class tinyscrollbar
    * @constructor
    * @param {Object} options
        @param {String} [options.axis='y'] Vertical or horizontal scroller? ( x || y ).
        @param {Boolean} [options.wheel=true] Enable or disable the mousewheel.
        @param {Boolean} [options.wheelSpeed=40] How many pixels must the mouswheel scroll at a time.
        @param {Boolean} [options.wheelLock=true] Lock default window wheel scrolling when there is no more content to scroll.
        @param {Number} [options.touchLock=true] Lock default window touch scrolling when there is no more content to scroll.
        @param {Boolean|Number} [options.trackSize=false] Set the size of the scrollbar to auto(false) or a fixed number.
        @param {Boolean|Number} [options.thumbSize=false] Set the size of the thumb to auto(false) or a fixed number
        @param {Boolean} [options.thumbSizeMin=20] Minimum thumb size.
    */
    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if(!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin($(this), options));
            }
        });
    };
}(jQuery));
;(function($){
	var already_ga_bx_prev = false;
	var already_ga_bx_next = false;
	var plugin = {};

	var defaults = {

		// GENERAL
		mode: 'horizontal',
		slideSelector: '',
		infiniteLoop: true,
		hideControlOnEnd: false,
		speed: 500,
		easing: null,
		slideMargin: 0,
		startSlide: 0,
		randomStart: false,
		captions: false,
		ticker: false,
		tickerHover: false,
		adaptiveHeight: false,
		adaptiveHeightSpeed: 500,
		video: false,
		useCSS: true,
		preloadImages: 'visible',
		responsive: true,
		slideZIndex: 50,
		wrapperClass: 'bx-wrapper',

		// TOUCH
		touchEnabled: true,
		swipeThreshold: 50,
		oneToOneTouch: true,
		preventDefaultSwipeX: true,
		preventDefaultSwipeY: false,

		// PAGER
		pager: true,
		pagerType: 'full',
		pagerShortSeparator: ' / ',
		pagerSelector: null,
		buildPager: null,
		pagerCustom: null,

		// CONTROLS
		controls: true,
		nextText: 'Next',
		prevText: 'Prev',
		nextSelector: null,
		prevSelector: null,
		autoControls: false,
		startText: 'Start',
		stopText: 'Stop',
		autoControlsCombine: false,
		autoControlsSelector: null,

		// AUTO
		auto: false,
		pause: 4000,
		autoStart: true,
		autoDirection: 'next',
		autoHover: false,
		autoDelay: 0,
		autoSlideForOnePage: false,

		// CAROUSEL
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 0,
		slideWidth: 0,

		// CALLBACKS
		onSliderLoad: function() {},
		onSlideBefore: function() {},
		onSlideAfter: function() {},
		onSlideNext: function() {},
		onSlidePrev: function() {},
		onSliderResize: function() {}
	}

	$.fn.bxSlider = function(options){

		if(this.length == 0) return this;

		// support mutltiple elements
		if(this.length > 1){
			this.each(function(){$(this).bxSlider(options)});
			return this;
		}

		// create a namespace to be used throughout the plugin
		var slider = {};
		// set a reference to our slider element
		var el = this;
		plugin.el = this;

		/**
		 * Makes slideshow responsive
		 */
		// first get the original window dimens (thanks alot IE)
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();



		/**
		 * ===================================================================================
		 * = PRIVATE FUNCTIONS
		 * ===================================================================================
		 */

		/**
		 * Initializes namespace settings to be used throughout plugin
		 */
		var init = function(){
			// merge user-supplied options with the defaults
			slider.settings = $.extend({}, defaults, options);
			// parse slideWidth setting
			slider.settings.slideWidth = parseInt(slider.settings.slideWidth);
			// store the original children
			slider.children = el.children(slider.settings.slideSelector);
			// check if actual number of slides is less than minSlides / maxSlides
			if(slider.children.length < slider.settings.minSlides) slider.settings.minSlides = slider.children.length;
			if(slider.children.length < slider.settings.maxSlides) slider.settings.maxSlides = slider.children.length;
			// if random start, set the startSlide setting to random number
			if(slider.settings.randomStart) slider.settings.startSlide = Math.floor(Math.random() * slider.children.length);
			// store active slide information
			slider.active = { index: slider.settings.startSlide }
			// store if the slider is in carousel mode (displaying / moving multiple slides)
			slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1;
			// if carousel, force preloadImages = 'all'
			if(slider.carousel) slider.settings.preloadImages = 'all';
			// calculate the min / max width thresholds based on min / max number of slides
			// used to setup and update carousel slides dimensions
			slider.minThreshold = (slider.settings.minSlides * slider.settings.slideWidth) + ((slider.settings.minSlides - 1) * slider.settings.slideMargin);
			slider.maxThreshold = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
			// store the current state of the slider (if currently animating, working is true)
			slider.working = false;
			// initialize the controls object
			slider.controls = {};
			// initialize an auto interval
			slider.interval = null;
			// determine which property to use for transitions
			slider.animProp = slider.settings.mode == 'vertical' ? 'top' : 'left';
			// determine if hardware acceleration can be used
			slider.usingCSS = slider.settings.useCSS && slider.settings.mode != 'fade' && (function(){
				// create our test div element
				var div = document.createElement('div');
				// css transition properties
				var props = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
				// test for each property
				for(var i in props){
					if(div.style[props[i]] !== undefined){
						slider.cssPrefix = props[i].replace('Perspective', '').toLowerCase();
						slider.animProp = '-' + slider.cssPrefix + '-transform';
						return true;
					}
				}
				return false;
			}());
			// if vertical mode always make maxSlides and minSlides equal
			if(slider.settings.mode == 'vertical') slider.settings.maxSlides = slider.settings.minSlides;
			// save original style data
			el.data("origStyle", el.attr("style"));
			el.children(slider.settings.slideSelector).each(function() {
			  $(this).data("origStyle", $(this).attr("style"));
			});
			// perform all DOM / CSS modifications
			setup();
		}

		/**
		 * Performs all DOM and CSS modifications
		 */
		var setup = function(){
			// wrap el in a wrapper
			el.wrap('<div class="' + slider.settings.wrapperClass + '"><div class="bx-viewport"></div></div>');
			// store a namspace reference to .bx-viewport
			slider.viewport = el.parent();
			// add a loading div to display while images are loading
			slider.loader = $('<div class="bx-loading" />');
			slider.viewport.prepend(slider.loader);
			// set el to a massive width, to hold any needed slides
			// also strip any margin and padding from el
			el.css({
				width: slider.settings.mode == 'horizontal' ? (slider.children.length * 100 + 215) + '%' : 'auto',
				position: 'relative'
			});
			// if using CSS, add the easing property
			if(slider.usingCSS && slider.settings.easing){
				el.css('-' + slider.cssPrefix + '-transition-timing-function', slider.settings.easing);
			// if not using CSS and no easing value was supplied, use the default JS animation easing (swing)
			}else if(!slider.settings.easing){
				slider.settings.easing = 'swing';
			}
			var slidesShowing = getNumberSlidesShowing();
			// make modifications to the viewport (.bx-viewport)
			slider.viewport.css({
				width: '100%',
				overflow: 'hidden',
				position: 'relative'
			});
			slider.viewport.parent().css({
				maxWidth: getViewportMaxWidth()
			});
			// make modification to the wrapper (.bx-wrapper)
			if(!slider.settings.pager) {
				slider.viewport.parent().css({
				margin: '0 auto 0px'
				});
			}
			// apply css to all slider children
			slider.children.css({
				'float': slider.settings.mode == 'horizontal' ? 'left' : 'none',
				listStyle: 'none',
				position: 'relative'
			});
			// apply the calculated width after the float is applied to prevent scrollbar interference
			slider.children.css('width', getSlideWidth());
			// if slideMargin is supplied, add the css
			if(slider.settings.mode == 'horizontal' && slider.settings.slideMargin > 0) slider.children.css('marginRight', slider.settings.slideMargin);
			if(slider.settings.mode == 'vertical' && slider.settings.slideMargin > 0) slider.children.css('marginBottom', slider.settings.slideMargin);
			// if "fade" mode, add positioning and z-index CSS
			if(slider.settings.mode == 'fade'){
				slider.children.css({
					position: 'absolute',
					zIndex: 0,
					display: 'none'
				});
				// prepare the z-index on the showing element
				slider.children.eq(slider.settings.startSlide).css({zIndex: slider.settings.slideZIndex, display: 'block'});
			}
			// create an element to contain all slider controls (pager, start / stop, etc)
			slider.controls.el = $('<div class="bx-controls" />');
			// if captions are requested, add them
			if(slider.settings.captions) appendCaptions();
			// check if startSlide is last slide
			slider.active.last = slider.settings.startSlide == getPagerQty() - 1;
			// if video is true, set up the fitVids plugin
			if(slider.settings.video) el.fitVids();
			// set the default preload selector (visible)
			var preloadSelector = slider.children.eq(slider.settings.startSlide);
			if (slider.settings.preloadImages == "all") preloadSelector = slider.children;
			// only check for control addition if not in "ticker" mode
			if(!slider.settings.ticker){
				// if pager is requested, add it
				if(slider.settings.pager) appendPager();
				// if controls are requested, add them
				if(slider.settings.controls) appendControls();
				// if auto is true, and auto controls are requested, add them
				if(slider.settings.auto && slider.settings.autoControls) appendControlsAuto();
				// if any control option is requested, add the controls wrapper
				if(slider.settings.controls || slider.settings.autoControls || slider.settings.pager) slider.viewport.after(slider.controls.el);
			// if ticker mode, do not allow a pager
			}else{
				slider.settings.pager = false;
			}
			// preload all images, then perform final DOM / CSS modifications that depend on images being loaded
			loadElements(preloadSelector, start);
		}

		var loadElements = function(selector, callback){
			var total = selector.find('img, iframe').length;
			if (total == 0){
				callback();
				return;
			}
			var count = 0;
			selector.find('img, iframe').each(function(){
				$(this).one('load', function() {
				  if(++count == total) callback();
				}).each(function() {
				  if(this.complete) $(this).load();
				});
			});
		}

		/**
		 * Start the slider
		 */
		var start = function(){
			// if infinite loop, prepare additional slides
			if(slider.settings.infiniteLoop && slider.settings.mode != 'fade' && !slider.settings.ticker){
				var slice = slider.settings.mode == 'vertical' ? slider.settings.minSlides : slider.settings.maxSlides;
				var sliceAppend = slider.children.slice(0, slice).clone().addClass('bx-clone');
				var slicePrepend = slider.children.slice(-slice).clone().addClass('bx-clone');
				el.append(sliceAppend).prepend(slicePrepend);
			}
			// remove the loading DOM element
			slider.loader.remove();
			// set the left / top position of "el"
			setSlidePosition();
			// if "vertical" mode, always use adaptiveHeight to prevent odd behavior
			if (slider.settings.mode == 'vertical') slider.settings.adaptiveHeight = true;
			// set the viewport height
			slider.viewport.height(getViewportHeight());
			// make sure everything is positioned just right (same as a window resize)
			el.redrawSlider();
			// onSliderLoad callback
			slider.settings.onSliderLoad(slider.active.index);
			// slider has been fully initialized
			slider.initialized = true;
			// bind the resize call to the window
			if (slider.settings.responsive) $(window).bind('resize', resizeWindow);
			// if auto is true and has more than 1 page, start the show
			if (slider.settings.auto && slider.settings.autoStart && (getPagerQty() > 1 || slider.settings.autoSlideForOnePage)) initAuto();
			// if ticker is true, start the ticker
			if (slider.settings.ticker) initTicker();
			// if pager is requested, make the appropriate pager link active
			if (slider.settings.pager) updatePagerActive(slider.settings.startSlide);
			// check for any updates to the controls (like hideControlOnEnd updates)
			if (slider.settings.controls) updateDirectionControls();
			// if touchEnabled is true, setup the touch events
			if (slider.settings.touchEnabled && !slider.settings.ticker) initTouch();
		}

		/**
		 * Returns the calculated height of the viewport, used to determine either adaptiveHeight or the maxHeight value
		 */
		var getViewportHeight = function(){
			var height = 0;
			// first determine which children (slides) should be used in our height calculation
			var children = $();
			// if mode is not "vertical" and adaptiveHeight is false, include all children
			if(slider.settings.mode != 'vertical' && !slider.settings.adaptiveHeight){
				children = slider.children;
			}else{
				// if not carousel, return the single active child
				if(!slider.carousel){
					children = slider.children.eq(slider.active.index);
				// if carousel, return a slice of children
				}else{
					// get the individual slide index
					var currentIndex = slider.settings.moveSlides == 1 ? slider.active.index : slider.active.index * getMoveBy();
					// add the current slide to the children
					children = slider.children.eq(currentIndex);
					// cycle through the remaining "showing" slides
					for (i = 1; i <= slider.settings.maxSlides - 1; i++){
						// if looped back to the start
						if(currentIndex + i >= slider.children.length){
							children = children.add(slider.children.eq(i - 1));
						}else{
							children = children.add(slider.children.eq(currentIndex + i));
						}
					}
				}
			}
			// if "vertical" mode, calculate the sum of the heights of the children
			if(slider.settings.mode == 'vertical'){
				children.each(function(index) {
				  height += $(this).outerHeight();
				});
				// add user-supplied margins
				if(slider.settings.slideMargin > 0){
					height += slider.settings.slideMargin * (slider.settings.minSlides - 1);
				}
			// if not "vertical" mode, calculate the max height of the children
			}else{
				height = Math.max.apply(Math, children.map(function(){
					return $(this).outerHeight(false);
				}).get());
			}

			if(slider.viewport.css('box-sizing') == 'border-box'){
				height +=	parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom')) +
							parseFloat(slider.viewport.css('border-top-width')) + parseFloat(slider.viewport.css('border-bottom-width'));
			}else if(slider.viewport.css('box-sizing') == 'padding-box'){
				height +=	parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom'));
			}

			return height;
		}

		/**
		 * Returns the calculated width to be used for the outer wrapper / viewport
		 */
		var getViewportMaxWidth = function(){
			var width = '100%';
			if(slider.settings.slideWidth > 0){
				if(slider.settings.mode == 'horizontal'){
					width = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
				}else{
					width = slider.settings.slideWidth;
				}
			}
			return width;
		}

		/**
		 * Returns the calculated width to be applied to each slide
		 */
		var getSlideWidth = function(){
			// start with any user-supplied slide width
			var newElWidth = slider.settings.slideWidth;
			// get the current viewport width
			var wrapWidth = slider.viewport.width();
			// if slide width was not supplied, or is larger than the viewport use the viewport width
			if(slider.settings.slideWidth == 0 ||
				(slider.settings.slideWidth > wrapWidth && !slider.carousel) ||
				slider.settings.mode == 'vertical'){
				newElWidth = wrapWidth;
			// if carousel, use the thresholds to determine the width
			}else if(slider.settings.maxSlides > 1 && slider.settings.mode == 'horizontal'){
				if(wrapWidth > slider.maxThreshold){
					// newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.maxSlides - 1))) / slider.settings.maxSlides;
				}else if(wrapWidth < slider.minThreshold){
					newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.minSlides - 1))) / slider.settings.minSlides;
				}
			}
			return newElWidth;
		}

		/**
		 * Returns the number of slides currently visible in the viewport (includes partially visible slides)
		 */
		var getNumberSlidesShowing = function(){
			var slidesShowing = 1;
			if(slider.settings.mode == 'horizontal' && slider.settings.slideWidth > 0){
				// if viewport is smaller than minThreshold, return minSlides
				if(slider.viewport.width() < slider.minThreshold){
					slidesShowing = slider.settings.minSlides;
				// if viewport is larger than minThreshold, return maxSlides
				}else if(slider.viewport.width() > slider.maxThreshold){
					slidesShowing = slider.settings.maxSlides;
				// if viewport is between min / max thresholds, divide viewport width by first child width
				}else{
					var childWidth = slider.children.first().width() + slider.settings.slideMargin;
					slidesShowing = Math.floor((slider.viewport.width() +
						slider.settings.slideMargin) / childWidth);
				}
			// if "vertical" mode, slides showing will always be minSlides
			}else if(slider.settings.mode == 'vertical'){
				slidesShowing = slider.settings.minSlides;
			}
			return slidesShowing;
		}

		/**
		 * Returns the number of pages (one full viewport of slides is one "page")
		 */
		var getPagerQty = function(){
			var pagerQty = 0;
			// if moveSlides is specified by the user
			if(slider.settings.moveSlides > 0){
				if(slider.settings.infiniteLoop){
					pagerQty = Math.ceil(slider.children.length / getMoveBy());
				}else{
					// use a while loop to determine pages
					var breakPoint = 0;
					var counter = 0
					// when breakpoint goes above children length, counter is the number of pages
					while (breakPoint < slider.children.length){
						++pagerQty;
						breakPoint = counter + getNumberSlidesShowing();
						counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
					}
				}
			// if moveSlides is 0 (auto) divide children length by sides showing, then round up
			}else{
				pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
			}
			return pagerQty;
		}

		/**
		 * Returns the number of indivual slides by which to shift the slider
		 */
		var getMoveBy = function(){
			// if moveSlides was set by the user and moveSlides is less than number of slides showing
			if(slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing()){
				return slider.settings.moveSlides;
			}
			// if moveSlides is 0 (auto)
			return getNumberSlidesShowing();
		}

		/**
		 * Sets the slider's (el) left or top position
		 */
		var setSlidePosition = function(){
			// if last slide, not infinite loop, and number of children is larger than specified maxSlides
			if(slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop){
				if (slider.settings.mode == 'horizontal'){
					// get the last child's position
					var lastChild = slider.children.last();
					var position = lastChild.position();
					// set the left position
					setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.outerWidth())), 'reset', 0);
				}else if(slider.settings.mode == 'vertical'){
					// get the last showing index's position
					var lastShowingIndex = slider.children.length - slider.settings.minSlides;
					var position = slider.children.eq(lastShowingIndex).position();
					// set the top position
					setPositionProperty(-position.top, 'reset', 0);
				}
			// if not last slide
			}else{
				// get the position of the first showing slide
				var position = slider.children.eq(slider.active.index * getMoveBy()).position();
				// check for last slide
				if (slider.active.index == getPagerQty() - 1) slider.active.last = true;
				// set the repective position
				if (position != undefined){
					if (slider.settings.mode == 'horizontal') setPositionProperty(-position.left, 'reset', 0);
					else if (slider.settings.mode == 'vertical') setPositionProperty(-position.top, 'reset', 0);
				}
			}
		}

		/**
		 * Sets the el's animating property position (which in turn will sometimes animate el).
		 * If using CSS, sets the transform property. If not using CSS, sets the top / left property.
		 *
		 * @param value (int)
		 *  - the animating property's value
		 *
		 * @param type (string) 'slider', 'reset', 'ticker'
		 *  - the type of instance for which the function is being
		 *
		 * @param duration (int)
		 *  - the amount of time (in ms) the transition should occupy
		 *
		 * @param params (array) optional
		 *  - an optional parameter containing any variables that need to be passed in
		 */
		var setPositionProperty = function(value, type, duration, params){
			// use CSS transform
			if(slider.usingCSS){
				// determine the translate3d value
				var propValue = slider.settings.mode == 'vertical' ? 'translate3d(0, ' + value + 'px, 0)' : 'translate3d(' + value + 'px, 0, 0)';
				// add the CSS transition-duration
				el.css('-' + slider.cssPrefix + '-transition-duration', duration / 1000 + 's');
				if(type == 'slide'){
					// set the property value
					el.css(slider.animProp, propValue);
					// bind a callback method - executes when CSS transition completes
					el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
						// unbind the callback
						el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
						updateAfterSlideTransition();
					});
				}else if(type == 'reset'){
					el.css(slider.animProp, propValue);
				}else if(type == 'ticker'){
					// make the transition use 'linear'
					el.css('-' + slider.cssPrefix + '-transition-timing-function', 'linear');
					el.css(slider.animProp, propValue);
					// bind a callback method - executes when CSS transition completes
					el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
						// unbind the callback
						el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
						// reset the position
						setPositionProperty(params['resetValue'], 'reset', 0);
						// start the loop again
						tickerLoop();
					});
				}
			// use JS animate
			}else{
				var animateObj = {};
				animateObj[slider.animProp] = value;
				if(type == 'slide'){
					el.animate(animateObj, duration, slider.settings.easing, function(){
						updateAfterSlideTransition();
					});
				}else if(type == 'reset'){
					el.css(slider.animProp, value)
				}else if(type == 'ticker'){
					el.animate(animateObj, speed, 'linear', function(){
						setPositionProperty(params['resetValue'], 'reset', 0);
						// run the recursive loop after animation
						tickerLoop();
					});
				}
			}
		}

		/**
		 * Populates the pager with proper amount of pages
		 */
		var populatePager = function(){
			var pagerHtml = '';
			var pagerQty = getPagerQty();
			// loop through each pager item
			for(var i=0; i < pagerQty; i++){
				var linkContent = '';
				// if a buildPager function is supplied, use it to get pager link value, else use index + 1
				if(slider.settings.buildPager && $.isFunction(slider.settings.buildPager)){
					linkContent = slider.settings.buildPager(i);
					slider.pagerEl.addClass('bx-custom-pager');
				}else{
					linkContent = i + 1;
					slider.pagerEl.addClass('bx-default-pager');
				}
				// var linkContent = slider.settings.buildPager && $.isFunction(slider.settings.buildPager) ? slider.settings.buildPager(i) : i + 1;
				// add the markup to the string
				pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link bullet-ga">' + linkContent + '</a></div>';
			};
			// populate the pager element with pager links
			slider.pagerEl.html(pagerHtml);
		}

		/**
		 * Appends the pager to the controls element
		 */
		var appendPager = function(){
			if(!slider.settings.pagerCustom){
				// create the pager DOM element
				slider.pagerEl = $('<div class="bx-pager" />');
				// if a pager selector was supplied, populate it with the pager
				if(slider.settings.pagerSelector){
					$(slider.settings.pagerSelector).html(slider.pagerEl);
				// if no pager selector was supplied, add it after the wrapper
				}else{
					slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);
				}
				// populate the pager
				populatePager();
			}else{
				slider.pagerEl = $(slider.settings.pagerCustom);
			}
			// assign the pager click binding
			slider.pagerEl.on('click', 'a', clickPagerBind);
		}

		/**
		 * Appends prev / next controls to the controls element
		 */
		var appendControls = function(){
			slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + '</a>');
			slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + '</a>');
			// bind click actions to the controls
			slider.controls.next.bind('click', clickNextBind);
			slider.controls.prev.bind('click', clickPrevBind);
			// if nextSlector was supplied, populate it
			if(slider.settings.nextSelector){
				$(slider.settings.nextSelector).append(slider.controls.next);
			}
			// if prevSlector was supplied, populate it
			if(slider.settings.prevSelector){
				$(slider.settings.prevSelector).append(slider.controls.prev);
			}
			// if no custom selectors were supplied
			if(!slider.settings.nextSelector && !slider.settings.prevSelector){
				// add the controls to the DOM
				slider.controls.directionEl = $('<div class="bx-controls-direction" />');
				// add the control elements to the directionEl
				slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);
				// slider.viewport.append(slider.controls.directionEl);
				slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);
			}
		}

		/**
		 * Appends start / stop auto controls to the controls element
		 */
		var appendControlsAuto = function(){
			slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + '</a></div>');
			slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + '</a></div>');
			// add the controls to the DOM
			slider.controls.autoEl = $('<div class="bx-controls-auto" />');
			// bind click actions to the controls
			slider.controls.autoEl.on('click', '.bx-start', clickStartBind);
			slider.controls.autoEl.on('click', '.bx-stop', clickStopBind);
			// if autoControlsCombine, insert only the "start" control
			if(slider.settings.autoControlsCombine){
				slider.controls.autoEl.append(slider.controls.start);
			// if autoControlsCombine is false, insert both controls
			}else{
				slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);
			}
			// if auto controls selector was supplied, populate it with the controls
			if(slider.settings.autoControlsSelector){
				$(slider.settings.autoControlsSelector).html(slider.controls.autoEl);
			// if auto controls selector was not supplied, add it after the wrapper
			}else{
				slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);
			}
			// update the auto controls
			updateAutoControls(slider.settings.autoStart ? 'stop' : 'start');
		}

		/**
		 * Appends image captions to the DOM
		 */
		var appendCaptions = function(){
			// cycle through each child
			slider.children.each(function(index){
				// get the image title attribute
				var title = $(this).find('img:first').attr('title');
				// append the caption
				if (title != undefined && ('' + title).length) {
                    $(this).append('<div class="bx-caption"><span>' + title + '</span></div>');
                }
			});
		}

		/**
		 * Click next binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickNextBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			el.goToNextSlide();
			ga('send', 'event', 'ekos', 'banner-footer', 'direita');
			e.preventDefault();
		}

		/**
		 * Click prev binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickPrevBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			el.goToPrevSlide();
			ga('send', 'event', 'ekos', 'banner-footer', 'esquerda');
			e.preventDefault();
		}

		/**
		 * Click start binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickStartBind = function(e){
			el.startAuto();
			e.preventDefault();
		}

		/**
		 * Click stop binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickStopBind = function(e){
			el.stopAuto();
			e.preventDefault();
		}

		/**
		 * Click pager binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickPagerBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			var pagerLink = $(e.currentTarget);
			if(pagerLink.attr('data-slide-index') !== undefined){
				var pagerIndex = parseInt(pagerLink.attr('data-slide-index'));
				ga('send', 'event', 'ekos', 'banner-footer', 'seletor');
				// if clicked pager link is not active, continue with the goToSlide call
				if(pagerIndex != slider.active.index) el.goToSlide(pagerIndex);
				e.preventDefault();
			}
		}

		/**
		 * Updates the pager links with an active class
		 *
		 * @param slideIndex (int)
		 *  - index of slide to make active
		 */
		var updatePagerActive = function(slideIndex){
			// if "short" pager type
			var len = slider.children.length; // nb of children
			if(slider.settings.pagerType == 'short'){
				if(slider.settings.maxSlides > 1) {
					len = Math.ceil(slider.children.length/slider.settings.maxSlides);
				}
				slider.pagerEl.html( (slideIndex + 1) + slider.settings.pagerShortSeparator + len);
				return;
			}
			// remove all pager active classes
			slider.pagerEl.find('a').removeClass('active');
			// apply the active class for all pagers
			slider.pagerEl.each(function(i, el) { $(el).find('a').eq(slideIndex).addClass('active'); });
		}

		/**
		 * Performs needed actions after a slide transition
		 */
		var updateAfterSlideTransition = function(){
			// if infinte loop is true
			if(slider.settings.infiniteLoop){
				var position = '';
				// first slide
				if(slider.active.index == 0){
					// set the new position
					position = slider.children.eq(0).position();
				// carousel, last slide
				}else if(slider.active.index == getPagerQty() - 1 && slider.carousel){
					position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position();
				// last slide
				}else if(slider.active.index == slider.children.length - 1){
					position = slider.children.eq(slider.children.length - 1).position();
				}
				if(position){
					if (slider.settings.mode == 'horizontal') { setPositionProperty(-position.left, 'reset', 0); }
					else if (slider.settings.mode == 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
				}
			}
			// declare that the transition is complete
			slider.working = false;
			// onSlideAfter callback
			slider.settings.onSlideAfter(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
		}

		/**
		 * Updates the auto controls state (either active, or combined switch)
		 *
		 * @param state (string) "start", "stop"
		 *  - the new state of the auto show
		 */
		var updateAutoControls = function(state){
			// if autoControlsCombine is true, replace the current control with the new state
			if(slider.settings.autoControlsCombine){
				slider.controls.autoEl.html(slider.controls[state]);
			// if autoControlsCombine is false, apply the "active" class to the appropriate control
			}else{
				slider.controls.autoEl.find('a').removeClass('active');
				slider.controls.autoEl.find('a:not(.bx-' + state + ')').addClass('active');
			}
		}

		/**
		 * Updates the direction controls (checks if either should be hidden)
		 */
		var updateDirectionControls = function(){
			if(getPagerQty() == 1){
				slider.controls.prev.addClass('disabled');
				slider.controls.next.addClass('disabled');
			}else if(!slider.settings.infiniteLoop && slider.settings.hideControlOnEnd){
				// if first slide
				if (slider.active.index == 0){
					slider.controls.prev.addClass('disabled');
					slider.controls.next.removeClass('disabled');
				// if last slide
				}else if(slider.active.index == getPagerQty() - 1){
					slider.controls.next.addClass('disabled');
					slider.controls.prev.removeClass('disabled');
				// if any slide in the middle
				}else{
					slider.controls.prev.removeClass('disabled');
					slider.controls.next.removeClass('disabled');
				}
			}
		}

		/**
		 * Initialzes the auto process
		 */
		var initAuto = function(){
			// if autoDelay was supplied, launch the auto show using a setTimeout() call
			if(slider.settings.autoDelay > 0){
				var timeout = setTimeout(el.startAuto, slider.settings.autoDelay);
			// if autoDelay was not supplied, start the auto show normally
			}else{
				el.startAuto();
			}
			// if autoHover is requested
			if(slider.settings.autoHover){
				// on el hover
				el.hover(function(){
					// if the auto show is currently playing (has an active interval)
					if(slider.interval){
						// stop the auto show and pass true agument which will prevent control update
						el.stopAuto(true);
						// create a new autoPaused value which will be used by the relative "mouseout" event
						slider.autoPaused = true;
					}
				}, function(){
					// if the autoPaused value was created be the prior "mouseover" event
					if(slider.autoPaused){
						// start the auto show and pass true agument which will prevent control update
						el.startAuto(true);
						// reset the autoPaused value
						slider.autoPaused = null;
					}
				});
			}
		}

		/**
		 * Initialzes the ticker process
		 */
		var initTicker = function(){
			var startPosition = 0;
			// if autoDirection is "next", append a clone of the entire slider
			if(slider.settings.autoDirection == 'next'){
				el.append(slider.children.clone().addClass('bx-clone'));
			// if autoDirection is "prev", prepend a clone of the entire slider, and set the left position
			}else{
				el.prepend(slider.children.clone().addClass('bx-clone'));
				var position = slider.children.first().position();
				startPosition = slider.settings.mode == 'horizontal' ? -position.left : -position.top;
			}
			setPositionProperty(startPosition, 'reset', 0);
			// do not allow controls in ticker mode
			slider.settings.pager = false;
			slider.settings.controls = false;
			slider.settings.autoControls = false;
			// if autoHover is requested
			if(slider.settings.tickerHover && !slider.usingCSS){
				// on el hover
				slider.viewport.hover(function(){
					el.stop();
				}, function(){
					// calculate the total width of children (used to calculate the speed ratio)
					var totalDimens = 0;
					slider.children.each(function(index){
					  totalDimens += slider.settings.mode == 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
					});
					// calculate the speed ratio (used to determine the new speed to finish the paused animation)
					var ratio = slider.settings.speed / totalDimens;
					// determine which property to use
					var property = slider.settings.mode == 'horizontal' ? 'left' : 'top';
					// calculate the new speed
					var newSpeed = ratio * (totalDimens - (Math.abs(parseInt(el.css(property)))));
					tickerLoop(newSpeed);
				});
			}
			// start the ticker loop
			tickerLoop();
		}

		/**
		 * Runs a continuous loop, news ticker-style
		 */
		var tickerLoop = function(resumeSpeed){
			speed = resumeSpeed ? resumeSpeed : slider.settings.speed;
			var position = {left: 0, top: 0};
			var reset = {left: 0, top: 0};
			// if "next" animate left position to last child, then reset left to 0
			if(slider.settings.autoDirection == 'next'){
				position = el.find('.bx-clone').first().position();
			// if "prev" animate left position to 0, then reset left to first non-clone child
			}else{
				reset = slider.children.first().position();
			}
			var animateProperty = slider.settings.mode == 'horizontal' ? -position.left : -position.top;
			var resetValue = slider.settings.mode == 'horizontal' ? -reset.left : -reset.top;
			var params = {resetValue: resetValue};
			setPositionProperty(animateProperty, 'ticker', speed, params);
		}

		/**
		 * Initializes touch events
		 */
		var initTouch = function(){
			// initialize object to contain all touch values
			slider.touch = {
				start: {x: 0, y: 0},
				end: {x: 0, y: 0}
			}
			slider.viewport.bind('touchstart', onTouchStart);
		}

		/**
		 * Event handler for "touchstart"
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var onTouchStart = function(e){
			if(slider.working){
				e.preventDefault();
			}else{
				// record the original position when touch starts
				slider.touch.originalPos = el.position();
				var orig = e.originalEvent;
				// record the starting touch x, y coordinates
				slider.touch.start.x = orig.changedTouches[0].pageX;
				slider.touch.start.y = orig.changedTouches[0].pageY;
				// bind a "touchmove" event to the viewport
				slider.viewport.bind('touchmove', onTouchMove);
				// bind a "touchend" event to the viewport
				slider.viewport.bind('touchend', onTouchEnd);
			}
		}

		/**
		 * Event handler for "touchmove"
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var onTouchMove = function(e){
			var orig = e.originalEvent;
			// if scrolling on y axis, do not prevent default
			var xMovement = Math.abs(orig.changedTouches[0].pageX - slider.touch.start.x);
			var yMovement = Math.abs(orig.changedTouches[0].pageY - slider.touch.start.y);
			// x axis swipe
			if((xMovement * 3) > yMovement && slider.settings.preventDefaultSwipeX){
				e.preventDefault();
			// y axis swipe
			}else if((yMovement * 3) > xMovement && slider.settings.preventDefaultSwipeY){
				e.preventDefault();
			}
			if(slider.settings.mode != 'fade' && slider.settings.oneToOneTouch){
				var value = 0;
				// if horizontal, drag along x axis
				if(slider.settings.mode == 'horizontal'){
					var change = orig.changedTouches[0].pageX - slider.touch.start.x;
					value = slider.touch.originalPos.left + change;
				// if vertical, drag along y axis
				}else{
					var change = orig.changedTouches[0].pageY - slider.touch.start.y;
					value = slider.touch.originalPos.top + change;
				}
				setPositionProperty(value, 'reset', 0);
			}
		}

		/**
		 * Event handler for "touchend"
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var onTouchEnd = function(e){
			slider.viewport.unbind('touchmove', onTouchMove);
			var orig = e.originalEvent;
			var value = 0;
			// record end x, y positions
			slider.touch.end.x = orig.changedTouches[0].pageX;
			slider.touch.end.y = orig.changedTouches[0].pageY;
			// if fade mode, check if absolute x distance clears the threshold
			if(slider.settings.mode == 'fade'){
				var distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
				if(distance >= slider.settings.swipeThreshold){
					slider.touch.start.x > slider.touch.end.x ? el.goToNextSlide() : el.goToPrevSlide();
					el.stopAuto();
				}
			// not fade mode
			}else{
				var distance = 0;
				// calculate distance and el's animate property
				if(slider.settings.mode == 'horizontal'){
					distance = slider.touch.end.x - slider.touch.start.x;
					value = slider.touch.originalPos.left;
				}else{
					distance = slider.touch.end.y - slider.touch.start.y;
					value = slider.touch.originalPos.top;
				}
				// if not infinite loop and first / last slide, do not attempt a slide transition
				if(!slider.settings.infiniteLoop && ((slider.active.index == 0 && distance > 0) || (slider.active.last && distance < 0))){
					setPositionProperty(value, 'reset', 200);
				}else{
					// check if distance clears threshold
					if(Math.abs(distance) >= slider.settings.swipeThreshold){
						distance < 0 ? el.goToNextSlide() : el.goToPrevSlide();
						el.stopAuto();
					}else{
						// el.animate(property, 200);
						setPositionProperty(value, 'reset', 200);
					}
				}
			}
			slider.viewport.unbind('touchend', onTouchEnd);
		}

		/**
		 * Window resize event callback
		 */
		var resizeWindow = function(e){
			// don't do anything if slider isn't initialized.
			if(!slider.initialized) return;
			// get the new window dimens (again, thank you IE)
			var windowWidthNew = $(window).width();
			var windowHeightNew = $(window).height();
			// make sure that it is a true window resize
			// *we must check this because our dinosaur friend IE fires a window resize event when certain DOM elements
			// are resized. Can you just die already?*
			if(windowWidth != windowWidthNew || windowHeight != windowHeightNew){
				// set the new window dimens
				windowWidth = windowWidthNew;
				windowHeight = windowHeightNew;
				// update all dynamic elements
				el.redrawSlider();
				// Call user resize handler
				slider.settings.onSliderResize.call(el, slider.active.index);
			}
		}

		/**
		 * ===================================================================================
		 * = PUBLIC FUNCTIONS
		 * ===================================================================================
		 */

		/**
		 * Performs slide transition to the specified slide
		 *
		 * @param slideIndex (int)
		 *  - the destination slide's index (zero-based)
		 *
		 * @param direction (string)
		 *  - INTERNAL USE ONLY - the direction of travel ("prev" / "next")
		 */
		el.goToSlide = function(slideIndex, direction){
			// if plugin is currently in motion, ignore request
			if(slider.working || slider.active.index == slideIndex) return;
			// declare that plugin is in motion
			slider.working = true;
			// store the old index
			slider.oldIndex = slider.active.index;
			// if slideIndex is less than zero, set active index to last child (this happens during infinite loop)
			if(slideIndex < 0){
				slider.active.index = getPagerQty() - 1;
			// if slideIndex is greater than children length, set active index to 0 (this happens during infinite loop)
			}else if(slideIndex >= getPagerQty()){
				slider.active.index = 0;
			// set active index to requested slide
			}else{
				slider.active.index = slideIndex;
			}
			// onSlideBefore, onSlideNext, onSlidePrev callbacks
			slider.settings.onSlideBefore(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			if(direction == 'next'){
				slider.settings.onSlideNext(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			}else if(direction == 'prev'){
				slider.settings.onSlidePrev(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			}
			// check if last slide
			slider.active.last = slider.active.index >= getPagerQty() - 1;
			// update the pager with active class
			if(slider.settings.pager) updatePagerActive(slider.active.index);
			// // check for direction control update
			if(slider.settings.controls) updateDirectionControls();
			// if slider is set to mode: "fade"
			if(slider.settings.mode == 'fade'){
				// if adaptiveHeight is true and next height is different from current height, animate to the new height
				if(slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()){
					slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
				}
				// fade out the visible child and reset its z-index value
				slider.children.filter(':visible').fadeOut(slider.settings.speed).css({zIndex: 0});
				// fade in the newly requested slide
				slider.children.eq(slider.active.index).css('zIndex', slider.settings.slideZIndex+1).fadeIn(slider.settings.speed, function(){
					$(this).css('zIndex', slider.settings.slideZIndex);
					updateAfterSlideTransition();
				});
			// slider mode is not "fade"
			}else{
				// if adaptiveHeight is true and next height is different from current height, animate to the new height
				if(slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()){
					slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
				}
				var moveBy = 0;
				var position = {left: 0, top: 0};
				// if carousel and not infinite loop
				if(!slider.settings.infiniteLoop && slider.carousel && slider.active.last){
					if(slider.settings.mode == 'horizontal'){
						// get the last child position
						var lastChild = slider.children.eq(slider.children.length - 1);
						position = lastChild.position();
						// calculate the position of the last slide
						moveBy = slider.viewport.width() - lastChild.outerWidth();
					}else{
						// get last showing index position
						var lastShowingIndex = slider.children.length - slider.settings.minSlides;
						position = slider.children.eq(lastShowingIndex).position();
					}
					// horizontal carousel, going previous while on first slide (infiniteLoop mode)
				}else if(slider.carousel && slider.active.last && direction == 'prev'){
					// get the last child position
					var eq = slider.settings.moveSlides == 1 ? slider.settings.maxSlides - getMoveBy() : ((getPagerQty() - 1) * getMoveBy()) - (slider.children.length - slider.settings.maxSlides);
					var lastChild = el.children('.bx-clone').eq(eq);
					position = lastChild.position();
				// if infinite loop and "Next" is clicked on the last slide
				}else if(direction == 'next' && slider.active.index == 0){
					// get the last clone position
					position = el.find('> .bx-clone').eq(slider.settings.maxSlides).position();
					slider.active.last = false;
				// normal non-zero requests
				}else if(slideIndex >= 0){
					var requestEl = slideIndex * getMoveBy();
					position = slider.children.eq(requestEl).position();
				}

				/* If the position doesn't exist
				 * (e.g. if you destroy the slider on a next click),
				 * it doesn't throw an error.
				 */
				if ("undefined" !== typeof(position)) {
					var value = slider.settings.mode == 'horizontal' ? -(position.left - moveBy) : -position.top;
					// plugin values to be animated
					setPositionProperty(value, 'slide', slider.settings.speed);
				}
			}
		}

		/**
		 * Transitions to the next slide in the show
		 */
		el.goToNextSlide = function(){
			// if infiniteLoop is false and last page is showing, disregard call
			if (!slider.settings.infiniteLoop && slider.active.last) return;
			var pagerIndex = parseInt(slider.active.index) + 1;
			el.goToSlide(pagerIndex, 'next');
		}

		/**
		 * Transitions to the prev slide in the show
		 */
		el.goToPrevSlide = function(){
			// if infiniteLoop is false and last page is showing, disregard call
			if (!slider.settings.infiniteLoop && slider.active.index == 0) return;
			var pagerIndex = parseInt(slider.active.index) - 1;
			el.goToSlide(pagerIndex, 'prev');
		}

		/**
		 * Starts the auto show
		 *
		 * @param preventControlUpdate (boolean)
		 *  - if true, auto controls state will not be updated
		 */
		el.startAuto = function(preventControlUpdate){
			// if an interval already exists, disregard call
			if(slider.interval) return;
			// create an interval
			slider.interval = setInterval(function(){
				slider.settings.autoDirection == 'next' ? el.goToNextSlide() : el.goToPrevSlide();
			}, slider.settings.pause);
			// if auto controls are displayed and preventControlUpdate is not true
			if (slider.settings.autoControls && preventControlUpdate != true) updateAutoControls('stop');
		}

		/**
		 * Stops the auto show
		 *
		 * @param preventControlUpdate (boolean)
		 *  - if true, auto controls state will not be updated
		 */
		el.stopAuto = function(preventControlUpdate){
			// if no interval exists, disregard call
			if(!slider.interval) return;
			// clear the interval
			clearInterval(slider.interval);
			slider.interval = null;
			// if auto controls are displayed and preventControlUpdate is not true
			if (slider.settings.autoControls && preventControlUpdate != true) updateAutoControls('start');
		}

		/**
		 * Returns current slide index (zero-based)
		 */
		el.getCurrentSlide = function(){
			return slider.active.index;
		}

		/**
		 * Returns current slide element
		 */
		el.getCurrentSlideElement = function(){
			return slider.children.eq(slider.active.index);
		}

		/**
		 * Returns number of slides in show
		 */
		el.getSlideCount = function(){
			return slider.children.length;
		}

		/**
		 * Update all dynamic slider elements
		 */
		el.redrawSlider = function(){
			// resize all children in ratio to new screen size
			slider.children.add(el.find('.bx-clone')).width(getSlideWidth());
			// adjust the height
			slider.viewport.css('height', getViewportHeight());
			// update the slide position
			if(!slider.settings.ticker) setSlidePosition();
			// if active.last was true before the screen resize, we want
			// to keep it last no matter what screen size we end on
			if (slider.active.last) slider.active.index = getPagerQty() - 1;
			// if the active index (page) no longer exists due to the resize, simply set the index as last
			if (slider.active.index >= getPagerQty()) slider.active.last = true;
			// if a pager is being displayed and a custom pager is not being used, update it
			if(slider.settings.pager && !slider.settings.pagerCustom){
				populatePager();
				updatePagerActive(slider.active.index);
			}
		}

		/**
		 * Destroy the current instance of the slider (revert everything back to original state)
		 */
		el.destroySlider = function(){
			// don't do anything if slider has already been destroyed
			if(!slider.initialized) return;
			slider.initialized = false;
			$('.bx-clone', this).remove();
			slider.children.each(function() {
				$(this).data("origStyle") != undefined ? $(this).attr("style", $(this).data("origStyle")) : $(this).removeAttr('style');
			});
			$(this).data("origStyle") != undefined ? this.attr("style", $(this).data("origStyle")) : $(this).removeAttr('style');
			$(this).unwrap().unwrap();
			if(slider.controls.el) slider.controls.el.remove();
			if(slider.controls.next) slider.controls.next.remove();
			if(slider.controls.prev) slider.controls.prev.remove();
			if(slider.pagerEl && slider.settings.controls) slider.pagerEl.remove();
			$('.bx-caption', this).remove();
			if(slider.controls.autoEl) slider.controls.autoEl.remove();
			clearInterval(slider.interval);
			if(slider.settings.responsive) $(window).unbind('resize', resizeWindow);
		}

		/**
		 * Reload the slider (revert all DOM changes, and re-initialize)
		 */
		el.reloadSlider = function(settings){
			if (settings != undefined) options = settings;
			el.destroySlider();
			init();
		}

		init();

		// returns the current jQuery object
		return this;
	}

})(jQuery);

/*!
* jquery.inputmask.bundle
* http://github.com/RobinHerbots/jquery.inputmask
* Copyright (c) 2010 - 2015 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.1.62
*/
!function(a){function b(a){var b=document.createElement("input"),c="on"+a,d=c in b;return d||(b.setAttribute(c,"return;"),d="function"==typeof b[c]),b=null,d}function c(a){var b="text"==a||"tel"==a;if(!b){var c=document.createElement("input");c.setAttribute("type",a),b="text"===c.type,c=null}return b}function d(b,c,e){var f=e.aliases[b];return f?(f.alias&&d(f.alias,void 0,e),a.extend(!0,e,f),a.extend(!0,e,c),!0):!1}function e(b,c){function d(c){function d(a,b,c,d){this.matches=[],this.isGroup=a||!1,this.isOptional=b||!1,this.isQuantifier=c||!1,this.isAlternator=d||!1,this.quantifier={min:1,max:1}}function e(c,d,e){var f=b.definitions[d],g=0==c.matches.length;if(e=void 0!=e?e:c.matches.length,f&&!m){f.placeholder=a.isFunction(f.placeholder)?f.placeholder.call(this,b):f.placeholder;for(var h=f.prevalidator,i=h?h.length:0,j=1;j<f.cardinality;j++){var k=i>=j?h[j-1]:[],l=k.validator,n=k.cardinality;c.matches.splice(e++,0,{fn:l?"string"==typeof l?new RegExp(l):new function(){this.test=l}:new RegExp("."),cardinality:n?n:1,optionality:c.isOptional,newBlockMarker:g,casing:f.casing,def:f.definitionSymbol||d,placeholder:f.placeholder,mask:d})}c.matches.splice(e++,0,{fn:f.validator?"string"==typeof f.validator?new RegExp(f.validator):new function(){this.test=f.validator}:new RegExp("."),cardinality:f.cardinality,optionality:c.isOptional,newBlockMarker:g,casing:f.casing,def:f.definitionSymbol||d,placeholder:f.placeholder,mask:d})}else c.matches.splice(e++,0,{fn:null,cardinality:0,optionality:c.isOptional,newBlockMarker:g,casing:null,def:d,placeholder:void 0,mask:d}),m=!1}for(var f,g,h,i,j,k,l=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})\??|[^.?*+^${[]()|\\]+|./g,m=!1,n=new d,o=[],p=[];f=l.exec(c);)switch(g=f[0],g.charAt(0)){case b.optionalmarker.end:case b.groupmarker.end:if(h=o.pop(),o.length>0){if(i=o[o.length-1],i.matches.push(h),i.isAlternator){j=o.pop();for(var q=0;q<j.matches.length;q++)j.matches[q].isGroup=!1;o.length>0?(i=o[o.length-1],i.matches.push(j)):n.matches.push(j)}}else n.matches.push(h);break;case b.optionalmarker.start:o.push(new d(!1,!0));break;case b.groupmarker.start:o.push(new d(!0));break;case b.quantifiermarker.start:var r=new d(!1,!1,!0);g=g.replace(/[{}]/g,"");var s=g.split(","),t=isNaN(s[0])?s[0]:parseInt(s[0]),u=1==s.length?t:isNaN(s[1])?s[1]:parseInt(s[1]);if(("*"==u||"+"==u)&&(t="*"==u?0:1),r.quantifier={min:t,max:u},o.length>0){var v=o[o.length-1].matches;if(f=v.pop(),!f.isGroup){var w=new d(!0);w.matches.push(f),f=w}v.push(f),v.push(r)}else{if(f=n.matches.pop(),!f.isGroup){var w=new d(!0);w.matches.push(f),f=w}n.matches.push(f),n.matches.push(r)}break;case b.escapeChar:m=!0;break;case b.alternatormarker:o.length>0?(i=o[o.length-1],k=i.matches.pop()):k=n.matches.pop(),k.isAlternator?o.push(k):(j=new d(!1,!1,!1,!0),j.matches.push(k),o.push(j));break;default:if(o.length>0){if(i=o[o.length-1],i.matches.length>0&&!i.isAlternator&&(k=i.matches[i.matches.length-1],k.isGroup&&(k.isGroup=!1,e(k,b.groupmarker.start,0),e(k,b.groupmarker.end))),e(i,g),i.isAlternator){j=o.pop();for(var q=0;q<j.matches.length;q++)j.matches[q].isGroup=!1;o.length>0?(i=o[o.length-1],i.matches.push(j)):n.matches.push(j)}}else n.matches.length>0&&(k=n.matches[n.matches.length-1],k.isGroup&&(k.isGroup=!1,e(k,b.groupmarker.start,0),e(k,b.groupmarker.end))),e(n,g)}return n.matches.length>0&&(k=n.matches[n.matches.length-1],k.isGroup&&(k.isGroup=!1,e(k,b.groupmarker.start,0),e(k,b.groupmarker.end)),p.push(n)),p}function e(e,f){if(void 0==e||""==e)return void 0;if(1==e.length&&0==b.greedy&&0!=b.repeat&&(b.placeholder=""),b.repeat>0||"*"==b.repeat||"+"==b.repeat){var g="*"==b.repeat?0:"+"==b.repeat?1:b.repeat;e=b.groupmarker.start+e+b.groupmarker.end+b.quantifiermarker.start+g+","+b.repeat+b.quantifiermarker.end}var h;return void 0==a.inputmask.masksCache[e]||c===!0?(h={mask:e,maskToken:d(e),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},metadata:f},c!==!0&&(a.inputmask.masksCache[e]=h)):h=a.extend(!0,{},a.inputmask.masksCache[e]),h}function f(a){if(a=a.toString(),b.numericInput){a=a.split("").reverse();for(var c=0;c<a.length;c++)a[c]==b.optionalmarker.start?a[c]=b.optionalmarker.end:a[c]==b.optionalmarker.end?a[c]=b.optionalmarker.start:a[c]==b.groupmarker.start?a[c]=b.groupmarker.end:a[c]==b.groupmarker.end&&(a[c]=b.groupmarker.start);a=a.join("")}return a}var g=void 0;if(a.isFunction(b.mask)&&(b.mask=b.mask.call(this,b)),a.isArray(b.mask)){if(b.mask.length>1){b.keepStatic=void 0==b.keepStatic?!0:b.keepStatic;var h="(";return a.each(b.mask,function(b,c){h.length>1&&(h+=")|("),h+=f(void 0==c.mask||a.isFunction(c.mask)?c:c.mask)}),h+=")",e(h,b.mask)}b.mask=b.mask.pop()}return b.mask&&(g=void 0==b.mask.mask||a.isFunction(b.mask.mask)?e(f(b.mask),b.mask):e(f(b.mask.mask),b.mask)),g}function f(d,e,f){function g(a,b,c){b=b||0;var d,e,f,g=[],h=0;do{if(a===!0&&l().validPositions[h]){var i=l().validPositions[h];e=i.match,d=i.locator.slice(),g.push(c===!0?i.input:G(h,e))}else f=q(h,d,h-1),e=f.match,d=f.locator.slice(),g.push(G(h,e));h++}while((void 0==da||da>h-1)&&null!=e.fn||null==e.fn&&""!=e.def||b>=h);return g.pop(),g}function l(){return e}function m(a){var b=l();b.buffer=void 0,b.tests={},a!==!0&&(b._buffer=void 0,b.validPositions={},b.p=0)}function n(a,b){var c=l(),d=-1,e=c.validPositions;void 0==a&&(a=-1);var f=d,g=d;for(var h in e){var i=parseInt(h);e[i]&&(b||null!=e[i].match.fn)&&(a>=i&&(f=i),i>=a&&(g=i))}return d=-1!=f&&a-f>1||a>g?f:g}function o(b,c,d){if(f.insertMode&&void 0!=l().validPositions[b]&&void 0==d){var e,g=a.extend(!0,{},l().validPositions),h=n();for(e=b;h>=e;e++)delete l().validPositions[e];l().validPositions[b]=c;var i,j=!0,k=l().validPositions;for(e=i=b;h>=e;e++){var m=g[e];if(void 0!=m)for(var o=i;o<B()&&(null==m.match.fn&&k[e]&&(k[e].match.optionalQuantifier===!0||k[e].match.optionality===!0)||null!=m.match.fn);){if(null==m.match.fn||!f.keepStatic&&k[e]&&(void 0!=k[e+1]&&t(e+1,k[e].locator.slice(),e).length>1||void 0!=k[e].alternation)?o++:o=C(i),s(o,m.match.def)){j=z(o,m.input,!0,!0)!==!1,i=o;break}j=null==m.match.fn}if(!j)break}if(!j)return l().validPositions=a.extend(!0,{},g),!1}else l().validPositions[b]=c;return!0}function p(a,b,c,d){var e,g=a;l().p=a,void 0!=l().validPositions[a]&&l().validPositions[a].input==f.radixPoint&&(b++,g++);for(e=g;b>e;e++)void 0!=l().validPositions[e]&&(c===!0||0!=f.canClearPosition(l(),e,n(),d,f))&&delete l().validPositions[e];for(m(!0),e=g+1;e<=n();){for(;void 0!=l().validPositions[g];)g++;var h=l().validPositions[g];g>e&&(e=g+1);var i=l().validPositions[e];void 0!=i&&void 0==h?(s(g,i.match.def)&&z(g,i.input,!0)!==!1&&(delete l().validPositions[e],e++),g++):e++}var j=n(),k=B();for(j>=a&&void 0!=l().validPositions[j]&&l().validPositions[j].input==f.radixPoint&&delete l().validPositions[j],e=j+1;k>=e;e++)l().validPositions[e]&&delete l().validPositions[e];m(!0)}function q(a,b,c){var d=l().validPositions[a];if(void 0==d)for(var e=t(a,b,c),g=n(),h=l().validPositions[g]||t(0,void 0,void 0)[0],i=void 0!=h.alternation?h.locator[h.alternation].toString().split(","):[],j=0;j<e.length&&(d=e[j],!(d.match&&(f.greedy&&d.match.optionalQuantifier!==!0||(d.match.optionality===!1||d.match.newBlockMarker===!1)&&d.match.optionalQuantifier!==!0)&&(void 0==h.alternation||void 0!=d.locator[h.alternation]&&y(d.locator[h.alternation].toString().split(","),i))));j++);return d}function r(a){return l().validPositions[a]?l().validPositions[a].match:t(a)[0].match}function s(a,b){for(var c=!1,d=t(a),e=0;e<d.length;e++)if(d[e].match&&d[e].match.def==b){c=!0;break}return c}function t(b,c,d,e){function f(c,d,e,g){function i(e,g,n){if(h>1e4)return alert("jquery.inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+l().mask),!0;if(h==b&&void 0==e.matches)return j.push({match:e,locator:g.reverse()}),!0;if(void 0!=e.matches){if(e.isGroup&&n!==!0){if(e=i(c.matches[m+1],g))return!0}else if(e.isOptional){var o=e;if(e=f(e,d,g,n)){var p=j[j.length-1].match,q=0==a.inArray(p,o.matches);if(!q)return!0;k=!0,h=b}}else if(e.isAlternator){var r,s=e,t=[],u=j.slice(),v=g.length,w=d.length>0?d.shift():-1;if(-1==w||"string"==typeof w){var x,y=h,z=d.slice();"string"==typeof w&&(x=w.split(","));for(var A=0;A<s.matches.length;A++){j=[],e=i(s.matches[A],[A].concat(g),n)||e,r=j.slice(),h=y,j=[];for(var B=0;B<z.length;B++)d[B]=z[B];for(var C=0;C<r.length;C++){var D=r[C];D.alternation=v;for(var E=0;E<t.length;E++){var F=t[E];if(D.match.mask==F.match.mask&&("string"!=typeof w||-1!=a.inArray(D.locator[v].toString(),x))){r.splice(C,1),F.locator[v]=F.locator[v]+","+D.locator[v],F.alternation=v;break}}}t=t.concat(r)}"string"==typeof w&&(t=a.map(t,function(b,c){if(isFinite(c)){var d,e=b.locator[v].toString().split(",");b.locator[v]=void 0,b.alternation=void 0;for(var f=0;f<e.length;f++)d=-1!=a.inArray(e[f],x),d&&(void 0!=b.locator[v]?(b.locator[v]+=",",b.locator[v]+=e[f]):b.locator[v]=parseInt(e[f]),b.alternation=v);if(void 0!=b.locator[v])return b}})),j=u.concat(t),h=b,k=!0}else e=i(s.matches[w],[w].concat(g),n);if(e)return!0}else if(e.isQuantifier&&n!==!0)for(var G=e,H=d.length>0&&n!==!0?d.shift():0;H<(isNaN(G.quantifier.max)?H+1:G.quantifier.max)&&b>=h;H++){var I=c.matches[a.inArray(G,c.matches)-1];if(e=i(I,[H].concat(g),!0)){var p=j[j.length-1].match;p.optionalQuantifier=H>G.quantifier.min-1;var q=0==a.inArray(p,I.matches);if(q){if(H>G.quantifier.min-1){k=!0,h=b;break}return!0}return!0}}else if(e=f(e,d,g,n))return!0}else h++}for(var m=d.length>0?d.shift():0;m<c.matches.length;m++)if(c.matches[m].isQuantifier!==!0){var n=i(c.matches[m],[m].concat(e),g);if(n&&h==b)return n;if(h>b)break}}var g=l().maskToken,h=c?d:0,i=c||[0],j=[],k=!1;if(void 0==c){for(var m,n=b-1;void 0==(m=l().validPositions[n])&&n>-1;)n--;if(void 0!=m&&n>-1)h=n,i=m.locator.slice();else{for(n=b-1;void 0==(m=l().tests[n])&&n>-1;)n--;void 0!=m&&n>-1&&(h=n,i=m[0].locator.slice())}}for(var o=i.shift();o<g.length;o++){var p=f(g[o],i,[o]);if(p&&h==b||h>b)break}return(0==j.length||k)&&j.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:""},locator:[]}),l().tests[b]=a.extend(!0,[],j),l().tests[b]}function u(){return void 0==l()._buffer&&(l()._buffer=g(!1,1)),l()._buffer}function v(){return void 0==l().buffer&&(l().buffer=g(!0,n(),!0)),l().buffer}function w(a,b,c){if(c=c||v().slice(),a===!0)m(),a=0,b=c.length;else for(var d=a;b>d;d++)delete l().validPositions[d],delete l().tests[d];for(var d=a;b>d;d++)c[d]!=f.skipOptionalPartCharacter&&z(d,c[d],!0,!0)}function x(a,b){switch(b.casing){case"upper":a=a.toUpperCase();break;case"lower":a=a.toLowerCase()}return a}function y(b,c){for(var d=f.greedy?c:c.slice(0,1),e=!1,g=0;g<b.length;g++)if(-1!=a.inArray(b[g],d)){e=!0;break}return e}function z(b,c,d,e){function g(b,c,d,e){var g=!1;return a.each(t(b),function(h,i){for(var j=i.match,k=c?1:0,q="",r=(v(),j.cardinality);r>k;r--)q+=E(b-(r-1));if(c&&(q+=c),g=null!=j.fn?j.fn.test(q,l(),b,d,f):c!=j.def&&c!=f.skipOptionalPartCharacter||""==j.def?!1:{c:j.def,pos:b},g!==!1){var s=void 0!=g.c?g.c:c;s=s==f.skipOptionalPartCharacter&&null===j.fn?j.def:s;var t=b,u=v();if(void 0!=g.remove&&(a.isArray(g.remove)||(g.remove=[g.remove]),a.each(g.remove.sort(function(a,b){return b-a}),function(a,b){p(b,b+1,!0)})),void 0!=g.insert&&(a.isArray(g.insert)||(g.insert=[g.insert]),a.each(g.insert.sort(function(a,b){return a-b}),function(a,b){z(b.pos,b.c,!0)})),g.refreshFromBuffer){var y=g.refreshFromBuffer;if(d=!0,w(y===!0?y:y.start,y.end,u),void 0==g.pos&&void 0==g.c)return g.pos=n(),!1;if(t=void 0!=g.pos?g.pos:b,t!=b)return g=a.extend(g,z(t,s,!0)),!1}else if(g!==!0&&void 0!=g.pos&&g.pos!=b&&(t=g.pos,w(b,t),t!=b))return g=a.extend(g,z(t,s,!0)),!1;return 1!=g&&void 0==g.pos&&void 0==g.c?!1:(h>0&&m(!0),o(t,a.extend({},i,{input:x(s,j)}),e)||(g=!1),!1)}}),g}function h(b,c,d,e){var g,h,i,j,k=a.extend(!0,{},l().validPositions);for(g=n();g>=0;g--)if(j=l().validPositions[g],j&&void 0!=j.alternation&&j.locator[j.alternation].length>1){h=l().validPositions[g].alternation;break}if(void 0!=h)for(var o in l().validPositions)if(j=l().validPositions[o],parseInt(o)>parseInt(g)&&j.alternation){for(var p=j.locator[h],q=l().validPositions[g].locator[h].toString().split(","),r=0;r<q.length;r++)if(p<q[r]){for(var s,t,u=o-1;u>=0;u--)if(s=l().validPositions[u],void 0!=s){t=s.locator[h],s.locator[h]=parseInt(q[r]);break}if(p!=s.locator[h]){for(var v=[],w=o;w<n()+1;w++){var x=l().validPositions[w];x&&null!=x.match.fn&&v.push(x.input),delete l().validPositions[w],delete l().tests[w]}for(m(!0),f.keepStatic=!f.keepStatic,i=!0;v.length>0;){var y=v.shift();if(y!=f.skipOptionalPartCharacter&&!(i=z(n()+1,y,!1,!0)))break}if(s.alternation=h,s.locator[h]=t,i&&(i=z(b,c,d,e)),f.keepStatic=!f.keepStatic,i)return i;m(),l().validPositions=a.extend(!0,{},k)}}break}return!1}function i(b,c){for(var d=l().validPositions[c],e=d.locator,f=e.length,g=b;c>g;g++)if(!A(g)){var h=t(g),i=h[0],j=-1;a.each(h,function(a,b){for(var c=0;f>c;c++)b.locator[c]&&y(b.locator[c].toString().split(","),e[c].toString().split(","))&&c>j&&(j=c,i=b)}),o(g,a.extend({},i,{input:i.match.def}),!0)}}d=d===!0;for(var j=v(),k=b-1;k>-1&&!l().validPositions[k];k--);for(k++;b>k;k++)void 0==l().validPositions[k]&&((!A(k)||j[k]!=G(k))&&t(k).length>1||j[k]==f.radixPoint||"0"==j[k]&&a.inArray(f.radixPoint,j)<k)&&g(k,j[k],!0);var q=b,r=!1,s=a.extend(!0,{},l().validPositions);if(q<B()&&(r=g(q,c,d,e),(!d||e)&&r===!1)){var u=l().validPositions[q];if(!u||null!=u.match.fn||u.match.def!=c&&c!=f.skipOptionalPartCharacter){if((f.insertMode||void 0==l().validPositions[C(q)])&&!A(q))for(var D=q+1,F=C(q);F>=D;D++)if(r=g(D,c,d,e),r!==!1){i(q,D),q=D;break}}else r={caret:C(q)}}if(r===!1&&f.keepStatic&&O(j)&&(r=h(b,c,d,e)),r===!0&&(r={pos:q}),a.isFunction(f.postValidation)&&0!=r&&!d){m(!0);var H=f.postValidation(v(),f);if(!H)return m(!0),l().validPositions=a.extend(!0,{},s),!1}return r}function A(a){var b=r(a);if(null!=b.fn)return b.fn;if(!f.keepStatic&&void 0==l().validPositions[a]){for(var c=t(a),d=!0,e=0;e<c.length;e++)if(""!=c[e].match.def&&(null!==c[e].match.fn||void 0==c[e].alternation||c[e].locator[c[e].alternation].length>1)){d=!1;break}return d}return!1}function B(){var a;da=ca.prop("maxLength"),-1==da&&(da=void 0);var b,c=n(),d=l().validPositions[c],e=void 0!=d?d.locator.slice():void 0;for(b=c+1;void 0==d||null!=d.match.fn||null==d.match.fn&&""!=d.match.def;b++)d=q(b,e,b-1),e=d.locator.slice();var f=r(b-1);return a=""!=f.def?b:b-1,void 0==da||da>a?a:da}function C(a){var b=B();if(a>=b)return b;for(var c=a;++c<b&&!A(c)&&(f.nojumps!==!0||f.nojumpsThreshold>c););return c}function D(a){var b=a;if(0>=b)return 0;for(;--b>0&&!A(b););return b}function E(a){return void 0==l().validPositions[a]?G(a):l().validPositions[a].input}function F(b,c,d,e,g){if(e&&a.isFunction(f.onBeforeWrite)){var h=f.onBeforeWrite.call(b,e,c,d,f);if(h){if(h.refreshFromBuffer){var i=h.refreshFromBuffer;w(i===!0?i:i.start,i.end,h.buffer),m(!0),c=v()}d=h.caret||d}}b._valueSet(c.join("")),void 0!=d&&L(b,d),g===!0&&(ga=!0,a(b).trigger("input"))}function G(a,b){if(b=b||r(a),void 0!=b.placeholder)return b.placeholder;if(null==b.fn){if(!f.keepStatic&&void 0==l().validPositions[a]){for(var c=t(a),d=!0,e=0;e<c.length;e++)if(""!=c[e].match.def&&(null!==c[e].match.fn||void 0==c[e].alternation||c[e].locator[c[e].alternation].length>1)){d=!1;break}if(d)return f.placeholder.charAt(a%f.placeholder.length)}return b.def}return f.placeholder.charAt(a%f.placeholder.length)}function H(b,c,d,e){function f(){var a=!1,b=u().slice(i,C(i)).join("").indexOf(h);if(-1!=b&&!A(i)){a=!0;for(var c=u().slice(i,i+b),d=0;d<c.length;d++)if(" "!=c[d]){a=!1;break}}return a}var g=void 0!=e?e.slice():b._valueGet().split(""),h="",i=0;if(m(),l().p=C(-1),c&&b._valueSet(""),!d){var j=u().slice(0,C(-1)).join(""),k=g.join("").match(new RegExp(I(j),"g"));k&&k.length>0&&(g.splice(0,k.length*j.length),i=C(i))}a.each(g,function(c,e){var g=a.Event("keypress");g.which=e.charCodeAt(0),h+=e;var j=n(void 0,!0),k=l().validPositions[j],m=q(j+1,k?k.locator.slice():void 0,j);if(!f()||d){var o=d?c:null==m.match.fn&&m.match.optionality&&j+1<l().p?j+1:l().p;U.call(b,g,!0,!1,d,o),i=o+1,h=""}else U.call(b,g,!0,!1,!0,j+1)}),c&&F(b,v(),a(b).is(":focus")?C(n(0)):void 0,a.Event("checkval"))}function I(b){return a.inputmask.escapeRegex(b)}function J(b){if(b.data("_inputmask")&&!b.hasClass("hasDatepicker")){var c=[],d=l().validPositions;for(var e in d)d[e].match&&null!=d[e].match.fn&&c.push(d[e].input);var g=(ea?c.reverse():c).join(""),h=(ea?v().slice().reverse():v()).join("");return a.isFunction(f.onUnMask)&&(g=f.onUnMask.call(b,h,g,f)||g),g}return b[0]._valueGet()}function K(a){if(ea&&"number"==typeof a&&(!f.greedy||""!=f.placeholder)){var b=v().length;a=b-a}return a}function L(b,c,d){var e,g=b.jquery&&b.length>0?b[0]:b;if("number"!=typeof c)return g.setSelectionRange?(c=g.selectionStart,d=g.selectionEnd):window.getSelection?(e=window.getSelection().getRangeAt(0),e.commonAncestorContainer.parentNode==g&&(c=e.startOffset,d=e.endOffset)):document.selection&&document.selection.createRange&&(e=document.selection.createRange(),c=0-e.duplicate().moveStart("character",-1e5),d=c+e.text.length),{begin:K(c),end:K(d)};if(c=K(c),d=K(d),d="number"==typeof d?d:c,a(g).is(":visible")){var h=a(g).css("font-size").replace("px","")*d;if(g.scrollLeft=h>g.scrollWidth?h:0,i||0!=f.insertMode||c!=d||d++,g.setSelectionRange)g.selectionStart=c,g.selectionEnd=d;else if(window.getSelection){e=document.createRange(),e.setStart(g.firstChild,c<g._valueGet().length?c:g._valueGet().length),e.setEnd(g.firstChild,d<g._valueGet().length?d:g._valueGet().length),e.collapse(!0);var j=window.getSelection();j.removeAllRanges(),j.addRange(e)}else g.createTextRange&&(e=g.createTextRange(),e.collapse(!0),e.moveEnd("character",d),e.moveStart("character",c),e.select())}}function M(b){var c,d,e=v(),f=e.length,g=n(),h={},i=l().validPositions[g],j=void 0!=i?i.locator.slice():void 0;for(c=g+1;c<e.length;c++)d=q(c,j,c-1),j=d.locator.slice(),h[c]=a.extend(!0,{},d);var k=i&&void 0!=i.alternation?i.locator[i.alternation]:void 0;for(c=f-1;c>g&&(d=h[c].match,(d.optionality||d.optionalQuantifier||k&&k!=h[c].locator[i.alternation])&&e[c]==G(c,d));c--)f--;return b?{l:f,def:h[f]?h[f].match:void 0}:f}function N(a){for(var b=M(),c=a.length-1;c>b&&!A(c);c--);return a.splice(b,c+1-b),a}function O(b){if(a.isFunction(f.isComplete))return f.isComplete.call(ca,b,f);if("*"==f.repeat)return void 0;{var c=!1,d=M(!0),e=D(d.l);n()}if(void 0==d.def||d.def.newBlockMarker||d.def.optionality||d.def.optionalQuantifier){c=!0;for(var g=0;e>=g;g++){var h=A(g),i=r(g);if(h&&void 0==l().validPositions[g]&&i.optionality!==!0&&i.optionalQuantifier!==!0||!h&&b[g]!=G(g)){c=!1;break}}}return c}function P(a,b){return ea?a-b>1||a-b==1&&f.insertMode:b-a>1||b-a==1&&f.insertMode}function Q(b){var c=a._data(b).events,d=!1;a.each(c,function(b,c){a.each(c,function(a,b){if("inputmask"==b.namespace&&"setvalue"!=b.type){var c=b.handler;b.handler=function(a){if(!this.disabled&&(!this.readOnly||"keydown"==a.type&&a.ctrlKey&&67==a.keyCode)){switch(a.type){case"input":if(ga===!0||d===!0)return ga=!1,a.preventDefault();break;case"keydown":fa=!1,d=!1;break;case"keypress":if(fa===!0)return a.preventDefault();fa=!0;break;case"compositionstart":d=!0;break;case"compositionupdate":ga=!0;break;case"compositionend":d=!1}return c.apply(this,arguments)}a.preventDefault()}}})})}function R(b){function c(b){if(void 0==a.valHooks[b]||1!=a.valHooks[b].inputmaskpatch){var c=a.valHooks[b]&&a.valHooks[b].get?a.valHooks[b].get:function(a){return a.value},d=a.valHooks[b]&&a.valHooks[b].set?a.valHooks[b].set:function(a,b){return a.value=b,a};a.valHooks[b]={get:function(b){var d=a(b);if(d.data("_inputmask")){if(d.data("_inputmask").opts.autoUnmask)return d.inputmask("unmaskedvalue");var e=c(b),f=d.data("_inputmask"),g=f.maskset,h=g._buffer;return h=h?h.join(""):"",e!=h?e:""}return c(b)},set:function(b,c){var e,f=a(b),g=f.data("_inputmask");return e=d(b,c),g&&f.triggerHandler("setvalue.inputmask"),e},inputmaskpatch:!0}}}function d(){var b=a(this),c=a(this).data("_inputmask");return c?c.opts.autoUnmask?b.inputmask("unmaskedvalue"):g.call(this)!=u().join("")?g.call(this):"":g.call(this)}function e(b){var c=a(this).data("_inputmask");h.call(this,b),c&&a(this).triggerHandler("setvalue.inputmask")}function f(b){a(b).bind("mouseenter.inputmask",function(){var b=a(this),c=this,d=c._valueGet();""!=d&&d!=v().join("")&&b.triggerHandler("setvalue.inputmask")});
//!! the bound handlers are executed in the order they where bound
var c=a._data(b).events,d=c.mouseover;if(d){for(var e=d[d.length-1],f=d.length-1;f>0;f--)d[f]=d[f-1];d[0]=e}}var g,h;if(!b._valueGet){var i;Object.getOwnPropertyDescriptor&&void 0==b.value?(g=function(){return this.textContent},h=function(a){this.textContent=a},Object.defineProperty(b,"value",{get:d,set:e})):((i=Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(b,"value"))&&i.configurable,document.__lookupGetter__&&b.__lookupGetter__("value")?(g=b.__lookupGetter__("value"),h=b.__lookupSetter__("value"),b.__defineGetter__("value",d),b.__defineSetter__("value",e)):(g=function(){return b.value},h=function(a){b.value=a},c(b.type),f(b))),b._valueGet=function(a){return ea&&a!==!0?g.call(this).split("").reverse().join(""):g.call(this)},b._valueSet=function(a){h.call(this,ea?a.split("").reverse().join(""):a)}}}function S(b,c,d,e){function g(){if(f.keepStatic){m(!0);var c,d=[],e=a.extend(!0,{},l().validPositions);for(c=n();c>=0;c--){var g=l().validPositions[c];if(g){if(void 0!=g.alternation&&g.locator[g.alternation]==q(c).locator[g.alternation])break;null!=g.match.fn&&d.push(g.input),delete l().validPositions[c]}}if(c>0)for(;d.length>0;){l().p=C(n());var h=a.Event("keypress");h.which=d.pop().charCodeAt(0),U.call(b,h,!0,!1,!1,l().p)}else l().validPositions=a.extend(!0,{},e)}}if((f.numericInput||ea)&&(c==a.inputmask.keyCode.BACKSPACE?c=a.inputmask.keyCode.DELETE:c==a.inputmask.keyCode.DELETE&&(c=a.inputmask.keyCode.BACKSPACE),ea)){var h=d.end;d.end=d.begin,d.begin=h}if(c==a.inputmask.keyCode.BACKSPACE&&(d.end-d.begin<1||0==f.insertMode)?d.begin=D(d.begin):c==a.inputmask.keyCode.DELETE&&d.begin==d.end&&(d.end=A(d.end)?d.end+1:C(d.end)+1),p(d.begin,d.end,!1,e),e!==!0){g();var i=n(d.begin);i<d.begin?(-1==i&&m(),l().p=C(i)):l().p=d.begin}}function T(c){var d=this,e=a(d),g=c.keyCode,i=L(d);g==a.inputmask.keyCode.BACKSPACE||g==a.inputmask.keyCode.DELETE||h&&127==g||c.ctrlKey&&88==g&&!b("cut")?(c.preventDefault(),88==g&&(_=v().join("")),S(d,g,i),F(d,v(),l().p,c,_!=v().join("")),d._valueGet()==u().join("")?e.trigger("cleared"):O(v())===!0&&e.trigger("complete"),f.showTooltip&&e.prop("title",l().mask)):g==a.inputmask.keyCode.END||g==a.inputmask.keyCode.PAGE_DOWN?setTimeout(function(){var a=C(n());f.insertMode||a!=B()||c.shiftKey||a--,L(d,c.shiftKey?i.begin:a,a)},0):g==a.inputmask.keyCode.HOME&&!c.shiftKey||g==a.inputmask.keyCode.PAGE_UP?L(d,0,c.shiftKey?i.begin:0):(f.undoOnEscape&&g==a.inputmask.keyCode.ESCAPE||90==g&&c.ctrlKey)&&c.altKey!==!0?(H(d,!0,!1,_.split("")),e.click()):g!=a.inputmask.keyCode.INSERT||c.shiftKey||c.ctrlKey?0!=f.insertMode||c.shiftKey||(g==a.inputmask.keyCode.RIGHT?setTimeout(function(){var a=L(d);L(d,a.begin)},0):g==a.inputmask.keyCode.LEFT&&setTimeout(function(){var a=L(d);L(d,ea?a.begin+1:a.begin-1)},0)):(f.insertMode=!f.insertMode,L(d,f.insertMode||i.begin!=B()?i.begin:i.begin-1)),f.onKeyDown.call(this,c,v(),L(d).begin,f),ha=-1!=a.inArray(g,f.ignorables)}function U(b,c,d,e,g){var h=this,i=a(h),j=b.which||b.charCode||b.keyCode;if(!(c===!0||b.ctrlKey&&b.altKey)&&(b.ctrlKey||b.metaKey||ha))return!0;if(j){46==j&&0==b.shiftKey&&","==f.radixPoint&&(j=44);var k,n=c?{begin:g,end:g}:L(h),p=String.fromCharCode(j),q=P(n.begin,n.end);q&&(l().undoPositions=a.extend(!0,{},l().validPositions),S(h,a.inputmask.keyCode.DELETE,n,!0),n.begin=l().p,f.insertMode||(f.insertMode=!f.insertMode,o(n.begin,e),f.insertMode=!f.insertMode),q=!f.multi),l().writeOutBuffer=!0;var r=ea&&!q?n.end:n.begin,s=z(r,p,e);if(s!==!1){if(s!==!0&&(r=void 0!=s.pos?s.pos:r,p=void 0!=s.c?s.c:p),m(!0),void 0!=s.caret)k=s.caret;else{var u=l().validPositions;k=!f.keepStatic&&(void 0!=u[r+1]&&t(r+1,u[r].locator.slice(),r).length>1||void 0!=u[r].alternation)?r+1:C(r)}l().p=k}if(d!==!1){var x=this;if(setTimeout(function(){f.onKeyValidation.call(x,s,f)},0),l().writeOutBuffer&&s!==!1){var y=v();F(h,y,c?void 0:f.numericInput?D(k):k,b,c!==!0),c!==!0&&setTimeout(function(){O(y)===!0&&i.trigger("complete")},0)}else q&&(l().buffer=void 0,l().validPositions=l().undoPositions)}else q&&(l().buffer=void 0,l().validPositions=l().undoPositions);if(f.showTooltip&&i.prop("title",l().mask),c&&a.isFunction(f.onBeforeWrite)){var A=f.onBeforeWrite.call(this,b,v(),k,f);if(A&&A.refreshFromBuffer){var B=A.refreshFromBuffer;w(B===!0?B:B.start,B.end,A.buffer),m(!0),A.caret&&(l().p=A.caret)}}b.preventDefault()}}function V(b){var c=this,d=a(c),e=c._valueGet(!0),g=L(c);if("propertychange"==b.type&&c._valueGet().length<=B())return!0;if("paste"==b.type){var h=e.substr(0,g.begin),i=e.substr(g.end,e.length);h==u().slice(0,g.begin).join("")&&(h=""),i==u().slice(g.end).join("")&&(i=""),window.clipboardData&&window.clipboardData.getData?e=h+window.clipboardData.getData("Text")+i:b.originalEvent&&b.originalEvent.clipboardData&&b.originalEvent.clipboardData.getData&&(e=h+b.originalEvent.clipboardData.getData("text/plain")+i)}var j=e;if(a.isFunction(f.onBeforePaste)){if(j=f.onBeforePaste.call(c,e,f),j===!1)return b.preventDefault(),!1;j||(j=e)}return H(c,!0,!1,ea?j.split("").reverse():j.split("")),d.click(),O(v())===!0&&d.trigger("complete"),!1}function W(b){var c=this;H(c,!0,!1),O(v())===!0&&a(c).trigger("complete"),b.preventDefault()}function X(a){var b=this;_=v().join(""),(""==ba||0!=a.originalEvent.data.indexOf(ba))&&(aa=L(b))}function Y(b){var c=this,d=aa||L(c);0==b.originalEvent.data.indexOf(ba)&&(m(),d={begin:0,end:0});var e=b.originalEvent.data;L(c,d.begin,d.end);for(var g=0;g<e.length;g++){var h=a.Event("keypress");h.which=e.charCodeAt(g),fa=!1,ha=!1,U.call(c,h)}setTimeout(function(){var a=l().p;F(c,v(),f.numericInput?D(a):a)},0),ba=b.originalEvent.data}function Z(){}function $(b){if(ca=a(b),ca.is(":input")&&c(ca.attr("type"))||b.isContentEditable||ca.is("div")){if(ca.data("_inputmask",{maskset:e,opts:f,isRTL:!1}),f.showTooltip&&ca.prop("title",l().mask),("rtl"==b.dir||f.rightAlign)&&ca.css("text-align","right"),"rtl"==b.dir||f.numericInput){b.dir="ltr",ca.removeAttr("dir");var d=ca.data("_inputmask");d.isRTL=!0,ca.data("_inputmask",d),ea=!0}ca.unbind(".inputmask"),(ca.is(":input")||b.isContentEditable)&&(ca.closest("form").bind("submit",function(){_!=v().join("")&&ca.change(),ca[0]._valueGet&&ca[0]._valueGet()==u().join("")&&ca[0]._valueSet(""),f.removeMaskOnSubmit&&ca.inputmask("remove")}).bind("reset",function(){setTimeout(function(){ca.triggerHandler("setvalue.inputmask")},0)}),ca.bind("mouseenter.inputmask",function(){var b=a(this),c=this;!b.is(":focus")&&f.showMaskOnHover&&c._valueGet()!=v().join("")&&F(c,v())}).bind("blur.inputmask",function(b){var c=a(this),d=this;if(c.data("_inputmask")){var e=d._valueGet(),g=v().slice();ia=!0,_!=g.join("")&&setTimeout(function(){c.change(),_=g.join("")},0),""!=e&&(f.clearMaskOnLostFocus&&(e==u().join("")?g=[]:N(g)),O(g)===!1&&(c.trigger("incomplete"),f.clearIncomplete&&(m(),g=f.clearMaskOnLostFocus?[]:u().slice())),F(d,g,void 0,b))}}).bind("focus.inputmask",function(){var b=(a(this),this),c=b._valueGet();f.showMaskOnFocus&&(!f.showMaskOnHover||f.showMaskOnHover&&""==c)&&b._valueGet()!=v().join("")&&F(b,v(),C(n())),_=v().join("")}).bind("mouseleave.inputmask",function(){var b=a(this),c=this;if(f.clearMaskOnLostFocus){var d=v().slice(),e=c._valueGet();b.is(":focus")||e==b.attr("placeholder")||""==e||(e==u().join("")?d=[]:N(d),F(c,d))}}).bind("click.inputmask",function(){var b=a(this),c=this;if(b.is(":focus")){var d=L(c);if(d.begin==d.end)if(f.radixFocus&&""!=f.radixPoint&&-1!=a.inArray(f.radixPoint,v())&&(ia||v().join("")==u().join("")))L(c,a.inArray(f.radixPoint,v())),ia=!1;else{var e=ea?K(d.begin):d.begin,g=C(n(e));g>e?L(c,A(e)?e:C(e)):L(c,g)}}}).bind("dblclick.inputmask",function(){var a=this;setTimeout(function(){L(a,0,C(n()))},0)}).bind(k+".inputmask dragdrop.inputmask drop.inputmask",V).bind("cut.inputmask",function(b){ga=!0;var c=this,d=a(c),e=L(c);S(c,a.inputmask.keyCode.DELETE,e),F(c,v(),l().p,b,_!=v().join("")),c._valueGet()==u().join("")&&d.trigger("cleared"),f.showTooltip&&d.prop("title",l().mask)}).bind("complete.inputmask",f.oncomplete).bind("incomplete.inputmask",f.onincomplete).bind("cleared.inputmask",f.oncleared),ca.bind("keydown.inputmask",T).bind("keypress.inputmask",U),j||ca.bind("compositionstart.inputmask",X).bind("compositionupdate.inputmask",Y).bind("compositionend.inputmask",Z),"paste"===k&&ca.bind("input.inputmask",W)),ca.bind("setvalue.inputmask",function(){var b=this,c=b._valueGet();b._valueSet(a.isFunction(f.onBeforeMask)?f.onBeforeMask.call(b,c,f)||c:c),H(b,!0,!1),_=v().join(""),(f.clearMaskOnLostFocus||f.clearIncomplete)&&b._valueGet()==u().join("")&&b._valueSet("")}),R(b);var g=a.isFunction(f.onBeforeMask)?f.onBeforeMask.call(b,b._valueGet(),f)||b._valueGet():b._valueGet();H(b,!0,!1,g.split(""));var h=v().slice();_=h.join("");var i;try{i=document.activeElement}catch(o){}O(h)===!1&&f.clearIncomplete&&m(),f.clearMaskOnLostFocus&&(h.join("")==u().join("")?h=[]:N(h)),F(b,h),i===b&&L(b,C(n())),Q(b)}}var _,aa,ba,ca,da,ea=!1,fa=!1,ga=!1,ha=!1,ia=!0;if(void 0!=d)switch(d.action){case"isComplete":return ca=a(d.el),e=ca.data("_inputmask").maskset,f=ca.data("_inputmask").opts,O(d.buffer);case"unmaskedvalue":return ca=d.$input,e=ca.data("_inputmask").maskset,f=ca.data("_inputmask").opts,ea=d.$input.data("_inputmask").isRTL,J(d.$input);case"mask":_=v().join(""),$(d.el);break;case"format":ca=a({}),ca.data("_inputmask",{maskset:e,opts:f,isRTL:f.numericInput}),f.numericInput&&(ea=!0);var ja=(a.isFunction(f.onBeforeMask)?f.onBeforeMask.call(ca,d.value,f)||d.value:d.value).split("");return H(ca,!1,!1,ea?ja.reverse():ja),a.isFunction(f.onBeforeWrite)&&f.onBeforeWrite.call(this,void 0,v(),0,f),d.metadata?{value:ea?v().slice().reverse().join(""):v().join(""),metadata:ca.inputmask("getmetadata")}:ea?v().slice().reverse().join(""):v().join("");case"isValid":ca=a({}),ca.data("_inputmask",{maskset:e,opts:f,isRTL:f.numericInput}),f.numericInput&&(ea=!0);var ja=d.value.split("");H(ca,!1,!0,ea?ja.reverse():ja);for(var ka=v(),la=M(),ma=ka.length-1;ma>la&&!A(ma);ma--);return ka.splice(la,ma+1-la),O(ka)&&d.value==ka.join("");case"getemptymask":return ca=a(d.el),e=ca.data("_inputmask").maskset,f=ca.data("_inputmask").opts,u();case"remove":var na=d.el;ca=a(na),e=ca.data("_inputmask").maskset,f=ca.data("_inputmask").opts,na._valueSet(J(ca)),ca.unbind(".inputmask"),ca.removeData("_inputmask");var oa;Object.getOwnPropertyDescriptor&&(oa=Object.getOwnPropertyDescriptor(na,"value")),oa&&oa.get?na._valueGet&&Object.defineProperty(na,"value",{get:na._valueGet,set:na._valueSet}):document.__lookupGetter__&&na.__lookupGetter__("value")&&na._valueGet&&(na.__defineGetter__("value",na._valueGet),na.__defineSetter__("value",na._valueSet));try{delete na._valueGet,delete na._valueSet}catch(pa){na._valueGet=void 0,na._valueSet=void 0}break;case"getmetadata":if(ca=a(d.el),e=ca.data("_inputmask").maskset,f=ca.data("_inputmask").opts,a.isArray(e.metadata)){for(var qa,ra=n(),sa=ra;sa>=0;sa--)if(l().validPositions[sa]&&void 0!=l().validPositions[sa].alternation){qa=l().validPositions[sa].alternation;break}return void 0!=qa?e.metadata[l().validPositions[ra].locator[qa]]:e.metadata[0]}return e.metadata}}if(void 0===a.fn.inputmask){var g=navigator.userAgent,h=null!==g.match(new RegExp("iphone","i")),i=(null!==g.match(new RegExp("android.*safari.*","i")),null!==g.match(new RegExp("android.*chrome.*","i"))),j=null!==g.match(new RegExp("android.*firefox.*","i")),k=(/Kindle/i.test(g)||/Silk/i.test(g)||/KFTT/i.test(g)||/KFOT/i.test(g)||/KFJWA/i.test(g)||/KFJWI/i.test(g)||/KFSOWI/i.test(g)||/KFTHWA/i.test(g)||/KFTHWI/i.test(g)||/KFAPWA/i.test(g)||/KFAPWI/i.test(g),b("paste")?"paste":b("input")?"input":"propertychange");a.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:a.noop,onincomplete:a.noop,oncleared:a.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},alias:null,onKeyDown:a.noop,onBeforeMask:void 0,onBeforePaste:void 0,onBeforeWrite:void 0,onUnMask:void 0,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:a.noop,skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",radixFocus:!1,nojumps:!1,nojumpsThreshold:0,keepStatic:void 0,definitions:{9:{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1}},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],isComplete:void 0,canClearPosition:a.noop,postValidation:void 0},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},masksCache:{},escapeRegex:function(a){var b=["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"];return a.replace(new RegExp("(\\"+b.join("|\\")+")","gim"),"\\$1")},format:function(b,c,g){var h=a.extend(!0,{},a.inputmask.defaults,c);return d(h.alias,c,h),f({action:"format",value:b,metadata:g},e(h,c&&void 0!==c.definitions),h)},isValid:function(b,c){var g=a.extend(!0,{},a.inputmask.defaults,c);return d(g.alias,c,g),f({action:"isValid",value:b},e(g,c&&void 0!==c.definitions),g)}},a.fn.inputmask=function(b,c){function g(b,c,e){var f=a(b);f.data("inputmask-alias")&&d(f.data("inputmask-alias"),a.extend(!0,{},c),c);for(var g in c){var h=f.data("inputmask-"+g.toLowerCase());void 0!=h&&("mask"==g&&0==h.indexOf("[")?(c[g]=h.replace(/[\s[\]]/g,"").split("','"),c[g][0]=c[g][0].replace("'",""),c[g][c[g].length-1]=c[g][c[g].length-1].replace("'","")):c[g]="boolean"==typeof h?h:h.toString(),e&&(e[g]=c[g]))}return c}var h,i=a.extend(!0,{},a.inputmask.defaults,c);if("string"==typeof b)switch(b){case"mask":return d(i.alias,c,i),this.each(function(){return g(this,i),h=e(i,c&&void 0!==c.definitions),void 0==h?this:void f({action:"mask",el:this},h,i)});case"unmaskedvalue":var j=a(this);return j.data("_inputmask")?f({action:"unmaskedvalue",$input:j}):j.val();case"remove":return this.each(function(){var b=a(this);b.data("_inputmask")&&f({action:"remove",el:this})});case"getemptymask":return this.data("_inputmask")?f({action:"getemptymask",el:this}):"";case"hasMaskedValue":return this.data("_inputmask")?!this.data("_inputmask").opts.autoUnmask:!1;case"isComplete":return this.data("_inputmask")?f({action:"isComplete",buffer:this[0]._valueGet().split(""),el:this}):!0;case"getmetadata":return this.data("_inputmask")?f({action:"getmetadata",el:this}):void 0;default:return d(i.alias,c,i),d(b,c,i)||(i.mask=b),this.each(function(){return g(this,i),h=e(i,c&&void 0!==c.definitions),void 0==h?this:void f({action:"mask",el:this},h,i)})}else{if("object"==typeof b)return i=a.extend(!0,{},a.inputmask.defaults,b),d(i.alias,b,i),this.each(function(){return g(this,i),h=e(i,b&&void 0!==b.definitions),void 0==h?this:void f({action:"mask",el:this},h,i)});if(void 0==b)return this.each(function(){var b=a(this).attr("data-inputmask");if(b&&""!=b)try{b=b.replace(new RegExp("'","g"),'"');var e=a.parseJSON("{"+b+"}");a.extend(!0,e,c),i=a.extend(!0,{},a.inputmask.defaults,e),i=g(this,i),d(i.alias,e,i),i.alias=void 0,a(this).inputmask("mask",i)}catch(f){}if(a(this).attr("data-inputmask-mask")||a(this).attr("data-inputmask-alias")){i=a.extend(!0,{},a.inputmask.defaults,{});var h={};i=g(this,i,h),d(i.alias,h,i),i.alias=void 0,a(this).inputmask("mask",i)}})}}}return a.fn.inputmask}(jQuery),function(a){return a.extend(a.inputmask.defaults.definitions,{h:{validator:"[01][0-9]|2[0-3]",cardinality:2,prevalidator:[{validator:"[0-2]",cardinality:1}]},s:{validator:"[0-5][0-9]",cardinality:2,prevalidator:[{validator:"[0-5]",cardinality:1}]},d:{validator:"0[1-9]|[12][0-9]|3[01]",cardinality:2,prevalidator:[{validator:"[0-3]",cardinality:1}]},m:{validator:"0[1-9]|1[012]",cardinality:2,prevalidator:[{validator:"[01]",cardinality:1}]},y:{validator:"(19|20)\\d{2}",cardinality:4,prevalidator:[{validator:"[12]",cardinality:1},{validator:"(19|20)",cardinality:2},{validator:"(19|20)\\d",cardinality:3}]}}),a.extend(a.inputmask.defaults.aliases,{"dd/mm/yyyy":{mask:"1/2/y",placeholder:"dd/mm/yyyy",regex:{val1pre:new RegExp("[0-3]"),val1:new RegExp("0[1-9]|[12][0-9]|3[01]"),val2pre:function(b){var c=a.inputmask.escapeRegex.call(this,b);return new RegExp("((0[1-9]|[12][0-9]|3[01])"+c+"[01])")},val2:function(b){var c=a.inputmask.escapeRegex.call(this,b);return new RegExp("((0[1-9]|[12][0-9])"+c+"(0[1-9]|1[012]))|(30"+c+"(0[13-9]|1[012]))|(31"+c+"(0[13578]|1[02]))")}},leapday:"29/02/",separator:"/",yearrange:{minyear:1900,maxyear:2099},isInYearRange:function(a,b,c){if(isNaN(a))return!1;var d=parseInt(a.concat(b.toString().slice(a.length))),e=parseInt(a.concat(c.toString().slice(a.length)));return(isNaN(d)?!1:d>=b&&c>=d)||(isNaN(e)?!1:e>=b&&c>=e)},determinebaseyear:function(a,b,c){var d=(new Date).getFullYear();if(a>d)return a;if(d>b){for(var e=b.toString().slice(0,2),f=b.toString().slice(2,4);e+c>b;)e--;var g=e+f;return a>g?a:g}return d},onKeyDown:function(b){var c=a(this);if(b.ctrlKey&&b.keyCode==a.inputmask.keyCode.RIGHT){var d=new Date;c.val(d.getDate().toString()+(d.getMonth()+1).toString()+d.getFullYear().toString()),c.triggerHandler("setvalue.inputmask")}},getFrontValue:function(a,b,c){for(var d=0,e=0,f=0;f<a.length&&"2"!=a.charAt(f);f++){var g=c.definitions[a.charAt(f)];g?(d+=e,e=g.cardinality):e++}return b.join("").substr(d,e)},definitions:{1:{validator:function(a,b,c,d,e){var f=e.regex.val1.test(a);return d||f||a.charAt(1)!=e.separator&&-1=="-./".indexOf(a.charAt(1))||!(f=e.regex.val1.test("0"+a.charAt(0)))?f:(b.buffer[c-1]="0",{refreshFromBuffer:{start:c-1,end:c},pos:c,c:a.charAt(0)})},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=a;isNaN(b.buffer[c+1])||(f+=b.buffer[c+1]);var g=1==f.length?e.regex.val1pre.test(f):e.regex.val1.test(f);if(!d&&!g){if(g=e.regex.val1.test(a+"0"))return b.buffer[c]=a,b.buffer[++c]="0",{pos:c,c:"0"};if(g=e.regex.val1.test("0"+a))return b.buffer[c]="0",c++,{pos:c}}return g},cardinality:1}]},2:{validator:function(a,b,c,d,e){var f=e.getFrontValue(b.mask,b.buffer,e);-1!=f.indexOf(e.placeholder[0])&&(f="01"+e.separator);var g=e.regex.val2(e.separator).test(f+a);if(!d&&!g&&(a.charAt(1)==e.separator||-1!="-./".indexOf(a.charAt(1)))&&(g=e.regex.val2(e.separator).test(f+"0"+a.charAt(0))))return b.buffer[c-1]="0",{refreshFromBuffer:{start:c-1,end:c},pos:c,c:a.charAt(0)};if(e.mask.indexOf("2")==e.mask.length-1&&g){var h=b.buffer.join("").substr(4,4)+a;if(h!=e.leapday)return!0;var i=parseInt(b.buffer.join("").substr(0,4),10);return i%4===0?i%100===0?i%400===0?!0:!1:!0:!1}return g},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){isNaN(b.buffer[c+1])||(a+=b.buffer[c+1]);var f=e.getFrontValue(b.mask,b.buffer,e);-1!=f.indexOf(e.placeholder[0])&&(f="01"+e.separator);var g=1==a.length?e.regex.val2pre(e.separator).test(f+a):e.regex.val2(e.separator).test(f+a);return d||g||!(g=e.regex.val2(e.separator).test(f+"0"+a))?g:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},y:{validator:function(a,b,c,d,e){if(e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear)){var f=b.buffer.join("").substr(0,6);if(f!=e.leapday)return!0;var g=parseInt(a,10);return g%4===0?g%100===0?g%400===0?!0:!1:!0:!1}return!1},cardinality:4,prevalidator:[{validator:function(a,b,c,d,e){var f=e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear);if(!d&&!f){var g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a+"0").toString().slice(0,1);if(f=e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(0),{pos:c};if(g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a+"0").toString().slice(0,2),f=e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(0),b.buffer[c++]=g.charAt(1),{pos:c}}return f},cardinality:1},{validator:function(a,b,c,d,e){var f=e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear);if(!d&&!f){var g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a).toString().slice(0,2);if(f=e.isInYearRange(a[0]+g[1]+a[1],e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(1),{pos:c};if(g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a).toString().slice(0,2),e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear)){var h=b.buffer.join("").substr(0,6);if(h!=e.leapday)f=!0;else{var i=parseInt(a,10);f=i%4===0?i%100===0?i%400===0?!0:!1:!0:!1}}else f=!1;if(f)return b.buffer[c-1]=g.charAt(0),b.buffer[c++]=g.charAt(1),b.buffer[c++]=a.charAt(0),{refreshFromBuffer:{start:c-3,end:c},pos:c}}return f},cardinality:2},{validator:function(a,b,c,d,e){return e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear)},cardinality:3}]}},insertMode:!1,autoUnmask:!1},"mm/dd/yyyy":{placeholder:"mm/dd/yyyy",alias:"dd/mm/yyyy",regex:{val2pre:function(b){var c=a.inputmask.escapeRegex.call(this,b);return new RegExp("((0[13-9]|1[012])"+c+"[0-3])|(02"+c+"[0-2])")},val2:function(b){var c=a.inputmask.escapeRegex.call(this,b);return new RegExp("((0[1-9]|1[012])"+c+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+c+"30)|((0[13578]|1[02])"+c+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(b){var c=a(this);if(b.ctrlKey&&b.keyCode==a.inputmask.keyCode.RIGHT){var d=new Date;c.val((d.getMonth()+1).toString()+d.getDate().toString()+d.getFullYear().toString()),c.triggerHandler("setvalue.inputmask")}}},"yyyy/mm/dd":{mask:"y/1/2",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",leapday:"/02/29",onKeyDown:function(b){var c=a(this);if(b.ctrlKey&&b.keyCode==a.inputmask.keyCode.RIGHT){var d=new Date;c.val(d.getFullYear().toString()+(d.getMonth()+1).toString()+d.getDate().toString()),c.triggerHandler("setvalue.inputmask")}}},"dd.mm.yyyy":{mask:"1.2.y",placeholder:"dd.mm.yyyy",leapday:"29.02.",separator:".",alias:"dd/mm/yyyy"},"dd-mm-yyyy":{mask:"1-2-y",placeholder:"dd-mm-yyyy",leapday:"29-02-",separator:"-",alias:"dd/mm/yyyy"},"mm.dd.yyyy":{mask:"1.2.y",placeholder:"mm.dd.yyyy",leapday:"02.29.",separator:".",alias:"mm/dd/yyyy"},"mm-dd-yyyy":{mask:"1-2-y",placeholder:"mm-dd-yyyy",leapday:"02-29-",separator:"-",alias:"mm/dd/yyyy"},"yyyy.mm.dd":{mask:"y.1.2",placeholder:"yyyy.mm.dd",leapday:".02.29",separator:".",alias:"yyyy/mm/dd"},"yyyy-mm-dd":{mask:"y-1-2",placeholder:"yyyy-mm-dd",leapday:"-02-29",separator:"-",alias:"yyyy/mm/dd"},datetime:{mask:"1/2/y h:s",placeholder:"dd/mm/yyyy hh:mm",alias:"dd/mm/yyyy",regex:{hrspre:new RegExp("[012]"),hrs24:new RegExp("2[0-4]|1[3-9]"),hrs:new RegExp("[01][0-9]|2[0-4]"),ampm:new RegExp("^[a|p|A|P][m|M]"),mspre:new RegExp("[0-5]"),ms:new RegExp("[0-5][0-9]")},timeseparator:":",hourFormat:"24",definitions:{h:{validator:function(a,b,c,d,e){if("24"==e.hourFormat&&24==parseInt(a,10))return b.buffer[c-1]="0",b.buffer[c]="0",{refreshFromBuffer:{start:c-1,end:c},c:"0"};var f=e.regex.hrs.test(a);if(!d&&!f&&(a.charAt(1)==e.timeseparator||-1!="-.:".indexOf(a.charAt(1)))&&(f=e.regex.hrs.test("0"+a.charAt(0))))return b.buffer[c-1]="0",b.buffer[c]=a.charAt(0),c++,{refreshFromBuffer:{start:c-2,end:c},pos:c,c:e.timeseparator};if(f&&"24"!==e.hourFormat&&e.regex.hrs24.test(a)){var g=parseInt(a,10);return 24==g?(b.buffer[c+5]="a",b.buffer[c+6]="m"):(b.buffer[c+5]="p",b.buffer[c+6]="m"),g-=12,10>g?(b.buffer[c]=g.toString(),b.buffer[c-1]="0"):(b.buffer[c]=g.toString().charAt(1),b.buffer[c-1]=g.toString().charAt(0)),{refreshFromBuffer:{start:c-1,end:c+6},c:b.buffer[c]}}return f},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=e.regex.hrspre.test(a);return d||f||!(f=e.regex.hrs.test("0"+a))?f:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},s:{validator:"[0-5][0-9]",cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=e.regex.mspre.test(a);return d||f||!(f=e.regex.ms.test("0"+a))?f:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},t:{validator:function(a,b,c,d,e){return e.regex.ampm.test(a+"m")},casing:"lower",cardinality:1}},insertMode:!1,autoUnmask:!1},datetime12:{mask:"1/2/y h:s t\\m",placeholder:"dd/mm/yyyy hh:mm xm",alias:"datetime",hourFormat:"12"},"hh:mm t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"h:s t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"hh:mm:ss":{mask:"h:s:s",placeholder:"hh:mm:ss",alias:"datetime",autoUnmask:!1},"hh:mm":{mask:"h:s",placeholder:"hh:mm",alias:"datetime",autoUnmask:!1},date:{alias:"dd/mm/yyyy"},"mm/yyyy":{mask:"1/y",placeholder:"mm/yyyy",leapday:"donotuse",separator:"/",alias:"mm/dd/yyyy"}}),a.fn.inputmask}(jQuery),function(a){return a.extend(a.inputmask.defaults.definitions,{A:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,casing:"upper"},"#":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,casing:"upper"}}),a.extend(a.inputmask.defaults.aliases,{url:{mask:"ir",placeholder:"",separator:"",defaultPrefix:"http://",regex:{urlpre1:new RegExp("[fh]"),urlpre2:new RegExp("(ft|ht)"),urlpre3:new RegExp("(ftp|htt)"),urlpre4:new RegExp("(ftp:|http|ftps)"),urlpre5:new RegExp("(ftp:/|ftps:|http:|https)"),urlpre6:new RegExp("(ftp://|ftps:/|http:/|https:)"),urlpre7:new RegExp("(ftp://|ftps://|http://|https:/)"),urlpre8:new RegExp("(ftp://|ftps://|http://|https://)")},definitions:{i:{validator:function(){return!0},cardinality:8,prevalidator:function(){for(var a=[],b=8,c=0;b>c;c++)a[c]=function(){var a=c;return{validator:function(b,c,d,e,f){if(f.regex["urlpre"+(a+1)]){var g,h=b;a+1-b.length>0&&(h=c.buffer.join("").substring(0,a+1-b.length)+""+h);var i=f.regex["urlpre"+(a+1)].test(h);if(!e&&!i){for(d-=a,g=0;g<f.defaultPrefix.length;g++)c.buffer[d]=f.defaultPrefix[g],d++;for(g=0;g<h.length-1;g++)c.buffer[d]=h[g],d++;return{pos:d}}return i}return!1},cardinality:a}}();return a}()},r:{validator:".",cardinality:50}},insertMode:!1,autoUnmask:!1},ip:{mask:"i[i[i]].i[i[i]].i[i[i]].i[i[i]]",definitions:{i:{validator:function(a,b,c){return c-1>-1&&"."!=b.buffer[c-1]?(a=b.buffer[c-1]+a,a=c-2>-1&&"."!=b.buffer[c-2]?b.buffer[c-2]+a:"0"+a):a="00"+a,new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(a)},cardinality:1}}},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,64}]@*{1,64}[.*{2,64}][.*{2,6}][.*{1,2}]",greedy:!1,onBeforePaste:function(a){return a=a.toLowerCase(),a.replace("mailto:","")},definitions:{"*":{validator:"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",cardinality:1,casing:"lower"}}}}),a.fn.inputmask}(jQuery),function(a){return a.extend(a.inputmask.defaults.aliases,{numeric:{mask:function(a){function b(b){for(var c="",d=0;d<b.length;d++)c+=a.definitions[b[d]]?"\\"+b[d]:b[d];return c}if(0!==a.repeat&&isNaN(a.integerDigits)&&(a.integerDigits=a.repeat),a.repeat=0,a.groupSeparator==a.radixPoint&&(a.groupSeparator="."==a.radixPoint?",":","==a.radixPoint?".":"")," "===a.groupSeparator&&(a.skipOptionalPartCharacter=void 0),a.autoGroup=a.autoGroup&&""!=a.groupSeparator,a.autoGroup&&("string"==typeof a.groupSize&&isFinite(a.groupSize)&&(a.groupSize=parseInt(a.groupSize)),isFinite(a.integerDigits))){var c=Math.floor(a.integerDigits/a.groupSize),d=a.integerDigits%a.groupSize;a.integerDigits=parseInt(a.integerDigits)+(0==d?c-1:c)}a.placeholder.length>1&&(a.placeholder=a.placeholder.charAt(0)),a.radixFocus=a.radixFocus&&"0"==a.placeholder,a.definitions[";"]=a.definitions["~"];var e=b(a.prefix);return e+="[+]",e+="~{1,"+a.integerDigits+"}",void 0!=a.digits&&(isNaN(a.digits)||parseInt(a.digits)>0)&&(e+=a.digitsOptional?"["+(a.decimalProtect?":":a.radixPoint)+";{"+a.digits+"}]":(a.decimalProtect?":":a.radixPoint)+";{"+a.digits+"}"),""!=a.negationSymbol.back&&(e+="[-]"),e+=b(a.suffix),a.greedy=!1,e},placeholder:"",greedy:!1,digits:"*",digitsOptional:!0,groupSeparator:"",radixPoint:".",radixFocus:!0,groupSize:3,autoGroup:!1,allowPlus:!0,allowMinus:!0,negationSymbol:{front:"-",back:""},integerDigits:"+",prefix:"",suffix:"",rightAlign:!0,decimalProtect:!0,min:void 0,max:void 0,postFormat:function(b,c,d,e){var f=!1;b.length>=e.suffix.length&&b.join("").indexOf(e.suffix)==b.length-e.suffix.length&&(b.length=b.length-e.suffix.length,f=!0),c=c>=b.length?b.length-1:c<e.prefix.length?e.prefix.length:c;var g=!1,h=b[c];if(""==e.groupSeparator||-1!=a.inArray(e.radixPoint,b)&&c>=a.inArray(e.radixPoint,b)||new RegExp("["+a.inputmask.escapeRegex(e.negationSymbol.front)+"+]").test(h)){if(f)for(var i=0,j=e.suffix.length;j>i;i++)b.push(e.suffix.charAt(i));return{pos:c}}var k=b.slice();h==e.groupSeparator&&(k.splice(c--,1),h=k[c]),d?k[c]="?":k.splice(c,0,"?");var l=k.join(""),m=l;if(l.length>0&&e.autoGroup||d&&-1!=l.indexOf(e.groupSeparator)){var n=a.inputmask.escapeRegex(e.groupSeparator);g=0==l.indexOf(e.groupSeparator),l=l.replace(new RegExp(n,"g"),"");var o=l.split(e.radixPoint);if(l=""==e.radixPoint?l:o[0],l!=e.prefix+"?0"&&l.length>=e.groupSize+e.prefix.length)for(var p=new RegExp("([-+]?[\\d?]+)([\\d?]{"+e.groupSize+"})");p.test(l);)l=l.replace(p,"$1"+e.groupSeparator+"$2"),l=l.replace(e.groupSeparator+e.groupSeparator,e.groupSeparator);""!=e.radixPoint&&o.length>1&&(l+=e.radixPoint+o[1])}g=m!=l,b.length=l.length;for(var i=0,j=l.length;j>i;i++)b[i]=l.charAt(i);var q=a.inArray("?",b);if(d?b[q]=h:b.splice(q,1),!g&&f)for(var i=0,j=e.suffix.length;j>i;i++)b.push(e.suffix.charAt(i));return{pos:q,refreshFromBuffer:g,buffer:b}},onBeforeWrite:function(b,c,d,e){if(b&&"blur"==b.type){var f=c.join(""),g=f.replace(e.prefix,"");if(g=g.replace(e.suffix,""),g=g.replace(new RegExp(a.inputmask.escapeRegex(e.groupSeparator),"g"),""),","===e.radixPoint&&(g=g.replace(a.inputmask.escapeRegex(e.radixPoint),".")),isFinite(g)&&isFinite(e.min)&&parseFloat(g)<parseFloat(e.min))return a.extend(!0,{refreshFromBuffer:!0,buffer:(e.prefix+e.min).split("")},e.postFormat((e.prefix+e.min).split(""),0,!0,e));var h=""!=e.radixPoint?c.join("").split(e.radixPoint):[c.join("")],i=h[0].match(e.regex.integerPart(e)),j=2==h.length?h[1].match(e.regex.integerNPart(e)):void 0;!i||i[0]!=e.negationSymbol.front+"0"&&i[0]!=e.negationSymbol.front&&"+"!=i[0]||void 0!=j&&!j[0].match(/^0+$/)||c.splice(i.index,1);var k=a.inArray(e.radixPoint,c);if(-1!=k&&isFinite(e.digits)&&!e.digitsOptional){for(var l=1;l<=e.digits;l++)(void 0==c[k+l]||c[k+l]==e.placeholder.charAt(0))&&(c[k+l]="0");return{refreshFromBuffer:!0,buffer:c}}}if(e.autoGroup){var m=e.postFormat(c,d-1,!0,e);return m.caret=d<=e.prefix.length?m.pos:m.pos+1,m}},regex:{integerPart:function(b){return new RegExp("["+a.inputmask.escapeRegex(b.negationSymbol.front)+"+]?\\d+")},integerNPart:function(b){return new RegExp("[\\d"+a.inputmask.escapeRegex(b.groupSeparator)+"]+")}},signHandler:function(a,b,c,d,e){if(!d&&e.allowMinus&&"-"===a||e.allowPlus&&"+"===a){var f=b.buffer.join("").match(e.regex.integerPart(e));if(f&&f[0].length>0)return b.buffer[f.index]==("-"===a?"+":e.negationSymbol.front)?"-"==a?""!=e.negationSymbol.back?{pos:f.index,c:e.negationSymbol.front,remove:f.index,caret:c,insert:{pos:b.buffer.length-e.suffix.length-1,c:e.negationSymbol.back}}:{pos:f.index,c:e.negationSymbol.front,remove:f.index,caret:c}:""!=e.negationSymbol.back?{pos:f.index,c:"+",remove:[f.index,b.buffer.length-e.suffix.length-1],caret:c}:{pos:f.index,c:"+",remove:f.index,caret:c}:b.buffer[f.index]==("-"===a?e.negationSymbol.front:"+")?"-"==a&&""!=e.negationSymbol.back?{remove:[f.index,b.buffer.length-e.suffix.length-1],caret:c-1}:{remove:f.index,caret:c-1}:"-"==a?""!=e.negationSymbol.back?{pos:f.index,c:e.negationSymbol.front,caret:c+1,insert:{pos:b.buffer.length-e.suffix.length,c:e.negationSymbol.back}}:{pos:f.index,c:e.negationSymbol.front,caret:c+1}:{pos:f.index,c:a,caret:c+1}}return!1},radixHandler:function(b,c,d,e,f){if(!e&&b===f.radixPoint&&f.digits>0){var g=a.inArray(f.radixPoint,c.buffer),h=c.buffer.join("").match(f.regex.integerPart(f));

if(-1!=g&&c.validPositions[g])return c.validPositions[g-1]?{caret:g+1}:{pos:h.index,c:h[0],caret:g+1};if(!h||"0"==h[0]&&h.index+1!=d)return c.buffer[h?h.index:d]="0",{pos:(h?h.index:d)+1}}return!1},leadingZeroHandler:function(b,c,d,e,f){var g=c.buffer.join("").match(f.regex.integerNPart(f)),h=a.inArray(f.radixPoint,c.buffer);if(g&&!e&&(-1==h||h>=d))if(0==g[0].indexOf("0")){d<f.prefix.length&&(d=g.index);var i=a.inArray(f.radixPoint,c._buffer),j=c._buffer&&c.buffer.slice(h).join("")==c._buffer.slice(i).join("")||0==parseInt(c.buffer.slice(h+1).join("")),k=c._buffer&&c.buffer.slice(g.index,h).join("")==c._buffer.slice(f.prefix.length,i).join("")||"0"==c.buffer.slice(g.index,h).join("");if(-1==h||j&&k)return c.buffer.splice(g.index,1),d=d>g.index?d-1:g.index,{pos:d,remove:g.index};if(g.index+1==d||"0"==b)return c.buffer.splice(g.index,1),d=g.index,{pos:d,remove:g.index}}else if("0"===b&&d<=g.index&&g[0]!=f.groupSeparator)return!1;return!0},postValidation:function(b,c){var d=!0,e=b.join(""),f=e.replace(c.prefix,"");return f=f.replace(c.suffix,""),f=f.replace(new RegExp(a.inputmask.escapeRegex(c.groupSeparator),"g"),""),","===c.radixPoint&&(f=f.replace(a.inputmask.escapeRegex(c.radixPoint),".")),f=f.replace(new RegExp("^"+a.inputmask.escapeRegex(c.negationSymbol.front)),"-"),f=f.replace(new RegExp(a.inputmask.escapeRegex(c.negationSymbol.back)+"$"),""),isFinite(f)&&isFinite(c.max)&&(d=parseFloat(f)<=parseFloat(c.max)),d},definitions:{"~":{validator:function(b,c,d,e,f){var g=f.signHandler(b,c,d,e,f);if(!g&&(g=f.radixHandler(b,c,d,e,f),!g&&(g=e?new RegExp("[0-9"+a.inputmask.escapeRegex(f.groupSeparator)+"]").test(b):new RegExp("[0-9]").test(b),g===!0&&(g=f.leadingZeroHandler(b,c,d,e,f),g===!0)))){var h=a.inArray(f.radixPoint,c.buffer);g=f.digitsOptional===!1&&d>h&&!e?{pos:d,remove:d}:{pos:d}}return g},cardinality:1,prevalidator:null},"+":{validator:function(a,b,c,d,e){var f=e.signHandler(a,b,c,d,e);return!f&&(d&&e.allowMinus&&a===e.negationSymbol.front||e.allowMinus&&"-"==a||e.allowPlus&&"+"==a)&&(f="-"==a?""!=e.negationSymbol.back?{pos:c,c:"-"===a?e.negationSymbol.front:"+",caret:c+1,insert:{pos:b.buffer.length,c:e.negationSymbol.back}}:{pos:c,c:"-"===a?e.negationSymbol.front:"+",caret:c+1}:!0),f},cardinality:1,prevalidator:null,placeholder:""},"-":{validator:function(a,b,c,d,e){var f=e.signHandler(a,b,c,d,e);return!f&&d&&e.allowMinus&&a===e.negationSymbol.back&&(f=!0),f},cardinality:1,prevalidator:null,placeholder:""},":":{validator:function(b,c,d,e,f){var g=f.signHandler(b,c,d,e,f);if(!g){var h="["+a.inputmask.escapeRegex(f.radixPoint)+"]";g=new RegExp(h).test(b),g&&c.validPositions[d]&&c.validPositions[d].match.placeholder==f.radixPoint&&(g={caret:d+1})}return g},cardinality:1,prevalidator:null,placeholder:function(a){return a.radixPoint}}},insertMode:!0,autoUnmask:!1,unmaskAsNumber:!1,onUnMask:function(b,c,d){var e=b.replace(d.prefix,"");return e=e.replace(d.suffix,""),e=e.replace(new RegExp(a.inputmask.escapeRegex(d.groupSeparator),"g"),""),d.unmaskAsNumber?(e=e.replace(a.inputmask.escapeRegex.call(this,d.radixPoint),"."),Number(e)):e},isComplete:function(b,c){var d=b.join(""),e=b.slice();if(c.postFormat(e,0,!0,c),e.join("")!=d)return!1;var f=d.replace(c.prefix,"");return f=f.replace(c.suffix,""),f=f.replace(new RegExp(a.inputmask.escapeRegex(c.groupSeparator),"g"),""),","===c.radixPoint&&(f=f.replace(a.inputmask.escapeRegex(c.radixPoint),".")),isFinite(f)},onBeforeMask:function(b,c){if(""!=c.radixPoint&&isFinite(b))b=b.toString().replace(".",c.radixPoint);else{var d=b.match(/,/g),e=b.match(/\./g);e&&d?e.length>d.length?(b=b.replace(/\./g,""),b=b.replace(",",c.radixPoint)):d.length>e.length?(b=b.replace(/,/g,""),b=b.replace(".",c.radixPoint)):b=b.indexOf(".")<b.indexOf(",")?b.replace(/\./g,""):b=b.replace(/,/g,""):b=b.replace(new RegExp(a.inputmask.escapeRegex(c.groupSeparator),"g"),"")}return 0==c.digits&&(-1!=b.indexOf(".")?b=b.substring(0,b.indexOf(".")):-1!=b.indexOf(",")&&(b=b.substring(0,b.indexOf(",")))),b},canClearPosition:function(b,c,d,e,f){var g=b.validPositions[c].input,h=g!=f.radixPoint&&isFinite(g)||c==d||g==f.groupSeparator||g==f.negationSymbol.front||g==f.negationSymbol.back;if(h&&isFinite(g)){var i;if(!e&&b.buffer){i=b.buffer.join("").substr(0,c).match(f.regex.integerNPart(f));var j=c+1,k=null==i||0==parseInt(i[0].replace(new RegExp(a.inputmask.escapeRegex(f.groupSeparator),"g"),""));if(k)for(;b.validPositions[j]&&(b.validPositions[j].input==f.groupSeparator||"0"==b.validPositions[j].input);)delete b.validPositions[j],j++}var l=[];for(var m in b.validPositions)l.push(b.validPositions[m].input);i=l.join("").match(f.regex.integerNPart(f));var n=a.inArray(f.radixPoint,b.buffer);if(i&&(-1==n||n>=c))if(0==i[0].indexOf("0"))h=i.index!=c||-1==n;else{var o=parseInt(i[0].replace(new RegExp(a.inputmask.escapeRegex(f.groupSeparator),"g"),""));-1!=n&&10>o&&"0"==f.placeholder.charAt(0)&&(b.validPositions[c].input="0",b.p=f.prefix.length+1,h=!1)}}return h}},currency:{prefix:"$ ",groupSeparator:",",alias:"numeric",placeholder:"0",autoGroup:!0,digits:2,digitsOptional:!1,clearMaskOnLostFocus:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:"0",radixPoint:""}}),a.fn.inputmask}(jQuery),function(a){return a.extend(a.inputmask.defaults.aliases,{phone:{url:"phone-codes/phone-codes.js",maskInit:"+pp(pp)pppppppp",countrycode:"",mask:function(b){b.definitions={p:{validator:function(){return!1},cardinality:1},"#":{validator:"[0-9]",cardinality:1}};var c=[];return a.ajax({url:b.url,async:!1,dataType:"json",success:function(a){c=a},error:function(a,c,d){alert(d+" - "+b.url)}}),c=c.sort(function(a,b){return(a.mask||a)<(b.mask||b)?-1:1}),""!=b.countrycode&&(b.maskInit="+"+b.countrycode+b.maskInit.substring(3)),c.splice(0,0,b.maskInit),c},nojumps:!0,nojumpsThreshold:1,onBeforeMask:function(a,b){var c=a.replace(/^0/g,"");return(c.indexOf(b.countrycode)>1||-1==c.indexOf(b.countrycode))&&(c="+"+b.countrycode+c),c}},phonebe:{alias:"phone",url:"phone-codes/phone-be.js",countrycode:"32",nojumpsThreshold:4}}),a.fn.inputmask}(jQuery),function(a){return a.extend(a.inputmask.defaults.aliases,{Regex:{mask:"r",greedy:!1,repeat:"*",regex:null,regexTokens:null,tokenizer:/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,quantifierFilter:/[0-9]+[^,]/,isComplete:function(a,b){return new RegExp(b.regex).test(a.join(""))},definitions:{r:{validator:function(b,c,d,e,f){function g(a,b){this.matches=[],this.isGroup=a||!1,this.isQuantifier=b||!1,this.quantifier={min:1,max:1},this.repeaterPart=void 0}function h(){var a,b,c=new g,d=[];for(f.regexTokens=[];a=f.tokenizer.exec(f.regex);)switch(b=a[0],b.charAt(0)){case"(":d.push(new g(!0));break;case")":var e=d.pop();d.length>0?d[d.length-1].matches.push(e):c.matches.push(e);break;case"{":case"+":case"*":var h=new g(!1,!0);b=b.replace(/[{}]/g,"");var i=b.split(","),j=isNaN(i[0])?i[0]:parseInt(i[0]),k=1==i.length?j:isNaN(i[1])?i[1]:parseInt(i[1]);if(h.quantifier={min:j,max:k},d.length>0){var l=d[d.length-1].matches;if(a=l.pop(),!a.isGroup){var e=new g(!0);e.matches.push(a),a=e}l.push(a),l.push(h)}else{if(a=c.matches.pop(),!a.isGroup){var e=new g(!0);e.matches.push(a),a=e}c.matches.push(a),c.matches.push(h)}break;default:d.length>0?d[d.length-1].matches.push(b):c.matches.push(b)}c.matches.length>0&&f.regexTokens.push(c)}function i(b,c){var d=!1;c&&(k+="(",m++);for(var e=0;e<b.matches.length;e++){var f=b.matches[e];if(1==f.isGroup)d=i(f,!0);else if(1==f.isQuantifier){var g=a.inArray(f,b.matches),h=b.matches[g-1],j=k;if(isNaN(f.quantifier.max)){for(;f.repeaterPart&&f.repeaterPart!=k&&f.repeaterPart.length>k.length&&!(d=i(h,!0)););d=d||i(h,!0),d&&(f.repeaterPart=k),k=j+f.quantifier.max}else{for(var l=0,o=f.quantifier.max-1;o>l&&!(d=i(h,!0));l++);k=j+"{"+f.quantifier.min+","+f.quantifier.max+"}"}}else if(void 0!=f.matches)for(var p=0;p<f.length&&!(d=i(f[p],c));p++);else{var q;if("["==f.charAt(0)){q=k,q+=f;for(var r=0;m>r;r++)q+=")";var s=new RegExp("^("+q+")$");d=s.test(n)}else for(var t=0,u=f.length;u>t;t++)if("\\"!=f.charAt(t)){q=k,q+=f.substr(0,t+1),q=q.replace(/\|$/,"");for(var r=0;m>r;r++)q+=")";var s=new RegExp("^("+q+")$");if(d=s.test(n))break}k+=f}if(d)break}return c&&(k+=")",m--),d}null==f.regexTokens&&h();var j=c.buffer.slice(),k="",l=!1,m=0;j.splice(d,0,b);for(var n=j.join(""),o=0;o<f.regexTokens.length;o++){var g=f.regexTokens[o];if(l=i(g,g.isGroup))break}return l},cardinality:1}}}}),a.fn.inputmask}(jQuery);
window.already_left_header = false;
window.already_right_header = false;

var SLIDENATURA = (function(){
    var dragUpTimer = null;
    var updateImagemPosition = function(pos) {
        var sizeContainer = $('#top-banners').width();
        var diffContainer = parseInt(sizeContainer) - parseInt(pos);
        var imgBefore = $('.before').find('img');
        var imgAfter =  $('.after').find('img');
        var newPosBefore = 0;
        var newPosAfter = 0;

        if (diffContainer > 0 && diffContainer < 180) {
            newPosBefore = 181 - parseInt(diffContainer);
            $(imgBefore).css({
                left : newPosBefore
            });

            $(imgAfter).css({
                left : newPosBefore
            });
            if(!already_right_header){
                already_right_header = true;
                already_left_header = false;
                ga('send', 'event', 'ekos', 'banner-footer', 'fruto');
            }
        }

        if (diffContainer > 840 && diffContainer < 981) {
            newPosAfter =  840 - parseInt(diffContainer);
            $(imgBefore).css({
                left : newPosAfter
            });

            $(imgAfter).css({
                left : newPosAfter
            });
            if(!already_left_header){
                already_left_header = true;
                already_right_header = false;
                ga('send', 'event', 'ekos', 'banner-header', 'pote');
            }
        }

        if (diffContainer < 50 || diffContainer > 850) {
            $('.container-intro-slide').hide();
        } else {
            $('.container-intro-slide').show();

            $('#top-banners-container').css({
                backgroundRepeat : 'no-repeat',
                backgroundPosition : 'center 0px'
            });
        }

        if (diffContainer < 100) {
            $('.text-before').fadeIn();
            $('.container-intro-slide').hide();
        } else {
            $('.text-before').fadeOut();
        }

        if (diffContainer > 850) {
            $('.text-after').fadeIn();
            $('.container-intro-slide').hide();
        } else {
            $('.text-after').fadeOut();
        }
    };

    var dragUp = function(pos) {
        if (dragUpTimer) {
            clearTimeout(dragUpTimer);
        }

        dragUpTimer = setTimeout(function() {
            if (pos <= 489) {
                console.log('SLIDENATURA :: pos :: left :: ' + pos);
                uniquevariable.unveil('100%', 0.2);
                setTimeout(function() {
                    updateImagemPosition(0);
                }, 20);
            } else if (pos > 489) {
                console.log('SLIDENATURA :: pos :: right :: ' + pos);
                uniquevariable.unveil('0%', 0.2);
                setTimeout(function() {
                    updateImagemPosition(978);
                }, 20);
            }
        }, 200);
    };

    return {
        updateImagePosition : function(position, image) {
            updateImagemPosition(position, image);
        },
        dragUp : function(position, dragbar, before) {
            dragUp(position);
        }
    }
}());
var ddbeforeandafter = (function($){

	var gallerydefaults = {
		dragUI: '<div class="drag"><div class="draghandle"></div></div>',
		revealduration: 0.1,
		initialreveal: ['50%', 1],
		initialrevealeasing: 'ease-in-out',
		hidedragbardelay: 1
	}

	var detecttouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0))

	function ddbeforeandafter(options){
      		var s = $.extend({}, gallerydefaults, options)
		s._imagesloaded = false
		s._draghidetimer = null
		var thisobj = this
      		var $container = $('#'+s.wrapperid)
      		var $before = $container.find('div.before:eq(0)')
		var $after = $container.find('div.after:eq(0)')
		$container.append(s.dragUI)
      		var $dragbar = $container.find('div.drag')
		var $draghandle = $dragbar.find('div.draghandle')
      		var dimensions = {containerw: $container.width(), dragbarw: $dragbar.width(), draghandlew: $draghandle.outerWidth()}
		s.defaultTimingFunction = $dragbar.css('transitionTimingFunction')
		var isdirectclick = false
		var mousemoveevtstr = 'mousemove.dragstart' + s.wrapperid + ' touchmove.dragstart' + s.wrapperid

		this.s = s
		this.$container = $container
		this.$before = $before
		this.$after = $after
		this.$dragbar = $dragbar
		this.$draghandle = $draghandle
		this.dimensions = dimensions

		this._init()

		$container.on('mousedown touchstart', function(e){
			isdirectclick = true
      			if (e.target.tagName != 'A')
      				e.preventDefault()
		})
	      	$container.on(detecttouch? 'touchstart' : 'click', function(e){
			if (s._imagesloaded && (isdirectclick || detecttouch)){
				var e = (e.type.indexOf('touch') != '-1')? e.originalEvent.changedTouches[0] : e
		      		var newx = e.pageX - $container.offset().left
		      		$dragbar.add($before).css({transitionTimingFunction: s.defaultTimingFunction, transitionDuration: s.revealduration+'s'})
		      		$dragbar.css({left: newx})
		      		$before.css({width: newx})


				SLIDENATURA.updateImagePosition(newx);

				if (e.target.tagName != 'A')
					e.preventDefault()
			}
			isdirectclick = false
	      	})
		$container.hover(
			function(){
				clearTimeout(s._draghidetimer)
				$dragbar.stop().animate({opacity:1})
			},
			function(){
				s._draghidetimer = setTimeout(function(){$dragbar.stop().animate({opacity:1})}, s.hidedragbardelay*1000)
			}
		)
	      	$dragbar.bind('click', function(e){
	      		e.stopPropagation()
	      	})
	      	$dragbar.bind('mousedown touchstart', function(e){
			if (!s._imagesloaded)
				return
	      		var e = (e.type.indexOf('touch') != -1)? e.originalEvent.changedTouches[0] : e
			dimensions = thisobj.dimensions // refresh dimensions var
	      		var initialx = parseInt($dragbar.css('left'))
			var containerleft = $container.offset().left
	      		$dragbar.add($before).css({transitionDuration: '0s'})
	      		$(document).bind(mousemoveevtstr, function(e){
	      			var e = (e.type.indexOf('touch') != '-1')? e.originalEvent.changedTouches[0] : e
	      			var dx=e.pageX-containerleft-initialx //distance to move horizontally
	      			var newx=(dx<0)? Math.max(0, initialx+dx) : Math.min(dimensions.containerw-dimensions.dragbarw, initialx+dx) //Set horizonal bonds. dx>0 indicates drag right versus 
	      			$dragbar.css({left: newx})
	      			$before.css({width: newx})



	      			//console.log('newx :: ' + newx);
	      			SLIDENATURA.dragUp(newx, $dragbar, $before);
					SLIDENATURA.updateImagePosition(newx);

	      			return false //cancel default drag action
	      		})
	      		return false //cancel default drag action
	      	})
	      	$(document).bind('mouseup touchend', function(e){
	      		var e = (e.type.indexOf('touch') != -1)? e.originalEvent.changedTouches[0] : e
	      		$(document).unbind(mousemoveevtstr)
	      	})

	  //     	$(window).bind('resize', function(e){
			// dimensions.containerw = $container.width()
			// thisobj._centerelement($dragbar, $draghandle)
			// $before.find('img:eq(0)').css({width: dimensions.containerw, height: 'auto'})
			// $after.find('img:eq(0)').css({width: dimensions.containerw, height: 'auto'})
			// thisobj.unveil(s.initialreveal[0], s.initialreveal[1], s.initialrevealeasing)
	  //     	})

	} // end main function

	ddbeforeandafter.prototype = {

		_centerelement: function($parent, $target, offsetx, offsety){
      			var dimensions = {parentw: $parent.width(), parenth: $parent.height(), targetw: $target.outerWidth(), targeth: $target.outerHeight()}
			$target.css({left: dimensions.parentw/2 - dimensions.targetw/2 + (offsetx || 0), top: dimensions.parenth/2 - dimensions.targeth/2 + (offsety || 0)})
		},

		_init: function(initoptions){
			var thisobj = this,
				s = this.s,
				$container = this.$container,
				$before = this.$before,
				$after = this.$after,
				$dragbar = this.$dragbar,
				$draghandle = this.$draghandle
			s._imagesloaded = false
			if (initoptions && initoptions.beforeafterhtml){
				$before.html(initoptions.beforeafterhtml[0])
				$after.html(initoptions.beforeafterhtml[1])
			}
			if (initoptions && initoptions.dimensions){
				$container.css({width: initoptions.dimensions[0], height: initoptions.dimensions[1]})
				this.dimensions = {containerw: $container.width(), dragbarw: $dragbar.width(), draghandlew: $draghandle.outerWidth()}
			}
			this._centerelement($dragbar, $draghandle)
			this.unveil(0, 0)
			clearTimeout(s._draghidetimer)
			$dragbar.css({opacity:0.3})
			var $beforeimage = this.$before.css({opacity:0.5}).find('img:eq(0)').css({width: this.dimensions.containerw, height: 'auto'})
			var $afterimage = this.$after.css({opacity:0}).find('img:eq(0)').css({width: this.dimensions.containerw, height: 'auto'})
			var imagesloadeddfd = [$.Deferred(), $.Deferred()]
			if ($beforeimage.prop('complete') === true)
				imagesloadeddfd[0].resolve()
			if ($afterimage.prop('complete') === true)
				imagesloadeddfd[1].resolve()
			$beforeimage.on('load error', function(){imagesloadeddfd[0].resolve()})
			$afterimage.on('load error', function(){imagesloadeddfd[1].resolve()})
			$.when(imagesloadeddfd[0], imagesloadeddfd[1]).done(function(){
				s._imagesloaded = true
      				$after.css({opacity:1})
      				$before.animate({opacity:1}, function(){
      					$dragbar.animate({opacity:1}, function(){
      						thisobj.unveil(s.initialreveal[0], s.initialreveal[1], s.initialrevealeasing)
      					})
      				})
			})
			
		},

		reload: function(beforeafterhtml, dimensions){
			var options = {beforeafterhtml: beforeafterhtml, dimensions: dimensions}
			this._init(options)
		},
		
		unveil: function(amt, dur, timingfunc){
			var s = this.s,
				$container = this.$container,
				$before = this.$before,
				$dragbar = this.$dragbar,
				dimensions = this.dimensions,
				amt = parseInt(amt)
			amt = (amt < 0)? 0 : (amt > 100)? 100 : amt
			var dur = ((typeof dur != 'undefined')? dur : s.revealduration) + 's'
			var timingfunction = timingfunc || s.defaultTimingFunction
			amt = 100 - amt
			var newx = (dimensions.containerw - dimensions.dragbarw) * amt/100
			$dragbar.add($before).css({transitionTimingFunction: timingfunction, transitionDuration: dur})
	      		$dragbar.css({left: newx})
	      		$before.css({width: newx})

		}

	}

	return ddbeforeandafter
}) (jQuery);

(function($) {

  var current = null;

  $.modal = function(el, options) {
    $.modal.close(); // Close any open modals.
    var remove, target;
    this.$body = $('body');
    this.options = $.extend({}, $.modal.defaults, options);
    this.options.doFade = !isNaN(parseInt(this.options.fadeDuration, 10));
    if (el.is('a')) {
      target = el.attr('href');
      //Select element by id from href
      if (/^#/.test(target)) {
        this.$elm = $(target);
        if (this.$elm.length !== 1) return null;
        this.open();
      //AJAX
      } else {
        this.$elm = $('<div>');
        this.$body.append(this.$elm);
        remove = function(event, modal) { modal.elm.remove(); };
        this.showSpinner();
        el.trigger($.modal.AJAX_SEND);
        $.get(target).done(function(html) {
          if (!current) return;
          el.trigger($.modal.AJAX_SUCCESS);
          current.$elm.empty().append(html).on($.modal.CLOSE, remove);
          current.hideSpinner();
          current.open();
          el.trigger($.modal.AJAX_COMPLETE);
        }).fail(function() {
          el.trigger($.modal.AJAX_FAIL);
          current.hideSpinner();
          el.trigger($.modal.AJAX_COMPLETE);
        });
      }
    } else {
      this.$elm = el;
      this.$body.append(this.$elm);
      this.open();
    }
  };

  $.modal.prototype = {
    constructor: $.modal,

    open: function() {
      var m = this;
      if(this.options.doFade) {
        this.block();
        setTimeout(function() {
          m.show();
        }, this.options.fadeDuration * this.options.fadeDelay);
      } else {
        this.block();
        this.show();
      }
      if (this.options.escapeClose) {
        $(document).on('keydown.modal', function(event) {
          if (event.which == 27) $.modal.close();
        });
      }
      if (this.options.clickClose) this.blocker.click($.modal.close);
    },

    close: function() {
      this.unblock();
      this.hide();
      $(document).off('keydown.modal');
    },

    block: function() {
      var initialOpacity = this.options.doFade ? 0 : this.options.opacity;
      this.$elm.trigger($.modal.BEFORE_BLOCK, [this._ctx()]);
      this.blocker = $('<div class="jquery-modal blocker"></div>').css({
        top: 0, right: 0, bottom: 0, left: 0,
        width: "100%", height: "100%",
        position: "fixed",
        zIndex: this.options.zIndex,
        background: this.options.overlay,
        opacity: initialOpacity
      });
      this.$body.append(this.blocker);
      if(this.options.doFade) {
        this.blocker.animate({opacity: this.options.opacity}, this.options.fadeDuration);
      }
      this.$elm.trigger($.modal.BLOCK, [this._ctx()]);
    },

    unblock: function() {
      if(this.options.doFade) {
        this.blocker.fadeOut(this.options.fadeDuration, function() {
          $(this).remove();
        });
      } else {
        this.blocker.remove();
      }
    },

    show: function() {
      this.$elm.trigger($.modal.BEFORE_OPEN, [this._ctx()]);
      if (this.options.showClose) {
        this.closeButton = $('<a href="#close-modal" rel="modal:close" class="close-modal ' + this.options.closeClass + '">' + this.options.closeText + '</a>');
        this.$elm.append(this.closeButton);
      }
      this.$elm.addClass(this.options.modalClass + ' current');
      this.center();
      if(this.options.doFade) {
        this.$elm.fadeIn(this.options.fadeDuration);
      } else {
        this.$elm.show();
      }
      this.$elm.trigger($.modal.OPEN, [this._ctx()]);
    },

    hide: function() {
      this.$elm.trigger($.modal.BEFORE_CLOSE, [this._ctx()]);
      if (this.closeButton) this.closeButton.remove();
      this.$elm.removeClass('current');

      if(this.options.doFade) {
        this.$elm.fadeOut(this.options.fadeDuration);
      } else {
        this.$elm.hide();
      }
      this.$elm.trigger($.modal.CLOSE, [this._ctx()]);
    },

    showSpinner: function() {
      if (!this.options.showSpinner) return;
      this.spinner = this.spinner || $('<div class="' + this.options.modalClass + '-spinner"></div>')
        .append(this.options.spinnerHtml);
      this.$body.append(this.spinner);
      this.spinner.show();
    },

    hideSpinner: function() {
      if (this.spinner) this.spinner.remove();
    },

    center: function() {
      this.$elm.css({
        position: 'fixed',
        top: "50%",
        left: "50%",
        marginTop: - (this.$elm.outerHeight() / 2),
        marginLeft: - (this.$elm.outerWidth() / 2),
        zIndex: this.options.zIndex + 1
      });
    },

    //Return context for custom events
    _ctx: function() {
      return { elm: this.$elm, blocker: this.blocker, options: this.options };
    }
  };

  //resize is alias for center for now
  $.modal.prototype.resize = $.modal.prototype.center;

  $.modal.close = function(event) {
    if (!current) return;
    if (event) event.preventDefault();
    current.close();
    var that = current.$elm;
    current = null;
    return that;
  };

  $.modal.resize = function() {
    if (!current) return;
    current.resize();
  };

  // Returns if there currently is an active modal
  $.modal.isActive = function () {
    return current ? true : false;
  }

  $.modal.defaults = {
    overlay: "#000",
    opacity: 0.75,
    zIndex: 10,
    escapeClose: true,
    clickClose: true,
    closeText: 'Close',
    closeClass: '',
    modalClass: "modal",
    spinnerHtml: null,
    showSpinner: true,
    showClose: true,
    fadeDuration: null,   // Number of milliseconds the fade animation takes.
    fadeDelay: 1.0        // Point during the overlay's fade-in that the modal begins to fade in (.5 = 50%, 1.5 = 150%, etc.)
  };

  // Event constants
  $.modal.BEFORE_BLOCK = 'modal:before-block';
  $.modal.BLOCK = 'modal:block';
  $.modal.BEFORE_OPEN = 'modal:before-open';
  $.modal.OPEN = 'modal:open';
  $.modal.BEFORE_CLOSE = 'modal:before-close';
  $.modal.CLOSE = 'modal:close';
  $.modal.AJAX_SEND = 'modal:ajax:send';
  $.modal.AJAX_SUCCESS = 'modal:ajax:success';
  $.modal.AJAX_FAIL = 'modal:ajax:fail';
  $.modal.AJAX_COMPLETE = 'modal:ajax:complete';

  $.fn.modal = function(options){
    if (this.length === 1) {
      current = new $.modal(this, options);
    }
    return this;
  };

  // Automatically bind links with rel="modal:close" to, well, close the modal.
  $(document).on('click.modal', 'a[rel="modal:close"]', $.modal.close);
  $(document).on('click.modal', 'a[rel="modal:open"]', function(event) {
    event.preventDefault();
    $(this).modal();
  });
})(jQuery);

var already_reander_row = false;
var NATURA = (function(){
	var debug = false;
	//Numeros de nodos da arvore
	var nNodes = 0;
	//Númerod e nodos mostrados
	var showedNodes = 0;
	//Variável responsável para controle de não 'empilhamento' de animação no bloco de comentarios da home
	var testimony_animation = false;

	var already_down = false;
	var already_up   = false;
	//Tratamento do console.log para browsers antigos e tratamento de debug
	var l = function l(msg){
		if(!debug) return false;
		if (typeof console === "undefined" || typeof console.log === "undefined") {
			console = {};
			console.log = function(msg) {
				alert(msg);
			};
		}else{
			console.log(msg);
		}
	};

	//Função responsavel pela inicialização dos plugins
	var initialize_plugins = function initialize_plugins(){
		uniquevariable = new ddbeforeandafter({
			wrapperid: 'top-banners',
			dragUI : '<div class="drag"><div class="sprite draghandle"></div></div>',
			hidedragbardelay : false
		});
		
		$('.bxslider').bxSlider({
			slideSelector: '.slide-item', 
			responsive   : false,
			auto         : true,
			autoHover    : true,
			preloadImages : 'all'
		});

		$.modal.defaults = {
			overlay: "#000",        	                              // Overlay color
			opacity: 0.7,          	                                  // Overlay opacity
			zIndex: 15,              	                              // Overlay z-index.
			escapeClose: true,      	                              // Allows the user to close the modal by pressing `ESC`
			clickClose: true,      	                                  // Allows the user to close the modal by clicking the overlay
			closeText: 'Close',                                       // Text content for the close <a> tag.
			closeClass: 'close-sucess-facebook spriteclose sprite',   // Add additional class(es) to the close <a> tag.
			showClose: true,                                          // Shows a (X) icon/link in the top-right corner
			modalClass: "modal",                                      // CSS class added to the element being displayed in the modal.
			spinnerHtml: null,                                        // HTML appended to the default spinner during AJAX requests.
			showSpinner: true,                                        // Enable/disable the default spinner during AJAX requests.
			fadeDuration: null,                                       // Number of milliseconds the fade transition takes (null means no transition)
			fadeDelay: 1.0                                            // Point during the overlay's fade-in that the modal begins to fade in (.5 = 50%, 1.5 = 150%, etc.)
		};
	};

	//Tratamento de possivel erro  de valor do offset no ipad
	//https://gist.github.com/mataspetrikas/431639
	var treat_offset_mobile = function treat_offset_mobile(){
		// as of 1.4.2 the mobile safari reports wrong values on offset()
		// http://dev.jquery.com/ticket/6446
		// remove once it's fixed
		if ( /webkit.*mobile/i.test(navigator.userAgent)) {
			(function($) {
				$.fn.offsetOld = $.fn.offset;
				$.fn.offset = function() {
				var result = this.offsetOld();
				result.top -= window.scrollY;
				result.left -= window.scrollX;
				return result;
				};
			})(jQuery);
		}
	};

	//Funcao genérica responsável por enviar dados via ajax
	//Retorna 0 em caso de falha, 1 em caso de sucesso
	//Seus argumentos sao u (url para qual será enviado), d(os dados), t (o tipo de dado), dt(tipo de dado a ser enviado) e callb(funcao a ser executada em caso de sucesso)
	var send_data = function send_data(u, d, t, dt, callb, er, al){
		if( typeof __BASE_URL__ === 'undefined'){
			l('Url base não está definida');
			return false;
		}
		var success = false;
		u = __BASE_URL__ + u;
		l('Url da API: ');
		l(u);
		l('Dado a ser enviado: ');
		l(d);
		$.ajax({
			url: u,
			type: t,
			dataType: dt,
			data: d
		})
		.done(function(data) {
			if( typeof callb !== 'undefined' ){
				callb(data);
			}
		})
		.fail(function(jqXHR, textStatus, errorThrown) {
			typeof er !== 'undefined' ? er() : l('Fail.');
			l(textStatus);
			// l(jqXHR.status);
		})
		.always(function() {
			typeof er !== 'undefined' ? er() : l('Complete.');
		});

      //  url = 'http://salve.mainserver.com.br/natura/ucuuba/backend/api/getNodes/';
       // url = 'http://natura.ucuubaservice.agenciasalve.com.br:81/backend/api/getNodes/';
       //  url = 'backend/api/getNodes/';
/*
        $.ajax({
            url : url,
            type : t,
            dataType: 'jsonp',
            data:d,
            complete : function(response){
                console.log(response);
                if( typeof callb !== 'undefined' ){
                    callb(JSON.parse(response['responseText']));
                }
            }
        });

        var xhr;
        var dataList;
        xhr = new XMLHttpRequest();

        xhr.open('GET', url + '?callback=func_callbk',  true);
        xhr.send();

        func_callback = function(data){
            alert(data);
        }

        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                console.log(dataList);
            }
        };


        (function(window, undefined) {
            var JSONP = function(url, method, callback){
                url = url || '';
                method = method || '';
                callback = callback || function(){};

                if(typeof method == 'function'){
                    callback = method;
                    method = 'callback';
                }

                var generatedFunction = 'jsonp'+Math.round(Math.random()*1000001);

                window[generatedFunction] = function(json){
                    callback(json);
                    delete window[generatedFunction];
                };

                if(url.indexOf('?') === -1){ url = url+'?'; }
                else{ url = url+'&'; }

                var jsonpScript = document.createElement('script');
                jsonpScript.setAttribute("src", url+method+'='+generatedFunction);
                document.getElementsByTagName("head")[0].appendChild(jsonpScript);
            }
            window.JSONP = JSONP;
        })(window);

        JSONP(url,function(json){ console.log(json) });
*/
    };

	//Função responsável por englobar todas os binds do tipo click
	var click_binds = function click_binds(){

		//prototipo da função que faz scroll até o Bloco Manteiga da Amazônia na home
		$('#btn-saibamais-manteiga-ucuuba').on('click', function(event) {
			event.preventDefault();
			var scroll_target = $('#amazon-butter').offset().top;
			$('html, body').animate({
				scrollTop: scroll_target},
				500, 'linear' , function() {
			});
		});
	};

	// Habilita mostrar mais comentarios e desabilita automaticamente quando ja mostrou todos
	var bind_btn_more = function bind_btn_more(){
		$('.testimony-btn.last').off().on('click', function(){
			if(nNodes == showedNodes){
				unbind_btn_more();
				
			}
			if(testimony_animation){
				l('Animation already running');
				return false
			}
			testimony_animation = true
			showedNodes += 1;
			bind_btn_less();
			$('.testimony-btn.first').removeClass('disable');
			if(showedNodes == nNodes){
				unbind_btn_more();
				
			}
			
			track.sendEvent('ekos', 'rede', 'desce');
			$('html, body').animate({
				scrollTop: "+=369"
			},700, function(){
				testimony_animation = false;
			});
			var line = showedNodes;
			$('.row-' + line ).fadeIn(700);
			l('more =' + line);
		});
	};

	var unbind_btn_more = function unbind_btn_more(){
		$('.testimony-btn.last').off('click');
		$('.testimony-btn.last').addClass('disable');
	};

	// Habilita mostrar esconder comentarios e desabilita automaticamente quando ja escondeu todos
	var bind_btn_less = function bind_btn_less(){

		$('.testimony-btn.first').off().on('click', function(){
			if(showedNodes <= 2){
				unbind_btn_less();
			}
			if(testimony_animation){
				l('Animation already running');
				return false
			}
			testimony_animation = true;
			showedNodes -= 1;
			bind_btn_more();
			$('.testimony-btn.last').removeClass('disable');

			if(showedNodes == 2){
				unbind_btn_less();
			}
			
			track.sendEvent('ekos', 'rede', 'sobe');
			$('html, body').animate({
				scrollTop: "-=369"
			},700, function(){
				testimony_animation = false;
			});
			var line = showedNodes+1;
			$('.row-' + line ).fadeOut(700);
			l('less ' + line);
		});
	};

	var unbind_btn_less = function unbind_btn_less(){
		$('.testimony-btn.first').off('click');
		$('.testimony-btn.first').addClass('disable');
	};

	// Função que recebe um array (modelo da arvore de comentarios), e renderiza ele. Se o numero de filhos da arvore for maior que 1, ativa os binds de mostrar e esconder mais elementos
	var treat_nodes = function treat_nodes(data){
		if(already_reander_row){
			return false;
		}
		already_reander_row = true;
		l('treat_nodes');
		l(data);
		nNodes = data.length;
		showedNodes = 1;
		$('#load-testimony').fadeOut(800, function() {
			$('.testimony-container-btn').removeClass('none');
			render_friends_tree(data);
			if(nNodes >= 2){
				$('.row-1').show();
				if(nNodes > 2){
					$('.testimony-btn.last').removeClass('disable');
					bind_btn_more();
					// $('.testimony-btn.last').removeClass('it-is-disabled');
				}else if(nNodes == 2){
					$('.testimony-btn.last').removeClass('it-is-disabled');
					// $('.testimony-container-btn').css("visibility", "hidden");
				}
				
			}
		});
	};

	var get_testimony_block_nodes = function get_testimony_block_nodes(){
		return $('.testimony').length;
	};

	//Retorna o maior comprimento da arvore de comentarios (contando pai e filho)
	var getMax = function getMax(data){
		var i;
		var max = -1;
		for ( i = 0; i < 5; i++ ) {
			if(data[i].length > max){
				max = data[i].length;
			}
		}
		nNodes = max;
		return max;
	};

	var create_testimony_image = function create_testimony_image(data, row, line){
		var classe = '';
		if(line == 5){
			classe = 'no-margin-block';
		}
		var name        = "<div class='testimony-text-header'><h3>" + data['name'] + "</h3></div>";
		var image       = "<div class='testimony-image'>"+
							"<span class='sprite spritenoimage'></span>"+
							"<div class='image-small-one'>" + "<img src='" + data['url_image'] + "' width='71' height='72' />" + "</div>"+
						"</div>";
		var text        = "<div class='testimony-text-p'><p>" + data['comment'] + "</p></div>";
		var block = "<div class='testimony testimony-without-image row-" + row + " " + classe + "'>"+
						image +
						"<div class='testimony-text'>" + 
							name + text +
						"</div>"+
					"</div>";

		$('.testimony-holder').append(block);
	};


	var create_testimony_noimage = function create_testimony_noimage(data, row, line){
		var classe = '';
		if(line == 5){
			classe = 'no-margin-block';
		}
		var name        = "<div class='testimony-text-header'><h3>" + data['name'] + "</h3></div>";
		var text        = "<div class='testimony-text-p'><p>" + data['comment'] + "</p></div>";
		var block = "<div class='testimony testimony-without-image row-" + row + " " + classe + "'>"+
						"<div class='testimony-image'>"+
							"<span class='sprite spritenoimage'></span>"+
						"</div>"+
						"<div class='testimony-text'>" + 
							name + text +
						"</div>"+
					"</div>";

		$('.testimony-holder').append(block);
	};

	var create_testimony_nocomentary = function create_testimony_nocomentary(data, row, line){
		var classe = '';
		if(line == 5){
			classe = 'no-margin-block';
		}
		var block = "<div class='testimony testimony-without-image row-" + row + " " + classe + "'>"+
						"<div class='testimony-image'>"+
							"<span class='sprite spritenocomentarie'></span>"+
						"</div>"+
						"<div class='testimony-text'>"+
							"<div class='testimony-text-header'><h3></h3></div>"+
							"<div class='testimony-text-p'>"+
								"<p class='soon'>EM BREVE</p>"+
							"</div>"+
						"</div>"+
					"</div>";

		$('.testimony-holder').append(block);
	};

	var create_testimony_static_image = function create_testimony_static_image(data, row, line){
		var src_img;
		var classe;
		l('row = ' + row);
		l('line' + line);

		switch(line) {
		    case 1:
		        src_img = 'mulher-'+row+'-'+line+'.jpg';
		        classe = '';
		        break;
		    case 2:
		        src_img = 'mulher-'+row+'-'+line+'.jpg';
		        classe = '';
		        break;
		    case 3:
		        src_img = 'mulher-'+row+'-'+line+'.jpg';
		        classe = '';
		        break;
		    case 4:
		        src_img = 'mulher-'+row+'-'+line+'.jpg';
		        classe = '';
		        break;
		    case 5:
		        src_img = 'mulher-'+row+'-'+line+'.jpg';
		        classe = 'no-margin-block';
		        break;
		    default:
		        src_img = 'mulher-'+row+'-'+line+'.jpg';
		        classe = '';
		}

		var image_block = "<div class='image'><img src='" + __ASSETS_URL__ + "/img/" + src_img + "' title='"+data['name']+"' width='110' height='110'></div>";
		var name        = "<div class='testimony-text-header'><h3>" + data['name'] + "</h3></div>";
		var text        = "<div class='testimony-text-p'><p>" + data['comment'] + "</p></div>";
		var block       = "<div class='testimony row-" + row + " " + classe + "'>" +
						"<div class='testimony-image'>" +
							"<div class='mask-image'></div>" +
								image_block +
						"</div>" +
						"<div class='testimony-text'>" +
							name + text +
						"</div>"+
					"</div>";


		$('.testimony-holder').append(block);
	};


	var create_testimony_static_image_child = function create_testimony_static_image_child(data, row, line){
		var classe = '';
		var src_img;
		if(line == 5){
			classe = 'no-margin-block';
		}

		src_img = __ASSETS_URL__ + '/img/mulher-'+row+'-'+line+'.jpg';
	
		var name        = "<div class='testimony-text-header'><h3>" + data['name'] + "</h3></div>";
		var image       = "<div class='testimony-image'>"+
							"<span class='sprite spritenoimage'></span>"+
							"<div class='image-small-one'>" + "<img src='" + src_img + "' width='71' height='72' />" + "</div>"+
						"</div>";
		var text        = "<div class='testimony-text-p'><p>" + data['comment'] + "</p></div>";
		var block = "<div class='testimony testimony-without-image row-" + row + " " + classe + "'>"+
						image +
						"<div class='testimony-text'>" + 
							name + text +
						"</div>"+
					"</div>";

		$('.testimony-holder').append(block);
	};

	//Função que decide que tipo de bloco de comentario vai ser criado
	var decide_block = function decide_block(data, row, line){
		l('decide_block');
		l(data);
		if(row <= 2){
			if( row == 1 ){
				create_testimony_static_image(data, row, line);
			}else if(row == 2 && (line != 3 && line != 5)){
				create_testimony_static_image_child(data, row, line);
			}else{
				create_testimony_noimage(data, row, line);
			}
		}else if( typeof data === 'undefined' ){
			create_testimony_nocomentary(data, row, line);
		}else if( data['url_image'] == '' ){
			create_testimony_noimage(data, row, line);
		}else{
			create_testimony_image(data, row, line);
		}
	};

	//Função que cria o conjunto de blocos de comentarios
	var render_friends_tree = function render_friends_tree(data){
		var i;
		var j;
		var max = getMax(data);
		l('max');
		l(max);
		l('render_friends_tree');

		for(j = 0; j < max; j++){
			for(i = 0; i < 5; i++){
				decide_block(data[i][j], j+1, i+1);
				if((get_testimony_block_nodes() % 5) == 0){
					$('.testimony-holder').append("<br clear='all' />");
				}
			}
		}
	};

	// Função de callback para quando houver erro validação de um elemento de um formulário.
	var treat = function treat(el, t){
		el.addClass('error');
	};

	// Função responsável por englobar todos os binds de todos os tipos
	var binds = function binds(){
		click_binds();
	};

	// Função que coleta um conjunto de comentarios da arvore de comentarios na inicialização do site
	var getNodes = function getNodes(){

		send_data('getNodes/', {}, 'GET', 'jsonp', treat_nodes);
	};

	var animation_btn_saiba_mais = function animation_btn_saiba_mais(){
		$( window ).scroll(function() {
			l($('body').scrollTop());
			if( ($('html').scrollTop() >= 10)  || ($('body').scrollTop() >= 10) ){
				$('#container-saibamais-ucuuba').animate({
					opacity: 1,
					top: 0
				}
				, 1200, function(){
				});
				$( window ).unbind('scroll');
			}
		});
	};

	var get_one = function get_one(){
		l('get sendo executado');
		$.get(__BASE_URL__ + 'getNodes/', function(data) {
			l('hjhjhj');
			l(data);
		});
	};

	var bind_header = function bind_header(){
		$('.draghandle, #top-banners .before, #top-banners .after').on('touchstart click mousedown', function(){
			$('.draghandle').addClass('hide-text');
		});
	};

	return{
		init : function(){
			treat_offset_mobile();
			initialize_plugins();
			binds();
			animation_btn_saiba_mais();
			getNodes();
			bind_header();
		},
		setDebug : function(b){
			if (typeof b === 'boolean') {
				debug = b;
			}
		},
		getDegug : function(){
			return debug;
		},
		getAnimationStatus : function(){
			return testimony_animation;
		},
		nodes : function(){
			getNodes();
		},
		getNodesNum : function(){
			return nNodes;
		},
		getShowed : function(){
			return showedNodes;
		},
		ui : function(){
			get_one();
		}
	}
})();
var track = {};

track.sendEvent = function sendEvent(category, action, label) {
     ga('send','event', category, action, label);
};

track.init = function(){
	// HOME

	$('#btn-saibamais-manteiga-ucuuba').on('click', function() {
		track.sendEvent('ekos', 'saiba-mais', 'ancora');
	});

	// $('.testimony-btn.first').on('click', function() {
	// 	if(!already_down){
	// 		track.sendEvent('ekos', 'rede', 'sobe');
	// 	}
	// });

	// $('.testimony-btn.last').on('click', function() {
	// 	if(!already_up){
	// 		track.sendEvent('ekos', 'rede', 'desce');
	// 	}
	// });

	$('#manteiga-para-maos').on('click', function() {
		track.sendEvent('ekos', 'compre-aqui', 'manteiga-maos');
	});

	$('#consultor-maos').on('click', function(){
		track.sendEvent('ekos', 'encontre-uma-consultora', 'manteiga-maos');
	});
	
	$('#hidratante-corp').on('click',  function() {
		track.sendEvent('ekos', 'compre-aqui', 'hidratante-corp');
	});

	$('#consultor-hidratante-corp').on('click',  function() {
		track.sendEvent('ekos', 'encontre-uma-consultora', 'hidratante-corp');
	});

	$('#manteiga-corpo').on('click', function() {
		track.sendEvent('ekos', 'compre-aqui', 'manteiga-corpo');
	});

	$('#consultor-manteiga-corpo').on('click', function() {
		track.sendEvent('ekos', 'encontre-uma-consultora', 'manteiga-corpo');
	});

	$('#tw-site').on('click', function(){
		track.sendEvent('ekos', 'twitter-pagina', 'compartilhe');
	});

	$('#tw-video').on('click', function(){
		track.sendEvent('ekos', 'twitter-video', 'compartilhe');
	});


	// 

	$('.btn-compre-agora.sabonete-liquido-maos').on('click', function(){
		track.sendEvent('ekos', 'novos-produtos_sabonete-liquido-maos', 'compre-agora');
	});

	$('.btn-consultor.sabonete-liquido-maos').on('click', function(){
		track.sendEvent('ekos', 'novos-produtos_sabonete-liquido-maos', 'consultora');
	});

	// 

	$('.btn-compre-agora.sabonete-liquido-corpo').on('click', function(){
		track.sendEvent('ekos', 'novos-produtos_sabonete-liquido-corpo', 'compre-agora');
	});

	$('.btn-consultor.sabonete-liquido-corpo').on('click', function(){
		track.sendEvent('ekos', 'novos-produtos_sabonete-liquido-corpo', 'consultora');
	});

	// 

	$('.btn-compre-agora.sabonete-barra-vegetal').on('click', function(){
		track.sendEvent('ekos', 'novos-produtos_sabonete-barra', 'compre-agora');
	});

	$('.btn-consultor.sabonete-barra-vegetal').on('click', function(){
		track.sendEvent('ekos', 'novos-produtos_sabonete-barra', 'consultora');
	});

	// 

	$('.btn-compre-agora.manteiga-reparadora').on('click', function(){
		track.sendEvent('ekos', 'antigos-produtos_manteiga-reparadora', 'compre-agora');
	});

	$('.btn-consultor.manteiga-reparadora').on('click', function(){
		track.sendEvent('ekos', 'antigos-produtos_manteiga-reparadora', 'consultora');
	});

	// 

	$('.btn-compre-agora.manteiga-hidratante').on('click', function(){
		track.sendEvent('ekos', 'antigos-produtos_manteiga-hidratante', 'compre-agora');
	});

	$('.btn-consultor.manteiga-hidratante').on('click', function(){
		track.sendEvent('ekos', 'antigos-produtos_manteiga-hidratante', 'consultora');
	});

	// 

	$('.btn-compre-agora.hidratante-corporal').on('click', function(){
		track.sendEvent('ekos', 'antigos-produtos_hidratante-corporal', 'compre-agora');
	});

	$('.btn-consultor.hidratante-corporal').on('click', function(){
		track.sendEvent('ekos', 'antigos-produtos_hidratante-corporal', 'consultora');
	});

	// 
	$('.bx-pager-item .bullet-ga').on('click', function(){
		track.sendEvent('ekos', 'banner-footer', 'seletor');
	});

	//

	$('.item .tag-acai').on('click', function(){
		track.sendEvent('ekos', 'ativos', 'acai');
	});

	$('.item .tag-andiroba').on('click', function(){
		track.sendEvent('ekos', 'ativos', 'andiroba');
	});

	$('.item .tag-buriti').on('click', function(){
		track.sendEvent('ekos', 'ativos', 'buriti');
	});

	$('.item .tag-cacau').on('click', function(){
		track.sendEvent('ekos', 'ativos', 'cacau');
	});

	$('.item .tag-castanha').on('click', function(){
		track.sendEvent('ekos', 'ativos', 'castanha');
	});

	$('.item .tag-mate-verde').on('click', function(){
		track.sendEvent('ekos', 'ativos', 'mate-verde');
	});

	$('.item .tag-pitanga').on('click', function(){
		track.sendEvent('ekos', 'ativos', 'pitanga');
	});

	$('.item .tag-maracuja').on('click', function(){
		track.sendEvent('ekos', 'ativos', 'maracuja');
	});

	// CADASTRO
};

track.init();
var ucuubaSignin = (function() {
	var debug = false;
	var btn_confirmar = 0;
	var register_user = 0;
	var link_invite_friends = 0;
	var link_new_friends = 0;

	var l = function l(msg){
		if(!debug) return false;
		if (typeof console === "undefined" || typeof console.log === "undefined") {
			console = {};
			console.log = function(msg) {
				alert(msg);
			};
		}else{
			console.log(msg);
		}
	};

	var treat = function treat(el, t){
		el.addClass('error');
		el.attr('placeholder', 'Preenchimento Obrigatório');
	};

	var validateEmail = function validateEmail(email){
		var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	};

	var validation = function validation(className, context, radio, checkbox, callb, type_ev){
		var aux;

		var valid         = true;
		var validCheckbox = false;
		var validRadio    = false;
		var result        = {};
		var cName         = className == "" ? ".required" : "." + className;
		var strSlector    = context + ' input,' + context + ' textarea,' + context + ' select';
		var targets       = $(strSlector);
		var checkboxArray = [];

		$(context + ' .error').removeClass('error');

		targets.each(function(index, el) {
			var _element = $(el);
			var max      = _element.data('max') !== undefined ? parseInt(_element.data('max')) : null;
			var min      = _element.data('min') !== undefined ? parseInt(_element.data('min')) : null;

			if( _element.is(':radio') || _element.is(':checkbox') ){
				if( _element.is(':checkbox') ){

					if ( _element.is(':checked') ) {
						result[_element.attr('name')] = _element.val();
						checkboxArray.push(_element.val());
						validCheckbox = validCheckbox || true;
					}else{
						if( checkbox ){
							validCheckbox = validCheckbox || false;
						}
					}

				}else if ( _element.is(':radio') ){
					if ( _element.is(':checked') ) {
						result[_element.attr('name')] = _element.val();
						validRadio = validRadio || true;
					}else{
						if( radio ){
							validRadio = validRadio || false;
						}
					}
				}
			}else{

				//TIPOS DE REGEX
				if (_element.data('type') == "numberonly") {
					var regg = /^\d*(?:\.\d{1,2})?$/;
					var numb = _element.val();
					if(!regg.test(numb)){
						valid = callb(_element, valid);
					}
					if(typeof type_ev !== 'undefined'){
						// _element.val(numb.replace(/^\d*(?:\.\d{1,2})?$/, ''));
						_element.val(numb.replace(/[a-z\u00C0-\u00ff A-Z]/gi, ''));
						_element.removeClass('error');
					}
				}else if(_element.data('type') == "charsonly"){

					var valField = _element.val();
			        var regTest = /[a-z\u00C0-\u00ff A-Z]/gi;
			        var testChar = "";
			        var newValue = "";
			        var vv = true;
			        
			        for (var key in valField) {
			            testChar = valField[key].replace(regTest, '¶§');
			            
			            if (testChar == "¶§") {
			                newValue += valField[key]; 
			            } else {
			                newValue += '';
			                vv = false;
			            }    
			      	}    
			        if(!vv){
			        	valid = callb(_element, valid);
			        }
			        if(typeof type_ev !== 'undefined'){
			        	_element.val(newValue);
			        	_element.removeClass('error');
			        }
				}
				//FIM TIPOS DE REGEX

				result[_element.attr('name')] = _element.val();
				if(_element.hasClass(cName.replace('.',''))){
					console.log(_element);
					result[_element.attr('name')] = _element.val();
					if(_element.hasClass('email')){
						if (validateEmail(_element.val()) == false) {
							valid = callb(_element, valid);
						}
					}else if(_element.val().length == 0 ){
						valid = callb(_element, valid);
					} else if( max || min){
						if( max && min ){
							if(_element.val().length > max  || _element.val().length < min){
								valid = callb(_element, valid);
							}
						}else if(max){
							if(_element.val().length > max){
								valid = callb(_element, valid);
							}
						}else if(min){
							if(_element.val().length < min){
								valid = callb(_element, valid);
							}
						}
					}
				}
			}
		});


		if( radio && !validRadio ){
			valid = callb(context, "radio");
		}
		if( checkbox && !validCheckbox ){
			valid = callb(context, "checkbox");
		}

		if(checkbox){
			result['checkboxes'] = checkboxArray;
		}

		return{
			v    : valid,
			data : result
		}
	};

	var send_data = function send_data(u, d, t, dt, callb, er, al){
		if(__BASE_URL__ === undefined){
			l('base indefinida');
			return false;
		}
		var success = false;
		u = __BASE_URL__ + u;
		//deixando o dado no formato de json
		//d = JSON.stringify(d['data']);
		d = d['data'];
		l('Dado a ser enviado');
		l(d);
		l(typeof callb);
		$.ajax({
			url: u,
			type: t,
			dataType: dt,
			data: d
		})
		.done(function(data) {
			if( typeof callb !== 'undefined' ){
				callb(data);
			}
		})
		.fail(function(jqXHR, textStatus, errorThrown) {
			typeof er !== 'undefined' ? er() : l('Fail.');
			l(textStatus);
			// l(jqXHR.status);
		})
		.always(function() {
			typeof er !== 'undefined' ? er() : l('Complete.');
		});
	};

	var submitCode = function(data) {
		if (data['success'] == 1) {
			track.sendEvent('ucuuba-rede', 'confirmar', 'correto');
			$('#container-ekos-code').hide();
			$('#commentarie-block').show();
			ucuubaSignin.bindRegisterUser();
			ga('send', 'pageview', {
			  'page': '/www/nossas-marcas/ekos/rede/logado/seus-dados',
			  'title': 'Nossas Marcas - Ekos - Rede Logado - Proprio'
			});
		} else {
			$('#code').addClass('error');
			track.sendEvent('ucuuba-rede', 'confirmar', 'errado');
			bind_keypress_to_validate('#ekoscode-form input', '#ekoscode-form');
		}

		$('#guest').val(data['guest']);
		$('#guestVerify').val(data['code']);
		$('#more-nodes').val(data['moreNodes']);
	};

	var bindCodeVerification = function() {
		$('.btn-confirmar').off().on({
			'click' : function(event) {
				event.preventDefault();

				var data = validation('', "#ekoscode-form", false, false, treat);
				if(data.v){
					send_data( 'verifyCode', data, 'get', 'jsonp', submitCode );
				}else{
					track.sendEvent('ucuuba-rede', 'confirmar', 'errado');
					bind_keypress_to_validate('#ekoscode-form input', '#ekoscode-form');
				}
			}
		});
	};

	var registerEvents = function() {
		var setCount =  function (src, elem, limit) {
            var chars = src.value.length;
            if (chars > limit) {
                src.value = src.value.substr(0, limit);
                chars = limit;
            }
            elem.html(limit - chars);
		};

		var elem = $(".limit-comment");

		$(".textarea-comment").on("keyup focus", function () {
            setCount(this, elem, 200);
        });

		
		$('.register-user').off().on({
			'click' : function(event) {
				var activeTerms = $('.terms-checkbox').hasClass('terms-checkbox-active');
				var data = validation('', '#commentarie-main-form', false, false, treat);
				if (activeTerms) {				
					event.preventDefault();
					// var data = validation('', '#commentarie-main-form', false, false, treat);

					if (data.v) {
						$('.terms-checkbox').removeClass('error-chk');
						data['data']['guest'] = $('#guest').val();
						data['data']['code'] = $('#guestVerify').val();

						send_data('setRegister', data, 'get', 'jsonp', registerUser);
					}
				} else {
					$('.terms-checkbox').addClass('error-chk');
					$('.error-checkbox').css('display', 'block');
					bind_keypress_to_validate('#commentarie-main-form input, #commentarie-main-form, textarea', '#commentarie-main-form');
				}		
			}
		});

		$('.terms-checkbox').off().on({
			'click' : function() {
				if ($(this).hasClass('terms-checkbox-active')) {
					$(this).removeClass('terms-checkbox-active');
					$(this).addClass('error-chk');
				} else {
					$(this).addClass('terms-checkbox-active');
					$(this).removeClass('error-chk');
					$('.error-checkbox').css('display', 'none');
					
				}
			}
		});

		$('#terms-label').off().on({
			'click' : function() {
				$('.modal-regulamento').modal();
				$('.modal-regulamento').tinyscrollbar({
					trackSize : '462',
					thumbSize : '21'
				});
			}
		});
	};

	var feedbackNoComments = function(data) {
		$('#commentarie-main-form').hide();
		$('.text-fill-fields').hide();
		$('.feedback-comments').show();
		$('.comfirm-result-icon').show();
		$('.shadow-inactive-form').hide();
		$('.feedback-comments').hide();
		$('.container-feedback-discount').show();
		$('.link-step-to-step').off().on({
			'click' : function() {
				track.sendEvent('ucuuba-rede', 'passo-a-passo', 'botao');
				$('.modal-step-by-step').modal({closeClass: 'close-sucess-facebook spriteclose sprite'});
				ga('send', 'pageview', {
				  'page': '/www/nossas-marcas/ekos/rede/logado/passo-a-passo',
				  'title': 'Nossas Marcas - Ekos - Rede Logado - Passo a Passo'
				});
			}
		});
		$('#call-a-friend').hide();
		$('.container-invite-friends').show();
		ucuubaSignin.eventsSendEmails();
	};

	var registerUser = function(data) {
		var hasMoreNodes = $('#more-nodes').val();
		var hasMoreNodes = $('#more-nodes').val();
		if (data['success'] == 1 && hasMoreNodes) {
			$('#commentarie-main-form').hide();
			$('.text-fill-fields').hide();
			$('.feedback-comments').show();
			$('.comfirm-result-icon').show();
			$('.shadow-inactive-form').hide();
			bind_keypress('#call-a-friend');
			ga('send', 'pageview', {
			  'page': '/www/nossas-marcas/ekos/rede/logado/dados-amigas',
			  'title': 'Nossas Marcas - Ekos - Rede Logado - Amigas'
			});

			ucuubaSignin.bindInviteFriend();
		} else {
			feedbackNoComments(data);
		}
	};

	var eventsFriend = function() {

		formEstado();

		$('.link-invite-friends').off().on({
			'click' : function(event) {
				event.preventDefault();
				var data = validation('', "#call-a-friend", false, false, treat);


				if(data.v){
					data['data']['guest'] = $('#guest').val();
					data['data']['city'] = $('#estado').find(':selected').text();
					data['data']['state'] = $('#cidade').val();
					send_data('setNewFriend/', data, 'get', 'jsonp', feedbackFriends );
				}else{
					bind_keypress_to_validate('#call-a-friend input, #call-a-friend select', '#call-a-friend');
				}
			}
		});


		$('.cep-field').on({
			'mouseleave' : function() {
				if (window.cepUser != $(this).val()) {

					window.cepUser =  $(this).val();				

					$.ajax({
						type: 'GET',
						url : __BASE_URL__ + 'getAddress/' + window.cepUser + '',
						dataType : 'jsonp',
						success: function(response) {
						   	var result = response;
						   	var activeAddress = false;

						   	$('.bloco-endereco').find('.field-address').each(function(){
						   		if ($(this).val() != "") {
						   			activeAddress = true;
						   		} 
						   	});

						   	if (activeAddress) {
								$('#endereco').val(result['Rua']);
						   		$('#cidade').val(result['Cidade']);
						   		$('#estado').val(result['UF']);
						   		$('#complemento').val(result['Complemento']);
						   	}	
						},
						error: function(e) {
						   console.log(e);
						}
					});
				}	
			}
		});
	};

	var formEstado = function () {

		var $select = $('#estado');

		$select.append('<option value=""></option>');
		for (var i = 0; i < estados.length; i++) {
			var item = estados[i];
			$select.append('<option value=' + item.ID +'>'+ item.Nome +'</option>');
		};
		
		$select.on('change', function() {
			formCidade($(this).val());
		});
	};

	var formCidade = function(ID) {
		var $select = $('#cidade'),
			options = [];

		$.each(cidades, function() {
			if (this.Estado == ID) {
				options.push(this);
			}
		});

		$select.html('');
		$select.append('<option value=""></option>');
		$.each(options, function() {
			$select.append('<option value=' + this.Nome +'>'+ this.Nome +'</option>');
		});
	};

 	var feedbackFriends = function(data) {
		if (data['success'] == 1) {
			$('.feedback-comments').hide();
			$('.container-feedback-discount').show();
			ga('send', 'pageview', {
			  'page': '/www/nossas-marcas/ekos/rede/logado/comentario-sucesso',
			  'title': 'Nossas Marcas - Ekos - Rede Logado - Comentario Sucesso'
			});
			$('.link-step-to-step').off().on({
				'click' : function() {
					track.sendEvent('ucuuba-rede', 'passo-a-passo', 'botao');
					$('.modal-step-by-step').modal({closeClass: 'close-sucess-facebook spriteclose sprite'});
					ga('send', 'pageview', {
					  'page': '/www/nossas-marcas/ekos/rede/logado/passo-a-passo',
					  'title': 'Nossas Marcas - Ekos - Rede Logado - Passo a Passo'
					});
				}
			});
			$('#call-a-friend').hide();
			$('.container-invite-friends').show();
			ucuubaSignin.eventsSendEmails();	
		} else {

		}
	};

	var sendFriendEmails = function() {
		var totFriends = 1;
		$('.link-new-friends').off().on({
			'click' : function(event) {
				event.preventDefault();
				track.sendEvent( 'ucuuba-rede', 'add-amiga', 'confirmar');
				var blocks = $('.item-invite-friend.add-after');
				if(blocks.length > 0){
					blocks.each(function() {
						var _el = $(this);
						var nextIndex = parseInt($('#indexInvite').val());
						if(_el.find('.email-friend').val() == '' || _el.find('.name-friend').val() == ''){
							_el.remove();
							$('#indexInvite').val(nextIndex - 1);
						}
					});
				}
				
				var data = validation('', "#form-new-friends", false, false, treat);

				if(data.v){
					var totFriends = $('.container-invite-friends').find('.item-invite-friend').length;
                    var dataMoreFriends = {};
                    var dataUsers = [];

                    dataMoreFriends['guest'] = $('#guest').val();

					for (var tf = 0; tf < totFriends; tf++) {
                        dataUsers.push({
                           'name' : $('#nameUser_' + tf).val(),
                            'email' : $('#emailUser_' + tf).val()
                        });
                    }


                    dataMoreFriends['discount'] = dataUsers;

                    $.ajax({
                        type : 'GET',
                        url : __BASE_URL__ + 'setMoreFriends',
                        dataType :'jsonp',
                        data : dataMoreFriends,
                        success : function(response) {
                            feedbackMoreFriends(response);
                        }
                    });

                }else{
					bind_keypress_to_validate('#form-new-friends input', '#form-new-friends');
				}
			}
		});

		$('.link-step-to-step').off().on({
			'click' : function() {
				track.sendEvent('ucuuba-rede', 'passo-a-passo', 'botao');
				$('.modal-step-by-step').modal({closeClass: 'close-sucess-facebook spriteclose sprite'});
				ga('send', 'pageview', {
				  'page': '/www/nossas-marcas/ekos/rede/logado/passo-a-passo',
				  'title': 'Nossas Marcas - Ekos - Rede Logado - Passo a Passo'
				});
			}
		});

		$(".add-more-friends").off().on({
			'click' : function() {
				if (totFriends < 10) {
					var data = validation('', "#form-new-friends", false, false, treat);
					if(data.v){
						track.sendEvent('ucuuba-rede', 'add-amiga', 'botao');
						var itemInvite = $('.item-invite-friend:first-child').clone(true, true);
						var containerInvite = $('.container-invite-friend');
						var nextIndex = parseInt($('#indexInvite').val());

						itemInvite.find('.name-friend').val('');
						itemInvite.find('.email-friend').val('');
						itemInvite.addClass('add-after');

						$('#indexInvite').val(nextIndex + 1);

                        itemInvite.find('.name-friend').attr('name', '[' +  nextIndex + '][name]');
                        itemInvite.find('.email-friend').attr('name', '[' +  nextIndex + '][email]');
                        itemInvite.find('.name-friend').attr('id', 'nameUser_' + nextIndex);
                        itemInvite.find('.email-friend').attr('id', 'emailUser_' + nextIndex);
						itemInvite.find('.name-friend').removeClass('error');
						itemInvite.find('.email-friend').removeClass('error');
						containerInvite.append(itemInvite);
						totFriends++;
					}else{
						bind_keypress_to_validate('.item-invite-friend input', '.item-invite-friend');
					}

				} else {
					$('.add-more-friends').remove();
				}	

				// totFriends++;
			}
		});
	};

	var feedbackMoreFriends = function(data) {
		ga('send', 'event', 'ucuuba-rede', 'add-amiga', 'confirmar');
		if (data['success'] == 1) {
			$('.container-form-comments').css('border-bottom', '0');
			$('.container-invite-friends').hide();
			$('.container-feedback-discount').hide();
			$('.center-feed-success').show();
			$('.container-back-home').show();
			ga('send', 'pageview', {
			  'page': '/www/nossas-marcas/ekos/rede/logado/desconto-sucesso',
			  'title': 'Nossas Marcas - Ekos - Rede Logado - Desconto Sucesso'
			});
			$('#btn-back-to-home').on('click', function(){
				track.sendEvent('ucuuba-rede', 'add-amiga', 'voltar-home');
			});
		} else {

		}
	};

	var validator_type = function(el, reg){
		var str;
		//Somente números
		if(reg == 0){
			if(el.length == 0){
				return false;
			}else if(el.length == 1){
				str = el.val();
				el.val(str.replace(/^\d*(?:\.\d{1,2})?$/, ''));
			}else{
				el.each(function(index, _el) {
					str = _el.val();
					_el.val(str.replace(/^\d*(?:\.\d{1,2})?$/, ''));
				});
			}
		}else if(reg == 1){
			//Somente letras
			if(el.length == 0){
				return false;
			}else if(el.length == 1){
				str = el.val();
				el.val(str.replace(/[a-z][0-9]\s/i, ''));
			}else{
				el.each(function(index, _el) {
					str = _el.val();
					_el.val(str.replace(/[a-z][0-9]\s/i, ''))
				});
			}
		}
	};

	var bind_keypress = function(containerSelector){

		var els = $(containerSelector + ' .numberonly, ' +containerSelector + ' .charsonly');
		els.each(function(index, el) {
			var _element = $(el);
			_element.on('keyup keydown keypress', function(){
				if (_element.data('type') == "numberonly") {
					var numb = _element.val();
					// _element.val(numb.replace(/^\d*(?:\.\d{1,2})?$/, ''));
					_element.val(numb.replace(/[a-z\u00C0-\u00ff A-Z]/gi, ''));
				}else if(_element.data('type') == "charsonly"){

					var valField = _element.val();
			        var regTest = /[a-z\u00C0-\u00ff A-Z]/gi;
			        var testChar = "";
			        var newValue = "";
			        
			        for (var key in valField) {
			            testChar = valField[key].replace(regTest, '¶§');
			            
			            if (testChar == "¶§") {
			                newValue += valField[key]; 
			            } 
			      	}
			      	_element.val(newValue);
				}
			});
		});
	};

	var bind_keypress_to_validate = function(selector, containerSelector){
		$(selector).on('keyup keydown keypress', function(){
			var data = validation('', containerSelector, false, false, treat, true);
		});
	}

	// var bind_keypress_to_validate = function(selector, containerSelector){
	// 	$(selector).off().on({
	// 		'keyup keydown keypress' : function(event) {
	// 			var data = validation('', containerSelector, false, false, treat, true);
	// 		}
	// 	});
	// };

	return {
		init : function() {
			bindCodeVerification();
		},
		bindRegisterUser : function() {
			registerEvents();	
		},
		bindInviteFriend : function() {
			eventsFriend();
		},
		eventsSendEmails : function() {
			sendFriendEmails();
		}	
	}
})();



// $(document).ready(function(){
    ucuubaSignin.init();
    $('.phone-mask').inputmask('(99) 9999-9999');
    $('.cel-mask').inputmask('(99) 9999[9]-9999');
    $('.cep-field').inputmask('99999-999');

    $('.btn-facebook-connect').off().on({
        'click' : function() {
            function fbEnsureInit(callback) {
                var verifyFB = "";
                if(!window.fbApiInit) {
                    track.sendEvent('ucuuba-rede', 'facebook', 'conecte-se-erro');
                    varifyFB = setInterval(function() {fbEnsureInit(callback);}, 50);
                } else {
                    window.clearInterval(verifyFB);
                    track.sendEvent('ucuuba-rede', 'facebook', 'conecte-se-sucesso');

                    if(callback) {
                        callback();
                    }
                }
            }

            var getStatusFacebook = function() {
                if(window.fbApiInit){
                    FB.getLoginStatus(function(response) {
                        if (response.status === 'connected') {
                            FB.api('/me', function(response) {
                                $('.no-image-facebook').removeClass('no-image-facebook').addClass('image-face-connect');
                                var imgUser = "<img src='https://graph.facebook.com/" + response['id'] + "/picture?type=large'>";
                                $('.image-facebook').append(imgUser);
                                $('#face-image-user').val("https://graph.facebook.com/" + response['id'] + "/picture?type=large");
                                $('#nome-main').val(response['first_name'] + ' ' + response['last_name']);
                                $('#email-main').val(response['email']);
                                track.sendEvent('ucuuba-rede', 'facebook', 'conecte-se-sucesso');
                            });
                        } else {
                            FB.login(function(response) {

                                if (response.authResponse) {
                                    FB.api('/me', function(response) {
                                        $('.no-image-facebook').removeClass('no-image-facebook').addClass('image-face-connect');
                                        var imgUser = "<img src='https://graph.facebook.com/" + response['id'] + "/picture?type=large'>";
                                        $('.image-facebook').append(imgUser);
                                        $('#face-image-user').val("https://graph.facebook.com/" + response['id'] + "/picture?type=large");
                                        $('#nome-main').val(response['first_name'] + ' ' +  response['last_name']);
                                        $('#email-main').val(response['email']);
                                        track.sendEvent('ucuuba-rede', 'facebook', 'conecte-se-sucesso');
                                    });
                                } else {
                                    //
                                    track.sendEvent('ucuuba-rede', 'facebook', 'conecte-se-erro');
                                }
                            }, {scope: 'email, public_profile'});
                        }
                    });
                }
            };
            getStatusFacebook();
            // fbEnsureInit(function() {
            //     getStatusFacebook();
            // });
        }
    });
}
// });
if( home_page_ucuuba ){

    NATURA.init();
    
    // window.fbAsyncInit = function() {
    //     FB.init({
    //         appId      : '452610344890666', // app Brave
    //         //appId      : '111111111111111', // app Salve
    //         xfbml      : true,
    //         version    : 'v2.3'
    //     });
    // };

    // (function(d, s, id){
    //     var js, fjs = d.getElementsByTagName(s)[0];
    //     if (d.getElementById(id)) {return;}
    //     js = d.createElement(s); js.id = id;
    //     js.src = "//connect.facebook.net/en_US/sdk.js";
    //     fjs.parentNode.insertBefore(js, fjs);
    // }(document, 'script', 'facebook-jssdk'));


    if ($('body').find('#top-banners-container').length > 0) {
        // function shareVideoFb(){
        //     FB.ui({
        //         method: 'feed',
        //         link: 'https://www.facebook.com/video.php?v=10155405841045422&set=vb.382381445421&type=2&theater',
        //         name: 'EKOS UCUUBA',
        //         caption: 'Difícil encontrar hidratação intensa sem aquela sensação pesada na pele? Chame o poder que vem da natureza.',
        //         picture : __BACKEND__ + 'app/webroot/img/share_video.jpg'
        //     }, function(response){
        //         if( response && response['post_id'] ){
        //             $('#modal-facebook-success').modal();
        //             track.sendEvent('ekos', 'facebook-video', 'compartilhe-sucesso');
        //         }else{
        //             track.sendEvent('ekos', 'facebook-video', 'compartilhe-erro');
        //         }
        //     });
        // }

        // function shareSiteFb(){
        //     FB.ui({
        //         method: 'feed',
        //         link: 'http://www.natura.com.br/www/nossas-marcas/ekos/',
        //         name: 'Natura EKOS UCUUBA',
        //         caption: 'www.natura.com.br/ucuuba',
        //         description : 'Difícil encontrar hidratação intensa sem aquela sensação pesada na pele? Chame Ucuuba, a joia rara da Amazônia',
        //         picture : __BACKEND__ + 'app/webroot/img/share_site.jpg'
        //     }, function(response){
        //         if( response && response['post_id'] ){
        //             $('#modal-facebook-success').modal();
        //             track.sendEvent('ekos', 'facebook-pagina', 'compartilhe-sucesso');
        //         }else{
        //             track.sendEvent('ekos', 'facebook-pagina', 'compartilhe-erro');
        //         }
        //     });
        // }
       
        t_type = '';

        $('#tw-site').click(function(){
             t_type = 'tw-site';
        });

        $('#tw-video').click(function(){
            t_type = 'tw-video';
        });

        window.twttr=(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],t=window.twttr||{};if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);t._e=[];t.ready=function(f){t._e.push(f);};return t;}(document,"script","twitter-wjs"));
        twttr.ready(function (twttr) {
            var txt = encodeURI("https://twitter.com/intent/tweet?status=Difícil encontrar hidratação intensa sem aquela sensação pesada na pele? Chame o poder que vem da natureza. http://natura.com.br/ekos");
            document.getElementById('tw-video').href = txt;
            txt = encodeURI("https://twitter.com/intent/tweet?status=Natura EKOS apresenta Ucuuba. A semente de uma árvore rara que garante uma rara hidratação. Chame Natura. http://natura.com.br/ekos");
            document.getElementById('tw-site').href = txt;
            twttr.events.bind('tweet', function (event) {
                $('#modal-facebook-success').modal();
                switch (t_type) {
                    case "tw-site":
                        track.sendEvent('ekos', 'twitter-pagina', 'compartilhe-sucesso');
                    break;
                    case "tw-video":
                        track.sendEvent('ekos', 'filme_natura-ekos-ucuuba', 'TW-compartilhe');
                    break;
                }
                // track.sendEvent('ekos', 'twitter-pagina', 'compartilhe-sucesso');
            });
        });
    }


    var options = {
        ratio            : 16/9, // usually either 4/3 or 16/9 -- tweak as needed
        videoId          : 'lsxSmi9E4DM', // toy robot in space is a good default, no?
        mute             : true,
        repeat           : false,
        width            : 710,
        height           : 510,
        wrapperZIndex    : 99,
        increaseVolumeBy : 10,
        start            : 0
    };

    window.already_half = false;
    window.already_play = false;
    window.already_stop = false;

    var tag = document.createElement('script');
    tag.src = "http://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


    window.player;
    window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player('video-block-target', {
            width: options.width,
            height: options.height,
            videoId: options.videoId,
            playerVars: {
                controls: 2,
                showinfo: 1,
                modestbranding: 1,
                rel: 0, 
                controls: 2, 
                autohide: 1,
                wmode: 'transparent'
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': function(e) {
                  onPlayerStateChange(e);
                }
            }
        });
    }

    window.onPlayerReady = function(e) {
        if (options.mute) e.target.mute();
        // e.target.seekTo(options.start);
        // e.target.playVideo();
    }

    window.onPlayerStateChange = function(event) {
        switch (event.data) {
        case YT.PlayerState.ENDED:
          // clearTagsVideos();
          ga('send', 'event', 'ekos', 'filme_natura-ekos-ucuuba', 'fim');          
          // console.log("teste xpto:" + _that.percent);
          console.log("ENDED");
          // _that.tagPlayVideo();
          // dispatchEvent('ended');
          break;
        case YT.PlayerState.PLAYING:
          tagStartVideoProgress();        
          ga('send', 'event', 'ekos', 'filme_natura-ekos-ucuuba', 'play');       
          console.log("PLAYING");
          // _that.startVideoProgress();
          // dispatchEvent('playing');
          break;
        case YT.PlayerState.PAUSED:
          // _that.tagStopVideoProgress();
          console.log("PAUSED");
          // _that.stopVideoProgress();
          // dispatchEvent('paused');
          break;
        case YT.PlayerState.BUFFERING:
          console.log("BUFFERING");
          // dispatchEvent('buffering');
          break;
        case YT.PlayerState.CUED:
          console.log("CUED");
          // dispatchEvent('cued');
          break;
      };
    }

    window.tagStartVideoProgress = function(event) {
        var _that = this,
            duration = this.player.getDuration(),
            percent;
        
        // if(testGA || testProgress) {
          this.progress = setInterval(function () {
            
            // calculate percent
            _that.percent = _that.player.getCurrentTime() / duration;
            
            // dispatch analytics
            // if(testGA) {
              if(!_that.bool25 && _that.percent > 0.25) {
                _that.bool25 = true;
                _that.progressGA = 25;
                // trackAnalytics(_TRACK_CAT_, _that.currentVideoName ,'25%')
                // dispatchEvent('progressGA', 25);
              } else if(!_that.bool50 && _that.percent > 0.50) {
                _that.bool50 = true;
                ga('send', 'event', 'ekos', 'filme_natura-ekos-ucuuba', 'meio');
                // dispatchEvent('progressGA', 50);
              } else if(!_that.bool75 && _that.percent > 0.75) {
                _that.bool75 = true;
                // trackAnalytics(_TRACK_CAT_, _that.currentVideoName ,'75%')
                // dispatchEvent('progressGA', 75);
              }
            // };

            // dispatch progress
            // if(testProgress) dispatchEvent('progress', percent);

          }, 200);
        // }
    }
    
    // window.clearTagsVideos = function() {
    //     bool25 = false;
    //     bool50 = false;
    //     bool75 = false;
    // }

};
var ContentFlowGlobal = {
    Flows: new Array,
    AddOns: {},
    scriptName: "contentflow.js",
    scriptElement: null,
    Browser: new(function() {
        this.Opera = window.opera ? true : false;
        this.IE = document.all && !this.Opera ? true : false;
        this.IE6 = this.IE && typeof(window.XMLHttpRequest) == "undefined" ? true : false;
        this.IE8 = this.IE && typeof(document.querySelectorAll) != "undefined" ? true : false;
        this.IE7 = this.IE && !this.IE6 && !this.IE8 ? true : false;
        this.WebKit = /WebKit/i.test(navigator.userAgent) ? true : false, this.iPhone = /iPhone|iPod/i.test(navigator.userAgent) ? true : false;
        this.Chrome = /Chrome/i.test(navigator.userAgent) ? true : false;
        this.Safari = /Safari/i.test(navigator.userAgent) && !this.Chrome ? true : false;
        this.Konqueror = navigator.vendor == "KDE" ? true : false;
        this.Konqueror4 = this.Konqueror && /native code/.test(document.getElementsByClassName) ? true : false;
        this.Gecko = !this.WebKit && navigator.product == "Gecko" ? true : false;
        this.Gecko19 = this.Gecko && Array.reduce ? true : false
    })(),
    getAddOnConf: function(A) {
        if (this.AddOns[A]) {
            return this.AddOns[A].conf
        } else {
            return {}
        }
    },
    setAddOnConf: function(B, A) {
        this.AddOns[B].setConfig(A)
    },
    getScriptElement: function(D) {
        var C = new RegExp(D);
        var A = document.getElementsByTagName("script");
        for (var B = 0; B < A.length; B++) {
            if (A[B].src && C.test(A[B].src)) {
                return A[B]
            }
        }
        return ""
    },
    getScriptPath: function(C, B) {
        var A = new RegExp(B + ".*");
        return C.src.replace(A, "")
    },
    addScript: function(B) {
        if (this.Browser.IE || this.Browser.WebKit || this.Browser.Konqueror) {
            document.write('<script type="text/javascript" src="' + B + '"><\/script>')
        } else {
            var A = document.createElement("script");
            A.src = B;
            A.setAttribute("type", "text/javascript");
            document.getElementsByTagName("head")[0].appendChild(A)
        }
    },
    addScripts: function(C, B) {
        for (var A = 0; A < filename.length; A++) {
            this.addScript(basepath + B[A])
        }
    },
    addStylesheet: function(B) {
        if (this.Browser.Gecko19) {
            var A = document.createElement("link");
            A.setAttribute("rel", "stylesheet");
            A.setAttribute("href", B);
            A.setAttribute("type", "text/css");
            A.setAttribute("media", "screen");
            document.getElementsByTagName("head")[0].appendChild(A)
        } else {
        }
    },
    addStylesheets: function(C, B) {
        for (var A = 0; A < filename.length; A++) {
            this.addStylesheet(basepath + B[A])
        }
    },
    initPath: function() {
        this.scriptElement = this.getScriptElement(this.scriptName);
        if (!this.scriptElement) {
            this.scriptName = "contentflow_src.js";
            this.scriptElement = this.getScriptElement(this.scriptName)
        }
        this.BaseDir = this.getScriptPath(this.scriptElement, this.scriptName);
        if (!this.AddOnBaseDir) {
            this.AddOnBaseDir = this.BaseDir
        }
        if (!this.CSSBaseDir) {
            this.CSSBaseDir = this.BaseDir
        }PORRA
    },
    init: function() {
        // this.addStylesheet(this.CSSBaseDir + "contentflow.css");
        // this.addStylesheet(this.CSSBaseDir + "mycontentflow.css");
        this.loadAddOns = new Array();
        if (this.scriptElement.getAttribute("load")) {
            var A = this.loadAddOns = this.scriptElement.getAttribute("load").replace(/\ +/g, " ").split(" ");
            for (var C = 0; C < A.length; C++) {
                if (A[C] == "") {
                    continue
                }
                this.addScript(this.AddOnBaseDir + "ContentFlowAddOn_" + A[C] + ".js")
            }
        }
        var E = this;
        if (document.addEventListener) {
            if (this.Browser.WebKit) {
                var D = setInterval(function() {
                    if (/loaded|complete/.test(document.readyState)) {
                        clearInterval(D);
                        E.onloadInit()
                    }
                }, 10)
            } else {
                document.addEventListener("DOMContentLoaded", E.onloadInit, false)
            }
        } else {
            if (this.Browser.IE) {
                document.write("<script id=__ie_cf_onload defer src=javascript:void(0)><\/script>");
                var B = document.getElementById("__ie_cf_onload");
                B.onreadystatechange = function() {
                    if (this.readyState == "complete") {
                        E.onloadInit()
                    }
                }
            }
        }
        window.addEvent("load", E.onloadInit, false)
    },
    onloadInit: function() {
        if (arguments.callee.done) {
            return
        }
        for (var C = 0; C < ContentFlowGlobal.loadAddOns.length; C++) {
            var A = ContentFlowGlobal.loadAddOns[C];
            if (!ContentFlowGlobal.AddOns[A]) {
                var G = ContentFlowGlobal;
                window.setTimeout(G.onloadInit, 10);
                return
            }
        }
        arguments.callee.done = true;
        if (window.Element && Element.implement && document.all && !window.opera) {
            for (var H in window.CFElement.prototype) {
                if (!window.Element.prototype[H]) {
                    var F = {};
                    F[H] = window.CFElement.prototype[H];
                    Element.implement(F)
                }
            }
        }
        for (var C = 0; C < ContentFlowGlobal.Flows.length; C++) {
            ContentFlowGlobal.Flows[C].init()
        }
        var D = document.getElementsByTagName("div");
        DIVS: for (var C = 0; C < D.length; C++) {
            if (D[C].className.match(/\bContentFlow\b/)) {
                for (var B = 0; B < ContentFlowGlobal.Flows.length; B++) {
                    if (D[C] == ContentFlowGlobal.Flows[B].Container) {
                        continue DIVS
                    }
                }
                var E = new ContentFlow(D[C], {}, false);
                E.init()
            }
        }
    }
};
ContentFlowGlobal.initPath();
var ContentFlowAddOn = function(B, A, C) {
    if (typeof C == "undefined" || C != false) {
        ContentFlowGlobal.AddOns[B] = this
    }
    this.name = B;
    if (!A) {
        A = {}
    }
    this.methods = A;
    this.conf = {};
    if (this.methods.conf) {
        this.setConfig(this.methods.conf);
        delete this.methods.conf
    }
    this.scriptpath = ContentFlowGlobal.AddOnBaseDir;
    if (A.init) {
        var D = A.init.bind(this);
        D(this)
    }
};
ContentFlowAddOn.prototype = {
    Browser: ContentFlowGlobal.Browser,
    addScript: ContentFlowGlobal.addScript,
    addScripts: ContentFlowGlobal.addScripts,
    addStylesheet: function(A) {
        if (!A) {
            A = this.scriptpath + "ContentFlowAddOn_" + this.name + ".css"
        }
        ContentFlowGlobal.addStylesheet(A)
    },
    addStylesheets: ContentFlowGlobal.addStylesheets,
    setConfig: function(A) {
        for (var B in A) {
            this.conf[B] = A[B]
        }
    },
    _init: function(A) {
        if (this.methods.ContentFlowConf) {
            A.setConfig(this.methods.ContentFlowConf)
        }
    }
};
var ContentFlowGUIElement = function(A, B) {
    B.setDimensions = function() {
        this.dimensions = this.getDimensions();
        this.center = {
            x: this.dimensions.width / 2,
            y: this.dimensions.height / 2
        };
        this.position = this.findPos()
    };
    B.addObserver = function(D, E) {
        var C = this.eventMethod = E.bind(A);
        this.observedEvent = D;
        this.addEvent(D, C, false)
    };
    B.makeDraggable = function(E, D, F) {
        this.stopDrag = function(H) {
            if (!H) {
                var H = window.event
            }
            if (this.Browser.iPhone) {
                window.removeEvent("touchemove", E, false);
                if (!this.ontochmove) {
                    var G = H.target;
                    if (G.firstChild) {
                        G = G.firstChild
                    }
                    var I = document.createEvent("MouseEvents");
                    I.initEvent("click", true, true);
                    G.dispatchEvent(I)
                }
            } else {
                window.removeEvent("mousemove", E, false)
            }
            F(H)
        }.bind(this);
        this.initDrag = function(G) {
            if (!G) {
                var G = window.event
            }
            var H = G;
            if (G.touches) {
                H = G.touches[0]
            }
            this.mouseX = H.clientX;
            this.mouseY = H.clientY;
            D(G)
        }.bind(this);
        this.startDrag = function(I) {
            if (!I) {
                var I = window.event
            }
            var G = this.stopDrag;
            if (this.Browser.iPhone) {
                var H = this;
                H.ontouchmove = false;
                window.addEvent("touchmove", function(J) {
                    H.ontouchmove = true;
                    E(J)
                }, false);
                I.preventDefault();
                window.addEvent("touchend", G, false)
            } else {
                window.addEvent("mousemove", E, false);
                window.addEvent("mouseup", G, false)
            }
            if (I.preventDefault) {
                I.preventDefault()
            }
        }.bind(this);
        var C = this.startDrag;
        if (this.Browser.iPhone) {
            this.addEventListener("touchstart", C, false)
        } else {
            this.addEvent("mousedown", C, false)
        }
    };
    B.Browser = ContentFlowGlobal.Browser;
    $CF(B).setDimensions();
    return B
};
var ContentFlowItem = function(C, D, E) {
    this.CFobj = C;
    this._activeElement = C.conf.activeElement;
    this.pre = null;
    this.next = null;
    this.clickItem = function(M) {
        if (!M) {
            var M = window.event
        }
        var K = M.target ? M.target : M.srcElement;
        var J = K.itemIndex ? K.itemIndex : K.parentNode.itemIndex;
        var L = this.items[J];
        if (this._activeItem == L) {
            this.conf.onclickActiveItem(L)
        } else {
            if (this.conf.onclickInactiveItem(L) != false) {
                this.moveToIndex(J)
            }
        }
    }.bind(C), this.setIndex = function(J) {
        this.index = J;
        this.element.itemIndex = J
    };
    this.getIndex = function() {
        return this.index
    };
    if ($CF(D).nodeName == "IMG") {
        var A = document.createElement("div");
        A.className = "item";
        var I = D.parentNode.replaceChild(A, D);
        I.className = "content";
        A.appendChild(I);
        if (D.title) {
            var F = document.createElement("div");
            F.className = "caption";
            F.innerHTML = D.title;
            A.appendChild(F)
        }
        D = A
    }
    this.element = $CF(D);
    this.item = D;
    if (typeof E != "undefined") {
        this.setIndex(E)
    }
    this.content = this.element.getChildrenByClassName("content")[0];
    this.caption = this.element.getChildrenByClassName("caption")[0];
    this.label = this.element.getChildrenByClassName("label")[0];
    if (this.content.nodeName == "IMG") {
        C._imagesToLoad++;
        var B = function() {
            C._imagesToLoad--;
            this.image = this.content;
            this.setImageFormat(this.image);
            if (C.conf.reflectionHeight > 0) {
                this.addReflection()
            }
            this.initClick();
            C._addItemCueProcess(true)
        }.bind(this);
        if (this.content.complete && this.content.width > 0) {
            window.setTimeout(B, 100)
        } else {
            if (this.Browser.IE && !this.content.onload) {
                var H = this;
                var G = window.setInterval(function() {
                    if (H.content.complete && H.content.width > 0) {
                        window.clearInterval(G);
                        B()
                    }
                }, 10)
            } else {
                this.content.onload = window.setTimeout(B, 100)
            }
        }
    } else {
        this.initClick();
        C._addItemCueProcess(true)
    }
};
ContentFlowItem.prototype = {
    Browser: ContentFlowGlobal.Browser,
    makeActive: function() {
        this.element.addClassName("active");
        this.CFobj.conf.onMakeActive(this)
    },
    makeInactive: function() {
        this.element.removeClassName("active");
        this.CFobj.conf.onMakeInactive(this)
    },
    initClick: function() {
        var A = this.clickItem;
        this[this._activeElement].addEvent("click", A, false)
    },
    setImageFormat: function(A) {
        if (this.Browser.IE6 || this.Browser.IE7) {
            A.style.width = "auto"
        }
        A.origProportion = A.width / A.height;
        A.setAttribute("origProportion", A.width / A.height);
        if (this.Browser.IE6 || this.Browser.IE7) {
            A.style.width = ""
        }
        if (A.origProportion <= 1) {
            A.addClassName("portray")
        } else {
            A.addClassName("landscape")
        }
    },
    addReflection: function() {
        var F = this.CFobj;
        var S;
        var K = this.content;
        if (this.Browser.IE) {
            var Q = "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
            if (F._reflectionColorRGB) {
                if (F.conf.reflectionColor == "transparent") {
                    var N = S = this.reflection = document.createElement("img");
                    S.src = K.src
                } else {
                    S = this.reflection = document.createElement("div");
                    var N = document.createElement("img");
                    N.src = K.src;
                    S.width = N.width;
                    S.height = N.height;
                    N.style.width = "100%";
                    N.style.height = "100%";
                    var M = F._reflectionColorRGB;
                    S.style.backgroundColor = "#" + M.hR + M.hG + M.hB;
                    S.appendChild(N)
                }
                Q += " progid:DXImageTransform.Microsoft.Alpha(opacity=0, finishOpacity=50, style=1, finishX=0, startY=" + F.conf.reflectionHeight * 100 + " finishY=0)"
            } else {
                var N = S = this.reflection = document.createElement("img");
                S.src = K.src
            }
            Q += " progid:DXImageTransform.Microsoft.Matrix(M11=1, M12=0, M21=0, M22=" + 1 / F.conf.reflectionHeight + ")";
            if (ContentFlowGlobal.Browser.IE6) {
                if (K.src.match(/\.png$/)) {
                    K.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + K.src + "', sizingMethod=scale )";
                    K.filterString = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + K.src + "', sizingMethod=scale )";
                    Q += " progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + K.src + "', sizingMethod=scale )";
                    K.origSrc = K.src;
                    K.src = "img/blank.gif";
                    N.src = "img/blank.gif"
                }
            }
            S.filterString = Q;
            N.style.filter = Q
        } else {
            if (F._reflectionWithinImage) {
                var D = this.canvas = $CF(document.createElement("canvas"))
            } else {
                var D = S = this.reflection = document.createElement("canvas")
            }
            if (D.getContext) {
                if (F._reflectionWithinImage) {
                    for (var R = 0; R < K.attributes.length; R++) {
                        D.setAttributeNode(K.attributes[R].cloneNode(true))
                    }
                }
                var C = D.getContext("2d");
                var P = F.maxHeight;
                var I = F._scaleImageSize(this, {
                    width: P,
                    height: P
                }, P);
                var L = I.width;
                var J = I.height;
                if (F._reflectionWithinImage) {
                    D.width = L;
                    D.height = J;
                    this.setImageFormat(D);
                    D.height = J * (1 + F.conf.reflectionHeight + F.conf.reflectionGap)
                } else {
                    D.width = L;
                    D.height = J * F.conf.reflectionHeight
                }
                C.save();
                if (F._reflectionWithinImage) {
                    C.drawImage(K, 0, 0, L, J)
                }
                if (F._reflectionWithinImage) {
                    var O = J * (1 + F.conf.reflectionGap / 2) * 2
                } else {
                    var O = K.height
                }
                O -= 1;
                C.translate(0, O);
                C.scale(1, -1);
                C.drawImage(K, 0, 0, L, J);
                C.restore();
                if (F._reflectionColorRGB) {
                    var B = C.createLinearGradient(0, 0, 0, D.height);
                    var E = [0, 0.5, 1];
                    if (F._reflectionColor == "transparent") {
                        C.globalCompositeOperation = "destination-in";
                        E = [1, 0.5, 0]
                    }
                    var G = F._reflectionColorRGB.iR;
                    var H = F._reflectionColorRGB.iG;
                    var A = F._reflectionColorRGB.iB;
                    if (F._reflectionWithinImage) {
                        B.addColorStop(0, "rgba(" + G + "," + H + "," + A + "," + E[0] + ")");
                        B.addColorStop(J / D.height, "rgba(" + G + "," + H + "," + A + "," + E[0] + ")");
                        B.addColorStop(J / D.height, "rgba(" + G + "," + H + "," + A + "," + E[1] + ")")
                    } else {
                        B.addColorStop(0, "rgba(" + G + "," + H + "," + A + "," + E[1] + ")")
                    }
                    B.addColorStop(1, "rgba(" + G + "," + H + "," + A + "," + E[2] + ")");
                    C.fillStyle = B;
                    C.fillRect(0, 0, D.width, D.height)
                }
                if (F._reflectionWithinImage) {
                    K.parentNode.replaceChild(D, K);
                    this.content = D;
                    this.origContent = D;
                    delete this.image
                }
            } else {
                F._reflectionWithinImage = false;
                delete this.reflection
            }
        }
        if (S) {
            S.className = "reflection";
            this.element.appendChild(S);
            if (this.caption) {
                this.element.appendChild(this.caption)
            }
        }
    }
};
var ContentFlow = function(A, B) {
    if (A) {
        ContentFlowGlobal.Flows.push(this);
        this.Container = A;
        this._userConf = B ? B : {};
        this.conf = {};
        this._loadedAddOns = new Array()
    } else {
        throw ("ContentFlow ERROR: No flow container node or id given")
    }
};
ContentFlow.prototype = {
    _imagesToLoad: 0,
    _activeItem: 0,
    _currentPosition: 0,
    _targetPosition: 0,
    _stepLock: false,
    _millisecondsPerStep: 40,
    _reflectionWithinImage: true,
    Browser: ContentFlowGlobal.Browser,
    _defaultConf: {
        useAddOns: "all",
        biggestItemPos: 0,
        loadingTimeout: 30000,
        activeElement: "content",
        maxItemHeight: 0,
        scaleFactor: 1,
        scaleFactorLandscape: 1.33,
        scaleFactorPortrait: 1,
        fixItemSize: false,
        relativeItemPosition: "top center",
        circularFlow: true,
        verticalFlow: false,
        visibleItems: -1,
        endOpacity: 1,
        startItem: "center",
        scrollInFrom: "pre",
        flowSpeedFactor: 1,
        flowDragFriction: 1,
        scrollWheelSpeed: 1,
        keys: {
            13: function() {
                this.conf.onclickActiveItem(this._activeItem)
            },
            37: function() {
                this.moveTo("pre")
            },
            38: function() {
                this.moveTo("visibleNext")
            },
            39: function() {
                this.moveTo("next")
            },
            40: function() {
                this.moveTo("visiblePre")
            }
        },
        reflectionColor: "transparent",
        reflectionHeight: 0.5,
        reflectionGap: 0,
        onInit: function() {},
        onclickInactiveItem: function(A) {},
        onclickActiveItem: function(B) {
            var A, C;
            if (A = B.content.getAttribute("href")) {
                C = B.content.getAttribute("target")
            } else {
                if (A = B.element.getAttribute("href")) {
                    C = B.element.getAttribute("target")
                } else {
                    if (A = B.content.getAttribute("src")) {
                        C = B.content.getAttribute("target")
                    }
                }
            }
            if (A) {
                if (C) {
                    window.open(A, C).focus()
                } else {
                    window.location.href = A
                }
            }
        },
        onMakeInactive: function(A) {},
        onMakeActive: function(A) {},
        onReachTarget: function(A) {},
        onMoveTo: function(A) {},
        onDrawItem: function(A) {},
        onclickPreButton: function(A) {
            this.moveToIndex("pre");
            return Event.stop(A)
        },
        onclickNextButton: function(A) {
            this.moveToIndex("next");
            return Event.stop(A)
        },
        calcStepWidth: function(D) {
            var C = this.conf.visibleItems;
            var A = this.items.length;
            A = A == 0 ? 1 : A;
            if (Math.abs(D) > C) {
                if (D > 0) {
                    var B = D - C
                } else {
                    var B = D + C
                }
            } else {
                if (C >= this.items.length) {
                    var B = D / A
                } else {
                    var B = D * (C / A)
                }
            }
            return B
        },
        calcSize: function(D) {
            var B = D.relativePosition;
            var C = 1 / (Math.abs(B) + 1);
            var A = C;
            return {
                width: A,
                height: C
            }
        },
        calcCoordinates: function(C) {
            var B = C.relativePosition;
            var E = this.conf.visibleItems;
            var D = 1 - 1 / Math.exp(Math.abs(B) * 0.75);
            var A = C.side * E / (E + 1) * D;
            var F = 1;
            return {
                x: A,
                y: F
            }
        },
        calcZIndex: function(A) {
            return -Math.abs(A.relativePositionNormed)
        },
        calcFontSize: function(A) {
            return A.size.height
        },
        calcOpacity: function(A) {
            return Math.max(1 - ((1 - this.conf.endOpacity) * Math.sqrt(Math.abs(A.relativePositionNormed))), this.conf.endOpacity)
        }
    },
    _checkIndex: function(A) {
        A = Math.max(A, 0);
        A = Math.min(A, this.itemsLastIndex);
        return A
    },
    _setLastIndex: function() {
        this.itemsLastIndex = this.items.length - 1
    },
    _getItemByIndex: function(A) {
        return this.items[this._checkIndex(A)]
    },
    _getItemByPosition: function(A) {
        return this._getItemByIndex(this._getIndexByPosition(A))
    },
    _getPositionByIndex: function(B) {
        if (!this.conf.circularFlow) {
            return this._checkIndex(B)
        }
        var A = this._getIndexByPosition(this._currentPosition);
        var C = B - A;
        if (Math.abs(C) > C + this.items.length) {
            C += this.items.length
        } else {
            if (Math.abs(C) > (Math.abs(C - this.items.length))) {
                C -= this.items.length
            }
        }
        return this._currentPosition + C
    },
    _getIndexByPosition: function(A) {
        if (A < 0) {
            var C = 0
        } else {
            var C = 1
        }
        var B = (Math.round(A) + C) % this.items.length;
        if (B > 0) {
            B -= C
        } else {
            if (B < 0) {
                B += this.items.length - C
            } else {
                if (A < 0) {
                    B = 0
                } else {
                    B = this.items.length - 1
                }
            }
        }
        return B
    },
    _getIndexByKeyWord: function(B, D, A) {
        if (D) {
            var C = D
        } else {
            if (this._activeItem) {
                var C = this._activeItem.index
            } else {
                var C = 0
            }
        }
        if (isNaN(B)) {
            switch (B) {
                case "first":
                case "start":
                    C = 0;
                    break;
                case "last":
                case "end":
                    C = this.itemsLastIndex;
                    break;
                case "middle":
                case "center":
                    C = Math.round(this.itemsLastIndex / 2);
                    break;
                case "right":
                case "next":
                    C += 1;
                    break;
                case "left":
                case "pre":
                case "previous":
                    C -= 1;
                    break;
                case "visible":
                case "visiblePre":
                case "visibleLeft":
                    C -= this.conf.visibleItems;
                    break;
                case "visibleNext":
                case "visibleRight":
                    C += this.conf.visibleItems;
                    break;
                default:
                    C = C
            }
        } else {
            C = B
        }
        if (A != false) {
            C = this._checkIndex(C)
        }
        return C
    },
    _setCaptionLabel: function(A) {
        if (this.Position && !this.Slider.locked) {
            this.Position.setLabel(A)
        }
        this._setGlobalCaption()
    },
    getAddOnConf: function(A) {
        return ContentFlowGlobal.getAddOnConf(A)
    },
    setAddOnConf: function(B, A) {
        ContentFlowGlobal.setAddOnConf(B, A)
    },
    init: function() {
        if (this.isInit) {
            return
        }
        this._init()
    },
    setConfig: function(A) {
        if (!A) {
            return
        }
        var E = this._defaultConf;
        for (var F in A) {
            if (E[F] == "undefined") {
                continue
            }
            switch (F) {
                case "scrollInFrom":
                case "startItem":
                    if (typeof(A[F]) == "number" || typeof(A[F]) == "string") {
                        this.conf[F] = A[F]
                    }
                    break;
                default:
                    if (typeof(E[F] == A[F])) {
                        if (typeof A[F] == "function") {
                            this.conf[F] = A[F].bind(this)
                        } else {
                            this.conf[F] = A[F]
                        }
                    }
            }
        }
        switch (this.conf.reflectionColor) {
            case this.conf.reflectionColor.search(/#[0-9a-fA-F]{6}/) >= 0 ? this.conf.reflectionColor:
                this.conf.reflectionColor + "x": this._reflectionColorRGB = {
                    hR: this.conf.reflectionColor.slice(1, 3),
                    hG: this.conf.reflectionColor.slice(3, 5),
                    hB: this.conf.reflectionColor.slice(5, 7),
                    iR: parseInt(this.conf.reflectionColor.slice(1, 3), 16),
                    iG: parseInt(this.conf.reflectionColor.slice(3, 5), 16),
                    iB: parseInt(this.conf.reflectionColor.slice(5, 7), 16)
                };
                break;
            case "none":
            case "transparent":
            default:
                this._reflectionColor = "transparent";
                this._reflectionColorRGB = {
                    hR: 0,
                    hG: 0,
                    hB: 0,
                    iR: 0,
                    iG: 0,
                    iB: 0
                };
                break
        }
        if (this.items) {
            if (this.conf.visibleItems < 0) {
                this.conf.visibleItems = Math.round(Math.sqrt(this.items.length))
            }
            this.conf.visibleItems = Math.min(this.conf.visibleItems, this.items.length - 1)
        }
        if (this.conf.relativeItemPosition) {
            var C = {
                x: {
                    left: function(J) {
                        return -1
                    },
                    center: function(J) {
                        return 0
                    },
                    right: function(J) {
                        return 1
                    }
                },
                y: {
                    top: function(J) {
                        return -1
                    },
                    center: function(J) {
                        return 0
                    },
                    bottom: function(J) {
                        return 1
                    }
                }
            };
            var I = this.conf.relativeItemPosition;
            I = I.replace(/above/, "top").replace(/below/, "bottom");
            var H, G = null;
            H = I.match(/left|right/);
            G = I.match(/top|bottom/);
            c = I.match(/center/);
            if (!H) {
                if (c) {
                    H = "center"
                } else {
                    H = "center"
                }
            }
            if (!G) {
                if (c) {
                    G = "center"
                } else {
                    G = "top"
                }
            }
            var D = C.x[H];
            var B = C.y[G];
            this.conf.calcRelativeItemPosition = function(K) {
                var J = D(K.size);
                var L = B(K.size);
                return {
                    x: J,
                    y: L
                }
            };
            this.conf.relativeItemPosition = null
        }
        if (this._reflectionType && this._reflectionType != "clientside") {
            this.conf.reflectionHeight = 0
        }
    },
    getItem: function(A) {
        return this.items[this._checkIndex(Math.round(A))]
    },
    getActiveItem: function() {
        return this._activeItem
    },
    getNumberOfItems: function() {
        return this.items.length
    },
    resize: function() {
        this._initSizes();
        this._initStep()
    },
    moveToPosition: function(B, A) {
        if (!this.conf.circularFlow) {
            B = this._checkIndex(B)
        }
        this._targetPosition = B;
        this.conf.onMoveTo(this._getItemByPosition(B));
        this._initStep(false, A)
    },
    moveToIndex: function(A) {
        this._targetPosition = Math.round(this._getPositionByIndex(this._getIndexByKeyWord(A, this._activeItem.index, !this.conf.circularFlow)));
        this.conf.onMoveTo(this._getItemByPosition(this._targetPosition));
        this._initStep()
    },
    moveToItem: function(B) {
        var A;
        if (B.itemIndex) {
            A = B.itemIndex
        } else {
            A = B.index
        }
        this.moveToIndex(A)
    },
    moveTo: function(A) {
        if (typeof A == "object") {
            this.moveToItem(A)
        } else {
            if (isNaN(A) || (A == Math.floor(A) && A < this.items.length)) {
                this.moveToIndex(A)
            } else {
                this.moveToPosition(A)
            }
        }
    },
    _addItemCue: [],
    _addItemCueProcess: function(C) {
        var D = this._addItemCue;
        if (C == true) {
            D.shift()
        }
        if (D.length > 0 && !D[0].p) {
            D[0].p = true;
            var A = this;
            var B = D.length > 5 ? 1 : 40;
            window.setTimeout(function() {
                A._addItem(D[0].el, D[0].i)
            }, B)
        }
    },
    addItem: function(B, A) {
        this._addItemCue.push({
            el: B,
            i: A,
            p: false
        });
        if (this._addItemCue.length == 1) {
            this._addItemCueProcess()
        }
    },
    _addItem: function(C, A) {
        if (typeof A == "string") {
            switch (A) {
                case "first":
                case "start":
                    A = 0;
                    break;
                case "last":
                case "end":
                    A = isNaN(this.itemsLastIndex) ? 0 : this.itemsLastIndex;
                    A += 1;
                    break;
                default:
                    A = this._getIndexByKeyWord(A)
            }
        }
        A = Math.max(A, 0);
        A = Math.min(A, this.itemsLastIndex + 1);
        A = isNaN(A) ? 0 : A;
        this.Flow.appendChild(C);
        var D = new ContentFlowItem(this, C, A);
        if (this.items.length == 0) {
            this.resize();
            if (this.conf.circularFlow) {
                D.pre = D;
                D.next = D
            }
        } else {
            if (A == this.itemsLastIndex + 1) {
                D.pre = this.items[this.itemsLastIndex];
                D.next = D.pre.next
            } else {
                D.next = this.items[A];
                D.pre = D.next.pre
            }
            if (D.pre) {
                D.pre.next = D
            }
            if (D.next) {
                D.next.pre = D
            }
        }
        this.items.splice(A, 0, D);
        for (var B = A; B < this.items.length; B++) {
            this.items[B].setIndex(B)
        }
        this._setLastIndex();
        if (this.conf.origVisibleItems < 0) {
            this.conf.visibleItems = Math.round(Math.sqrt(this.items.length))
        }
        this.conf.visibleItems = Math.min(this.conf.visibleItems, this.items.length - 1);
        if (Math.round(this._getPositionByIndex(A)) <= Math.round(this._targetPosition)) {
            this._targetPosition++;
            if (!this.conf.circularFlow) {
                this._targetPosition = Math.min(this._targetPosition, this.itemsLastIndex)
            }
        }
        if (this._getPositionByIndex(A) <= this._currentPosition) {
            this._currentPosition++;
            if (!this.conf.circularFlow) {
                this._currentPosition = Math.min(this._currentPosition, this.itemsLastIndex)
            }
        }
        var E = this;
        window.setTimeout(function() {
            if (E.items.length == 1) {
                E._currentPosition = -0.01;
                E._targetPosition = 0;
                E.resize()
            } else {
                E._initStep()
            }
        }, 100);
        return A
    },
    rmItem: function(A) {
        if (A == "undefined") {
            A = this._activeItem.index
        }
        A = this._getIndexByKeyWord(A);
        if (!this.items[A]) {
            return null
        }
        var D = this.items[A];
        if (D.pre) {
            D.pre.next = D.next
        }
        if (D.next) {
            D.next.pre = D.pre
        }
        this.items.splice(A, 1);
        for (var B = A; B < this.items.length; B++) {
            this.items[B].setIndex(B)
        }
        this._setLastIndex();
        if (Math.round(this._getPositionByIndex(A)) < Math.round(this._targetPosition)) {
            this._targetPosition--;
            if (!this.conf.circularFlow) {
                this._targetPosition = this._checkIndex(this._targetPosition)
            }
        }
        if (this._getPositionByIndex(A) < this._currentPosition) {
            this._currentPosition--;
            if (!this.conf.circularFlow) {
                this._currentPosition = this._checkIndex(this._currentPosition)
            }
        }
        this._activeItem = this._getItemByPosition(this._currentPosition);
        var C = D.element.parentNode.removeChild(D.element);
        var E = this;
        window.setTimeout(function() {
            E._initStep()
        }, 10);
        return C
    },
    _init: function() {
        if (typeof(this.Container) == "string") {
            var B = document.getElementById(this.Container);
            if (B) {
                this.Container = B
            } else {
                throw ("ContentFlow ERROR: No element with id '" + this.Container + "' found!");
                return
            }
        }
        $CF(this.Container).addClassName("ContentFlow");
        var A = $CF(this.Container).getChildrenByClassName("flow")[0];
        if (!A) {
            throw ("ContentFlow ERROR: No element with class'flow' found!");
            return
        }
        this.Flow = new ContentFlowGUIElement(this, A);
        var M = this.Container.getChildrenByClassName("scrollbar")[0];
        if (M) {
            this.Scrollbar = new ContentFlowGUIElement(this, M);
            var F = this.Scrollbar.getChildrenByClassName("slider")[0];
            if (F) {
                this.Slider = new ContentFlowGUIElement(this, F);
                var H = this.Slider.getChildrenByClassName("position")[0];
                if (H) {
                    this.Position = new ContentFlowGUIElement(this, H)
                }
            }
        }
        this.setConfig(this._defaultConf);
        this._initAddOns();
        this.setConfig(this._userConf);
        this._initSizes();
        var J = this.Flow.getChildrenByClassName("item");
        this.items = new Array();
        for (var G = 0; G < J.length; G++) {
            var K = this.items[G] = new ContentFlowItem(this, J[G], G);
            if (G > 0) {
                K.pre = this.items[G - 1];
                K.pre.next = K
            }
        }
        this._setLastIndex();
        if (this.conf.circularFlow && this.items.length > 0) {
            var L = this.items[0];
            L.pre = this.items[this.items.length - 1];
            L.pre.next = L
        }
        this._initGUI();
        if (this._activeElement != "content") {
            this._activeElement = "element"
        }
        this.conf.origVisibleItems = this.conf.visibleItems;
        if (this.conf.visibleItems < 0) {
            this.conf.visibleItems = Math.round(Math.sqrt(this.items.length))
        }
        this.conf.visibleItems = Math.min(this.conf.visibleItems, this.items.length - 1);
        this._targetPosition = this._getIndexByKeyWord(this.conf.startItem, 0);
        var I = this._getIndexByKeyWord(this.conf.scrollInFrom, this._targetPosition);
        switch (this.conf.scrollInFrom) {
            case "next":
            case "right":
                I -= 0.5;
                break;
            case "pre":
            case "previous":
            case "left":
                I += 0.5;
                break
        }
        this._currentPosition = I;
        var E = new Date();
        var D = this;
        var C = window.setInterval(function() {
            if (D._imagesToLoad == 0 || new Date() - E > D._loadingTimeout) {
                clearInterval(C);
                D._activeItem = D.getItem(D._currentPosition);
                if (D._activeItem) {
                    D._activeItem.makeActive();
                    D._setCaptionLabel(D._activeItem.index)
                }
                D.Flow.style.visibility = "visible";
                if (D.loadIndicator) {
                    D.loadIndicator.style.display = "none"
                }
                if (D.Scrollbar) {
                    D.Scrollbar.style.visibility = "visible"
                }
                D.resize();
                for (var O = 0; O < D._loadedAddOns.length; O++) {
                    var N = ContentFlowGlobal.AddOns[D._loadedAddOns[O]];
                    if (N.methods.afterContentFlowInit) {
                        N.methods.afterContentFlowInit(D)
                    }
                }
                D.conf.onInit()
            }
        }, 10);
        this.isInit = true
    },
    _initAddOns: function() {
        var C = [];
        if (this._userConf.useAddOns) {
            if (typeof this._userConf.useAddOns == "string") {
                C = this._userConf.useAddOns.split(" ")
            } else {
                if (typeof this._userConf.useAddOns == "array") {
                    C = this._userConf.useAddOns
                }
            }
        } else {
            if (this.Container.getAttribute("useAddOns")) {
                C = this.Container.getAttribute("useAddOns").split(" ")
            } else {
                C = this.conf.useAddOns.split(" ")
            }
        }
        for (var B = 0; B < C.length; B++) {
            if (C[B] == "none") {
                C = new Array();
                break
            } else {
                if (C[B] == "all") {
                    C = new Array();
                    for (var A in ContentFlowGlobal.AddOns) {
                        C.push(A)
                    }
                    break
                }
            }
        }
        for (var B = 0; B < C.length; B++) {
            var A = ContentFlowGlobal.AddOns[C[B]];
            if (A) {
                this._loadedAddOns.push(C[B]);
                A._init(this);
                this.Container.addClassName("ContentFlowAddOn_" + A.name);
                if (A.methods.onloadInit) {
                    A.methods.onloadInit(this)
                }
            }
        }
    },
    _initGUI: function() {
        var C = this.resize.bind(this);
        window.addEvent("resize", C, false);
        var K = this.Container.getElementsByTagName("div");
        for (var G = 0; G < K.length; G++) {
            if ($CF(K[G]).hasClassName("preButton")) {
                var F = K[G];
                var A = this.conf.onclickPreButton;
                F.addEvent("click", A, false)
            } else {
                if (K[G].hasClassName("nextButton")) {
                    var I = K[G];
                    var A = this.conf.onclickNextButton;
                    I.addEvent("click", A, false)
                }
            }
        }
        if (this.conf.scrollWheelSpeed != 0) {
            var J = this._wheel.bind(this);
            if (window.addEventListener) {
                this.Container.addEventListener("DOMMouseScroll", J, false)
            }
            this.Container.onmousewheel = J
        }
        var L = this._keyStroke.bind(this);
        if (this.conf.keys && !this.Browser.iPhone) {
            if (document.addEventListener) {
                if (!this.Browser.Opera) {
                    var D = document.createElement("div");
                    D.addClassName("mouseoverCheckElement");
                    this.Container.appendChild(D);
                    if (this.Browser.WebKit) {
                        document.body.addEvent("keydown", function(O) {
                            if (D.offsetLeft > 0) {
                                L(O)
                            }
                        })
                    } else {
                        window.addEvent("keydown", function(O) {
                            if (D.offsetLeft > 0) {
                                L(O)
                            }
                        })
                    }
                } else {
                    this.Container.addEvent("keydown", L)
                }
            } else {
                this.Container.onkeydown = L
            }
        }
        if (this.conf.flowDragFriction > 0) {
            var E = function(R) {
                var U = R;
                if (R.touches) {
                    U = R.touches[0]
                }
                var Q = U.clientX;
                var P = U.clientY;
                if (this.conf.verticalFlow) {
                    var V = P - this.Flow.mouseY;
                    var T = this.Flow.dimensions.height
                } else {
                    var V = Q - this.Flow.mouseX;
                    var T = this.Flow.dimensions.width
                }
                var O = (V / T) * (2 * this.conf.visibleItems + 1);
                var S = this._currentPosition - O * 2 * this.conf.visibleItems / this.conf.flowDragFriction;
                this.Flow.mouseX = Q;
                this.Flow.mouseY = P;
                this.moveToPosition(S, true)
            }.bind(this);
            var N = function() {};
            var H = function(P) {
                var O = Math.round(this._targetPosition);
                if (Math.abs(O - this._currentPosition) > 0.001) {
                    this.moveToPosition(O)
                }
            }.bind(this);
            this.Flow.makeDraggable(E, N, H)
        }
        if (this.Scrollbar) {
            var M = function(R) {
                if (!R) {
                    var R = window.event
                }
                if (!this.Scrollbar.clickLocked) {
                    var Q = R.clientX;
                    var P = Q - this.Scrollbar.position.left;
                    var O = Math.round(P / this.Scrollbar.dimensions.width * this.itemsLastIndex);
                    this.moveToIndex(O)
                } else {
                    this.Scrollbar.clickLocked = false
                }
            }.bind(this);
            this.Scrollbar.addObserver("click", M)
        }
        if (this.Slider) {
            if (this.Browser.IE6) {
                var B = document.createElement("div");
                B.className = "virtualSlider";
                this.Slider.appendChild(B)
            }
            this.Slider.setPosition = function(O) {
                O = O - Math.floor(O) + this._getIndexByPosition(Math.floor(O));
                if (Math.round(O) < 0) {
                    O = this.itemsLastIndex
                } else {
                    if (O <= 0) {
                        O = 0
                    } else {
                        if (Math.round(O) > this.itemsLastIndex) {
                            O = 0
                        } else {
                            if (O >= this.itemsLastIndex) {
                                O = this.itemsLastIndex
                            }
                        }
                    }
                }
                if (this.items.length > 1) {
                    var P = (O / this.itemsLastIndex) * this.Scrollbar.dimensions.width
                } else {
                    var P = 0.5 * this.Scrollbar.dimensions.width
                }
                this.Slider.style.left = P - this.Slider.center.x + "px";
                this.Slider.style.top = this.Scrollbar.center.y - this.Slider.center.y + "px"
            }.bind(this);
            var N = function(O) {
                this.Scrollbar.clickLocked = true
            }.bind(this);
            var E = function(P) {
                var Q = P;
                if (P.touches) {
                    Q = P.touches[0]
                }
                var O = this._checkIndex((Q.clientX - this.Scrollbar.position.left) / this.Scrollbar.dimensions.width * this.itemsLastIndex);
                this._targetPosition = this._getPositionByIndex(O);
                this.Slider.setPosition(O);
                if (this.Position) {
                    this.Position.setLabel(O)
                }
                this._initStep(true, true)
            }.bind(this);
            var H = function(O) {
                this._targetPosition = Math.round(this._targetPosition);
                this.conf.onMoveTo(this._getItemByPosition(this._targetPosition));
                this._initStep(true)
            }.bind(this);
            this.Slider.makeDraggable(E, N, H)
        }
        if (this.Position) {
            this.Position.setLabel = function(O) {
                O = this._checkIndex(Math.round(O));
                if (this.items && this.items[O].label) {
                    this.Position.innerHTML = this.items[O].label.innerHTML
                } else {
                    this.Position.innerHTML = O + 1
                }
            }.bind(this)
        }
        this.globalCaption = this.Container.getChildrenByClassName("globalCaption")[0];
        this.loadIndicator = this.Container.getChildrenByClassName("loadIndicator")[0]
    },
    _initSizes: function(A) {
        this._initMaxHeight();
        var E = this._initScrollbarSize();
        if (!this.conf.verticalFlow && this.Container.style.height && this.Container.style.height != "auto") {
            this.maxHeight -= E
        }
        if (!this._activeItem) {
            return
        }
        var D = this._findBiggestItem();
        var F = this.Flow.findPos();
        if (this.conf.verticalFlow) {
            this.Flow.style.width = D.width.width + "px";
            this.Flow.style.height = 3 * D.width.width * (1 + this.conf.reflectionHeight + this.conf.reflectionGap) + "px"
        } else {
            this.Flow.style.height = D.height.height + (D.height.top - F.top) + "px"
        }
        var C = this.conf.verticalFlow ? D.width.width : D.height.height;
        var B = C / (1 + this.conf.reflectionHeight + this.conf.reflectionGap);
        this.Flow.style.marginBottom = -(C - B) + "px";
        this.Flow.dimensions = this.Flow.getDimensions();
        if (!this.Browser.IE6) {
            if (this.conf.verticalFlow && this.Container.clientWidth < this.Flow.dimensions.width) {} else {
                if (this.Container.clientHeight < this.Flow.dimensions.height) {
                    this.Container.style.height = this.Flow.dimensions.height + "px"
                }
            }
        }
        if (this.conf.verticalFlow) {
            this.Flow.center = {
                x: this.Flow.dimensions.height / 2,
                y: D.width.width / 2
            }
        } else {
            this.Flow.center = {
                x: this.Flow.dimensions.width / 2,
                y: D.height.height / 2
            }
        }
    },
    _initScrollbarSize: function() {
        var C;
        var I;
        var F;
        if (C = this.Scrollbar) {
            C.setDimensions();
            var B = C.dimensions.height;
            if (I = this.Slider) {
                I.setDimensions();
                B += I.dimensions.height;
                if (F = this.Position) {
                    var K = F.innerHTML;
                    var G = maxW = 0;
                    F.style.width = "auto";
                    if (this.items) {
                        for (var D = 0; D < this.items.length; D++) {
                            var J = this.items[D];
                            if (J.label) {
                                F.innerHTML = J.label.innerHTML
                            } else {
                                F.innerHTML = J.index
                            }
                            var E = F.clientHeight;
                            var H = F.clientWidth;
                            if (E > G) {
                                G = E
                            }
                            if (H > maxW) {
                                maxW = H
                            }
                        }
                    } else {
                        F.innerHTML = "&nbsp;";
                        G = F.clientHeight;
                        maxW = F.clientWidth
                    }
                    F.innerHTML = K;
                    F.setDimensions();
                    F.style.width = maxW + "px";
                    F.style.left = (I.dimensions.width - maxW) / 2 + "px";
                    var A = F.position.top - I.position.top;
                    if (A > 0) {
                        A += -C.dimensions.height + G;
                        C.style.marginBottom = A + "px"
                    } else {
                        A *= -1;
                        C.style.marginTop = A + "px"
                    }
                    B += A
                }
            }
        } else {
            B = 0
        }
        return B
    },
    _initMaxHeight: function() {
        if (this.conf.verticalFlow) {
            var G = screen.width / screen.height;
            var D = this.Container.style.width;
            var E = this.Container.clientWidth;
            var C = this.Flow.style.width;
            var F = this.Flow.clientWidth;
            var A = this.Flow.clientHeight
        } else {
            var G = screen.height / screen.width;
            var D = this.Container.style.height;
            var E = this.Container.clientHeight;
            var C = this.Flow.style.height;
            var F = this.Flow.clientHeight;
            var A = this.Flow.clientWidth
        }
        if (this.ContainerOldDim) {
            D = this.ContainerOldDim
        }
        if (this.FlowOldDim) {
            C = this.FlowOldDim
        }
        this.ContainerOldDim = "auto";
        this.FlowOldDim = "auto";
        if (this.conf.maxItemHeight <= 0) {
            this.maxHeight = A / 3 * G / 1 * this.conf.scaleFactor;
            if (this.conf.verticalFlow && (this.maxHeight == 0 || this.maxHeight > F)) {
                this.maxHeight = F
            }
            if (D && D != "auto") {
                var H = this.conf.verticalFlow ? 0 : this.conf.reflectionGap;
                var B = this.conf.verticalFlow ? 0 : this.conf.reflectionHeight;
                this.maxHeight = E / (this.conf.scaleFactor * (1 + B + H));
                this.ContainerOldDim = D
            } else {
                if (C && C != "auto") {
                    var H = this.conf.verticalFlow ? 0 : this.conf.reflectionGap;
                    this.maxHeight = F / (this.conf.scaleFactor * (1 + this.conf.reflectionHeight + H));
                    this.FlowOldDim = C
                }
            }
        } else {
            this.maxHeight = this.conf.maxItemHeight
        }
    },
    _findBiggestItem: function() {
        var G = this._activeItem;
        var A = G.pre;
        var B = G.next;
        var E = maxFlowSize = {
            width: {
                width: 0,
                left: 0,
                height: 0,
                top: 0,
                item: null,
                rI: 0
            },
            height: {
                width: 0,
                left: 0,
                height: 0,
                top: 0,
                item: null,
                rI: 0
            }
        };
        var F = function(N, J) {
            var M = N.element;
            M.style.display = "block";
            var O = M.findPos();
            var L = M.clientHeight;
            var K = M.clientWidth;
            if (L + O.top >= E.height.height + E.height.top) {
                E.height.height = L;
                E.height.top = O.top;
                E.height.item = N;
                E.height.rI = J
            }
            if (K + O.left >= E.width.width + E.width.left) {
                E.width.width = K;
                E.width.left = O.left;
                E.width.item = N;
                E.width.rI = J
            }
            M.style.display = "none"
        };
        var H = this._currentPosition;
        this._currentPosition = this.conf.visibleItems + 1;
        for (var C = -this.conf.visibleItems; C <= this.conf.visibleItems; C++) {
            G.element.style.display = "none";
            this._positionItem(G, C);
            F(G, C)
        }
        var D = E.height.rI;
        for (var C = 0; C < this.items.length; C++) {
            var I = this.items[C];
            I.element.style.display = "none";
            this._positionItem(I, D);
            F(I, D)
        }
        this._currentPosition = H;
        return E
    },
    _keyStroke: function(A) {
        if (!A) {
            var A = window.event
        }
        if (A.which) {
            var B = A.which
        } else {
            if (A.keyCode) {
                var B = A.keyCode
            }
        }
        if (this.conf.keys[B]) {
            this.conf.keys[B].bind(this)();
            return Event.stop(A)
        } else {
            return true
        }
    },
    _wheel: function(A) {
        if (!A) {
            var A = window.event
        }
        var C = 0;
        if (A.wheelDelta) {
            C = A.wheelDelta / 120
        } else {
            if (A.detail) {
                C = -A.detail / 3
            }
        }
        if (C) {
            var B = this._targetPosition;
            if (C < 0) {
                B += (1 * this.conf.scrollWheelSpeed)
            } else {
                B -= (1 * this.conf.scrollWheelSpeed)
            }
            this.moveToPosition(Math.round(B))
        }
        return Event.stop(A)
    },
    _setGlobalCaption: function() {
        if (this.globalCaption) {
            this.globalCaption.innerHTML = "";
            if (this._activeItem && this._activeItem.caption) {
                this.globalCaption.appendChild(this._activeItem.caption.cloneNode(true))
            }
        }
    },
    _initStep: function(B, A) {
        if (this.Slider) {
            if (B) {
                this.Slider.locked = true
            } else {
                this.Slider.locked = false
            }
        }
        this._holdPos = A == true ? true : false;
        if (!this._stepLock) {
            this._stepLock = true;
            this._step()
        }
    },
    _step: function() {
        var D = this._targetPosition - this._currentPosition;
        var C = Math.abs(D);
        if (C > 0.001) {
            this._currentPosition += this.conf.flowSpeedFactor * this.conf.calcStepWidth(D, C, this.items.length, this.conf.visibleItems);
            var A = this.items[(this._getIndexByPosition(this._currentPosition))];
            if (A && A != this._activeItem) {
                if (this._activeItem) {
                    this._activeItem.makeInactive()
                }
                this._activeItem = A;
                this._activeItem.makeActive();
                this._setCaptionLabel(this._activeItem.index);
                if (Math.abs(this._targetPosition - this._currentPosition) <= 0.5) {
                    this.conf.onReachTarget(this._activeItem)
                }
            }
            this._positionItems();
            var B = this._step.bind(this);
            window.setTimeout(B, this._millisecondsPerStep)
        } else {
            if (!this._holdPos) {
                if (this.Slider) {
                    this.Slider.locked = false
                }
                this._currentPosition = Math.round(this._currentPosition);
                if (this.Position && !this.Slider.locked && this._activeItem) {
                    this._setCaptionLabel(this._activeItem.index)
                }
                this._positionItems();
                this._stepLock = false
            } else {
                this._stepLock = false
            }
        }
        if (this.Slider && !this.Slider.locked) {
            this.Slider.setPosition(this._currentPosition)
        }
    },
    _positionItems: function() {
        if (this._lastStart) {
            var E = this._lastStart;
            while (E) {
                E.element.style.display = "none";
                E = E.next;
                if (E == this._lastStart) {
                    break
                }
                if (E && E.pre == this._lastEnd) {
                    break
                }
            }
        } else {
            this._lastStart = this._activeItem
        }
        if (!this._activeItem) {
            return
        }
        var C = this._activeItem;
        var B = C.pre;
        var D = C.next;
        this._positionItem(C, 0);
        for (var A = 1; A <= this.conf.visibleItems && 2 * A < this.items.length; A++) {
            if (B) {
                this._positionItem(B, -A);
                this._lastStart = B;
                B = B.pre
            }
            if (D) {
                this._positionItem(D, A);
                this._lastEnd = D;
                D = D.next
            }
        }
    },
    _positionItem: function(S, A) {
        var I = this.conf;
        var N = I.verticalFlow;
        var E = S.element.style;
        var L = S.position = this._currentPosition + A;
        var M = S.relativePosition = Math.round(L) - this._currentPosition;
        var Q = S.relativePositionNormed = I.visibleItems > 0 ? M / I.visibleItems : 0;
        var B = M < 0 ? -1 : 1;
        B *= M == 0 ? 0 : 1;
        S.side = B;
        var J = I.calcSize(S);
        J.height = Math.max(J.height, 0);
        J.width = Math.max(J.width, 0);
        if (S.content.origProportion) {
            J = this._scaleImageSize(S, J)
        }
        S.size = J;
        var P = S.coordinates = I.calcCoordinates(S);
        var H = S.relativeItemPosition = I.calcRelativeItemPosition(S);
        var K = S.zIndex = I.calcZIndex(S);
        var C = S.fontSize = I.calcFontSize(S);
        var D = S.opacity = I.calcOpacity(S);
        J.height *= this.maxHeight;
        J.width *= this.maxHeight;
        var R = N ? J.height : J.width;
        var O = N ? J.width : J.height;
        var G = this.Flow.center.x * (1 + P.x) + (H.x - 1) * R / 2;
        var F = this.maxHeight / 2 * (1 + P.y) + (H.y - 1) * O / 2;
        E.left = (N ? F : G) + "px";
        E.top = (N ? G : F) + "px";
        this._setItemSize(S, J);
        if (I.endOpacity != 1) {
            this._setItemOpacity(S)
        }
        if (!this.Browser.IE) {
            E.fontSize = (C * 100) + "%"
        }
        E.zIndex = 32768 + Math.round(K * this.items.length);
        I.onDrawItem(S);
        E.visibility = "visible";
        E.display = "block"
    },
    _scaleImageSize: function(N, P, I) {
        var E = this.conf.scaleFactorLandscape;
        var D = this.conf.scaleFactorPortrait;
        var M = this.conf.verticalFlow;
        var B = N.content.origProportion;
        var C = P.width;
        var L = P.height;
        var H = N.content;
        if (M) {
            if (B <= 1) {
                if (E != "max" && E != 1) {
                    L *= E;
                    C = Math.min(L * B, I ? I : 1)
                }
                L = C / B
            } else {
                if (B > 1) {
                    if (D == "max") {
                        L = I ? I : 1
                    } else {
                        if (D != 1) {
                            C *= D;
                            L = Math.min(C / B, I ? I : 1)
                        } else {
                            L = C / B
                        }
                    }
                    C = L * B
                }
            }
        } else {
            if (B > 1) {
                if (E != "max" && E != 1) {
                    C *= E;
                    L = Math.min(C / B, I ? I : 1)
                }
                C = L * B
            } else {
                if (B <= 1) {
                    if (D == "max") {
                        C = I ? I : 1
                    } else {
                        if (D != 1) {
                            L *= D;
                            C = Math.min(L * B, I ? I : 1)
                        } else {
                            C = L * B
                        }
                    }
                    L = C / B
                }
            }
        }
        L = isNaN(L) ? 0 : L;
        C = isNaN(C) ? 0 : C;
        if (!I && this.conf.fixItemSize) {
            var A = P.width / P.height;
            var I = Math.max(P.width, P.height);
            var O = this._scaleImageSize(N, {
                width: I,
                height: I
            }, I);
            if (A < 1) {
                L = O.height / P.height;
                C = L * B / A
            } else {
                C = O.width / P.width;
                L = C / B * A
            }
            var G = L * 100;
            var K = C * 100;
            var J = (1 - C) / 2 * 100;
            var F = (1 - L) / A * 100 * (M ? 0.5 : 1);
            H.style.height = G + "%";
            if (N.reflection) {
                N.reflection.style.height = G * this.conf.reflectionHeight + "%"
            }
            H.style.width = K + "%";
            if (N.reflection) {
                N.reflection.style.width = K + "%"
            }
            H.style.marginLeft = J + "%";
            if (N.reflection) {
                N.reflection.style.marginLeft = J + "%"
            }
            H.style.marginTop = F + "%";
            N.element.style.overflow = "hidden";
            return P
        } else {
            return {
                width: C,
                height: L
            }
        }
    },
    _setItemSize: (function() {
        if (ContentFlowGlobal.Browser.IE) {
            var A = function(E, C) {
                if (!this.conf.fixItemSize) {
                    E.content.style.height = C.height + "px"
                } else {
                    if (ContentFlowGlobal.Browser.IE6) {
                        var D = parseInt(E.content.style.height) / 100;
                        E.content.style.height = C.height * D + "px";
                        var B = parseInt(E.content.style.marginTop) / 100;
                        E.content.style.marginTop = C.height * B + "px"
                    }
                }
                if (E.reflection) {
                    var D = parseInt(E.content.style.height);
                    E.reflection.style.height = D * this.conf.reflectionHeight + "px";
                    E.reflection.style.marginTop = D * this.conf.reflectionGap + "px"
                }
                E.element.style.width = C.width + "px";
                E.element.style.height = C.height * (1 + this.conf.reflectionHeight + this.conf.reflectionGap) + "px"
            }
        } else {
            var A = function(C, B) {
                if (C.reflection) {
                    C.element.style.height = B.height * (1 + this.conf.reflectionHeight + this.conf.reflectionGap) + "px";
                    C.reflection.style.marginTop = B.height * this.conf.reflectionGap + "px"
                } else {
                    if (this._reflectionWithinImage) {
                        C.element.style.height = B.height * (1 + this.conf.reflectionHeight + this.conf.reflectionGap) + "px"
                    } else {
                        C.element.style.height = B.height + "px"
                    }
                }
                C.element.style.width = B.width + "px"
            }
        }
        return A
    })(),
    _setItemOpacity: (function() {
        if (ContentFlowGlobal.Browser.IE6) {
            var A = function(C) {
                if (C.content.origSrc && C.content.origSrc.match(/\.png$/)) {
                    var B = C.content.src;
                    C.content.src = C.content.origSrc;
                    C.content.style.filter = C.content.filterString + " progid:DXImageTransform.Microsoft.BasicImage(opacity=" + C.opacity + ")";
                    C.content.src = B
                } else {
                    C.content.style.filter = "progid:DXImageTransform.Microsoft.BasicImage(opacity=" + C.opacity + ")"
                }
                if (C.reflection) {
                    C.reflection.style.filter = C.reflection.filterString + "progid:DXImageTransform.Microsoft.BasicImage(opacity=" + C.opacity + ")"
                }
            }
        } else {
            if (ContentFlowGlobal.Browser.IE) {
                var A = function(B) {
                    B.element.style.filter = "progid:DXImageTransform.Microsoft.BasicImage(opacity=" + B.opacity + ")"
                }
            } else {
                var A = function(B) {
                    B.element.style.opacity = B.opacity
                }
            }
        }
        return A
    })()
};
if (!Function.bind) {
    Function.prototype.bind = function(A) {
        var B = this;
        return function() {
            return B.apply(A, arguments)
        }
    }
}
if (!Math.erf2) {
    Math.erf2 = function(A) {
        var B = -(8 * (Math.PI - 3) / (3 * Math.PI * (Math.PI - 4)));
        var C = A * A;
        var D = 1 - Math.pow(Math.E, -C * (4 / Math.PI + B * C) / (1 + B * C));
        return D
    }
}
if (!Math._2PI05) {
    Math._2PI05 = Math.sqrt(2 * Math.PI)
}
if (!Math.normDist) {
    Math.normDist = function(A, C, B) {
        if (!C) {
            var C = 1
        }
        if (!B) {
            var B = 0
        }
        if (!A) {
            var A = -B
        }
        return 1 / (C * Math._2PI05) * Math.pow(Math.E, -(A - B) * (A - B) / (2 * C * C))
    }
}
if (!Math.normedNormDist) {
    Math.normedNormDist = function(A, C, B) {
        return this.normDist(A, C, B) / this.normDist(B, C, B)
    }
}
if (!Math.exp) {
    Math.exp = function(A) {
        return Math.pow(Math.E, A)
    }
}
if (!Math.ln) {
    Math.ln = Math.log
}
if (!Math.log2) {
    Math.log2 = function(A) {
        return Math.log(A) / Math.LN2
    }
}
if (!Math.log10) {
    Math.log10 = function(A) {
        return Math.log(A) / Math.LN10
    }
}
if (!Math.logerithm) {
    Math.logerithm = function(B, A) {
        if (!A || A == Math.E) {
            return Math.log(B)
        } else {
            if (A == 2) {
                return Math.log2(B)
            } else {
                if (A == 10) {
                    return Math.log10(B)
                } else {
                    return Math.log(B) / Math.log(A)
                }
            }
        }
    }
}
if (!Event) {
    var Event = {}
}
if (!Event.stop) {
    Event.stop = function(A) {
        A.cancelBubble = true;
        if (A.preventDefault) {
            A.preventDefault()
        }
        if (A.stopPropagation) {
            A.stopPropagation()
        }
        return false
    }
}
if (document.all && !window.opera) {
    window.$CF = function(A) {
        if (typeof A == "string") {
            return window.$CF(document.getElementById(A))
        } else {
            if (CFElement.prototype.extend && A && !A.extend) {
                CFElement.prototype.extend(A)
            }
        }
        return A
    }
} else {
    window.$CF = function(A) {
        return A
    }
}
if (!window.HTMLElement) {
    CFElement = {};
    CFElement.prototype = {};
    CFElement.prototype.extend = function(A) {
        for (var B in this) {
            if (!A[B]) {
                A[B] = this[B]
            }
        }
    }
} else {
    CFElement = window.HTMLElement
}
if (!CFElement.findPos) {
    CFElement.prototype.findPos = function() {
        var B = this;
        var C = curtop = 0;
        try {
            if (B.offsetParent) {
                C = B.offsetLeft;
                curtop = B.offsetTop;
                while (B = B.offsetParent) {
                    C += B.offsetLeft;
                    curtop += B.offsetTop
                }
            }
        } catch (A) {}
        return {
            left: C,
            top: curtop
        }
    }
}
if (!CFElement.getDimensions) {
    CFElement.prototype.getDimensions = function() {
        return {
            width: this.clientWidth,
            height: this.clientHeight
        }
    }
}
if (!CFElement.hasClassName) {
    CFElement.prototype.hasClassName = function(A) {
        return (new RegExp("\\b" + A + "\\b").test(this.className))
    }
}
if (!CFElement.addClassName) {
    CFElement.prototype.addClassName = function(A) {
        if (!this.hasClassName(A)) {
            this.className += (this.className ? " " : "") + A
        }
    }
}
if (!CFElement.removeClassName) {
    CFElement.prototype.removeClassName = function(A) {
        this.className = this.className.replace(new RegExp("\\b" + A + "\\b"), "").replace(/\s\s/g, " ")
    }
}
if (!CFElement.toggleClassName) {
    CFElement.prototype.toggleClassName = function(A) {
        if (this.hasClassName(A)) {
            this.removeClassName(A)
        } else {
            this.addClassName(A)
        }
    }
}
if (!CFElement.getChildrenByClassName) {
    CFElement.prototype.getChildrenByClassName = function(C) {
        var B = new Array();
        for (var A = 0; A < this.childNodes.length; A++) {
            var D = this.childNodes[A];
            if (D.nodeType == 1 && $CF(D).hasClassName(C)) {
                B.push(D)
            }
        }
        return B
    }
}
if (!CFElement.addEvent) {
    CFElement.prototype.addEvent = function(B, C, A) {
        if (this.addEventListener) {
            this.addEventListener(B, C, A)
        } else {
            this.attachEvent("on" + B, C)
        }
    }
}
if (!CFElement.removeEvent) {
    CFElement.prototype.removeEvent = function(B, C, A) {
        if (this.removeEventListener) {
            this.removeEventListener(B, C, A)
        } else {
            this.detachEvent("on" + B, C)
        }
    }
}
if (!window.addEvent) {
    window.addEvent = function(B, C, A) {
        if (this.addEventListener) {
            this.addEventListener(B, C, A)
        } else {
            if (B != "load" && B != "resize") {
                document.attachEvent("on" + B, C)
            } else {
                this.attachEvent("on" + B, C)
            }
        }
    }
}
if (!window.removeEvent) {
    window.removeEvent = function(B, C, A) {
        if (this.removeEventListener) {
            this.removeEventListener(B, C, A)
        } else {
            if (B != "load" && B != "resize") {
                document.detachEvent("on" + B, C)
            } else {
                this.detachEvent("on" + B, C)
            }
        }
    }
}
ContentFlowGlobal.init();
var CarrosselAtivos = {
	init: function(){
    this.setEls();
    this.bind();
	},
	setEls: function(){
		this.$arrowPrev = $('.nav-arrow.previous');
		this.$arrowNext = $('.nav-arrow.next');
	},
	bind: function(){
		var _that = this;

    var myNewFlow = new ContentFlow('nego', {
    	reflectionHeight: 0,
    	maxItemHeight: 246,
    	maxItemWidth: 370,
    	relativeItemPosition: "center",
    	scaleFactorLandscape: 2.2,
    });

		this.$arrowPrev.on('click', function(){
			track.sendEvent('ekos', 'ativos', 'esquerda');
		});
		this.$arrowNext.on('click', function(){
			track.sendEvent('ekos', 'ativos', 'direita');
		});
	}
}
CarrosselAtivos.init();