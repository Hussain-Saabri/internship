"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export function PincodeCard({
  name,
  pincode,
  warehouse,
}: {
  name?: string;
  pincode?: string;
  warehouse?: string;
}) {
  return (
    <Card className="bg-gradient-to-br from-[#F4ECFF] to-[#E8E2FF] border border-white/40 shadow-[0_2px_20px_rgb(0,0,0,0.04)] rounded-2xl overflow-hidden relative">
      {/* Faint Overlay Gradient for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

      <CardContent className="p-6 relative z-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          {/* LEFT SIDE */}
          <div className="flex items-start gap-3">
            <div className="p-2.5 bg-white/60 rounded-xl shadow-sm border border-white/60 backdrop-blur-sm">
              <MapPin className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 tracking-tight">{name}</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Pincode:</span>
                <span className="text-sm font-mono font-bold text-gray-700 bg-white/50 px-2 py-0.5 rounded-md border border-white/40">
                  {pincode}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="mt-2 md:mt-0 md:text-right pl-12 md:pl-0 border-t border-indigo-100/50 pt-3 md:border-none md:pt-0">
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
              Serviced by
            </p>
            <div className="flex items-center gap-2 md:justify-end">
              <span className="text-base font-bold text-gray-900 tracking-tight">
                {warehouse} WH
              </span>
            </div>
          </div>

        </div>
      </CardContent>
    </Card>
  );
}
