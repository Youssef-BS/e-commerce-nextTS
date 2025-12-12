import { PaymentFormInputs , paymentFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
        placeholder="test test .."
        register={register}
        error={errors.cardHolder}
        />

       <Input 
       label="Card Number"
       name="cardNumber"
       type="text"
       placeholder="12234.."
       register={register}
       error={errors.cardNumber}

       />
       <Input 
       label="Experation Date"
       name="expirationDate"
       type="text"
       placeholder="01/32"
       register={register}
       error = {errors.expirationDate}

       />
       <Input 
       label="CVV"
       name="cvv"
       type="text"
       placeholder="123"
       register={register}
       error={errors.cvv}

       />

       

      <div className="flex items-center gap-2 mt-4">
        <Image src="/Klarna.png" alt="Klarna" width={50} height={25} className="rounded-md"/>
        <Image src="/cards.png" alt="Cards" width={50} height={25} className="rounded-md"/>
        <Image src="/stripe.png" alt="Klarna" width={50} height={25} className="rounded-md"/>
      </div>

        <button
        type="submit"  
        className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2 h-max">
          Checkout 
          <ShoppingCart  className="w-3 h-3"/>
        </button>
        </form>
    );
}

export default PaymentForm;