interface LandRecord {
  id: string;
  propertyId: string;
  ownerName: string;
  address: string;
  parcelNumber: string;
  acreage: number;
  legalDescription: string;
  recordedDate: string;
  saleHistory: {
    date: string;
    price: number;
    buyer: string;
  }[];
  liens: {
    type: string;
    amount: number;
    recordedDate: string;
  }[];
  taxes: {
    year: number;
    amount: number;
    paid: boolean;
  }[];
}

const landRecords: LandRecord[] = [
  {
    id: "1",
    propertyId: "PR123456",
    ownerName: "Sanket",
    address: "123 Main St, Anytown, CA 90210",
    parcelNumber: "034-567-890",
    acreage: 0.5,
    legalDescription: "Lot 12, Block 3, Sunnyvale Subdivision",
    recordedDate: "2020-05-15",
    saleHistory: [
      {
        date: "2020-05-15",
        price: 350000,
        buyer: "Sanket"
      },
      {
        date: "2010-08-22",
        price: 210000,
        buyer: "Jay"
      }
    ],
    liens: [
      {
        type: "Mortgage",
        amount: 280000,
        recordedDate: "2020-05-15"
      }
    ],
    taxes: [
      {
        year: 2022,
        amount: 4200,
        paid: true
      },
      {
        year: 2021,
        amount: 4100,
        paid: true
      }
    ]
  },
  {
    id: "2",
    propertyId: "PR789012",
    ownerName: "Omkar",
    address: "456 Oak Ave, Somewhere, CA 90211",
    parcelNumber: "045-678-901",
    acreage: 1.2,
    legalDescription: "Lot 5, Block 2, Hilltop Estates",
    recordedDate: "2018-11-30",
    saleHistory: [
      {
        date: "2018-11-30",
        price: 420000,
        buyer: "Omkar"
      }
    ],
    liens: [
      {
        type: "Mortgage",
        amount: 336000,
        recordedDate: "2018-11-30"
      },
      {
        type: "Tax Lien",
        amount: 5200,
        recordedDate: "2022-03-15"
      }
    ],
    taxes: [
      {
        year: 2022,
        amount: 5800,
        paid: false
      },
      {
        year: 2021,
        amount: 5600,
        paid: true
      }
    ]
  },
  {
    id: "3",
    propertyId: "PR345678",
    ownerName: "Yash",
    address: "789 Pine Rd, Anywhere, CA 90212",
    parcelNumber: "056-789-012",
    acreage: 2.5,
    legalDescription: "Lot 8, Block 1, Riverside Farms",
    recordedDate: "2015-07-22",
    saleHistory: [
      {
        date: "2015-07-22",
        price: 525000,
        buyer: "Yash"
      },
      {
        date: "2005-04-18",
        price: 310000,
        buyer: "David Brown"
      }
    ],
    liens: [],
    taxes: [
      {
        year: 2022,
        amount: 7200,
        paid: true
      },
      {
        year: 2021,
        amount: 7000,
        paid: true
      }
    ]
  }
];

export const searchLandRecords = async (query: {
  parcelNumber?: string;
  ownerName?: string;
  address?: string;
}): Promise<LandRecord[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return landRecords.filter(record => {
    if (query.parcelNumber && !record.parcelNumber.includes(query.parcelNumber)) {
      return false;
    }
    if (query.ownerName && !record.ownerName.toLowerCase().includes(query.ownerName.toLowerCase())) {
      return false;
    }
    if (query.address && !record.address.toLowerCase().includes(query.address.toLowerCase())) {
      return false;
    }
    return true;
  });
};

export const getLandRecordById = async (id: string): Promise<LandRecord | null> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return landRecords.find(record => record.id === id) || null;
};

export const getAllLandRecords = async (): Promise<LandRecord[]> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return landRecords;
};