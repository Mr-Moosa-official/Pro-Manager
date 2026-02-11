"use client";

import * as React from "react";
import { ChevronsUpDown, Building, Check, PlusCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const workspaces = [
  {
    value: "acme-inc",
    label: "Acme Inc.",
  },
  {
    value: "stark-industries",
    label: "Stark Industries",
  },
  {
    value: "wayne-enterprises",
    label: "Wayne Enterprises",
  },
];

export default function WorkspaceSwitcher() {
  const [selectedWorkspace, setSelectedWorkspace] = React.useState(workspaces[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-[220px] justify-start text-left font-normal"
        >
          <Building className="mr-2 h-4 w-4" />
          <span className="truncate">{selectedWorkspace.label}</span>
          <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[220px]">
        <DropdownMenuLabel>Workspaces</DropdownMenuLabel>
        <DropdownMenuGroup>
          {workspaces.map((workspace) => (
            <DropdownMenuItem
              key={workspace.value}
              onSelect={() => {
                setSelectedWorkspace(workspace);
              }}
            >
              <Building className="mr-2 h-4 w-4" />
              <span>{workspace.label}</span>
              <Check
                className={cn(
                  "ml-auto h-4 w-4",
                  selectedWorkspace.value === workspace.value
                    ? "opacity-100"
                    : "opacity-0"
                )}
              />
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Workspace
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
