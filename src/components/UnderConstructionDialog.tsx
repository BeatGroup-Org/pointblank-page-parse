import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const UnderConstructionDialog = ({ open, onOpenChange }: Props) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-sm text-center">
      <div className="flex flex-col items-center gap-4 py-4">
        <img src="/favicon.png" alt="Mousike" className="w-12 h-12" />
        <DialogTitle className="text-xl font-bold text-foreground">
          Sezione in costruzione
        </DialogTitle>
        <p className="text-muted-foreground text-sm">
          Questa sezione sarà disponibile a breve.
        </p>
        <Button className="rounded-full px-8 mt-2" onClick={() => onOpenChange(false)}>
          Chiudi
        </Button>
      </div>
    </DialogContent>
  </Dialog>
);

export default UnderConstructionDialog;
