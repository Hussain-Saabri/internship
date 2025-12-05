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
    <Card
      className="
        w-full 
        rounded-2xl 
        bg-white 
        border border-gray-200
        shadow-none
      "
    >
      <CardContent className="p-5 md:p-6">
        <div
          className="
            flex flex-col md:flex-row 
            md:items-center 
            md:justify-between 
            gap-4 md:gap-6
          "
        >
          {/* LEFT SIDE */}
          <div className="flex items-start gap-3 md:gap-4">

            <div
              className="
                p-3 md:p-3.5 
                rounded-xl 
                bg-[#25B990]/10 
                border border-[#25B990]/20
                flex items-center justify-center
              "
            >
              <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#25B990]" />
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                {name}
              </h2>

              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Pincode:
                </span>

                <span
                  className="
                    text-sm 
                    font-semibold 
                    text-gray-900
                    bg-gray-100 
                    px-2 py-0.5 
                    rounded-md
                  "
                >
                  {pincode}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="text-left md:text-right">
            <p className="text-[9px] md:text-[10px] font-semibold uppercase tracking-wide text-gray-500">
              Serviced By
            </p>

            <p className="text-base md:text-lg font-bold text-gray-900">
              {warehouse} WH
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
