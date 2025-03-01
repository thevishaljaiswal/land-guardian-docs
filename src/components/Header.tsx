
import React from "react";
import { LandProposal } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface HeaderProps {
  proposal: LandProposal;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ proposal, className }) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', { 
      style: 'currency', 
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <Card className={cn("glass-card animate-fade-in", className)}>
      <CardContent className="p-6">
        <div className="flex flex-col space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <span className="title-chip">Land Proposal</span>
              <h1 className="text-2xl font-semibold">{proposal.proposalNumber}</h1>
            </div>
            <div className="flex flex-col items-end">
              <span className="field-label">Proposal Date</span>
              <span className="field-value">{formatDate(proposal.proposalDate)}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="field-label">Village</span>
                <p className="field-value">{proposal.village}</p>
              </div>
              <div className="space-y-1">
                <span className="field-label">Taluka</span>
                <p className="field-value">{proposal.taluka}</p>
              </div>
              <div className="space-y-1">
                <span className="field-label">District</span>
                <p className="field-value">{proposal.district}</p>
              </div>
              <div className="space-y-1">
                <span className="field-label">State</span>
                <p className="field-value">{proposal.state}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <span className="field-label">Land Source</span>
                <p className="field-value">{proposal.landSource}</p>
              </div>
              <div className="space-y-1">
                <span className="field-label">Land Status</span>
                <p className="field-value">
                  <span className={cn(
                    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                    proposal.landStatus === "Approved" ? "bg-green-100 text-green-800" :
                    proposal.landStatus === "Rejected" ? "bg-red-100 text-red-800" :
                    "bg-amber-100 text-amber-800"
                  )}>
                    {proposal.landStatus}
                  </span>
                </p>
              </div>
              <div className="space-y-1">
                <span className="field-label">Land Stage</span>
                <p className="field-value">{proposal.landStage}</p>
              </div>
              <div className="space-y-1">
                <span className="field-label">Source Code</span>
                <p className="field-value">{proposal.sourceCode}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <span className="field-label">Proposal Type</span>
                <p className="field-value">{proposal.proposalType}</p>
              </div>
              <div className="space-y-1">
                <span className="field-label">Land Cost</span>
                <p className="field-value font-medium">{formatCurrency(proposal.landCost)}</p>
              </div>
              <div className="space-y-1">
                <span className="field-label">Stamp Duty</span>
                <p className="field-value">{formatCurrency(proposal.stampDuty)}</p>
              </div>
              <div className="space-y-1">
                <span className="field-label">Registration Amount</span>
                <p className="field-value">{formatCurrency(proposal.registrationAmount)}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Header;
