import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";

interface StepCardProps {
  step: string;
  title: string;
  subtitle: string;
  description: string[];
  icon: React.ReactNode;
  color: "saber" | "ter" | "executar" | "potencializar";
  className?: string;
}

const colorVariants = {
  saber: "border-stepSaber/50 hover:border-stepSaber",
  ter: "border-stepTer/50 hover:border-stepTer", 
  executar: "border-stepExecutar/50 hover:border-stepExecutar",
  potencializar: "border-stepPotencializar/50 hover:border-stepPotencializar",
};

const iconBgVariants = {
  saber: "bg-stepSaber",
  ter: "bg-stepTer",
  executar: "bg-stepExecutar", 
  potencializar: "bg-stepPotencializar",
};

const StepCard = ({ step, title, subtitle, description, icon, color, className }: StepCardProps) => {
  return (
    <Card className={cn(
      "h-full transition-all duration-300 hover:shadow-lg border-2",
      colorVariants[color],
      className
    )}>
      <CardHeader className="text-center pb-4">
        <div className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
          iconBgVariants[color]
        )}>
          <div className="text-white text-2xl">
            {icon}
          </div>
        </div>
        <CardTitle className="text-lg font-bold text-foreground">
          {step} - {title}
        </CardTitle>
        <p className="text-sm font-medium text-muted-foreground italic">
          "{subtitle}"
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {description.map((item, index) => (
            <div key={index} className="flex items-start space-x-2">
              <span className="text-muted-foreground text-sm mt-1">–</span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StepCard;