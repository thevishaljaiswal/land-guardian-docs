
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import ProposalTable from "@/components/ProposalTable";
import DocumentList from "@/components/DocumentList";
import { mockProposal, mockProposalItems, documentCategories } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ClipboardPen } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/edit-proposal");
  };

  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 space-y-10 max-w-7xl animate-fade-in">
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Land Management System</h1>
          <p className="text-muted-foreground">
            Manage land proposals, track documents, and monitor land acquisition progress.
          </p>
        </div>
        <Button onClick={handleEdit} className="flex items-center gap-2">
          <ClipboardPen className="h-4 w-4" />
          Edit Proposal
        </Button>
      </div>

      <Header proposal={mockProposal} className="animate-slide-in" />

      <Tabs defaultValue="details" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-2 md:inline-flex">
          <TabsTrigger value="details">Land Details</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>
        
        <TabsContent value="details" className="mt-6 animate-slide-in">
          <ProposalTable items={mockProposalItems} />
        </TabsContent>
        
        <TabsContent value="documents" className="mt-6 animate-slide-in">
          <DocumentList categories={documentCategories} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
