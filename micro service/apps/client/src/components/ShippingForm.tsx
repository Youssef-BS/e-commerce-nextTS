import { ShippingFormInputs } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { ShippingFormSchema } from "@/types";
import Input from "./Input";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const ShippingForm = ({setShippingForm} : {
    setShippingForm : (data:ShippingFormInputs) => void 
}) => {

    const {register , handleSubmit , formState : {errors}} = useForm<ShippingFormInputs>({
        resolver : zodResolver(ShippingFormSchema)
    }) ;


    const router = useRouter()

    const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
       
        setShippingForm(data)
        router.push("/cart?step=3" , {scroll : false}) ;
    }

    return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(handleShippingForm)}>
       <Input<ShippingFormInputs> label="name" 
        name = "name"
        type="text"
        placeholder="Djo .."
        register={register}
        error={errors.name}
        />
       <Input<ShippingFormInputs> label="email" 
        name = "email"
        type="email"
        placeholder="Djo@gmail.."
        register={register}
        error={errors.email}
        />
       <Input<ShippingFormInputs> label="Phone" 
        name = "phone"
        type="text"
        placeholder="+216 ... "
        register={register}
        error={errors.phone}
        />
       <Input<ShippingFormInputs> label="Adresse" 
        name = "address"
        type="text"
        placeholder="2 Rue Malasine"
        register={register}
        error={errors.address}
        />
       <Input<ShippingFormInputs> label="City" 
        name = "city"
        type="text"
        placeholder="bizerte"
        register={register}
        error={errors.city}
        />
        <button
        type="submit"  
        className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2 h-max">Continue 
          <ArrowRight  className="w-3 h-3"/>
        </button>
        </form>
    );
}

export default ShippingForm;