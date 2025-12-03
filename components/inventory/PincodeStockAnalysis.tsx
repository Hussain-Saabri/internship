"use client";

import { Card, CardContent } from "@/components/ui/card";
import { PincodeCard } from "./PincodeCard";
import Link from "next/link";
export function PincodeStockAnalysis() {
  const pincodeData = [
    { id: "400001", name: "Mumbai Central", drr: "850/day", value: "₹125K", doi: "15d", stockouts: 2 },
    { id: "110001", name: "Delhi Central", drr: "720/day", value: "₹98K", doi: "12d", stockouts: 5 },
    { id: "560001", name: "Bangalore MG Road", drr: "680/day", value: "₹86K", doi: "18d", stockouts: 1 },
    { id: "500001", name: "Hyderabad Abids", drr: "580/day", value: "₹72K", doi: "14d", stockouts: 3 },
    { id: "411001", name: "Pune Shivaji Nagar", drr: "520/day", value: "₹54K", doi: "10d", stockouts: 4 },

  ];

  return (
    <Card className="rounded-[12px] border border-gray-200 bg-white  h-full">
      <CardContent className="p-6">
        <h3 className="text-sm font-semibold text-gray-800 tracking-wide mb-6">
          Pincode-Level Stock Analysis
        </h3>

        {/* List of cards */}
        <div className="flex flex-col gap-3">
          {pincodeData.map((item) => (
            <Link key={item.id} href={`/inventory/pincode/${item.id}?name=${encodeURIComponent(item.name)}`} className="block group">
              <PincodeCard data={item} />
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
