"use client"
import { KPICard } from "@/components/profitability/KPICard";
import { RevenueBreakdown } from "@/components/profitability/RevenueBreakdown";
import {ExpenseWaterfall} from "@/components/profitability/ExpenseWaterfall";
import { CalendarIcon} from "@/lib/flaticons";
import DeductionPenalties from "@/components/profitability/DeductionPenalties";
import { ReceivablesAgeingDistribution } from "@/components/profitability/ReceivablesAgeingDistribution";
import { OutstandingRecievableDetails } from "@/components/profitability/OutstandingRecievableDetails";
import {  PlatformWiseProfitabilityTable } from "@/components/profitability/PlatformWiseProfitabilityTable";
import { CityLevelProfitabilityTable } from "@/components/profitability/CityLevelProfitabilityTable";
import { CashFlowSnapshot } from "@/components/profitability/CashFlowSnapshot";
import ProfitabilityFilters from "@/components/profitability/ProfitabilityFilters";

export default function ProfitabilityPage() {
    return(
    <div className="space-y-4">
            <ProfitabilityFilters/>      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            <KPICard
                    title="Net Revenue"
                    value="₹18.5M"
                    icon={<CalendarIcon size={16} className="text-[#25b990]" strokeWidth={2} />}
                    subtitle="days of inventory"
                    valueColor="green"
            />
            <KPICard
                    title="Gross Margin"
                    value="₹18.5M"
                    icon={<CalendarIcon size={16} className="text-[#25b990]" strokeWidth={2} />}
                    subtitle="(Sales - COGS) / Sales"
                    valueColor="green"
            />
             <KPICard
                    title="Contribution Margin"
                    value="₹18.5M"
                    icon={<CalendarIcon size={16} className="text-[#25b990]" strokeWidth={2} />}
                    subtitle="After logistics & fees"
                    valueColor="green"
            />
             <KPICard
                    title="Deductions"
                    value="₹18.5M"
                    icon={<CalendarIcon size={16} className="text-[#25b990]" strokeWidth={2} />}
                    subtitle="Penalties & Returns"
                    valueColor="green"
            />
             <KPICard
                    title="Receivables"
                    value="₹18.5M"
                    icon={<CalendarIcon size={16} className="text-[#25b990]" strokeWidth={2} />}
                    subtitle="Outstanding"
                    valueColor="green"
            />  
        </div>
        <div>
        <div className="grid lg:grid-cols-2 gap-4">
                    {/* Revenue Breakdown */}
                    <div className="">
                      <RevenueBreakdown/>
                    </div>
            
                    {/* Expense Waterfall (Where Money Flows) */}
                    <div className="">
                      <ExpenseWaterfall/>  
                    </div>     
        </div>
        </div>
        <div className="w-full">
            <DeductionPenalties /> 
        </div>
        {/*  */}
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

            {/* Box 1 — always 1 column on mobile/tablet */}
            <div className="col-span-1">
                <ReceivablesAgeingDistribution />
            </div>

            {/* Box 2 — full width on mobile/tablet, 2 columns on desktop */}
            <div className="col-span-1 lg:col-span-2">
                <OutstandingRecievableDetails />
            </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <PlatformWiseProfitabilityTable />
            <CityLevelProfitabilityTable />
        </div>

        {/* Cash Flow Snapshot (Monthly Trend) */}
        <div className="w-full">
            <div>
                <CashFlowSnapshot/>
            </div>
            
        </div>
    </div>
        

        
    );
}