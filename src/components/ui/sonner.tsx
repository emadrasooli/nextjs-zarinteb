"use client";

import { useTheme } from "next-themes";
import { useLocale } from "next-intl";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();
  const locale = useLocale();
  const isLTR = locale === "en";

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      dir={isLTR ? "ltr" : "rtl"}
      className={`toaster group ${isLTR ? "font-montserrat" : "font-vazirmatn"}`}
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-gradient-to-r group-[.toaster]:from-white group-[.toaster]:via-yellow-50 group-[.toaster]:to-yellow-100 group-[.toaster]:text-foreground group-[.toaster]:border group-[.toaster]:border-border/80 group-[.toaster]:shadow-sm group-[.toaster]:rounded-xl group-[.toaster]:px-4 group-[.toaster]:py-3 group-[.toaster]:backdrop-blur supports-[backdrop-filter]:bg-background/90 data-[type=success]:border-primary/30 data-[type=success]:bg-primary/10 data-[type=error]:border-destructive/30 data-[type=error]:bg-destructive/10 group-[.toaster]:text-base group-[.toaster]:leading-snug",
          title: "group-[.toast]:text-base group-[.toast]:font-semibold",
          description:
            "group-[.toast]:text-[15px] group-[.toast]:text-muted-foreground",
          icon: "group-[.toast]:text-primary group-[.toast]:[&>svg]:h-5 group-[.toast]:[&>svg]:w-5",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground group-[.toast]:rounded-md",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground group-[.toast]:rounded-md",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
