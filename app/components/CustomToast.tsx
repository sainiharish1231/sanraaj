// components/CustomToast.tsx
import { toast } from "sonner";

export const customToast = (message: string, type: "success" | "error") => {
  if (type === "success") {
    toast.success(message, {
      duration: 4000,
      position: "top-right",
      style: {
        backgroundColor: "#4caf50",
        marginTop:"30px",
        color: "#ffffff",
        padding: "16px",
        borderRadius: "8px",
      },
    });
  } else {
    toast.error(message, {
      duration: 4000,
      position: "top-right",
      style: {
        backgroundColor: "#f44336",
        color: "#ffffff",
        padding: "16px",
        marginTop:"30px",
        borderRadius: "8px",
      },
    });
  }
};
