
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LandProposal } from "@/lib/data";

interface EditProposalFormProps {
  proposal: LandProposal;
  setProposal: React.Dispatch<React.SetStateAction<LandProposal>>;
}

export const EditProposalForm: React.FC<EditProposalFormProps> = ({ 
  proposal, 
  setProposal 
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProposal(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProposal(prev => ({
      ...prev,
      [name]: value === "" ? 0 : Number(value)
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setProposal(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Proposal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="proposalNumber">Proposal Number</Label>
              <Input
                id="proposalNumber"
                name="proposalNumber"
                value={proposal.proposalNumber}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="proposalDate">Proposal Date</Label>
              <Input
                id="proposalDate"
                name="proposalDate"
                type="date"
                value={proposal.proposalDate.split('T')[0]}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="proposalType">Proposal Type</Label>
              <Select 
                value={proposal.proposalType} 
                onValueChange={(value) => handleSelectChange("proposalType", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Agricultural to Non-Agricultural">Agricultural to Non-Agricultural</SelectItem>
                  <SelectItem value="Residential">Residential</SelectItem>
                  <SelectItem value="Commercial">Commercial</SelectItem>
                  <SelectItem value="Industrial">Industrial</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Location Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <Label htmlFor="village">Village</Label>
              <Input
                id="village"
                name="village"
                value={proposal.village}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="taluka">Taluka</Label>
              <Input
                id="taluka"
                name="taluka"
                value={proposal.taluka}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="district">District</Label>
              <Input
                id="district"
                name="district"
                value={proposal.district}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Input
                id="state"
                name="state"
                value={proposal.state}
                onChange={handleChange}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Land Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="landSource">Land Source</Label>
              <Input
                id="landSource"
                name="landSource"
                value={proposal.landSource}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="landStatus">Land Status</Label>
              <Select 
                value={proposal.landStatus} 
                onValueChange={(value) => handleSelectChange("landStatus", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="In Process">In Process</SelectItem>
                  <SelectItem value="Approved">Approved</SelectItem>
                  <SelectItem value="Rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="landStage">Land Stage</Label>
              <Input
                id="landStage"
                name="landStage"
                value={proposal.landStage}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sourceCode">Source Code</Label>
              <Input
                id="sourceCode"
                name="sourceCode"
                value={proposal.sourceCode}
                onChange={handleChange}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Financial Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="landCost">Land Cost (₹)</Label>
              <Input
                id="landCost"
                name="landCost"
                type="number"
                value={proposal.landCost}
                onChange={handleNumberChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="stampDuty">Stamp Duty (₹)</Label>
              <Input
                id="stampDuty"
                name="stampDuty"
                type="number"
                value={proposal.stampDuty}
                onChange={handleNumberChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="registrationAmount">Registration Amount (₹)</Label>
              <Input
                id="registrationAmount"
                name="registrationAmount"
                type="number"
                value={proposal.registrationAmount}
                onChange={handleNumberChange}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
