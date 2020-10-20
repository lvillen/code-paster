const names = [
  'FISTRO',
  'PECADOR',
  'PRADERA',
  'NOPUEDOR',
  'JARL',
  'REACT',
  'CURRY',
  'HOOKS',
  'KETCHUP',
  'TURING',
  'ALAN',
  'CHUCK',
  'NORRIS',
  'DELAWARE',
  'MALAGA',
  'PALO',
  'VALLEY',
  'LEMON',
  'ADA',
  'LOVELACE',
  'ALLENE',
  'VIRGEN',
  'DOMINQUE',
  'LESA',
  'BRANDON',
  'WESLEY',
  'RANDEE',
  'JOSUE',
  'AISHA',
  'MARLO',
  'JUNKO',
  'AUREA',
  'CARROLL',
  'MELYNDA',
  'CORINA',
  'DAMION',
  'LAVONDA',
  'SUSY',
  'VASILIKI',
  'MALENA',
  'CARLOTA',
  'ALENA',
  'KRISTAL',
  'FE',
  'EARTHA',
  'RAYE',
  'MARYLAND',
  'MARISELA',
  'XUAN',
  'YASMIN',
  'ADENA',
  'MY',
  'VELIA',
  'IRA',
  'WESTON',
  'ZULMA',
  'GRAHAM',
  'AFTON',
  'ASHLIE',
  'CORI',
  'MARC',
  'BELL',
  'FELICITAS',
  'SHANTEL',
  'LINA',
'JACOB',
'NIKHIL',
'LONDON',
'DAMARIS',
'BRICE',
'DEVIN',
'JOHNATHAN',
'GRACE',
'ALICIA',
'ISABELLE',
'GLENN',
'MACKENZIE',
'KYLIE',
'KATHRYN',
'DEMARCUS',
'LUCA',
'MIYA',
'ADAN',
'MARTHA',
'MAXIMILLIAN',
'PAITYN',
'JAMAL',
'BRENDA',
'MARIANA',
'KIERAN',
'ANYA',
'STANLEY',
'JORDON',
'LEANDRO',
'PRISCILLA',
'TERRENCE',
'LARISSA',
'RHIANNA',
'JAIME',
'EDWARD',
'MCKENNA',
'CARLY',
'KALE',
'JAX',
'TERESA',
'ANGELA',
'SOPHIE',
'RUTH',
'EILEEN',
'SIDNEY',
'BELINDA',
'WILLOW',
'ZANIYAH',
'AVAH',
'NEVAEH',
'MICAH',
'PRESLEY',
'SASHA',
'VERONICA',
'BRYLEE',
'DOMINIC',
'GREYSON',
'BEN',
'LUKE',
'PHOENIX',
'CASE',
'AALIYAH',
'ROSS',
'AGUSTIN',
'KAILEE',
'JANAE',
'FRIDA',
'ISAIAS',
'KASEY',
'JOHAN',
'JORDAN',
'COLT',
'DIXIE',
'SAMMY',
'FRANKIE',
'MEKHI',
'CASSIE',
'KADENCE',
'JAMIYA',
'VANCE',
'COLTON',
'AALIYAH',
'RYKER',
'DEREON',
'JABARI',
'JENNIFER',
'JAYLEEN',
'TERRENCE',
'JAIDEN',
'BRYCEN',
'TALIYAH',
'MATTHEW',
'SANTOS',
'MAXIMUS',
'LUZ',
'MELANIE',
'CHANA',
'RUDY',
'KEITH',
'CARLOS',
'JASMINE',
'HEIDI',
'CORDELL',
'KYAN',
'CAITLIN',
'DAHLIA',
'REILLY',
'QUINCY',
'DENISE',
'JACKSON',
'LUCIANO',
'KALI',
'CORNELIUS',
'JASLYN',
'TIMOTHY',
'LEONIDAS',
'RICKY',
'KATHRYN',
'LANDYN',
'ISMAEL',
'TERRY',
'HAVEN',
'DESTINEE',
'LANDYN',
'SAGE',
'HUDSON',
'JADIEL',
'LOGAN',
'KAMORA',
'RENE',
'MAYA',
'REID',
'BREANNA',
'KEYON',
'TYRONE',
'DANE',
'CARISSA',
'EMILIANO',
'GUNNAR',
'CORTEZ',
'LILAH',
'ANTON',
'DULCE',
'KAIYA',
'SHYANN',
'KAMILA',
'TORI',
'TUCKER',
'CIERRA',
'PIERCE',
'KING',
'RACHAEL',
'MAXIM',
'BOBBY',
'BRYANT',
'KALE',
'JAMESON',
'DANIKA',
'LITZY',
'DILLON',
'TYRESE',
'EZRA',
'DUNCAN',
'HARLEY',
'PENELOPE',
'ANDREA',
'CHARLOTTE',
'CLARA',
'IZABELLE',
'ZARIAH',
'KRISTIAN',
'SIDNEY',
'DARIEN',
'CAILYN',
'YARELI',
'GRACE',
'SAMSON',
'JANIYAH',
'MYLEE',
'ALENA',
'ARIANNA',
'AMY',
'DEMETRIUS',
'LESLIE',
'PAULINA',
'HOPE',
'DELILAH',
'CAIDEN',
'RODOLFO',
'IZAYAH',
'JAYLIN',
'AUGUST',
'GUNNAR',
'KAMERON',
'LOGAN',
'ROBERTO',
'JAZLYN',
'JOSH',
'JASON',
'ZAVIER',
'FREDDY',
'HAYLEY',
'MARTHA',
'TODD',
'YAZMIN',
'LYLA',
'ALANI',
'JOE',
'GILLIAN',
'BOSTON',
'JAIDYN',
'ERIN',
'SKYLA',
'NICHOLAS',
'ALBERT',
'JULIET',
'KATE',
'SUSAN',
'PRESTON',
'ALVARO',
'KYMANI',
'LEANDRO',
'ELIEZER',
'ALEAH',
'DAYTON',
'MARILYN',
'JAX',
'JONAH',
'ADA',
'KARMA',
'MALIYAH',
'ISAAC',
'JESSIE',
'ELIJAH',
'JAXSON',
'KRISTIAN',
'VANCE',
'JAQUAN',
'LYRIC',
'CLARISSA',
'KIANNA',
'MATTEO',
'MARINA',
'ALISA',
'CAITLIN',
'TIFFANY',
'CRISTAL',
'VINCENT',
'JAYVON',
'GRETA',
'NEVEAH',
'KAMRON',
'MARELY',
'TITUS',
'HUGO',
'KAYLA',
'QUINCY',
'ELIJAH',
'EZRA',
'BRODY',
'FABIAN',
'AGUSTIN',
'LILIAN',
'ALFREDO',
'JAIDYN',
'OLIVE',
'KELLEN',
'CAROLINE',
'RAMIRO',
'KAEL',
'ASPEN',
'STEPHANIE',
'NYASIA',
'JESSIE',
'LILYANA',
'ROWAN',
'ANGELINA',
'LACI',
'GRETA',
'STEVEN',
'KODY',
'LEON',
'JIMENA',
'TYLER',
'LIVIA',
'ELIAS',
'ZAYNE',
'MAREN',
'TODD',
'JULIANNA',
'SYDNEE',
'ADRIEL',
'GERALD',
'NIKO',
'RORY',
'ISABELL',
'VIOLET',
'LOGAN',
'DAISY',
];

const formatToUpperCase = (name: string): string => {
  const unused_special_characters = /[^a-z0-1.,?!@() ]/g;
  return (
    name
      .replace(/^\s+|\s+$/g, '')
      .normalize('NFD')
      .replace(unused_special_characters, '')
      .toUpperCase()
  );
}

export const baseNames = names.map(name => formatToUpperCase(name));
