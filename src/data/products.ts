import aluminumHousing from '@/assets/products/DSC_1031_.webp'
import precisionShaft from '@/assets/products/DSC_1033_.webp'
import electronicsBracket from '@/assets/products/DSC_1036_.webp'
import bronzeBushing from '@/assets/products/DSC_1038_.webp'
import steelFlange from '@/assets/products/DSC_1040_.webp'
import medicalFastener from '@/assets/products/DSC_1041_.webp'
import pomSpacer from '@/assets/products/DSC_1043_.webp'
import anodizedCover from '@/assets/products/DSC_1046_.webp'
import stainlessPin from '@/assets/products/DSC_1047_.webp'
import img1049 from '@/assets/products/DSC_1049_.webp'
import img1053 from '@/assets/products/DSC_1053_.webp'
import img1056 from '@/assets/products/DSC_1056_.webp'
import img1061 from '@/assets/products/DSC_1061_.webp'
import img1062 from '@/assets/products/DSC_1062_.webp'
import img7585 from '@/assets/products/DSC_7585_.webp'
import img7601 from '@/assets/products/DSC_7601_.webp'
import img7607 from '@/assets/products/DSC_7607_.webp'
import img7610 from '@/assets/products/DSC_7610_.webp'
import img7613 from '@/assets/products/DSC_7613_.webp'
import img7643 from '@/assets/products/DSC_7643_.webp'

export type Product = {
  id: number
  name: string
  category: string
  image: string
  alt: string
}

export const categories: string[] = [
  'Visi',
  'Mašinų pramonė',
  'Medicina',
  'Statybos',
  'Elektronika',
]

export const products: Product[] = [
  {
    id: 1,
    name: 'Frez. aliuminio korpusas M12',
    category: 'Mašinų pramonė',
    image: aluminumHousing,
    alt: 'Frezavimo būdu pagamintas aliuminio korpusas M12 sriegiais',
  },
  {
    id: 2,
    name: 'Tikslioji ašis Ø16',
    category: 'Mašinų pramonė',
    image: precisionShaft,
    alt: 'Tikslioji tekinimo būdu pagaminta ašis skersmens Ø16',
  },
  {
    id: 3,
    name: 'Laikiklis elektronikos moduliui',
    category: 'Elektronika',
    image: electronicsBracket,
    alt: 'CNC apdirbtas laikiklis elektronikos moduliui',
  },
  {
    id: 4,
    name: 'Bronzos įvorė su grioveliu',
    category: 'Mašinų pramonė',
    image: bronzeBushing,
    alt: 'Bronzinė įvorė su tepimo grioveliu',
  },
  {
    id: 5,
    name: 'Plieno flanšas PN16',
    category: 'Statybos',
    image: steelFlange,
    alt: 'Plieninis flanšas PN16 su tvirtinimo skylėmis',
  },
  {
    id: 6,
    name: 'Medicininė tvirtinimo detalė',
    category: 'Medicina',
    image: medicalFastener,
    alt: 'Smulki medicininė detalė su precizišku paviršiumi',
  },
  {
    id: 7,
    name: 'Plastiko tarpiklis POM',
    category: 'Elektronika',
    image: pomSpacer,
    alt: 'POM plastiko tarpiklis elektronikos įrenginiui',
  },
  {
    id: 8,
    name: 'Aliuminio dangtelis anod.',
    category: 'Elektronika',
    image: anodizedCover,
    alt: 'Anoduotas aliuminio dangtelis su švariais briaunų užapvalinimais',
  },
  {
    id: 9,
    name: 'Nerūd. plieno kaištis',
    category: 'Mašinų pramonė',
    image: stainlessPin,
    alt: 'Nerūdijančio plieno kaištis su fazuotomis briaunomis',
  },
  {
    id: 10,
    name: 'Produktas 10',
    category: 'Mašinų pramonė',
    image: img1049,
    alt: 'Produkto nuotrauka 10',
  },
  {
    id: 11,
    name: 'Produktas 11',
    category: 'Medicina',
    image: img1053,
    alt: 'Produkto nuotrauka 11',
  },
  {
    id: 12,
    name: 'Produktas 12',
    category: 'Statybos',
    image: img1056,
    alt: 'Produkto nuotrauka 12',
  },
  {
    id: 13,
    name: 'Produktas 13',
    category: 'Elektronika',
    image: img1061,
    alt: 'Produkto nuotrauka 13',
  },
  {
    id: 14,
    name: 'Produktas 14',
    category: 'Mašinų pramonė',
    image: img1062,
    alt: 'Produkto nuotrauka 14',
  },
  {
    id: 15,
    name: 'Produktas 15',
    category: 'Medicina',
    image: img7585,
    alt: 'Produkto nuotrauka 15',
  },
  {
    id: 16,
    name: 'Produktas 16',
    category: 'Statybos',
    image: img7601,
    alt: 'Produkto nuotrauka 16',
  },
  {
    id: 17,
    name: 'Produktas 17',
    category: 'Elektronika',
    image: img7607,
    alt: 'Produkto nuotrauka 17',
  },
  {
    id: 18,
    name: 'Produktas 18',
    category: 'Mašinų pramonė',
    image: img7610,
    alt: 'Produkto nuotrauka 18',
  },
  {
    id: 19,
    name: 'Produktas 19',
    category: 'Medicina',
    image: img7613,
    alt: 'Produkto nuotrauka 19',
  },
  {
    id: 20,
    name: 'Produktas 20',
    category: 'Statybos',
    image: img7643,
    alt: 'Produkto nuotrauka 20',
  },
]


