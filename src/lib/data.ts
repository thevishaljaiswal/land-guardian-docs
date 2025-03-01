
// Type definitions
export type LandProposal = {
  id: string;
  proposalNumber: string;
  village: string;
  taluka: string;
  district: string;
  state: string;
  landSource: string;
  landStatus: string;
  landStage: string;
  sourceCode: string;
  proposalDate: string;
  proposalType: string;
  landCost: number;
  stampDuty: number;
  registrationAmount: number;
};

export type LandProposalItem = {
  id: string;
  proposalId: string;
  gatSurveyNumber: string;
  hissaNumber: string;
  cstNumber: string;
  finalPlotNumber: string;
  landZone: string;
  owner: string;
  coOwner: string;
  landArea: number;
  landUOM: string;
  landRate: number;
  landCost: number;
};

export type Document = {
  id: string;
  name: string;
  file?: File | null;
  uploadDate?: string;
  status: "pending" | "uploaded" | "verified";
};

// Mock data
export const mockProposal: LandProposal = {
  id: "P001",
  proposalNumber: "LP-2023-001",
  village: "Hinjewadi",
  taluka: "Mulshi",
  district: "Pune",
  state: "Maharashtra",
  landSource: "Direct Purchase",
  landStatus: "In Process",
  landStage: "Initial Assessment",
  sourceCode: "DP-001",
  proposalDate: "2023-06-15",
  proposalType: "Agricultural to Non-Agricultural",
  landCost: 25000000,
  stampDuty: 1250000,
  registrationAmount: 500000,
};

export const mockProposalItems: LandProposalItem[] = [
  {
    id: "PI001",
    proposalId: "P001",
    gatSurveyNumber: "123/A",
    hissaNumber: "1",
    cstNumber: "CST-456",
    finalPlotNumber: "FP-789",
    landZone: "Residential",
    owner: "John Doe",
    coOwner: "Jane Doe",
    landArea: 10000,
    landUOM: "sq.m",
    landRate: 2500,
    landCost: 25000000,
  },
  {
    id: "PI002",
    proposalId: "P001",
    gatSurveyNumber: "124/B",
    hissaNumber: "2",
    cstNumber: "CST-457",
    finalPlotNumber: "FP-790",
    landZone: "Commercial",
    owner: "Robert Smith",
    coOwner: "Sarah Smith",
    landArea: 5000,
    landUOM: "sq.m",
    landRate: 3000,
    landCost: 15000000,
  },
];

export const documentCategories = [
  {
    category: "Deed Documents",
    documents: [
      { id: "doc1", name: "Sale Deed", status: "pending" },
      { id: "doc2", name: "Conveyance Deed", status: "pending" },
      { id: "doc3", name: "Deed of Declaration", status: "pending" },
      { id: "doc4", name: "DA & POA", status: "pending" },
      { id: "doc5", name: "DM & POA", status: "pending" },
      { id: "doc6", name: "JV & POA", status: "pending" },
      { id: "doc7", name: "JDA & POA", status: "pending" },
      { id: "doc8", name: "POA", status: "pending" },
      { id: "doc9", name: "Deed of Transfer", status: "pending" },
      { id: "doc10", name: "Deed of Assignment", status: "pending" },
      { id: "doc11", name: "Correction Deed", status: "pending" },
      { id: "doc12", name: "Agreement to Sale", status: "pending" },
      { id: "doc13", name: "T.D.R. Agreement", status: "pending" },
      { id: "doc14", name: "Partition Deed", status: "pending" },
      { id: "doc15", name: "Release Deed", status: "pending" },
      { id: "doc16", name: "MOU", status: "pending" },
      { id: "doc17", name: "Visar Pavati", status: "pending" },
      { id: "doc18", name: "Lease Deed", status: "pending" },
      { id: "doc19", name: "Surrender of Lease Deed", status: "pending" },
      { id: "doc20", name: "Gift Deed", status: "pending" },
      { id: "doc21", name: "Will", status: "pending" },
    ]
  },
  {
    category: "Legal Documents",
    documents: [
      { id: "doc22", name: "Title Opinion & Search Report and Title Certificate", status: "pending" },
      { id: "doc23", name: "Affidavit", status: "pending" },
      { id: "doc24", name: "Declaration", status: "pending" },
      { id: "doc25", name: "Affidavit cum Declaration", status: "pending" },
      { id: "doc26", name: "Indemnity Bond", status: "pending" },
      { id: "doc27", name: "Affidavit cum Indemnity Bond", status: "pending" },
      { id: "doc28", name: "Mortgage Deed", status: "pending" },
      { id: "doc29", name: "Deed of Legal Entity Formation", status: "pending" },
      { id: "doc30", name: "Registration Certificate of Legal Entity", status: "pending" },
    ]
  },
  {
    category: "Land Records",
    documents: [
      { id: "doc31", name: "7-12 Extract", status: "pending" },
      { id: "doc32", name: "PRC", status: "pending" },
      { id: "doc33", name: "8A Extract", status: "pending" },
      { id: "doc34", name: "Mutation Entries", status: "pending" },
      { id: "doc35", name: "Contour Survey & Total Station Survey", status: "pending" },
      { id: "doc36", name: "Land Geological Survey", status: "pending" },
    ]
  },
  {
    category: "Planning Documents",
    documents: [
      { id: "doc37", name: "Demarcation Plan", status: "pending" },
      { id: "doc38", name: "Zone Demarcation Plan", status: "pending" },
      { id: "doc39", name: "Zone Certificate", status: "pending" },
      { id: "doc40", name: "D.P./R.P. Remark Site Plan", status: "pending" },
      { id: "doc41", name: "Town Planning Scheme Site Plan", status: "pending" },
      { id: "doc42", name: "Development Plan", status: "pending" },
      { id: "doc43", name: "Regional Plan", status: "pending" },
      { id: "doc44", name: "Sanctioned D.P. Layout Plans", status: "pending" },
      { id: "doc45", name: "Sanctioned Building Permission Plans", status: "pending" },
      { id: "doc46", name: "Commencement Certificate", status: "pending" },
    ]
  },
  {
    category: "Government Documents",
    documents: [
      { id: "doc47", name: "N.A. Order", status: "pending" },
      { id: "doc48", name: "Nazrana Challan paid", status: "pending" },
      { id: "doc49", name: "MCorp/MRDA/SPA/ULB Premium Challan paid", status: "pending" },
      { id: "doc50", name: "ULC Documents", status: "pending" },
      { id: "doc51", name: "Spl. Permissions from Collector", status: "pending" },
      { id: "doc52", name: "Occupation Certificate /Completion Certificate", status: "pending" },
      { id: "doc53", name: "Property Tax", status: "pending" },
      { id: "doc54", name: "N.A. Tax", status: "pending" },
    ]
  },
  {
    category: "NOC Documents",
    documents: [
      { id: "doc55", name: "NOC", status: "pending" },
      { id: "doc56", name: "NOC – Chief Fire Officer", status: "pending" },
      { id: "doc57", name: "NOC – Water Connection", status: "pending" },
      { id: "doc58", name: "NOC – Electricity Connection", status: "pending" },
      { id: "doc59", name: "NOC – Drainage Connection", status: "pending" },
      { id: "doc60", name: "NOC – Garden Connection", status: "pending" },
      { id: "doc61", name: "NOC – Grampanchayat", status: "pending" },
      { id: "doc62", name: "NOC – Aviation Dept. for Permissible Height Restriction", status: "pending" },
      { id: "doc63", name: "NOC – Survey of India", status: "pending" },
      { id: "doc64", name: "NOC – Pollution Control Board", status: "pending" },
      { id: "doc65", name: "MoEF/EC Certificate", status: "pending" },
    ]
  }
] as { category: string; documents: Document[] }[];
