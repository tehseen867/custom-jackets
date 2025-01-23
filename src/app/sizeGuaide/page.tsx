// app/size-guide/page.tsx
import { FaRulerVertical, FaTshirt, FaUser } from "react-icons/fa";
import AnyQues from "../components/anyQues";

export default function SizeGuide() {
  return (
    <div>
    <div className="min-h-screen mt-20 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Measurements & Size Guide
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Find the perfect fit for your outfit with our detailed size guide.
        </p>
      </div>

      {/* Measurements Guide Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          How to Measure
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
  {/* Step 1: Chest/Bust */}
  <div className="bg-white p-8 rounded-lg shadow-md text-center">
    <div className="flex justify-center mb-4">
      <FaTshirt className="text-4xl text-blue-600" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-4">Chest/Bust</h3>
    <p className="text-gray-600">
      Measure around the fullest part of your chest/bust, keeping the tape
      measure horizontal.
    </p>
  </div>

  {/* Step 2: Waist */}
  <div className="bg-white p-8 rounded-lg shadow-md text-center">
    <div className="flex justify-center mb-4">
      <FaRulerVertical className="text-4xl text-green-600" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-4">Waist</h3>
    <p className="text-gray-600">
      Measure around your natural waistline, keeping the tape measure snug but
      not tight.
    </p>
  </div>

  {/* Step 3: Hips */}
  <div className="bg-white p-8 rounded-lg shadow-md text-center">
    <div className="flex justify-center mb-4">
      <FaUser className="text-4xl text-purple-600" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-4">Hips</h3>
    <p className="text-gray-600">
      Measure around the fullest part of your hips, keeping the tape measure
      horizontal.
    </p>
  </div>

  {/* Step 4: Shoulder */}
  <div className="bg-white p-8 rounded-lg shadow-md text-center">
    <div className="flex justify-center mb-4">
      <FaRulerVertical className="text-4xl text-yellow-600" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-4">Shoulder</h3>
    <p className="text-gray-600">
      Measure from the edge of one shoulder to the edge of the other shoulder,
      across the back.
    </p>
  </div>

  {/* Step 5: Sleeve */}
  <div className="bg-white p-8 rounded-lg shadow-md text-center">
    <div className="flex justify-center mb-4">
      <FaRulerVertical className="text-4xl text-red-600" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-4">Sleeve</h3>
    <p className="text-gray-600">
      Measure from the shoulder edge to the wrist for full sleeve length.
    </p>
  </div>
</div>
      </div>

      {/* Size Guide Tables */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Size Guide
        </h2>
<div className="flex flex-col gap-y-20">
        {/* Men's Size Guide */}
        <div >
          <h3 className="text-4xl font-bold text-gray-900 my-10 tracking-wider">Men&apos;s Outwear</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr >
                  <th className="px-6 py-3 text-center border text-lg font-semibold text-gray-900">
                    jacket Size
                  </th>
                  <th className="px-6 py-3 text-center border text-lg font-semibold text-gray-900">                    US Size
                  </th>
                  <th className="px-6 py-3 text-center border text-lg font-semibold text-gray-900">
                    UK Size
                  </th>
                  <th className="px-6 py-3 text-center border text-lg font-semibold text-gray-900">
                    Chest (in/cm)
                  </th>
                  <th className="px-6 py-3 text-center border text-lg font-semibold text-gray-900">
                    Waist (in/cm)
                  </th>
                  <th className="px-6 py-3 text-center border text-lg font-semibold text-gray-900">
                    Sleeves (in/cm)
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { size: "XS",Us:"34",UK:"34", chest: "33-34 / 86.5-89", waist: "29-30 / 76-78.5", sleeves: "25 / 63.5" },
                  { size: "S",Us:"36",UK:"36", chest: "35-36 / 91.5-94", waist: "31-32 / 81.5-84", sleeves: "25.5 / 65" },
                  { size: "M",Us:"38",UK:"38", chest: "37-38 / 96.5-99", waist: "33-34 / 86.5-89", sleeves: "25.5 / 65" },
                  { size: "L",Us:"40",UK:"40", chest: "39-40 / 101.5-104", waist: "35-36 / 91.5-94", sleeves: "26 / 66" },
                  { size: "XL",Us:"42",UK:"42", chest: "41-42 / 106.5-109", waist: "37-38 / 96.5-99", sleeves: "26.5 / 67.5" },
                  { size: "2XL",Us:"44",UK:"44", chest: "43-44 / 112-114.5", waist: "39-40 / 101.5-104", sleeves: "27 / 68.5" },
                  { size: "3XL",Us:"46",UK:"46", chest: "45-46 / 117-119.5", waist: "41-42 / 106.5-109", sleeves: "27 / 68.5" },
                  { size: "4XL",Us:"48",UK:"48", chest: "47-48 / 122-127", waist: "43-44 / 112-117", sleeves: "27.5 / 70" },
                ].map((row, index) => (
                  <tr key={index} className="border-b bg-gray-100 border-gray-200">
                    <td className="px-6 py-4 border text-[15px] text-center  font-bold">{row.size}</td>
                    <td className="px-6 py-4 border text-[15px] text-center text-gray-700">{row.Us}</td>
                    <td className="px-6 py-4 border text-[15px] text-center text-gray-700">{row.UK}</td>
                    <td className="px-6 py-4 border text-[15px] text-center text-gray-700">{row.chest}</td>
                    <td className="px-6 py-4 border text-[15px] text-center text-gray-700">{row.waist}</td>
                    <td className="px-6 py-4 border text-[15px] text-center text-gray-700">{row.sleeves}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Women's Size Guide */}
        <div>
          <h3 className="text-4xl font-bold text-gray-900 my-10 tracking-wider">Women&apos;s Outwear</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr>
                <th className="px-6 py-3 text-center border text-lg font-semibold text-gray-900">
                    Jacket Size
                  </th>
                  <th className="px-6 py-3 text-center border text-lg font-semibold text-gray-900">
                    US Size
                  </th>
                   <th className="px-6 py-3 text-center border text-lg font-semibold text-gray-900">
                    UK Size
                  </th>
                   <th className="px-6 py-3 text-center border text-lg font-semibold text-gray-900">
                    Bust (in/cm)
                  </th>
                   <th className="px-6 py-3 text-center border text-lg font-semibold text-gray-900">
                    Waist (in/cm)
                  </th>
                   <th className="px-6 py-3 text-center border text-lg font-semibold text-gray-900">
                    Hips (in/cm)
                  </th>
                   <th className="px-6 py-3 text-center border text-lg font-semibold text-gray-900">
                    Sleeves (in/cm)
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { size: "XXS",US:"0",UK:"2", bust: "31-32 / 79-83", waist: "25-26 / 63-67", hips: "33-34 / 83-87" , sleeves:"23.5 / 60" },
                  { size: "XS",US:"0-2",UK:"4-6", bust: "34-34 / 84-88", waist: "27-28 / 68-72", hips: "35-36 / 88-92" , sleeves:"24 / 61"},
                  { size: "S",US:"4-6",UK:"8-10", bust: "35-36 / 89-93", waist: "29-30 / 73-77", hips: "37-38 / 93-97", sleeves:"24.5 / 62" },
                  { size: "M",US:"8-10",UK:"12-14", bust: "37-38 / 94-98", waist: "31-32 / 78-82", hips: "39-40 / 98-102" , sleeves:"25 / 63.5"},
                  { size: "L",US:"12-14",UK:"16-18", bust: "39-40 / 99-103", waist: "33-34 / 83-87", hips: "41-42 / 103-107" , sleeves:"25.5 / 64.5"},
                  { size: "XL",US:"16-18",UK:"20-22", bust: "42-44 / 106-112", waist: "36-38 / 91-97", hips: "44-46 / 111-117" , sleeves:"26 / 66"},
                  { size: "2XL",US:"20-22",UK:"24-26", bust: "46-48 / 116-122", waist: "40-42 / 101-107", hips: "48-50 / 121-127" , sleeves:"26 / 66"},
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-200 bg-gray-100">
                    <td className="px-6 py-4 border text-[15px] text-center  font-bold">{row.size}</td>
                    <td className="px-6 py-4 border text-[15px] text-center text-gray-700">{row.US}</td>
                    <td className="px-6 py-4 border text-[15px] text-center text-gray-700">{row.UK}</td>
                    <td className="px-6 py-4 border text-[15px] text-center text-gray-700">{row.bust}</td>
                    <td className="px-6 py-4 border text-[15px] text-center text-gray-700">{row.waist}</td>
                    <td className="px-6 py-4 border text-[15px] text-center text-gray-700">{row.hips}</td>
                    <td className="px-6 py-4 border text-[15px] text-center text-gray-700">{row.sleeves}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Men's footwear*/}
 <div>
          <h3 className="text-4xl font-bold text-gray-900 my-10 tracking-wider">Men&apos;s Footwear</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr>
                <th className="px-6 py-3 text-center border text-lg font-semibold text-gray-900">
                   US
                  </th>
                  <th className="px-6 py-3 text-center border text-lg font-semibold text-gray-900">
                  EU
                  </th>
                   <th className="px-6 py-3 text-center border text-lg font-semibold text-gray-900">
                    UK
                  </th>
                   <th className="px-6 py-3 text-center border text-lg font-semibold text-gray-900">
                    Foot length (in)
                  </th>
                   <th className="px-6 py-3 text-center border text-lg font-semibold text-gray-900">
                   Foot length (cm)
                  </th>
            
                </tr>
              </thead>
              <tbody>
                {[
                  {footLenCm:"24.8 ", footLengIn:"9.76 ", EU:"40", US:"7",UK:"6", },
                  {footLenCm:"25.1 ", footLengIn:"9.88 ", EU:"40.5", US:"7.5",UK:"6.5", },
                  {footLenCm:"25.4 ", footLengIn:"10 ", EU:"41", US:"8",UK:"7", },
                  {footLenCm:"25.7 ", footLengIn:"10.12 ", EU:"41.5", US:"8.5",UK:"7.5",},
                  {footLenCm:"26 ", footLengIn:"10.24 ", EU:"42", US:"9",UK:"8", },
                  {footLenCm:"26.3 ", footLengIn:"10.35 ", EU:"42.5", US:"9.5",UK:"8.5", },
                  {footLenCm:"26.7 ", footLengIn:"10.51 ", EU:"43", US:"10",UK:"9", },
                  {footLenCm:"27", footLengIn:"10.63 ", EU:"43.5", US:"10.5",UK:"9.5", },
                  {footLenCm:"27.3 ", footLengIn:"10.75 ", EU:"44", US:"11",UK:"10", },
                  {footLenCm:"27.6 ", footLengIn:"10.87 ", EU:"44.5", US:"11.5",UK:"10.5", },
                  {footLenCm:"27.9 ", footLengIn:"10.98 ", EU:"45", US:"12",UK:"11", },
                  {footLenCm:"28.3 ", footLengIn:"11.14 ", EU:"45.5", US:"12.5",UK:"11.5", },
                  {footLenCm:"28.6 ", footLengIn:"11.26 ", EU:"46", US:"13",UK:"12", },
                  {footLenCm:"28.9 ", footLengIn:"11.38 ", EU:"46.5", US:"13.5",UK:"12.5", },
                  {footLenCm:"29.3 ", footLengIn:"11.54 ", EU:"47", US:"14",UK:"13", },
                  {footLenCm:"29.7 ", footLengIn:"11.69 ", EU:"47.5", US:"14.5",UK:"13.5", },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-200 bg-gray-100">
                    <td className="px-16 py-4 border text-[15px] text-center text-gray-700">{row.US}</td>
                    <td className="px-16 py-4 border text-[15px] text-center text-gray-700">{row.EU}</td>
                    <td className="px-16 py-4 border text-[15px] text-center text-gray-700">{row.UK}</td>
                    <td className="px-10 py-4 border text-[15px] text-center text-gray-700">{row.footLengIn}</td>
                    <td className="px-10 py-4 border text-[15px] text-center text-gray-700">{row.footLenCm}</td>
                  
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>
    </div>
      <AnyQues/>
    </div>
  );
}