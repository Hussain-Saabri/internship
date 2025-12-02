import { cn } from "@/lib/utils";

export const PlatformBadge = ({ platform }: { platform: string }) => {
    const badgeStyles = {
        all: "bg-gray-200 text-gray-800",
        blinkit: "bg-blinkit text-black",
        zepto: "bg-zepto text-white",
        instamart: "bg-instamart text-white",
    };

    return (
        <div
            className={cn(
                "flex h-4 w-4 items-center justify-center rounded text-xs font-bold leading-none",
                badgeStyles[platform as keyof typeof badgeStyles]
            )}
        >
            {platform.charAt(0).toUpperCase()}
        </div>
    );
};
