"use client"
import DynamicCustomPage from "@/app/components/dynamicCustomJacket";
import { useParams } from "next/navigation";

const DynamicPage = () => {
  const params = useParams();
  
  // Safely handle `params.name` being either `string | string[] | undefined`
  const rawName = params.name; 
  const name = Array.isArray(rawName)
    ? decodeURIComponent(rawName.join(" ")) // Handle array case
    : rawName
    ? decodeURIComponent(rawName) // Decode string case
    : undefined;

  return (
   
      <DynamicCustomPage name={name} /> 

  );
};

export default DynamicPage;
