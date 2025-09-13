import { PaymentFormInputs , paymentFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const PaymentForm = () => {

    const {register , handleSubmit , formState : {errors}} = useForm<PaymentFormInputs>({
        resolver : zodResolver(paymentFormSchema)
    }) ;


    const router = useRouter()

    const handlePayment: SubmitHandler<PaymentFormInputs> = (data) => {
       
    }

    return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(handlePayment)}>
      
      <Input<PaymentFormInputs>
        label= "Name on card"
        name="cardHolder"
        type="text"
        placeholder="cardHolder"
        register={register}


        />
        <button
        type="submit"  
        className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2 h-max">Continue 
          <ArrowRight  className="w-3 h-3"/>
        </button>
        </form>
    );
}

export default PaymentForm;