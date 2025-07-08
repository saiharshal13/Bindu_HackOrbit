
import React from "react";
import { Artisan } from "@/types";
import { cn } from "@/lib/utils";
import { InfoIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ArtisanBadgeProps {
  artisan: Artisan;
  className?: string;
  showTooltip?: boolean;
}

export function ArtisanBadge({ 
  artisan, 
  className,
  showTooltip = true 
}: ArtisanBadgeProps) {
  const content = (
    <div className={cn("flex items-center gap-2", className)}>
      <img 
        src={artisan.image} 
        alt={artisan.name} 
        className="w-6 h-6 rounded-full object-cover"
      />
      <div className="text-sm">
        <span>Crafted by </span>
        <span className="font-medium">{artisan.name}</span>
      </div>
      {showTooltip && (
        <Tooltip>
          <TooltipTrigger asChild>
            <InfoIcon className="h-4 w-4 text-muted-foreground cursor-pointer" />
          </TooltipTrigger>
          <TooltipContent className="w-60 p-3">
            <div className="space-y-2">
              <div className="font-medium">{artisan.name}</div>
              <div className="text-xs text-muted-foreground">{artisan.location}</div>
              <p className="text-sm">{artisan.bio}</p>
            </div>
          </TooltipContent>
        </Tooltip>
      )}
    </div>
  );

  return content;
}
