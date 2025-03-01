
import React, { useState } from "react";
import { Document } from "@/lib/data";
import { FileUpload } from "@/components/ui/file-upload";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface DocumentListProps {
  categories: { category: string; documents: Document[] }[];
  className?: string;
}

const DocumentList: React.FC<DocumentListProps> = ({ categories, className }) => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [uploadedDocuments, setUploadedDocuments] = useState<Record<string, File>>({});
  const [searchTerm, setSearchTerm] = useState("");

  const handleFileChange = (documentId: string, file: File | null) => {
    if (file) {
      setUploadedDocuments((prev) => ({
        ...prev,
        [documentId]: file,
      }));
      
      // Update document status (in a real app, this would be an API call)
      const newCategories = categories.map(category => ({
        ...category,
        documents: category.documents.map(doc => 
          doc.id === documentId 
            ? { ...doc, status: "uploaded" as const, file, uploadDate: new Date().toISOString() }
            : doc
        )
      }));
      
      // In a real application, you would save this to a database
      console.log("Updated categories:", newCategories);
    } else {
      const { [documentId]: _, ...rest } = uploadedDocuments;
      setUploadedDocuments(rest);
    }
  };

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredCategories = categories.map(category => ({
    ...category,
    documents: category.documents.filter(doc =>
      doc.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.documents.length > 0);

  const handleVerifyAll = () => {
    toast.success("Verification process initiated for all uploaded documents");
  };

  return (
    <Card className={cn("animate-fade-in", className)}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold">Document List</CardTitle>
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search documents..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="grid" className="w-full">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="grid">Grid View</TabsTrigger>
              <TabsTrigger value="list">List View</TabsTrigger>
            </TabsList>
            <button 
              onClick={handleVerifyAll}
              className="text-sm text-primary hover:underline transition-all"
            >
              Verify all uploaded documents
            </button>
          </div>

          <TabsContent value="grid" className="space-y-4">
            {filteredCategories.map((category) => (
              <div key={category.category} className="rounded-md border overflow-hidden">
                <div 
                  className="flex justify-between items-center p-4 bg-muted/30 cursor-pointer"
                  onClick={() => toggleCategory(category.category)}
                >
                  <h3 className="font-medium">{category.category}</h3>
                  <button>
                    {expandedCategories.includes(category.category) ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                </div>
                
                {expandedCategories.includes(category.category) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    {category.documents.map((document) => (
                      <FileUpload
                        key={document.id}
                        documentName={document.name}
                        status={document.status}
                        onFileChange={(file) => handleFileChange(document.id, file)}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </TabsContent>
          
          <TabsContent value="list">
            <div className="space-y-4">
              {filteredCategories.map((category) => (
                <div key={category.category} className="rounded-md border overflow-hidden">
                  <div 
                    className="flex justify-between items-center p-4 bg-muted/30 cursor-pointer"
                    onClick={() => toggleCategory(category.category)}
                  >
                    <h3 className="font-medium">{category.category}</h3>
                    <button>
                      {expandedCategories.includes(category.category) ? (
                        <ChevronUp className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                  
                  {expandedCategories.includes(category.category) && (
                    <div className="divide-y">
                      {category.documents.map((document) => (
                        <div key={document.id} className="flex justify-between items-center p-4 hover:bg-muted/10">
                          <div className="flex-1">
                            <p className="font-medium">{document.name}</p>
                            {document.uploadDate && (
                              <p className="text-xs text-muted-foreground">
                                Uploaded on: {new Date(document.uploadDate).toLocaleDateString()}
                              </p>
                            )}
                          </div>
                          <div className="w-56">
                            <FileUpload
                              documentName={document.name}
                              status={document.status}
                              onFileChange={(file) => handleFileChange(document.id, file)}
                              className="h-auto py-2"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default DocumentList;
