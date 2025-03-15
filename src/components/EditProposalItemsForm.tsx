
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { LandProposalItem } from "@/lib/data";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trash2, Plus } from "lucide-react";
import { toast } from "sonner";

interface EditProposalItemsFormProps {
  proposalItems: LandProposalItem[];
  setProposalItems: React.Dispatch<React.SetStateAction<LandProposalItem[]>>;
}

export const EditProposalItemsForm: React.FC<EditProposalItemsFormProps> = ({
  proposalItems,
  setProposalItems
}) => {
  const handleItemChange = (index: number, field: keyof LandProposalItem, value: any) => {
    const updatedItems = [...proposalItems];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value
    };
    setProposalItems(updatedItems);
  };

  const calculateLandCost = (index: number) => {
    const item = proposalItems[index];
    const landCost = item.landArea * item.landRate;
    handleItemChange(index, 'landCost', landCost);
  };

  const handleAddItem = () => {
    const newId = `PI${(proposalItems.length + 1).toString().padStart(3, '0')}`;
    const newItem: LandProposalItem = {
      id: newId,
      proposalId: proposalItems[0].proposalId,
      gatSurveyNumber: "",
      hissaNumber: "",
      cstNumber: "",
      finalPlotNumber: "",
      landZone: "Residential",
      owner: "",
      coOwner: "",
      landArea: 0,
      landUOM: "sq.m",
      landRate: 0,
      landCost: 0
    };
    setProposalItems([...proposalItems, newItem]);
    toast.success("New land item added");
  };

  const handleRemoveItem = (index: number) => {
    if (proposalItems.length <= 1) {
      toast.error("Cannot remove the last item");
      return;
    }
    
    const updatedItems = [...proposalItems];
    updatedItems.splice(index, 1);
    setProposalItems(updatedItems);
    toast.success("Land item removed");
  };

  return (
    <div className="space-y-6">
      {proposalItems.map((item, index) => (
        <Card key={item.id} className="border-l-4 border-l-primary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl">Land Item #{index + 1}</CardTitle>
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 text-destructive" 
              onClick={() => handleRemoveItem(index)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor={`gatSurveyNumber-${index}`}>GAT/Survey Number</Label>
                <Input
                  id={`gatSurveyNumber-${index}`}
                  value={item.gatSurveyNumber}
                  onChange={(e) => handleItemChange(index, 'gatSurveyNumber', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`hissaNumber-${index}`}>Hissa Number</Label>
                <Input
                  id={`hissaNumber-${index}`}
                  value={item.hissaNumber}
                  onChange={(e) => handleItemChange(index, 'hissaNumber', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`cstNumber-${index}`}>CST Number</Label>
                <Input
                  id={`cstNumber-${index}`}
                  value={item.cstNumber}
                  onChange={(e) => handleItemChange(index, 'cstNumber', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`finalPlotNumber-${index}`}>Final Plot Number</Label>
                <Input
                  id={`finalPlotNumber-${index}`}
                  value={item.finalPlotNumber}
                  onChange={(e) => handleItemChange(index, 'finalPlotNumber', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`landZone-${index}`}>Land Zone</Label>
                <Select 
                  value={item.landZone} 
                  onValueChange={(value) => handleItemChange(index, 'landZone', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select zone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Residential">Residential</SelectItem>
                    <SelectItem value="Commercial">Commercial</SelectItem>
                    <SelectItem value="Industrial">Industrial</SelectItem>
                    <SelectItem value="Agricultural">Agricultural</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-2">
                <Label htmlFor={`owner-${index}`}>Owner</Label>
                <Input
                  id={`owner-${index}`}
                  value={item.owner}
                  onChange={(e) => handleItemChange(index, 'owner', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`coOwner-${index}`}>Co-Owner</Label>
                <Input
                  id={`coOwner-${index}`}
                  value={item.coOwner}
                  onChange={(e) => handleItemChange(index, 'coOwner', e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="space-y-2">
                <Label htmlFor={`landArea-${index}`}>Land Area</Label>
                <div className="flex gap-2">
                  <Input
                    id={`landArea-${index}`}
                    type="number"
                    value={item.landArea}
                    onChange={(e) => {
                      const value = e.target.value === "" ? 0 : Number(e.target.value);
                      handleItemChange(index, 'landArea', value);
                    }}
                    onBlur={() => calculateLandCost(index)}
                    className="flex-grow"
                  />
                  <Select 
                    value={item.landUOM} 
                    onValueChange={(value) => handleItemChange(index, 'landUOM', value)}
                  >
                    <SelectTrigger className="w-24">
                      <SelectValue placeholder="UOM" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sq.m">sq.m</SelectItem>
                      <SelectItem value="sq.ft">sq.ft</SelectItem>
                      <SelectItem value="acre">acre</SelectItem>
                      <SelectItem value="hectare">hectare</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor={`landRate-${index}`}>Land Rate (₹)</Label>
                <Input
                  id={`landRate-${index}`}
                  type="number"
                  value={item.landRate}
                  onChange={(e) => {
                    const value = e.target.value === "" ? 0 : Number(e.target.value);
                    handleItemChange(index, 'landRate', value);
                  }}
                  onBlur={() => calculateLandCost(index)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`landCost-${index}`}>Land Cost (₹)</Label>
                <Input
                  id={`landCost-${index}`}
                  type="number"
                  value={item.landCost}
                  readOnly
                  className="bg-gray-50"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <Button 
        variant="outline" 
        className="w-full" 
        onClick={handleAddItem}
      >
        <Plus className="h-4 w-4 mr-2" />
        Add New Land Item
      </Button>
    </div>
  );
};
