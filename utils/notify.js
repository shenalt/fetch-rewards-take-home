import { toast } from 'react-hot-toast';
  
  // Create a toast
  export const notify = (isSuccess) => {
    if(isSuccess){
      toast.success("Form Successfully Submitted!");
    }
    else{
      toast.error("Something Went Wrong!");
    }
  }