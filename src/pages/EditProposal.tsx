
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Save } from "lucide-react";
import { mockProposal, mockProposalItems, LandProposal, LandProposalItem } from "@/lib/data";
import { EditProposalForm } from "@/components/EditProposalForm";
import { EditProposalItemsForm } from "@/components/EditProposalItemsForm";
import { toast } from "sonner";

const EditProposal = () => {
  const navigate = useNavigate();
  const [proposal, setProposal] = useState<LandProposal>({...mockProposal});
  const [proposalItems, setProposalItems] = useState<LandProposalItem[]>(
    mockProposalItems.map(item => ({...item}))
  );

  const handleBack = () => {
    navigate("/");
  };

  const handleSave = () => {
    // In a real application, you would send this data to your backend
    toast.success("Proposal updated successfully!");
    navigate("/");
  };

  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 space-y-6 max-w-7xl animate-fade-in">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={handleBack}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Edit Land Proposal</h1>
            <p className="text-muted-foreground">
              Update details for proposal {proposal.proposalNumber}
            </p>
          </div>
        </div>
        <Button onClick={handleSave} className="flex items-center gap-2">
          <Save className="h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="proposal" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-2 md:inline-flex">
          <TabsTrigger value="proposal">Proposal Details</TabsTrigger>
          <TabsTrigger value="items">Land Items</TabsTrigger>
        </TabsList>
        
        <TabsContent value="proposal" className="mt-6 animate-slide-in">
          <EditProposalForm 
            proposal={proposal} 
            setProposal={setProposal} 
          />
        </TabsContent>
        
        <TabsContent value="items" className="mt-6 animate-slide-in">
          <EditProposalItemsForm 
            proposalItems={proposalItems}
            setProposalItems={setProposalItems}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EditProposal;
