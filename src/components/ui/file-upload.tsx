
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Upload, Check, AlertCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface FileUploadProps extends React.HTMLAttributes<HTMLDivElement> {
  onFileChange: (file: File | null) => void;
  status: "pending" | "uploaded" | "verified";
  documentName: string;
}

export function FileUpload({
  className,
  onFileChange,
  status,
  documentName,
  ...props
}: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files[0]);
    }
  };

  const handleFiles = (file: File) => {
    setIsUploading(true);
    // Simulate upload delay
    setTimeout(() => {
      setFile(file);
      onFileChange(file);
      setIsUploading(false);
      toast.success(`${documentName} uploaded successfully`);
    }, 1500);
  };

  const getStatusColor = () => {
    if (status === "verified") return "text-green-500";
    if (status === "uploaded") return "text-amber-500";
    return "text-gray-400";
  };

  const getStatusIcon = () => {
    if (isUploading) return <Loader2 className="h-5 w-5 animate-spin" />;
    if (status === "verified") return <Check className="h-5 w-5" />;
    if (status === "uploaded") return <AlertCircle className="h-5 w-5" />;
    return <Upload className="h-5 w-5" />;
  };

  const getStatusText = () => {
    if (isUploading) return "Uploading...";
    if (status === "verified") return "Verified";
    if (status === "uploaded") return "Uploaded";
    return "Upload Document";
  };

  return (
    <div
      className={cn(
        "relative w-full rounded-md overflow-hidden transition-all group border",
        isDragging
          ? "border-primary border-dashed bg-primary/5"
          : "border-gray-200",
        status === "verified" ? "bg-green-50" : "",
        status === "uploaded" ? "bg-amber-50" : "",
        className
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      {...props}
    >
      <div className="flex flex-col items-center justify-center py-4 px-6 text-center space-y-2">
        <div className={`rounded-full p-2 ${getStatusColor()} bg-opacity-10`}>
          {getStatusIcon()}
        </div>
        
        <div className="space-y-1">
          <p className="text-sm font-medium">{file ? file.name : documentName}</p>
          <p className="text-xs text-gray-500 max-w-xs truncate">
            {file ? `${(file.size / 1024).toFixed(2)} KB` : "PDF, DOCX, JPG (max. 10MB)"}
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant={file ? "outline" : "default"}
            className={cn(
              "transition-all",
              status === "verified" ? "bg-green-500 hover:bg-green-600" : "",
              status === "uploaded" ? "bg-amber-500 hover:bg-amber-600" : ""
            )}
            onClick={() => document.getElementById(`file-upload-${documentName}`)?.click()}
            disabled={isUploading}
          >
            <span className={cn("flex items-center gap-1", getStatusColor())}>
              {getStatusText()}
            </span>
          </Button>
          
          {file && (
            <Button
              size="sm"
              variant="outline"
              className="text-destructive hover:text-destructive"
              onClick={() => {
                setFile(null);
                onFileChange(null);
              }}
              disabled={isUploading}
            >
              Remove
            </Button>
          )}
        </div>
      </div>
      
      <input
        type="file"
        id={`file-upload-${documentName}`}
        className="hidden"
        onChange={handleFileChange}
        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
      />
    </div>
  );
}
