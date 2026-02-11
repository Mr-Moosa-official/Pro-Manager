"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface InviteMemberDialogProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

export function InviteMemberDialog({ show, setShow }: InviteMemberDialogProps) {
    const { toast } = useToast();
    const [email, setEmail] = useState('');

    const handleInvite = () => {
        if (!email || !email.includes('@')) {
            toast({
                variant: 'destructive',
                title: 'Invalid Email',
                description: 'Please enter a valid email address.',
            });
            return;
        }
        
        toast({
            title: 'Invitation Sent',
            description: `An invitation has been sent to ${email}. (This is a demo).`
        });
        setEmail('');
        setShow(false);
    }

    return (
        <Dialog open={show} onOpenChange={setShow}>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
            <DialogTitle>Invite a team member</DialogTitle>
            <DialogDescription>
                Enter the email of the person you want to invite to this project. They will receive an email with an invitation link.
            </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                Email
                </Label>
                <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="col-span-3"
                />
            </div>
            </div>
            <DialogFooter>
                <Button type="button" variant="ghost" onClick={() => setShow(false)}>Cancel</Button>
                <Button type="submit" onClick={handleInvite}>Send Invitation</Button>
            </DialogFooter>
        </DialogContent>
        </Dialog>
    );
}
