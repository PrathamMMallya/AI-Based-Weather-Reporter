export const useToast = () => {
  const toast = (msg: string) => {
    alert(msg); // simple alert for demo
  };

  return { toast };
};
