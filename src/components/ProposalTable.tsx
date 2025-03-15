
import React from "react";
import { LandProposalItem } from "@/lib/data";
import { DataTable } from "@/components/ui/data-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProposalTableProps {
  items: LandProposalItem[];
  className?: string;
}

const ProposalTable: React.FC<ProposalTableProps> = ({ items, className }) => {
  const columns = [
    {
      header: "GAT/Survey No.",
      accessorKey: "gatSurveyNumber" as keyof LandProposalItem,
    },
    {
      header: "Hissa No.",
      accessorKey: "hissaNumber" as keyof LandProposalItem,
    },
    {
      header: "CST No.",
      accessorKey: "cstNumber" as keyof LandProposalItem,
    },
    {
      header: "Final Plot No.",
      accessorKey: "finalPlotNumber" as keyof LandProposalItem,
    },
    {
      header: "Land Zone",
      accessorKey: "landZone" as keyof LandProposalItem,
      cell: (item: LandProposalItem) => (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {item.landZone}
        </span>
      ),
    },
    {
      header: "Owner",
      accessorKey: "owner" as keyof LandProposalItem,
    },
    {
      header: "Co-Owner",
      accessorKey: "coOwner" as keyof LandProposalItem,
    },
    {
      header: "Land Area",
      accessorKey: "landArea" as keyof LandProposalItem,
      cell: (item: LandProposalItem) => (
        <span>
          {item.landArea.toLocaleString()} {item.landUOM}
        </span>
      ),
    },
    {
      header: "Land Rate",
      accessorKey: "landRate" as keyof LandProposalItem,
    },
    {
      header: "Land Cost",
      accessorKey: "landCost" as keyof LandProposalItem,
    },
  ];

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Land Proposal Items</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable data={items} columns={columns} />
      </CardContent>
    </Card>
  );
};

export default ProposalTable;
